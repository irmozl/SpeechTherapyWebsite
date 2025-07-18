"use server"

import { getUserFromCookie } from "../lib/getUser";
import { redirect } from "next/navigation"
import { ObjectId } from "mongodb"
import { getCollection } from "../lib/db"
import { revalidatePath } from "next/cache"
// import { create } from "domain";


// function isAlphaNumericWithBasics(text){
//     const regex = /^[a-zA-Z0-9 .,]*$/
//     return regex.test(text)
// }

async function sharedPostLogic(formData, user){
    const errors = {}

    const ourPost = {
        title: formData.get("title"),
		content: formData.get("content"),
        author: ObjectId.createFromHexString(user.userId).toString(),
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
		published: true
    }

    //string validation
    if ( typeof ourPost.title !== "string" ) ourPost.title = ""
    if ( typeof ourPost.content !== "string" ) ourPost.content = ""


    //trimming
    ourPost.title = ourPost.title.trim()
    ourPost.content = ourPost.content.trim()

    if (ourPost.title.length === 0) errors.title = "Lütfen başlık giriniz"
	if (ourPost.content.length === 0) errors.content = "Lütfen içerik giriniz"


    return{
        errors,
        ourPost
    }
}

export const generateSlug  = async function(title) {
  return title
    .toLowerCase()
    .normalize("NFD") // Türkçe karakterleri dönüştür
    .replace(/[\u0300-\u036f]/g, "") // aksanları kaldır
    .replace(/[^a-z0-9\s-]/g, "") // özel karakterleri sil
    .trim()
    .replace(/\s+/g, "-") // boşlukları tireye çevir
    .replace(/-+/g, "-"); // çift tireleri teke indir
}

export const createPost = async function (prevState,formData) {
    const user = await getUserFromCookie()

    if (!user) {
        return redirect('/')
    }

    const results = await sharedPostLogic(formData, user)

    if (results.errors.title || results.errors.content) {
        return { errors: results.errors }
    }

    const title = results.ourPost.title
    const slug = await generateSlug(title)

    const postWithSlug = {
    ...results.ourPost,
    slug: slug,
  }

    //save to db
    const postCollection = await getCollection("Post")
    await postCollection.insertOne(postWithSlug)
    return redirect("/dashboard")
}

export const editPost = async function (prevState,formData) {
    const user = await getUserFromCookie()

    if (!user) {
        return redirect('/')
    }

    const results = await sharedPostLogic(formData, user)

    if (results.errors.title || results.errors.content) {
        return { errors: results.errors }
    }

    //save into db
    const postCollection = await getCollection("Post")
    let postId = formData.get("id")
    if (typeof postId != "string") postId = ""

    //dont let user edit other users posts
    // const postInQuestion = await postCollection.findOne({_id: postId})
    // if(postInQuestion.author.toString() !== user.userId ) return redirect("/")
    
    
    await postCollection.findOneAndUpdate({ _id: ObjectId.createFromHexString(postId) }, { $set: results.ourPost });

    // Başarılı güncelleme sonrası dashboard sayfasını yeniden doğrula
    revalidatePath("/dashboard"); // Dashboard sayfanızın yolu
    return redirect("/dashboard");

         

}
export const deletePost = async function (formData) {
    const user = await getUserFromCookie()

    if (!user) {
        return redirect('/')
    }
    
    const postCollection = await getCollection("Post")
    let postId = formData.get("id")
    if (typeof postId != "string") postId = ""

    //dont let user edit other users Posts
    // const postInQuestion = await postCollection.findOne({ _id: postId })
    // if(postInQuestion.authorId.toString() !== user.userId ) return redirect("/")
    
    await postCollection.deleteOne({_id: ObjectId.createFromHexString(postId)})
    revalidatePath("/")
}