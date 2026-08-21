/* ============================================================
   TOPDEV — PORTFOLIO PAGE JAVASCRIPT (portfolio.js)
   Stacking Cards, Project Filter & Technical Case Study Modals
   ============================================================ */

'use strict';

/* --- Technical Case Study Database --- */
const CASE_STUDIES = {
  paycore: {
    badge: 'FINTECH & MILLIY KLIRING',
    title: 'PayCore — 15,000 TPS Kliring Dvigateli',
    subtitle: 'Ultra-past kechikishli (Sub-5ms), real vaqtda ikki tomonlama auditga ega to‘lov shlyuzi.',
    metrics: [
      { label: 'Eng Yuqori TPS', val: '15,000 TPS' },
      { label: 'P99 Kechikish', val: '< 4.2ms' },
      { label: 'SLA Barqarorlik', val: '99.999%' }
    ],
    problem: 'Banklararo to‘lovlarni qabul qilishda tranzaksiyalar soni keskin oshganda an\'anaviy monolit billing tizimlari navbatda qotib qolardi (Race conditions) va kechikish 800ms dan oshar edi.',
    solution: 'Golang concurrency primitivlari, Apache Kafka taqsimlangan loglari va xotirada ishlovchi Redis Cluster asosida asinxron kliring konveyeri qurildi. PostgreSQL da sharding va optimistik qulflash joriy qilindi.',
    stack: ['Go (Golang)', 'Apache Kafka', 'PostgreSQL (Citus)', 'Redis Cluster', 'Docker', 'Kubernetes', 'Prometheus & Grafana'],
    consultUrl: 'consultation.html?topic=High-Load%20%26%20Backend&notes=PayCore%20shlyuzi%20kabi%20tizim%20haqida'
  },
  apexsupply: {
    badge: 'ENTERPRISE ERP & LOGISTIKA',
    title: 'ApexSupply — Taqsimlangan Ta\'minot Zanjiri ERP',
    subtitle: '120+ logistika markazlarida real vaqt zaxiralar prognozi va sovuq zanjir telemetriyasi.',
    metrics: [
      { label: 'Faol Markazlar', val: '120+' },
      { label: 'Kunlik Hodisalar', val: '4.8M+' },
      { label: 'Marshrut Samaradorligi', val: '+42%' }
    ],
    problem: 'Ko‘p omborli logistikada qog‘ozbozlik, tovar qoldiqlarining kech yangilanishi va mahsulotlarning transportda buzilish xavfi kompaniyaga yillik katta zarar keltirardi.',
    solution: 'Event-driven mikroservislar arxitekturasi va IoT datchiklari bilan integratsiyalangan avtomatlashtirilgan ERP platformasi yaratildi. Har bir fura harorati va ombor qoldig‘i 1 soniya ichida markaziy serverga kelib tushadi.',
    stack: ['Node.js', 'Nuxt.js (Vue 3)', 'PostgreSQL', 'RabbitMQ', 'Docker', 'IoT MQTT Protocol'],
    consultUrl: 'consultation.html?topic=ERP%20%26%20CRM%20Tizimlari&notes=ApexSupply%20kabi%20ERP%20tizimi%20haqida'
  },
  nexus: {
    badge: 'CORE BANKING & XAVFSIZLIK',
    title: 'NexusBank — Bulutli Core Banking Ilovasi',
    subtitle: '850K+ kunlik faol foydalanuvchiga ega Zero-Trust arxitekturadagi mobil va veb bank.',
    metrics: [
      { label: 'Faol DAU', val: '850,000+' },
      { label: 'Migratsiya Downtime', val: '0 Sekund' },
      { label: 'Ma\'lumot Butunligi', val: '100%' }
    ],
    problem: 'Eski server infratuzilmasi va monolit arxitektura mobil foydalanuvchilar oqimiga dosh berolmas, har bir ilova yangilanishi paytida tizim bir necha soatlab o‘chib qolardi.',
    solution: 'Kubernetes klasterida ishlovchi .NET Core va React asosidagi Zero-Downtime mikroservislarga o‘tildi. Biometrik xavfsizlik va bank darajasidagi ISO 27001 shifrlash joriy etildi.',
    stack: ['.NET Core 8', 'React', 'PostgreSQL', 'Kubernetes', 'OAuth2 / mTLS', 'CyberOps Audit'],
    consultUrl: 'consultation.html?topic=Mobil%20%26%20Web%20Ilovalar&notes=NexusBank%20kabi%20banking%20yechimi%20haqida'
  },
  mediflow: {
    badge: 'TELEMEDITSINA & BIOMETRIYA',
    title: 'MediFlow — Klinik Telemeditsina Platformasi',
    subtitle: 'Shifrlangan EHR elektron kartalari va <120ms kechikishli klinik WebRTC video konsultatsiya.',
    metrics: [
      { label: 'Konsultatsiyalar', val: '2.4M+' },
      { label: 'WebRTC RTT', val: '< 120ms' },
      { label: 'Standart', val: 'HIPAA & E2E' }
    ],
    problem: 'Chekka hududlardagi bemorlar va yetakchi shifokorlar o‘rtasida sifatli video aloqa, tahlil natijalarini xavfsiz almashish va avtomatik retsept berish tizimi yo‘q edi.',
    solution: 'FastAPI va WebRTC MediaSoup serverlari asosida past internet tezligida ham barqaror ishlovchi, EKG telemetriyasi va shifrlangan tibbiy yozuvlar bilan boyitilgan platforma ishga tushirildi.',
    stack: ['FastAPI (Python)', 'WebRTC (MediaSoup)', 'React', 'PostgreSQL', 'E2E Encryption', 'Redis'],
    consultUrl: 'consultation.html?topic=Mobil%20%26%20Web%20Ilovalar&notes=MediFlow%20kabi%20telemeditsina%20tizimi%20haqida'
  },
  cloudsentinel: {
    badge: 'SECURITYOPS & KIBERXAVFSIZLIK',
    title: 'CloudSentinel — Avtonom SIEM & eBPF Monitoring',
    subtitle: '50 GB/s tarmoq paketlarini yadro darajasida tahlil qilib, 10ms da tahdidlarni to‘xtatuvchi tizim.',
    metrics: [
      { label: 'Tarmoq Oqimi', val: '50 GB/s' },
      { label: 'Aniqlash Vaqti', val: '< 10ms' },
      { label: 'Agent Yuklamasi', val: '0%' }
    ],
    problem: 'Katta server klasterlarida an\'anaviy xavfsizlik agentlari protsessorni 20-30% ga band qilib, server unumdorligini tushirib yuborardi.',
    solution: 'Linux Kernel eBPF texnologiyasi va Rust tilida yozilgan filtrlar orqali operatsion tizim darajasida xavfsizlik nazorati o‘rnatildi. Barcha loglar ClickHouse analitik bazasiga yuboriladi.',
    stack: ['Rust', 'Linux eBPF', 'ClickHouse', 'Apache Kafka', 'Grafana', 'Docker'],
    consultUrl: 'consultation.html?topic=Tizim%20%26%20Kod%20Auditi&notes=CloudSentinel%20kabi%20xavfsizlik%20tizimi%20haqida'
  },
  tradesphere: {
    badge: 'HFT & YUQORI CHASTOTALI SAVDO',
    title: 'TradeSphere — Yuqori Chastotali Likvidlik Terminali',
    subtitle: '100 mikrosekund kechikish bilan soniyasiga 250,000 buyurtmalarni moslashtiruvchi HFT dvigateli.',
    metrics: [
      { label: 'Buyurtmalar / Sek', val: '250,000' },
      { label: 'Matching Latency', val: '< 100µs' },
      { label: 'SLA Ishonchliligi', val: '99.999%' }
    ],
    problem: 'Birja savdolarida mikro-kechikishlar (microsecond lag) moliyaviy yo‘qotishlarga va buyurtmalar navbatda xato bajarilishiga olib kelardi.',
    solution: 'C++20 standartida Memory-Mapped I/O va Lock-Free navbatlar asosida yaratilgan Matching Engine. WebSocket Layer-3 orqali mijozlarga real vaqt narxlar oqimi yetkaziladi.',
    stack: ['C++20', 'WebSocket L3', 'gRPC', 'PostgreSQL', 'Redis', 'Linux Kernel Tuning'],
    consultUrl: 'consultation.html?topic=High-Load%20%26%20Backend&notes=TradeSphere%20kabi%20savdo%20dvigateli%20haqida'
  }
};

