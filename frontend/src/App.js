import { useState } from 'react'
import './app.css'
import './bootstrap.min.css'
import Header from './components/Header'
import WSCCard from './components/WSCCard'
import { data } from './data/allQues'
import Footer from './components/Footer'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [list, setList] = useState(data)
  const [index, setIndex] = useState(0)
  const [content, setContent] = useState(data[0])
  const [proofTextState, setProofTextState] = useState([])
  const [showAnswer, setShowAnswer] = useState(false)
  const [showProof, setShowProof] = useState(false)
  const [topic, setTopic] = useState({ topic: 'God the Creator', id: 1 })
  const [modalShow, setModalShow] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Header
        list={list}
        index={index}
        setIndex={setIndex}
        content={content}
        setContent={setContent}
        setShowAnswer={setShowAnswer}
        setShowProof={setShowProof}
        topic={topic}
        setTopic={setTopic}
      />
      <WSCCard
        content={content}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        proofTextState={proofTextState}
        setProofTextState={setProofTextState}
        showAnswer={showAnswer}
        setShowAnswer={setShowAnswer}
        showProof={showProof}
        setShowProof={setShowProof}
      />
      <Footer
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        modalShow={modalShow}
        setModalShow={setModalShow}
      />
    </>
  )
}
