import React, { useState } from 'react'
import axios from 'axios'
import EmptySearchResult from '../components/EmptySearchResults'
import styled from 'styled-components'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])

  const searchQuestions = async () => {
    if (searchTerm) {
      const resp = await axios.get(
        `/api/search/question?searchTerm=${searchTerm}`
      )
      console.log(resp.data)
      setResults(resp.data)
    } else {
      setResults([])
    }
  }

  return (
    <>
      <SearchSection>
        <h1>Search Results</h1>
        <input
          type="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button onClick={searchQuestions}>Search</button>
      </SearchSection>
      <EmptySearchResult />
    </>
  )
}

export default Search

const SearchSection = styled.section`
  text-align: center;

  h1 {
    margin-bottom: 2rem;
    font-size: 4rem;
  }

  input[type='search'] {
    width: 30vw;
    margin: 0.5rem;
    padding-left: 0.3rem;
    border-radius: 1rem;
    border: 0.08rem solid #d3d3d3;
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
      transform: translateY(-0.3rem);
      box-shadow: 0 0.3rem 0.3rem #d3d3d3;
    }
  }
`