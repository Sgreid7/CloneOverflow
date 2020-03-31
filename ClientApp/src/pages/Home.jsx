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
      <section>
        <h2>For developers, by developers</h2>
        <p>
          Clone Overflow is an <span>open community</span> for anyone that
          codes. We help you get answers to your toughest coding questions,
          share knowledge with your coworkers in private, and find your next
          dream job.
        </p>
      </section>
    </>
  )
}

const HeaderSection = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
