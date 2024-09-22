'use client';
import ContentCatergoryList from '@/app/components/ui/entertainers/ContentCategoryList';
import EntertainerNameCard from '@/app/components/ui/entertainers/EntertainerNameCard';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { RiStickyNoteAddLine } from 'react-icons/ri';

// TODO: APIからデータを取得する
const entertainer = {
  name: '楠木ともり',
  contentCategories: {
    anime: [
      {
        title: 'ひきこまり吸血鬼の悶々',
        period: '2023年10月~12月',
        description: '楠木ともりが出演するアニメ。',
      },
      {
        title: 'チェンソーマン',
        period: '2022年10月~12月',
        description: 'マキマさんがかっこいいアニメ。',
      },
    ],
    radio: [
      {
        title: '楠木ともりのこと。',
        schedule_type: '隔週',
        schedule_day: '木曜日',
        description: '基本無料（おまけパートのみ有料）',
      },
      {
        title: '楠木ともり The Music Reverie',
        schedule_type: '不定期',
        schedule_day: null,
        description: '有料（radikoプレミアム）',
      },
    ],
    live: [
      {
        title: '楠木ともり Birthday Live 2024',
        place: '横浜BUNTAI',
        date: '2024年12月22日',
        description: '楠木ともりのライブイベント。',
      },
      {
        title: '楠木ともり LIVE 2024 ツキノミチカケ【大阪】',
        place: '大阪城野外音楽堂',
        date: '2024年8月10日',
        description: '楠木ともりのライブイベント。',
      },
    ],
  },
};

const EntertainerPage = () => {
  const router = useRouter();
  const { entertainerId } = useParams();
  const onClickNewButton = () => {
    router.push(`/actors/${entertainerId}/contents/new`);
  };

  return (
    <div className="flex flex-col h-full w-full">
      <EntertainerNameCard>{entertainer.name}</EntertainerNameCard>
      <div className="flex h-full max-h-full w-full justify-center">
        <div className="relative h-full w-full">
          <div className="absolute top-0 bottom-0 left-0 right-0 overflow-y-scroll no-scrollbar">
            <ContentCatergoryList
              contentCategories={entertainer.contentCategories}
            />
          </div>
        </div>

        <div className="relative">
          <button
            onClick={onClickNewButton}
            className="absolute bottom-5 right-5 bg-basecolor text-2xl text-white rounded-full p-2 shadow"
          >
            <RiStickyNoteAddLine />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EntertainerPage;
