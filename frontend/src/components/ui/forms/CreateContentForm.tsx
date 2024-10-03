'use client';

import { useRef, useState } from 'react';
import InputField from './InputField';
import TextAreaField from './TextAreaField';
import { Schedule } from '@/types/schedule';
import { Category } from '@/types/category';

const CreateContentForm = () => {
  // categoryの値に応じて表示を切り替えるため、useStateを使用
  const [category, setCategory] = useState<string>('');
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const [scheduleType, setScheduleType] = useState<string>('');

  const onChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };
  const onChangeSchedule = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setScheduleType(e.target.value);
  };

  const onSubmit = async () => {
    // TODO: APIにデータを送信する
  };
  return (
    <form onSubmit={onSubmit} className="flex flex-col space-y-2 p-5">
      {/* 演者名 */}
      <div className="">
        <label className="mb-1 block text-sm font-medium text-gray-700">
          演者名
        </label>
        <input
          type="text"
          disabled
          value="楠木ともり"
          className="block w-full rounded-md border border-gray-300 p-1 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-600"
          placeholder="Full name"
        />
      </div>

      {/* カテゴリー */}
      <div className="">
        <label className="mb-1 block text-sm font-medium text-gray-700">
          カテゴリー
        </label>
        <select
          onChange={onChangeCategory}
          className="block w-full rounded-md border-gray-300 p-1 shadow-sm focus:ring"
        >
          <option value="NULL">未選択</option>
          <option value={Category.Anime}>アニメ</option>
          <option value={Category.Radio}>ラジオ</option>
          <option value={Category.Live}>ライブ</option>
        </select>
      </div>

      {/* アニメ用フォーム */}
      {category === 'ANIME' && (
        <div className="space-y-2">
          {/* タイトル */}
          <InputField
            title="タイトル"
            ref={titleRef}
            placeholder="アニメのタイトル"
          />
          {/* 説明 */}
          <TextAreaField
            title="説明"
            ref={descriptionRef}
            placeholder="出演キャラの名前など"
          />
        </div>
      )}

      {/* ラジオ用フォーム */}
      {category === 'RADIO' && (
        <div className="space-y-2">
          {/* タイトル */}
          <InputField
            title="タイトル"
            ref={titleRef}
            placeholder="ラジオのタイトル"
          />
          {/* 説明 */}
          <TextAreaField
            title="説明"
            ref={descriptionRef}
            placeholder="視聴方法・有料/無料など"
          />
        </div>
      )}

      {/* ライブ用フォーム */}
      {category === 'LIVE' && (
        <div className="space-y-2">
          {/* タイトル */}
          <InputField
            title="タイトル"
            ref={titleRef}
            placeholder="ライブのタイトル"
          />
          {/* 説明 */}
          <TextAreaField
            title="説明"
            ref={descriptionRef}
            placeholder="場所やチケット販売情報など"
          />
        </div>
      )}

      {/* 日程 */}
      {category !== 'NULL' && (
        <div className="space-y-1">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            日程
          </label>
          <select
            onChange={onChangeSchedule}
            className="block w-full rounded-md border-gray-300 p-1 shadow-sm focus:ring"
          >
            <option value="NULL">未選択</option>
            <option value={Schedule.Specific}>指定日</option>
            <option value={Schedule.Weekly}>毎週</option>
            <option value={Schedule.HalfMonthly}>隔週</option>
            <option value={Schedule.Monthly}>毎月</option>
            <option value={Schedule.Irregular}>不定期</option>
          </select>

          {/* 指定日 */}
          {scheduleType === Schedule.Specific && (
            <InputField
              title="日付"
              ref={titleRef}
              placeholder="2024年12月22日"
            />
          )}
          {/* 毎週 */}
        </div>
      )}
    </form>
  );
};

export default CreateContentForm;
