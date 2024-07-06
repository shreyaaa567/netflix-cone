// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import { addDoc,collection,getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxHOHujXBA9WJcjLSPC7kAhIK57EBvSUw",
  authDomain: "netflix-clone-7b467.firebaseapp.com",
  projectId: "netflix-clone-7b467",
  storageBucket: "netflix-clone-7b467.appspot.com",
  messagingSenderId: "572736319575",
  appId: "1:572736319575:web:a8e90d6501da25548cb312"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);
const signup= async (name, email,password)=>{
    try{
        const res =await createUserWithEmailAndPassword(auth,email,password);
        const user=res.user;
        await addDoc (collection(db,"user"),{
            uid:user.uid,
            name,
            authProvider :"local",
            email,
        });
    }catch (error) {
        console.log(error);
        alert(error);

    }
}
const login=async(email ,password)=>{
    try{
        signInWithEmailAndPassword(auth ,email,password);
    }catch(error){
        console.log(error);
        alert(error);

    }
}
const logout =()=>{
    signOut(auth);
}
export{auth,db,login,signup,logout}