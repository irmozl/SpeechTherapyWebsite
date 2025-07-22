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

import { getUserFromCookie } from "../../lib/getUser";
import { getCollection } from "../../lib/db";
import { deleteMail } from "../../actions/emailController";

export default async function MailDashboard() {
  const user = await getUserFromCookie();

  const emailCollection = await getCollection("Email");
  const mails = await emailCollection.find().sort({ _id: -1 }).toArray();

  return (
    <div>
      <div className="flex justify-between items-center p-6 ">
        <h1 className="sm:text-2xl text-lg font-bold">Mail Yönetim Paneli</h1>
      </div>
      <div className="p-6 space-y-6 w-full overflow-x-auto">
        <Card className="overflow-x-auto max-w-full">
          <CardContent className="w-full overflow-x-auto">
            <div className="w-full overflow-x-auto">
              <Table className="min-w-[600px] w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead>Müşteri Adı</TableHead>
                    <TableHead>Mail</TableHead>
                    <TableHead>Tel</TableHead>
                    <TableHead>Mesaj</TableHead>
                    <TableHead>İşlem</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mails.map((mails) => (
                    <TableRow key={mails._id.toString()} className="">
                      <TableCell className="truncate max-w-[100px] ">
                        {mails.musteriAdi}
                      </TableCell>
                      <TableCell className="overflow-x-scroll max-w-[100px]">
                        {mails.musteriMail}
                      </TableCell>
                      <TableCell className="truncate max-w-[100px]">
                        {mails.musteriTel}
                      </TableCell>
                      <TableCell className="overflow-x-scroll max-w-[200px]">
                        {/* {mails.musteriMesaji.length > 50
                          ? mails.musteriMesaji.slice(0, 50) + "..."
                          : mails.musteriMesaji} */}
                          {mails.musteriMesaji}
                      </TableCell>
                      
                      
                      <TableCell className="space-x-2 flex items-center">
                        <form action={deleteMail}>
                          <input
                            type="hidden"
                            name="id"
                            value={mails._id.toString()}
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
