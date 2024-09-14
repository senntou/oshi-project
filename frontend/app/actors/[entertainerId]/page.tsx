import ContentCatergoryList from '@/app/components/ui/actors/ContentCategoryList';
import { IoMdMicrophone } from 'react-icons/io';

type NameCardProps = {
  children: string;
};

const NameCard = ({ children }: NameCardProps) => {
  return (
    <div className="flex w-full p-5 border border-gray-200 ">
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
  );
};

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
  return (
    <div>
      <NameCard>{entertainer.name}</NameCard>
      <ContentCatergoryList contentCategories={entertainer.contentCategories} />
    </div>
  );
};

export default EntertainerPage;
