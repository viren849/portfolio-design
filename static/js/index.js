let idx = 0;// to index the portfolios
let portfolios1 = ['Software', '', 'Software'];
let portfolios2 = ['Developer', 'Programmer', 'Engineer'];
let fonts = ['Fira Code', 'Playfair Display', 'Indie Flower', 'Kanit', 'Pacifico', 'Caveat', 'Satisfy', 'Ubuntu'];
let nav = document.getElementById('nav');
let navTop = nav.offsetTop;
// let age = (new Date(new Date() - new Date('06/30/1999')).getFullYear() - 1970) + ' years old';
let navHidden = true;
let audio = new Audio();
let song_idx = 0;
let songs = [
	{ 'src': './static/songs/alone.mp3', 'name': 'Alone', 'title': 'Marshmello - Alone' },
	{ 'src': './static/songs/summer.mp3', 'name': 'Summer', 'title': 'Marshmello - Summer' },
	{ 'src': './static/songs/Syn_Cole.mp3', 'name': 'Syn_Cole', 'title': 'Syn Cole - Feel Good' },
];
let imageUrl = "/static/images/collage/";
let images = ["github.jpg", "MCP.jpg", "github2.jpg", "teracloud.jpg"];
let image = new Image();
let n = 0;
let max_imgs = 3;

function hideNav() {
	document.getElementById('notification').classList.remove('hide');
	document.getElementById('nav').classList.add('hide');
	navHidden = false;
}

function showNav() {
	document.getElementById('notification').classList.add('hide');
	document.getElementById('nav').classList.remove('hide');
}

window.onscroll = function () {
	var currentScroll = window.pageYOffset;
	let padding = document.getElementsByClassName('padding')[0];
	let part1 = document.getElementsByClassName('part1')[0];

	if (currentScroll >= 20) {
		part1.style.width = '100vw';
		padding.style.marginLeft = '0';
	}
	else if (currentScroll == 0) {
		let active_nav = document.getElementsByClassName('active')[0]
		if (active_nav)
			active_nav.classList.remove('active');
		let active_main = document.getElementsByClassName('show')[0];
		if (active_main)
			active_main.classList.remove('show');
	}

	if (currentScroll > navTop) {
		nav.classList.add('fixed');
		main.style.paddingTop = '45px';
	}
	else {
		nav.classList.remove('fixed');
		main.style.paddingTop = '0px';
	}
}

function shuffle(idx) {
	var shuffleInterval = setInterval(() => {
		let randomIndex1 = Math.floor(Math.random() * portfolios1.length);

		let randomPortfolio1 = portfolios1[randomIndex1];
		let randomPortfolio2 = portfolios2[randomIndex1];

		let randomFont1 = fonts[Math.floor(Math.random() * fonts.length)];
		let randomFont2 = fonts[Math.floor(Math.random() * fonts.length)];

		let div = document.getElementById('title1');
		div.innerHTML = randomPortfolio1;
		div.style.fontFamily = randomFont1;

		div = document.getElementById('title2');
		div.innerHTML = randomPortfolio2;
		div.style.fontFamily = randomFont2;
	}, 100);

	setTimeout(() => {
		clearInterval(shuffleInterval);

		let div = document.getElementById('title1');
		div.innerHTML = portfolios1[idx];
		div.style.fontFamily = fonts[0];

		div = document.getElementById('title2');
		div.innerHTML = portfolios2[idx];
		div.style.fontFamily = fonts[0];
	}, 2000);
}

function active(nav, id) {
	active_nav = document.getElementsByClassName('active')[0];
	if (active_nav)
		active_nav.classList.remove('active');
	active_main = document.getElementsByClassName('show')[0];
	if (active_main)
		active_main.classList.remove('show');
	nav.classList.add('active');
	document.getElementById(id).classList.add('show');
}

function setUpText(text) {
	document.getElementById('song-text').innerHTML = text;
	document.getElementById('songList').style.maxWidth = "500px";
	setTimeout(() => { document.getElementById('songList').style.maxWidth = ""; }, 4000);
}

