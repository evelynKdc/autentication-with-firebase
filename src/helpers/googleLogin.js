import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

export async function googleLogin(){

    try {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
        
    } catch (error) {
        console.log(error);
    }
}