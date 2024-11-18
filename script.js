const translations = {
    en: {
        headerTitleAbout: "Hi! I'm Jacky Ho",
        headerTitleCharity: "Charity Work",
        headerTitleProjects: "Projects",
        headerTitleContact: "Contact Me",
        navAbout: "About Me",
        navProjects: "Projects",
        navContact: "Contact",
        navCharity: "Charity Work",
        toggleButton: "Español",

        introTitle: "About Me",
        introDescription: "I'm an undergraduate Computer Science Student from Puerto Rico currently studying at the University of Pittsburgh.",
        skillsLanguageTitle: "Language Proficiency",
        skillsLanguageContent: "Python, Java, JavaScript, C, C#, Lua, and Processing.",
        skillsAdditionalTitle: "Additional Proficiency",
        skillsAdditionalContent: "Fluent in Spanish.",

        charity1Title: "Hurricane Clean-up",
        charity1Description: "After Hurricanes Irma and María devastated Puerto Rico in 2017, I Habitat for Humanity in cleaning up debris in impoverished communities.",
        charity2Title: "Beach Clean-up",
        charity2Description: "Assisted my high school's NHS in cleaning trash from beaches throughout 2017-2019.",
        charity3Title: "Food Drive",
        charity3Description: "Volunteered with a former high school teacher to feed the homeless in the Old San Juan area weekly from August 2019 to January 2020.",
        charity4Title: "Horse & Pony Foundation",
        charity4Description: "Volunteered to nurse rescued animals at a local ranch during the 2020 COVID-19 Pandemic.",
        charity5Title: "Techos Pa' Mi Gente",
        charity5Description: "In the summer of 2023, I volunteered in rebuilding rooftops for households still reeling from the damage of hurricanes Irma and María.",

        project1Title: "Starbound Mods",
        project1Description: "A couple of Lua-based game modification packages for the game Starbound by Chucklefish Studios.",
        project2Title: "Steganography Decoder",
        project2Description: "A C application used to hide a BMP image inside another as well as reveal it.",
        project3Title: "Escape Room Game",
        project3Description: "A Java-based point-and-click game where you must navigate through a series of escape rooms before a timer runs out.",
        project4Title: "Ontology Editor",
        project4Description: "A C# and Python-based text editor and visualizer to organize vast quantities of information.",
    },
    es: {
        headerTitleAbout: "¡Saludos! Me llamo Jacky Ho",
        headerTitleCharity: "Trabajo de Caridad",
        headerTitleProjects: "Proyectos",
        headerTitleContact: "Contáctame",
        navAbout: "Sobre Mí",
        navProjects: "Proyectos",
        navContact: "Contacto",
        navCharity: "Trabajo de Caridad",
        toggleButton: "English",

        introTitle: "Sobre Mí",
        introDescription: "Soy un estudiante universitario de Ciencias de la Computación de Puerto Rico que actualmente estudia en la Universidad de Pittsburgh.",
        skillsLanguageTitle: "Dominio del Lenguaje",
        skillsLanguageContent: "Python, Java, JavaScript, C, C#, Lua y Processing.",
        skillsAdditionalTitle: "Conocimientos Adicionales",
        skillsAdditionalContent: "Fluido en Español.",

        charity1Title: "Limpieza tras Huracanes",
        charity1Description: "Después de que los huracanes Irma y María devastaron Puerto Rico en 2017, ayudé a Habitat for Humanity a limpiar escombros en comunidades desfavorecidas.",
        charity2Title: "Limpieza de Playas",
        charity2Description: "Asistí al NHS de mi escuela secundaria en la limpieza de playas entre 2017-2019.",
        charity3Title: "Recolección de Alimentos",
        charity3Description: "Voluntarié con un exprofesor de secundaria para alimentar a las personas sin hogar en el área del Viejo San Juan semanalmente de agosto de 2019 a enero de 2020.",
        charity4Title: "Fundación de Caballos y Ponis",
        charity4Description: "Voluntarié para cuidar animales rescatados en un rancho local durante la pandemia de COVID-19 en 2020.",
        charity5Title: "Techos Pa' Mi Gente",
        charity5Description: "En el verano de 2023, voluntarié en la reconstrucción de techos para hogares aún afectados por el daño de los huracanes Irma y María.",

        project1Title: "Mods de Starbound",
        project1Description: "Un par de paquetes de modificación de juegos basados en Lua para el juego Starbound de Chucklefish Studios.",
        project2Title: "Decodificador de Esteganografía",
        project2Description: "Una aplicación en C utilizada para ocultar una imagen BMP dentro de otra y también revelarla.",
        project3Title: "Juego de Escape",
        project3Description: "Un juego de apuntar y hacer clic basado en Java, donde debes navegar a través de una serie de salas de escape antes de que se acabe el tiempo.",
        project4Title: "Editor de Ontología",
        project4Description: "Un editor de texto y visualizador basado en C# y Python para organizar grandes cantidades de información.",
    },
};

let currentLanguage = "en";
function toggleLanguage() {
    currentLanguage = currentLanguage === "en" ? "es" : "en";
    updateText();
}

function updateText() {
    const headerTitle = document.querySelector("header h1");
    if (headerTitle.textContent.includes("Hi") || headerTitle.textContent.includes("Hola")) {
        headerTitle.textContent = translations[currentLanguage].headerTitleAbout;
        document.querySelector("#intro h2").textContent = translations[currentLanguage].introTitle;
        document.querySelector("#intro p").textContent = translations[currentLanguage].introDescription;
    } else if (headerTitle.textContent.includes("Charity") || headerTitle.textContent.includes("Trabajo")) {
        const charityBlocks = document.querySelectorAll(".charity-block");
        charityBlocks.forEach((block, index) => {
            block.querySelector("h3").textContent =
                translations[currentLanguage][`charity${index + 1}Title`];
            block.querySelector("p").textContent =
                translations[currentLanguage][`charity${index + 1}Description`];
        });
    } else if (headerTitle.textContent.includes("Projects") || headerTitle.textContent.includes("Proyectos")) {
        const projectBlocks = document.querySelectorAll(".project");
        projectBlocks.forEach((block, index) => {
            block.querySelector("h3").textContent =
                translations[currentLanguage][`project${index + 1}Title`];
            block.querySelector("p").textContent =
                translations[currentLanguage][`project${index + 1}Description`];
        });
    } else if (headerTitle.textContent.includes("Contact") || headerTitle.textContent.includes("Contáctame")) {
        headerTitle.textContent = translations[currentLanguage].headerTitleContact;
    }
    document.querySelector("nav ul li:nth-child(1) a").textContent = translations[currentLanguage].navAbout;
    document.querySelector("nav ul li:nth-child(2) a").textContent = translations[currentLanguage].navProjects;
    document.querySelector("nav ul li:nth-child(3) a").textContent = translations[currentLanguage].navContact;
    document.querySelector("nav ul li:nth-child(4) a").textContent = translations[currentLanguage].navCharity;
    document.getElementById("language-toggle").textContent = translations[currentLanguage].toggleButton;
}
document.getElementById("language-toggle").addEventListener("click", toggleLanguage);
