import React, { useContext } from 'react';
import './modalForm.css';
import { IoCloseCircle } from 'react-icons/io5';
import Form from '../Form/Form';
import { GlobalContext } from '../../context/GlobalContext';

const ModalForm = ({}) => {
  const { isModalOpen, closeModal } = useContext(GlobalContext);
  return (
    <>
      {isModalOpen && (
        <div className='modal__overlay flex-center'>
          <article className='modal__dialog flex-column'>
            <h3>Editar video</h3>
            <Form />
            <button className='modal__dialog-close' onClick={closeModal}>
              <IoCloseCircle className='icon' />
            </button>
          </article>
        </div>
      )}
    </>
  );
};

export default ModalForm;
