let videoElement = document.getElementById("player");
let sectionsElement = document.getElementById("sections");

let sections = [
    { start: 0, end: 42, title: "Geschichte", description: "Geschichte des Internets und des World Wide Web" },
    { start: 42, end: 94, title: "Hypertext", description: "Einführung in Hypertext" },
    { start: 94, end: 182, title: "HTTP", description: "Hypertext Transfer Protocol" },
    { start: 182, end: 257, title: "URL", description: "Uniform Resource Locator" },
    { start: 257, end: 356, title: "Domain Name System", description: "Domain Name System" },
    { start: 356, end: 480, title: "Webbrowser", description: "Webbrowser und ihre Funktionen" },
    { start: 480, end: 500, title: "Ende", description: "" },
]

sections.forEach(section => {
    let sectionElement = document.createElement("button");
    sectionElement.id = `section-${section.start}`;
    sectionElement.classList.add("section");
    sectionElement.innerHTML = section.title;

    sectionElement.addEventListener("click", () => {
        videoElement.currentTime = section.start;
        videoElement.play();
    });

    sectionsElement.appendChild(sectionElement);
});

videoElement.addEventListener("timeupdate", () => {
    let currentTime = videoElement.currentTime;

    sections.forEach(section => {
        if (currentTime >= section.start && currentTime < section.end) {
            document.getElementById("section-title").innerHTML = section.title;
            document.getElementById("section-description").innerHTML = section.description;
            document.getElementById(`section-${section.start}`).classList.add("active");
        } else {
            document.getElementById(`section-${section.start}`).classList.remove("active");
        }
    });
});