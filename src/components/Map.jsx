import { WhatsApp } from "./WhatsApp";

// eslint-disable-next-line react/prop-types
export const Map = ({ divRef }) => {
  return (
    <div
      className="px-4 mt-10 md:flex md:justify-center md:items-center md:w-full"
      id="location"
      ref={divRef}
    >
      <iframe
        title="Mapa"
        className="w-full min-h-[400px] rounded-xl md:max-w-[650px]"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14935.760825942692!2d-103.3409228!3d20.6312939!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b3e0bc2c143b%3A0x2e184937e269053f!2sDanyDent%20consultorio%20dental!5e0!3m2!1ses-419!2smx!4v1731542680948!5m2!1ses-419!2smx"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="container-map rounded-xl py-7 px-4 my-5 text-white text-center flex justify-center items-center flex-col bg-sky-900 md:shadow-[-19px_3px_22px_-11px] md:h-[600px] md:max-w-[500px] md:p-8">
        <h2 className=" text-2xl mb-4 font-semibold">Contáctanos</h2>
        <p className=" mb-6 font-semibold">
          ¿Tienes alguna necesidad dental en especial? Te podemos ayudar.
          Déjanos tus datos y nuestro equipo se pondrá en contacto contigo lo
          más pronto posible.
        </p>
        <h3 className="font-semibold text-xl">Dirección</h3>
        <p className=" mb-6 font-semibold">
          {" "}
          Calle Maíz #446 <br /> Col. La Nogalera Guadalajara Jalisco
        </p>
        <h4 className="font-semibold text-xl">Horario</h4>
        <p className="font-semibold">Lunes a Viernes: 10am - 20pm</p>
        <p className="font-semibold">Sábado: 10am - 17pm</p>
        <p className=" mb-6 font-semibold">Domingo: Cerrado</p>
        <a
          className="mt-3 py-3 px-4 bg-white text-gray-800 font-semibold rounded-lg transition-all ease-in-out flex justify-center items-center hover:transition-all hover:scale-95"
          href="https://api.whatsapp.com/send?phone=523325205675"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <WhatsApp className="w-4 h-4 mr-2" /> Agenda tu cita
        </a>
      </div>
    </div>
  );
};
