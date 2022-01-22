import { Entities } from '../types/entity';
import { Encoding } from '../types/encoding';

interface FetchAPI{
    entities: Entities;
    query?: string;
    format?: Encoding;
}
const BASE_URL = 'https://swapi.dev/api/';
export const fetchSWAPI = async ({ entities, query, format }: FetchAPI, signal : AbortSignal) => {
  const url = new URL(`${BASE_URL}${entities}`);
  if (query) { url.searchParams.append('search', query); }
  if (format) { url.searchParams.append('format', format); }
  const response = await fetch(url.href, { signal });
  return response.json();
};

export const fetchSWAPINext = async (nextUrl: string, signal : AbortSignal) => {
  const response = await fetch(nextUrl, { signal });
  return response.json();
};
