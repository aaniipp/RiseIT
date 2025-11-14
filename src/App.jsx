import { RouterProvider } from 'react-router-dom';
import router from './router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/index.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <RouterProvider router={router} />
      </main>
      <Footer />
    </div>
  );
}

export default App;