'use server'

import { getCollection } from "../lib/db";
import { cookies } from "next/headers";
import jwt from  "jsonwebtoken";
import { redirect } from "next/navigation";

export const login = async function(prevState, formData) {
  const failObject = 
    {
      success: false,
      message: "Şifre veya email yanlış girildi."
    }

  const ourUser = {
    email: formData.get('email')?.trim(),
    password: formData.get('password')?.trim()
  }

  if (typeof ourUser.email !== "string" || ourUser.email === "") {
    console.error("Login attempt with invalid email type or empty email.");
    return failObject;
  }
  if (typeof ourUser.password !== "string" || ourUser.password === "") {
    console.error("Login attempt with invalid password type or empty password.");
    return failObject;
  }

  const collection = await getCollection("User")
  const user = await collection.findOne({email: ourUser.email})

  if(!user) {
    return failObject
  }

  if (ourUser.password !== user.password) {
  return failObject;
  }

  //create our JWT value
  const ourTokenValue = jwt.sign({userId: user._id.toString(), exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24}, process.env.JWTSECRET)

   // log the user in by setting a cookie
    const cookieStore = await cookies();
    cookieStore.set("idil-website", ourTokenValue, {
    httpOnly: true, 
    sameSite: "strict",
    maxAge: 60 * 60 * 24,
    secure: true
   })
    
    return redirect("/dashboard")
}

export const logout = async function() {
  cookies().delete("idil-website")
  redirect("/")
}

