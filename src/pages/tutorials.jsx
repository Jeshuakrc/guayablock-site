import { graphql } from 'gatsby';
import React from 'react';
import { useEffect } from 'react';
import PostCart from '../components/PostCard';
import renderMarkdown from '../utils/renderMarkdown';

function tutorials(props) {

	const subPages = props.data.allMarkdownRemark.nodes.map(node => node.frontmatter);
	const page = props.data.markdownRemark.frontmatter;
	const html = props.data.markdownRemark.htmlAst;

	return (
		<div className='page tutorials-page'>
			<div className='heading'>
				<h1>{ page.title }</h1>
			</div>

			<div className='display'>
				{ renderMarkdown(html) }

				<PostCart />
			</div>
		</div>
	);
}

export default tutorials;

export const query = graphql`
query query {
  allMarkdownRemark(filter: {frontmatter: {slug: {regex: "/^tutorials//"}}}) {
    nodes {
      frontmatter {
        slug
        title
      }
      id
    }
  }
  markdownRemark(frontmatter: {slug: {eq: "tutorials"}}) {
    id
    frontmatter {
      title
    }
    htmlAst
  }
}
`;
