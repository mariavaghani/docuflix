import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Footer } from '../nav_bar/footer'
import ProfileRatingIndexContainer from './profile_rating_index'
import UpdateUserInfoContainer from './update_user_info'

class AccountPage extends Component {
  render() {

    return (
      <div className="light-mode pad-t-100">
        <div className="div-80 mb-30">

          <div className="ap-grid ap-card div-100">
            <h3>Account</h3>
          </div>

          <div className="ap-grid ap-card div-100">
            <h4 className="align-self-start">Membership</h4>
            <UpdateUserInfoContainer user={this.props.user}/>
          </div>
          <div className="ap-grid ap-card div-100">
            <h4 className="align-self-start">Profiles</h4>
            <ProfileRatingIndexContainer user={this.props.user}/>
          </div>

        </div>
        <Footer footerClass="div-100"/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(`state: `, state);
  
  return {
    user: state.entities.users[state.session.id]
  }
}

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage)
