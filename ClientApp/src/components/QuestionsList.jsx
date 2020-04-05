import React from 'react'
import { Link } from 'react-router-dom'

const QuestionsList = ({ results }) => {
  return (
    <ul>
      {results.map(question => {
        return (
          <li key={question.id}>
            <div className="votes-and-answers-column">
              {question.score}
              <p>votes</p>
            </div>
            <section className="title-and-content-column">
              <Link to={`/question/${question.id}`}>
                <h3 className="title">Q: {question.title}</h3>
              </Link>
              <p className="content">{question.content}</p>
            </section>
          </li>
        )
      })}
    </ul>
  )
}

export default QuestionsList
