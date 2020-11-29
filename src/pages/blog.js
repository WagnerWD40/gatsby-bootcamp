import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import styles from './blog.module.scss'

import Layout from '../components/layout';
import Head from '../components/head';

function Blog() {
    const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (
        sort: {
          fields: publishedDate,
          order: DESC
        }
      ) {
        edges {
          node {
            title
            slug
            publishedDate(
              formatString: "D MMMM, YYYY"
            )
          }
        }
      }
    }
    `);

    const posts = data.allContentfulBlogPost.edges;

    return (
        <Layout>
            <Head pageTitle="Contact" />
            <h1>Blog</h1>
            <p>Posts will show up here later on.</p>
            <ol className={styles.posts}>
                {posts.map(markdown => {
                    const { title, slug, publishedDate } = markdown.node;

                    return (
                        <li className={styles.post} key={title}>
                            <h2><Link to={`/blog/${slug}`}>{title}</Link></h2>
                            <p>{publishedDate}</p>
                        </li>
                    );
                })}
            </ol>
        </Layout>
    );
}

export default Blog;