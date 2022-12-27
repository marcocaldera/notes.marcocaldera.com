import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Page from "../../components/Page";
import glob from "glob";
import React from "react";
import TagIcon from "../../components/TagIcon";

export default function BlogTemplate(props) {
	function reformatDate(fullDate) {
		const date = new Date(fullDate);
		return date.toDateString().slice(4);
	}

	/*
	 ** Odd fix to get build to run
	 ** It seems like on first go the props
	 ** are undefined — could be a Next bug?
	 */

	if (!props.frontmatter) return <></>;

	const addAnchorTag = ({ node, children, ...props }) => {
		const headerSlug = node.children[0].value
			.replaceAll(" ", "-")
			.toLowerCase();
		return React.createElement(node.tagName, {
			id: headerSlug,
			children: [children],
			...props,
		});
	};

	const renderTagList = () => {
		const tags = props.frontmatter.tags?.split(",").map((tag) => tag.trim());

		return (
			<p className="page__tag-list">
				<TagIcon />
				{tags.map((tag) => (
					<a key={tag} href={`/posts?tags=${tag}`}>
						#{tag}
					</a>
				))}
			</p>
		);
	};

	return (
		<Page
			siteTitle="Garrit's Notes"
			title={props.frontmatter.title}
			date={reformatDate(props.frontmatter.date)}
		>
			<ReactMarkdown
				remarkPlugins={[gfm]}
				rehypePlugins={[rehypeRaw]}
				components={{
					h1: addAnchorTag,
					h2: addAnchorTag,
					h3: addAnchorTag,
					h4: addAnchorTag,
					h5: addAnchorTag,
					h6: addAnchorTag,
				}}
			>
				{props.markdownBody}
			</ReactMarkdown>
			<hr />
			<p>
				<a
					href={`mailto:marco.caldera93@icloud.com?subject=Re: ${encodeURIComponent(
						props.frontmatter.title
					)}`}
				>
					Reply via E-Mail
				</a>
			</p>

			{props.frontmatter.tags && renderTagList()}

			<div className="shareon">
				<a className="facebook"></a>
				<a className="linkedin"></a>
				<a className="reddit"></a>
				<a className="telegram"></a>
				<a className="twitter"></a>
				<a className="whatsapp"></a>
			</div>
		</Page>
	);
}

export async function getStaticProps({ ...ctx }) {
	const { post } = ctx.params;
	const content = await import(`../../content/posts/${post}.md`);
	const data = matter(content.default);

	return {
		props: {
			frontmatter: data.data,
			markdownBody: data.content,
		},
	};
}

export async function getStaticPaths() {
	//get all .md files in the posts dir
	const blogs = glob.sync("content/posts/**/*.md");

	//remove path and extension to leave filename only
	const blogSlugs = blogs.map((file) =>
		file.split("/")[2].replace(/ /g, "-").slice(0, -3).trim()
	);

	// create paths with `slug` param
	const paths = blogSlugs.map((slug) => `/posts/${slug}`);

	return {
		paths,
		fallback: false,
	};
}
