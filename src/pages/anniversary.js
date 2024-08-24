import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import AnniversaryCountdown from '../components/AnniversaryCountdown';

const AnniversaryPage = ({ data }) => {
    const anniversaries = data.allAnniversaryJson.nodes;

    return (
        <Layout>
            <h1 className="text-4xl font-bold mb-8">Anniversaries</h1>
            {anniversaries.map((anniversary) => (
                <AnniversaryCountdown
                    key={anniversary.id}
                    title={anniversary.title}
                    name={anniversary.name}
                    date={anniversary.date}
                />
            ))}
        </Layout>
    );
};

export const query = graphql`
  query {
    allAnniversaryJson {
      nodes {
        id
        title
        name
        date
      }
    }
  }
`;

export default AnniversaryPage;