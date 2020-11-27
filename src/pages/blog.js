import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';

function Blog() {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        html
                        excerpt
                    }
                }
            }
        }
    `);

    const posts = data.allMarkdownRemark.edges;

    return (
        <Layout>
            <h1>Blog</h1>
            <p>Posts will show up here later on.</p>
            <ol>
                {posts.map(markdown => {
                    const { title, date } = markdown.node.frontmatter;
                    return (
                        <li key={title}>
                            <h2>{title}</h2>
                            <p>{date}</p>
                        </li>
                    );
                })}
            </ol>
        </Layout>
    );
}

export default Blog;