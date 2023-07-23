import React from "react";

import axios from "axios";
import { Jumbotron } from "./migration";
import { useSelector } from "react-redux";

const pictureLinkRegex = new RegExp(
	/[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);

const AboutMe = ({ heading, message, link, imgSize, resume }) => {
	const [profilePicUrl, setProfilePicUrl] = React.useState("");
	const [showPic, setShowPic] = React.useState(Boolean(link));
	// https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook
	React.useEffect(() => {
		const handleRequest = async () => {
			const instaLink = "https://www.instagram.com/";
			const instaQuery = "/?__a=1";
			try {
				const response = await axios.get(instaLink + link + instaQuery);
				setProfilePicUrl(response.data.graphql.user.profile_pic_url_hd);
			} catch (error) {
				setShowPic(false);
				console.error(error.message);
			}
		};

		if (link && !pictureLinkRegex.test(link)) {
			handleRequest();
		} else {
			setProfilePicUrl(link);
		}
	}, [link]);

	const setLanguage = useSelector((state) => state.estado.value);
	let headingResume = "Resume";
	if (setLanguage === false) {
		message =
			"A minha paixão pela engenharia elétrica e desenvolvimento de software alimenta o meu impulso para criar soluções inovadoras que tenham um impacto significativo. Estou ansioso para enfrentar novos desafios, aproveitar as minhas habilidades e contribuir para projetos empolgantes. Se você está procurando por um profissional dedicado e versátil, capaz de trazer expertise em engenharia elétrica e desenvolvimento full stack para a mesa, ficarei emocionado em colaborar com você. Vamos construir algo notável juntos!";
		headingResume = "Currículo";
		heading = "Sobre mim";
	}

	return (
		<Jumbotron id="aboutme" className="m-0">
			<div id="aboutMeContainer" className="container row">
				<div id="imageContainer" className="col-5 align-self-center">
					{showPic && (
						<img
							className="border border-secondary rounded-circle"
							src={profilePicUrl}
							alt="profilepicture"
							width={imgSize}
							height={imgSize}
							id="profileImage"
						/>
					)}
				</div>
				<div
					id="aboutMeTextContainer"
					className={`col-lg-${showPic ? "7" : "12"}`}
				>
					<h2 className="display-4 mb-5 text-center">{heading}</h2>
					<p className="lead text-center">{message}</p>
					{resume && (
						<p className="lead text-center">
							<a
								className="btn btn-outline-dark btn-lg"
								href={resume}
								target="_blank"
								rel="noreferrer noopener"
								role="button"
								aria-label="Resume/CV"
							>
								{headingResume}
							</a>
						</p>
					)}
				</div>
			</div>
		</Jumbotron>
	);
};

export default AboutMe;
