import { RiStickyNoteAddFill } from 'react-icons/ri';

type TitleCardProps = {
  children: string;
};

const TitleCard = ({ children }: TitleCardProps) => {
  return (
    <div className="flex h-20 justify-between w-full p-5 border border-gray-200">
      <div className="flex">
        <div
          className="rounded-lg bg-green-100 p-2 mr-3 text-xl flex items-center justify-center"
          style={{ width: '40px', height: '40px' }}
        >
          <RiStickyNoteAddFill />
        </div>
        <h2 className="my-auto text-2xl font-MPlusRounded1c text-gray-800">
          {children}
        </h2>
      </div>
    </div>
  );
};

export default TitleCard;
