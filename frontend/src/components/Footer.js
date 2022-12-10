import { Container, Row, Col } from 'react-bootstrap'
import Modal from './Modal'
import ESVCopyrightModal from './ESVCopyrightModal'
import { useModalContext } from '../context/modal_context'

export default function Footer() {
  const { openModal, openESVCopyrightModal } = useModalContext()

  return (
    <footer>
      <Container className='py-1'>
        <Row className='justify-content-between'>
          <Col>
            <button variant='primary' onClick={openModal} id='about-us'>
              About
            </button>
          </Col>
          <Col id='footer-col-translation'>
            <button
              variant='primary'
              onClick={openESVCopyrightModal}
              id='esv-legal-stuff'
            >
              Translation: &#169;
            </button>{' '}
            <a href='http://www.esv.org' className='copyright'>
              ESV
            </a>
          </Col>
        </Row>
      </Container>
      <Modal />
      <ESVCopyrightModal />
    </footer>
  )
}
