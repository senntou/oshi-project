'use client';
import { IoMdMicrophone } from 'react-icons/io';

type NameCardProps = {
  children: string;
};

const EntertainerNameCard = ({ children }: NameCardProps) => {
  return (
    <div className="flex h-20 justify-between w-full p-5 border border-gray-200">
      <div className="flex">
        <div
          className="rounded-lg bg-pink-200 p-2 mr-3 flex items-center justify-center"
          style={{ width: '40px', height: '40px' }}
        >
          <IoMdMicrophone className="text-gray-800 text-2xl" />
        </div>
        <h2 className="my-auto text-2xl font-MPlusRounded1c text-gray-800">
          {children}
        </h2>
      </div>
    </div>
  );
};

export default EntertainerNameCard;
