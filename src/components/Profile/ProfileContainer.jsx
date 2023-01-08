import React from "react"
import { connect } from "react-redux"
import Profile from "./Profile"
import { getProfile, getStatus, updateStatus, savePhoto } from '../../redux/profile-reducer'
import { useLocation, useNavigate, useParams } from "react-router-dom"
// import { withAuthRedirect } from "../../hoc/withAuthRedirect"
import { compose } from "redux"

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }

  return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.router.params.userId
    if(!userId) {
      userId = this.props.authUserId
      if(!userId) {
        this.props.router.navigate("/login")
      }
    }
    this.props.getProfile(userId)
    this.props.getStatus(userId)
  }
  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status })
    }
    if (prevProps.router.params.userId !== this.props.router.params.userId || prevProps.authUserId !== this.props.authUserId) {
        this.refreshProfile();
      }
  }

  render() {
    return <Profile {...this.props}
                    isOwner={!this.props.router.params.userId}
                    profile={this.props.profile} 
                    status={this.props.status} 
                    updateStatus={this.props.updateStatus}
                    savePhoto={this.props.savePhoto} />
  }
}

let mapStateToProps = (state) => ({
  authUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
  profile: state.profilePage.profile,
  status: state.profilePage.status
})

export default compose(
  connect(mapStateToProps, { getProfile, getStatus, updateStatus, savePhoto }),
  withRouter,
  // withAuthRedirect
)(ProfileContainer)