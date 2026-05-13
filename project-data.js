// ============================================
// PROJECT DATA & RENDERING — Chebasas E.A. Ltd
// ============================================

const PROJECTS = {
  "nairobi-hub": {
    id: "nairobi-hub",
    name: "Nairobi Business Hub",
    category: "Commercial",
    shortDesc: "A landmark 12-storey commercial tower in Westlands, Nairobi — redefining the city skyline with glass, steel and innovative engineering.",
    image: "images/project_commercial.png",
    location: "Westlands, Nairobi",
    year: "2023",
    duration: "18 Months",
    value: "KES 420 Million",
    status: "Completed",
    description: [
      "The Nairobi Business Hub stands as one of Chebasas East Africa Limited's most ambitious commercial undertakings. Commissioned by a consortium of Nairobi-based investors, the 12-storey tower was designed to meet the rising demand for Grade-A office space in the rapidly expanding Westlands business district.",
      "Our team engineered the structure using post-tensioned concrete slabs and a reinforced steel core to withstand Kenya's seismic conditions, while achieving floor-to-ceiling glass facades that reduce cooling loads through solar-reflective glazing.",
      "The building was delivered 3 weeks ahead of the 18-month schedule and is now home to over 40 tenants including multinational corporations, law firms, and a rooftop restaurant."
    ],
    highlights: [
      "12-storey Grade-A office tower",
      "Solar-reflective glazing throughout",
      "3 basement parking levels (240 bays)",
      "Rooftop terrace and restaurant space",
      "LEED Silver certified green building",
      "24/7 backup power systems installed",
      "Delivered 3 weeks ahead of schedule"
    ],
    galleryImages: ["images/project_commercial.png", "images/project_bridge.png", "images/project_residential.png"],
    stats: [
      { value: "12", label: "Floors" },
      { value: "240", label: "Parking Bays" },
      { value: "40+", label: "Tenants" },
      { value: "18mo", label: "Delivered In" }
    ],
    challengesSolutions: [
      { icon: "🌍", challenge: "High seismic activity risk in Nairobi", solution: "Post-tensioned slab and reinforced steel core system engineered to EC8 seismic standards" },
      { icon: "☀️", challenge: "High cooling costs for glass tower in tropical climate", solution: "Solar-reflective double-glazed curtain wall reducing solar heat gain by 42%" },
      { icon: "🚧", challenge: "Confined Westlands site with no staging area", solution: "Just-in-time delivery scheduling and crane-lift logistics plan to eliminate on-site material storage" }
    ],
    team: [
      { name: "Derrick K. Kipkemboi", role: "Project Director", initials: "DK" },
      { name: "Millsort J. Kemboi", role: "Site Manager", initials: "MK" },
      { name: "Eng. Amina Yusuf", role: "Structural Engineer", initials: "AY" },
      { name: "Peter Omondi", role: "Quantity Surveyor", initials: "PO" }
    ]
  },
  "kagera-bridge": {
    id: "kagera-bridge",
    name: "Kagera River Bridge",
    category: "Infrastructure",
    shortDesc: "A 240-metre prestressed concrete bridge spanning the Kagera River — connecting two counties and cutting travel time by over 2 hours.",
    image: "images/project_bridge.png",
    location: "Kagera River, Rift Valley",
    year: "2024",
    duration: "24 Months",
    value: "KES 890 Million",
    status: "Completed",
    description: [
      "The Kagera River Bridge is Chebasas East Africa's most technically demanding infrastructure achievement to date. Spanning 240 metres across the Kagera River gorge, the bridge eliminates a notorious river crossing that had forced residents of two counties to take a 3-hour detour.",
      "Our engineers designed a 4-span prestressed concrete beam bridge with cast-in-situ pile caps anchored to the river bedrock 18 metres below the surface. The construction involved over 1,200 workers at peak, operating 24 hours a day in two shifts.",
      "The bridge is rated for 60-tonne axle loads, future-proofing it for heavy haulage and public transport growth. It was commissioned by the County Government and funded through a World Bank infrastructure grant."
    ],
    highlights: [
      "240 metres total span across the gorge",
      "4 prestressed concrete beam spans",
      "Rated for 60-tonne axle loads",
      "Pile foundations 18m into bedrock",
      "1,200 workers at peak construction",
      "Zero structural incidents recorded",
      "World Bank infrastructure grant project"
    ],
    galleryImages: ["images/project_bridge.png", "images/project_roads.png", "images/project_commercial.png"],
    stats: [
      { value: "240m", label: "Span Length" },
      { value: "60T", label: "Axle Load Rating" },
      { value: "1,200", label: "Peak Workers" },
      { value: "24mo", label: "Duration" }
    ],
    challengesSolutions: [
      { icon: "🌊", challenge: "Fast-flowing river during rainy season", solution: "Temporary coffer dams constructed to isolate pile locations; work on piers scheduled for dry season" },
      { icon: "🪨", challenge: "Variable bedrock depth across four pier locations", solution: "In-situ soil investigation and dynamic pile testing to calibrate pile lengths precisely" },
      { icon: "🏗️", challenge: "No road access to mid-river pier locations", solution: "Custom launching gantry system fabricated locally to position formwork and pour concrete over water" }
    ],
    team: [
      { name: "Derrick K. Kipkemboi", role: "Project Director", initials: "DK" },
      { name: "Eng. Samuel Maina", role: "Bridge Engineer", initials: "SM" },
      { name: "Grace Wanjiku", role: "Environmental Officer", initials: "GW" },
      { name: "John Kiprotich", role: "Site Foreman", initials: "JK" }
    ]
  },
  "elite-estate": {
    id: "elite-estate",
    name: "Elite Garden Estate",
    category: "Residential",
    shortDesc: "A gated community of 48 luxury villas in Eldoret, featuring landscaped gardens, solar energy, and smart home systems throughout.",
    image: "images/project_residential.png",
    location: "Kapsoya, Eldoret",
    year: "2022",
    duration: "14 Months",
    value: "KES 310 Million",
    status: "Completed",
    description: [
      "Elite Garden Estate is our flagship residential project — a premium gated community developed on 8 acres of Kapsoya land in Eldoret. The 48-villa development was designed to offer luxury living with sustainability at its core, featuring 5kW rooftop solar systems, rainwater harvesting, and smart home automation.",
      "Each villa spans between 200–350 square metres and includes 3–5 bedrooms, a private garden, double garage, and a fully fitted kitchen. The estate perimeter wall, guardhouse, landscaped communal gardens, and underground utility networks were all managed by Chebasas.",
      "All 48 units were pre-sold before project completion — a testament to buyer confidence in the Chebasas brand and the quality of our delivery."
    ],
    highlights: [
      "48 luxury villas on 8 acres",
      "200–350 sqm per villa (3–5 beds)",
      "5kW rooftop solar on every unit",
      "Smart home automation systems",
      "Rainwater harvesting throughout",
      "Underground utility networks",
      "All units pre-sold before handover"
    ],
    galleryImages: ["images/project_residential.png", "images/project_commercial.png", "images/team_photo.png"],
    stats: [
      { value: "48", label: "Villas Built" },
      { value: "8ac", label: "Estate Size" },
      { value: "5kW", label: "Solar Per Unit" },
      { value: "100%", label: "Pre-Sold" }
    ],
    challengesSolutions: [
      { icon: "⚡", challenge: "Unreliable grid power during construction", solution: "On-site diesel generators with load-shedding schedule, prioritising concrete pours and electrical fitout" },
      { icon: "🌿", challenge: "Client requirement for full green certification", solution: "Integrated rainwater harvesting, solar PV, and LED lighting to meet Kenya Green Building Society standards" },
      { icon: "🏘️", challenge: "48 units running simultaneously with one supply chain", solution: "Phased delivery in 4 tranches of 12 units to allow rolling handover and cash flow optimisation" }
    ],
    team: [
      { name: "Millsort J. Kemboi", role: "Project Director", initials: "MK" },
      { name: "Eng. Faith Chebet", role: "Lead Architect", initials: "FC" },
      { name: "David Rotich", role: "MEP Engineer", initials: "DR" },
      { name: "Esther Langat", role: "Interior Designer", initials: "EL" }
    ]
  },
  "eastern-bypass": {
    id: "eastern-bypass",
    name: "Eastern Bypass Highway",
    category: "Roads",
    shortDesc: "A 22km dual-carriageway tarmac highway connecting Eldoret's eastern suburbs to the main A104 — reducing commute times and unlocking economic corridors.",
    image: "images/project_roads.png",
    location: "Eldoret East, Uasin Gishu",
    year: "2024",
    duration: "20 Months",
    value: "KES 1.1 Billion",
    status: "Completed",
    description: [
      "The Eastern Bypass Highway is the largest road construction project ever undertaken by Chebasas East Africa Limited. Commissioned by the Kenya National Highways Authority, the 22km dual-carriageway connects Eldoret's fast-growing eastern suburbs to the A104 trunk road, opening up land for development and dramatically reducing peak-hour congestion.",
      "The works included full earthworks and subgrade preparation, a 300mm granular sub-base, bitumen macadam base course, and 40mm asphaltic concrete wearing course — all to KeNHA Class A road standards. Twelve box culverts were constructed for cross drainage, with two flyovers at major intersections.",
      "The project employed over 2,000 local workers at peak and was completed 6 weeks ahead of the contract programme."
    ],
    highlights: [
      "22km dual-carriageway (2 lanes each way)",
      "KeNHA Class A road standards",
      "12 box culverts for drainage",
      "2 full flyover interchanges",
      "2,000+ local workers employed",
      "40mm asphaltic concrete wearing course",
      "Delivered 6 weeks early"
    ],
    galleryImages: ["images/project_roads.png", "images/project_bridge.png", "images/project_commercial.png"],
    stats: [
      { value: "22km", label: "Highway Length" },
      { value: "2", label: "Flyovers Built" },
      { value: "2,000+", label: "Jobs Created" },
      { value: "KES 1.1B", label: "Project Value" }
    ],
    challengesSolutions: [
      { icon: "🌧️", challenge: "El Niño rains causing continuous subgrade saturation", solution: "Lime-stabilised subgrade treatment and French drains installed to maintain bearing capacity" },
      { icon: "🏚️", challenge: "12 homesteads within the road reserve requiring relocation", solution: "Community liaison team managed resettlement with County Government, with zero contested relocations" },
      { icon: "🪨", challenge: "Hard laterite rock encountered at two sections", solution: "Hydraulic rock breakers deployed instead of blasting to protect adjacent properties" }
    ],
    team: [
      { name: "Derrick K. Kipkemboi", role: "Contract Director", initials: "DK" },
      { name: "Eng. Moses Barasa", role: "Highway Engineer", initials: "MB" },
      { name: "Beatrice Cherono", role: "Community Liaison", initials: "BC" },
      { name: "Isaac Korir", role: "Plant Manager", initials: "IK" }
    ]
  },
  "skilled-builders": {
    id: "skilled-builders",
    name: "Our Expert Team",
    category: "About Us",
    shortDesc: "The backbone of every Chebasas project — 500+ skilled engineers, architects, and tradespeople delivering world-class construction across East Africa.",
    image: "images/team_photo.png",
    location: "Eldoret HQ & Across East Africa",
    year: "Est. 2021",
    duration: "Ongoing",
    value: "Our Greatest Asset",
    status: "Ongoing",
    description: [
      "Behind every Chebasas project stands a team of exceptional professionals — licensed engineers, certified architects, experienced quantity surveyors, and master tradespeople who have collectively delivered over 500 projects across Kenya and East Africa.",
      "Our workforce is built on a foundation of continuous professional development. Every engineer holds a minimum of an undergraduate degree from an accredited university, and our site foremen undergo annual competency assessments. We invest over KES 2 million per year in training and safety certification.",
      "We are proud that over 70% of our workforce comes from within Uasin Gishu County and the greater Rift Valley region — creating meaningful local employment while delivering nationally significant projects."
    ],
    highlights: [
      "500+ total workforce across all projects",
      "All engineers professionally licensed",
      "Annual KES 2M+ training investment",
      "ISO 45001 occupational health certified",
      "70%+ workforce from local communities",
      "Zero fatality record since founding",
      "24/7 project management operations"
    ],
    galleryImages: ["images/team_photo.png", "images/project_residential.png", "images/project_commercial.png"],
    stats: [
      { value: "500+", label: "Team Members" },
      { value: "50+", label: "Engineers" },
      { value: "70%", label: "Local Workforce" },
      { value: "0", label: "Fatalities" }
    ],
    challengesSolutions: [
      { icon: "🎓", challenge: "Skills gap in specialised bridge engineering locally", solution: "Partnership with University of Eldoret for graduate intake and in-house mentorship programme" },
      { icon: "🌍", challenge: "Retaining talent to upcountry projects", solution: "Staff housing, transport allowances, and profit-sharing scheme to reward long-term commitment" },
      { icon: "🔒", challenge: "Maintaining zero-harm safety record at scale", solution: "Daily toolbox talks, mandatory PPE, monthly safety audits and an anonymous hazard reporting app" }
    ],
    team: [
      { name: "Derrick K. Kipkemboi", role: "Managing Director", initials: "DK" },
      { name: "Millsort J. Kemboi", role: "Operations Director", initials: "MK" },
      { name: "HR Department", role: "People & Culture", initials: "HR" },
      { name: "Safety Team", role: "HSE Division", initials: "ST" }
    ]
  }
};

