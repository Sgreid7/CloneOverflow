import React, { useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const Answer = ({ answer }) => {
  const [score, setScore] = useState(answer.score)

  const sendScoreToApi = async () => {
    const resp = await axios.put(`/api/answer/${answer.id}`, answer)
  }

  return (
    <AnswerSection>
      <div>
        <FontAwesomeIcon
          icon={faArrowUp}
          size="lg"
          onClick={() => {
            setScore(score + 1)
            answer.score++
            sendScoreToApi()
          }}
          className="vote-button"
        />
        <p>{score}</p>
        <FontAwesomeIcon
          icon={faArrowDown}
          size="lg"
          onClick={() => {
            setScore(score - 1)
            answer.score--
            sendScoreToApi()
          }}
          className="vote-button"
        />
      </div>
      <Content>{answer.content}</Content>
    </AnswerSection>
  )
}

export default Answer

const AnswerSection = styled.section`
  display: flex;

  div {
    margin: 1rem 0;
    align-items: center;
  }

  p {
    margin: 0.2rem;
    text-align: center;
  }
`

const Content = styled.section`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`
