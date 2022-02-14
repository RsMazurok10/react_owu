import {Route, Routes} from "react-router-dom";

import CatsPage from "./pages/CatsPage/CatsPage";
import Layout from "./components/Layout/Layout";
import DogsPage from "./pages/DogsPage/DogsPage";
import CarsPage from "./pages/CarsPage/CarsPage";

function App() {
    return (
        <Routes >
            <Route path={'/'} element={<Layout/>}>
                <Route path={'/cat'} element={<CatsPage/>}/>
                <Route path={'/car'} element={<CarsPage/>}/>
                <Route path={'/dog'} element={<DogsPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
