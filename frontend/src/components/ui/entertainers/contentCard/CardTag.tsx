type Props = {
  children: string;
  type: 'schedule_type' | 'schedule_day';
};

const CardTag = (props: Props) => {
  const getColorClasses = (type: Props['type']) => {
    switch (type) {
      case 'schedule_type':
        return 'bg-blue-100 text-blue-800';
      case 'schedule_day':
        return 'bg-green-100 text-green-800';
      default:
        return '';
    }
  };

  return (
    <span className={`rounded px-2 py-1 ${getColorClasses(props.type)}`}>
      {props.children}
    </span>
  );
};

export default CardTag;
