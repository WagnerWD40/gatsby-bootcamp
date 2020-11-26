import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

function Footer() {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }    
    `);

    const { author } = data.site.siteMetadata;

    return (
        <footer>
            <p>Created by {author}, &copy; 2020</p>
        </footer>
    );
}

export default Footer;