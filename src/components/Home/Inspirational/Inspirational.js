import React from 'react'
import Button from '../../elements/Button/Button'

const Inspirational = () => (
  <section style={{ gridColumn: '1/-1' }}>
    <p className="inspirational">
      <em>
        One of the reasons I keep my teenage hip hop pseudonim to this day even
        in places like twitter and github, is because `
        <strong>jumpalottahigh</strong>` reflects my entire life - before, now
        and in the future - I've always been trying to jump ever so slightly
        higher, to grow, to evolve, to reach that next level!
      </em>
    </p>
    <a
      href="CV-Georgi_Yanev-2019.pdf"
      target="_blank"
      rel="noreferrer"
      style={{ gridColumn: '1/-1', textAlign: 'center' }}
    >
      <Button>Resume</Button>
    </a>
  </section>
)

export default Inspirational
