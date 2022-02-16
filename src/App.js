
import {Route, Routes} from 'react-router-dom';

import {Layout} from './components';
import {
    MovieGenre,
    MoviesPage,
    GenrePage,
    MoviePage
} from './pages';


const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<MoviesPage/>}/>
                <Route path={'/genres'} element={<GenrePage/>}>
                    <Route path={':routeId'} element={<MovieGenre/>}/>
                </Route>
                <Route path={'/movie/:movieId'} element={<MoviePage/>}/>
            </Route>
        </Routes>
    );
};

export default App;
