import { ContentCategories } from '@/app/types/contents';
import ContentCategory from './ContentCategory';

type Props = {
  contentCategories: ContentCategories;
};

const ContentCatergoryList = (props: Props) => {
  return (
    <div className="p-1 space-y-1">
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
