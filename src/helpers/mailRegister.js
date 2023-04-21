import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export async function emailRegisterUser(email, password){

    try {
        const user = await createUserWithEmailAndPassword(auth, email, password);
        console.log(user);
    } catch (error) {
        console.log(error);
    }

}