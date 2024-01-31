import FooterPage from './components/FooterPage';
import MainPage from './components/MainPage';
import Navbar from './components/Navbar';

import { useGetAllInfo } from './hooks/useGetAllInfo';
import './index.css';

function App() {
  const { data, isLoading, isError } = useGetAllInfo();

  return (
    <>
      {data && (
        <>
          <Navbar />
          <MainPage sendData={data} />
          <FooterPage />
        </>
      )}
      {isLoading && <p>Loading ...</p>}
      {isError && <p>Error load</p>}
    </>
  );
}

export default App;
