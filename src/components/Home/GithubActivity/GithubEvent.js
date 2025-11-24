import React from 'react'
import Moment from 'react-moment'

import Card from '../../elements/Card/Card.js'

const GithubEvent = ({ data }) => {
  const event = data
  if (!event) return null

  let eventData = {
    date: event.created_at,
    actorName: event.actor.display_login,
    repoName: event.repo.name,
    repoLink: event.repo.url.replace('api.github.com/repos', 'github.com'),
    payloadText: '',
  }

  switch (event.type) {
    case 'PushEvent':
      eventData.payloadText = `pushed a commit to`
      break
    case 'IssueCommentEvent':
      eventData.payloadText = `commented: "${event.payload.comment.body}" in issue ${event.payload.issue.title} in`
      break
    case 'CreateEvent':
      eventData.payloadText = `created ${event.payload.ref_type}`
      break
    case 'DeleteEvent':
      eventData.payloadText = `deleted ${event.payload.ref_type} ${event.payload.ref} in`
      break
    case 'PullRequestEvent':
      eventData.payloadText = `${event.payload.action} PR #${event.payload.number}: ${event.payload.pull_request.title} in`
      break
    case 'WatchEvent':
      eventData.payloadText = `${event.payload.action} watching`
      break
    case 'ForkEvent':
      eventData.payloadText = `forked ${event.payload.forkee.name} from`
      break
    default:
      eventData.payloadText = `unrecognized event case`
  }

  return (
    <Card className="github-event">
      <Moment date={eventData.date} format="Do MMM YYYY HH:mm" />
      <h5>{eventData.actorName}</h5>
      <p style={{ wordBreak: 'break-word' }}>{eventData.payloadText}</p>
      <p>
        <a href={eventData.repoLink}>{eventData.repoName}</a>
      </p>
    </Card>
  )
}

export default GithubEvent
