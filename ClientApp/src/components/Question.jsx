import React, { useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const Question = ({ question }) => {
  const [score, setScore] = useState(0)

  const sendScoreToApi = async () => {
    const resp = await axios.post(`/api/question/${question.id}/score`, {
      score: score,
    })
  }

  return (
    <section>
      <div>{question.score}</div>
      <h2>{question.title}</h2>
      <p>{question.content}</p>
    </section>
  )
}

export default Question
