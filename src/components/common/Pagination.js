import React from "react"
import s from './pagination.module.css'

let Pagination = ({pageCount, currentPage, changePage, pages}) => {
  return <div className={s.pagination}>
    {pageCount > 10
      ? <>
        <span className={currentPage === 1 ? s.selectedPage : ''}
          onClick={() => currentPage !== 1 && changePage(1)}
        >1</span>
        <span className={currentPage === 2 ? s.selectedPage : ''}
          onClick={() => currentPage !== 2 && changePage(2)}
        >2</span>
        {currentPage > 4 && <span>...</span>}
        {currentPage > 3 && currentPage < pageCount && <span onClick={() => changePage(currentPage - 1)}>{currentPage - 1}</span>}
        {currentPage > 2 && currentPage < pageCount - 1 && <span className={s.selectedPage}>{currentPage}</span>}
        {currentPage > 1 && currentPage < pageCount - 2 && <span onClick={() => changePage(currentPage + 1)}>{currentPage + 1}</span>}
        {currentPage < pageCount - 3 && <span>...</span>}
        <span className={currentPage === pageCount - 1 ? s.selectedPage : ''}
          onClick={() => currentPage !== pageCount - 1 && changePage(pageCount - 1)}
        >{pageCount - 1}</span>
        <span className={currentPage === pageCount ? s.selectedPage : ''}
          onClick={() => currentPage !== pageCount && changePage(pageCount)}
        >{pageCount}</span>
      </>
      : pages.map(p =>
        <span className={currentPage === p ? s.selectedPage : ''}
          onClick={() => currentPage !== p && changePage(p)}
        >{p}</span>
      )
    }
  </div>
}

export default Pagination