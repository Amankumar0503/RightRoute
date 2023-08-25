import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Formconatiner from "./Formconatiner";
import Forminput from "./Forminput";
import FormSubmmitButton from "./FormSubmmitButton";
import { isValidEmail, isValidObjField, updateError } from '../utils/methods';
import client from "../api/client";
import { useLogin } from '../context/LoginProvider';
import { signIn } from "../api/user";
const FormLogin = () => {
  const { setIsLoggedIn} = useLogin();
  const [userInfo,setUserInfo]=useState({
    EMAIL_ID:'',
    PASSWORD:''
  })
 const [error,setError]=useState();
  const{EMAIL_ID,PASSWORD}=userInfo;

  const handleOnChangeText = (value, fieldName) => {
    // Update the userInfo state with the new value
    setUserInfo({ ...userInfo, [fieldName]: value });
  };
const isValidForm=()=>{
  //if(!isValidObjField(userInfo))return updateError('Required all fields',setError);
  if (!isValidEmail(EMAIL_ID)) return updateError("Invalid EMAIL_ID", setError);
    if (!PASSWORD.trim() || PASSWORD.length < 8)
      return updateError("PASSWORD is less than 8 characters!", setError);
    return true

}
  const submitForm=async()=>{
    if(isValidForm())
    {
      try{
      const res=await signIn(userInfo.EMAIL_ID,userInfo.PASSWORD);
      if(res.data.success){
        setUserInfo({EMAIL_ID:'',PASSWORD:''});
        setIsLoggedIn(true);

      }
      console.log(res.data);
      }
      catch(error){
        console.log(error.message);
      }
    }

  }

  return (
    <Formconatiner>
      {error ? (
        <Text style={{ fontSize: 18, color: "red", textAlign: "center" }}>
          {error}
        </Text>
      ) : null}
      <Forminput
        value={EMAIL_ID}
        onChangeText={(value) => {
          handleOnChangeText(value, "EMAIL_ID");
        }}
        label={"EMAIL_ID"}
        placeholder={"example@email.com"}
        autoCapitalize="none"
  
      />

      <Forminput
        value={PASSWORD}
        onChangeText={(value) => {
          handleOnChangeText(value, "PASSWORD");
        }}
        label={"PASSWORD"}
        placeholder={"**********"}
        autoCapitalize="none"
        secureTextEntry
      />

      <FormSubmmitButton  onPress={submitForm} title={"Login"} />
    </Formconatiner>
  );
};

export default FormLogin;

const styles = StyleSheet.create({});
