import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
// import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import Answer from './Answer'
import PostAnswer from './PostAnswer'

const Question = ({ question }) => {
  const [score, setScore] = useState(question.score)
  const [answers, setAnswers] = useState([])

  const searchAnswers = async () => {
    if (question.id) {
      const resp = await axios.get(`/api/search/answer/${question.id}`)
      // console.log(resp.data)
      setAnswers(resp.data)
    } else {
      setAnswers([])
    }
  }

  const sendScoreToApi = async () => {
    question.score++
    const resp = await axios.put(`/api/question/${question.id}`, question)
  }

  useEffect(() => {
    searchAnswers()
  }, [])

  return (
    <>
      <header>
        <h2>Q: {question.title}</h2>
        <p>Asked: {question.dateCreated.substring(0, 10)}</p>
      </header>
      <QuestionSection>
        <div>
          <button
            onClick={() => {
              setScore(score + 1)
              sendScoreToApi()
            }}
          >
            {/* <FontAwesomeIcon icon={faArrowUp} /> */}
            &#x25B2;
          </button>
          <p>{score}</p>
          <button
            onClick={() => {
              setScore(score - 1)
              sendScoreToApi()
            }}
          >
            {/* <FontAwesomeIcon icon={faArrowDown} /> */}
            &#x25BC;
          </button>
        </div>
        <Content>
          <p>{question.content}</p>
        </Content>
      </QuestionSection>

      <Header>Answers</Header>
      <AnswerSection>
        <ul>
          {/* {question.answers.map(answer => {
          return (
            <li>
              <Answer answer={answer} />
            </li>
          )
        })} */}
          {answers.map(answer => {
            return (
              <li>
                <section className="votes-and-answers-column">
                  <div className="votes">
                    {answer.score}
                    <p>votes</p>
                  </div>
                </section>
                <section className="title-and-content-column">
                  <h3 className="title">A: {answer.title}</h3>
                  <p className="content">{answer.content}</p>
                </section>
              </li>
            )
          })}
        </ul>
      </AnswerSection>
      <PostAnswer />
    </>
  )
}

export default Question

const QuestionSection = styled.div`
  border-top: 0.1rem solid #696969;
  display: flex;
  margin: 1rem 0;

  > div {
    margin: 1rem 0;
    align-items: center;

    p {
      margin: 0.2rem;
      text-align: center;
    }
  }
`
const Content = styled.section`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`
const Header = styled.h2`
  border-bottom: 0.1rem solid #696969;
  margin: 0;
  padding-bottom: 0.5rem;
`

const AnswerSection = styled.section`
  margin: 0;
  display: flex;

  ul {
    list-style: none;
    flex-direction: column;
    padding: 0;
    width: 100%;
  }

  li {
    display: flex;
    margin: 0.5rem 0;
    border-bottom: 0.1rem solid #696969;

    > div {
      margin: 1rem 0;
      align-items: center;

      p {
        margin: 0.2rem;
        text-align: center;
      }
    }
  }
`
