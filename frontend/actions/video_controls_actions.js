export const TOGGLE_MUTE_VIDEO = 'TOGGLE_MUTE_VIDEO';
export const SETTING_DOCUMENTARY_IN_FOCUS = 'SETTING_DOCUMENTARY_IN_FOCUS';
export const REMOVING_DOCUMENTARY_IN_FOCUS = 'REMOVING_DOCUMENTARY_IN_FOCUS';

export const toggleMuteVideo = () => {
  return {
    type: TOGGLE_MUTE_VIDEO,
  }
}

export const settingDocumentaryInFocus = (documentaryId) => {
  return {
    type: SETTING_DOCUMENTARY_IN_FOCUS,
    documentaryId
  }
}
export const removingDocumentaryInFocus = () => {
  return {
    type: REMOVING_DOCUMENTARY_IN_FOCUS,
    
  }
}