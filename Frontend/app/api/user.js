import AsyncStorage from "@react-native-async-storage/async-storage";
import client from "./client";
export const signIn = async (EMAIL_ID, PASSWORD) => {
  try {
    const signInRes = await client.post("/sign-in", {
      EMAIL_ID,
      PASSWORD,
    });

    if(signInRes.data.success){
        const token=signInRes.data.token;
        await AsyncStorage.setItem('token',token);
        
    }
    return signInRes;
  } catch (error) {
    console.log("error inside sign-in method");
  }
};

