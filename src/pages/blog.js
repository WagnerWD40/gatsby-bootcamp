import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import styles from './blog.module.scss'

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
              fields {
                slug
              }
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
            <ol className={styles.posts}>
                {posts.map(markdown => {
                    const { title, date } = markdown.node.frontmatter;
                    const { slug } = markdown.node.fields;
                    return (
                        <li className={styles.post} key={title}>
                            <h2><Link to={`/blog/${slug}`}>{title}</Link></h2>
                            <p>{date}</p>
                        </li>
                    );
                })}
            </ol>
        </Layout>
    );
}

export default Blog;