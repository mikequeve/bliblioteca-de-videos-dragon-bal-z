import React, { createContext, useEffect, useState } from 'react';

export const GlobalContext = createContext();

const endpoint = 'http://localhost:3000/videos';

const sagas = [
  {
    title: 'saga freezer',
  },
  {
    title: 'saga cell',
  },
  {
    title: 'saga majin buu',
  },
];

const GlobalContextProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataToEdit, setDataToEdit] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      const resp = await fetch(endpoint);
      const data = await resp.json();
      setVideos(data);
    };
    fetchVideos();
  }, [endpoint]);

  const openModal = (data) => {
    setIsModalOpen(true);
    setDataToEdit(data);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setDataToEdit(null);
  };

  const message = (msj) => {
    alert(msj);
    closeModal();
  };

  const addNewVideo = (data) => {
    data.id = Date.now();
    setVideos([...videos, data]);
    message('Capítulo agregado con éxito!!!');
  };

  const updateVideoInfo = (data) => {
    let newInfo = videos.map((el) => (el.id === data.id ? data : el));
    setVideos(newInfo);
    message('Registro modificado con éxito!!!');
  };

  const deleteVideo = (id) => {
    let isDelete = window.confirm(
      '¿Estás seguro que deseas eliminar el elemento del registro?'
    );
    if (isDelete) {
      let newInfo = videos.filter((video) => video.id !== id);
      setVideos(newInfo);
    } else {
      return;
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        sagas,
        videos,
        isModalOpen,
        openModal,
        closeModal,
        dataToEdit,
        setDataToEdit,
        addNewVideo,
        updateVideoInfo,
        deleteVideo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
