
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, EmailAuthProvider,
     getAuth, 
     signInWithEmailAndPassword, 
     signOut} from "firebase/auth";
import { addDoc,
     collection, 
     getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyDYMXvm0OLsfvaTEtSJecXT-kXw6F-3gNo",
  authDomain: "netflix-clone-3f3e3.firebaseapp.com",
  projectId: "netflix-clone-3f3e3",
  storageBucket: "netflix-clone-3f3e3.firebasestorage.app",
  messagingSenderId: "513756947910",
  appId: "1:513756947910:web:431d410c4f6a5070cbbec7"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name , email , password) => {
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc (collection(db, "user"),{
            uid: user.uid,
            name,
            authProvider : "local",
            email

        }
    );
    } catch (error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, password, email);
    } catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
        
    }
}

const logout=()=>{
  signOut(auth);
}
export{auth, db, login, signup, logout};