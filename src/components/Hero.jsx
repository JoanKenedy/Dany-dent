// import hero from '../assets/hero-mov.webp'
import heroDes from "../assets/hero.webp";
// eslint-disable-next-line react/prop-types
export const Hero = ({ divRef }) => {
  return (
    <section
      className="w-full h-[calc(100svh-89px)] max-h-[900px] flex justify-center items-center flex-col relative"
      id="home"
      ref={divRef}
    >
      {/* <img
        src={hero}
        alt='Foto de sonrisa perfecta'
        className='w-full h-full object-cover md:hidden'
        loading='eager'
        width='1333'
        height='2000'
      /> */}
      <img
        src={heroDes}
        alt="Foto de sonrisa perfecta"
        className="w-full h-full object-cover object-center"
        loading="eager"
        width="2000"
        height="1333"
      />
      <div className="absolute bottom-5 bg-cyan-200/20 backdrop-blur-xl p-5 rounded-xl">
        <h1 className="font-bold text-4xl text-center text-gray-900">
          Daniel Jimenez
        </h1>
        <p className="font-semibold text-xl text-center text-gray-900">
          Cuidamos tu sonrisa
        </p>
      </div>
    </section>
  );
};
