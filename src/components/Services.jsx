import { CardService } from "./CardService";
import { TitleSection } from "./TitleSection";
import ortodoncia from "../assets/orto.webp";
import endodoncia from "../assets/endodoncia.webp";
import cirugia from "../assets/rehabilitacion.png";
import implante from "../assets/implante.png";
import periodoncia from "../assets/periodoncia.webp";
import general from "../assets/gral.jpg";
import odontopediatria from "../assets/odontopediatria.webp";

// eslint-disable-next-line react/prop-types
export const Services = ({ divRef }) => {
  const servicesInformation = [
    {
      id: 1,
      title: "Implantes",
      description:
        "Los implantes son elementos metálicos que se ubican quirúrgicamente en los huesos maxilares, debajo de las encías. Una vez colocados en el lugar, el dentista puede colocar sobre ellos las coronas o puentes fijos que reemplazarán a las piezas dentarias perdidas.",
      img: implante,
      alt: "Tratamiento de implante dental",
    },
    {
      id: 2,
      title: "Odontología General",
      description:
        "Especialidad de Odontología encargada de prevenir, diagnosticar y tratar aquellos problemas primarios relacionados con los dientes, las encías o la lengua. ",
      img: general,
      alt: "Tratamiento de periodoncia",
    },
    {
      id: 3,
      title: "Ortodoncia",
      description:
        "La ortodoncia es una especialidad de la odontología que se encarga del estudio, prevención, y tratamiento de la posición de los dientes para alinearlos correctamente y de todos los problemas relacionados con la mordida.",
      img: ortodoncia,
      alt: "Tratamiento de ortodoncia",
    },
    {
      id: 4,
      title: "Endodoncia",
      description:
        "Trata las enfermedades de la pulpa dental, como caries profundas o infecciones. El objetivo es salvar el diente y aliviar el dolor.",
      img: endodoncia,
      alt: "Tratamiento de endodoncia",
    },
    {
      id: 5,
      title: "Rehabilitación",
      description:
        "Especialidad médica y odontológica que se encarga de tratar, diagnosticar y prevenir enfermedades, lesiones o deformidades en la cara, el cráneo, la boca, el cuello y los huesos maxilares",
      img: cirugia,
      alt: "Cirugías",
    },

    {
      id: 6,
      title: "Odontopediatría",
      description:
        "Atención dental de niños, incluyendo revisión, tratamiento de caries y educación en higiene oral.",
      img: odontopediatria,
      alt: "Tratamiento de Odontopediatría",
    },
  ];

  const getClasses = (id) => {
    if (id === 0 || id === 1 || id === 2) {
      return "lg:col-span-4";
    } else if (id === 3 || id === 4 || id === 5) {
      return "lg:col-span-4 lg:text-sm";
    }
  };

  return (
    <section
      className="w-full flex justify-center items-center mt-6"
      id="services"
      ref={divRef}
    >
      <div className="w-full px-4 flex justify-center items-center flex-col max-w-7xl">
        <div className="title w-full flex justify-center items-center">
          <hr className="w-full border-2 border-primary rounded-lg max-w-96" />
          <h2 className="text-nowrap text-2xl font-bold text-primary uppercase lg:text-4xl">
            Servicios
          </h2>
          <hr className="w-full border-2 border-primary rounded-lg max-w-96" />
        </div>

        <small className="text-primary">
          Da click en la imagen para saber más
        </small>
        <section className="w-full grid grid-cols-1 mt-10 gap-6 md:grid-cols-2 lg:grid-cols-12 lg:gap-y-20">
          {servicesInformation.map((item, i) => (
            <CardService
              key={item.id}
              className={getClasses(i)}
              title={item.title}
              description={item.description}
              img={item.img}
              alt={item.alt}
            />
          ))}
        </section>
      </div>
    </section>
  );
};
