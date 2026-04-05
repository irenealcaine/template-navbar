import "./Pagination.css";
import { useContext, useMemo } from "react";
import { DarkModeContext } from "../../Context/darkModeContext";

const Pagination = ({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  siblingCount = 1,
}) => {
  const { darkMode } = useContext(DarkModeContext);

  const safeTotalPages = Math.max(1, totalPages);
  const safeCurrentPage = Math.min(Math.max(1, currentPage), safeTotalPages);

  const handlePageChange = (page) => {
    if (
      !onPageChange ||
      page === safeCurrentPage ||
      page < 1 ||
      page > safeTotalPages
    ) {
      return;
    }

    onPageChange(page);
  };

  const pageItems = useMemo(() => {
    if (safeTotalPages <= 7) {
      return Array.from({ length: safeTotalPages }, (_, index) => index + 1);
    }

    if (safeCurrentPage <= 3) {
      return [1, 2, 3, 4, "...", safeTotalPages];
    }

    if (safeCurrentPage >= safeTotalPages - 2) {
      return [
        1,
        "...",
        safeTotalPages - 3,
        safeTotalPages - 2,
        safeTotalPages - 1,
        safeTotalPages,
      ];
    }

    const startPage = Math.max(2, safeCurrentPage - siblingCount);
    const endPage = Math.min(
      safeTotalPages - 1,
      safeCurrentPage + siblingCount
    );
    const middlePages = Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );

    return [1, "...", ...middlePages, "...", safeTotalPages];
  }, [safeCurrentPage, safeTotalPages, siblingCount]);

  return (
    <div className="pagination-demo">
      <nav
        className={`pagination ${darkMode ? "dark" : ""}`}
        aria-label="Paginación"
      >
        <button
          type="button"
          className="pagination-control"
          onClick={() => handlePageChange(safeCurrentPage - 1)}
          disabled={safeCurrentPage === 1}
        >
          &#60;
        </button>

        <div className="pagination-pages">
          {pageItems.map((item, index) =>
            item === "..." ? (
              <span key={`ellipsis-${index}`} className="pagination-ellipsis">
                ...
              </span>
            ) : (
              <button
                type="button"
                key={item}
                className={`pagination-page ${
                  item === safeCurrentPage ? "active" : ""
                }`}
                onClick={() => handlePageChange(item)}
                aria-current={item === safeCurrentPage ? "page" : undefined}
              >
                {item}
              </button>
            )
          )}
        </div>

        <button
          type="button"
          className="pagination-control"
          onClick={() => handlePageChange(safeCurrentPage + 1)}
          disabled={safeCurrentPage === safeTotalPages}
        >
          &#62;
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
