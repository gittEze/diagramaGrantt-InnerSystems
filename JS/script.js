const CONFIG = {
	startDate: "2026-07-13",
	endDate: "2026-10-31"
};

const initialTasks = [
	{
		name: "Creación del repositorio de Github",		//LISTO
		start: "2026-07-13",
		deadline: "2026-07-20",
		finish: "2026-07-13",
		status: "completed", // pending o progress
		responsible: "Ezequiel Albornoz"
	},
	{
		name: "Creación de la página de cursos",		//LISTO
		start: "2026-08-15",
		deadline: "2026-08-22",
		finish: "2026-08-22",
		status: "completed",
		responsible: "Thiago García"
	},
	{
		name: "Reglamento de Trabajo (Documentación)",		//LISTO
		start: "2026-08-10",
		deadline: "2026-08-17",
		finish: "2026-08-13",
		status: "completed",
		responsible: "Ezequiel Albornoz, Thiago García, Lucas Silva"
	},
	{
		name: "Resumen (Documentación)",		//LISTO
		start: "2026-08-10",
		deadline: "2026-08-17",
		finish: "2026-08-12",
		status: "completed",
		responsible: "Ezequiel Albornoz, Lucas Silva"
	},
	{
		name: "Abstract (Documentación)",		//LISTO
		start: "2026-08-10",
		deadline: "2026-08-17",
		finish: "2026-08-11",
		status: "completed",
		responsible: "Ezequiel Albornoz, Lucas Silva"
	},
	{
		name: "Creación de un footer general para la página",	//LISTO
		start: "2026-08-12",
		deadline: "2026-08-19",
		finish: "2026-08-18",
		status: "completed",
		responsible: "Ezequiel Albornoz, Thiago García"
	},
	{
		name: "Añadir apartado de copyright para la página",	//LISTO
		start: "2026-08-16",
		deadline: "2026-08-20",
		finish: "2026-08-16",
		status: "completed",
		responsible: "Ezequiel Albornoz"
	},
	{
		name: "Añadir los contactos de la empresa al footer", 		//LISTO
		start: "2026-08-15",
		deadline: "2026-08-20",
		finish: "2026-08-16",
		status: "completed",
		responsible: "Ezequiel Albornoz, Thiago García"
	},
	{
		name: "Metodología: selección y justificación (Documentación)",		//LISTO
		start: "2026-08-12",
		deadline: "2026-08-19",
		finish: "2026-08-15",
		status: "completed",
		responsible: "Thiago García"
	},
	{
		name: "Creación del servidor de Discord",		//LISTO
		start: "2026-07-21",
		deadline: "2026-07-29",
		finish: "2026-07-23",
		status: "completed",
		responsible: "Lucas Silva"
	},
	{
		name: "Creación del servidor de Slack",		//LISTO
		start: "2026-07-21",
		deadline: "2026-07-29",
		finish: "2026-07-21",
		status: "completed",
		responsible: "Ezequiel Albornoz"
	},
	{
		name: "Creación del Mockup",		//LISTO
		start: "2026-07-23",
		deadline: "2026-07-30",
		finish: "2026-07-31",
		status: "completed",
		responsible: "Ezequiel Albornoz"
	}
	,{
		name: "Crear un buscador de cursos", 		//LISTO
		start: "2026-08-05",
		deadline: "2026-08-12",
		finish: "2026-08-09",
		status: "completed",
		responsible: "Ezequiel Albornoz"
	}
	,{
		name: "Agregar favicon a la página", 		//LISTO
		start: "2026-07-16",
		deadline: "2026-07-23",
		finish: "2026-07-17",
		status: "completed",
		responsible: "Ezequiel Albornoz"
	}
	,{
		name: "Crear tablas para los cursos en el apartado de cursos.php", 		//LISTO
		start: "2026-08-20",
		deadline: "2026-08-27",
		finish: "2026-08-22",
		status: "completed",
		responsible: "Ezequiel Albornoz"
	}
	,{
		name: "Implementar los contactos de la empresa en el footer", 		//LISTO
		start: "2026-08-20",
		deadline: "2026-08-27",
		finish: "2026-08-25",
		status: "completed",
		responsible: "Thiago García"
	}
	,{
		name: "Implementar método COCOMO (Documentación)", 		//LISTO
		start: "2026-08-10",
		deadline: "2026-08-17",
		finish: "2026-08-25",
		status: "completed",
		responsible: "Ezequiel Albornoz, Thiago García, Lucas Silva"
	}
	,{
		name: "Programación para funcionalidad de inicio de sesión", 		//LISTO
		start: "2026-08-22",
		deadline: "2026-08-29",
		finish: "2026-08-28",
		status: "completed",
		responsible: "Thiago García"
	}
	,{
		name: "Programación para funcionalidad de registro", 		//LISTO
		start: "2026-08-22",
		deadline: "2026-08-29",
		finish: "2026-09-01",
		status: "completed",
		responsible: "Thiago García"
	}
	,{
		name: "Creación del login y register", 		//LISTO
		start: "2026-07-27",
		deadline: "2026-08-04",
		finish: "2026-08-07",
		status: "completed",
		responsible: "Ezequiel Albornoz, Thiago García, Lucas Silva"
	}
	,{
		name: "Creación del inicio de la página", 		//LISTO
		start: "2026-07-20",
		deadline: "2026-07-27",
		finish: "2026-07-22",
		status: "completed",
		responsible: "Ezequiel Albornoz, Thiago García, Lucas Silva"
	}
	,{
		name: "Validar coherencia y tipo de dato en los formularios de inicio de sesión y de registrarse para colocar el dato correcto", 		//LISTO
		start: "2026-09-25",
		deadline: "2026-09-31",
		finish: null,
		status: "pending",
		responsible: "Ezequiel Albornoz, Thiago García, Lucas Silva"
	}
];

