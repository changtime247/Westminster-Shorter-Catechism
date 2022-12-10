import { useEffect } from 'react'
import { topics } from '../data/allQues'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEarthAfrica,
  faSkullCrossbones,
  faCross,
  faBookOpen,
  faChurch,
  faPersonPraying,
} from '@fortawesome/free-solid-svg-icons'
import parse from 'html-react-parser'
import { stripESV } from '../util/utils'

function WSCCard({
  index,
  content,
  isLoading,
  setIsLoading,
  proofTextState,
  setProofTextState,
  showAnswer,
  setShowAnswer,
  showProof,
  setShowProof,
}) {
  const restEndpoint = 'http://localhost:5000/getData'

  async function fetchProofText({ proofText }) {
    setIsLoading(true)
    const prooof = proofText.join`;`

    try {
      const response = await fetch(restEndpoint + `/?q=${prooof}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        params: JSON.stringify(prooof),
      })
      const data = await response.json()
      setProofTextState([...data.passages])
      setIsLoading(false)
    } catch (error) {
      console.log('Something went wrong')
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchProofText(content)
  }, [content, showProof])

  useEffect(() => {
    if (!proofTextState) return
    if (isLoading) return
  }, [index, content, showProof, proofTextState])

  return (
    <Container>
      <Card className='main-card bg-dark'>
        <p className='p-faIcon'>
          {content.id < topics[1].id ? (
            <FontAwesomeIcon className='faIcon' icon={faEarthAfrica} />
          ) : content.id < topics[2].id ? (
            <FontAwesomeIcon className='faIcon' icon={faSkullCrossbones} />
          ) : content.id < topics[3].id ? (
            <FontAwesomeIcon className='faIcon' icon={faCross} />
          ) : content.id < topics[4].id ? (
            <FontAwesomeIcon className='faIcon' icon={faBookOpen} />
          ) : content.id < topics[5].id ? (
            <FontAwesomeIcon className='faIcon' icon={faChurch} />
          ) : (
            <FontAwesomeIcon className='faIcon' icon={faPersonPraying} />
          )}
        </p>
        <p>
          Q{content.id}. {content.question}
        </p>
        <Button
          size='sm'
          className='btn-show-answer'
          onClick={() => {
            setShowAnswer(!showAnswer)
            showProof && setShowProof(!showProof)
          }}
        >
          {showAnswer ? 'Hide answer' : 'Show answer'}
        </Button>
        {showAnswer && (
          <div className='show-answer'>
            <p>
              A{content.id}. {content.answer}
            </p>
            <Button
              size='sm'
              className='btn-show-answer'
              onClick={() => setShowProof(!showProof)}
            >
              {showProof ? 'Hide proof' : 'Show proof'}
            </Button>
          </div>
        )}
        <div className='div-proof-text'>
          {showProof && <h3 className='underline'>Proof-text</h3>}
          {showProof &&
            proofTextState.map((p, idx) => (
              <div key={idx} className='show-proof-text'>
                <h2 className=''>{`(${idx + 1})`}&nbsp;</h2>
                {parse(stripESV(p))}
                <br />
                {/* {parse((p))} */}
                {/* {p} */}
              </div>
            ))}
        </div>
      </Card>
    </Container>
  )
}

export default WSCCard
