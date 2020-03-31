import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const EmptySearchResults = () => {
  return (
    <EmptySection>
      <h1>No results found</h1>
      <Link to="/askquestion">
        <button>Ask A Question</button>
      </Link>
    </EmptySection>
  )
}

export default EmptySearchResults

const EmptySection = styled.section`
  margin-top: 5rem;
  text-align: center;

  h1 {
    color: #d3d3d3;
    font-style: italic;
    margin-bottom: 5rem;
    font-size: 5rem;
  }

  button {
    color: #000;
    background: #fff;
    padding: 0.5rem 1rem;
    border: 0.1rem solid #000;
    border-radius: 0.2rem;
    transition: 0.5s ease;

    :hover {
      background: #000;
      color: #fff;
      border: 0.1rem solid #fff;
      transform: translateY(-0.3rem);
      box-shadow: 0 0.3rem 0.3rem #d3d3d3;
    }
  }
`
