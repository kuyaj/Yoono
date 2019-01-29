import { initializeApp, database } from "firebase";

const config = {
  apiKey: "AIzaSyDv53ixAlGpYo4qLJ5ZSl2LINnQO6OfzMI",
  authDomain: "yonno-73f61.firebaseapp.com",
  databaseURL: "https://yonno-73f61.firebaseio.com",
  projectId: "yonno-73f61",
  storageBucket: "yonno-73f61.appspot.com",
  messagingSenderId: "462934761907"
};

initializeApp(config);
export default {
  database: database
};
