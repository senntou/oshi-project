import { forwardRef } from 'react';

type Props = {
  title: string;
  placeholder: string;
};

const InputField = forwardRef<HTMLInputElement, Props>(
  ({ title, placeholder }, ref) => {
    return (
      <div className="x-full">
        <label className="mb-1 block text-sm font-medium text-gray-700">
          {title}
        </label>
        <input
          ref={ref}
          type="text"
          className="block w-full p-1 rounded-md border border-gray-300 shadow-sm"
          placeholder={placeholder}
        />
      </div>
    );
  }
);

InputField.displayName = 'InputField';

export default InputField;
