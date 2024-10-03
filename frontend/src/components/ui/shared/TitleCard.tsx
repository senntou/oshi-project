import { RiStickyNoteAddFill } from 'react-icons/ri';

type TitleCardProps = {
  children: string;
};

const TitleCard = ({ children }: TitleCardProps) => {
  return (
    <div className="flex h-20 w-full justify-between border border-gray-200 p-5">
      <div className="flex">
        <div
          className="mr-3 flex items-center justify-center rounded-lg bg-green-100 p-2 text-xl"
          style={{ width: '40px', height: '40px' }}
        >
          <RiStickyNoteAddFill />
        </div>
        <h2 className="my-auto font-MPlusRounded1c text-2xl text-gray-800">
          {children}
        </h2>
      </div>
    </div>
  );
};

export default TitleCard;
