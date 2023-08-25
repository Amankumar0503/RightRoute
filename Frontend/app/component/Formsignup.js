import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { StackActions } from '@react-navigation/native';
import Formconatiner from './Formconatiner';
import Forminput from './Forminput';
import FormSubmmitButton from './FormSubmmitButton';
import { useSignUP } from '../context/SignUpProvider';
import  { useState } from 'react';


 import client from '../api/client';
import { signIn } from '../api/user';

const validationSchema = Yup.object({
  FULL_NAME: Yup.string()
    .trim()
    .min(3, ' at least 3 characters!')
    .required('Name is required!'),
  STATE: Yup.string().trim().required('State is required!'),
  PIN_CODE: Yup.number()
    .integer('Invalid PinCode!')
    .min(100000, 'PinCode must be 6 digits.')
    .max(999999, 'PinCode must be 6 digits.')
    .required('PinCode is required!'),
  EMAIL_ID: Yup.string()
    .email('Invalid EMAIL_ID!')
    .required('Email is required!'),
  PASSWORD: Yup.string()
    .trim()
    .min(8, 'Password must be at least 8 characters!')
    .required('Password is required!'),
  CONFIRM_PASSWORD: Yup.string()
    .oneOf([Yup.ref('PASSWORD'), null], 'Passwords do not match!')
    .required('Confirm Password is required!'),
});



const SignupForm = () => {

  const { setIsSignedIn} = useSignUP();
  const [userInfo,setUserInfo]=useState({
    // FULL_NAME:'',
    // STATE:'',
    // PIN_CODE:'',
    EMAIL_ID:'',
    PASSWORD:''
  })
 const [error,setError]=useState();
  const{EMAIL_ID,PASSWORD}=userInfo;

const signUp=async (values,formikActions)=>{
  const res = await client.post('/create-user', {
    ...values,
  });

  if (res.data.success) {
    // const signInRes = await client.post('/sign-in', {
    //   EMAIL_ID: values.EMAIL_ID,
    //   PASSWORD: values.PASSWORD,
    // });
    // if (signInRes.data.success) {
    //   // navigation.dispatch(
    //   //   StackActions.replace('UserProfile', {
    //   //     token: signInRes.data.token,
    //   //   })
    //   // );
    //   setUserInfo({EMAIL_ID:'',PASSWORD:''});
    //     setIsSignedIn(true);
    // }
    try{
      const signInRes =await signIn(values.EMAIL_ID,values.PASSWORD);
      //const res=await client.post('/sign-in',{...userInfo});
      if(signInRes.data.success){
        setUserInfo({EMAIL_ID:'',PASSWORD:''});
        setIsSignedIn(true);

      }
      console.log(res.data);
      }
      catch(error){
        setError(error.message);
        console.log(error.message);
      }
  }
  formikActions.resetForm();
  formikActions.setSubmitting(false);
}
  return (
    <Formconatiner>
      <Formik
        initialValues={{
          FULL_NAME: '',
          STATE: '',
          PIN_CODE: '',
          EMAIL_ID: '',
          PASSWORD: '',
          CONFIRM_PASSWORD: '',
        }}
        validationSchema={validationSchema}
        onSubmit={signUp}
        
      >
        {({
          values,
          errors,
          touched,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <>
            <Forminput
              value={values.FULL_NAME}
              error={touched.FULL_NAME && errors.FULL_NAME}
              onChangeText={handleChange('FULL_NAME')}
              onBlur={handleBlur('FULL_NAME')}
              label='Full Name'
              placeholder='Enter Your Name'
            />
            <Forminput
              value={values.STATE}
              error={touched.STATE && errors.STATE}
              onChangeText={handleChange('STATE')}
              onBlur={handleBlur('STATE')}
              label='State'
              placeholder='Enter Your State'
            />
            <Forminput
              value={values.PIN_CODE.toString()} // Convert to string for number inputs
              error={touched.PIN_CODE && errors.PIN_CODE}
              onChangeText={handleChange('PIN_CODE')}
              onBlur={handleBlur('PIN_CODE')}
              label='PinCode'
              placeholder='Enter Your PinCode'
              keyboardType='numeric'
            />
            <Forminput
              value={values.EMAIL_ID}
              error={touched.EMAIL_ID && errors.EMAIL_ID}
              onChangeText={handleChange('EMAIL_ID')}
              onBlur={handleBlur('EMAIL_ID')}
              autoCapitalize='none'
              label='Email'
              placeholder='example@EMAIL_ID.com'
            />
            <Forminput
              value={values.PASSWORD}
              error={touched.PASSWORD && errors.PASSWORD}
              onChangeText={handleChange('PASSWORD')}
              onBlur={handleBlur('PASSWORD')}
              autoCapitalize='none'
              secureTextEntry
              label='Password'
              placeholder='********'
            />
            <Forminput
              value={values.CONFIRM_PASSWORD}
              error={touched.CONFIRM_PASSWORD && errors.CONFIRM_PASSWORD}
              onChangeText={handleChange('CONFIRM_PASSWORD')}
              onBlur={handleBlur('CONFIRM_PASSWORD')}
              autoCapitalize='none'
              secureTextEntry
              label='Confirm Password'
              placeholder='********'
            />
            <FormSubmmitButton
              submitting={isSubmitting}
              onPress={handleSubmit}
              title='Sign up'
            />
          </>
        )}
      </Formik>
    </Formconatiner>
  );
};

const styles = StyleSheet.create({});

export default SignupForm;

