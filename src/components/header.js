import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import styles from './header.module.scss';

function Header() {
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
        <header className={styles.header}>
            <h1><Link to="/" className={styles.title}>{title}</Link></h1>
            <nav>
                <ul className={styles.navList}>
                    <li>
                        <Link
                            activeClassName={styles.navLinkActive}
                            className={styles.navLink}
                            to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClassName={styles.navLinkActive}
                            className={styles.navLink}                        
                            to="/blog">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClassName={styles.navLinkActive}
                            className={styles.navLink}                        
                            to="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClassName={styles.navLinkActive}
                            className={styles.navLink}                        
                            to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;