function setSong(idx) {
	song_idx = idx;
	audio.src = songs[idx].src;
	setUpText('Now Playing: ' + songs[idx].name);
	let current = document.getElementsByClassName('current')[0];
	if (current)
		current.classList.toggle('current');
	document.getElementById('song_' + idx).classList.add('current');
	document.getElementById('playButton').classList.remove('pause');
}

function play() {
	document.getElementById('playButton').classList.toggle('pause');
	if (!audio.paused)
		audio.pause();
	else
		audio.play();
}

audio.onended = function () {
	document.getElementById('playButton').classList.remove('pause');
	song_idx += 1;
	song_idx %= songs.length;
	setSong(song_idx);
	play();
}

function getTwoRandoms() {
	let random1 = Math.floor(Math.random() * n);
	let random2 = random1;
	while (random1 == random2)
		random2 = Math.floor(Math.random() * n);
	return [random1, random2];
}

function collageImageAbout() {
	let randomNum = getTwoRandoms();
	img1 = document.getElementById('about-collage-image1');
	img2 = document.getElementById('about-collage-image2');
	img1.classList.add('fade-out')
	img2.classList.add('fade-out')

	setTimeout(() => {
		img1.src = imageUrl + images[randomNum[0]];
		img2.src = imageUrl + images[randomNum[1]];
		img1.classList.remove('fade-out')
		img2.classList.remove('fade-out')
	}, 500);

}

function scrollDiv(direction) {
	let nav_mob = document.getElementsByClassName('navBar')[0];
	let scroll = nav_mob.children[0].offsetWidth;
	nav_mob.scrollLeft += (scroll * direction);
}


