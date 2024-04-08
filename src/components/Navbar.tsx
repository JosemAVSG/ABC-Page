import Link from "next/link";
import Image from "next/image";
import logo from '../../public/logo.png'
export default function Navbar() {
  return (
    <nav className="flex bg-transparent py-2  justify-between shadow-xl">
      <div  className="ml-10 ">
        <Image
          src={logo}
          width={80}
          height={80}
          alt="ABC-Accesorios"
          priority={true}
        />
      </div>

      <ul className="flex text-xl space-x-4 m-4 items-center ">
        <li>
          <Link className="text-black hover:text-gray-300" href={"/"}>
            Inicio
          </Link>
        </li>
        <li>
        
          <Link className="text-black hover:text-gray-300" href={"/telefonos"}>
            Telefonos
          </Link>
        </li>
        <li>
          <Link className="text-black hover:text-gray-300" href={"/papeleria"}>
            Papeleria
          </Link>
        </li>
      </ul>
    </nav>
  );
}
