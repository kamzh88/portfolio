import PROJECT_DATA from "./project.data";

const INITIAL_STATE = {
  sections: PROJECT_DATA
};

const projectReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default projectReducer;
