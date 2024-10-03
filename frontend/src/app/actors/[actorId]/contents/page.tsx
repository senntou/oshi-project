'use client';
import ContentCatergoryList from '@/components/ui/entertainers/ContentCategoryList';
import ActorNameCard from '@/components/ui/entertainers/EntertainerNameCard';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { RiStickyNoteAddLine } from 'react-icons/ri';

// TODO: APIからデータを取得する
const actor = {
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

const ActorPage = () => {
  const router = useRouter();
  const { actorId } = useParams();
  const onClickNewButton = () => {
    router.push(`/actors/${actorId}/contents/new`);
  };

  return (
    <div className="flex size-full flex-col">
      <ActorNameCard>{actor.name}</ActorNameCard>
      <div className="flex size-full max-h-full justify-center">
        <div className="relative size-full">
          <div className="no-scrollbar absolute inset-0 overflow-y-scroll">
            <ContentCatergoryList contentCategories={actor.contentCategories} />
          </div>
        </div>

        <div className="relative">
          <button
            onClick={onClickNewButton}
            className="absolute bottom-5 right-5 rounded-full bg-basecolor p-2 text-2xl text-white shadow"
          >
            <RiStickyNoteAddLine />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActorPage;
