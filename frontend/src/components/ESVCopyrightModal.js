import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useModalContext } from '../context/modal_context'

const ESVCopyrightModal = () => {
  const { isESVCopyrightModalOpen, closeESVCopyrightModal } = useModalContext()

  return (
    <div
      className={`${
        isESVCopyrightModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <div className='modal-container'>
        <h6>
          Scripture quotations are from the ESV® Bible (The Holy Bible, English
          Standard Version®), copyright © 2001 by Crossway, a publishing
          ministry of Good News Publishers. Used by permission. All rights
          reserved. The ESV text may not be quoted in any publication made
          available to the public by a Creative Commons license. The ESV may not
          be translated into any other language. Users may not copy or download
          more than 500 verses of the ESV Bible or more than one half of any
          book of the ESV Bible.
        </h6>
        <button className='close-modal-btn' onClick={closeESVCopyrightModal}>
          <FontAwesomeIcon className='' icon={faTimes} />
        </button>
      </div>
    </div>
  )
}

export default ESVCopyrightModal
