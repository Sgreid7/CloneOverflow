import React from 'react'
import styled from 'styled-components'

export function Home() {
  return (
    <>
      <HeaderSection>
        <h1>We &#60;3 people who code</h1>
        <p>
          We build products that empowers developers and connects them to
          solutions that enable productivity, growth, and discovery.
        </p>
      </HeaderSection>
      <ContentWrapper>
        <section>
          <h2>For developers, by developers</h2>
          <p className="line"></p>
          <div>
            <p>
              Clone Overflow is an <span>open community</span> for anyone that
              codes. We help you get answers to your toughest coding questions,
              share knowledge with your coworkers in private, and find your next
              dream job.
            </p>
          </div>
        </section>
      </ContentWrapper>
    </>
  )
}

const HeaderSection = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffcf10;
  padding: 3rem 0;

  h1 {
    font-size: 3rem;
    margin-top: 2rem;
  }
`

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  .line {
    margin: 0 auto;
    width: 3rem;
    border-radius: 0.25rem;
    border-bottom: 0.5rem solid #fa8024;
  }

  section {
    width: 50vw;

    h2 {
      margin-top: 3rem;
      margin-bottom: 1rem;
      font-size: 2.1rem;
    }

    p {
      margin-top: 1rem;

      span {
        color: #fa8024;
      }
    }
  }
`
