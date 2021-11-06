import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Footer } from '../nav_bar/footer'
import UpdateUserInfoContainer from './update_user_info'

class AccountPage extends Component {
  render() {

    return (
      <div className="light-mode fixed-nav">
        <div className="div-80">

          <div className="ap-grid ap-card div-100">
            <h3>Account</h3>
          </div>

          <div className="ap-grid ap-card div-100">
            <p>Membership</p>
            <UpdateUserInfoContainer user={this.props.user}/>
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