// ---- RENDER ----
function renderProject() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const p = PROJECTS[id];

  if (!p) {
    document.getElementById('project-root').innerHTML = `
      <div class="proj-loading">
        <div style="font-size:4rem;">🚧</div>
        <h2 style="font-family:'Bebas Neue',sans-serif;font-size:2.5rem;letter-spacing:2px;">Project Not Found</h2>
        <p style="color:var(--text-muted);max-width:400px;text-align:center;line-height:1.7;">The project you're looking for doesn't exist or has been moved.</p>
        <a href="index.html" class="btn-primary" style="margin-top:1rem;">← Back to Homepage</a>
      </div>`;
    return;
  }

  // Page title
  document.title = `${p.name} | Chebasas East Africa Limited`;
  document.querySelector('meta[name="description"]').setAttribute('content', p.shortDesc);

  const statusClass = p.status === 'Completed' ? 'status-done' : 'status-ongoing';
  const statusIcon = p.status === 'Completed' ? '✅' : '🔨';

  document.getElementById('project-root').innerHTML = `
    <!-- HERO BANNER -->
    <section class="proj-hero">
      <div class="proj-hero-img" style="background-image:url('${p.image}')"></div>
      <div class="proj-hero-overlay"></div>
      <div class="proj-hero-content">
        <a href="index.html#projects" class="back-btn">← Back to Projects</a>
        <div class="proj-cat-badge">${p.category}</div>
        <h1 class="proj-hero-title">${p.name}</h1>
        <p class="proj-hero-sub">${p.shortDesc}</p>
        <div class="proj-hero-meta">
          <div class="proj-meta-item"><span class="meta-icon">📍</span><div><span class="meta-label">Location</span><span class="meta-val">${p.location}</span></div></div>
          <div class="proj-meta-item"><span class="meta-icon">📅</span><div><span class="meta-label">Year</span><span class="meta-val">${p.year}</span></div></div>
          <div class="proj-meta-item"><span class="meta-icon">⏱️</span><div><span class="meta-label">Duration</span><span class="meta-val">${p.duration}</span></div></div>
          <div class="proj-meta-item"><span class="meta-icon">💰</span><div><span class="meta-label">Value</span><span class="meta-val">${p.value}</span></div></div>
        </div>
      </div>
    </section>

    <!-- BODY -->
    <main class="proj-main container">

      <!-- OVERVIEW -->
      <section class="proj-section fade-up">
        <div class="proj-section-label">Project Overview</div>
        <div class="proj-overview-grid">
          <div class="proj-overview-text">
            <h2 class="proj-section-title">About This Project</h2>
            <div class="divider"></div>
            ${p.description.map(d => `<p class="proj-para">${d}</p>`).join('')}
          </div>
          <div class="proj-highlights-card">
            <h4 class="highlights-title">Project Highlights</h4>
            <ul class="highlights-list">
              ${p.highlights.map(h => `<li class="highlight-item"><span class="hi-dot"></span>${h}</li>`).join('')}
            </ul>
            <div class="proj-status ${statusClass}">${statusIcon} ${p.status}</div>
          </div>
        </div>
      </section>

      <!-- STATS STRIP -->
      <section class="proj-stats-strip fade-up">
        ${p.stats.map(s => `
          <div class="proj-stat-item">
            <div class="proj-stat-num">${s.value}</div>
            <div class="proj-stat-label">${s.label}</div>
          </div>`).join('')}
      </section>

      <!-- GALLERY -->
      <section class="proj-section fade-up">
        <div class="proj-section-label">Gallery</div>
        <h2 class="proj-section-title">Visual Journey</h2>
        <div class="divider"></div>
        <div class="proj-gallery">
          <div class="gallery-main">
            <img src="${p.image}" alt="${p.name} main photo" class="gallery-main-img" id="gallery-main-img" />
            <div class="gallery-main-caption">${p.name} — Primary View</div>
          </div>
          <div class="gallery-side">
            ${p.galleryImages.map((img, i) => `
              <div class="gallery-thumb ${i === 0 ? 'active' : ''}" onclick="switchGallery('${img}', this)">
                <img src="${img}" alt="${p.name} view ${i+1}" />
                <div class="gallery-thumb-overlay"><span>View ${i+1}</span></div>
              </div>`).join('')}
          </div>
        </div>
      </section>

      <!-- CHALLENGES & SOLUTIONS -->
      <section class="proj-section fade-up">
        <div class="proj-section-label">Engineering Insight</div>
        <h2 class="proj-section-title">Challenges & Solutions</h2>
        <div class="divider"></div>
        <div class="cs-grid">
          ${p.challengesSolutions.map(cs => `
            <div class="cs-card">
              <div class="cs-icon">${cs.icon}</div>
              <div class="cs-challenge"><span class="cs-label">Challenge</span>${cs.challenge}</div>
              <div class="cs-arrow">→</div>
              <div class="cs-solution"><span class="cs-label">Solution</span>${cs.solution}</div>
            </div>`).join('')}
        </div>
      </section>

      <!-- TEAM -->
      <section class="proj-section fade-up">
        <div class="proj-section-label">Our People</div>
        <h2 class="proj-section-title">Project Team</h2>
        <div class="divider"></div>
        <div class="team-strip">
          ${p.team.map(t => `
            <div class="team-member">
              <div class="team-avatar">${t.initials}</div>
              <div class="team-name">${t.name}</div>
              <div class="team-role">${t.role}</div>
            </div>`).join('')}
        </div>
      </section>

      <!-- CTA -->
      <section class="proj-cta fade-up">
        <div class="proj-cta-inner">
          <span class="section-tag">Start Your Project</span>
          <h2 class="proj-cta-title">Ready to Build Something <span>Iconic?</span></h2>
          <p class="proj-cta-sub">Contact us today for a free consultation and no-obligation quote. Our team is ready to bring your vision to life.</p>
          <div class="proj-cta-btns">
            <a href="index.html#contact" class="btn-primary">🚀 Get a Free Quote</a>
            <a href="index.html#projects" class="btn-outline">← View All Projects</a>
          </div>
        </div>
      </section>
    </main>
  `;

  // Kick off scroll animations for the newly injected elements
  initScrollAnimations();
}

