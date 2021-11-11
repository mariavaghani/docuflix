import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUserProfiles } from '../../actions/profiles_actions'
import ProfileRatingsContainer from './profile_ratings'

class ProfileRatingIndex extends Component {

  componentDidMount() {
    console.log(`this.props.userProfiles: `, this.props.userProfiles.length === 0);
    
    // if (this.props.userProfiles.length === 0) 
    this.props.fetchUserProfiles(this.props.user.id)
  }

  render() {
    console.log(`this.props.user: `, this.props.user);
    console.log(`this.props.userProfiles: `, this.props.userProfiles);
    
    return (
      <div >
        <ul>
          {
          this.props.userProfiles.map(profile => {
            return (<ProfileRatingsContainer key={profile.id}
              profile={profile}
              
              />)
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userProfiles: Object.values(state.entities.profiles)
})

const mapDispatchToProps = (dispatch) => ({
  fetchUserProfiles: (userId) => dispatch(fetchUserProfiles(userId)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileRatingIndex)
