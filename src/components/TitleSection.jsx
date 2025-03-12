// eslint-disable-next-line react/prop-types
export const TitleSection = ({ title }) => {
  return (
    <div className="w-full flex justify-start items-center gap-4 lg:gap-8">
      <h2 className="text-nowrap text-2xl font-bold text-primary uppercase lg:text-3xl">
        {title}
      </h2>
    </div>
  );
};
