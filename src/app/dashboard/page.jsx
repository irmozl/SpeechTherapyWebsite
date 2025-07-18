'use server'

import { getUserFromCookie } from "../../../lib/getUser";
import DashboardComponent from "../../../components/Dashboard/Dashboard";
import { getCollection } from "../../../lib/db";
import { redirect } from "next/navigation";


export default async function Dashboard(){
  const user = await getUserFromCookie();

  // const postCollection = await getCollection('Post');
  // const userPosts = await postCollection.find({ author: user.userId }).toArray();

    return (
		<>
      {user && <DashboardComponent user={user}  />}
      {!user && (
        redirect("/")
      )}
    </>
    ) 
}

// posts={userPosts}