'use client';
import { IoMdMicrophone } from 'react-icons/io';

type NameCardProps = {
  children: string;
};

const ActorNameCard = ({ children }: NameCardProps) => {
  return (
    <div className="flex h-20 w-full justify-between border border-gray-200 p-5">
      <div className="flex">
        <div
          className="mr-3 flex items-center justify-center rounded-lg bg-pink-200 p-2"
          style={{ width: '40px', height: '40px' }}
        >
          <IoMdMicrophone className="text-2xl text-gray-800" />
        </div>
        <h2 className="my-auto font-MPlusRounded1c text-2xl text-gray-800">
          {children}
        </h2>
      </div>
    </div>
  );
};

export default ActorNameCard;
