export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer">
			<div className="footer__content">
				<h3>Links of Interest</h3>
				<a href="/rss.xml">RSS Feed</a>
				<br />
				<a href="/todo">Todo List</a>
				<br />
				<a href="https://keyoxide.org/hkp/garrit@slashdev.space">PGP Key</a>
				<br />
				<a href="/guestbook">Guestbook</a>
				<br />
				<a href="/blogroll">Blogroll</a>
				<br />
				<a href="/ctf">Capture the Flag</a>
				<br />
				<a href="/privacy">Privacy Policy</a>
				<h3>Elsewhere</h3>
				<a href="https://github.com/marcocaldera" rel="me">
					Github
				</a>
				<br />
				<a href="https://www.linkedin.com/in/marco-caldera/">LinkedIn</a>
				<br />
				<a href="/contact">Contact</a>
			</div>
			<p>© 2022-{currentYear} Marco Caldera</p>
		</footer>
	);
}
