
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyDIjyY4aj3wQILvjWR2KDeRDv5nl6It8B8",
    authDomain: "social-72a26.firebaseapp.com",
    databaseURL: "https://social-72a26-default-rtdb.firebaseio.com",
    projectId: "social-72a26",
    storageBucket: "social-72a26.appspot.com",
    messagingSenderId: "190198598015",
    appId: "1:190198598015:web:6b0127800b971fb128f24a"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
 
  
  function addUser()
  {
user_name = document.getElementById("user_name").value;
localStorage.setItem("user_name", user_name);
firebase.database().ref("/").child(user_name).update({
purpose : "adding user"
});
}