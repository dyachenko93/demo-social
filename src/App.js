import React from 'react';
import { HashRouter, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import './App.css';
import NavbarContainer from './components/Navbar/NavbarContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import HeaderComponent from './components/Header/HeaderContainer';
import LoginPage from './components/Login/LoginContainer';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer'
import Preloader from './components/common/Preloader';
import store from './redux/redux-store';
import { SuspenseWrapper } from './components/common/SuspenseWrapper';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
// import ProfileContainer from './components/Profile/ProfileContainer';
// import UsersContainer from './components/Users/UsersContainer';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if (!this.props.initialized)
      return <Preloader />
    return (
      <div className="app-wrapper">
        <HeaderComponent />
        <NavbarContainer />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile/:userId" element={<SuspenseWrapper component={<ProfileContainer />} />} />
            <Route path="/profile" element={<SuspenseWrapper component={<ProfileContainer />} />} />
            <Route path="/dialogs/*" element={<SuspenseWrapper component={<DialogsContainer />} />} />
            <Route path="/users" element={<SuspenseWrapper component={<UsersContainer />} />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </div>
    )
  }
}

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

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App)

const MainApp = (props) => {
  return (
    // <BrowserRouter basename={process.env.PUBLIC_URL}>
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  )
}

export default MainApp