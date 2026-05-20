let videoElement = document.getElementById("player");
let sectionsElement = document.getElementById("sections");

let sections = [
    {
        start: 0,
        end: 42,
        title: "Geschichte",
        description:
            "Das World Wide Web ist ein über das Internet abrufbares System von elektronischen Hypertext-Dokumenten, sogenannten Webseiten, welche mit HTML beschrieben werden. Sie sind durch Hyperlinks untereinander verknüpft und werden im Internet über die Protokolle HTTP oder HTTPS übertragen. Die Webseiten enthalten meist Texte, oft mit Bildern und grafischen Elementen illustriert. Häufig sind auch Videos, Tondokumente oder Musikstücke eingebettet. (<a href='https://de.wikipedia.org/wiki/World_Wide_Web'>Quelle: Wikipedia</a>)",
    },
    {
        start: 42,
        end: 94,
        title: "Hypertext",
        description:
            "Hypertext ist ein Text mit einer netzförmigen, dynamischen Struktur, in der die gewohnte Ordnung (lineare Sequenzialität) statischer gedruckter Publikationen technisch aufgebrochen wird. (<a href='https://de.wikipedia.org/wiki/Hypertext'>Quelle: Wikipedia</a>)",
    },
    {
        start: 94,
        end: 182,
        title: "HTTP",
        description:
            "Das Hypertext Transfer Protocol (HTTP; englisch für Hypertext-Übertragungsprotokoll) ist ein 1991 eingeführtes zustandsloses Protokoll zur Übertragung von Daten auf der Anwendungsschicht über ein Rechnernetz. Es wird hauptsächlich eingesetzt, um Webseiten (Hypertext-Dokumente) aus dem World Wide Web (WWW) in einen Webbrowser zu laden. Es ist jedoch nicht prinzipiell darauf beschränkt und auch als allgemeines Dateiübertragungsprotokoll sehr verbreitet. (<a href='https://de.wikipedia.org/wiki/Hypertext_Transfer_Protocol'>Quelle: Wikipedia</a>)",
    },
    {
        start: 182,
        end: 257,
        title: "URL",
        description:
            "Ein Uniform Resource Locator (Abk. URL; englisch für „einheitlicher Verorter für Ressourcen“) identifiziert und lokalisiert eine Ressource, beispielsweise eine Webseite, über die zu verwendende Zugriffsmethode (zum Beispiel das verwendete Netzwerkprotokoll wie HTTP oder FTP) und den Ort (englisch location) der Ressource in Computernetzwerken. (<a href='https://de.wikipedia.org/wiki/Uniform_Resource_Locator'>Quelle: Wikipedia</a>)",
    },
    {
        start: 257,
        end: 356,
        title: "DNS",
        description:
            "Das Domain Name System (DNS) ist ein hierarchisch unterteiltes Bezeichnungssystem in einem meist IP-basierten Netz zur Beantwortung von Anfragen zu Domain-Namen (Namensauflösung). (<a href='https://de.wikipedia.org/wiki/Domain_Name_System'>Quelle: Wikipedia</a>)",
    },
    {
        start: 356,
        end: 480,
        title: "Webbrowser",
        description:
            "Webbrowser oder allgemein auch Browser sind Computerprogramme zur Darstellung von Webseiten im World Wide Web oder allgemein von Dokumenten und Daten. (<a href='https://de.wikipedia.org/wiki/Webbrowser'>Quelle: Wikipedia</a>)",
    },
    { start: 480, end: 500, title: "Ende", description: "Ende der Lektion" },
];

sections.forEach((section) => {
    let sectionButtonElement = document.createElement("button");
    sectionButtonElement.id = `section-${section.start}`;
    sectionButtonElement.classList.add("section");
    sectionButtonElement.innerHTML = `<span>${secondsToTime(section.start)} - ${secondsToTime(section.end)}</span><strong>${section.title}</strong>`;

    sectionButtonElement.addEventListener("click", () => {
        videoElement.currentTime = section.start;
        videoElement.play();
    });

    sectionsElement.appendChild(sectionButtonElement);
});

videoElement.addEventListener("timeupdate", () => {
    let currentTime = videoElement.currentTime;

    sections.forEach((section) => {
        if (currentTime >= section.start && currentTime < section.end) {
            if (!document.getElementById(`section-${section.start}`).classList.contains("active")) {
                document.getElementById("section-title").innerHTML = section.title;
                document.getElementById("section-description").innerHTML = section.description;
                document.getElementById(`section-${section.start}`).classList.add("active");
            }
        } else {
            document.getElementById(`section-${section.start}`).classList.remove("active");
        }
    });
});

function secondsToTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = Math.floor(seconds % 60);

    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}
