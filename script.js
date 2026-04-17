// --- 1. Language & Translation System ---
const translations = {
    en: {
        privacy: "We do not share or sell your personal data. We do not track your location or store your IP address.",
        title: "You are safe here.",
        sub: "Find local resources anonymously. No names, no tracking.",
        searchPlaceholder: "Enter Zip Code or Region...",
        searchBtn: "Find Help",
        catTitle: "What do you need help finding today?",
        hotlines: "Emergency Hotlines",
        food: "Food Resources",
        shelter: "Shelter & Housing",
        legal: "Legal & Advocacy",
        edu: "Education & ESL",
        child: "Child Care",
        emp: "Employment",
        health: "Health",
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
        hotlines: "Líneas de Emergencia",
        food: "Recursos de Comida",
        shelter: "Refugio y Vivienda",
        legal: "Legal y Defensa",
        edu: "Educación e Inglés",
        child: "Cuidado Infantil",
        emp: "Empleo",
        health: "Salud",
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
        hotlines: "Lignes d'Urgence",
        food: "Ressources Alimentaires",
        shelter: "Hébergement",
        legal: "Juridique et Défense",
        edu: "Éducation et ESL",
        child: "Garde d'enfants",
        emp: "Emploi",
        health: "Santé",
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
        hotlines: "紧急热线",
        food: "食物资源",
        shelter: "庇护所与住房",
        legal: "法律与维权",
        edu: "教育与英语学习",
        child: "儿童看护",
        emp: "就业机会",
        health: "医疗服务",
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
        hotlines: "Liy Ijans",
        food: "Resous Manje",
        shelter: "Kote pou rete",
        legal: "Èd Legal",
        edu: "Edikasyon ak ESL",
        child: "Swen Timoun",
        emp: "Travay",
        health: "Sante",
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
    
    document.getElementById('cat-hotlines').innerText = t.hotlines;
    document.getElementById('cat-food').innerText = t.food;
    document.getElementById('cat-shelter').innerText = t.shelter;
    document.getElementById('cat-legal').innerText = t.legal;
    document.getElementById('cat-edu').innerText = t.edu;
    document.getElementById('cat-child').innerText = t.child;
    document.getElementById('cat-emp').innerText = t.emp;
    document.getElementById('cat-health').innerText = t.health;
    document.getElementById('cat-rights').innerText = t.rights;
    
    document.getElementById('back-text').innerText = t.back;
}

// --- 2. Local Database (Updated strictly with your provided links) ---
const resourceDatabase = [
    // Emergency Hotlines
    { category: 'hotlines', name: '211 Network', desc: 'Housing, food, and utilities assistance.', url: 'https://www.211.org/' },
    { category: 'hotlines', name: 'National Domestic Hotline', desc: 'Confidential support for domestic violence.', url: 'https://www.thehotline.org/' },
    { category: 'hotlines', name: 'WhyHunger', desc: 'Emergency food resource database.', url: 'https://whyhunger.org/' },
    { category: 'hotlines', name: 'National Hunger Hotline', desc: 'Emergency food resource assistance.', url: 'https://help.sengov.com/posts/national-hunger-hotline' },

    // Know Your Rights
    { category: 'rights', name: 'ACLU: Immigrants\' Rights', desc: 'Learn your rights and protections.', url: 'https://www.aclu.org/know-your-rights/immigrants-rights' },
    { category: 'rights', name: 'NILC: Know Your Rights', desc: 'Resources for navigating interactions with authorities.', url: 'https://www.nilc.org/resources/?resource_type%5B%5D=know-your-rights' },
    { category: 'rights', name: 'Immigrant Defense Project', desc: 'What to do if ICE is at your door.', url: 'https://www.immigrantdefenseproject.org/know-your-rights-with-ice/' },

    // Food Banks
    { category: 'food', name: 'Feeding America', desc: 'Find your local foodbank.', url: 'https://www.feedingamerica.org/find-your-local-foodbank' },
    { category: 'food', name: 'Society of St. Vincent de Paul', desc: 'Food pantries and community support.', url: 'https://ssvpusa.org/?_gl=1%2A3sid85%2A_ga%2AOTMyMDMzNzExLjE3NzY0NDE3Nzk.%2A_ga_4DYG9PM363%2AczE3NzY0NDE3ODEkbzEkZzAkdDE3NzY0NDE3ODEkajYwJGwwJGgw' },
    { category: 'food', name: 'FoodPantries.org', desc: 'Directory of local food pantries.', url: 'https://www.foodpantries.org/#google_vignette' },
    { category: 'food', name: 'USA.gov Food Stamps', desc: 'Information on nutritional assistance programs.', url: 'https://www.usa.gov/food-stamps?utm_source=usa_benefits-gov&utm_medium=redirect&utm_campaign=redirect_benefits-gov&modal=b-welcome-1899' },
    { category: 'food', name: 'USDA Food and Nutrition Service', desc: 'Federal food and nutrition resources.', url: 'https://www.fns.usda.gov/' },

    // Find Shelter
    { category: 'shelter', name: 'Catholic Charities USA', desc: 'Find a local agency for emergency housing.', url: 'https://www.catholiccharitiesusa.org/about-us/find-a-local-agency/' },
    { category: 'shelter', name: 'The Salvation Army', desc: 'Locate emergency shelters and housing support.', url: 'https://www.salvationarmyusa.org' },
    { category: 'shelter', name: 'USDA Farm Labor Housing', desc: 'Multifamily housing programs and grants.', url: 'https://www.rd.usda.gov/programs-services/multifamily-housing-programs/farm-labor-housing-direct-loans-grants' },

    // Legal Help
    { category: 'legal', name: 'CLINIC', desc: 'Find affordable legal help.', url: 'https://www.cliniclegal.org/find-legal-help' },
    { category: 'legal', name: 'RAICES Texas', desc: 'Legal and advocacy services.', url: 'https://raicestexas.org/get-help/' },
    { category: 'legal', name: 'National Immigration Law Center (NILC)', desc: 'Defending and advancing rights of low-income immigrants.', url: 'https://www.nilc.org/' },
    { category: 'legal', name: 'Immigration Advocates Network', desc: 'National immigration legal services directory.', url: 'https://www.immigrationadvocates.org/nonprofit/legaldirectory/' },
    { category: 'legal', name: 'USCIS Fee Waiver Info', desc: 'Information on filing for fee waivers.', url: 'https://www.uscis.gov/forms/filing-fees/additional-information-on-filing-a-fee-waiver' },

    // Education
    { category: 'education', name: 'ProLiteracy', desc: 'Adult literacy and education resources.', url: 'https://www.proliteracy.org/' },
    { category: 'education', name: 'TheDream.US', desc: 'Scholarships for undocumented students.', url: 'https://www.thedream.us/scholarships/' },
    { category: 'education', name: 'GED Classes', desc: 'Find local study programs for the GED.', url: 'https://www.ged.com/study/ged-classes.html' },

    // Employment / Opportunities
    { category: 'employment', name: 'Forum Together', desc: 'Community and opportunity boards.', url: 'https://forumtogether.org/' },

    // Childcare
    { category: 'childcare', name: 'Head Start', desc: 'Early childhood education and family support.', url: 'https://acf.gov/ohs/about/head-start' },
    { category: 'childcare', name: 'Child Welfare Information Gateway', desc: 'Resources for child safety and care.', url: 'https://www.childwelfare.gov/' },

    // Health
    { category: 'health', name: 'Medicaid', desc: 'Healthcare coverage information.', url: 'https://www.medicaid.gov/' }
];

// --- 3. UI Functionality ---
function searchResources() {
    const zip = document.getElementById('locationInput').value;
    if(!zip.trim()) return;
    
    displayResults(resourceDatabase, `National Resources available for ${zip}`);
}

function showCategory(cat) {
    let filtered = resourceDatabase.filter(item => item.category === cat);
    if(cat === 'rights') {
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
        html += `<p>No resources found in this category yet.</p>`;
    } else {
        data.forEach(item => {
            html += `
            <div class="resource-item">
                <h3>${item.name}</h3>
                <p>${item.desc}</p>
                <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="resource-link">Visit Website ↗</a>
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
