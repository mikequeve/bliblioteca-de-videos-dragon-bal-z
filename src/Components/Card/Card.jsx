import React, { useContext } from 'react';
import './card.css';
import { FaRegTrashAlt } from 'react-icons/fa';
import { LuPencilLine } from 'react-icons/lu';
import { GlobalContext } from '../../context/GlobalContext';

const Card = (props) => {
  const { img, title, video, id } = props.data;
  const { openModal, deleteVideo } = useContext(GlobalContext);
  return (
    <figure className='card'>
      <a href={video} target='_blank' rel='noopener' className='card__img'>
        <img src={img} alt='' />
      </a>
      <figcaption className='flex-column'>
        <h3 className='card__title'>{title}</h3>
        <aside className='flex-center card__icon-container'>
          <a className='flex-center button' onClick={() => deleteVideo(id)}>
            <FaRegTrashAlt className='icon' />
            Eliminar
          </a>
          <a
            className='flex-center button'
            onClick={() => openModal(props.data)}
          >
            <LuPencilLine className='icon' /> Editar
          </a>
        </aside>
      </figcaption>
    </figure>
  );
};

export default Card;
