import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { DocuflixLogo } from '../ui_elements/docuflix_logo';
// import kids_intro from 'kids_intro.png';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Footer } from '../nav_bar/footer';
import { ContactButton } from '../ui_elements/contact_button';
import SplashFormContainer from '../ui_elements/splash_form';

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
        <div className="splash-card-main card">
          <nav className="nav-splash">
            <div className="nav-ele">
              <DocuflixLogo logoClass={"docuflix-logo"}/>
            </div>
            <div className="btn-group-nav">
              <ContactButton 
                btnclass={"contact-btn nav-ele"}
                lnkClass={"contact-drpdwn-link"}
              />
              <Link to="/login" className="docuflix-btn nav-ele">Sign In</Link>
            </div>
          </nav>
          <div className="sign-up-starter">
            <h1>Almost unlimited documentaries, and... actually nothing more</h1>
            <h3>Watch in your browser. Cancel... There is nothing to cancel :)</h3>
            <h3>Ready? Let's go!! We just need your email below to get started.</h3>
            
            <SplashFormContainer />
            
          </div>
        </div>

        <div className='card cards-below'>
          <img
            src="https://docuflix-seeds-pro.s3.amazonaws.com/ui_images/kids_intro.png" 
            className="img-splash"/>
          <div className="cards-below-txt">
            <h1>Profiles for kids</h1>
            <h2>Our special collection of their favorite shows! We have the best documentaries to entertain young voracious minds</h2>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
