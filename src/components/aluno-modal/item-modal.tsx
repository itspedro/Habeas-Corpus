import './item-modal.css';
import { useForm, SubmitHandler, Path } from "react-hook-form";

interface ItemModalProps<T extends object> {
  data: T;
}


function ItemModal<T extends object>({ data }: ItemModalProps<T>) {

  const keys = Object.keys(data);
  const { handleSubmit, register } = useForm<T>();

  const onSubmit: SubmitHandler<T> = (data) => console.log(data);

  
  return (
    <div className="item-modal">
      <section className="item-modal_container">
        <form className="item-modal_container__form" onSubmit={handleSubmit(onSubmit)}>
          {keys.map((key, index) => (
            <div key={index} className="item-modal_container__form__input">
              <label htmlFor={key}>{key}</label>
              <input
                type="text"
                id={key}
                {...register(key as Path<T>)}
                defaultValue={data[key as keyof T] as string}
              />
            </div>
          ))}
          <input type="submit" />
        </form>
      </section>
    </div>
  )
}

export default ItemModal;