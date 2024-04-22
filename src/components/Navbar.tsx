import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
export default function Navbar() {
  return (
    <nav className="flex justify-between mx-16 py-2 ">
      <Image
        src={logo}
        width={80}
        height={80}
        alt="ABC-Accesorios"
        priority={true}
      />
      <ul className="flex text-xl space-x-4 m-2 items-center gap-8 ">
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
