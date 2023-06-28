import { GifsResult, GiphyFetch } from '@giphy/js-fetch-api';

const gf = new GiphyFetch('5Qxu3LRqxQ0VDeThDzwWOTI7eWHbbslm');

type TrendingParams = {
  offset: number;
  limit: number;
};

type SearchParams = {
  query: string;
  offset: number;
  limit: number;
};

const fetchTrendingGifs = ({ offset, limit = 25 }: TrendingParams) =>
  gf.trending({ offset, limit });

const fetchSearchGifs = ({
  query,
  offset,
  limit = 25,
}: SearchParams): Promise<GifsResult> => {
  console.log('search: ', query, limit, offset);
  return gf.search(query, { offset, limit });
};

export { fetchTrendingGifs, fetchSearchGifs };
