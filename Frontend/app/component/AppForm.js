import React, { useEffect,useRef } from "react";
import Constants from "expo-constants";
const {expoGoConfig}=Constants;
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
} from "react-native";
import Formheader from "./Formheader";
import FormSelectorButton from "./FormSelectorButton";
import FormLogin from "./FormLogin";
import Formsignup from "./Formsignup";
//import ImageUpload from "./ImageUpload";
import axios from "axios";
//  const fetchApi=async()=>{
//   try{
//     const res=await axios.get(`http://${expoGoConfig?.debuggerHost?.split(":").shift()}:8000/`);
//     console.log(res.data);
//   }catch(error)
//   {
//     console.log(error.message);
//   }
  
//  }


const { width } = Dimensions.get("window");

// export default function App() {
//   useEffect(()=>{
//     fetchApi()
// },[])
export default function AppForm({navigation}){
  const animation = useRef(new Animated.Value(0)).current;
  const scrollView = useRef(null); // Changed variable name to lowercase 'scrollView'

  const RightHeaderOpacity = animation.interpolate({
    inputRange: [0, width],
    outputRange: [1, 0],
  });

  const LeftHeaderTranslateX = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, 40],
  });

  const RightHeaderTranslateY = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, -20],
  });

  const LoginColorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ["rgba(27,27,51,1)", "rgba(27,27,51,0.4)"],
  });

  const SignUpColorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ["rgba(27,27,51,0.4)", "rgba(27,27,51,1)"],
  });

  return (
    <View style={{ flex: 1, paddingTop: 70 }}>
      <View style={{ height: 80 }}>
        <Formheader
          leftHeading={"Welcome"}
          rightHeading={"Back"}
          subHeading1={"TO"}
          subHeading={" RIGHTS ROUTE"}
          RightHeaderOpacity={RightHeaderOpacity}
          LeftHeaderTranslateX={LeftHeaderTranslateX}
          RightHeaderTranslateY={RightHeaderTranslateY}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 20,
          marginBottom: 30,
          marginTop:20
        }}
      >
        <FormSelectorButton
          style={styles.borderLeft}
          backgroundColor={LoginColorInterpolate}
          title="Login"
          onPress={() => scrollView.current.scrollTo({ x: 0 })}
        />
        <FormSelectorButton
          style={styles.borderRight}
          backgroundColor={SignUpColorInterpolate}
          title="SignUp"
          onPress={() => scrollView.current.scrollTo({ x: width })}
        />
      </View>
      <ScrollView
        ref={scrollView} // Changed 'ScrollView' to 'scrollView'
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: animation } } }],
          { useNativeDriver: false }
        )}
      >
        <ScrollView>
        <FormLogin navigation={navigation} />
        </ScrollView>
        
          
          <ScrollView>
            <Formsignup navigation={navigation}/>
          </ScrollView>        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  borderLeft: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  borderRight: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
});
