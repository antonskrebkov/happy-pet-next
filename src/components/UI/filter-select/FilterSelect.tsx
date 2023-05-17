import { FC } from "react";
import Select from "react-select";

interface IOption {
  value: string;
  label: string;
}

interface FilterSelectProps {
  options: IOption[];
  placeholder: string;
}

const FilterSelect: FC<FilterSelectProps> = ({ options, placeholder }) => {
  return (
    <Select
      styles={{
        valueContainer: () => ({
          display: "flex",
          width: "100%",
        }),
        control: () => ({
          cursor: "pointer",
          display: "flex",
          height: "24px",
          borderBottom: "1px solid #000",
        }),
        singleValue: () => ({
          fontSize: "15px",
          fontWeight: "400",
          paddingTop: "3px",
        }),
        indicatorSeparator: () => ({
          display: "none",
        }),
        dropdownIndicator: () => ({
          width: "16px",
          height: "20px",
        }),
        placeholder: () => ({
          color: "#000",
          fontSize: "15px",
          fontWeight: "400",
          paddingTop: "3px",
        }),
        menu: () => ({
          position: "relative",
          zIndex: 1,
        }),
        menuList: (baseStyles) => ({
          ...baseStyles,
          padding: 0,
          backgroundColor: "#fbf6ed",
          border: "none",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
        }),
        option: () => ({
          fontSize: "15px",
          padding: "7px 5px",
          fontWeight: "400",
          transition: "background-color .2s",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "#f2e1c3",
          },
        }),
      }}
      placeholder={placeholder}
      isSearchable={false}
      options={options}
    />
  );
};

export default FilterSelect;
