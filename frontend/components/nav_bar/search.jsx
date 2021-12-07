import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { btnColor } from '../../utils/ui_utils';
import { withRouter } from 'react-router';
import { applyUserFilters, updateTitleQuery, updateTitlesQueryFilter, updateUserProfileFilter } from '../../actions/filter_actions';

class Search extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      searchMode: props.location.pathname === "/search" ? true : false,
      searchVal: new URLSearchParams(props.location.search).get("q") || "",
    }
    this.searchOnInput = this.searchOnInput.bind(this);
    this.closeSearch = this.closeSearch.bind(this);
  }
  
  searchOnInput(e) {
    // this.inputRef.current.focus();
    this.setState({searchVal: e.target.value})
    this.props.history.push({
      pathname: "/search",
      search: `q=${e.target.value}`
    });
    this.props.fetchDocumentaries(e.target.value)
  }

  closeSearch() {
    this.props.fetchDocumentaries("")
    .then( () => this.props.history.push({
      pathname: "/browse",
    }));
    this.setState({ searchMode: false }) 
  }

  render() {
    const containerDisplay = this.state.searchMode ? (
      <div className='div-flex align-center'>
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
  }
}

const mapStateToProps = (state) => ({
  selectedProfile: Boolean(state.session.selectedProfile)
})

const mapDispatchToProps = (dispatch) => ({
  fetchDocumentaries: (query) => dispatch(updateTitlesQueryFilter(updateTitleQuery, query)),
  fetchDefaultDocumentaries: (userProfileFilters) => dispatch(updateUserProfileFilter(applyUserFilters, userProfileFilters)),

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search))
