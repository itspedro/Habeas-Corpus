import { ChevronLeft, ChevronRight } from '../icons';
import './pagination.css';

interface PaginationProps {
  totalPages: number
  setCurPage: (page: number) => void
  curPage: number
}

function Pagination(
  {
    totalPages,
    setCurPage,
    curPage
  }: PaginationProps
) {

  if (curPage > totalPages) {
    setCurPage(1);
  }

  return (
    <nav className="pagination_container">
    <ul className="pagination_container__list">
      <li className="pagination_container__list-item">
        <button className="pagination_container__list-item__button"
          disabled={curPage === 1}
          onClick={() => curPage > 1 && setCurPage(curPage - 1)}
        >
          <ChevronLeft />
        </button>
      </li>

      {Array.from({ length: totalPages }).map((_, index) => (
          <li key={index} className="pagination_container__list-item">
            <button
              className={`pagination_container__list-item__button ${curPage === index + 1 ? 'active' : ''}`}
              onClick={() => setCurPage(index + 1)}
            >
              {index + 1}
            </button>
          </li>
      ))}
      <li className="results_container_pagination__list-item">
        <button className="pagination_container__list-item__button"
          disabled={curPage === totalPages}
          onClick={() => curPage < totalPages && setCurPage(curPage + 1)}
        >
          <ChevronRight />
        </button>
      </li>
    </ul>

  </nav>
  )
}

export default Pagination