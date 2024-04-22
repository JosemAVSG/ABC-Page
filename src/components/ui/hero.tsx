import heroimg from "../../../public/hero1.jpg";
import Image from "next/image";
import "@/app/styles/Hero.scss";
const Hero = () => {
  return (
    <>
      <section className="hero flex  justify-between flex-row-reverse w-full">
        <div className="container ">
        </div>
        <div className="hero-text" >
          <h1>Bienvenidos ABC Accesorios</h1>
          <p>Tu mejor Opcion en Tecnologia</p>
          </div>
      </section>

    </>
  );
};

export default Hero;
