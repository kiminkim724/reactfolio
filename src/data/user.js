const INFO = {
	main: {
		title: "Kimin Kim | Software Engineer",
		name: "Kimin Kim",
		email: "kiminkim724@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		github: "https://github.com/kiminkim724",
		linkedin: "https://www.linkedin.com/in/kimin-kim/",
	},

	homepage: {
		title: "Software Engineer",
		description:
			"I am a recent computer science graduate from Northeastern University with a concentration in Software. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.",
	},

	about: {
		title: "I’m Kimin Kim.",
		description:
			"I've worked on a variety of projects during my school years and I've also had the chance to work at some co-ops. Some of the co-ops include Toast, Inc. and Bain Capital, where I worked as both a Software Engineer and an IT Service Management Co-op. From these experiences, I've had the chance to learn a lot and grow into a better software developer.",
	},

	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	projects: [
		{
			title: "Massachusetts Platform for Legislative Engagement (MAPLE).",
			description:
				"A legislative testimony project through Code for Boston! MAPLE makes it easy for residents to submit their testimony to the MA legislature and read the testimony of others. Our goals are to shine a light on the statehouse by 1) providing a public archive of legislative testimony; 2) standardizing and demystifying the testimony process, so that more people can make their voices heard; and 3) creating a space for constituents and legislators to maintain prolonged focus on key issues, and to learn more efficiently about the laws that will shape our lives. Through this, we hope that people can better channel their political energy into productive improvements for our local and state communities.",
			logo: "maple-logo.png",
			linkText: "View Project",
			link: "https://www.mapletestimony.org",
		},

		{
			title: "SearchNEU",
			description:
				"SearchNEU lets you easily search for classes, professors, and subjects at Northeastern. All the data on the site is scraped from different parts of Northeastern's websites and updated daily. The scrapers themselves run on the Course Catalog API, which is hosted on Amazon Web Services.",
			logo: "searchneu.png",
			linkText: "View Project",
			link: "https://searchneu.com/NEU",
		},

		{
			title: "Karaoke Area in Covey.town",
			description:
				"This project was developed in my Software Engineering class, where we work on a time in sprints to create an additional feature to an existing project called Covey.Town. Our group chose to implement a Spotify Player using the Web Playback SDK and the Web API to create a listening room where multiple people can listen at the same time. The Tech Stack used was Typescript, React, MongoDB, TSOA.",
			logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1024px-Spotify_logo_without_text.svg.png",
			linkText: "View Project",
			link: "https://github.com/kiminkim724/cs4530-final",
		},

		{
			title: "Spotify Album Reviews",
			description:
				"This is a full stack project for my Web development class that allows users to view and review albums/songs from Spotify using data that is directly pulled from their API. Users can also follow other users and have a personalized home page. There are also admin roles to moderate reviews and users.The tech stack used was React, Node.js, Express and MongoDB.",
			logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1024px-Spotify_logo_without_text.svg.png",
			linkText: "View Project",
			link: "https://github.com/kiminkim724/cs4550-final-project",
		},

		{
			title: "Marino Gym Tracker",
			description:
				"This project is a website that allows users to view how many people are in the gyms at Northeastern at different times of the day on average. I created this because I was frustrated not knowing when the gyms would be crowded or not. I first scraped the head count from the school's website and then uploaded the data to a MongoDB database, then used a Flask server to be able to get the data from the database and then calculate the averages and send it to the Next.js frontend",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com/kiminkim724/marino-graph",
		},
	],
};

export default INFO;
