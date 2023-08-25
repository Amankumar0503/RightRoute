const mongoose=require('mongoose');

const bcrypt=require('bcrypt');

const userSchema=new mongoose.Schema({
    FULL_NAME:{
        type:String,
        required:true

    },
    STATE:{
        type:String,
        required:true
    },
    PIN_CODE:{
        type:Number,
        minlength:6,
        maxlength:6
    },
    EMAIL_ID:{
        type:String,
        required:true,
        unique:true
    },
    PASSWORD:{
        type:String,
        required:true,
        // select: false
    },
    avatar: String,
    tokens:[{type:Object}]

},{timestamps:true})

//pre-we want to convert into hash before saving
//we  want to run the logic if there any changes in password or not
//this.password-value that we want to hash
//then we convert into hash ,if encountererd some error it will show some error otherwise it save and convert into hash function
userSchema.pre('save',function(next){
    if(this.isModified('PASSWORD')){
        bcrypt.hash(this.PASSWORD,8,(err,hash)=>{
            if(err) return next(err);

            this.PASSWORD=hash;
            next();
        })
    }


});

//The comparePassword method you provided is a function that compares a given plain text password with the hashed password stored in a user document. It uses the bcrypt.compare() function to perform the comparison. This method is often used in authentication processes to verify whether a provided password matches the hashed password stored in a database.
//basically hum normal password ko hashed password se comapre kar rahe hai ki vo same hai ki nahi
//vahi wala hashed hua hai na jisko hum hashed karwana chahte the
//phele check kia ki password hai ki nahi agr nahi hai toh missing password
//agr hai toh comapre karo ,usmein bhi error ayega toh vo error de dega
userSchema.methods.comparePassword = async function (PASSWORD) {
    if (!PASSWORD) throw new Error('Password is missing, can not compare!');
  
    try {
      const result = await bcrypt.compare(PASSWORD, this.PASSWORD);
      return result;
    } catch (error) {
      console.log('Error while comparing password!', error.message);
    }
  };
//ismein hum uniqueness aa jaye email id mein isliye kie hai
userSchema.statics.isThisEmailInUse = async function (EMAIL_ID) {
    if (!EMAIL_ID) throw new Error('Invalid Email');
    try {
      const User = await this.findOne({ EMAIL_ID: EMAIL_ID });
      if (User) return false;
  
      return true;
    } catch (error) {
      console.log('error inside isThisEmailInUse method', error.message);
      return false;
    }
};

  

const User=mongoose.model('User',userSchema);

module.exports=User;