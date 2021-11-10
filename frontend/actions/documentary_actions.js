import * as DocuAPIUtil from "../utils/documentary_util";



export const RECEIVE_DOCUMENTARY = 'RECEIVE_DOCUMENTARY';
export const RECEIVE_FEATURED_DOCUMENTARY = 'RECEIVE_FEATURED_DOCUMENTARY';
export const RECEIVE_DOCUMENTARIES = 'RECEIVE_DOCUMENTARIES';
export const START_LOADING_VIDEO = 'START_LOADING_VIDEO';
export const TOGGLE_DOCUMENTARY_INFO = 'TOGGLE_DOCUMENTARY_INFO';

export const receiveDocumentaries = (documentaries) => {
  return {
    type: RECEIVE_DOCUMENTARIES,
    documentaries
  }
}

export const receiveDocumentary = (documentary) => {
  return {
    type: RECEIVE_DOCUMENTARY,
    documentary
  }
}

export const receiveFeaturedDocumentary = (documentary) => {
  return {
    type: RECEIVE_FEATURED_DOCUMENTARY,
    documentary
  }
}

export const startLoadingVideo = () => {
  return {
    type: START_LOADING_VIDEO,
    
  }
}

export const toggleDocumentaryInfo = () => {
  return {
    type: TOGGLE_DOCUMENTARY_INFO
    
  }
}


export const fetchDocumentaries = (filters) => dispatch => {
  
  return DocuAPIUtil.fetchDocumentaries(filters)
  .then( documentaries => {
    return dispatch(receiveDocumentaries(documentaries))
  })
}

export const fetchDocumentary = (docuId) => dispatch => {
  dispatch(startLoadingVideo());
  return DocuAPIUtil.fetchDocumentary(docuId)
  .then( documentary => {
    return dispatch(receiveDocumentary(documentary))
  })
}

export const fetchFeaturedDocumentary = (docuId) => dispatch => {
  dispatch(startLoadingVideo());
  return DocuAPIUtil.fetchDocumentary(docuId)
  .then( documentary => {
    return dispatch(receiveFeaturedDocumentary(documentary))
  })
}


