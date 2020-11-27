import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

export const query = graphql`
query (
    $slug: String!
  ) {
      markdownRemark (
      fields: {
        slug: {
          eq: $slug
        }
      }) {
      frontmatter {
        title
      }
      html
    }
  }
`;

function BlogPost({ data: { markdownRemark } }) {
    const { title, date } = markdownRemark.frontmatter;

    return (
        <Layout>
            <h1>{title}</h1>
            <p>{date}</p>
            <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }}></div>
        </Layout>
    );
}

export default BlogPost;