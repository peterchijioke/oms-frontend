import React, { useState } from "react";

interface Option {
  value: string;
  label?: string;
}

const AppDropDown = ({ options, label, onChange }: Props) => {
  const [selectedValue, setSelectedValue] = useState<string>(options[0].value);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div className="mb-3">
      {label && (
        <label htmlFor="dropdown" className="form-label block text-gray-700">
          {label}
        </label>
      )}
      <select
        id="dropdown"
        value={selectedValue}
        onChange={handleChange}
        className="form-select rounded border-gray-300 py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

type Props = {
  options: Option[];
  label?: string;
  onChange?: (value: string) => void;
};

export default AppDropDown;
