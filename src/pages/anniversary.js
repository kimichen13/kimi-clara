import * as React from 'react';
import AnniversaryCountdown from "../components/AnniversaryCountdown";
import {graphql, useStaticQuery} from "gatsby";
import Layout from "../components/Layout";

const Anniversary = () => {
    const {allAnniversaryJson} = useStaticQuery(graphql`
query AllAnniversaryQuery {
  allAnniversaryJson {
    nodes {
      id
      name
      title
      date
    }
  }
}
  `);

    return <Layout>
        {allAnniversaryJson.nodes.map(anniversary =>
            <AnniversaryCountdown
                key={anniversary.name}
                title={anniversary.title}
                name={anniversary.name}
                date={anniversary.date}
            />)}
    </Layout>;
};

export const Head = () => <title>Anniversary</title>;


export default Anniversary;