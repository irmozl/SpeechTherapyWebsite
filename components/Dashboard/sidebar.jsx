import Link from "next/link";
import { Home, FileText, Building } from "lucide-react";

export function Sidebar({ open, setOpen }) {
  return (
    <div
      className={`${
        open ? "w-48" : "w-16"
      } bg-gray-100 drop-shadow-md h-full border-r border-gray-300 transition-all duration-300 flex flex-col`}
    >
      <div className="p-4 border-gray-300  flex justify-between items-center">
        <span className=" font-bold text-lg"></span>
        <button size="sm" className="mt-1" onClick={() => setOpen(!open)}>
          {open ? "⮜" : "⮞"}
        </button>
      </div>
      <nav className="flex flex-col gap-5 p-4 text-gray-600 mt-4 ml-2">
        <Link href="/" className="">
          <button className="w-full flex items-center justify-start gap-4">
            <Home className="mr-2 h-4 w-4" /> {open && "Anasayfa"}
          </button>
        </Link>
        <Link href="/posts">
          <button className="w-full flex items-center justify-start gap-4">
            <FileText className="mr-2 h-4 w-4" /> {open && "Postlar"}
          </button>
        </Link>
        <Link href="/company">
          <button className="w-full flex items-center justify-start gap-4">
            <Building className="mr-2 h-4 w-4" /> {open && "Şirket Bilgileri"}
          </button>
        </Link>
      </nav>
    </div>
  );
}
