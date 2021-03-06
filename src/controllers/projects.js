import constants from '../constants';
import { getAllDocuments } from '../database/services';
import joinRepoToProject from '../helpers/joinRepoToProject';

const { PROJECTS } = constants.COLLECTIONS;

export const getProjects = async () => {
  const projects = await getAllDocuments(PROJECTS);
  return projects;
};

export const getProjectsWithRepos = async () => {
  const projects = await getAllDocuments(PROJECTS);
  const projectsWithRepos = projects.map(joinRepoToProject);

  return Promise.all(projectsWithRepos);
};
