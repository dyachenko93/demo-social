import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
// import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { follow, unfollow, changePage, setToggleIsFollowProcessing, getUsers } from '../../redux/users-reducer';
import { getCurrentPage, getisFetching, getIsFetchingProcessing, getPageSize, getUsersCount, getUsersSelector } from '../../redux/users-selectors';
import Preloader from '../common/Preloader';
import Users from './Users';

class UsersContainer extends React.Component {

  componentDidMount() {
    let { currentPage, pageSize, getUsers } = this.props
    getUsers(currentPage, pageSize)
  }

  changePage = (page) => {
    let { pageSize, getUsers, changePage } = this.props
    getUsers(page, pageSize)
    changePage(page)
  }

  render() {
    let { pageSize, isFetching, totalUsersCount, currentPage, 
      users, follow, unfollow, setToggleIsFollowProcessing, 
      isFetchingProcessing } = this.props
    return <>
      {isFetching ? <Preloader /> : null}
      <Users totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        changePage={this.changePage}
        users={users}
        follow={follow}
        unfollow={unfollow}
        setToggleIsFollowProcessing={setToggleIsFollowProcessing}
        isFetchingProcessing={isFetchingProcessing}
      />
    </>
  }
}

// let mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     isFetchingProcessing: state.usersPage.isFetchingProcessing
//   }
// }

let mapStateToProps = (state) => {
  return {
    users: getUsersSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getisFetching(state),
    isFetchingProcessing: getIsFetchingProcessing(state)
  }
}

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    changePage,
    setToggleIsFollowProcessing,
    getUsers
  }),
  // withAuthRedirect
)(UsersContainer)