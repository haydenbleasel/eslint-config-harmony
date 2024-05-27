import { Octokit } from '@octokit/rest';

const octokit = new Octokit();

const owner = 'haydenbleasel';
const repo = 'harmony';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getRepo = async () =>
  octokit.repos.get({
    owner,
    repo,
  });

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getChangelog = async () =>
  octokit.rest.repos.listReleases({
    owner,
    repo,
    per_page: 100,
  });
