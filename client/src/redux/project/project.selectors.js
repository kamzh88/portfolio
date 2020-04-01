import { createSelector } from "reselect";

const selectProjects = state => state.project;

export const selectProject = createSelector(
    [selectProjects],
    project => project.sections,
)
