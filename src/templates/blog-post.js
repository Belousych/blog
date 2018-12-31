import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/Seo'
import { graphql } from 'gatsby'
function BlogPost(props) {
  const post = props.data.markdownRemark
  const url = props.data.site.siteMetadata.siteUrl
  const { title, description } = post.frontmatter
  return (
    <Layout>
      <Seo
        title={title}
      />
      <div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
