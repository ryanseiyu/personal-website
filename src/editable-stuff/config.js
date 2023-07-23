// Navigation Bar SECTION
const navBar = {
	show: true,
};

// Main Body SECTION
const mainBody = {
	gradientColors: "#000006, #00308F",
	firstName: "Ryan",
	middleName: "Seiyu",
	lastName: "Yamaguchi Kimura",
	message: " Passionate about changing the world with technology. ",
	// Apaixonado por mudar o mundo com tecnologia.

	icons: [
		{
			image: "fa-github",
			url: "https://github.com/ryanseiyu",
		},
		{
			image: "fa-facebook",
			url: "https://www.facebook.com/ryan.seiyu",
		},
		{
			image: "fa-instagram",
			url: "https://www.instagram.com/ryanseiyu/",
		},
		{
			image: "fa-linkedin",
			url: "https://www.linkedin.com/in/ryanseiyu/",
		},
		{
			image: "fa-twitter",
			url: "https://www.twitter.com/ryanseiyu/",
		},
	],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
	show: true,
	heading: "About Me",
	imageLink: require("../editable-stuff/ryanseiyu.png"),
	imageSize: 375,
	message:
		"Hi my name is Ryan Seiyu, my passion for electrical engineering and software development fuels my drive to create innovative solutions that make a meaningful impact. I am eager to take on new challenges, leverage my skills, and contribute to exciting projects. If you're seeking a dedicated and versatile professional who can bring expertise in electrical engineering and full stack development to the table, I would be thrilled to collaborate with you. Let's build something remarkable together!",
	// A minha paixão pela engenharia elétrica e desenvolvimento de software alimenta o meu impulso para criar soluções inovadoras que tenham um impacto significativo. Estou ansioso para enfrentar novos desafios, aproveitar as minhas habilidades e contribuir para projetos empolgantes. Se você está procurando por um profissional dedicado e versátil, capaz de trazer expertise em engenharia elétrica e desenvolvimento full stack para a mesa, ficarei emocionado em colaborar com você. Vamos construir algo notável juntos!
	resume: "https://curriculo-nu-mauve.vercel.app/",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
	show: true,
	heading: "Recent Projects",
	gitHubUsername: "ryanseiyu", //i.e."johnDoe12Gh"
	reposLength: 0,
	specificRepos: [
		"DayNotes",
		"questrade-hackaton",
		"loja-de-chocolate",
		"efood",
	],
};

// Leadership SECTION
const leadership = {
	show: false,
	heading: "Leadership",
	message:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
	images: [
		{
			img: require("../editable-stuff/ryanseiyu.png"),
			label: "First slide label",
			paragraph:
				"Nulla vitae elit libero, a pharetra augue mollis interdum.",
		},
		{
			img: require("../editable-stuff/ryanseiyu.png"),
			label: "Second slide label",
			paragraph:
				"Nulla vitae elit libero, a pharetra augue mollis interdum.",
		},
	],
	imageSize: {
		width: "615",
		height: "450",
	},
};

// SKILLS SECTION
const skills = {
	show: true,
	heading: "Skills",
	hardSkills: [
		{ name: "React", value: 100 },
		{ name: "JavaScript", value: 100 },
		{ name: "HTML/CSS", value: 100 },
		{ name: "Java", value: 100 },
		{ name: "SQL", value: 100 },
		{ name: "Electrical Engineering", value: 100 },
		{ name: "Photoshop", value: 100 },
		{ name: "Local AI image generation", value: 100 },
		{ name: "Excel", value: 100 },
		{ name: "PowerBI", value: 100 },
	],
	softSkills: [
		{ name: "C/C++", value: 50 },
		{ name: "Three.js", value: 10 },
		{ name: "Blender", value: 25 },
		{ name: "Neuroscience", value: 50 },
		{ name: "Investing (Stocks, Crypto)", value: 90 },
		{ name: "TensorFlow.js", value: 10 },
		{ name: "Python", value: 10 },
		{ name: "Azure", value: 10 },
	],
};

// GET IN TOUCH SECTION
const getInTouch = {
	show: true,
	heading: "Get In Touch",
	message:
		"I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
	// Atualmente, estou em busca de oportunidades em tempo integral na área de Engenharia de Software ou Aprendizado de Máquina! Se você souber de alguma vaga disponível, tiver alguma pergunta ou simplesmente quiser dizer oi, sinta-se à vontade para me enviar um e-mail para
	email: "ryanseiyu@gmail.com",
};

const experiences = {
	show: false,
	heading: "Experiences",
	data: [
		{
			role: "Software Engineer", // Here Add Company Name
			companylogo: require("../assets/img/dell.png"),
			date: "June 2018 to Present",
		},
		{
			role: "Front-End Developer",
			companylogo: require("../assets/img/boeing.png"),
			date: "May 2017 to May 2018",
		},
	],
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export {
	navBar,
	mainBody,
	about,
	repos,
	skills,
	leadership,
	getInTouch,
	experiences,
};
