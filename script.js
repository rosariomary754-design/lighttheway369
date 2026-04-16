const langData = {
    en: {
        privacy: "🛡️ Your data is not stored. We do not track IP addresses.",
        headline: "You are welcome here.",
        subheadline: "Find food, shelter, and legal aid anonymously.",
        search: "Find Help",
        legal: "Legal & Citizenship",
        food: "Food Resources",
        rights: "Know Your Rights"
    },
    es: {
        privacy: "🛡️ Sus datos no se guardan. No rastreamos direcciones IP.",
        headline: "Usted es bienvenido aquí.",
        subheadline: "Encuentre comida, refugio y ayuda legal de forma anónima.",
        search: "Buscar Ayuda",
        legal: "Legal y Ciudadanía",
        food: "Recursos Alimentarios",
        rights: "Conozca sus Derechos"
    },
    fr: {
        privacy: "🛡️ Vos données ne sont pas stockées. Nous ne suivons pas les adresses IP.",
        headline: "Vous êtes les bienvenus ici.",
        subheadline: "Trouvez de la nourriture, un abri et une aide juridique anonymement.",
        search: "Chercher",
        legal: "Juridique et Citoyenneté",
        food: "Ressources Alimentaires",
        rights: "Connaissez Vos Droits"
    }
};

function updateLanguage() {
    const lang = document.getElementById('langSelect').value;
    const content = langData[lang] || langData.en;

    document.getElementById('privacy-stmt').innerText = content.privacy;
    document.getElementById('headline').innerText = content.headline;
    document.getElementById('subheadline').innerText = content.subheadline;
    document.getElementById('searchBtn').innerText = content.search;
    document.getElementById('cat-legal').innerText = content.legal;
    document.getElementById('cat-food').innerText = content.food;
    document.getElementById('cat-rights').innerText = content.rights;
}

function performSearch() {
    const zip = document.getElementById('zipSearch').value;
    if (!zip) return alert("Please enter a location");
    filter('all');
}

function filter(category) {
    const panel = document.getElementById('results-panel');
    const content = document.getElementById('search-results');
    panel.classList.remove('hidden');

    // Mock data - in production, this would be a local JSON file
    const resources = [
        { name: "Community Kitchen", addr: "123 Hope Ln", hours: "Open until 6 PM", cat: "food" },
        { name: "Legal Aid Center", addr: "456 Justice Ave", hours: "Appt Only", cat: "legal" }
    ];

    content.innerHTML = `<h2>Resources for ${category.toUpperCase()}</h2>`;
    resources.forEach(item => {
        if (category === 'all' || item.cat === category) {
            content.innerHTML += `
                <div class="result-item">
                    <h4>${item.name}</h4>
                    <p>📍 ${item.addr}</p>
                    <p>🕒 <strong>Status:</strong> ${item.hours}</p>
                </div>
            `;
        }
    });
}

function closeResults() {
    document.getElementById('results-panel').classList.add('hidden');
}
