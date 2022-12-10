import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useModalContext } from '../context/modal_context'

const Modal = () => {
  const { isModalOpen, closeModal } = useModalContext()

  return (
    <div
      className={`${
        isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <div className='modal-container'>
        <h6>
          <span>What is the Westminster Shorter Catechism?</span>
          The WSC is for anyone curious about Christianity. It faithfully and
          logically explains the core Christian tenets{' '}
          <i>with Scriptural proof texts</i>. For a deeper and more
          comprehensive study, please read the Westminster Confession of Faith
          and the Larger Catechism. Thanks for reading. Soli Deo gloria.
        </h6>
        <button className='close-modal-btn' onClick={closeModal}>
          <FontAwesomeIcon className='' icon={faTimes} />
        </button>
      </div>
    </div>
  )
}

export default Modal
