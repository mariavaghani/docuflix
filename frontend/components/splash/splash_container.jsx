import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { DocuflixLogo } from '../ui_elements/docuflix_logo';
// import kids_intro from 'kids_intro.png';
import { withTranslation } from 'react-i18next';

// Font Awesome
import { Footer } from '../nav_bar/footer';
import { ContactButton } from '../ui_elements/contact_button';
import { ChangeLanguageButton } from '../ui_elements/change_language_button';
import SplashFormContainer from '../ui_elements/splash_form';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.props.history.replace({
      pathname: "/"
    });
    
  }

  render() {
    const { t } = this.props;
    return (
      <div>
        <div className="splash-card-main card div-100">
          <nav className="nav-splash">
            <div className="nav-ele">
              <DocuflixLogo logoClass={"docuflix-logo"}/>
            </div>
            <div className="btn-group-nav">
              <ChangeLanguageButton 
                btnClass={"contact-btn nav-ele"}
                dropClass={"contact-drpdwn"}
              />
              <ContactButton 
                btnClass={"contact-btn nav-ele"}
                dropClass={"contact-drpdwn"}
              />
              <Link to="/login" className="docuflix-btn nav-ele">{ t("Sign In") }</Link>
            </div>
          </nav>
          <div className="sign-up-starter div-60">
            <h1>Almost unlimited documentaries, and... actually nothing more</h1>
            <h3>Watch in your browser. Cancel... There is nothing to cancel :</h3>
            <h3>Ready? Let's go!! We just need your email below to get started.</h3>
            
            <SplashFormContainer />
            
          </div>
        </div>

        <div className='card cards-below'>
          <img
            src={window.kidsIntroUrl}
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

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Splash));
