// ============================================
// SERVICE DATA & RENDERING — Chebasas E.A. Ltd
// ============================================

const SERVICES = {
  "residential": {
    name: "Residential Construction", icon: "🏠", category: "Residential",
    image: "images/project_residential.png",
    tagline: "Building dream homes across East Africa — from cozy bungalows to luxury mansions, every brick tells your story.",
    description: [
      "At Chebasas East Africa Limited, residential construction is where our passion began. We believe every family deserves a home built with precision, care, and the finest materials. Whether you envision a modest 3-bedroom bungalow or a sprawling 6-bedroom mansion with a rooftop terrace, our team delivers exactly what you dream — and more.",
      "Our residential division handles every stage of the process: site survey and soil testing, architectural design and 3D visualization, structural engineering, foundation and superstructure, roofing, electrical and plumbing (MEP), interior finishes, landscaping, and final handover with a comprehensive quality inspection.",
      "We have delivered over 200 residential projects across Uasin Gishu, Nairobi, Nakuru, and Kisumu counties — including gated estates, standalone villas, maisonettes, and apartment complexes. Every project is backed by our 5-year structural warranty and our promise of zero-defect handover."
    ],
    features: [
      { icon: "📐", title: "Custom Architectural Design", desc: "In-house architects create bespoke floor plans and 3D renders tailored to your lifestyle, family size, and budget." },
      { icon: "🏗️", title: "Full Turnkey Construction", desc: "From foundation excavation to the final coat of paint — we manage every trade, every permit, every inspection." },
      { icon: "⚡", title: "Smart Home Integration", desc: "Optional smart wiring for automated lighting, security cameras, climate control, and voice-activated systems." },
      { icon: "🌿", title: "Green Building Options", desc: "Solar panels, rainwater harvesting, energy-efficient windows, and sustainable materials available on all projects." },
      { icon: "🔒", title: "5-Year Structural Warranty", desc: "Every home we build comes with a comprehensive 5-year warranty covering all structural and waterproofing elements." },
      { icon: "💰", title: "Transparent Fixed Pricing", desc: "Detailed BOQ provided upfront with no hidden costs. What we quote is what you pay — guaranteed." }
    ],
    stats: [
      { value: "200+", label: "Homes Built" }, { value: "48", label: "Estate Villas" },
      { value: "5yr", label: "Warranty" }, { value: "98%", label: "Client Satisfaction" }
    ],
    process: [
      { step: "01", title: "Consultation", desc: "Free site visit and design discussion to understand your vision, budget, and timeline." },
      { step: "02", title: "Design & Approval", desc: "Architectural plans, 3D renders, and county approval submissions handled by us." },
      { step: "03", title: "Construction", desc: "Foundation to finishing — managed by a dedicated project manager with weekly progress reports." },
      { step: "04", title: "Handover", desc: "Full quality inspection, snagging walkthrough, and keys handed over with all documentation." }
    ],
    relatedProjects: ["elite-estate", "nairobi-hub"]
  },
  "roads": {
    name: "Road & Highway Construction", icon: "🛣️", category: "Roads",
    image: "images/project_roads.png",
    tagline: "Connecting communities through world-class road infrastructure — from rural access roads to dual-carriageway highways.",
    description: [
      "Chebasas East Africa Limited is a registered road construction contractor with the Kenya National Highways Authority (KeNHA) and the Kenya Rural Roads Authority (KeRRA). Our roads division has delivered over 150km of tarmac roads, gravel roads, and access roads across Kenya's Rift Valley, Western, and Central regions.",
      "We execute the full road construction lifecycle: topographical survey and route alignment, earthworks and subgrade preparation, sub-base and base course layering, bituminous surface dressing or asphaltic concrete wearing course, road furniture (markings, guardrails, signage), and drainage infrastructure including box culverts and French drains.",
      "Our fleet includes motor graders, excavators, bulldozers, vibratory rollers, asphalt pavers, and bitumen distributors — enabling us to deliver projects independently without reliance on subcontracted plant."
    ],
    features: [
      { icon: "🚜", title: "Full Plant Fleet", desc: "Own fleet of graders, excavators, rollers, pavers, and distributors — no subcontractor dependency." },
      { icon: "📊", title: "KeNHA Class A Standards", desc: "All roads engineered to Kenya National Highways Authority specifications for maximum durability." },
      { icon: "🌧️", title: "Advanced Drainage", desc: "Integrated box culverts, French drains, and side drains to handle Kenya's heavy rainfall seasons." },
      { icon: "🔬", title: "Material Testing Lab", desc: "On-site CBR, compaction, and aggregate testing ensures every layer meets specification before the next is laid." },
      { icon: "👷", title: "Local Employment", desc: "We prioritise hiring from local communities — typically 70%+ of our workforce on every road project." },
      { icon: "📋", title: "Transparent Reporting", desc: "Weekly progress reports with drone photography, material test results, and programme updates." }
    ],
    stats: [
      { value: "150km+", label: "Roads Built" }, { value: "22km", label: "Largest Project" },
      { value: "2,000+", label: "Jobs Created" }, { value: "12", label: "Culverts Built" }
    ],
    process: [
      { step: "01", title: "Survey & Design", desc: "Topographical survey, route alignment, and detailed engineering design with drainage planning." },
      { step: "02", title: "Earthworks", desc: "Clearing, grubbing, cut-and-fill operations, and subgrade preparation to design formation level." },
      { step: "03", title: "Pavement Layers", desc: "Sub-base, base course, and wearing course laid and compacted to KeNHA specifications." },
      { step: "04", title: "Finishing", desc: "Road markings, signage, guardrails, and drainage structures completed before commissioning." }
    ],
    relatedProjects: ["eastern-bypass", "kagera-bridge"]
  },
  "commercial": {
    name: "Commercial Buildings", icon: "🏢", category: "Commercial",
    image: "images/project_commercial.png",
    tagline: "Creating iconic commercial spaces — offices, malls, hotels, and warehouses engineered for performance and aesthetics.",
    description: [
      "Our commercial construction division delivers Grade-A office towers, shopping malls, hotels, warehouses, and mixed-use developments. We combine structural engineering excellence with architectural creativity to create buildings that are as functional as they are beautiful.",
      "Chebasas has delivered over 50 commercial projects ranging from single-storey retail units to the 12-storey Nairobi Business Hub. Our team handles reinforced concrete frames, post-tensioned slabs, structural steel, curtain wall glazing, MEP systems, fire protection, and lift installations.",
      "Every commercial project is designed with the end user in mind — maximising natural light, optimising floor plate efficiency, and incorporating sustainable building practices that reduce operational costs for building owners and tenants."
    ],
    features: [
      { icon: "🏗️", title: "Multi-Storey Expertise", desc: "Proven capability in buildings up to 12+ storeys with post-tensioned concrete and steel core systems." },
      { icon: "🪟", title: "Curtain Wall Glazing", desc: "Solar-reflective glass facades that reduce cooling costs while creating stunning architectural aesthetics." },
      { icon: "🔥", title: "Fire Safety Systems", desc: "Full fire protection engineering including sprinklers, smoke detection, emergency exits, and fire-rated doors." },
      { icon: "♻️", title: "LEED Certification", desc: "Green building design targeting LEED Silver or Gold certification for environmentally conscious clients." },
      { icon: "🛗", title: "MEP & Lift Installation", desc: "Complete mechanical, electrical, plumbing, and vertical transportation systems designed and installed in-house." },
      { icon: "🅿️", title: "Basement Parking", desc: "Multi-level basement parking with waterproofing, ventilation, and fire suppression systems." }
    ],
    stats: [
      { value: "50+", label: "Buildings" }, { value: "12", label: "Max Floors" },
      { value: "240", label: "Parking Bays" }, { value: "40+", label: "Tenants Housed" }
    ],
    process: [
      { step: "01", title: "Feasibility Study", desc: "Market analysis, site assessment, and financial viability study for optimal project planning." },
      { step: "02", title: "Design & Engineering", desc: "Architectural design, structural engineering, MEP design, and regulatory approvals." },
      { step: "03", title: "Construction", desc: "Foundation, superstructure, facade, MEP installation, and interior fit-out managed end-to-end." },
      { step: "04", title: "Commissioning", desc: "Building systems testing, occupancy certification, and tenant-ready handover." }
    ],
    relatedProjects: ["nairobi-hub", "elite-estate"]
  },
  "bridges": {
    name: "Bridges & Infrastructure", icon: "🌉", category: "Infrastructure",
    image: "images/project_bridge.png",
    tagline: "Engineering structures that span rivers, gorges, and valleys — connecting communities for generations to come.",
    description: [
      "Bridge construction is the most technically demanding discipline in civil engineering, and it is where Chebasas East Africa's engineering expertise truly shines. Our infrastructure division designs and builds prestressed concrete bridges, steel truss bridges, pedestrian footbridges, and box culvert crossings.",
      "Our bridge engineering team includes licensed structural engineers with experience on World Bank and African Development Bank-funded infrastructure projects. We handle geotechnical investigation, hydraulic analysis, bridge design to BS/EC standards, pile foundation construction, pier and abutment works, deck casting, and post-tensioning.",
      "The Kagera River Bridge — our 240-metre, 4-span prestressed concrete beam bridge — stands as a testament to our capability in delivering major infrastructure projects on time, within budget, and to the highest international standards."
    ],
    features: [
      { icon: "🪨", title: "Deep Foundation Engineering", desc: "Bored and driven pile foundations up to 30m depth, anchored to bedrock with dynamic load testing." },
      { icon: "🌊", title: "Hydraulic Analysis", desc: "River flow modelling and flood return period analysis to ensure bridge clearance and scour protection." },
      { icon: "🏗️", title: "Launching Gantry Systems", desc: "Custom fabricated gantry systems for deck construction over water without temporary supports." },
      { icon: "📏", title: "Post-Tensioning", desc: "Prestressed concrete technology for longer spans with reduced deck depth and material usage." },
      { icon: "🔍", title: "Non-Destructive Testing", desc: "Ultrasonic and rebound hammer testing on all concrete elements to verify design strength." },
      { icon: "🛡️", title: "60-Tonne Axle Rating", desc: "Bridges designed for heavy haulage loads, future-proofing for transport growth and development." }
    ],
    stats: [
      { value: "240m", label: "Longest Span" }, { value: "60T", label: "Axle Load" },
      { value: "18m", label: "Foundation Depth" }, { value: "1,200", label: "Peak Workers" }
    ],
    process: [
      { step: "01", title: "Geotechnical Survey", desc: "Soil boring, rock coring, and load-bearing capacity analysis at all pier and abutment locations." },
      { step: "02", title: "Bridge Design", desc: "Structural design to Eurocode/BS standards with 3D FEM analysis and hydraulic clearance checks." },
      { step: "03", title: "Substructure", desc: "Pile foundations, pile caps, piers, and abutments constructed with in-situ concrete." },
      { step: "04", title: "Superstructure", desc: "Deck beams cast, launched, post-tensioned, and surfaced with approach road connections." }
    ],
    relatedProjects: ["kagera-bridge", "eastern-bypass"]
  },
  "renovation": {
    name: "Renovation & Remodeling", icon: "🔧", category: "Renovation",
    image: "images/project_residential.png",
    tagline: "Breathing new life into existing structures — from kitchen makeovers to full structural overhauls.",
    description: [
      "Not every great space needs to be built from scratch. Our renovation and remodeling division transforms dated, damaged, or underperforming buildings into modern, functional, and beautiful spaces. We work on residential homes, commercial offices, retail spaces, and institutional buildings.",
      "Our renovation services include structural assessments and repairs, roof replacement and waterproofing, complete interior redesign, kitchen and bathroom remodeling, electrical rewiring, plumbing upgrades, painting and finishing, and external facade restoration. Every renovation begins with a thorough structural assessment to identify hidden issues before work begins.",
      "We have completed over 80 renovation projects — from heritage building restorations to complete office fit-outs. Our approach combines respect for the original structure with modern materials and techniques that extend the building's life by decades."
    ],
    features: [
      { icon: "🔍", title: "Structural Assessment", desc: "Comprehensive survey of existing structure to identify defects, load capacity, and renovation potential." },
      { icon: "🎨", title: "Interior Design", desc: "In-house design team creates modern interiors with 3D visualisation before any demolition begins." },
      { icon: "🔌", title: "MEP Upgrades", desc: "Full electrical rewiring, plumbing replacement, and HVAC installation to modern building codes." },
      { icon: "🏠", title: "Kitchen & Bath Remodeling", desc: "Complete kitchen and bathroom redesign with premium fixtures, custom cabinetry, and tiling." },
      { icon: "🛡️", title: "Waterproofing", desc: "Roof, basement, and wet-area waterproofing using membrane and cementitious systems." },
      { icon: "🏢", title: "Commercial Fit-Out", desc: "Office partitioning, suspended ceilings, raised floors, and data cabling for commercial tenants." }
    ],
    stats: [
      { value: "80+", label: "Renovations" }, { value: "30+", label: "Office Fit-Outs" },
      { value: "100%", label: "On Budget" }, { value: "4.9★", label: "Client Rating" }
    ],
    process: [
      { step: "01", title: "Site Assessment", desc: "Structural survey, defect mapping, and feasibility report with cost estimates." },
      { step: "02", title: "Design & Planning", desc: "Interior design concepts, 3D renders, material selection, and permit applications." },
      { step: "03", title: "Renovation Works", desc: "Demolition, structural repairs, MEP upgrades, finishes, and fixtures installation." },
      { step: "04", title: "Final Inspection", desc: "Quality walkthrough, snagging resolution, and handover with maintenance guide." }
    ],
    relatedProjects: ["elite-estate", "nairobi-hub"]
  },
  "drainage": {
    name: "Drainage & Utilities", icon: "🌊", category: "Utilities",
    image: "images/project_roads.png",
    tagline: "Engineering the invisible infrastructure that keeps communities healthy, dry, and connected.",
    description: [
      "Beneath every great building and road lies an invisible network of pipes, channels, and cables that keep communities functioning. Chebasas East Africa's drainage and utilities division designs and installs stormwater drainage systems, sewer networks, water supply pipelines, and underground electrical and telecommunications ducting.",
      "Our drainage work ranges from small residential storm drains to large-scale municipal sewer systems. We use HDPE, PVC, concrete, and ductile iron pipes depending on application, depth, and load requirements. All installations are surveyed with GPS-guided laser levels and tested for hydraulic capacity before backfilling.",
      "We also provide ongoing maintenance contracts for drainage systems — including CCTV pipe inspection, jetting, desilting, and emergency flood response. Our preventive maintenance programmes have helped multiple county governments reduce flood damage by over 60%."
    ],
    features: [
      { icon: "🌧️", title: "Stormwater Management", desc: "Surface and subsurface drainage systems designed for 50-year flood return periods." },
      { icon: "🚰", title: "Water Supply Lines", desc: "HDPE and ductile iron water mains with pressure testing and chlorination before commissioning." },
      { icon: "🏗️", title: "Sewer Networks", desc: "Gravity and pumped sewer systems with manholes, inspection chambers, and treatment plant connections." },
      { icon: "📡", title: "Utility Ducting", desc: "Underground ducts for electrical cables, fibre optic, and telecommunications infrastructure." },
      { icon: "📷", title: "CCTV Pipe Inspection", desc: "Remote camera inspection of existing pipelines to assess condition and plan rehabilitation." },
      { icon: "🔧", title: "Maintenance Contracts", desc: "Annual drainage maintenance programmes including jetting, desilting, and emergency response." }
    ],
    stats: [
      { value: "50km+", label: "Pipes Laid" }, { value: "200+", label: "Manholes Built" },
      { value: "60%", label: "Flood Reduction" }, { value: "12", label: "County Contracts" }
    ],
    process: [
      { step: "01", title: "Hydraulic Design", desc: "Catchment analysis, flow calculations, and pipe sizing for optimal drainage capacity." },
      { step: "02", title: "Trenching & Laying", desc: "Excavation, bedding, pipe laying, jointing, and backfilling with compaction testing." },
      { step: "03", title: "Testing", desc: "Pressure testing, flow testing, and CCTV inspection before commissioning." },
      { step: "04", title: "Commissioning", desc: "System handover with as-built drawings, O&M manuals, and maintenance schedule." }
    ],
    relatedProjects: ["eastern-bypass", "kagera-bridge"]
  }
};

