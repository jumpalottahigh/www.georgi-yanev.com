import React, { Component } from 'react'
import styled from 'styled-components'
import Grid from '../../elements/Grid/Grid'
import H2 from '../../elements/H2/H2.js'

import imgBaehr from './baehr.png'
import imgBlogGeorgi from './blog.png'
import imgFpvtips from './fpvtips.png'
import imgWWWGeorgi from './georgi-yanev.com.png'
import imgMWS from './mobile-web-specialist.png'
import imgStreamer from './streamer-screen.png'
import imgYoutube from './youtube-screenshot.png'

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

export default class Portfolio extends Component {
  render() {
    return (
      <section>
        <H2>&#123; Things I've built &#125;</H2>
        <ImgFrameContainer col1200="3">
          <ImgFrame
            href="https://www.fpvtips.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img src={imgFpvtips} />
            <p>www.fpvtips.com</p>
          </ImgFrame>
          <ImgFrame
            href="https://www.baehrbg.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img src={imgBaehr} />
            <p>www.baehrbg.com</p>
          </ImgFrame>
          <ImgFrame
            href="https://blog.georgi-yanev.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img src={imgBlogGeorgi} />
            <p>blog.georgi-yanev.com</p>
          </ImgFrame>
          <ImgFrame
            href="https://www.georgi-yanev.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img src={imgWWWGeorgi} />
            <p>www.georgi-yanev.com</p>
          </ImgFrame>

          <ImgFrame
            href="https://udacity-mws-georgi.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img src={imgMWS} />
            <p>udacity-mws-georgi.netlify.com</p>
          </ImgFrame>
          <ImgFrame
            href="https://youtube-screenshot.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img src={imgYoutube} />
            <p>youtube-screenshot.netlify.com/</p>
          </ImgFrame>
          <ImgFrame
            href="https://streamer-screen.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img src={imgStreamer} />
            <p>streamer-screen.netlify.com/</p>
          </ImgFrame>
        </ImgFrameContainer>
      </section>
    )
  }
}
