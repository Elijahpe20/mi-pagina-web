// === Diccionario de textos por idioma ===
const texts = {
	es: {
		description:
			'Soy un Front-end developer y me apasiona la programación, el análisis de datos y las humanidades.',
		aboutDescription:
			'Soy un desarrollador fullstack, con especialidad en Front-end Developer, comunicador social, administrador de empresas y estudiante de ciencia de datos. Me apasiona generar experiencias de comunicación dinámicas y memorables por lo que estoy enfocado en trabajar en efectos en la interfaz de usuario (UI), animaciones y creación de experiencias de usuario intuitivas y dinámicas. Asimismo, estoy dedicado al diseño web responsivo. Tengo experiencia con HTML, CSS, JavaScript y ReactJS.',
		contact: 'Contáctame',
		project: '¿Tienes un proyecto en mente?',
		projectDesc:
			'¡Hagámoslo realidad! Cuéntame tu idea y en qué plataforma quieres desarrollarla. Yo me encargo del resto.',
		navHome: 'Home',
		navAbout: 'Acerca de mí',
		navSkills: 'Mis habilidades',
		navProject: '¿Ideas en mente?',
		navContact: 'Contáctame',
		aboutTitle: 'Acerca de mí',
		skillsTitle: 'Mis habilidades',
		contactSubtitle: 'Contáctame',
		contactTitleBold: 'Hazlo',
		contactTitleRegular: 'en un click',
		btnDownload: 'Descargar CV',
		btnGo: '¡Vamos!',
		supportTitle: '¿Necesitas apoyo?',
		skillTitle1: 'UX/UI Design',
		skillDesc1:
			'Estuve a cargo de la planificación y el desarrollo de una estructura y contenidos web con mucha acogida de usuarios.',
		skillTitle2: 'Product Designer',
		skillDesc2:
			'Lideré el rediseño de una plataforma de e-learning, desde la investigación hasta el prototipo final.',
		skillTitle3: 'Web Design',
		skillDesc3:
			'Diseñé sitios responsivos con HTML, CSS y GitHub destacando en una buena usabilidad y diseño visual coherente con los usuarios.',
		contactLocation: 'Mi Ubicación',
		contactEmail: 'Envíame un correo',
		contactCall: '¡Conversemos!',
		contactWhatsApp: 'WhatsApp',
	},
	en: {
		description:
			"I'm a front-end developer passionate about programming, data analysis, and the humanities.",
		aboutDescription:
			"I'm a fullstack developer specialized in Front-end Development, a social communicator, business administrator, and data science student. I’m passionate about creating dynamic and memorable communication experiences, focused on UI effects, animations, and intuitive user experiences. I also specialize in responsive web design, with experience in HTML, CSS, JavaScript, and ReactJS.",
		contact: 'Contact Me',
		project: 'Do you have a project in mind?',
		projectDesc:
			"Let's make it happen! Tell me your idea and which platform you want it developed on. I'll handle the rest.",
		navHome: 'Home',
		navAbout: 'About Me',
		navSkills: 'My Skills',
		navProject: 'Ideas?',
		navContact: 'Contact',
		aboutTitle: 'About Me',
		skillsTitle: 'My Skills',
		contactSubtitle: 'Contact Me',
		contactTitleBold: 'Do it',
		contactTitleRegular: 'in one click',
		btnDownload: 'Download CV',
		btnGo: "Let's go!",
		supportTitle: 'Need support?',
		skillTitle1: 'UX/UI Design',
		skillDesc1:
			'I was in charge of planning and developing a web structure and content that was well received by users.',
		skillTitle2: 'Product Designer',
		skillDesc2:
			'I led the redesign of an e-learning platform, from research to the final prototype.',
		skillTitle3: 'Web Design',
		skillDesc3:
			'I designed responsive websites using HTML, CSS and GitHub, focused on strong usability and coherent visual design.',
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

	// Tarjetas de habilidades
	elements.skillTitle1.textContent = texts[lang].skillTitle1;
	elements.skillDesc1.textContent = texts[lang].skillDesc1;
	elements.skillTitle2.textContent = texts[lang].skillTitle2;
	elements.skillDesc2.textContent = texts[lang].skillDesc2;
	elements.skillTitle3.textContent = texts[lang].skillTitle3;
	elements.skillDesc3.textContent = texts[lang].skillDesc3;

	// Ítems de contacto
	elements.contactLocation.textContent = texts[lang].contactLocation;
	elements.contactEmail.textContent = texts[lang].contactEmail;
	elements.contactCall.textContent = texts[lang].contactCall;
	elements.contactWhatsApp.textContent = texts[lang].contactWhatsApp;
}

// — Carrusel “stack” para Acerca de mí —
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
		window.location.href = 'mailto:example@correo.com';
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
