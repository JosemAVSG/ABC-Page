import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
export default function Navbar() {
  return (
    <nav className="sticky top-0 flex justify-between w-full py-2 bg-white ">
      <div className="flex mx-20 mt-2">
        <Image
          src={logo}
          width={85}
          height={85}
          alt="ABC-Accesorios"
          priority={true}
        />
      </div>
      <div className="flex items-center">
        <ul className="flex items-center gap-8 m-2 mx-10 space-x-4 text-xl font-bold ">
          <li>
            <Link className="text-black hover:text-sky-950" href={"/"}>
              Inicio
            </Link>
          </li>
          <li>
            <Link
              className="text-black hover:text-sky-950"
              href={"/telefonos"}
            >
              Telefonos
            </Link>
          </li>

          <li>
            <Link
              className="text-black hover:text-sky-950"
              href={"/papeleria"}
            >
              Papeleria
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center">
        <ul className="flex gap-8 m-2 mx-10 space-x-4 text-xl">
          <li>
            <Link className="text-black hover:text-sky-950" href={"/login"}>
              Login
            </Link>
          </li>
          <li>
            <Link className="text-black hover:text-sky-950" href={"/registro"}>
              Buscar
            </Link>
          </li>
          <li>
            <Link className="text-black hover:text-sky-950" href={"/carrito"}>
              Carrito
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
