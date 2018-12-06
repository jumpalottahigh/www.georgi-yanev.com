import React, { Component } from 'react'
import styled from 'styled-components'
import H2 from '../../elements/H2/H2.js'
import CenteredDiv from '../../elements/CenteredDiv/CenteredDiv.js'

const PastProjectsContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  padding-top: 1rem;

  span {
    font-weight: 500;
  }

  span:after {
    margin: 0.5rem;
    content: '|';
  }
`

export default class PastProjects extends Component {
  render() {
    return (
      <section style={{ backgroundColor: '#dedede' }}>
        <H2>&#123; Older open source projects &#125;</H2>
        <CenteredDiv>
          <PastProjectsContainer>
            <span>
              <a
                href="https://github.com/jumpalottahigh/gatsby-starter-blog-jumpalottahigh"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gatsby blog starter{' '}
              </a>
            </span>
            <span>
              <a
                href="https://github.com/jumpalottahigh/vuepress-starter"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vue Press starter
              </a>
            </span>
            <span>
              <a
                href="https://github.com/jumpalottahigh/YAR-Home-Assistant-Configuration"
                target="_blank"
                rel="noopener noreferrer"
              >
                Home Assistant smart home configuration
              </a>
            </span>
            <span>
              <a
                href="https://github.com/jumpalottahigh/medicine-logger"
                target="_blank"
                rel="noopener noreferrer"
              >
                Medicine Logger
              </a>
            </span>
            <span>
              <a
                href="https://github.com/jumpalottahigh/command-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Command Center
              </a>
            </span>
            <span>
              <a
                href="https://github.com/jumpalottahigh/beer-rating"
                target="_blank"
                rel="noopener noreferrer"
              >
                Beer Rating
              </a>
            </span>
            <span>
              <a
                href="https://github.com/jumpalottahigh/anton-baby-data"
                target="_blank"
                rel="noopener noreferrer"
              >
                Anton Baby Data
              </a>
            </span>
            <span>
              <a
                href="https://github.com/jumpalottahigh/giftbox"
                target="_blank"
                rel="noopener noreferrer"
              >
                Giftbox
              </a>
            </span>
            <span>
              <a
                href="https://github.com/jumpalottahigh/Console.Log"
                target="_blank"
                rel="noopener noreferrer"
              >
                Console.Log
              </a>
            </span>
            <span>
              <a
                href="https://github.com/jumpalottahigh/place_saver"
                target="_blank"
                rel="noopener noreferrer"
              >
                Place Saver
              </a>
            </span>
          </PastProjectsContainer>
        </CenteredDiv>
      </section>
    )
  }
}
