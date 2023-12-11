import { getStudentByCPF } from "@/utils/misc";
import "./item-modal.css";

interface ItemModalProps<T extends object> {
  data: T;
  setModal: (value: boolean) => void;
}

function ItemModal<T extends object>({ data, setModal }: ItemModalProps<T>) {
  const keys = Object.keys(data);

  const getAlunos = () => {
    const alunos = data["alunos" as keyof T] as Array<any>;

    if (alunos.length > 0) {
      return (
        <>
          <h3 className="item-modal_container__div__content-div__label">Alunos</h3>
          {alunos.map((aluno, index) => {
            const alunoData = getStudentByCPF(aluno.cpf);

            return (
              <div
                key={index}
                className="item-modal_container__div__content-div"
              >
                <span className="item-modal_container__div__content-div__data">
                  {alunoData !== undefined && alunoData.nome}<br/>
                  Matricula:{" "}
                  {alunoData !== undefined && alunoData.cod_matricula}
                </span>
              </div>
            );
          })}
        </>
      );
    }

    return (
      <div className="item-modal_container__div__content-div">
        <h3 className="item-modal_container__div__content-div__label">
          Nenhum aluno cadastrado
        </h3>
      </div>
    );
  };

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
          {keys.includes("status") && (
            <div className="item-modal_container__div__content-div">
              <h3 className="item-modal_container__div__content-div__label">
                Status
              </h3>
              <span
                className={`status-badge ${
                  data["status" as keyof T] ? "ativo" : "inativo"
                }`}
              >
                {data["status" as keyof T] ? "Ativo" : "Inativo"}
              </span>
            </div>
          )}
          {keys.includes("alunos") && getAlunos()}
        </div>
      </section>
    </div>
  );
}

export default ItemModal;
