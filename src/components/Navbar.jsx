import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { mainBody, repos, about, skills } from "../editable-stuff/config.js";
import { NavLink } from "./home/migration";
import { Button } from "./Button";
import { useSelector } from "react-redux";
import Toggler from "../editable-stuff/burguer.png";

const Navigation = React.forwardRef((props, ref) => {
	// const { showBlog, FirstName } = config;

	const navbarMenuRef = React.useRef();

	const setLanguage = useSelector((state) => state.estado.value);
	let projects = "Projects";
	let curriculo = "Resume";
	let sobre = "About";
	let habilidades = "Skills";
	if (setLanguage === false) {
		projects = "Projetos";
		curriculo = "Currículo";
		sobre = "Sobre";
		habilidades = "Habilidades";
	}

	return (
		<Navbar
			ref={navbarMenuRef}
			className={`px-3 fixed-top navbar-white`}
			expand="lg"
		>
			<Navbar.Brand
				className="navbar-brand"
				href={process.env.PUBLIC_URL + "/#home"}
			>
				{`<${mainBody.firstName} />`}
			</Navbar.Brand>
			{/* <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler"> - className apagado na linha abaixo */}
			<Navbar.Toggle aria-controls="basic-navbar-nav">
				<img class="test" src={Toggler} alt="Toggler"></img>
			</Navbar.Toggle>
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="navbar-nav mr-auto">
					{/* {
            <NavLink className="nav-item lead">
			<Link to={process.env.PUBLIC_URL + "/blog"}>Blog</Link>
            </NavLink>
          } */}
					{repos.show && (
						<NavLink href={process.env.PUBLIC_URL + "/#projects"}>
							{projects}
						</NavLink>
					)}
					<NavLink
						className="nav-item lead"
						href={about.resume}
						target="_blank"
						rel="noreferrer noopener"
					>
						{curriculo}
					</NavLink>
					{about.show && (
						<NavLink
							className="nav-item lead"
							href={process.env.PUBLIC_URL + "/#aboutme"}
						>
							{sobre}
						</NavLink>
					)}
					{skills.show && (
						<NavLink
							className="nav-item lead"
							href={process.env.PUBLIC_URL + "/#skills"}
						>
							{habilidades}
						</NavLink>
					)}
					<Button />
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
});

export default Navigation;
