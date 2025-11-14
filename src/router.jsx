import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Mentoring from './pages/Mentoring';
import RiseTalk from './pages/RiseTalk';
import Partnership from './pages/Partnership';
import Join from './pages/Join';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/programs",
    element: <Programs />,
  },
  {
    path: "/mentoring",
    element: <Mentoring />,
  },
  {
    path: "/risetalk",
    element: <RiseTalk />,
  },
  {
    path: "/partnership",
    element: <Partnership />,
  },
  {
    path: "/join",
    element: <Join />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default router;