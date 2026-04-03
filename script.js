// Mock database - in a real app, this could be a local JSON file
const resources = [
    { title: "Pro-Bono Legal Clinic", category: "legal", region: "90210", desc: "Free consultations every Tuesday." },
    { title: "Central Food Bank", category: "food", region: "90210", desc: "No ID required. Walk-ins welcome." },
    { title: "Know Your Rights Guide", category: "rights", region: "all", desc: "What to do if someone knocks on your door." },
    { title: "Adult ESL Classes", category: "education", region: "10001", desc: "Free English classes for all levels." }
];

// 1. Emergency Exit Function
function quickExit() {
    // Redirects to a neutral site immediately
    window.location.href = "https://www.google.com/search?q=weather";
}

// Listen for the 'Escape' key for emergency exit
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") quickExit();
});

// 2. Render Resources
function displayResources(filter = 'all') {
    const grid = document.getElementById('resource-grid');
    grid.innerHTML = ''; // Clear current display

    const filtered = filter === 'all' 
        ? resources 
        : resources.filter(r => r.category === filter);

    filtered.forEach(res => {
        const card = document.createElement('div');
        card.className = 'resource-card';
        card.innerHTML = `
            <span class="tag">${res.category}</span>
            <h3>${res.title}</h3>
            <p>${res.desc}</p>
            <small>Location: ${res.region}</small>
        `;
        grid.appendChild(card);
    });
}

// 3. Category Filtering
function filterCategory(cat) {
    displayResources(cat);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayResources();
});