let projects = [

	{
		'title': 'Developer Coding Agent (MCP)',
		'subtitle': 'AI Agent | MCP | Semantic Code Search',
		'desp': 'A modular, project-aware AI coding agent that indexes entire codebases and enables semantic code search, contextual Q&A, and persistent memory. Exposed via the Model Context Protocol (MCP), allowing external AI tools (VS Code, Claude Desktop, Flowise) to query real project context without direct filesystem access. Supports both standalone CLI usage with multi-LLM orchestration and MCP-based context provisioning.',
		'icon': '',
		'technologies': ['python', 'fastapi', 'github'],
		'github': 'https://github.com/viren849/Coding-agent',
		'deploy': ''
	},

	{
		title: 'Network-Centric Real-Time Market Data Server',
		subtitle: 'distributed-systems | Protobuf | low-latency',
		desp: 'A high-performance, network-centric market data ingestion platform designed to simulate real-world trading infrastructure. The system ingests raw TCP tick streams in C++, applies canonical data modeling using Protocol Buffers, enforces validation and normalization, and forwards data internally via long-lived gRPC streaming to downstream services. Built with strict separation between transport, serialization, and business logic, the platform measures serialization latency, handles malformed data safely, and enables cross-language service communication (C++ → Java) for aggregation and analytics.',
		icon: '',
		technologies: ['cpp', 'java', 'jenkins' ,'networking', 'github'],
		github: 'https://github.com/viren849/market-data-server',
		deploy: ''
	}

	,
	{
		'title': 'File Vault',
		'subtitle': 'Full Stack | React | Django | Docker',
		'desp': 'A production-ready, full-stack file management system focused on security, storage efficiency, and performance. Implements content-based file deduplication using hashing, supports large file uploads with chunked processing, provides real-time storage analytics, and features a premium dark/light UI. Fully containerized with Docker and deployed with a scalable frontend-backend architecture.',
		'icon': '',
		'technologies': ['react', 'typescript', 'django', 'docker', 'postgresql', 'github'],
		'github': 'https://github.com/viren849/file-vault',
		'deploy': 'https://file-vault-sandy.vercel.app/'
	}
	, {
		'title': 'Visual LLM Pipeline Builder',
		'subtitle': 'React Flow | FastAPI | Pydantic',
		'desp': 'A visual, node-based pipeline editor for designing and validating LLM workflows. Supports drag-and-drop nodes, dynamic variable parsing with auto-generated connection handles, and backend DAG validation using Kahn’s Algorithm.',
		'icon': '',
		'technologies': ['react', 'js', 'python', 'fastapi', 'github'],
		'github': 'https://github.com/viren849/LLM-Pipeline-Builder',
		'deploy': 'https://llm-pipeline-builder.vercel.app/'
	}, {
		'title': 'Decentralised Chat App',
		'subtitle': 'Blockchain | Solidity | Ethereum',
		'desp': 'A decentralized chat application implemented with Ethereum smart contracts, enabling secure peer-to-peer communication without centralized servers. The messaging logic is executed on-chain with Solidity contracts, streamlining trustless interactions across users while leveraging the immutability of blockchain',
		'icon': '',
		'technologies': ['blockchain', 'solidity', 'ethereum', 'github'],
		'github': 'https://github.com/viren849/Projects/tree/main/BlockChain/Chatapp',
		'deploy': ''
	}, {
		'title': 'Decentralised Todo List',
		'subtitle': 'Ethereum | Smart Contracts | Web3',
		'desp': 'A decentralized task management application built on the Ethereum blockchain using Solidity smart contracts. Unlike traditional to-do lists, this app persists and manages tasks on a distributed ledger, demonstrating smart contract integration and decentralized state storage',
		'icon': '',
		'technologies': ['blockchain', 'solidity', 'ethereum', 'github'],
		'github': 'https://github.com/viren849/Projects/tree/main/BlockChain/eth-todo-list-master',
		'deploy': ''
	}, {
		'title': 'Decentralised Food App',
		'subtitle': 'Blockchain | Decentralized Application',
		'desp': 'A decentralized application (DApp) designed for food services, facilitating interactions between users and food data via smart contracts. The system removes reliance on central servers, ensuring transparent and tamper-resistant record keeping through blockchain logic',
		'icon': '',
		'technologies': ['blockchain', 'solidity', 'github'],
		'github': 'https://github.com/viren849/Projects/tree/main/BlockChain/FOOD_CHAIN',
		'deploy': ''
	}, {
		'title': 'Random Password Generator',
		'subtitle': 'C++ | Security Tool',
		'desp': 'A C++ utility for generating strong, unpredictable passwords using randomized algorithms. This tool emphasizes secure credential creation with customizable length and character sets, suitable for applications requiring enhanced password strength',
		'icon': '',
		'technologies': ['cpp', 'github'],
		'github': 'https://github.com/viren849/Projects/tree/main/Random-Password-Generator',
		'deploy': ''
	}, {
		'title': 'Visual Cryptography',
		'subtitle': 'C++ | Cryptography',
		'desp': 'An image and video encryption/decryption system implemented in C++ using the AES algorithm. The project demonstrates low-level cryptographic processing, secure data transformation, and application of industry-standard encryption for multimedia content.',
		'icon': '',
		'technologies': ['cpp', 'github'],
		'github': 'https://github.com/viren849/Projects/tree/main/VISUAL%20Cryptography',
		'deploy': ''
	}, {
		'title': 'Tic Tac Toe AI',
		'subtitle': 'Web | Game AI',
		'desp': 'A modern, responsive Tic Tac Toe game featuring 2-player mode and AI opponents with Easy, Medium, and Hard difficulties. The Hard mode uses an optimized Minimax algorithm with alpha-beta pruning to provide an unbeatable AI. Built with a polished UI, smooth animations, and deployed live on GitHub Pages.',
		'icon': '',
		'technologies': ['html', 'css', 'js', 'github'],
		'github': '',
		'deploy': 'https://viren849.github.io/tic-tac-toe-ai/'
	}, {
		'title': 'Scientific Calculator',
		'subtitle': 'Web | JavaScript',
		'desp': 'A fully functional scientific calculator built using HTML, CSS, and JavaScript, featuring advanced mathematical operations and deployed live on GitHub Pages.',
		'icon': '',
		'technologies': ['html', 'css', 'js', 'github'],
		'github': '',
		'deploy': 'https://viren849.github.io/scientific-calculator/'
	}
];

