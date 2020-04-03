import React from 'react'
import styled from 'styled-components'

const Loading = () => {
  return (
    <>
      <LoadingPage>Loading please wait...</LoadingPage>
      <div>Something</div>
    </>
  )
}

export default Loading

const LoadingPage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`
