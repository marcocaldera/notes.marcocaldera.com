import Logo from "./Logo";

export default function Header(props) {
	return (
		<header className="header">
			<nav className="nav" role="navigation" aria-label="main navigation">
				<div className="header__container">
					<a href="/" className="header__container">
						{/* {props.siteTitle} */}
						<Logo />
					</a>
				</div>
				<ul className="header__links">
					<li>
						<a href="/posts" className="underlined">
							Notes
						</a>
					</li>
					{/* <li>
						<a href="/contact" className="underlined">
							Contact
						</a>
					</li> */}
					<li>
						<a href="https://marcocaldera.com" target="_blank">
							Website
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
