import React, { useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const Answer = () => {
  const [score, setScore] = useState(0)

  const sendScoreToApi = async () => {
    const resp = await axios.post(`/api/answer/${answer.id}/score`, {
      score: score,
    })
  }

  return (
    <AnswerSection>
      <div>
        <button onClick={() => setScore(score + 1)}>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
        <p>{answer.score}</p>
        <button onClick={() => setScore(score - 1)}>
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
      </div>
      <p>{question.content}</p>
    </AnswerSection>
  )
}

export default Answer

const AnswerSection = styled.section`
  border: 0.1rem solid #696969;
`
