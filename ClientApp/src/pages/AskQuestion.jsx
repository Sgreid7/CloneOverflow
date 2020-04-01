import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const AskQuestion = () => {
  const [question, setQuestion] = useState({})
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
    const resp = await axios.post('/api/question', question)
    if (resp.status === 201) {
      setWasSuccessfullyPosted({
        shouldRedirect: true,
        questionInformation: resp.data,
      })
    } else {
      // do something here
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
        <main>
          <h1>Ask A Question</h1>
          <section>
            <label htmlFor="title">Title</label>
            <p>
              Be specific and imagine you're asking a question to another person
            </p>
            <input type="text" placeholder="Enter title here" name="title" />
          </section>
          <section>
            <label htmlFor="description">Description</label>
            <p>
              Include all the information someone would need to answer your
              question
            </p>
            <textarea
              name="description"
              placeholder="Enter description here"
              cols="50"
              rows="10"
            ></textarea>
          </section>
          <div>
            <button>Add Question</button>
          </div>
        </main>
      </>
    )
  }
}

export default AskQuestion
