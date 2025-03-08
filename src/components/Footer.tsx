import { Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-10 py-8 w-full flex items-center ">
      <div className="flex flex-row gap-10 justify-between">
        
        <div className="w-1/4">
          <h3 className="font-bold text-lg mb-3">Sobre nós</h3>
          <p className="text-sm text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="w-1/4 gap-6">
          <h3 className="font-bold text-lg mb-3">Departamentos</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">Início</a></li>
            <li><a href="#" className="hover:text-white">Sneakers</a></li>
            <li><a href="#" className="hover:text-white">Contato</a></li>
          </ul>
        </div>

        <div className="w-1/4">
          <h3 className="font-bold text-lg mb-3">Entre em contato</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2"><Phone size={18} /> +00 (00) 0000-0000</li>
            <li className="flex items-center gap-2"><Mail size={18} /> gmail@gmail.com</li>
            <li className="flex items-center gap-2"><MapPin size={18} /> São Pedro, Juiz de Fora - MG</li>
          </ul>
        </div>

        <div className="w-1/4">
          <h3 className="font-bold text-lg mb-3">Permaneça conectado</h3>
          <div className="flex gap-4">
            <a href="#" className="bg-white text-black p-2 rounded-full hover:bg-gray-300">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="bg-white text-black p-2 rounded-full hover:bg-gray-300">
              <FaFacebook size={20} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
