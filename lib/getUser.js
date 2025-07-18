

import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function getUserFromCookie() {
  const cookieStore = await cookies();
  const theCookie = cookieStore.get("idil-website")?.value;
  if (theCookie) {
    try {
      const decoded = jwt.verify(theCookie, process.env.JWTSECRET);
      return decoded;
    } catch (err) {
      console.error("JWT doğrulama hatası:", err.message);
      return null;
    }
  }
}
