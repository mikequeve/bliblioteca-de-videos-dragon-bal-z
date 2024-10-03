import React from 'react';
import './sagaSection.css';
import Card from '../Card/Card';

const SagaSection = (props) => {
  const { data, videos, openModal, deleteVideo } = props;
  return (
    <section className='saga__section flex-column'>
      <article className='container'>
        <h2 className='section__title'>{data.title}</h2>
        <div className='videos__container'>
          {videos.map((video, index) => (
            <Card
              data={video}
              key={index}
              openModal={openModal}
              deleteVideo={deleteVideo}
            />
          ))}
        </div>
      </article>
    </section>
  );
};

export default SagaSection;
