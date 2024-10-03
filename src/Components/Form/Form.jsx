import React, { useContext, useEffect, useState } from 'react';
import './form.css';
import { GlobalContext } from '../../context/GlobalContext';
import OptionList from './OptionList/OptionList';

const initialForm = {
  title: '',
  saga: '',
  img: '',
  video: '',
  description: '',
  id: null,
};

const Form = () => {
  const { dataToEdit, setDataToEdit, updateVideoInfo, addNewVideo, sagas } =
    useContext(GlobalContext);

  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    dataToEdit ? setForm(dataToEdit) : setForm(initialForm);
  }, [dataToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.title ||
      !form.saga ||
      !form.img ||
      !form.video ||
      !form.description
    ) {
      alert('Datos incompletos. Por favor, rellena todos los campos.');
      return;
    }

    if (form.id === null) {
      addNewVideo(form);
    } else {
      updateVideoInfo(form);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleReset = () => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <form className='flex-column form' onSubmit={handleSubmit}>
      <div className='flex-column-start form__field'>
        <label>Título</label>
        <input
          type='text'
          name='title'
          placeholder='Título del capítulo'
          value={form.title}
          onChange={handleChange}
        />
      </div>
      <div className='flex-column-start form__field'>
        <label>Imagen</label>
        <input
          type='text'
          name='img'
          placeholder='Ruta de la imagen del capítulo'
          value={form.img}
          onChange={handleChange}
        />
      </div>
      <div className='flex-column-start form__field'>
        <label>Video</label>
        <input
          type='text'
          name='video'
          placeholder='Enlace del video del capítulo'
          value={form.video}
          onChange={handleChange}
        />
      </div>
      <div className='flex-column-start form__field'>
        <label>Descripción</label>
        <input
          type='text'
          name='description'
          placeholder='Descripción del capítulo'
          value={form.description}
          onChange={handleChange}
        />
      </div>
      <div className='flex-column-start form__field'>
        <label>Saga</label>
        <OptionList
          name='saga'
          sagas={sagas}
          handleChange={handleChange}
          value={form.saga}
        />
      </div>
      <aside className='flex-center form__btn-container'>
        <input type='submit' value='Guardar' className='button' />
        <input
          type='reset'
          value='Limpiar'
          onClick={handleReset}
          className='button'
        />
      </aside>
    </form>
  );
};

export default Form;
