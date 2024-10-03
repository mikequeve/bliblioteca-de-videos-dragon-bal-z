import React, { useContext } from 'react';
import Banner from '../../Components/Banner/Banner';
import RoshiSection from '../../Components/RoshiSection/RoshiSection';
import SagaSection from '../../Components/SagaSection/SagaSection';
import { GlobalContext } from '../../context/GlobalContext';
import ModalForm from '../../Components/ModalForm/ModalForm';

const Home = () => {
  const { videos, sagas } = useContext(GlobalContext);

  return (
    <>
      <main>
        <Banner />
        <RoshiSection />
        {sagas.map((saga) => (
          <SagaSection
            data={saga}
            key={saga.title}
            videos={videos.filter((video) => video.saga === saga.title)}
          />
        ))}
        <ModalForm />
      </main>
    </>
  );
};

export default Home;
