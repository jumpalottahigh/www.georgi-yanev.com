import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
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
        sort: { name: ASC }
      ) {
        edges {
          node {
            id
            name
            childImageSharp {
              gatsbyImageData(width: 1024, formats: [AUTO, WEBP])
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
          <GatsbyImage key={ref.id} image={getImage(ref.childImageSharp.gatsbyImageData)} alt={ref.name} />
        ))}
      </div>
    </StyledReferences>
  )
}

export default References
