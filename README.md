# Docuflix

Docuflix is a clone of a video streaming platform Netflix. While Netflix gathers movies and shows to help peop relax after a long day, Docuflix presents a hand picked collection of documentaries that all directed to satisfy curiosity of every user.

Live site: [Docuflix](https://docuflix.herokuapp.com/)

The platform is implemented using the following technologies:
 - Backend : Ruby on Rails
 - Frontend : React-Redux
 - Database : PostgreSQL
 - Hosting : Heroku
 - Asset Storage: AWS S3

# MVP Overview

## Documentary preview play on hover

This feature is implemented using a combination of React event handlers and CSS styling. Each tile loads a documentary asset and remembers a global mute/unmute state.

```
export class DocumentaryIndexItem extends Component {
  constructor(props) {
    super(props)
    this.state = { showModal: false }
  }

  render() {

    const displayModal = this.state.showModal ?
      (
        <div className="documentary-preview bdr-rad-7 on-top"
        style={{transform: `translate(-${this.props.scrolledBy+50}px, 0px)`}}
        >
          <DocumentaryPreviewContainer
            documentary={this.props.documentary}
          />
        </div>
      ) : ""

    
    return (
      <li
        onMouseOver={ () => this.setState({ showModal: true }) }
        onMouseLeave={() => this.setState({ showModal: false })}
      >
        {displayModal}
        <div>
        <DocumentaryIndexCard
          documentary={this.props.documentary}
            />
        </div>
      </li>
    )
  }
}
```

https://user-images.githubusercontent.com/54246143/141483742-fca7b0c4-b1d9-4b1e-95a5-444d761d2147.mov

## My List

User is able to add and remove documentaries to their profile's watch list. Watch List shows up at the top of the Genre Index

```
const myListToggleButton = this.props.inMyList ? (
      <button className="fa-btn-circle fa-btn-lg flex-center-on-page-column"
        onClick={ () => this.props.removeFromMyList(this.props.watchListId) }>
        <FontAwesomeIcon icon={faCheck} size="lg" color={btnColor} />
      </button>
    ) : (
      <button className="fa-btn-circle fa-btn-lg flex-center-on-page-column"
          onClick={() => this.props.addToMyList(this.props.selectedProfile, this.props.documentaryId) }>
        <FontAwesomeIcon icon={faPlus} size="lg" color={btnColor} />
      </button>
    )

    const muteButtonDisplay = this.props.muted ? (
      <FontAwesomeIcon icon={faVolumeMute} size="lg" color={btnColor}/>
      ) : (
        <FontAwesomeIcon icon={faVolumeUp} size="lg" color={btnColor}/>
      );
```

https://user-images.githubusercontent.com/54246143/141483762-fdeb0e2a-500e-4b58-b502-f773cfa84728.mov

## Search

User is able to review search results while typing. Search is only available to users with selected profile

```
const containerDisplay = this.state.searchMode ? (
      <div className='div-flex align-center div-100'>
        <input type="text"
          className="search-input"
          value={this.state.searchVal}
          onChange={this.searchOnInput}
          autoFocus
          />
        <div className="fa-btn-circle fa-btn-sm ml-30 pointer flex-center-on-page-column">
          <FontAwesomeIcon icon={faTimes} size="sm" color={btnColor} onClick={this.closeSearch} />
        </div>

      </div>
    ) : (
      <FontAwesomeIcon icon={faSearch} size="lg" 
        color={btnColor} 
        onClick={ () => this.setState({searchMode:true}) }/>
    )

    const protectedSearch = this.props.selectedProfile ? (
      containerDisplay
    ) : (
      ""
    )
    return (
      <div>
        {protectedSearch}
      </div>
    )
```

https://user-images.githubusercontent.com/54246143/141484357-b790873f-36b9-4a03-96d0-1e04fde7e045.mov


## More details and watch

User is able to click a button to review a modal with more information, as well as get into the watch page. The details modal works by setting a boolean of showDocumentaryInfo to true, which triggers a re-render of a browse component, which mounts the Documentary watch modal. It also pushes the documentary id to the url, which is then parsed by the modal component to identify, which documentary was requested.


```
const mapStateToProps = (state, { location }) => {
  const id = parseInt(new URLSearchParams(location.search).get("jbv"));
  
  return {
    genres: selectGenresByDocumentary(state, id),
    documentary: state.entities.documentaries[id],

  }
}
```

https://user-images.githubusercontent.com/54246143/141485262-29201e90-5576-46a8-8fc3-f650930c356e.mov

## Profile Management

A user is able to update profile information in the manager mode, and select a watch profile when pressing on the profile bagde. 

```
render() {

    if (this.props.location.state && this.props.location.state.editProfileId) return <EditProfileFormContainer
      profileId={this.props.location.state.editProfileId}/>;

    if (this.props.location.state && this.props.location.state.addNewProfile) return <CreateProfileFormContainer/>;
    
    const pageTitle = this.state.editMode ? "Manage Profiles:" : "Who's watching?";
    const buttonText = this.state.editMode ? "Done" : "Manage Profiles";
    const newProfileForm = this.state.editMode && this.props.userProfiles.length < 5 ? this.renderAddProfileButton() : "";
    return (
      <div className="flex-center-on-page-column pad-t-100 div-300h">
        <h2>{pageTitle}</h2>
        
        <ul className="div-60 profile-index">
          {
          this.props.userProfiles.map(profile => {
            return (
              this.state.editMode ? (this.renderManageForm(profile)) : (this.renderSelectProfileButton(profile)))
            })
          }
          {newProfileForm}
        </ul>
        <button 
        onClick={ () => this.setState({ editMode: !this.state.editMode }) }
        className="contact-btn">{buttonText}</button>
      </div>
    )
  }
```

https://user-images.githubusercontent.com/54246143/141486454-8e1a7756-528b-4e36-bfc7-dade2eb18bcc.mov

When a profile is selected, a user is able to delete watch profiles

https://user-images.githubusercontent.com/54246143/141486725-983eb4f2-3725-420d-bda0-219f142fae62.mov

## Documentary Ratings and Ratings index

User is able to rate documentaries from previews, and review their ratings in the account page of the website. My goal for this project was to re-use as many components as possible, while maintaining bite-sized classes/render methods to maintain readability. Implementing a dry code for the ratings buttons was a challenge. The button needed to respond to three cases, when the user has not yet rated the documentary (the button should be active), when it was already rated by this button (the button should become inactive), and when the documentary was rated by a different button (the button should flip the rating). My solution was to create a functional component that receives functions and icons props for each case and uses internal switch logic to arrange the functions and icons. I was able to re-use this button number of times throughout the app by simply passing the props with all the logic being compartmentalized inside the button.  

```
export const RatingBtn = (props) => {

  if (!props.rating) return (
    <button
      className="fa-btn-circle fa-btn-lg flex-center-on-page-column"
      onClick={props.onClickUndefined}
    >
      <FontAwesomeIcon icon={props.defaultIcon} color={props.color}/>
    </button>
  )

  switch (props.rating.ratingValue) {

    case true:
      return (
        <button
          className="fa-btn-circle fa-btn-lg flex-center-on-page-column"
          onClick={props.onClickTrue}
        >
          <FontAwesomeIcon icon={props.iconTrue} color={props.color}/>
        </button>
      )
    case false:
      return (
      <button
        className="fa-btn-circle fa-btn-lg flex-center-on-page-column"
        onClick={props.onClickFalse}
      >
        <FontAwesomeIcon icon={props.iconFalse} color={props.color}/>
      </button>)
    default:
      console.log('HITTING DEFAULT CASE');
      
      break;
  }

}
```

https://user-images.githubusercontent.com/54246143/141487376-2623a22e-74a3-4ce9-b33a-17a684331e3a.mov



