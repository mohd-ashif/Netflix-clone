import axios from "axios";
import axios from "../../src/Component/"
import { baseUrl } from "../axios/axios.jsx"
const instance = axios.create({
    baseURL: baseUrl,

    
  });

  export default instance