import React from 'react'

const QuestionsList = ({ results }) => {
  return (
    <ul>
      {results.map(question => {
        return (
          <li>
            <div>{question.score}</div>
            <h3>{question.title}</h3>
            <p>{question.content}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default QuestionsList
