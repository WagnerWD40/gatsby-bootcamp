import React from 'react';
import '../styles/index.scss';
import styles from './layout.module.scss';

import Footer from './footer';
import Header from './header';

function Layout({ children }) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Header />
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;