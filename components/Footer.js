export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer">
			<div className="footer__content">
				<h3>Links of Interest</h3>
				<a href="/rss.xml">RSS Feed</a>
				<br />
				<a href="/privacy">Privacy Policy</a>
				<h3>Elsewhere</h3>
				<a href="https://github.com/marcocaldera" rel="me">
					Github
				</a>
				<span> ⋅ </span>
				<a href="https://www.linkedin.com/in/marco-caldera/">LinkedIn</a>
				<span> ⋅ </span>
				<a href="https://www.goodreads.com/user/show/142831824-marco-caldera">
					Goodreads
				</a>
				<span> ⋅ </span>
				<a href="/contact">Contact</a>
			</div>
			<p>© 2022-{currentYear} Marco Caldera</p>
		</footer>
	);
}
