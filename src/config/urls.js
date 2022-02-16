const baseURL = 'https://api.themoviedb.org';

export default baseURL;

const apiKey = 'api_key=cde66473438667a4b4edeb6eae4af65d';

export const urls = {
    moviesPage: `/3/discover/movie?&language=uk&${apiKey}`,
    genres: `/3/genre/movie/list?${apiKey}`,
    movie: `${apiKey}&language=uk&`,
};