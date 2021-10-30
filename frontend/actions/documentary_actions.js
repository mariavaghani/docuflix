import * as DocuAPIUtil from "../utils/documentary_util";



export const RECEIVE_DOCUMENTARY = 'RECEIVE_DOCUMENTARY';
export const RECEIVE_ALL_DOCUMENTARIES = 'RECEIVE_ALL_DOCUMENTARIES';

export const receiveAllDocumentaries = (documentaries) => {
  return {
    type: RECEIVE_ALL_DOCUMENTARIES,
    documentaries
  }
}

export const fetchDocumentaries = () => dispatch => {
  return DocuAPIUtil.fetchDocumentaries()
  .then( documentaries => {
    return dispatch(receiveAllDocumentaries(documentaries))
  })
}

