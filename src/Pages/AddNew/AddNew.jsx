import React from 'react';
import Form from '../../Components/Form/Form';

const AddNew = () => {
  return (
    <>
      <main>
        <section className='flex-center add__section'>
          <div className='container flex-column'>
            <h1>Agregar Nuevo Capítulo</h1>
            <Form />
          </div>
        </section>
      </main>
    </>
  );
};

export default AddNew;
