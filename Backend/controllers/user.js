const jwt = require("jsonwebtoken");
const User = require("../models/user");
//const sharp = require('sharp');

const crime_1 = require('../models/crime_1');
const crime_2 = require('../models/crime_2');
const crime_3 = require('../models/crime_3');
const crime_4 = require('../models/crime_4');

exports.createUser = async (req, res) => {
  const { FULL_NAME, STATE, PIN_CODE, EMAIL_ID, PASSWORD } = req.body;

  const isNewUser = await User.isThisEmailInUse(EMAIL_ID);
  if (!isNewUser)
    return res.json({
      success: false,
      message: "This email is already in use, try signing in",
    });

  const user = await User({
    FULL_NAME,
    STATE,
    PIN_CODE,
    EMAIL_ID,
    PASSWORD,
  });

  await user.save();

  res.json({ success: true, user });
};

exports.userSignIn = async (req, res) => {
  const { EMAIL_ID, PASSWORD } = req.body;
  const user = await User.findOne({ EMAIL_ID });

  if (!user)
    return res.json({
      success: false,
      message: "user not found with the given email",
    });
  const isMatch = await user.comparePassword(PASSWORD);
  if (!isMatch)
    return res.json({
      success: false,
      message: "email/password does not match",
    });

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  let oldTokens=user.tokens||[];

  if(oldTokens.length)
  {
    oldTokens=oldTokens.filter (t=>{
        const timeDiff= (Date.now()-parseInt(t.signedAt))/1000;
        if(timeDiff<86400)
        {
          return t;

        }
    })
  }

  await User.findByIdAndUpdate(user._id,{tokens:[...oldTokens,{token:token,signedAt:Date.now().toString()}]})

  const userInfo = {
    FULL_NAME: user.FULL_NAME,
    EMAIL_ID: user.EMAIL_ID,
  };
  res.json({ success: true, user, token });
};




exports.signOut = async (req, res) => {
  if (req.headers && req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: 'Authorization fail!' });
    }

    const tokens = req.user.tokens;

    const newTokens = tokens.filter(t => t.token !== token);

    await User.findByIdAndUpdate(req.user._id, { tokens: newTokens });
    res.json({ success: true, message: 'Sign out successfully!' });
  }
};


// exports.searchCrimes = async (req, res) => {
//   const { query } = req.query;

//   try {
//     // Search in crime_1 based on the provided query name
//     const searchResults1 = await crime_1.find({
//       Name: { $regex: new RegExp(query, "i") }
//     }).exec();

//     // Extract sub array from the first search results
//     const subArray = searchResults1[0]?.sub || [];

//     // Search in crime_2 using subArray from crime_1 results
//     const searchResults2 = await crime_2.find({
//       _id: { $in: subArray }
//     }).exec();


//   }
// };

//     // Extract sub array from the second search results
//     const subArray2 = searchResults2.map(entry => entry.sub).flat() || [];

//     // Search in crime_3 using subArray from crime_2 results

    

//       const searchResults3 = await crime_3.find({
//         _id: { $in: subArray2 }
//       }).exec();

//        // Extract sub array from the third search results
//     const subArray3 = searchResults3.map(entry => entry.sub).flat() || [];


//     if(subArray3.length<=0)
//     {
//          subaArray3=subArray2;
//     }

    

   

//    // Search in crime_4 using subArray from crime_3 results
//     const finalResults = await crime_4.find({
//       _id: { $in: subArray3 }
//     }).exec();

//     // Return the final results
//         console.log("Matching documents:", finalResults);

//     res.json(finalResults);
//   } catch (error) {
//     console.error("Error searching crimes:", error);
//     res.status(500).json({ error: "An error occurred while searching crimes." });
//   }
// }


// exports.searchCrimes = async (req, res) => {
//   const { query } = req.query;

//   try {
//     // Search in crime_1 based on the provided query name
//     const searchResults1 = await crime_1.find({
//       Name: { $regex: new RegExp(query, "i") }
//     }).exec();

