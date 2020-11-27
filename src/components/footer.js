import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import styles from './footer.module.scss';

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
        <footer className={styles.footer}>
            <p>Created by {author}, &copy; 2020</p>
        </footer>
    );
}

export default Footer;