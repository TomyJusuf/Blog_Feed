import FooterPage from './components/FooterPage';
import MainPage from './components/MainPage';
import Navbar from './components/Navbar';

import './index.css';
import { data } from './data/daten';

function App() {
  return (
    <>
      <Navbar />
      <MainPage sendData={data} />
      <FooterPage />
    </>
  );
}

export default App;
