import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function Head({ pageTitle }) {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
    `);

    const { title } = data.site.siteMetadata;

    return (
        <Helmet title={`${pageTitle} | ${title}`} />
    );
}

export default Head;