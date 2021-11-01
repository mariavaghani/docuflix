import * as DocuAPIUtil from "../utils/documentary_util";



export const RECEIVE_DOCUMENTARY = 'RECEIVE_DOCUMENTARY';
// export const RECEIVE_DOCUMENTARIES_BY_GENRE = 'RECEIVE_DOCUMENTARIES_BY_GENRE';
export const RECEIVE_DOCUMENTARIES = 'RECEIVE_DOCUMENTARIES';

export const receiveDocumentaries = (documentaries) => {
  return {
    type: RECEIVE_DOCUMENTARIES,
    documentaries
  }
}

// const receiveDocumentariesByGenre = (documentaries) => {
//   return {
//     type: RECEIVE_DOCUMENTARIES_BY_GENRE,
//     documentaries
//   }
// }

export const fetchDocumentaries = (filters) => dispatch => {
  
  return DocuAPIUtil.fetchDocumentaries(filters)
  .then( documentaries => {
    return dispatch(receiveDocumentaries(documentaries))
  })
}


