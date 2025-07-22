"use server"

import { ObjectId } from "mongodb"
import { getCollection } from "../lib/db"
import { revalidatePath } from "next/cache"

export const deleteMail = async function (formData) {
	const mailCollection = await getCollection("Email")
	let mailId = formData.get("id")
	if (typeof mailId != "string") mailId = ""
	console.log("Silinecek ID:", mailId);

	await mailCollection.deleteOne({_id: ObjectId.createFromHexString(mailId)})
	revalidatePath("/dashboard")
}