import { InputHTMLAttributes } from "react";
import { SearchIcon } from "../icons"
import "./top-bar-input-styles.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string,
  handleChange: (value: string) => void;
}

function TopBarInputIcon(props: InputProps) {
  return (
    <div className="top-bar-input_container">
      <input 
        className="top-bar-input_container__primary"
        type="text"
        placeholder="Pesquisar..."
        onChange={
          (event) => {
            props.handleChange(event.target.value);
          }
        }
        value={props.value}
      />
      <SearchIcon />
    </div>
  )
}

export default TopBarInputIcon;