import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { MATURITY_SETTINGS } from '../../utils/profile_utils';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = props.profile;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
    this.props.history.replace({
      pathname: "/profiles/manage"
    });
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value })
  }

  updateCheckbox(field) {
    return () => {
      this.setState({ [field]: !this.state[field]})
      
    }
  }

  render() {

    // const deleteBtn = (this.props.selectedProfile && )
    
    return (

      <form onSubmit={this.handleSubmit}>
        <h2>{this.props.formType}</h2>
        <label>
          <input type="text"
            value={this.state.profileName}
            onChange={this.update("profileName")}
            className="user-edit-input"
            />
        </label>

        <label>Maturity Setting
          <select
            value={this.state.maturitySetting}
            onChange={this.update("maturitySetting")}
          >
            
            {
            MATURITY_SETTINGS.map(setting => {
              return (
              <option key={setting} value={setting}>{setting}</option>
              )
            })
            }
          </select>
        </label>

        <h5>Autoplay controls</h5>

        <label>Autoplay next episode in a series
          <input
            type="checkbox"
            checked={this.state.autoplayNextEpisode}
            onChange={this.updateCheckbox("autoplayNextEpisode")} />
        </label>

        <label>Autoplay previews while browsing in all devices
          <input
            type="checkbox"
            checked={this.state.autoplayPreview}
            onChange={this.updateCheckbox("autoplayPreview")} />
        </label>



        <input type="submit" 
        value={this.props.formType} 
          className="contact-btn-muted"
        />
        <Link to="/profiles/manage" className="contact-btn-muted">Cancel</Link>
      </form>
    )
  }
}

export default withRouter(ProfileForm);