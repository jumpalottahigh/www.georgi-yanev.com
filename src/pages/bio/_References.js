import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

const StyledReferences = styled.section`
  .references {
    display: block;
  }

  .gatsby-image-wrapper {
    max-width: 800px;
    margin: 0 auto 3rem;
  }
`

const References = () => {
  const data = useStaticQuery(graphql`
    query {
      references: allFile(
        filter: { relativePath: { regex: "/references/" } }
        sort: { fields: name, order: ASC }
      ) {
        edges {
          node {
            id
            name
            childImageSharp {
              fluid(maxWidth: 1024) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return (
    <StyledReferences>
      <div className="references">
        {data.references.edges.map(({ node: ref }) => (
          <Img key={ref.id} fluid={ref.childImageSharp.fluid} alt={ref.name} />
        ))}
      </div>
    </StyledReferences>
  )
}

export default References
