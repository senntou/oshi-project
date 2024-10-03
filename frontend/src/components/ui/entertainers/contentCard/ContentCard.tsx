import { Content } from '@/types/contentCategory';

type Props = {
  content: Content;
};
const ContentCard = (props: Props) => {
  return (
    <div className="border border-b-0 border-gray-200 p-5">
      <p className="mb-2 text-gray-500">{props.content.title}</p>
      <p className="mb-2 text-gray-500">{props.content.description}</p>
    </div>
  );
};

export default ContentCard;
