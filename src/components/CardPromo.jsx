// eslint-disable-next-line react/prop-types
export const CardPromo = ({ imgSrc, alt }) => {
  return (
    <article className="w-full flex justify-center items-center flex-col">
      <a
        href="https://wa.me/523325205675"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={imgSrc}
          alt={alt}
          className="w-full rounded-2xl mb-5 md:hover:scale-90 duration-300"
          width="1080"
          height="1080"
        />
      </a>
      <a
        data-ripple-light="true"
        className="select-none rounded-lg bg-cyan-500 py-3 px-6 text-center align-middle font-semibold text-white shadow-md shadow-gray-500/20 transition-all hover:shadow-lg hover:shadow-slate-500 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        href="https://wa.me/523325205675"
      >
        Agenda tu cita
      </a>
    </article>
  );
};
