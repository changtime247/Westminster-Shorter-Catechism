import { topics } from '../data/allQues'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

function Header({
  list,
  id,
  setContent,
  setIndex,
  index,
  setShowAnswer,
  setShowProof,
}) {
  function handleSelect(e) {
    e.preventDefault()
    setIndex(+e.target.value - 1)
    setContent(list[+e.target.value - 1])
    setShowAnswer(false)
    setShowProof(false)
  }

  return (
    <>
      <Navbar
        className='justify-content-center'
        bg='dark'
        style={{ padding: 0 }}
      >
        <Navbar.Brand className='brandName'>
          Westminster Shorter Catechism
        </Navbar.Brand>
      </Navbar>
      <Navbar
        style={{ padding: '0.75rem' }}
        bg='dark'
        className='justify-content-center'
      >
        <Button
          className='prev'
          onClick={() => {
            setShowAnswer(false)
            setShowProof(false)
            index > 0 && setIndex(index - 1)
            index > 0 && setContent(list[index - 1])
          }}
        >
          <FontAwesomeIcon className='' icon={faChevronLeft} />
        </Button>
        <Form.Select
          onChange={handleSelect}
          value={id}
          className='form'
          style={{ maxWidth: '15rem' }}
        >
          {topics.map(({ topic, id }) => (
            <option key={id} value={id}>
              {topic}
            </option>
          ))}
        </Form.Select>

        <Button
          className='next'
          onClick={() => {
            setShowAnswer(false)
            setShowProof(false)
            index < list.length - 1 && setIndex(index + 1)
            index < list.length - 1 && setContent(list[index + 1])
          }}
        >
          <FontAwesomeIcon className='' icon={faChevronRight} />
        </Button>
      </Navbar>
    </>
  )
}

export default Header
