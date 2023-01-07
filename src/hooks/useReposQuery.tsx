import { useQuery } from '@tanstack/react-query';
import { RepositoryResponse } from '../types/RepositoryResponse';

export const getRepos = async (username: string) => {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`
  );
  const data = (await response.json()) as RepositoryResponse[];
  return data;
};

export const useReposQuery = () => {
  const queryRepos = useQuery(['repos'], () => getRepos('gustavocadev'));

  return queryRepos;
};
