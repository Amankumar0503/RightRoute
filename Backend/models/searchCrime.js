const mongoose = require('mongoose');
const CrimeModel1 = require('./path/to/crimeModel1');
const CrimeModel2 = require('./path/to/crimeModel2');
const CrimeModel3 = require('./path/to/crimeModel3');
const CrimeModel4 = require('./path/to/crimeModel4');

exports.searchCrimes = async (req, res) => {
  const { query } = req.query;

  try {
    // Search in CrimeModel1
    const searchResults1 = await CrimeModel1.find({
      $or: [
        { Name: { $regex: query, $options: "i" } },
        { IPC: { $in: [query] } },
        { search: { $in: [query] } },
      ],
    });

    // Fetch related results from CrimeModel2 based on the relationship
    const relatedResultsFromModel2 = await CrimeModel2.find({
      relatedToCrime1: { $in: searchResults1.map(entry => entry._id) }
    });

    // Fetch related results from CrimeModel3 based on the relationship
    const relatedResultsFromModel3 = await CrimeModel3.find({
      relatedToCrime2: { $in: relatedResultsFromModel2.map(entry => entry._id) }
    });

    // Fetch related results from CrimeModel4 based on the relationship
    const relatedResultsFromModel4 = await CrimeModel4.find({
      relatedToCrime3: { $in: relatedResultsFromModel3.map(entry => entry._id) }
    });

    // Combine and return the results from CrimeModel4
    res.json(relatedResultsFromModel4);
  } catch (error) {
    console.error("Error searching crimes:", error);
    res.status(500).json({ error: "An error occurred while searching crimes." });
  }
};
