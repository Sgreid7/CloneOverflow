import React, { useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import Answer from './Answer'

const Question = ({ question }) => {
  const [score, setScore] = useState(0)

  const sendScoreToApi = async () => {
    const resp = await axios.post(`/api/question/${question.id}/score`, {
      score: score,
    })
  }

  return (
    <>
      <QuestionSection>
        <div>
          <button onClick={(() => setScore(score + 1), { sendScoreToApi })}>
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
          <p>{question.score}</p>
          <button onClick={(() => setScore(score - 1), { sendScoreToApi })}>
            <FontAwesomeIcon icon={faArrowDown} />
          </button>
        </div>
        <h2>Q: {question.title}</h2>
        <p>Asked: {question.datecreated}</p>
        <p>{question.content}</p>
      </QuestionSection>

      <h2>Answers</h2>
      <ul>
        {question.answers.map(answer => {
          return (
            <li>
              <Answer answer={answer} />
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Question

const QuestionSection = styled.div`
  border: 0.1rem solid #696969;
`
