import { useState, useEffect } from 'react';
import FooterPage from './components/FooterPage';
import MainPage from './components/MainPage';
import Navbar from './components/Navbar';
<OneCard />;
import './index.css';
// import { data } from './data/daten';

import { DataType } from './types/DataType';
import OneCard from './components/OneCard';

type DataProps = {
  data: DataType[];
  // Add idBlog as a prop
};
function App({ data }: DataProps) {
  const [blogID, setId] = useState<any>(null);

  const handlerBtn = (id: number) => {
    setId(id);

    console.log(blogID);
  };

  useEffect(() => {
    console.log(blogID);
  }, [blogID]);

  return (
    <>
      <Navbar />
      <MainPage sendData={data} handlerBtn={handlerBtn} />
      <FooterPage />
      {/* <OneCard /> */}
    </>
  );
}

export default App;
