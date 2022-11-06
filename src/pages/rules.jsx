import { graphql } from 'gatsby';
import React from 'react';
import renderMarkdown from '../utils/renderMarkdown';

export default function info(props) {

    const { htmlAst, frontmatter } = props.data.markdownRemark;

    return (
        <div className='page rules-page'>
            <div className='heading'>
                <h1>{ frontmatter.title }</h1>
            </div>

            <div className='display'>
                { renderMarkdown(htmlAst) }
            </div>
        </div>
    );
}

export const query = graphql`
query MyQuery {
    markdownRemark(frontmatter: {slug: {eq: "rules"}}) {
      frontmatter {
        title
        slug
      }
      htmlAst
    }
  }
`;