import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import EntitiesReducer from './entities_reducer';
import ErrorsReducer from './errors_reducer';
import { FiltersReducer } from './filters_reducer';
import { UIReducer } from "./ui_reducer";
import { VideoControlsReducer } from './video_controls_reducer';


export const RootReducer = combineReducers({
  session: SessionReducer,
  entities: EntitiesReducer,
  filters: FiltersReducer,
  errors: ErrorsReducer,
  ui: UIReducer,
  videoControls: VideoControlsReducer
})