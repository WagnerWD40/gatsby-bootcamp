import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

function About() {
    return (
        <Layout>
            <Head pageTitle="About" />          
            <h1>About page</h1>
            <p>this is the about page</p>
            <Link to="/contact" >contact</Link>
        </Layout>
    );
}

export default About;