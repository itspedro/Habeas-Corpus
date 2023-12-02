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

  const maxShownPages = 4;

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
      {Array.from({ length: totalPages }).map((_, index) => {
          const page = index + 1;
          const isFirstOrLastPage = page === 1 || page === totalPages; // Se fpr a primeira ou ultima pagina
          const isInRange = page > curPage - maxShownPages && page < curPage + maxShownPages; // ou se for entre o numero de paginas
          if(isFirstOrLastPage || isInRange) {
            return (
              <li key={page} className="pagination_container__list-item">
                <button
                  className={`pagination_container__list-item__button ${curPage === page ? 'active' : ''}`}
                  onClick={() => setCurPage(page)}
                  >
                  {page}
                </button>
              </li>
            )
          }
          return null;
      })}
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