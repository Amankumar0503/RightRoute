const express = require('express');
const router = express.Router();

const { createUser } = require('../controllers/user');
const { validateUserSignup ,userValidationSignup} = require('../middleware/validator/user');
const{userSignIn}=require('../controllers/user');
const{validateUserSignIn,userValidationSignIn}=require('../middleware/validator/user');
// const{uploadProfile}=require('../controllers/user');
 const { isAuth } = require('../middleware/validator/auth');
 const{signOut}=require('../controllers/user');
 const{searchCrimes}=require('../controllers/user')
 //const{example}=require('../controllers/user')
 const{searchCrimes2}=require('../controllers/user')

 const{searchCrimes3}=require('../controllers/user')

 const{searchCrimes4}=require('../controllers/user')



// Define the route for creating a user
router.post('/create-user',validateUserSignup,userValidationSignup, createUser);

router.post('/sign-in',validateUserSignIn,userValidationSignIn,userSignIn);

router.post('/sign-out',isAuth,signOut);

router.get('/search-users', searchCrimes);

router.get('/search-users2',searchCrimes2);

router.get('/search-users3',searchCrimes3);

router.get('/search-users4',searchCrimes4);

router.get('/create-post', (req, res) => {
    res.send('Welcome! You are in the secret route.');
});





module.exports = router;