/* --- Case Study Modal Management --- */
function initCaseStudyModals() {
  const overlay = document.getElementById('caseModalOverlay');
  const closeBtn = document.getElementById('caseModalClose');
  const badgeEl = document.getElementById('modalProjectBadge');
  const titleEl = document.getElementById('modalProjectTitle');
  const subtitleEl = document.getElementById('modalProjectSubtitle');
  const metricsEl = document.getElementById('modalProjectMetrics');
  const problemEl = document.getElementById('modalProjectProblem');
  const solutionEl = document.getElementById('modalProjectSolution');
  const stackEl = document.getElementById('modalProjectStack');
  const consultBtn = document.getElementById('modalConsultBtn');

  if (!overlay) return;

  const openModal = (caseId) => {
    const data = CASE_STUDIES[caseId];
    if (!data) return;

    badgeEl.textContent = data.badge;
    titleEl.textContent = data.title;
    subtitleEl.textContent = data.subtitle;
    problemEl.textContent = data.problem;
    solutionEl.textContent = data.solution;
    consultBtn.setAttribute('href', data.consultUrl);

    // Populate Metrics
    metricsEl.innerHTML = data.metrics.map(m => `
      <div class="case-metric-box">
        <span class="case-metric-val">${m.val}</span>
        <span class="case-metric-lbl">${m.label}</span>
      </div>
    `).join('');

    // Populate Tech Stack
    stackEl.innerHTML = data.stack.map(s => `<span>${s}</span>`).join('');

    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    document.documentElement.style.overflow = 'hidden';
    closeBtn?.focus();
  };

  const closeModal = () => {
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    document.documentElement.style.overflow = '';
  };

  document.querySelectorAll('.open-case-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const caseId = btn.getAttribute('data-case-id');
      if (caseId) openModal(caseId);
    });
  });

  closeBtn?.addEventListener('click', closeModal);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
      closeModal();
    }
  });
}