function renderService() {
  const id = new URLSearchParams(window.location.search).get('id');
  const s = SERVICES[id];
  if (!s) {
    document.getElementById('service-root').innerHTML = `
      <div class="proj-loading">
        <div style="font-size:4rem;">🚧</div>
        <h2 style="font-family:'Bebas Neue',sans-serif;font-size:2.5rem;letter-spacing:2px;">Service Not Found</h2>
        <p style="color:var(--text-muted);max-width:400px;text-align:center;line-height:1.7;">The service page you're looking for doesn't exist.</p>
        <a href="index.html" class="btn-primary" style="margin-top:1rem;">← Back to Homepage</a>
      </div>`;
    return;
  }
  document.title = `${s.name} | Chebasas East Africa Limited`;
  document.querySelector('meta[name="description"]').setAttribute('content', s.tagline);

  document.getElementById('service-root').innerHTML = `
    <!-- HERO -->
    <section class="proj-hero">
      <div class="proj-hero-img" style="background-image:url('${s.image}')"></div>
      <div class="proj-hero-overlay"></div>
      <div class="proj-hero-content">
        <a href="index.html#services" class="back-btn">← Back to Services</a>
        <div class="proj-cat-badge">${s.icon} ${s.category}</div>
        <h1 class="proj-hero-title">${s.name}</h1>
        <p class="proj-hero-sub">${s.tagline}</p>
      </div>
    </section>

    <main class="proj-main container">
      <!-- OVERVIEW -->
      <section class="proj-section fade-up">
        <div class="proj-section-label">Service Overview</div>
        <h2 class="proj-section-title">What We Offer</h2>
        <div class="divider"></div>
        ${s.description.map(d => `<p class="proj-para" style="max-width:900px;">${d}</p>`).join('')}
      </section>

      <!-- STATS -->
      <section class="proj-stats-strip fade-up">
        ${s.stats.map(st => `<div class="proj-stat-item"><div class="proj-stat-num">${st.value}</div><div class="proj-stat-label">${st.label}</div></div>`).join('')}
      </section>

      <!-- FEATURES -->
      <section class="proj-section fade-up">
        <div class="proj-section-label">Capabilities</div>
        <h2 class="proj-section-title">Why Choose Us for ${s.name}</h2>
        <div class="divider"></div>
        <div class="cs-grid" style="margin-top:2rem;">
          ${s.features.map(f => `
            <div class="cs-card" style="text-align:center;">
              <div style="font-size:2.5rem;">${f.icon}</div>
              <h4 style="font-family:'Bebas Neue',sans-serif;font-size:1.3rem;letter-spacing:1px;color:var(--gold);margin:0.5rem 0 0.3rem;">${f.title}</h4>
              <p style="font-size:0.85rem;color:rgba(255,255,255,0.7);line-height:1.6;">${f.desc}</p>
            </div>`).join('')}
        </div>
      </section>

      <!-- PROCESS -->
      <section class="proj-section fade-up">
        <div class="proj-section-label">How We Work</div>
        <h2 class="proj-section-title">Our ${s.name} Process</h2>
        <div class="divider"></div>
        <div class="process-steps" style="margin-top:2rem;">
          ${s.process.map(p => `
            <div class="process-step">
              <div class="step-circle">${p.step}</div>
              <div class="step-title">${p.title}</div>
              <p class="step-desc">${p.desc}</p>
            </div>`).join('')}
        </div>
      </section>

      <!-- RELATED PROJECTS -->
      <section class="proj-section fade-up">
        <div class="proj-section-label">See Our Work</div>
        <h2 class="proj-section-title">Related Projects</h2>
        <div class="divider"></div>
        <div style="display:flex;gap:1.5rem;margin-top:2rem;flex-wrap:wrap;">
          ${s.relatedProjects.map(pid => `<a href="project.html?id=${pid}" class="btn-outline" style="font-size:0.9rem;">View ${pid.replace(/-/g,' ').replace(/\b\w/g,l=>l.toUpperCase())} →</a>`).join('')}
        </div>
      </section>

      <!-- CTA -->
      <section class="proj-cta fade-up">
        <div class="proj-cta-inner">
          <span class="section-tag">Start Your Project</span>
          <h2 class="proj-cta-title">Need ${s.name}? <span>Let's Talk.</span></h2>
          <p class="proj-cta-sub">Contact us today for a free consultation and detailed quote. No obligations, just honest advice from Kenya's trusted builders.</p>
          <div class="proj-cta-btns">
            <a href="index.html#contact" class="btn-primary">🚀 Get a Free Quote</a>
            <a href="index.html#services" class="btn-outline">← All Services</a>
          </div>
        </div>
      </section>
    </main>`;
  initScrollAnimations();
}

function initScrollAnimations() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up,.fade-left,.fade-right').forEach(el => obs.observe(el));
}
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
  const h = document.querySelector('.proj-hero-img');
  if (h) h.style.transform = `translateY(${window.scrollY*0.25}px) scale(1.04)`;
});
function toggleMenu() {
  const links = document.querySelector('.nav-links');
  const cta = document.querySelector('.nav-cta');
  if (links) {
    const open = links.style.display === 'flex';
    links.style.cssText = open ? '' : 'display:flex;flex-direction:column;position:fixed;top:70px;left:0;right:0;background:rgba(13,13,13,0.98);padding:2rem;gap:1.5rem;z-index:999;border-bottom:1px solid rgba(245,166,35,0.2)';
    if (cta) cta.style.display = open ? '' : 'none';
  }
}
document.addEventListener('DOMContentLoaded', renderService);
