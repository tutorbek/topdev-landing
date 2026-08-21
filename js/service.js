/* ============================================================
   TOPDEV — SERVICES & ARCHITECTURE ENGINE (service.js)
   Executive Service Catalog, Interactive Spec Modal,
   Estimator Synchronizer & FAQ Accordion
   ============================================================ */

'use strict';

/**
 * Technical Specification Database for all 7 Core Services
 */
const SERVICE_SPECS = {
  enterprise: {
    key: 'enterprise',
    badge: '100% AVTOMATLASHTIRISH // B2B CORE',
    title: 'Enterprise ERP & B2B Tizimlar',
    desc: 'Kompaniyangiz barcha operatsion, moliya, ombor va savdo zanjirlarini yagona xavfsiz boshqaruv markaziga birlashtiruvchi yuqori unumdorlikdagi ERP/CRM ekotizimlari.',
    heroMetric: '-45% Xarajat | 3x Tezlik',
    metrics: [
      { num: '-45%', label: 'Operatsion Xarajat Kamayishi' },
      { num: '3x', label: 'Hujjat Aylanish Tezligi' },
      { num: '0%', label: 'Moliyaviy Hisob Xatosi' },
      { num: '12 Oy', label: 'Rasmiy SLA Kafolati' }
    ],
    architectureDetails: [
      {
        title: 'Integratsiyalashgan Modullar',
        text: '1C Korxona, Davlat Soliq qo‘mitasi, E-imzo (Digital Signature), Mahalliy va xalqaro bank shlyuzlari (Uzcard, Humo, Visa, Mastercard) bilan to‘liq xavfsiz real-vaqt sinxronizatsiyasi.'
      },
      {
        title: 'Rolga Asoslangan Xavfsizlik (RBAC)',
        text: 'Har bir xodim uchun alohida ruxsat darajalari, IP-filtrlash, 2FA himoya va har bir operatsiya bo‘yicha o‘zgartirilmas audit jurnallari.'
      },
      {
        title: 'Real-Vaqt Rahbariyat Panellari',
        text: 'Bosh direktor va moliya direktorlari uchun real-vaqt rentabellik, kassa oqimi, ombor qoldiqlari va KPI tahliliy grafiklari.'
      }
    ],
    timelinePhases: [
      { phase: '1-2 Hafta', name: 'Biznes tahlili, jarayonlar xaritasi va Texnik Topshiriq (TT)' },
      { phase: '3-6 Hafta', name: 'Ma\'lumotlar bazasi arxitekturasi va asosiy modullar dasturlash' },
      { phase: '7-10 Hafta', name: '1C va tashqi bank integratsiyalari, xodimlar rollari' },
      { phase: '11-14 Hafta', name: 'Yuklama sinovlari, xodimlarni o‘qitish va jonli reliz' }
    ],
    stack: ['Go (Golang)', 'Node.js', 'PostgreSQL', 'Redis', 'React / Next.js', 'Docker', 'RabbitMQ'],
    caseLink: 'portfolio.html'
  },
  highload: {
    key: 'highload',
    badge: '100,000+ RPS // SUB-10MS LATENCY',
    title: 'High-Load Backend & Mikroservislar',
    desc: 'Millionlab faol foydalanuvchilar va katta hajmdagi moliyaviy tranzaksiyalar uchun uzluksiz, nosozliklarga chidamli (Fault-Tolerant) taqsimlangan tizimlar.',
    heroMetric: '100k+ RPS | < 8ms P99 Latency',
    metrics: [
      { num: '100k+', label: 'RPS Bardoshliligi' },
      { num: '< 8ms', label: 'P99 Tarmoq Kechikishi' },
      { num: '99.99%', label: 'Arxitektura Uptime' },
      { num: '0 sec', label: 'Tranzaksiya Yo‘qotilishi' }
    ],
    architectureDetails: [
      {
        title: 'Asinxron Voqealar Oqimi (Event-Driven)',
        text: 'Apache Kafka va NATS klasterlari orqali soniyasiga yuz minglab tranzaksiyalarni navbatga qo‘yish va kechikishsiz taqsimlash.'
      },
      {
        title: 'FinTech Kliring & Shlyuzlar',
        text: 'Bank integratsiyalari, ISO 20022 formatidagi xabarlar almashinuvi, 3D-Secure 2.0 va PCI-DSS xavfsizlik talablariga to‘liq muvofiqlik.'
      },
      {
        title: 'DB Sharding & Multi-Level Kesh',
        text: 'PostgreSQL sharding, ClickHouse analitika klasteri, Redis Sentinel va in-memory kesh orqali ma\'lumotlar bazasiga tushadigan og‘irlikni 90% ga kamaytirish.'
      }
    ],
    timelinePhases: [
      { phase: '1-2 Hafta', name: 'Yuklama talablari, arxitektura RFC va texnologik stek tanlash' },
      { phase: '3-6 Hafta', name: 'Mikroservislar protokollari (gRPC), Kafka klasteri va API Gateway' },
      { phase: '7-10 Hafta', name: 'Kliring, to‘lov tranzaksiyalari va xavfsizlik mexanizmlari' },
      { phase: '11-12 Hafta', name: '100,000 RPS Stress & Chaos Engineering testlari va reliz' }
    ],
    stack: ['Go (Golang)', 'C# (.NET 8)', 'Apache Kafka', 'NATS', 'ClickHouse', 'Redis Cluster', 'gRPC', 'PostgreSQL'],
    caseLink: 'portfolio.html'
  },
  web: {
    key: 'web',
    badge: 'NEXT.JS 14 // EDGE & SSR',
    title: 'Web & Bulut Platformalari (SaaS)',
    desc: 'Yuqori tezlikda yuklanuvchi, qidiruv tizimlariga (SEO) to‘liq moslashgan, har qanday qurilmada mukammal ishlovchi SaaS platformalar va portallar.',
    heroMetric: '< 0.9s LCP | 100/100 PageSpeed',
    metrics: [
      { num: '< 0.9s', label: 'LCP Yuklanish Tezligi' },
      { num: '100/100', label: 'Google PageSpeed' },
      { num: '+35%', label: 'Konversiya O‘sishi' },
      { num: '100%', label: 'PWA Offline Rejim' }
    ],
    architectureDetails: [
      {
        title: 'Server-Side Rendering (SSR & ISR)',
        text: 'Next.js 14 App Router, Server Components va Edge Caching yordamida sahifalarning 1 soniyadan kam vaqtda ochilishi va SEO yetakchiligi.'
      },
      {
        title: 'Progressive Web App (PWA)',
        text: 'Internet uzilganda ham lokal xotiradan ma\'lumotlarni ko‘rsatish va foydalanuvchi telefoniga alohida ilova kabi o‘rnatilish imkoniyati.'
      },
      {
        title: 'Xavfsiz API Gateway & WAF',
        text: 'JWT/OAuth2 autentifikatsiyasi, Cloudflare WAF DDoS filtratsiyasi va foydalanuvchi ma\'lumotlarining xavfsiz shifrlanishi.'
      }
    ],
    timelinePhases: [
      { phase: '1-2 Hafta', name: 'Texnik talablar, dizayn-tizim moslashuvi va API kontraktlar' },
      { phase: '3-5 Hafta', name: 'Frontend komponentlar kutubxonasi va SSR arxitektura' },
      { phase: '6-8 Hafta', name: 'Backend API ulanishi, to‘lovlar va xavfsizlik sinovlari' },
      { phase: '9-10 Hafta', name: 'PageSpeed 100/100 optimizatsiyasi, SEO auditi va reliz' }
    ],
    stack: ['Next.js 14', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js / Go', 'AWS CloudFront', 'Docker'],
    caseLink: 'portfolio.html'
  },
  mobile: {
    key: 'mobile',
    badge: '60 FPS NATIVE // IOS & ANDROID',
    title: 'Mobil Ilovalar (iOS & Android)',
    desc: 'Mijozlaringiz cho‘ntagida tezkor va qulay ishlaydigan, 60fps silliq animatsiyalarga ega, xavfsiz va chiroyli dizayndagi mobil ilovalar.',
    heroMetric: '60 FPS | 4.9★ Store Rating',
    metrics: [
      { num: '60 FPS', label: 'Native UI Silliqligi' },
      { num: '4.9 ★', label: 'Store Foydalanuvchi Reytingi' },
      { num: '100%', label: 'Offline-First Arxitektura' },
      { num: '100%', label: 'Store Chiqarish Kafolati' }
    ],
    architectureDetails: [
      {
        title: 'Flutter Kross-Platforma & Nativ',
        text: 'Bitta toza kod bazasi orqali iOS va Android uchun parallel, tezkor va arzon ishlab chiqish yoki 100% Swift va Kotlin nativ unumdorlik.'
      },
      {
        title: 'Biometrik Xavfsizlik & Offline Kesh',
        text: 'Face ID / Barmoq izi orqali tezkor kirish, SQLite / Hive orqali shifrlangan lokal xotira va tarmoq paydo bo‘lganda avtomatik sinxronizatsiya.'
      },
      {
        title: 'Real-Vaqt Xaritalar & Push-Xabarlar',
        text: 'Mapbox va Google Maps orqali kuryer/haydovchi harakatini real-vaqtda kuzatish, Firebase Cloud Messaging bilan maqsadli bildirishnomalar.'
      }
    ],
    timelinePhases: [
      { phase: '1-2 Hafta', name: 'Figma UI/UX, User Journey va API spetsifikatsiyalari' },
      { phase: '3-6 Hafta', name: 'Mobil ilova asosiy ekranlari, navigatsiya va API ulanishi' },
      { phase: '7-9 Hafta', name: 'Offline rejim, to‘lovlar, xaritalar va push-xabarlar' },
      { phase: '10-12 Hafta', name: 'App Store va Google Play rasmiy moderatsiyasidan o‘tkazish va reliz' }
    ],
    stack: ['Flutter (Dart)', 'Swift (iOS)', 'Kotlin (Android)', 'Firebase', 'Mapbox', 'SQLite / Hive', 'REST / gRPC'],
    caseLink: 'portfolio.html'
  },
  design: {
    key: 'design',
    badge: 'FIGMA SYSTEMS // WCAG AA',
    title: 'UI/UX Dizayn & Mahsulot Arxitekturasi',
    desc: 'Foydalanuvchi psixologiyasi va biznes konversiyasiga asoslangan, to‘liq interaktiv prototiplar va masshtablashtiriluvchi dizayn tizimlari.',
    heroMetric: '+50% Dev Tezlashuvi | WCAG AA',
    metrics: [
      { num: '+50%', label: 'Dasturlash Tezlashuvi' },
      { num: '100%', label: 'Kliklanadigan Prototip' },
      { num: '0', label: 'Dizayn Xatolar Qaytishi' },
      { num: 'WCAG AA', label: 'Foydalanish Standarti' }
    ],
    architectureDetails: [
      {
        title: 'Chuqur UX Tadqiqot & CJM',
        text: 'Raqobatchilar tahlili, mijozlar bilan suhbatlar (User Interviews), Customer Journey Map va konversiyani oshiruvchi qisqa xarid yo‘llari.'
      },
      {
        title: 'Scalable Figma Design System',
        text: 'Avtomatlashtirilgan Auto-layout komponentlar, ranglar, shriftlar va CSS dizayn tokenlari tizimi (Dasturchilar uchun oson integratsiya).'
      },
      {
        title: 'Jonli Interaktiv Prototiplar',
        text: 'Kod yozilishidan oldin loyihani barcha harakatlar va animatsiyalar bilan smartfonda yoki noutbukda to‘liq sinab ko‘rish imkoniyati.'
      }
    ],
    timelinePhases: [
      { phase: '1-Hafta', name: 'Biznes maqsadlari, raqobatchilar tahlili va Wireframe sxemalar' },
      { phase: '2-3 Hafta', name: 'Figma Dizayn tizimi, asosiy sahifalar va UI vizuallashtirish' },
      { phase: '4-5 Hafta', name: 'Mobil versiyalar, interaktiv prototip va foydalanuvchi testlari' },
      { phase: '6-Hafta', name: 'Dasturchilarga to‘liq topshirish (Design handoff & Tokens)' }
    ],
    stack: ['Figma', 'Framer', 'ProtoPie', 'Design Tokens', 'Miro', 'WCAG 2.1'],
    caseLink: 'portfolio.html'
  },
  devops: {
    key: 'devops',
    badge: 'KUBERNETES // ZERO-DOWNTIME',
    title: 'DevOps, Cloud & Kiberxavfsizlik',
    desc: 'Dasturingizning 24/7 rejimida to‘xtovsiz ishlashini kafolatlovchi avtomatlashtirilgan CI/CD quvurlari, Kubernetes klasterlari va xavfsizlik himoyasi.',
    heroMetric: '0 sec Downtime | -40% Xarajat',
    metrics: [
      { num: '0 sec', label: 'Deploy Downtime' },
      { num: '-40%', label: 'Server Xarajati Kamayishi' },
      { num: '24/7', label: 'Avtomatlashtirilgan Telemetriya' },
      { num: '100%', label: 'Terraform Infratuzilma' }
    ],
    architectureDetails: [
      {
        title: 'Zero-Downtime CI/CD Quvurlari',
        text: 'GitLab CI / GitHub Actions orqali yangi kodni serverni 1 soniya ham to‘xtatmasdan avtomatik testlash va yangilash (Rolling / Blue-Green Deploy).'
      },
      {
        title: 'Kubernetes (K8s) & Auto-Scaling',
        text: 'Foydalanuvchilar oqimi keskin ko‘payganda server quvvatini avtomatik ko‘paytirish (HPA) va yuklama pasayganda xarajatlarni tejash.'
      },
      {
        title: '24/7 Telemetriya & Kiberxavfsizlik',
        text: 'Prometheus, Grafana, ELK log tizimi va DAST/SAST avtomatlashtirilgan xavfsizlik zaifliklari monitoringi.'
      }
    ],
    timelinePhases: [
      { phase: '1-Hafta', name: 'Mavjud infratuzilma auditi, xavfsizlik tahlili va arxitektura rejasi' },
      { phase: '2-3 Hafta', name: 'Terraform IaC, Docker konteynerlashtirish va CI/CD avtomatlashtirish' },
      { phase: '4-5 Hafta', name: 'Kubernetes klasteri sozlash, Auto-scaling va Backup tizimi' },
      { phase: '6-8 Hafta', name: 'Monitoring, alertlar sozlash, yuklama sinovlari va topshirish' }
    ],
    stack: ['Kubernetes (K8s)', 'Docker', 'Terraform', 'AWS / GCP', 'GitLab CI/CD', 'Prometheus', 'Grafana', 'Vault'],
    caseLink: 'portfolio.html'
  },
  consulting: {
    key: 'consulting',
    badge: 'TECHNICAL DEBT SCAN // CTO-AS-A-SERVICE',
    title: 'IT Konsalting & Arxitektura Auditi',
    desc: 'Mavjud kodingiz, ma\'lumotlar bazangiz va infratuzilmangizni chuqur audit qilib, unumdorlikni 3-5 baravarga oshirish bo‘yicha aniq Roadmap.',
    heroMetric: '3-5x Tezlashuv | 14 Kun Roadmap',
    metrics: [
      { num: '3-5x', label: 'Tizim Unumdorligi O‘sishi' },
      { num: '100%', label: 'Xavfsizlik Zaifliklari Auditi' },
      { num: '14 Kun', label: 'To‘liq Arxitektura Roadmap' },
      { num: 'CTO', label: 'Strategik Texnik Rahbarlik' }
    ],
    architectureDetails: [
      {
        title: 'Texnik Qarz & Xavfsizlik Auditi',
        text: 'SonarQube va profil vositalari yordamida koddagi zaifliklar, sekin so‘rovlar (slow queries) va arxitektura xatolarini to‘liq aniqlash.'
      },
      {
        title: 'Legacy Tizimlarni Modernizatsiya Qilish',
        text: 'Eski monolit dasturlarni biznesni to‘xtatmasdan bosqichma-bosqich zamonaviy mikroservislarga ko‘chirish strategiyasi.'
      },
      {
        title: 'CTO-as-a-Service & Jamoa Auditi',
        text: 'Dasturchilar jamoangiz samaradorligini oshirish, kod sifatini nazorat qilish va kompaniyangiz texnologik strategiyasini shakllantirish.'
      }
    ],
    timelinePhases: [
      { phase: '1-3 Kun', name: 'Repozitoriyalar, DB va server infratuzilmasiga kirish va dastlabki skan' },
      { phase: '4-7 Kun', name: 'Yuklama profilash, ma\'lumotlar bazasi indekslari va xavfsizlik auditi' },
      { phase: '8-11 Kun', name: 'Kamchiliklar hisoboti va arxitekturani yaxshilash yechimlari (RFC)' },
      { phase: '12-14 Kun', name: 'Rahbariyatga taqdimot va 6 oylik bosqichma-bosqich Roadmap topshirish' }
    ],
    stack: ['Architecture RFC', 'SonarQube', 'Load Profiling', 'DB Indexing Analysis', 'Security Auditing'],
    caseLink: 'portfolio.html'
  }
};

/* ============================================================
   ESTIMATOR CONFIGURATION
   ============================================================ */
const estimatorData = {
  types: {
    enterprise: {
      name: 'Korporativ ERP / CRM / B2B Tizim',
      stack: 'Go / Node.js + PostgreSQL + Redis + React/Next.js + Docker',
      baseTimeline: '8 - 14 hafta',
      chipKey: 'enterprise'
    },
    highload: {
      name: 'Yuqori Yuklamali Backend & Shlyuz',
      stack: 'Go / C# (.NET 8) + Kafka + Redis Cluster + PostgreSQL + Kubernetes',
      baseTimeline: '6 - 12 hafta',
      chipKey: 'highload'
    },
    web: {
      name: 'Web & Bulut Platformasi (SaaS)',
      stack: 'Next.js 14 + React + TypeScript + Node.js/Go + AWS CloudFront',
      baseTimeline: '5 - 10 hafta',
      chipKey: 'web'
    },
    mobile: {
      name: 'Mobil Ilova (iOS & Android)',
      stack: 'Flutter (Dart) yoki Swift & Kotlin + REST/gRPC API + Firebase',
      baseTimeline: '6 - 12 hafta',
      chipKey: 'mobile'
    },
    design: {
      name: 'UI/UX & Dizayn-Tizim (Figma)',
      stack: 'Figma Systems + Framer + ProtoPie + Design Tokens',
      baseTimeline: '3 - 6 hafta',
      chipKey: 'design'
    },
    devops: {
      name: 'Cloud Infratuzilma & DevOps',
      stack: 'Kubernetes + Terraform + AWS/GCP + CI/CD GitLab + Prometheus',
      baseTimeline: '3 - 8 hafta',
      chipKey: 'devops'
    },
    consulting: {
      name: 'IT Konsalting & Arxitektura Auditi',
      stack: 'Architecture RFC + Security Scan + Load Profiling + DB Indexing',
      baseTimeline: '2 - 4 hafta',
      chipKey: 'consulting'
    }
  }
};

const currentEstimatorState = {
  type: 'enterprise',
  scale: 'growth',
  model: 'fixed'
};

/* ============================================================
   DOM HELPERS & FUNCTIONS
   ============================================================ */

/**
 * Select a chip in the contact form
 */
function selectContactChip(serviceIdentifier) {
  if (!serviceIdentifier) return;
  const normalized = serviceIdentifier.toLowerCase().replace(/[^a-z0-9]/g, '');
  const chips = document.querySelectorAll('.contact-chip');

  chips.forEach(chip => {
    const chipKey = (chip.dataset.service || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    const chipText = (chip.textContent || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    if (chipKey === normalized || chipText.includes(normalized) || normalized.includes(chipKey)) {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
    }
  });
}

/**
 * Filter service cards with animation
 */
window.filterServices = function (filter, clickedBtn) {
  const filterButtons = document.querySelectorAll('.service-filter-btn');
  filterButtons.forEach(b => b.classList.remove('active'));

  if (clickedBtn) {
    clickedBtn.classList.add('active');
  } else {
    const matchingBtn = document.querySelector(`.service-filter-btn[data-filter="${filter}"]`);
    matchingBtn?.classList.add('active');
  }

  const cards = document.querySelectorAll('.service-modular-card');
  let visibleCount = 0;

  cards.forEach(card => {
    const category = (card.getAttribute('data-category') || '').trim().toLowerCase();
    const targetFilter = (filter || 'all').trim().toLowerCase();
    const matches = (targetFilter === 'all' || category === targetFilter || category.includes(targetFilter));

    if (matches) {
      card.style.display = 'flex';
      card.classList.remove('is-hidden');
      visibleCount++;
    } else {
      card.style.display = 'none';
      card.classList.add('is-hidden');
    }
  });

  if (typeof ScrollTrigger !== 'undefined' && ScrollTrigger.refresh) {
    ScrollTrigger.refresh();
  }
};

/**
 * Open the Technical Specification Modal
 */
function openSpecModal(serviceKey) {
  const spec = SERVICE_SPECS[serviceKey];
  if (!spec) return;

  const modalOverlay = document.getElementById('serviceSpecModalOverlay');
  if (!modalOverlay) return;

  // Populate Header
  const badgeEl = document.getElementById('specModalBadge');
  const titleEl = document.getElementById('specModalTitle');
  const descEl = document.getElementById('specModalDesc');
  const orderBtn = document.getElementById('specModalOrderBtn');

  if (badgeEl) badgeEl.textContent = spec.badge;
  if (titleEl) titleEl.textContent = spec.title;
  if (descEl) descEl.textContent = spec.desc;

  // Populate Metrics Grid
  const metricsContainer = document.getElementById('specModalMetrics');
  if (metricsContainer) {
    metricsContainer.innerHTML = spec.metrics.map(m => `
      <div class="spec-metric-box">
        <span class="spec-metric-num">${m.num}</span>
        <span class="spec-metric-label">${m.label}</span>
      </div>
    `).join('');
  }

  // Populate Architecture Highlights
  const archContainer = document.getElementById('specModalArchList');
  if (archContainer) {
    archContainer.innerHTML = spec.architectureDetails.map(item => `
      <div class="spec-arch-item">
        <div class="spec-arch-head">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1855F4" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <h4>${item.title}</h4>
        </div>
        <p>${item.text}</p>
      </div>
    `).join('');
  }

  // Populate Delivery Phases
  const roadmapContainer = document.getElementById('specModalRoadmap');
  if (roadmapContainer) {
    roadmapContainer.innerHTML = spec.timelinePhases.map((p, idx) => `
      <div class="spec-phase-row">
        <span class="spec-phase-num">0${idx + 1}</span>
        <div class="spec-phase-body">
          <span class="spec-phase-tag">${p.phase}</span>
          <span class="spec-phase-text">${p.name}</span>
        </div>
      </div>
    `).join('');
  }

  // Populate Stack Tags
  const stackContainer = document.getElementById('specModalStackTags');
  if (stackContainer) {
    stackContainer.innerHTML = spec.stack.map(s => `<span class="spec-stack-pill">${s}</span>`).join('');
  }

  // Wire Order Button
  if (orderBtn) {
    orderBtn.onclick = () => {
      closeSpecModal();
      selectContactChip(serviceKey);
      const msgField = document.getElementById('contactMessage');
      if (msgField) {
        msgField.value = `Xizmat: ${spec.title}\nTalab: Ushbu arxitektura va spetsifikatsiya bo'yicha konsultatsiya yoki tijoriy taklif kerak.`;
      }
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        scrollToElement(contactSection);
      }
    };
  }

  // Show Modal
  modalOverlay.classList.add('is-open');
  modalOverlay.setAttribute('aria-hidden', 'false');
  document.documentElement.style.overflow = 'hidden';

  const closeBtn = document.getElementById('serviceSpecModalClose');
  closeBtn?.focus();
}

/**
 * Close the Technical Specification Modal
 */
function closeSpecModal() {
  const modalOverlay = document.getElementById('serviceSpecModalOverlay');
  if (!modalOverlay) return;

  modalOverlay.classList.remove('is-open');
  modalOverlay.setAttribute('aria-hidden', 'true');
  document.documentElement.style.overflow = '';
}

/**
 * Update the Interactive Estimator output
 */
function updateEstimatorUI() {
  const typeInfo = estimatorData.types[currentEstimatorState.type] || estimatorData.types.enterprise;
  const projNameEl = document.getElementById('estProjName');
  const stackEl = document.getElementById('estStackVal');
  const timelineEl = document.getElementById('estTimelineVal');

  if (projNameEl) projNameEl.textContent = typeInfo.name;
  if (stackEl) stackEl.textContent = typeInfo.stack;

  let timeline = typeInfo.baseTimeline;
  if (currentEstimatorState.scale === 'mvp') {
    timeline = '3 - 6 hafta';
  } else if (currentEstimatorState.scale === 'enterprise') {
    timeline = '12 - 24 hafta';
  }
  if (timelineEl) timelineEl.textContent = timeline;
}

/**
 * Initialize all Services Page components
 */
function initServicesPage() {
  // 1. Filter Buttons
  const filterButtons = document.querySelectorAll('.service-filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const filter = btn.getAttribute('data-filter') || 'all';
      window.filterServices(filter, btn);
    });
  });

  // 2. Technical Spec Modal Triggers
  document.querySelectorAll('[data-spec-trigger]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceKey = btn.getAttribute('data-spec-trigger');
      if (serviceKey) {
        openSpecModal(serviceKey);
      }
    });
  });

  // 3. Modal Close Triggers & Esc Key
  const modalCloseBtn = document.getElementById('serviceSpecModalClose');
  const modalOverlay = document.getElementById('serviceSpecModalOverlay');

  modalCloseBtn?.addEventListener('click', closeSpecModal);
  modalOverlay?.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeSpecModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay?.classList.contains('is-open')) {
      closeSpecModal();
    }
  });

  // 4. Action button prefill
  document.querySelectorAll('.card-action-btn[data-service-select]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const serviceName = btn.dataset.serviceSelect;
      if (serviceName) {
        selectContactChip(serviceName);
      }
    });
  });

  // 5. Estimator Controls
  document.querySelectorAll('[data-est-group]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const group = btn.dataset.estGroup;
      const val = btn.dataset.estVal;

      document.querySelectorAll(`[data-est-group="${group}"]`).forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      currentEstimatorState[group] = val;
      updateEstimatorUI();
    });
  });

  const applyEstimatorBtn = document.getElementById('applyEstimatorBtn');
  if (applyEstimatorBtn) {
    applyEstimatorBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const typeInfo = estimatorData.types[currentEstimatorState.type] || estimatorData.types.enterprise;
      const messageField = document.getElementById('contactMessage');

      selectContactChip(currentEstimatorState.type);

      if (messageField) {
        messageField.value = `Loyiha Yo'nalishi: ${typeInfo.name}\nKo'lami: ${currentEstimatorState.scale.toUpperCase()}\nTanlangan Hamkorlik: ${currentEstimatorState.model.toUpperCase()}\nTavsiya etilgan stek: ${typeInfo.stack}`;
      }

      const contactSection = document.getElementById('contact');
      if (contactSection) {
        scrollToElement(contactSection);
      }
    });
  }

  // 6. FAQ Accordion
  const faqTriggers = document.querySelectorAll('.faq-trigger');
  faqTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const parentItem = trigger.closest('.faq-item');
      if (!parentItem) return;
      const isCurrentlyOpen = parentItem.classList.contains('open');

      document.querySelectorAll('.faq-item.open').forEach(item => {
        if (item !== parentItem) {
          item.classList.remove('open');
          item.querySelector('.faq-trigger')?.setAttribute('aria-expanded', 'false');
        }
      });

      if (isCurrentlyOpen) {
        parentItem.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
      } else {
        parentItem.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
      }

      if (typeof ScrollTrigger !== 'undefined' && ScrollTrigger.refresh) {
        setTimeout(() => ScrollTrigger.refresh(), 320);
      }
    });
  });

  // Initial update
  updateEstimatorUI();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initServicesPage);
} else {
  initServicesPage();
}

