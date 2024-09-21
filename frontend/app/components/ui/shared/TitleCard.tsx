type TitleCardProps = {
  children: string;
};

const TitleCard = ({ children }: TitleCardProps) => {
  return (
    <div className="flex h-14 justify-between w-full p-1 px-5 ">
      <h2 className="my-auto text-2xl font-MPlusRounded1c text-gray-800">
        {children}
      </h2>
    </div>
  );
};

export default TitleCard;
