import React from 'react';
// import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status || "qwe" 
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status })
    }
  }

  activateEditMode = () => {
    this.setState({editMode: true})
  }
  
  deactivateEditMode = () => {
    this.props.updateStatus(this.state.status)
    this.setState({editMode: false})
  }

  onStatusChange = (e) => {
    this.setState({status: e.currentTarget.value})
  }

  render() {
    return (
      <>
        {!this.state.editMode ?
          <div>
            <span onDoubleClick={this.activateEditMode}><b>{this.props.status || "qwe"}</b></span>
          </div>
          :
          <div>
            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
          </div>
        }
      </>
    )
  }
}

export default ProfileStatus;