import { ContentCategories } from '@/types/contents';
import ContentCategory from './ContentCategory';

type Props = {
  contentCategories: ContentCategories;
};

const ContentCatergoryList = (props: Props) => {
  return (
    <div className="flex flex-col space-y-1 p-1">
      {Object.entries(props.contentCategories).map(([category, contents]) => (
        <ContentCategory
          key={category}
          category={category}
          contents={contents}
        />
      ))}
    </div>
  );
};

export default ContentCatergoryList;
