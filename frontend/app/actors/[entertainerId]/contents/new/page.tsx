'use client';

import TitleCard from '@/app/components/ui/shared/TitleCard';

const CreateContentPage = () => {
  const onSubmit = async () => {};
  return (
    <div className="p-1">
      <TitleCard>コンテンツ作成</TitleCard>
      <form className="flex flex-col space-y-2" onSubmit={onSubmit}>
        <input className="form-control bg-gray-200" type="text" name="title" />{' '}
        <input className="bg-gray-200" type="text" name="description" />
      </form>
    </div>
  );
};

export default CreateContentPage;
