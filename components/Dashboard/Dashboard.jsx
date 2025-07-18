"use server";

import { ObjectId } from "mongodb";
import { getCollection } from "../../lib/db";
import CreatePost from "../Dashboard/create-post";
import EditPost from "../Dashboard/edit-post";
import { deletePost } from "../../actions/postController";
import { Button } from "../../src/components/ui/button";
import { Card, CardContent } from "../../src/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../src/components/ui/table";

async function getPosts(userId) {
  const collection = await getCollection("Post");
  const results = await collection.find({ author: userId }).toArray();
  console.log(results.length);
  return results;
}

export default async function DashboardComponent(props) {
  const post = await getPosts(props.user.userId);
  // console.log(props.user.userId);

  return (
    <div>
      <div className="flex justify-between items-center p-6 ">
        <h1 className="sm:text-2xl text-lg font-bold">Post Yönetim Paneli</h1>
        <div className="flex gap-2">
          <CreatePost userId={props.user._id} />
        </div>
      </div>

      <div className="p-6 space-y-6 w-full overflow-x-auto">
        <Card className="overflow-x-auto max-w-full">
          <CardContent className="w-full overflow-x-auto">
           <div className="w-full overflow-x-auto">
             <Table className="min-w-[600px] w-full">
              <TableHeader>
                <TableRow>
                  <TableHead>Başlık</TableHead>
                  <TableHead>İçerik</TableHead>
                  <TableHead>Aksiyonlar</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {post.map((post) => (
                  <TableRow key={post._id}>
                    <TableCell className="truncate max-w-[100px]">{post.title}</TableCell>
                    <TableCell className="truncate max-w-[200px]">
                      {post.content.length > 50
                        ? post.content.slice(0, 50) + "..."
                        : post.content}
                    </TableCell>
                    <TableCell className="space-x-2 flex items-center">
                      <div
                        type="submit"
                        size="sm"
                        variant="outline"
                      >
                        <EditPost
                          post={{
                            id: post._id.toString(),
                            title: post.title,
                            content: post.content,
                          }}
                        />
                      </div>

                      <form action={deletePost}>
                        <input
                          type="hidden"
                          name="id"
                          value={post._id.toString()}
                        />
                        <Button
                          type="submit"
                          size="sm"
                          variant="outline"
                          className="bg-red-500 text-white hover:bg-red-700 hover:text-white"
                        >
                          Sil
                        </Button>
                      </form>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
           </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
