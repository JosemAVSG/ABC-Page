import "@/app/styles/Hero.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <section className="flex flex-row-reverse justify-between w-full hero">
      <div className="container"></div>
      <div className="hero-text">
        <div className="w-[90%] flex flex-col gap-4">
          <h2 className="text-4xl font-bold text-sky-950">¡Bienvenidos a ABC Accesorios!</h2>
          <p className="text-pretty">
            Transformamos tus dispositivos en herramientas de alto rendimiento.
            Tecnología, innovación y confianza en un solo lugar.
          </p>
          <button className="flex items-center justify-center px-2 py-2 text-xl text-center text-white border btn hover:border-2 w-96 rounded-xl bg-sky-950 hover:bg-sky-800">
            ¡Solicita tu reparación ahora!
            <FontAwesomeIcon icon={faArrowCircleRight} className="w-8 h-8 ml-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