//     // Extract sub array from the first search results
//     const subArray = searchResults1[0]?.sub || [];
  

//     // Search in crime_2 using subArray from crime_1 results
//     const searchResults2 = await crime_2.find({
//       _id: { $in: subArray }
//     }).exec();

//     // Extract sub array from the second search results
//     const subArray2 = searchResults2.map(entry => entry.sub).flat() || [];

//     // Search in crime_3 using subArray from crime_2 results
//     const searchResults3 = await crime_3.find({
//       _id: { $in: subArray2 }
//     }).exec();

//     // Extract sub array from the third search results
//     const subArray3 = searchResults3.map(entry => entry.sub).flat() || [];

//     // Initialize the final results array
//     let finalResults = [];

//     // Search in crime_4 using subArray from crime_3 results
//     if (subArray3.length > 0) {
//       finalResults = await crime_4.find({
//         _id: { $in: subArray3 }
//       }).exec();
//     } else {
//       // If no subArray3, directly search in crime_4 using subArray2
//       finalResults = await crime_4.find({
//         _id: { $in: subArray2 }
//       }).exec();
//     }

//     // Return the final results
//     console.log("Matching documents:", finalResults);
//     res.json(finalResults);
//   } catch (error) {
//     console.error("Error searching crimes:", error);
//     res.status(500).json({ error: "An error occurred while searching crimes." });
//   }
// };




//   try {
//     const finalResults = await crime_1.find({
//       Name: { $regex: new RegExp(query, "i") }
//     });
  
//     console.log("Matching documents:", finalResults);
  
//     if (finalResults.length > 0) {
//       res.json(finalResults);
//     } else {
//       res.status(404).json({ error: "No results found for the provided query." });
//     }
//   } catch (error) {
//     console.error("Error searching crimes:", error);
//     res.status(500).json({ error: "An error occurred while searching crimes." });
//   }
// };

// exports.example = async (req, res) => {
//   try {
//       // Find all documents in the crime_1 collection
//       const allCrime1Data = await crime_1.find({}).exec();

//       if (allCrime1Data.length > 0) {
//           // Send the data as a JSON response
//           res.json(allCrime1Data);
//       } else {
//           res.status(404).json({ error: "No data found in the crime_1 collection." });
//       }
//   } catch (error) {
//       console.error("Error fetching data:", error);
//       res.status(500).json({ error: "An error occurred while fetching data." });
//   }
// };
//In this code, the example endpoint retrieves all documents from the crime_1 collection and sends them as a JSON response. If no documents are found, it sends a 404 status with an error message. If an error occurs during the database operation, it sends a 500 status with an error message. Make sure to adjust the error handling and error messages as needed for your application.













// exports.searchCrimes = async (req, res) => {
//   const { query } = req.query;

//   try {
//     // Search in crime_1 based on the provided query name
//     const searchResults1 = await crime_1.find({
//       Name: { $regex: new RegExp(query, "i") }
//     }).exec();

//     // Extract sub array from the first search results
//     const subArray = searchResults1[0]?.sub || [];

//     // Search in crime_2 using subArray from crime_1 results
//     const searchResults2 = await crime_2.find({
//       _id: { $in: subArray }
//     }).exec();

//     // Extract names from searchResults2 and create an array
//     const namesArray = searchResults2.map(result => result.Name);

//     // Return the names to the frontend
//     res.json(namesArray);
//   } catch (error) {
//     console.error("Error searching crimes:", error);
//     res.status(500).json({ error: "An error occurred while searching crimes." });
//   }
// };

