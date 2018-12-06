import React, { Component } from 'react'
import styled from 'styled-components'
import H2 from '../../elements/H2/H2'
import Grid from '../../elements/Grid/Grid'

import udacityMWS350 from './udacity-mobile-web-specialist-350.png'
import adobeAEM350 from './adobe-aem-certificate-350.png'
import googleAnalytics350 from './google-analytics-individual-qualification-350.png'

const ImgFrameContainer = styled(Grid)`
  padding: 1rem 2rem;
  grid-gap: 2rem;
`

const ImgFrame = styled.a`
  text-align: center;
`

const Img = styled.img`
  margin-bottom: 1rem;
  border-radius: 4px;
  max-width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: 225ms;

  &:hover {
    box-shadow: 0 7px 18px rgba(0, 0, 0, 0.25), 0 7px 10px rgba(0, 0, 0, 0.22);
  }
`

export default class Certificates extends Component {
  render() {
    return (
      <section style={{ backgroundColor: '#dedede' }}>
        <H2>&#123; Certificates &#125;</H2>
        <ImgFrameContainer col1200="3">
          <ImgFrame
            href="https://confirm.udacity.com/KSG5UP2N"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img src={udacityMWS350} />
            <p>Udacity Mobile Web Specialist Nanodegree</p>
          </ImgFrame>
          <ImgFrame
            href="https://drive.google.com/open?id=1heLaaswoCq3TJ2CAPWkwOJuUxI8D-lzP"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img src={adobeAEM350} />
            <p>Develop Websites and Components in Adobe Experience Manager</p>
          </ImgFrame>
          <ImgFrame
            href="https://academy.exceedlms.com/student/users/1209835"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img src={googleAnalytics350} />
            <p>Google Analytics individual qualification</p>
          </ImgFrame>
        </ImgFrameContainer>
      </section>
    )
  }
}
