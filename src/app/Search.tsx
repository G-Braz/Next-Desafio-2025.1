import { Search, ShoppingCart, User } from "lucide-react";
import Logo from "../../Icons/logo.png";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src="" className="h-10" />
        <div className="font-black text-2xl">Urban Gecko</div>
      </div>

      <div className="relative w-1/3">
        <input
          type="text"
          placeholder="O que você está buscando?"
          className="w-full border rounded-2xl py-2 pl-4 pr-10 outline-none "
        />
        <Search className="absolute right-3 top-2.5 text-gray-500" size={20} />
      </div>

      <div className="flex gap-6">
        <a href="#" className="text-gray-700 hover:text-black">Início</a>
        <a href="#" className="text-gray-700 hover:text-black">Sneakers</a>
        <a href="#" className="text-gray-700 hover:text-black">Contato</a>
      </div>

      <div className="flex gap-6 items-center">
        <div className="flex flex-col items-center text-gray-700 hover:text-black cursor-pointer">
          <User size={24} />
          <div className="text-xs">Minha conta</div>
        </div>
        <div className="relative flex flex-col items-center text-gray-700 hover:text-black cursor-pointer">
          <ShoppingCart size={24} />
          <div className="text-xs">Meu carrinho</div>
          <div className="absolute top-0 right-0 bg-black text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">0</div>
        </div>
      </div>
    </nav>
  );
}