// ---- GALLERY SWITCH ----
function switchGallery(src, el) {
  const mainImg = document.getElementById('gallery-main-img');
  mainImg.style.opacity = '0';
  mainImg.style.transform = 'scale(0.98)';
  setTimeout(() => {
    mainImg.src = src;
    mainImg.style.opacity = '1';
    mainImg.style.transform = 'scale(1)';
  }, 250);
  document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}

// ---- SCROLL ANIMATIONS ----
function initScrollAnimations() {
  const els = document.querySelectorAll('.fade-up, .fade-left, .fade-right');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}

// ---- NAV SCROLL ----
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ---- HAMBURGER ----
function toggleMenu() {
  const links = document.querySelector('.nav-links');
  const cta = document.querySelector('.nav-cta');
  if (links) {
    const open = links.style.display === 'flex';
    links.style.cssText = open ? '' : 'display:flex;flex-direction:column;position:fixed;top:70px;left:0;right:0;background:rgba(13,13,13,0.98);padding:2rem;gap:1.5rem;z-index:999;border-bottom:1px solid rgba(245,166,35,0.2)';
    if (cta) cta.style.display = open ? '' : 'none';
  }
}

// ---- HERO PARALLAX ----
window.addEventListener('scroll', () => {
  const heroImg = document.querySelector('.proj-hero-img');
  if (heroImg) heroImg.style.transform = `translateY(${window.scrollY * 0.25}px) scale(1.04)`;
});

// ---- INIT ----
document.addEventListener('DOMContentLoaded', renderProject);
