import * as React from "react"
import Layout from "../components/Layout";

const IndexPage = () => {
    return (
        <Layout>
            <h2>Welcome to Home</h2>
            <p>This is the Home page of our application.</p>
        </Layout>
    );
};

export const Head = () => <title>Kimi & Clara</title>;

export default IndexPage;
