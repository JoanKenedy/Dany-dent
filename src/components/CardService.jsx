// eslint-disable-next-line react/prop-types
export const CardService = ({ title, description, img, alt, className }) => {
  return (
    <div className={`card overflow-visible w-full aspect-[4/3] ${className}`}>
      <div className="content">
        <div className="back">
          <div className="back-content">
            <img
              className="w-full object-cover h-full"
              src={img}
              alt={alt}
              width="500"
              height="400"
            />
          </div>
        </div>
        <div className="front bg-gradient-to-tl from-violet-400 to-violet-500">
          <div className="front-content flex justify-center items-center gap-2 md:gap-5">
            <span className="font-semibold">{title}</span>
            <p className="text-center">{description}</p>
            <a
              data-ripple-light="true"
              className="select-none rounded-lg bg-violet-600 py-3 px-6 text-center align-middle text-xs font-bold text-white shadow-md shadow-violet-500/20 transition-all hover:scale-105 hover:shadow-lg hover:shadow-violet-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:text-sm"
              href={`https://wa.me/523325205675?text=Buenas%20tardes,%20solicito%20informaci%C3%B3n%20sobre%20su%20tratamiento%20de%20${title}`}
              rel="noopener noreferrer"
              target="_blank"
              title={`Agenda tu cita para tu tratamiento de ${title}`}
            >
              Agenda tu cita
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
