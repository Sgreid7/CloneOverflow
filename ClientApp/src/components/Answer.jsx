import React, { useState } from 'react'
import axios from 'axios'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
// import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const Answer = ({ answer }) => {
  const [score, setScore] = useState(answer.score)

  const sendScoreToApi = async () => {
    const resp = await axios.put(`/api/answer/${answer.id}`, answer)
  }

  return (
    <AnswerSection>
      <div>
        <button
          onClick={() => {
            setScore(score + 1)
            answer.score++
            sendScoreToApi()
          }}
        >
          {/* <FontAwesomeIcon icon={faArrowUp} /> */}
          &#x25B2;
        </button>
        <p>{score}</p>
        <button
          onClick={() => {
            setScore(score - 1)
            answer.scoreanswe--
            sendScoreToApi()
          }}
        >
          {/* <FontAwesomeIcon icon={faArrowDown} /> */}
          &#x25BC;
        </button>
      </div>
      <p>{answer.content}</p>
    </AnswerSection>
  )
}

export default Answer

const AnswerSection = styled.section`
  border: 0.1rem solid #696969;
`
