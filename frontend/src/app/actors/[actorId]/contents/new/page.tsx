'use client';

import CreateContentForm from '@/src/components/ui/forms/CreateContentForm';
import TitleCard from '@/src/components/ui/shared/TitleCard';

const CreateContentPage = () => {
  return (
    <div className="">
      <TitleCard>コンテンツ作成</TitleCard>
      <CreateContentForm />
    </div>
  );
};

export default CreateContentPage;
