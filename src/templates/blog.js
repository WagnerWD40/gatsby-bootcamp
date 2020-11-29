import React from 'react';
import { graphql } from 'gatsby';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout';
import Head from '../components/head';

export const query = graphql`
query (
    $slug: String!
    ){
    contentfulBlogPost (slug: { eq: $slug }){
        title
            publishedDate(formatString: "D MMMM, YYYY")
            body {
                raw
            }
        }
    }
`;

function BlogPost({ data: { contentfulBlogPost } }) {
    const { title, publishedDate, body } = contentfulBlogPost;

    const options = {
      renderNode: {
        "embedded-asset-block": (node) => {
            const alt = node.data.target.sys.id;
            
            return <a>{alt}</a>
        }
      }
    }

    console.log(JSON.parse(body.raw));

    return (
        <Layout>
            <Head pageTitle={title} />
            <h1>{title}</h1>
            <p>{publishedDate}</p>
            {documentToReactComponents(JSON.parse(body.raw))}
        </Layout>
    );
}

export default BlogPost;