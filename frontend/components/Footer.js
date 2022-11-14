import { Container, Row, Col } from 'react-bootstrap'
import Modal from './Modal'

export default function Footer({ isModalOpen, setIsModalOpen }) {
  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <footer className='py-1'>
      <Container className=''>
        <Row className='justify-content-between'>
          <Col>
            <button variant='primary' onClick={openModal} id='about-us'>
              About
            </button>
          </Col>
          <Col id='footer-col-translation'>
            Translation:{' '}
            <a href='http://www.esv.org' className='copyright'>
              ESV
            </a>
          </Col>
        </Row>
      </Container>
      <Modal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        setIsModalOpen={setIsModalOpen}
      />
    </footer>
  )
}
