import React from 'react'
import { Link } from 'react-router-dom'

const QuestionsList = ({ results }) => {
  return (
    <ul>
      {results.map(question => {
        return (
          <li>
            <section className="votes-and-answers-column">
              <div className="votes">
                {question.score}
                <p>votes</p>
              </div>
              <div className="answers">
                {question.answer}
                <p>answers</p>
              </div>
            </section>
            <section className="title-and-content-column">
              <Link to="/">
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
