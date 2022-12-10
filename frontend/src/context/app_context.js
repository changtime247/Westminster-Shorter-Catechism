import React, { useContext, useState } from 'react'
import { data } from '../data/allQues'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [list, setList] = useState(data)
  const [index, setIndex] = useState(0)
  const [content, setContent] = useState(data[0])
  const [proofTextState, setProofTextState] = useState([])
  const [showAnswer, setShowAnswer] = useState(false)
  const [showProof, setShowProof] = useState(false)
  const [topic, setTopic] = useState({ topic: 'God the Creator', id: 1 })

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        list,
        setList,
        index,
        setIndex,
        content,
        setContent,
        proofTextState,
        setProofTextState,
        showAnswer,
        setShowAnswer,
        showProof,
        setShowProof,
        topic,
        setTopic,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
