import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { logout } from "../../actions/session_actions";

class ProfileDropdown extends React.Component {

  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);

  }

  handleLogout() {

    this.props.logout()
      .then((e) => this.props.history.push({ pathname: "/" }));
  }
  

  render() {
    const btnClass = this.props.btnClass;
    const dropClass = this.props.dropClass;
    return (
    
      <div className="drpdwn-container ">
        <button className={"drpdwn-btn " + btnClass}>
          Choose Profile
        </button>
        <div className={"dropdown-list " + dropClass}>
          <ul>
            <li>
              <Link to="/YourAccount">Account</Link>
            </li>
            <li>
              <button
                onClick={this.handleLogout}
                className="docuflix-btn"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    
    )
    
  }
}


const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileDropdown))
