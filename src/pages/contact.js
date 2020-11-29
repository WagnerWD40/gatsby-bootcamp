import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

function Contact() {
    return (
        <Layout>
            <Head pageTitle="Contact" />
            <h1>Contact page</h1>
            <p>this is the contact page</p>
            <p><a href="https://www.google.com">Google</a></p>
        </Layout>
    );
}

export default Contact;