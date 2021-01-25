import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-burger-builder-reactjs.firebaseio.com/",
});

export default instance;
