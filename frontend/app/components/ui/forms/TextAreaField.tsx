import { forwardRef } from 'react';

type Props = {
  title: string;
  placeholder: string;
};

const TextAreaField = forwardRef<HTMLTextAreaElement, Props>(
  ({ title, placeholder }, ref) => {
    return (
      <div className="x-full">
        <label className="mb-1 block text-sm font-medium text-gray-700">
          {title}
        </label>
        <textarea
          ref={ref}
          className="block w-full p-1 rounded-md border border-gray-300 shadow-sm"
          placeholder={placeholder}
        />
      </div>
    );
  }
);

TextAreaField.displayName = 'TextAreaField';

export default TextAreaField;
