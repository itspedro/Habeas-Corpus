import "./form-input.css";

type options = {
  value: string;
  label: string;
}

interface FormSelectProps {
  label: string;
  name: string;
  options: Array<options>;
  register: any;
  error: any;
}

function FormSelect(props: FormSelectProps) {
  return (
    <div className="form-input_container">
    <label htmlFor={props.name}>{props.label}</label>
    <select
      className="form-input_container__input"
      {...props.register(props.name, { required: true })}
    >
      {props.options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {props.error && 
      <span className="form-input_container__input-error">
        {props.error.message}
      </span>
    }
  </div>
  )
}

export default FormSelect;