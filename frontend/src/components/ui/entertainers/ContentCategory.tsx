'use client';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import { useState, useEffect, useRef } from 'react';
import { Content } from '@/types/contentCategory';
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
    <div className="rounded-lg border border-gray-200 shadow-md">
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between p-5"
      >
        <span>
          {categoryNames[props.category as keyof typeof categoryNames]}
        </span>
        <div className="flex space-x-1">
          <span className="rounded-full bg-gray-200 px-2 text-gray-800">
            {props.contents.length}
          </span>
          {isOpen ? (
            <SlArrowUp className="m-auto size-5" />
          ) : (
            <SlArrowDown className="m-auto size-5" />
          )}
        </div>
      </button>

      <div
        ref={contentRef}
        className="max-h-0 overflow-hidden duration-300 ease-in-out"
      >
        {props.category === 'anime' && <AnimeList content={props.contents} />}
        {props.category === 'radio' && <RadioList content={props.contents} />}
        {props.category === 'live' && <LiveList content={props.contents} />}
      </div>
    </div>
  );
};

export default ContentCategory;
