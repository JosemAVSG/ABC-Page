import Hero from "@/components/ui/hero";
import Image from "next/image";
import heroimg from "../../public/hero1.jpg";
const Home = () => {
  return (
    <>
      <main className="flex mt-40 flex-col ">
        <section className="flex justify-evenly p-10  mt-5 cards">
          <div className="w-64 card bg-white  rounded-lg shadow-lg">
            <Image
              src={
                "https://i.postimg.cc/VNYyskFV/technician-antistatic-gloves-using-screwdriver-disassemble-borken-mobile-phone-going-repair-motherbo.jpg"
              }
              width={300}
              height={300}
              alt="Hero-Image"
            />
            <div className="p-4">
              <h2 className="text-3xl font-bold mt-4">Servicio Técnico</h2>
              <p className="text-gray-600 mt-4">
                Reparación de computadoras, impresoras, smarthpones, entre
                otros.
              </p>
              <a
                href="http://localhost:3000/servicio-tecnico"
                className="block mt-4 py-2 text-center text-blue-700 hover:underline"
              >
                Ver más
              </a>
            </div>
          </div>

          <div className="w-64 card bg-white rounded-lg shadow-lg ml-4">
            <Image
              src={"https://i.postimg.cc/YSSD0nv1/pexels-tim-gouw-53874.jpg"}
              width={300}
              height={300}
              alt="Hero-Image"
            />
            <div className="p-4">
              <h2 className="text-3xl font-bold mt-4">Papeleria</h2>
              <p className="text-gray-600 mt-4">
                Artículos de oficina, carpetas, libretas, rotuladores, entre
                otros.
              </p>
              <a
                href="http://localhost:3000/papeleria"
                className="block mt-4 py-2 text-center text-blue-700 hover:underline"
              >
                Ver más
              </a>
            </div>
          </div>

          <div className="w-64 card bg-white rounded-lg shadow-lg ml-4">
            <Image
              src={
                "https://i.postimg.cc/yNdxm5xv/mobile-phone-screen-digital-device.jpg"
              }
              width={300}
              height={300}
              alt="Smartphone"
            />
            <div className="p-4">
              <h2 className="text-3xl font-bold mt-4">Telefonos</h2>
              <p className="text-gray-600 mt-4">
                Celulares, tablets, smartphones, entre otros.
              </p>
              <a
                href="http://localhost:3000/telefonos"
                className="block mt-4 py-2 text-center text-blue-700 hover:underline"
              >
                Ver más
              </a>
            </div>
          </div>

          <div className="w-64 card bg-white rounded-lg shadow-lg ml-4">
            <Image
              src={
                "https://i.postimg.cc/wMyGBkkT/shiny-black-headphones-reflect-golden-nightclub-lights-generated-by-ai.jpg"
              }
              width={400}
              height={400}
              alt="Accesorios"
            />
            <div className="p-4">
              <h2 className="text-3xl font-bold mt-4">Accesorios</h2>
              <p className="text-gray-600 mt-4">
                Cables, cables HDMI, cables USB, Diademas entre otros.
              </p>
              <a
                href="http://localhost:3000/accesorios"
                className="block mt-4 py-2 text-center text-blue-700 hover:underline"
              >
                Ver más
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Home;
