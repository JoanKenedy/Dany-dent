import team from "../assets/foto-doctor.png";
import { CardColor } from "./CardColor";
import { Certificate } from "./Certificate";
import { Star } from "./Star";
import { TitleSection } from "./TitleSection";
import { Tool } from "./Tool";
import { Tooth } from "./Tooth";
// eslint-disable-next-line react/prop-types
export const About = ({ divRef }) => {
  const valuePoints = [
    {
      id: 1,
      icon: <Star className="w-7 h-7 text-white mr-2" />,
      title: "Honestidad",
    },
    {
      id: 2,
      icon: <Tool className="w-7 h-7 mr-2 text-white" />,
      title: "Respeto",
    },
    {
      id: 3,
      icon: <Tooth className="w-7 h-7 mr-2 text-white" />,
      title: "Honradez",
    },
    {
      id: 4,
      icon: <Certificate className="w-7 h-7 mr-2 text-white" />,
      title: "Solidaridad",
    },
  ];

  return (
    <div
      className="w-full flex justify-center items-center"
      id="about"
      ref={divRef}
    >
      <section className="px-4 w-full max-w-7xl grid grid-cols-1 place-content-center place-items-center my-10 md:grid-cols-2 md:gap-7">
        <img
          src={team}
          alt="Fotografía equipo Dra. Claudia Olmos"
          className="w-full max-w-md mb-3 rounded-2xl"
          width="585"
          height="786"
        />
        <article className="w-full text-center mb-3">
          <TitleSection title="Bienvenidos a Dany Dent" />
          <p className="text-base text-justify mt-1">
            Somos un equipo de profesionales de la odontología comprometidos con
            la salud y la belleza de tu sonrisa. Liderados por el Dr. Daniel
            Jiménez, especializado en crear sonrisas perfectas, nuestra clínica
            ofrece una amplia gama de servicios para satisfacer tus necesidades
            dentales. Contamos con la experiencia necesaria para que confies en
            nosotros.
          </p>
          <TitleSection title="Misión" />
          <p className="text-base text-justify mt-1">
            Proporcionar un servicio de calidad y comodidad para devolver la
            salud bucodental de nuestros pacientes dando una experiencia
            agradable y confortable
          </p>
          <TitleSection title="Visión" />
          <p className="text-base text-justify mt-1">
            Ser una clínica líder en atención al cliente, innovación, excelencia
            y calidad para nuestros pacientes
          </p>
          <ul className="grid w-full grid-cols-1 place-content-center place-items-center gap-3 mt-7 lg:grid-cols-2">
            {valuePoints.map((item) => (
              <CardColor key={item.id}>
                {item.icon}
                <h3 className="text-white font-semibold text-xl lg:text-base xl:text-xl">
                  {item.title}
                </h3>
              </CardColor>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
};
