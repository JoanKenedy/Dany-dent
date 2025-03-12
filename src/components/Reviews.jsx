import paciente1 from "../assets/logo-google.webp";
import { CardReview } from "./CardReview";
import { Splide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";
import "../index.css";

export const Reviews = () => {
  const infoReview = [
    {
      name: "Alfonso Diaz",
      textReview:
        "Excelente atención y servicio, precio realmente accesibles. 100% recomendado",
      imgSrc: paciente1,
    },
    {
      name: "Berenice Razzo",
      textReview:
        "Siempre recomendable Dr. Daniel además de buen Dr. Su trato Es muy humano y se preocupa por sus pacientes, además de todo siempre actualizado para brindar el mejor servicio a nosotros sus pacientes. Precios accesibles y cómodas instalaciones ",
      imgSrc: paciente1,
    },
    {
      name: "Lupis García",
      textReview:
        "Exelente atención y servicio ...limpieza y profesionalismo ...",
      imgSrc: paciente1,
    },
    {
      name: "Bertha Ramírez Flores",
      textReview: "Excelente  servicio y atención lo recomiendo  mucho",
      imgSrc: paciente1,
    },
    {
      name: "Eusebio Gutierrez Barba",
      textReview: "Me encanto el servicio, muy profesional y recomendable.",
      imgSrc: paciente1,
    },
    {
      name: "Hector Pérez",
      textReview:
        "Excelente servicio! Ambos dentistas son muy profesionales, respetan el horario de tu cita y  la atención, así como el servicio es muy buena, super recomendado.",
      imgSrc: paciente1,
    },
    {
      name: "Jesús Vazquez",
      textReview:
        "Le agradezco mucho al doctor Dany, por su apoyo y su profesionalismo, o recomiendo sin duda alguna.",
      imgSrc: paciente1,
    },
    {
      name: "Antonio Aparicio",
      textReview:
        "Vine a un viaje a Guadalajara y tuve una urgencia dental y gracias a el Dr. Dany pude resolverla, muchas gracias.",
      imgSrc: paciente1,
    },
    {
      name: "Esbeydi Bravo",
      textReview:
        "Estoy muy feliz con mis brackets, el trato fue genial , los recomiendo ampliamiente, el trabajo fue de 10.",
      imgSrc: paciente1,
    },
    {
      name: "Paola Sanchez P.",
      textReview:
        "Tenia miedo de ir al dentista, pero con el doctor Dany tengo la seguridad de ir y que todo estara bien, es  de confianza. Lo recomeindo.",
      imgSrc: paciente1,
    },
  ];

  return (
    <section className="w-full flex justify-center items-center py-10 bg-sky-900 lg:my-10">
      <div className="w-full h-full flex justify-center flex-col items-center max-w-5xl px-4 gap-10">
        <div className="w-full flex justify-center items-center gap-4 lg:gap-8">
          <hr className="w-full border-2 border-white rounded-lg max-w-96" />
          <h2 className="text-nowrap text-3xl font-bold text-white uppercase lg:text-5xl">
            Testimonios
          </h2>
          <hr className="w-full border-2 border-white rounded-lg max-w-96" />
        </div>
        <Splide
          aria-label="Reseñas de pacientes"
          options={{
            rewind: true,
            width: "100%",
            perPage: 3,
            padding: "1rem",
            gap: "2rem",
            pagination: false,
            pauseOnHover: true,
            pauseOnFocus: true,
            autoplay: true,
            classes: {
              prev: "splide__arrow--prev class-prev",
              next: "splide__arrow--next class-next",
            },
            breakpoints: {
              767: { perPage: 1 },
              1023: { perPage: 2 },
            },
          }}
        >
          {infoReview.map((item, i) => (
            <CardReview
              key={i}
              name={item.name}
              textReview={item.textReview}
              imgSrc={item.imgSrc}
              alt={`Imagen de perfil de ${item.name}`}
            />
          ))}
        </Splide>
      </div>
    </section>
  );
};
