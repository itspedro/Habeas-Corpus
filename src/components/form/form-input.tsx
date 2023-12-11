import "./form-input.css";
import InputMask from "react-input-mask";

interface FormInputProps {
  label: string;
  name: string;
  mask?: string;
  type: string;
  register: any;
  error: any;
  value?: string;
}

function FormInput(props: FormInputProps) {
  return (
    <div className="form-input_container">
      <label htmlFor={props.name}>{props.label}</label>
      {props.mask ? (
        <InputMask
          className="form-input_container__input"
          mask={props.mask}
          defaultValue={props.value}
          {...props.register(props.name, { required: true })}
        />
      ) : (
        <input
          className="form-input_container__input"
          type={props.type}
          defaultValue={props.value}
          {...props.register(props.name, { required: true })}
        />
      )}
      {props.error && (
        <span className="form-input_container__input-error">
          {props.error.message}
        </span>
      )}
    </div>
  );
}

export default FormInput;
