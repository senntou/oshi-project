import { forwardRef } from 'react';

type Props = {
  title: string;
  placeholder: string;
};

const InputField = forwardRef<HTMLInputElement, Props>(
  ({ title, placeholder }, ref) => {
    return (
      <div className="">
        <label className="mb-1 block text-sm font-medium text-gray-700">
          {title}
        </label>
        <input
          ref={ref}
          type="text"
          className="block w-full rounded-md border border-gray-300 p-1 shadow-sm"
          placeholder={placeholder}
        />
      </div>
    );
  }
);

InputField.displayName = 'InputField';

export default InputField;
