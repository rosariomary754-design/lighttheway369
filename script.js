const translations = {
    en: {
        welcome: "You are safe here.",
        privacy: "We do not track your IP or personal data.",
        legal: "Legal & Citizenship",
        food: "Food & Groceries",
        rights: "Know Your Rights"
    },
    es: {
        welcome: "Estás seguro aquí.",
        privacy: "No rastreamos su IP ni sus datos personales.",
        legal: "Legal y Ciudadanía",
        food: "Comida y Comestibles",
        rights: "Conozca sus Derechos"
    }
    // Add other languages here
};

function changeLanguage() {
    const lang = document.getElementById('languagePicker').value;
    const t = translations[lang] || translations.en;
    
    document.getElementById('welcome-text').innerText = t.welcome;
    document.getElementById('privacy-guarantee').innerText = t.privacy;
    document.getElementById('cat-legal').innerText = t.legal;
    document.getElementById('cat-food').innerText = t.food;
    document.getElementById('cat-rights').innerText = t.rights;
}

function searchResources() {
    const zip = document.getElementById('locationInput').value;
    if(!zip) return alert("Please enter a zip code.");

    // Mock Data - In a real app, this would be a local JSON file
    const mockResults = `
        <div class="result-item">
            <h4>Community Food Bank</h4>
            <p>Address: 123 Hope St, Region ${zip}</p>
            <p><strong>Status:</strong> Open until 5:00 PM</p>
            <p><em>No ID Required.</em></p>
        </div>
    `;
    
    document.querySelector('.resource-grid').style.display = 'none';
    const resultsArea = document.getElementById('resultsArea');
    resultsArea.classList.remove('results-hidden');
    document.getElementById('resultsContent').innerHTML = `<h2>Resources near ${zip}</h2>` + mockResults;
}

function closeResults() {
    document.querySelector('.resource-grid').style.display = 'grid';
    document.getElementById('resultsArea').classList.add('results-hidden');
}
