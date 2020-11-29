import React from "react"
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

function Home() {
    return (
        <Layout>
            <Head pageTitle="Home" />
            <h1>Hello</h1>
            <h2>I'm a full-stack developer ready to rock!</h2>
            <p>need a developer? <Link to="/contact">Contact me.</Link></p>
        </Layout>
    );
}

export default Home;
