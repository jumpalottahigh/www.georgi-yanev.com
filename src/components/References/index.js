import React from 'react'
import styled from 'styled-components'
import H2 from '../elements/H2/H2'

const whatPeopleHaveSaidAboutMe = [
  'Technically very competent fellow who can adapt any technology or framework very fast',
  'Supporting other fellows and has done so in many occations during the AEM project',
  'Excellent in written communication using tools like Jira, Teams, Slack and Trello',
  'Very good in sharing ideas and resources among team members',
  'Always challenging the status quo',
  'Of all the developers here, Georgi is most up to the date on latest best practices in web development as far as I see. That is pushing us to be better every day. I would assume that this is due to his genuine interest in the subject. That is the only thing that will keep one up to date in a fast moving industry such as web development.',
  'Deep knowledge and always up-to-date with the latest technology',
  '',
]

const Container = styled.section`
  display: flex;
  flex-direction: column;

  .inner {
    max-width: 80ch;
    margin: 0 auto;
  }
`

const Links = () => (
  <Container>
    <H2>What people have said about me:</H2>
    <div className="inner">
      {whatPeopleHaveSaidAboutMe.map((link, index) => (
        <div key={index}>&bdquo;{link}&ldquo;</div>
      ))}
    </div>
  </Container>
)

export default Links
