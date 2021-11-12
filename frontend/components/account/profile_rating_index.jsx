import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUserProfiles } from '../../actions/profiles_actions'
import ProfileRatingsContainer from './profile_ratings'

class ProfileRatingIndex extends Component {

  componentDidMount() {
    
    this.props.fetchUserProfiles(this.props.user.id)
  }

  render() {
    
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
