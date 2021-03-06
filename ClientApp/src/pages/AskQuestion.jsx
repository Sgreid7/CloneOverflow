import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { NONAME } from 'dns'

const AskQuestion = () => {
  const [question, setQuestion] = useState({})
  const [invalid, setInvalid] = useState('none')
  const [wasSuccessfullyPosted, setWasSuccessfullyPosted] = useState({
    shouldRedirect: false,
    questionInformation: {},
  })

  const updateQuestionInfo = e => {
    const key = e.target.name
    const value = e.target.value
    setQuestion(oldQuestion => {
      oldQuestion[key] = value
      return oldQuestion
    })
  }

  const addQuestionToApi = async () => {
    if (question.title && question.content) {
      const resp = await axios.post('/api/question', question)
      if (resp.status === 201) {
        setWasSuccessfullyPosted({
          shouldRedirect: true,
          questionInformation: resp.data,
        })
      } else {
        console.log(resp.status)
      }
    } else {
      setInvalid('inline')
    }
  }

  if (wasSuccessfullyPosted.shouldRedirect) {
    return (
      <Redirect
        to={{
          pathname: `/question/${wasSuccessfullyPosted.questionInformation.id}`,
          state: { question: wasSuccessfullyPosted.questionInformation },
        }}
      />
    )
  } else {
    return (
      <>
        <Header>Ask A Question</Header>
        <MainContent>
          <section>
            <label htmlFor="title">
              Title
              <span style={{ display: invalid }} className="invalid-inputs">
                *
              </span>
            </label>
            <input
              type="text"
              placeholder="Be specific and imagine you're asking a question to another person"
              name="title"
              onChange={updateQuestionInfo}
            />
          </section>
          <section>
            <label htmlFor="description">
              Description
              <span style={{ display: invalid }} className="invalid-inputs">
                *
              </span>
            </label>
            <textarea
              name="content"
              placeholder="Include all the information someone would need to answer your
              question"
              cols="50"
              rows="5"
              onChange={updateQuestionInfo}
            ></textarea>
          </section>
          <div style={{ display: invalid }} className="invalid-inputs">
            *Both title and description must be filled in
          </div>
          <div>
            <button onClick={addQuestionToApi}>Add Question</button>
          </div>
        </MainContent>
      </>
    )
  }
}

export default AskQuestion

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 0.25rem solid #d3d3d3;
  box-shadow: 0.4rem 0.4rem 0.4rem rgba(0, 0, 0, 0.3);

  section {
    margin-top: 1rem;
  }

  section {
    margin-bottom: 0.5rem;
  }

  label {
    font-size: 1.5rem;
    font-style: italic;
  }

  input,
  textarea {
    width: 100%;

    :focus {
      outline: none;
      border: 0.05rem solid #000;
    }
  }
  button {
    background: #fff;
    color: #000;
    padding: 0.2rem 0.5rem;
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
const Header = styled.h1`
  text-align: center;
  font-size: 4rem;
`
