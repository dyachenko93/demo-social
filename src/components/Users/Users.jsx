import React from "react"
// import Pagination from "../common/Pagination"
import PaginationNew from "../common/PaginationNew"
import User from "./User"

let Users = ({users, totalUsersCount, pageSize, isFetchingProcessing, follow, unfollow, currentPage, changePage}) => {

  let pageCount = Math.ceil(totalUsersCount / pageSize)

  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }

  return <div>
    {/* <Pagination pages={pages} pageCount={pageCount} currentPage={currentPage} changePage={changePage}/> */}
    <PaginationNew totalItemsCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage} onPageChanged={changePage} portionSize={10} />
    {users.map(u => 
      <User key={"user_"+u.id} user={u} isFetchingProcessing={isFetchingProcessing} follow={follow} unfollow={unfollow} />
    )}
  </div>
}

export default Users