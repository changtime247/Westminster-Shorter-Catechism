import React, { useContext, useState } from 'react'

const ModalContext = React.createContext()

const ModalProvider = ({ children }) => {
  const [modalShow, setModalShow] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isESVCopyrightModalOpen, setIsESVCopyrightModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }
  const openESVCopyrightModal = () => {
    setIsESVCopyrightModalOpen(true)
  }
  const closeESVCopyrightModal = () => {
    setIsESVCopyrightModalOpen(false)
  }

  return (
    <ModalContext.Provider
      value={{
        modalShow,
        setModalShow,
        isModalOpen,
        setIsModalOpen,
        isESVCopyrightModalOpen,
        setIsESVCopyrightModalOpen,
        openModal,
        closeModal,
        openESVCopyrightModal,
        closeESVCopyrightModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export const useModalContext = () => {
  return useContext(ModalContext)
}

export { ModalContext, ModalProvider }
