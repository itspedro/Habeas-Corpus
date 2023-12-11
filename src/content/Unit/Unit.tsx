import "./unit.css";
import PageHeader from "@/components/page-header/page-header"
import { getUnit } from "@/utils/misc";
import { useState } from "react";
import EditUnit from "./EditUnit";


function Unit() {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const unidade = getUnit();

  return (
    <>
      <div>
        <PageHeader
          setModalIsOpen={setModalIsOpen}
          title="Unidade"
          label="Editar Unidade"
        />
        <div className="unit-content">
          <div className="unit-content__container">
            <div className="unit-content__container__info">
              <div className="unit-content__container__info__item">
                <span>Nome</span>
                <p>{unidade.nome}</p>
              </div>
              <div className="unit-content__container__info__item">
                <span>Razão Social</span>
                <p>{unidade.razaoSocial}</p>
              </div>
              <div className="unit-content__container__info__item">
                <span>CNPJ</span>
                <p>{unidade.cnpj}</p>
              </div>
              <div className="unit-content__container__info__item">
                <span >Endereço</span>
                <p>{unidade.endereco}</p>
              </div>
              <div className="unit-content__container__info__item">
                <span>Bairro</span>
                <p>{unidade.bairro}</p>
              </div>
              <div className="unit-content__container__info__item">
                <span>CEP</span>
                <p>{unidade.cep}</p>
              </div>
              <div className="unit-content__container__info__item">
                <span>Telefone</span>
                <p>{unidade.telefone}</p>
              </div>
              <div className="unit-content__container__info__item">
                <span>E-mail</span>
                <p>{unidade.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalIsOpen && <EditUnit setModalIsOpen={setModalIsOpen} currentValues={unidade} />}
    </>
  )
}

export default Unit