/* --- Portfolio Stacking & Filtering Logic --- */
function renderPortfolioStacking() {
  const stackCards = document.querySelectorAll('.portfolio-stack-container .stack-card-item');
  stackCards.forEach(c => { c.style.transform = ''; });
}

function onPortfolioScroll() {
  if (!portfolioTicking) {
    requestAnimationFrame(renderPortfolioStacking);
    portfolioTicking = true;
  }
}

window.filterProjects = function (filter, clickedBtn) {
  const filterButtons = document.querySelectorAll('.portfolio-hero .filter-btn');
  filterButtons.forEach(b => b.classList.remove('active'));

  if (clickedBtn) {
    clickedBtn.classList.add('active');
  } else {
    const matchingBtn = document.querySelector(`.portfolio-hero .filter-btn[data-filter="${filter}"]`);
    matchingBtn?.classList.add('active');
  }

  const stackCards = document.querySelectorAll('.portfolio-stack-container .stack-card-item');
  let visibleIndex = 0;

  stackCards.forEach(card => {
    const category = (card.getAttribute('data-category') || '').trim().toLowerCase();
    const targetFilter = (filter || 'all').trim().toLowerCase();
    const matches = (targetFilter === 'all' || category === targetFilter || category.includes(targetFilter));

    if (matches) {
      card.style.display = 'block';
      card.classList.remove('is-hidden');
      const topOffset = 96 + (visibleIndex * 18);
      card.style.setProperty('--stack-top', `${topOffset}px`);
      card.style.zIndex = visibleIndex + 1;
      visibleIndex++;
    } else {
      card.style.display = 'none';
      card.classList.add('is-hidden');
      card.style.transform = '';
    }
  });

  requestAnimationFrame(renderPortfolioStacking);
  if (typeof ScrollTrigger !== 'undefined') {
    ScrollTrigger.refresh?.();
  }
};

function initPortfolioPage() {
  const portfolioContainer = document.querySelector('.portfolio-stack-container');
  if (!portfolioContainer) return;

  initCaseStudyModals();

  const filterButtons = document.querySelectorAll('.portfolio-hero .filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const filter = btn.getAttribute('data-filter') || 'all';
      window.filterProjects(filter, btn);
    });
  });

  window.addEventListener('scroll', onPortfolioScroll, { passive: true });
  window.addEventListener('resize', onPortfolioScroll, { passive: true });

  window.filterProjects('all');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPortfolioPage);
} else {
  initPortfolioPage();
}

