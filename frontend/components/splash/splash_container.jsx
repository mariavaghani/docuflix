import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.props.history.replace({
      pathname: "/"
    });
  }

  render() {
    return (
      <div>
        <h1>Almost unlimited documentaries, and... actully nothing more</h1>
        <h2>Watch in your browser. Cancel... There is nothing to cancel :)</h2>
        <h2>Ready? Let's go!!</h2>
        <Link to="/login">Sign In</Link>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
