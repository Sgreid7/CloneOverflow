import React from 'react'

const QuestionsList = ({ results }) => {
  return (
    <ul>
      {results.map(question => {
        return (
          <li>
            <section>
              <div>
                {question.score}
                <p>votes</p>
              </div>
              <div>
                {question.answer}
                <p>answers</p>
              </div>
            </section>
            <h3>{question.title}</h3>
            <p>{question.content}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default QuestionsList
