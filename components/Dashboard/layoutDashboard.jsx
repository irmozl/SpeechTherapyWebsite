import { useState } from "react";
import { Sidebar } from "./sidebar";
import { useRouter } from "next/navigation";
import { logout } from "../../actions/userController";
import { LogOutIcon } from "lucide-react";

export default function LayoutDashboard({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const router = useRouter();

  return (
    <div className="flex flex-col overflow-hidden text-gray-500 min-h-screen">
      {/* <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} /> */}
      <div className="flex flex-col flex-1">
        <div className="flex justify-end items-center p-4 border-gray-300 bg-gray-100  drop-shadow-md">
          <form action={logout} className="btn btn-neutral ">
            <button
              className="w-full flex items-center justify-start gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-5 rounded"
              type="submit"
            >
              <LogOutIcon className="h-4 w-4" />
              <p className="font-medium">Çıkış Yap</p>
            </button>
          </form>
        </div>
        <main className="flex-1 overflow-y-auto p-4 bg-gray-50 md:pt-9">
          {children}
        </main>
      </div>
    </div>
  );
}
