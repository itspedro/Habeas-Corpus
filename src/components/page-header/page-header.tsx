import "./page-header.css";

interface PageHeaderProps {
  setModalIsOpen: (value: boolean) => void;
  title: string;
  label: string;
}

function PageHeader({ setModalIsOpen, title, label }: PageHeaderProps) {
  return (
    <div className="page-header_container">
      <h1>{title}</h1>
      <button
        className="page-header_container__button"
        onClick={() => setModalIsOpen(true)}
      >
        {label}
      </button>
    </div>
  );
}

export default PageHeader;
