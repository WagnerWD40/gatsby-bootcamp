import React from "react"
import { Link } from 'gatsby';

import Layout from '../components/layout';

function Home() {
    return (
        <Layout>
            <h1>Hello</h1>
            <h2>I'm a full-stack developer ready to rock!</h2>
            <p>need a developer? <Link to="/contact">Contact me.</Link></p>
        </Layout>
    );
}

export default Home;
