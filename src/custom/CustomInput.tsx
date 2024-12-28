import { Input } from 'antd';
import { FC } from 'react';

interface ICustomInput {
  value: string;
  handleChange: (value: string) => void;
  placeholder?: string;  
  type?: 'text' | 'password' | 'number';  
}

const CustomInput: FC<ICustomInput> = ({ value, handleChange, placeholder = "Enter text", type = "text" }) => {
  return (
    <Input
      value={value}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onChange={(e:any) => handleChange(e.target.value)}
      className="custom-input"
      placeholder={placeholder}
      type={type}
      style={{ width: 200 }}
    />
  );
};

export default CustomInput;
