import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBE-lP_o2aA7pFqwX4MiBzIDR9Hzrycmis",
    authDomain: "react-home-work.firebaseapp.com",
    databaseURL: "https://react-home-work-default-rtdb.firebaseio.com",
    projectId: "react-home-work",
    storageBucket: "react-home-work.appspot.com",
    messagingSenderId: "62569350173",
    appId: "1:62569350173:web:38000e81d2576676b032f4"
  };

  const app = initializeApp(firebaseConfig);

  export default firebaseConfig;