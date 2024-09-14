'use client';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import { useState, useEffect, useRef } from 'react';
import { Content } from '@/app/types/contentCategory';
import AnimeList from './contentList/AnimeList';
import RadioList from './contentList/RadioList';
import LiveList from './contentList/LiveList';

type Props = {
  category: string;
  contents: Content[];
};

const categoryNames: { [key: string]: string } = {
  anime: 'アニメ',
  radio: 'ラジオ',
  live: 'ライブ',
};

const ContentCategory = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
      } else {
        contentRef.current.style.maxHeight = '0px';
      }
    }
  }, [isOpen]);

  return (
    <div className="border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <button
        type="button"
        onClick={onClick}
        className="flex items-center justify-between w-full p-5"
      >
        <span>
          {categoryNames[props.category as keyof typeof categoryNames]}
        </span>
        <div className="flex space-x-1">
          <span className="rounded-full bg-gray-200 text-gray-800 px-2">
            {props.contents.length}
          </span>
          {isOpen ? (
            <SlArrowUp className="w-5 h-5 m-auto" />
          ) : (
            <SlArrowDown className="w-5 h-5 m-auto" />
          )}
        </div>
      </button>

      <div
        ref={contentRef}
        className="transition-max-height duration-300 ease-in-out overflow-hidden max-h-0"
      >
        {props.category === 'anime' && <AnimeList content={props.contents} />}
        {props.category === 'radio' && <RadioList content={props.contents} />}
        {props.category === 'live' && <LiveList content={props.contents} />}
      </div>
    </div>
  );
};

export default ContentCategory;
