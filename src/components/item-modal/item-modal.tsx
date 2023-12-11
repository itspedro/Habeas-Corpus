import "./item-modal.css";

interface ItemModalProps<T extends object> {
  data: T;
  setModal: (value: boolean) => void;
}

function ItemModal<T extends object>({ data, setModal }: ItemModalProps<T>) {
  const keys = Object.keys(data);

  return (
    <div className="item-modal">
      <section className="item-modal_container">
        <div className="item-modal_container__div__header">
          <h2 className="item-modal_container__div__title">Detalhes</h2>
          <button className="item-modal_close" onClick={() => setModal(false)}>
            &#10006;
          </button>
        </div>
        <div className="item-modal_container__div">
          {keys
            .filter((k) => k !== "status")
            .filter((k) => k !== "alunos")
            .map((key, index) => (
              <div
                key={index}
                className="item-modal_container__div__content-div"
              >
                <h3 className="item-modal_container__div__content-div__label">
                  {key}
                </h3>
                <p className="item-modal_container__div__content-div__data">
                  {data[key as keyof T] as React.ReactNode}
                </p>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}

export default ItemModal;