exports.searchCrimes = async (req, res) => {
  const { query } = req.query;

  try {
    // Search in crime_1 based on the provided query name
    const searchResults1 = await crime_1.find({
      Name: { $regex: new RegExp(query, "i") }
    }).exec();

    // Extract sub array from the first search results
    const subArray = searchResults1[0]?.sub || [];

    // Search in crime_2 using subArray from crime_1 results
    const searchResults2 = await crime_2.find({
      _id: { $in: subArray }
    }).exec();

    // Extract names and descriptions from searchResults2 and create an array of objects
    const resultsArray = searchResults2.map(result => ({
      name: result.Name,
      description: result.Description
    }));

    // Return the results array to the frontend
    res.json(resultsArray);
  } catch (error) {
    console.error("Error searching crimes:", error);
    res.status(500).json({ error: "An error occurred while searching crimes." });
  }
};




exports.searchCrimes2 = async (req, res) => {
  const { query } = req.query;

  try {
    // Search in crime_1 based on the provided query name
    const searchResults2 = await crime_2.find({
      Name: { $regex: new RegExp(query, "i") }
    }).exec();

    // Extract sub array from the first search results
    const subArray = searchResults2[0]?.sub || [];

    // Search in crime_2 using subArray from crime_1 results
    const searchResults3 = await crime_3.find({
      _id: { $in: subArray }
    }).exec();

    if (searchResults3.length > 0) {

    // Extract names from searchResults2 and create an array
    const resultsArray = searchResults3.map(result => ({
      name: result.Name,
      description: result.Description
    }));

    // Return the results array to the frontend
    res.json(resultsArray);
  }
  else {
    const searchResults5 = await crime_4.find({
      _id: { $in: subArray }
    }).exec();

    const resultsArray = searchResults5.map(result => ({
      name: result.Name,
      description: result.Description
    }));
    res.json(resultsArray);
  }
  } catch (error) {
    console.error("Error searching crimes:", error);
    res.status(500).json({ error: "An error occurred while searching crimes." });
  }
};


exports.searchCrimes3 = async (req, res) => {
  const { query } = req.query;

  try {
    // Search in crime_1 based on the provided query name
    const searchResults3 = await crime_3.find({
      Name: { $regex: new RegExp(query, "i") }
    }).exec();

    // Extract sub array from the first search results
    const subArray = searchResults3[0]?.sub || [];

    // Search in crime_2 using subArray from crime_1 results
    const searchResults4 = await crime_4.find({
      _id: { $in: subArray }
    }).exec();

    // Extract names from searchResults2 and create an array
    const resultsArray = searchResults4.map(result => ({
      name: result.Name,
      description: result.Description
    }));

    // Return the results array to the frontend
    res.json(resultsArray);
  } catch (error) {
    console.error("Error searching crimes:", error);
    res.status(500).json({ error: "An error occurred while searching crimes." });
  }
};


exports.searchCrimes4 = async (req, res) => {
  const { query } = req.query;
  console.log(query);

  try {
    const finalResults = await crime_4.find({
      Name: { $regex: new RegExp(query, "i") }
    }).exec();

    //console.log("Matching documents:", finalResults);

    if (finalResults.length > 0) {
      // console.log(finalResults)
      res.json(finalResults);
    } else {
      res.status(404).json({ error: "No results found for the provided query." });
    }
  } catch (error) {
    console.error("Error searching crimes:", error);
    res.status(500).json({ error: "An error occurred while searching crimes." });
  }
};



// exports.searchCrimes2 = async (req, res) => {
//   const { query } = req.query;

//   try {
//     // Search in crime_1 based on the provided query name
//     const searchResults3 = await crime_3.find({
//       Name: { $regex: new RegExp(query, "i") }
//     }).exec();

//     // Extract sub array from the first search results
//     const subArray = searchResults3[0]?.sub || [];


//       const searchResults4 = await crime_4.find({
//         _id: { $in: subArray }
//       }).exec();

    

//     // Search in crime_2 using subArray from crime_1 results
   

//     // Extract names from searchResults2 and create an array
//     const namesArray = searchResults4.map(result => result.Name);

//     // Return the names to the frontend
//     res.json(namesArray);
//   } catch (error) {
//     console.error("Error searching crimes:", error);
//     res.status(500).json({ error: "An error occurred while searching crimes." });
//   }
// };