let tasks = initialTasks.map(task => ({
	id: generateId(),
	...task
}));

let selectedId = null;

const startDate = parseDate(CONFIG.startDate);
const endDate = parseDate(CONFIG.endDate);

function $(id) {
	return document.getElementById(id);
}

function parseDate(value) {
	if (!value) return null;

	const parts = value.split("-").map(Number);

	return new Date(parts[0], parts[1] - 1, parts[2]);
}

function addDays(date, amount) {
	const result = new Date(date);
	result.setDate(result.getDate() + amount);
	return result;
}

function daysBetween(first, second) {
	return Math.round((second - first) / 86400000);
}

function formatDate(value) {
	if (!value) return "—";

	return parseDate(value).toLocaleDateString("es-UY", {
		day: "2-digit",
		month: "2-digit",
		year: "numeric"
	});
}

function generateId() {
	return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

function getDays() {
	const days = [];
	let current = new Date(startDate);

	while (current <= endDate) {
		days.push(new Date(current));
		current = addDays(current, 1);
	}

	return days;
}

function getStatus(task) {
	if (task.finish) {
		return parseDate(task.finish) > parseDate(task.deadline)
			? "delayed"
			: "completed";
	}

	return task.status || "pending";
}

function getStatusText(status) {
	const labels = {
		pending: "Pendiente",
		progress: "En progreso",
		completed: "Completada",
		delayed: "Finalizada con retraso"
	};

	return labels[status] || "Pendiente";
}

function getProgress(task) {
	if (task.finish) return 100;

	if (task.status === "completed") return 100;

	if (task.status === "pending") return 0;

	const start = parseDate(task.start);
	const deadline = parseDate(task.deadline);

	const today = new Date();
	today.setHours(0, 0, 0, 0);

	if (today <= start) return 0;

	if (today >= deadline) return 100;

	const total = Math.max(1, daysBetween(start, deadline));
	const elapsed = daysBetween(start, today);

	return Math.min(100, Math.max(0, Math.round(elapsed / total * 100)));
}

function createCalendar() {
	const header = $("calendarHeader");

	header.innerHTML = "";

	const days = getDays();
	const months = {};

	days.forEach(day => {
		const key = `${day.getFullYear()}-${day.getMonth()}`;

		if (!months[key]) {
			months[key] = [];
		}

		months[key].push(day);
	});

	Object.values(months).forEach(monthDays => {
		const group = document.createElement("div");
		group.className = "monthGroup";

		const title = document.createElement("div");
		title.className = "monthName";
		title.textContent = monthDays[0].toLocaleDateString("es-UY", {
			month: "long"
		});

		const daysContainer = document.createElement("div");
		daysContainer.className = "days";

		monthDays.forEach(day => {
			const element = document.createElement("div");
			element.className = "dayHeader";

			if (day.getDay() === 0 || day.getDay() === 6) {
				element.classList.add("weekend");
			}

			const number = document.createElement("span");
			number.className = "dayNumber";
			number.textContent = day.getDate();

			const name = document.createElement("span");
			name.className = "dayName";
			name.textContent = day.toLocaleDateString("es-UY", {
				weekday: "short"
			}).replace(".", "");

			element.append(number, name);
			daysContainer.appendChild(element);
		});

		group.append(title, daysContainer);
		header.appendChild(group);
	});
}

function render() {
	createCalendar();
	renderTasks();
	updateSummary();
}

function renderTasks() {
	const body = $("ganttBody");
	const empty = $("emptyState");

	body.innerHTML = "";

	if (!tasks.length) {
		empty.classList.add("visible");
		return;
	}

	empty.classList.remove("visible");

	[...tasks]
		.sort((a, b) => parseDate(a.start) - parseDate(b.start))
		.forEach(task => {
			body.appendChild(createTaskRow(task));
		});
}

function createTaskRow(task) {
	const row = document.createElement("div");
	row.className = "ganttRow";

	const info = document.createElement("div");
	info.className = "taskInfo";

	info.addEventListener("click", () => openDetails(task.id));

	const dot = document.createElement("span");
	dot.className = `taskStatusDot ${getStatus(task)}`;

	const text = document.createElement("div");
	text.className = "taskText";

	const name = document.createElement("div");
	name.className = "taskName";
	name.textContent = task.name;

	const meta = document.createElement("div");
	meta.className = "taskMeta";
	meta.textContent = `${formatDate(task.start)} — ${formatDate(task.deadline)}`;

	text.append(name, meta);
	info.append(dot, text);

	row.append(info, createTimeline(task));

	return row;
}

function createTimeline(task) {
	const timeline = document.createElement("div");
	timeline.className = "timeline";

	getDays().forEach(day => {
		const cell = document.createElement("div");
		cell.className = "timelineDay";

		if (day.getDay() === 0 || day.getDay() === 6) {
			cell.classList.add("weekend");
		}

		timeline.appendChild(cell);
	});

	const taskStart = parseDate(task.start);
	const deadline = parseDate(task.deadline);
	const realFinish = task.finish ? parseDate(task.finish) : null;

	const taskEnd = realFinish && realFinish > deadline
		? realFinish
		: deadline;

	if (taskEnd < startDate || taskStart > endDate) {
		addTodayMarker(timeline);
		return timeline;
	}

	const visibleStart = taskStart < startDate ? startDate : taskStart;
	const visibleEnd = taskEnd > endDate ? endDate : taskEnd;

	const leftDays = daysBetween(startDate, visibleStart);
	const totalDays = daysBetween(visibleStart, visibleEnd) + 1;

	const bar = document.createElement("div");
	bar.className = `taskBar ${getStatus(task)}`;

	bar.style.left = `${leftDays * 42}px`;
	bar.style.width = `${Math.max(12, totalDays * 42 - 4)}px`;

	const progress = document.createElement("div");
	progress.className = "taskBarProgress";
	progress.style.width = `${getVisualFill(task)}%`;

	const content = document.createElement("div");
	content.className = "taskBarContent";
	content.textContent = task.name;

	bar.append(progress, content);

	bar.addEventListener("click", event => {
		event.stopPropagation();
		openDetails(task.id);
	});

	timeline.appendChild(bar);

	addTodayMarker(timeline);

	return timeline;
}

function getVisualFill(task) {
	const taskStart = parseDate(task.start);
	const deadline = parseDate(task.deadline);
	const finish = task.finish ? parseDate(task.finish) : null;

	const totalEnd = finish && finish > deadline
		? finish
		: deadline;

	const totalDays = daysBetween(taskStart, totalEnd) + 1;

	if (finish) {
		const completedDays = daysBetween(taskStart, finish) + 1;

		return Math.min(100, Math.max(0, completedDays / totalDays * 100));
	}

	if (task.status === "completed") {
		return Math.min(
			100,
			(daysBetween(taskStart, deadline) + 1) / totalDays * 100
		);
	}

	if (task.status === "pending") {
		return 0;
	}

	const today = new Date();
	today.setHours(0, 0, 0, 0);

	if (today <= taskStart) {
		return 0;
	}

	if (today >= deadline) {
		return Math.min(
			100,
			(daysBetween(taskStart, deadline) + 1) / totalDays * 100
		);
	}

	const elapsedDays = daysBetween(taskStart, today) + 1;

	return Math.min(
		100,
		Math.max(0, elapsedDays / totalDays * 100)
	);
}

function addTodayMarker(timeline) {
	const today = new Date();

	today.setHours(0, 0, 0, 0);

	if (today < startDate || today > endDate) {
		return;
	}

	const position = daysBetween(startDate, today);

	const marker = document.createElement("div");
	marker.className = "todayMarker";
	marker.style.left = `${position * 42 + 20}px`;

	timeline.appendChild(marker);
}

function updateSummary() {
	$("totalTasks").textContent = tasks.length;
	$("pendingTasks").textContent = tasks.filter(task => getStatus(task) === "pending").length;
	$("progressTasks").textContent = tasks.filter(task => getStatus(task) === "progress").length;
	$("completedTasks").textContent = tasks.filter(task => getStatus(task) === "completed").length;
	$("lateTasks").textContent = tasks.filter(task => getStatus(task) === "delayed").length;
}

function openDetails(id) {
	const task = tasks.find(item => item.id === id);

	if (!task) {
		return;
	}

	selectedId = id;

	const status = getStatus(task);
	const progress = getProgress(task);

	$("detailsTitle").textContent = task.name;
	$("detailsStatus").textContent = getStatusText(status);
	$("detailsProgressValue").textContent = `${progress}%`;
	$("detailsProgressBar").style.width = `${progress}%`;
	$("detailsStart").textContent = formatDate(task.start);
	$("detailsDeadline").textContent = formatDate(task.deadline);
	$("detailsFinish").textContent = formatDate(task.finish);
	$("detailsResponsible").textContent = task.responsible || "Sin asignar";

	$("detailsModal").classList.add("active");
}

function closeDetails() {
	$("detailsModal").classList.remove("active");
	selectedId = null;
}

function showToast(message) {
	$("toastMessage").textContent = message;
	$("toast").classList.add("active");

	clearTimeout(showToast.timer);

	showToast.timer = setTimeout(() => {
		$("toast").classList.remove("active");
	}, 2500);
}

function exportCSV() {
	const headers = [
		"Actividad",
		"Inicio",
		"Fecha límite",
		"Finalización",
		"Estado",
		"Progreso",
		"Responsable"
	];

	const rows = tasks.map(task => [
		task.name,
		task.start,
		task.deadline,
		task.finish || "",
		getStatusText(getStatus(task)),
		`${getProgress(task)}%`,
		task.responsible || ""
	]);

	const csv = [headers, ...rows]
		.map(row =>
			row.map(value =>
				`"${String(value).replace(/"/g, '""')}"`
			).join(",")
		)
		.join("\n");

	const blob = new Blob(["\ufeff" + csv], {
		type: "text/csv;charset=utf-8"
	});

	download(blob, "inner-systems-gantt.csv");

	showToast("CSV exportado");
}

function prepareExport(element) {
	const original = {
		width: element.style.width,
		maxWidth: element.style.maxWidth,
		overflow: element.style.overflow,
		height: element.style.height,
		maxHeight: element.style.maxHeight
	};

	element.style.width = `${element.scrollWidth}px`;
	element.style.maxWidth = "none";
	element.style.overflow = "visible";
	element.style.height = "auto";
	element.style.maxHeight = "none";

	return original;
}

function restoreExport(element, original) {
	element.style.width = original.width;
	element.style.maxWidth = original.maxWidth;
	element.style.overflow = original.overflow;
	element.style.height = original.height;
	element.style.maxHeight = original.maxHeight;
}

async function createExportCanvas() {
	const element = $("ganttExport");

	const original = prepareExport(element);

	await new Promise(resolve => {
		requestAnimationFrame(() => {
			requestAnimationFrame(resolve);
		});
	});

	const width = element.scrollWidth;
	const height = element.scrollHeight;

	const canvas = await html2canvas(element, {
		backgroundColor: "#ffffff",
		scale: 2,
		width,
		height,
		windowWidth: width,
		windowHeight: height,
		useCORS: true,
		scrollX: 0,
		scrollY: 0
	});

	restoreExport(element, original);

	return canvas;
}

async function exportPNG() {
	if (typeof html2canvas === "undefined") {
		showToast("No se pudo cargar el exportador PNG");
		return;
	}

	try {
		showToast("Generando PNG...");

		const canvas = await createExportCanvas();

		canvas.toBlob(blob => {
			if (blob) {
				download(blob, "inner-systems-gantt-completo.png");
				showToast("PNG completo exportado");
			}
		}, "image/png");
	} catch {
		showToast("No se pudo generar el PNG");
	}
}

async function exportPDF() {
	if (typeof html2canvas === "undefined" || typeof jspdf === "undefined") {
		showToast("No se pudo cargar el exportador PDF");
		return;
	}

	try {
		showToast("Generando PDF...");

		const canvas = await createExportCanvas();

		const image = canvas.toDataURL("image/png");
		const { jsPDF } = jspdf;

		const pdf = new jsPDF({
			orientation: "landscape",
			unit: "mm",
			format: "a4"
		});

		const pageWidth = pdf.internal.pageSize.getWidth();
		const pageHeight = pdf.internal.pageSize.getHeight();

		const margin = 8;
		const availableWidth = pageWidth - margin * 2;
		const availableHeight = pageHeight - margin * 2;

		const ratio = canvas.width / canvas.height;

		let width = availableWidth;
		let height = width / ratio;

		if (height > availableHeight) {
			height = availableHeight;
			width = height * ratio;
		}

		const x = (pageWidth - width) / 2;
		const y = (pageHeight - height) / 2;

		pdf.addImage(
			image,
			"PNG",
			x,
			y,
			width,
			height
		);

		pdf.save("inner-systems-gantt-completo.pdf");

		showToast("PDF completo exportado");
	} catch {
		showToast("No se pudo generar el PDF");
	}
}

function download(blob, filename) {
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");

	link.href = url;
	link.download = filename;

	document.body.appendChild(link);
	link.click();
	link.remove();

	setTimeout(() => {
		URL.revokeObjectURL(url);
	}, 1000);
}

function goToToday() {
	const today = new Date();

	today.setHours(0, 0, 0, 0);

	if (today < startDate || today > endDate) {
		showToast("Hoy está fuera del período del proyecto");
		return;
	}

	const position = daysBetween(startDate, today);
	const container = document.querySelector(".ganttContainer");

	container.scrollTo({
		left: Math.max(
			0,
			position * 42 - container.clientWidth / 2
		),
		behavior: "smooth"
	});
}

$("btnToday").addEventListener("click", goToToday);
$("btnCloseDetails").addEventListener("click", closeDetails);
$("btnExportCSV").addEventListener("click", exportCSV);
$("btnExportPNG").addEventListener("click", exportPNG);
$("btnExportPDF").addEventListener("click", exportPDF);

$("detailsModal").addEventListener("click", event => {
	if (event.target === $("detailsModal")) {
		closeDetails();
	}
});

document.addEventListener("keydown", event => {
	if (event.key === "Escape") {
		closeDetails();
	}
});

render();