import { combineReducers } from "redux";

import projectReducer from "./project/project.reducer";

const rootReducer = combineReducers({
  project: projectReducer
});

export default rootReducer;