function getProjects(skill) {
	let projectContainer = document.getElementById('project-cards');
	projectContainer.innerHTML = '';
	let result = projects.filter(project => project['technologies'].includes(skill));
	result.sort(function (a, b) {
		let keyA = a.desp.length + a.title.length;
		let keyB = b.desp.length + b.title.length;
		if (keyA < keyB) return -1;
		if (keyA > keyB) return 1;
		return 0;
	});
	let row = document.createElement('div');
	row.classList.add('project-row');

	for (let i = 0; i < result.length; i++) {
		row.innerHTML += getProjectCard(result[i]);
	}

	projectContainer.appendChild(row);
}

function getProjectCard(project) {
	let head = `<div class="project-content"><p class="card-text card-title">${project.title}</p>`;
	let sub_head = `<p class="card-text card-subtitle">${project.subtitle}</p>`;
	let description = `<p class="card-text">${project.desp}</p>`;
	let technologies = `<p class="project-skill-container">${getTechnologies(project.technologies)}</p>`;
	let overlay = `<div class="overlay fade">`;
	let source = `<a class="source" href ="${project.github}" target = "_blank"><img src="/static/images/projects/github.svg" class="github">Source</a>`;
	let deploy = `<a class="source" href ="${project.deploy}" target = "_blank"><img src="/static/images/projects/deploy.svg" class="github">Deploy</a>`;
	let foot = `</div></div>`;
	if (project.deploy != '')
		foot = deploy + foot;
	if (project.github != '')
		foot = source + foot;
	return head + sub_head + technologies + description + overlay + foot;
}

function getTechnologies(technologies) {
	let technology = ``;
	for (tech of technologies) {
		if (tech === 'linux') {
			technology += `<i class="devicon-linux-plain colored project-skill" style="font-size: 30px; display: inline-block; color: #FCC624;"></i>`;
		} else if (tech === 'html') {
			technology += `<i class="devicon-html5-plain colored project-skill" style="font-size: 30px; display: inline-block;"></i>`;
		} else {
			technology += `<img src="/static/images/projects/${tech}.svg" class="project-skill">`;
		}
	}
	return technology;
}

function scrollToView(id) {
	let elmnt = document.getElementById(id);
	elmnt.scrollIntoView();
}

window.onload = function () {
	setTimeout(() => {
		document.getElementById('load_circle').classList.remove('hide');
		document.getElementById('load_gif').classList.add('hide');
		document.getElementById('load_circle').classList.add('zoomToFill');
		if (window.screen.width < 720) {
			hideNav();
		}
	}, 500);
	setTimeout(() => {
		document.getElementsByTagName('body')[0].classList.remove('prebody');
		document.getElementsByClassName('body')[0].classList.add('fade');
		document.getElementsByClassName('init')[0].classList.add('hide');
		//document.getElementById('age').innerText = age;
		collageImageAbout();
		setInterval(() => { collageImageAbout(); }, 6000);
		shuffle(idx);
		setInterval(() => {
			idx += 1;
			idx %= portfolios1.length;
			shuffle(idx);
		}, 5000);
		getProjects('github');

		setTimeout(() => { setUpText("Click to Play"); }, 2000);
		setTimeout(() => { document.getElementById('song-text').innerHTML = "Now Playing: " + songs[song_idx].name; }, 5000);
		for (let i = 0; i < songs.length; i++) {
			let playlistEntry =
				`<div class="row">
				<p onclick="setSong(${i}); play();">${songs[i].title}</p>
				<div class="pointer">
					<div class="other" id="song_${i}"></div>
				</div>
			</div>`;
			document.getElementById('player').innerHTML = document.getElementById('player').innerHTML + playlistEntry;
		}
		max_imgs = images.length;
		preloadCollageImages(3);
		setSong(song_idx);
	}, 1000);
}

