'use server';
import { signIn } from "@/auth"

export  async function signInAction(){
    // signin the user
    await signIn('google', {redirectTo:'/loggedin'})
}