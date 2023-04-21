import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export async function mailLoginUser(email, password){

    try {

        const user = await signInWithEmailAndPassword(auth, email, password);
        console.log(user);
        
    } catch (error) {
        console.log(error);
    }

}