import { People } from '../types/people';
import { fetchSWAPI } from './swapi';
import { Entities } from '../types/entity';

const USERNAME = 'USERNAME';
export interface Authenticate{username: string, password: string}

export const authenticate = async ({ username, password }:Authenticate, signal : AbortSignal) => {
  const peopleList = await fetchSWAPI({
    entities: Entities.People,
    query: username,
  }, signal) as unknown as { results: People[] };
  const foundMatch = !!(peopleList.results
    .find((people) => people.name === username && people.birth_year === password));
  if (foundMatch) {
    localStorage.setItem(USERNAME, username);
  }
  return foundMatch;
};
export const logout = () => localStorage.setItem(USERNAME, '');

export const getUserName = () => localStorage.getItem(USERNAME);
