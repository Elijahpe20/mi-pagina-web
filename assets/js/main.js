// === Diccionario de textos por idioma ===
const texts = {
	es: {
		description:
			'Soy un Front-end developer y me apasiona la programación, el análisis de datos y las humanidades.',
		aboutDescription:
			'Soy un desarrollador fullstack con conocimientos en Front-end y Back-end. Soy profesional en comunicador social, administrador de empresas y estudiante de ciencia de datos. Me apasiona generar experiencias de comunicación dinámicas y memorables, enfocándome en UX, animaciones y experiencias de usuario intuitivas. Manejo HTML, CSS, JavaScript, Python, ReactJS, NodeJS, Power BI, SQL y R.',
		contact: 'Contáctame',
		project: '¿Tienes un proyecto en mente?',
		projectDesc:
			'¡Hagámoslo realidad! Cuéntame tu idea y en qué plataforma quieres desarrollarla. Yo me encargo del resto.',
		navHome: 'Home',
		navAbout: 'Acerca de mí',
		navSkills: 'Mis Proyectos',
		navProject: '¿Ideas en mente?',
		navContact: 'Contáctame',
		aboutTitle: 'Acerca de mí',
		skillsTitle: 'Mis Proyectos',
		contactSubtitle: 'Contáctame',
		contactTitleBold: 'Hazlo',
		contactTitleRegular: 'en un click',
		btnDownload: 'Descargar CV',
		btnGo: '¡Vamos!',
		supportTitle: '¿Necesitas apoyo?',
		// PROYECTOS ACTUALIZADOS
		skillTitle1: 'React + Vite',
		skillDesc1:
			'Aplicación web desarrollada con React, Vite y Axios que consume la Rick and Morty API para mostrar personajes, ubicaciones y su estado.',
		skillTitle2: 'App Web',
		skillDesc2:
			'Aplicación web desarrollada con React y Vite que muestra frases motivacionales o reflexivas de manera aleatoria.',
		skillTitle3: 'React / JS / Axios',
		skillDesc3:
			'Aplicación del clima desarrollada con React y Vite, que permite consultar el estado del tiempo en diferentes ciudades en tiempo real.',
		skillTitle4: 'Sistema CRUD de Usuarios',
		skillDesc4:
			'Aplicación full-stack para gestión de usuarios con operaciones CRUD completas. Desarrollada con React 19, React Hook Form para validación, Zod para esquemas, y JSON Server como API REST.',
		contactLocation: 'Mi Ubicación',
		contactEmail: 'Envíame un correo',
		contactCall: '¡Conversemos!',
		contactWhatsApp: 'WhatsApp',
	},
	en: {
		description:
			"I'm a front-end developer passionate about programming, data analysis, and the humanities.",
		aboutDescription:
			"I'm a fullstack developer specialized in Front-end Development, social communicator, business administrator, and data science student. I'm passionate about creating dynamic and memorable communication experiences, focusing on UI, animations, and intuitive user experiences. I work with HTML, CSS, JavaScript, and ReactJS.",
		contact: 'Contact Me',
		project: 'Do you have a project in mind?',
		projectDesc:
			"Let's make it happen! Tell me your idea and which platform you want it developed on. I'll handle the rest.",
		navHome: 'Home',
		navAbout: 'About Me',
		navSkills: 'My Projects',
		navProject: 'Ideas?',
		navContact: 'Contact',
		aboutTitle: 'About Me',
		skillsTitle: 'My Projects',
		contactSubtitle: 'Contact Me',
		contactTitleBold: 'Do it',
		contactTitleRegular: 'in one click',
		btnDownload: 'Download CV',
		btnGo: "Let's go!",
		supportTitle: 'Need support?',
		// UPDATED PROJECTS
		skillTitle1: 'React + Vite',
		skillDesc1:
			'Web application developed with React, Vite and Axios that consumes the Rick and Morty API to display characters, locations and their status.',
		skillTitle2: 'Web App',
		skillDesc2:
			'Web application developed with React and Vite that displays motivational or reflective quotes randomly.',
		skillTitle3: 'React / JS / Axios',
		skillDesc3:
			'Weather application developed with React and Vite, allowing real-time weather queries for different cities.',
		skillTitle4: 'User CRUD System',
		skillDesc4:
			'Full-stack user management application with complete CRUD operations. Built with React 19, React Hook Form for validation, Zod for schemas, and JSON Server as REST API.',
		contactLocation: 'My Location',
		contactEmail: 'Send me an email',
		contactCall: "Let's talk!",
		contactWhatsApp: 'WhatsApp',
	},
};

