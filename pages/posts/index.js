import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import BlogList from "../../components/BlogList";
import Page from "../../components/Page";
import matter from "gray-matter";

const Index = (props) => {
	const { query } = useRouter();
	const [postUrl, setPostUrl] = useState("");

	useEffect(() => {
		const randomIndex = Math.floor(Math.random() * filteredPosts.length);
		const randomPost = filteredPosts[randomIndex];
		console.log(randomPost);
		const randomUrl = `/posts/${randomPost?.slug}`;
		setPostUrl(randomUrl);
	}, []);

	const filteredPosts = query.tags
		? props.posts.filter((post) =>
				post.frontmatter.tags
					?.split(",")
					.map((tag) => tag.trim().toLowerCase())
					.includes(query.tags.trim().toLowerCase())
		  )
		: props.posts;

	const renderRandomButton = (url) => {
		return (
			<p>
				<a href={url} onClick={() => plausible("random_post_clicked")}>
					✨ Random Post ✨
				</a>
			</p>
		);
	};

	return (
		<Page siteTitle="Marco's Notes">
			{renderRandomButton(postUrl)}
			<hr />
			<BlogList posts={filteredPosts} />
		</Page>
	);
};

export async function getStaticProps() {
	//get posts & context from folder
	const posts = ((context) => {
		const keys = context.keys();
		const values = keys.map(context);

		const data = keys.map((key, index) => {
			// Create slug from filename
			const slug = key
				.replace(/^.*[\\\/]/, "")
				.split(".")
				.slice(0, -1)
				.join(".");
			const value = values[index];
			// Parse yaml metadata & markdownbody in document
			const document = matter(value.default);
			return {
				frontmatter: document.data,
				slug,
			};
		});
		return data;
	})(require.context("../../content/posts", true, /\.md$/));

	return {
		props: {
			posts,
			description: "",
		},
	};
}

export default Index;
