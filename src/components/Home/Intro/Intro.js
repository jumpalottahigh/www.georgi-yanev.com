import React from 'react'
import styled from 'styled-components'
import CenteredDiv from '../../elements/CenteredDiv/CenteredDiv.js'

const StyledIntro = styled.section`
  background-color: #dedede;

  img {
    width: 12rem;
    border-radius: 2%;
    justify-self: center;
    align-self: center;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  .intro__container {
    display: grid;
  }

  .intro__inner h2 {
    text-align: center;
  }

  @media (min-width: 600px) {
    .intro__container {
      grid-gap: 10px;
      grid-template-columns: 2fr 3fr;
    }

    .intro__inner h2 {
      text-align: left;
    }
  }

  @media (min-width: 1100px) {
    .intro__inner {
      padding: 0 1rem;
    }
  }
`
const Intro = () => {
  const data = {
    image: 'https://avatars2.githubusercontent.com/u/4155121?s=460&v=4',
    bio: [
      '👨‍👦  Father',
      '🏋️‍♂️ CrossFit athlete',
      '💻 Software Engineer',
      '🚁 FPV drone pilot, blogger, reviewer',
      '📝 Aspiring writer',
      '🏡 Smart Home Automation Enthusiast',
    ],
    position: 'Senior Software Developer @ Elisa Corporation',
    location: 'Helsinki, Finland',
    name: 'Georgi Yanev',
  }

  const { image, name, position, location, bio } = data

  return (
    <StyledIntro className="intro">
      <CenteredDiv className="intro__container">
        <img style={{ borderRadius: '50%' }} src={image} alt={name} />
        <div className="intro__inner">
          <h2>{name}</h2>
          <h4>{position}</h4>
          <h5>{location}</h5>
          <ul>
            {bio.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </CenteredDiv>
      <CenteredDiv>
        <p>
          <em>
            I build websites, web apps, apps, tools and things that solve
            problems. I am convinced UX and web performance really matter and
            that high-quality solutions pay off over time. And I like designing
            high-quality solutions.
          </em>
        </p>
      </CenteredDiv>
    </StyledIntro>
  )
}

export default Intro
