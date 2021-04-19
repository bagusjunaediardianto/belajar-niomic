import { useRoutes } from 'hookrouter';
import Wrapper from './Component/Wrapper';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import Articles from './Pages/Articles';
import NotFound from './Pages/NotFound';

const routes = {
    '/': () => <Home />,
    '/articles/': () => <Articles />,
}

const App = () => {
    const match = useRoutes(routes)

    return (
        <Wrapper>
            <Navbar />
            {match || <NotFound />}
        </Wrapper>
    );
}

export default App;
