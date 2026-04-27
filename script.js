// --- 1. Language & Translation System ---
const translations = {
    en: {
        privacy: "We do not share or sell your personal data. We do not track your location or store your IP address.",
        title: "You are safe here.",
        sub: "Find local resources anonymously. No names, no tracking.",
        searchPlaceholder: "Enter Zip Code or Region...",
        searchBtn: "Find Help",
        catTitle: "What do you need help finding today?",
        food: "Food Resources",
        shelter: "Shelter & Housing",
        legal: "Legal & Advocacy",
        edu: "Education & ESL",
        child: "Child Care",
        rights: "Know Your Rights",
        back: "Back to categories"
    },
    es: {
        privacy: "No compartimos ni vendemos sus datos. No rastreamos su ubicación ni guardamos su IP.",
        title: "Usted está seguro aquí.",
        sub: "Encuentre recursos locales de forma anónima. Sin nombres, sin rastreo.",
        searchPlaceholder: "Ingrese código postal o región...",
        searchBtn: "Buscar Ayuda",
        catTitle: "¿Qué tipo de ayuda busca hoy?",
        food: "Recursos de Comida",
        shelter: "Refugio y Vivienda",
        legal: "Legal y Defensa",
        edu: "Educación e Inglés",
        child: "Cuidado Infantil",
        rights: "Conozca sus Derechos",
        back: "Volver a categorías"
    },
    fr: {
        privacy: "Nous ne partageons ni ne vendons vos données. Nous ne suivons pas votre IP.",
        title: "Vous êtes en sécurité ici.",
        sub: "Trouvez des ressources locales anonymement. Pas de noms, pas de suivi.",
        searchPlaceholder: "Code postal ou région...",
        searchBtn: "Trouver de l'aide",
        catTitle: "De quelle aide avez-vous besoin aujourd'hui?",
        food: "Ressources Alimentaires",
        shelter: "Hébergement",
        legal: "Juridique et Défense",
        edu: "Éducation et ESL",
        child: "Garde d'enfants",
        rights: "Connaissez vos Droits",
        back: "Retour"
    },
    zh: {
        privacy: "我们不会分享或出售您的个人数据。我们不会跟踪您的位置或记录您的 IP。",
        title: "你在这里很安全。",
        sub: "匿名查找本地资源。不需要名字，没有跟踪。",
        searchPlaceholder: "输入邮政编码或地区...",
        searchBtn: "寻找帮助",
        catTitle: "今天您需要什么帮助？",
        food: "食物资源",
        shelter: "庇护所与住房",
        legal: "法律与维权",
        edu: "教育与英语学习",
        child: "儿童看护",
        rights: "了解您的权利",
        back: "返回分类"
    },
    ht: {
        privacy: "Nou pa pataje ni vann done pèsonèl ou. Nou pa swiv adrès IP ou.",
        title: "Ou an sekirite isit la.",
        sub: "Jwenn resous lokal an kachèt. Pa gen non, pa gen swiv.",
        searchPlaceholder: "Antre Kòd Postal oswa Rejyon...",
        searchBtn: "Jwenn Èd",
        catTitle: "Kisa ou bezwen èd pou jwenn jodi a?",
        food: "Resous Manje",
        shelter: "Kote pou rete",
        legal: "Èd Legal",
        edu: "Edikasyon ak ESL",
        child: "Swen Timoun",
        rights: "Konnen Dwa Ou",
        back: "Tounen"
    }
};

function changeLanguage() {
    const lang = document.getElementById('languagePicker').value;
    const t = translations[lang];

    document.getElementById('privacy-text').innerText = t.privacy;
    document.getElementById('welcome-title').innerText = t.title;
    document.getElementById('welcome-sub').innerText = t.sub;
    document.getElementById('locationInput').placeholder = t.searchPlaceholder;
    document.getElementById('search-btn').innerText = t.searchBtn;
    document.getElementById('category-title').innerText = t.catTitle;
    document.getElementById('cat-food').innerText = t.food;
    document.getElementById('cat-shelter').innerText = t.shelter;
    document.getElementById('cat-legal').innerText = t.legal;
    document.getElementById('cat-edu').innerText = t.edu;
    document.getElementById('cat-child').innerText = t.child;
    document.getElementById('cat-rights').innerText = t.rights;
    document.getElementById('back-text').innerText = t.back;
}

// --- 2. Local Database (No Server Tracking) ---
// In a real scenario, this would contain robust data updated by your team.
const resourceDatabase = [
    { category: 'food', name: 'Community Pantry', address: '123 Safe St, Region Area', hours: 'Open today until 6:00 PM', noIdRequired: true },
    { category: 'legal', name: 'Immigrant Advocacy Center', address: '456 Justice Blvd', hours: 'Walk-ins: Mon-Wed 9AM - 2PM', noIdRequired: true },
    { category: 'rights', name: 'What to do if ICE is at your door', address: 'Do not open the door. Ask them to slip a warrant signed by a judge under the door. Remain silent.', hours: 'Always valid', noIdRequired: true }
];

// --- 3. UI Functionality ---
function searchResources() {
    const zip = document.getElementById('locationInput').value;
    if(!zip.trim()) return;
    
    // For anonymity, we do not send this ZIP to a backend. 
    // We just show a simulated local filter based on the database above.
    displayResults(resourceDatabase, `Results near ${zip}`);
}

function showCategory(cat) {
    let filtered = resourceDatabase.filter(item => item.category === cat);
    if(cat === 'rights') {
        // Special formatting for Rights
        displayResults(filtered, "Know Your Rights");
    } else {
        displayResults(filtered, `Category Results`);
    }
}

function displayResults(data, heading) {
    document.querySelector('.grid').classList.add('hidden');
    document.getElementById('category-title').classList.add('hidden');
    
    const resultsArea = document.getElementById('resultsArea');
    const content = document.getElementById('resultsContent');
    
    resultsArea.classList.remove('hidden');
    
    let html = `<h2>${heading}</h2>`;
    
    if(data.length === 0) {
        html += `<p>No local resources found in this system yet. Please check back soon.</p>`;
    } else {
        data.forEach(item => {
            html += `
            <div class="resource-item">
                <h3>${item.name}</h3>
                <p>📍 ${item.address}</p>
                <p>🕒 <span class="status-open">${item.hours}</span></p>
                ${item.noIdRequired ? `<p class="safe-note">✓ No ID Required to access services</p>` : ''}
            </div>`;
        });
    }
    
    content.innerHTML = html;
}

function closeResults() {
    document.getElementById('resultsArea').classList.add('hidden');
    document.querySelector('.grid').classList.remove('hidden');
    document.getElementById('category-title').classList.remove('hidden');
}
