import React, { useState } from 'react'
import axios from 'axios'

const Question = ({ question }) => {
  const [score, setScore] = useState(0)

  const sendScoreToApi = async () => {
    const resp = await axios.post(`/api/question/${question.id}/score`, {
      score: score,
    })
  }

  return (
    <section>
      <h2>{question.title}</h2>
    </section>
  )
}

export default Question