// === Referencias a elementos HTML ===
const elements = {
	description: document.getElementById('typing-text'),
	aboutDescription: document.getElementById('about-description'),
	contactBtn: document.getElementById('contact-btn'),
	projectTitle: document.getElementById('project-title'),
	projectText: document.getElementById('project-desc'),
	navHome: document.getElementById('nav-home'),
	navAbout: document.getElementById('nav-about'),
	navSkills: document.getElementById('nav-skills'),
	navProject: document.getElementById('nav-project'),
	navContact: document.getElementById('nav-contact'),
	aboutTitle: document.getElementById('about-title'),
	skillsTitle: document.getElementById('skills-title'),
	contactSubtitle: document.getElementById('contact-subtitle'),
	btnDownload: document.getElementById('btn-download'),
	btnGo: document.getElementById('btn-go'),
	supportTitle: document.getElementById('support-title'),
	contactTitle: document.getElementById('contact-title'),
	skillTitle1: document.getElementById('skill-title-1'),
	skillDesc1: document.getElementById('skill-desc-1'),
	skillTitle2: document.getElementById('skill-title-2'),
	skillDesc2: document.getElementById('skill-desc-2'),
	skillTitle3: document.getElementById('skill-title-3'),
	skillDesc3: document.getElementById('skill-desc-3'),
	skillTitle4: document.getElementById('skill-title-4'),
	skillDesc4: document.getElementById('skill-desc-4'),
	contactLocation: document.getElementById('contact-location'),
	contactEmail: document.getElementById('contact-email'),
	contactCall: document.getElementById('contact-call'),
	contactWhatsApp: document.getElementById('contact-whatsapp'),
};

// === Variables para efecto de escritura ===
let text = '';
let index = 0;
function typeText() {
	if (index <= text.length) {
		elements.description.textContent = text.slice(0, index);
		index++;
		setTimeout(typeText, 50);
	} else {
		setTimeout(() => {
			index = 0;
			typeText();
		}, 2500);
	}
}

// === Función para cambiar idioma dinámicamente ===
function updateLanguage(lang) {
	text = texts[lang].description;
	index = 0;
	typeText();

	elements.aboutDescription.textContent = texts[lang].aboutDescription;
	elements.contactBtn.textContent = texts[lang].contact;
	elements.projectTitle.textContent = texts[lang].project;
	elements.projectText.textContent = texts[lang].projectDesc;
	elements.navHome.textContent = texts[lang].navHome;
	elements.navAbout.textContent = texts[lang].navAbout;
	elements.navSkills.textContent = texts[lang].navSkills;
	elements.navProject.textContent = texts[lang].navProject;
	elements.navContact.textContent = texts[lang].navContact;
	elements.aboutTitle.textContent = texts[lang].aboutTitle;
	elements.skillsTitle.textContent = texts[lang].skillsTitle;
	elements.contactSubtitle.textContent = texts[lang].contactSubtitle;
	elements.btnDownload.textContent = texts[lang].btnDownload;
	elements.btnGo.textContent = texts[lang].btnGo;
	elements.supportTitle.textContent = texts[lang].supportTitle;
	elements.contactTitle.querySelector('.bold').textContent =
		texts[lang].contactTitleBold;
	elements.contactTitle.querySelector('.regular').textContent =
		texts[lang].contactTitleRegular;

	// Tarjetas de habilidades/proyectos
	elements.skillTitle1.textContent = texts[lang].skillTitle1;
	elements.skillDesc1.textContent = texts[lang].skillDesc1;
	elements.skillTitle2.textContent = texts[lang].skillTitle2;
	elements.skillDesc2.textContent = texts[lang].skillDesc2;
	elements.skillTitle3.textContent = texts[lang].skillTitle3;
	elements.skillDesc3.textContent = texts[lang].skillDesc3;
	elements.skillTitle4.textContent = texts[lang].skillTitle4;
	elements.skillDesc4.textContent = texts[lang].skillDesc4;

	// Ítems de contacto
	elements.contactLocation.textContent = texts[lang].contactLocation;
	elements.contactEmail.textContent = texts[lang].contactEmail;
	elements.contactCall.textContent = texts[lang].contactCall;
	elements.contactWhatsApp.textContent = texts[lang].contactWhatsApp;
}

// — Carrusel "stack" para Acerca de mí —
(function () {
	const imgs = document.querySelectorAll('.about-carousel img');
	let idx = 0;
	imgs.forEach((img, i) => {
		img.style.opacity = i === 0 ? '1' : '0';
		img.style.position = 'absolute';
		img.style.top = '0';
		img.style.left = '0';
		img.style.transition = 'opacity 0.8s ease-in-out';
		img.style.zIndex = i === 0 ? '2' : '1';
	});
	setInterval(() => {
		imgs[idx].style.opacity = '0';
		imgs[idx].style.zIndex = '1';
		idx = (idx + 1) % imgs.length;
		imgs[idx].style.opacity = '1';
		imgs[idx].style.zIndex = '2';
	}, 3000);
})();

// — Toda la inicialización dentro de DOMContentLoaded —
document.addEventListener('DOMContentLoaded', () => {
	// 1) Texto en español al cargar
	updateLanguage('es');

	// 2) Listener del botón de contacto
	document.getElementById('contact-btn').addEventListener('click', () => {
		window.location.href = 'mailto:veliasr86@gmail.com';
	});

	// 3) Listeners de las banderas
	document.getElementById('lang-en').addEventListener('click', () => {
		updateLanguage('en');
	});
	document.getElementById('lang-es').addEventListener('click', () => {
		updateLanguage('es');
	});

	// 4) Toggle Sun/Moon y persistencia en localStorage
	const toggle = document.getElementById('toggle-dark');
	const body = document.body;
	if (localStorage.getItem('theme') === 'dark') {
		body.classList.add('dark-mode');
		toggle.checked = true;
	}
	toggle.addEventListener('change', () => {
		if (toggle.checked) {
			body.classList.add('dark-mode');
			localStorage.setItem('theme', 'dark');
		} else {
			body.classList.remove('dark-mode');
			localStorage.setItem('theme', 'light');
		}
	});
});