//preloading images - images optimised using http://jpeg-optimizer.com/ - settings: compression-level: 70, image-size: 1024px.
function preloadCollageImages(i) {
	if (i < max_imgs) {
		image.src = imageUrl + images[i]
		image.onload = () => {
			n = i + 1;
			return preloadCollageImages(i + 1);
		}
	} else
		return;
}

preloadCollageImages(0);

// Custom Cursor Logic
const cursor = document.querySelector('.cursor');
const cursorDot = document.querySelector('.cursor-dot');

document.addEventListener('mousemove', (e) => {
	const posX = e.clientX;
	const posY = e.clientY;

	// Update cursor dot immediately for snappy feel
	cursorDot.style.left = `${posX}px`;
	cursorDot.style.top = `${posY}px`;

	// Animate main cursor with slight delay
	cursor.animate({
		left: `${posX}px`,
		top: `${posY}px`
	}, { duration: 500, fill: "forwards" });
});

// Expand cursor on interactive elements
const interactables = 'a, .btn, .hex-cell, .contact-card, .list p, .project-content';
document.querySelectorAll(interactables).forEach(el => {
	el.addEventListener('mouseenter', () => cursor.classList.add('expand'));
	el.addEventListener('mouseleave', () => cursor.classList.remove('expand'));
});

// Theme Logic
function toggleTheme() {
	document.body.classList.toggle('light-theme');
	const isLight = document.body.classList.contains('light-theme');
	localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

// Initialize theme
if (localStorage.getItem('theme') === 'light') {
	document.body.classList.add('light-theme');
}

// Terminal Command Logic
const terminalInput = document.getElementById('terminal-input');
const terminalOutput = document.getElementById('terminal-output');
const terminalBody = document.getElementById('terminal-body');

if (terminalInput) {
	terminalInput.addEventListener('keydown', (e) => {
		if (e.key === 'Enter') {
			const command = terminalInput.value.trim().toLowerCase();
			processCommand(command);
			terminalInput.value = '';
		}
	});

	// Auto-focus input on terminal click
	terminalBody.addEventListener('click', () => terminalInput.focus());
}

function processCommand(cmd) {
	if (!cmd) return;

	// Echo command
	const echo = document.createElement('div');
	echo.innerHTML = `<span class="terminal-prompt">viren@portfolio:~$</span> ${cmd}`;
	terminalOutput.appendChild(echo);

	const response = document.createElement('div');
	response.style.marginBottom = "10px";

	switch (cmd) {
		case 'help':
			response.innerHTML = `Available commands: <br>
                - <span style="color: var(--accent-color)">projects</span>: List all portfolio projects<br>
                - <span style="color: var(--accent-color)">whoami</span>: About me<br>
                - <span style="color: var(--accent-color)">socials</span>: Social links<br>
                - <span style="color: var(--accent-color)">clear</span>: Clear terminal<br>
                - <span style="color: var(--accent-color)">theme</span>: Toggle Light/Dark mode`;
			break;
		case 'projects':
			let pList = projects.map(p => `- ${p.title} (${p.subtitle})`).join('<br>');
			response.innerHTML = `My Projects:<br>${pList}`;
			break;
		case 'whoami':
			response.innerHTML = `I'm Virender Kumar, a Software Engineer passionate about automation, DevOps, and clean code. I love building things that scale.`;
			break;
		case 'socials':
			response.innerHTML = `GitHub: <a href="https://github.com/viren849" target="_blank" style="color: var(--accent-color)">viren849</a><br>
                LinkedIn: <a href="https://linkedin.com/in/kumar-viren" target="_blank" style="color: var(--accent-color)">kumar-viren</a>`;
			break;
		case 'clear':
			terminalOutput.innerHTML = '';
			return;
		case 'theme':
			toggleTheme();
			response.innerHTML = `Theme toggled!`;
			break;
		default:
			response.innerHTML = `Command not found: ${cmd}. Type 'help' for assistance.`;
	}

	terminalOutput.appendChild(response);
	terminalBody.scrollTop = terminalBody.scrollHeight;
}
