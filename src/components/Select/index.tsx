import React, { PropsWithChildren, SelectHTMLAttributes } from 'react';
import { SelectStyled } from './styles';

interface IOptions {
  value: string;
  name: string;
}

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  options: IOptions[];
}

const Select: React.FC<ISelectProps> = ({
  id,
  options,
  ...rest
}: PropsWithChildren<ISelectProps>) => (
  <SelectStyled id={id} defaultValue="" {...rest}>
    <option value="" disabled hidden>
      {id}
    </option>

    {options.map(value => (
      <option key={value.value} value={value.value}>
        {value.name}
      </option>
    ))}
  </SelectStyled>
);

export default Select;
