import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export async function logOut(){

    try {
        await signOut(auth);
        
    } catch (error) {
        console.log(error);
    }

}