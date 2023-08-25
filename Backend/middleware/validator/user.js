const {check,validationResult}=require('express-validator');

exports.validateUserSignup=[
    check('FULL_NAME').trim()
    .not()
    .isEmpty()
    .withMessage('Name is required!')
    .isString()
    .withMessage('Must be a valid name!')
    .isLength({ min: 3, max: 20 })
    .withMessage('Name must be within 3 to 20 character!'),
    check('STATE').trim().not().isEmpty().isLength({min:3,max:30}).withMessage('Enter your state'),
    check('PIN_CODE').trim().not().isEmpty().withMessage('Enter your pincode').isLength({min:6,max:6}).withMessage(' Pincode must be length of 6'),
    check('EMAIL_ID').normalizeEmail().isEmail().withMessage('Inavlid Email'),
    check('PASSWORD')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Password is empty!')
    .isLength({ min: 8, max: 20 })
    .withMessage('Password must be 8 to 20 characters long!'),
    check('CONFIRM_PASSWORD').trim().not().isEmpty().custom((value,{req}) =>{
        if(value!==req.body.PASSWORD)
        {
            throw new Error ('Both password must be SAME!')

        }
        return true;
    })
];
//we are checking wether there ia an any validation error or not
//agr validation result ki length 0 hai matlab vo sahi hai varna koi error message hai jo print kar deta hai
//hum result ko array mein store karke rakh rhae hai 
exports.userValidationSignup=(req,res,next)=>{
    const result=validationResult(req).array();

    if(!result.length) return next();
    
    const error=result[0].msg;
    res.json({success: false,message: error});//jab bhi humein front end ko message bhejna hota hai tab tab hum 'res.json karte hai aur usmien vo response rehta hai
};

//now we are doing for sign-in
//trim()-removing white-spaces
exports.validateUserSignIn = [
    check('EMAIL_ID').trim().isEmail().withMessage('email / password is required!'),
    check('PASSWORD')
      .trim()
      .not()
      .isEmpty()
      .withMessage('email /password is required!'),
  ];
exports.userValidationSignIn=(req,res,next)=>{
    const result=validationResult(req).array();

    if(!result.length) return next();
    
    const error=result[0].msg;
    res.json({success: false,message: error});//jab bhi humein front end ko message bhejna hota hai tab tab hum 'res.json karte hai aur usmien vo response rehta hai
};

