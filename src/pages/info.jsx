import { graphql } from 'gatsby';
import React from 'react';

export default function info(props) {

    const { html, frontmatter } = props.data.markdownRemark;

    return (
        <div className='page info-page'>
            <div className='heading'>
                <h1>{ frontmatter.title }</h1>
            </div>

            <div className='display' dangerouslySetInnerHTML={{ __html: html}}>
            </div>
        </div>
    );
}

export const query = graphql`
query MyQuery {
    markdownRemark(frontmatter: {slug: {eq: "info"}}) {
      frontmatter {
        title
        slug
      }
      html
    }
  }
`;