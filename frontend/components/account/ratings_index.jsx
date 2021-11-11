import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMoreProfileRatings, fetchProfileRatings } from '../../actions/rating_actions'
import { selectRatingsByProfile } from '../../selectors/ratings_selectors';
import RatingsControlItemContainer from './ratings_control_item';

class RatingsIndex extends Component {

  componentDidMount() {
    this.props.fetchRatings(this.props.profile.id)
  }



  render() {
    console.log(`this.props.ratings: `, this.props.ratings);
    
    return (
      <div>
        <ul>
          {
          this.props.ratings.map(rating => {
            return (<RatingsControlItemContainer key={rating.id} rating={rating} profile={this.props.profile}/>)
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  ratings: selectRatingsByProfile(state.entities.ratings, ownProps.profile.id)
})

const mapDispatchToProps = (dispatch) => ({
  fetchRatings: (profileId) => dispatch(fetchMoreProfileRatings(profileId))
})

export default connect(mapStateToProps, mapDispatchToProps)(RatingsIndex)
