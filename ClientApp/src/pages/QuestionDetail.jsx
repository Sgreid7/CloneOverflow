import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Question from '../components/Question'
import Loading from '../components/Loading'

const QuestionDetail = props => {
  const questionId = props.match.params.questionId

  const [question, setQuestion] = useState()

  const getQuestionInfo = async () => {
    const resp = await axios.get(`api/question/${questionId}`)

    // console.log(resp)
    setQuestion(resp.data)
  }

  useEffect(() => {
    // API call for question info
    getQuestionInfo()
  }, [])

  if (question) {
    return <Question question={question} />
  } else {
    return <Loading />
  }
}

export default QuestionDetail
