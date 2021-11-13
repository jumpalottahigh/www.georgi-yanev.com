import React from 'react'
import Img from 'gatsby-image'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import H2 from '../../elements/H2/H2.js'
import CenteredDiv from '../../elements/CenteredDiv/CenteredDiv.js'

const Ul = styled.ul`
  display: grid;
  grid-gap: 10px;
  padding: 0;
  list-style-type: none;
`

export default () => (
  <StaticQuery
    query={graphql`
      query {
        vscode: allFile(filter: { relativePath: { regex: "/uses/vscode/" } }) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }

        desk: allFile(filter: { relativePath: { regex: "/uses/desk/" } }) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <section
        id="uses"
        style={{ gridColumn: '1/-1', backgroundColor: '#dedede' }}
      >
        <H2>&#123; Uses &#125;</H2>
        <CenteredDiv>
          <Ul>
            <li>
              <h3>Editor, Theme and Font</h3>
              <div>
                <a
                  href="https://code.visualstudio.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VS Code!
                </a>{' '}
                Switched to it in early 2017 and never looked back. <br />I had
                previously also loved using{' '}
                <a
                  href="https://atom.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Atom
                </a>{' '}
                and{' '}
                <a
                  href="https://www.sublimetext.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SublimeText
                </a>
                .
                <br />I use the{' '}
                <a
                  href="https://github.com/tonsky/FiraCode"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FiraCode
                </a>{' '}
                coding font with ligatures and the{' '}
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  One Dark Pro
                </a>{' '}
                theme. Here's a list of all extensions I use:
                <br />
                <div
                  style={{ width: '100%', maxWidth: '800px', margin: '10px 0' }}
                >
                  <Img
                    fluid={data.vscode.edges[0].node.childImageSharp.fluid}
                    alt={data.vscode.edges[0].node.name}
                  />
                </div>
                <p>
                  <br />
                  <em>
                    <strong>$ code --list-extensions</strong>
                    <br />
                    alefragnani.Bookmarks <br />
                    CoenraadS.bracket-pair-colorizer
                    <br />
                    DavidAnson.vscode-markdownlint
                    <br />
                    dbaeumer.vscode-eslint
                    <br />
                    dsznajder.es7-react-js-snippets
                    <br />
                    eamodio.gitlens
                    <br />
                    esbenp.prettier-vscode
                    <br />
                    HookyQR.minify
                    <br />
                    jpoissonnier.vscode-styled-components
                    <br />
                    ms-python.python
                    <br />
                    octref.vetur
                    <br />
                    ritwickdey.LiveServer
                    <br />
                    robertohuertasm.vscode-icons
                    <br />
                    sdras.night-owl
                    <br />
                    Tyriar.lorem-ipsum
                    <br />
                    vscodevim.vim
                    <br />
                    wayou.vscode-todo-highlight
                    <br />
                    wesbos.theme-cobalt2
                    <br />
                    zhuangtongfa.Material-theme
                    <br />
                  </em>
                </p>
              </div>
            </li>
            <li>
              <h3>Terminal</h3>
              <p>
                I use{' '}
                <a
                  href="https://www.iterm2.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  iTerm 2
                </a>{' '}
                as my daily driver for terminal needs on my mac and{' '}
                <a
                  href="https://git-scm.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Git Bash on my windows rig.
                </a>{' '}
              </p>
            </li>
            <li>
              <h3>Productivity &amp; Tools</h3>
              <p>
                <a
                  href="https://www.google.com/chrome/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Chrome
                </a>
              </p>
              <p>
                <a
                  href="https://www.mozilla.org/en-US/firefox/developer/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Firefox Developer Edition
                </a>
              </p>
              <p>
                <a
                  href="https://trello.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Trello
                </a>{' '}
                - managing projects with kanban boards
              </p>
              <p>
                <a
                  href="https://www.notion.so/?r=9816c2c5af8044e99eb54030e971857c"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Notion
                </a>{' '}
                - Sorting tasks, todos, embedded content and so much more.
              </p>
              <p>
                <a
                  href="https://www.canva.com/join/soldering-reward-scale"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Canva
                </a>{' '}
                - Quick image designs.
              </p>
              <p>
                <a
                  href="https://workflowy.com/invite/6a2fe7e5.lnx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WorkFlowy
                </a>{' '}
                - simple list making app for quick notes
              </p>
              <p>
                <a
                  href="https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lighthouse
                </a>
              </p>
              <p>
                <a
                  href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React Dev Tools
                </a>
              </p>
              <p>
                <a
                  href="https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vue Dev Tools
                </a>
              </p>
            </li>
          </Ul>
          <div style={{ width: '100%', maxWidth: '800px', margin: '10px 0' }}>
            <Img
              fluid={data.desk.edges[0].node.childImageSharp.fluid}
              alt={data.desk.edges[0].node.name}
            />
          </div>
        </CenteredDiv>
      </section>
    )}
  />
)
