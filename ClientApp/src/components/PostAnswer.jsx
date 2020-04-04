import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const PostAnswer = ({ someMethod, question }) => {
  const [answer, setAnswer] = useState('')

  const sendAnswerToApi = async () => {
    const resp = await axios.post(`api/answer`, {
      questionId: question.id,
      content: answer,
    })
    console.log(resp)
    someMethod()
  }

  return (
    <AnswerField>
      <h2>Your Answer</h2>
      <textarea
        name="content"
        cols="30"
        rows="5"
        value={answer}
        onChange={e => setAnswer(e.target.value)}
      ></textarea>
      <div>
        <button onClick={sendAnswerToApi}>Post Your Answer</button>
      </div>
    </AnswerField>
  )
}

export default PostAnswer

const AnswerField = styled.section`
  textarea {
    width: 100%;
    margin-bottom: 0.5rem;
    :focus {
      outline: none;
      border: 0.05rem solid #000;
    }
  }

  button {
    background: #fff;
    color: #000;
    padding: 0.2rem 0.5rem;
    margin-bottom: 1rem;
    border: 0.1rem solid #000;
    border-radius: 0.2rem;
    transition: 0.5s ease;

    :hover {
      color: #fff;
      background: #000;
      border: 0.1rem solid #fff;
    }
  }
`
