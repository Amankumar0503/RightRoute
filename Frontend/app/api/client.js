import axios from 'axios';
import Constants from "expo-constants";
const {expoGoConfig}=Constants;
export default axios.create({ baseURL: `http://${expoGoConfig?.debuggerHost?.split(":").shift()}:8000/` });