import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
export default function Navbar() {
  return (
    <nav className=" w-full flex justify-between py-2 sticky top-0 bg-white ">
      <div className="flex mx-10">

      <Image
        src={logo}
        width={80}
        height={80}
        alt="ABC-Accesorios"
        priority={true}
        
      />


      </div>
      <ul className="flex text-xl space-x-4 m-2 mx-10 items-center gap-8 ">
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
