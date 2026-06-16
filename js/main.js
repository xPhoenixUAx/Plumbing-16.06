(function () {
  const config = window.SITE_CONFIG || {};
  const services = [
    {
      slug: "drain-cleaning",
      title: "Drain Cleaning",
      eyebrow: "Flow Restoration",
      short: "Clear clogged, slow, or noisy drains with professional inspection and cleaning support.",
      intro:
        "Drain cleaning helps restore water flow, remove buildup, and reduce the chance of repeat clogs in kitchens, bathrooms, laundry rooms, basements, and commercial spaces.",
      image: "../img/generated/drain-cleaning.webp",
      cardImage: "img/generated/drain-cleaning.webp",
      included: [
        "Kitchen, bathroom, floor, and utility drain clearing",
        "Slow-drain diagnosis and clog location",
        "Grease, soap residue, hair, and debris removal",
        "Preventive recommendations for recurring blockages"
      ],
      options: ["Cable drain cleaning", "Hydro jetting referral", "Camera inspection referral", "Preventive maintenance plan"],
      bestFor: ["Standing water", "Repeated clogs", "Bad drain odors", "Gurgling or slow fixtures"],
      process: [
        "Review symptoms and affected fixtures",
        "Inspect accessible drains and cleanout points",
        "Match the issue with the right clearing method",
        "Test drainage and explain prevention steps"
      ],
      details:
        "A drain issue can point to a simple clog or a deeper line problem. Customers should avoid harsh chemical overuse and request a provider evaluation when clogs return quickly.",
      faqs: [
        ["Can emergency drain cleaning be requested?", "Yes. Urgent backups and blocked drains can be routed for emergency provider contact."],
        ["Will every clog need hydro jetting?", "No. Many clogs can be cleared with simpler tools. Hydro jetting is usually considered for heavy buildup or recurring issues."],
        ["Can a provider inspect the line?", "Many providers offer or recommend camera inspection when the cause is unclear."]
      ],
      related: ["leak-detection", "pipe-repair", "emergency-plumbing"]
    },
    {
      slug: "leak-detection",
      title: "Leak Detection",
      eyebrow: "Hidden Water Issues",
      short: "Find hidden leaks before they cause expensive water damage or mold concerns.",
      intro:
        "Leak detection focuses on identifying the source of suspicious moisture, pressure drops, staining, sounds, or unexplained water bills.",
      image: "../img/generated/leak-detection.webp",
      cardImage: "img/generated/leak-detection.webp",
      included: [
        "Visible fixture and pipe checks",
        "Water pressure and meter behavior review",
        "Moisture and wall/floor symptom assessment",
        "Recommendations for repair or further diagnostics"
      ],
      options: ["Acoustic leak detection", "Thermal/moisture scan referral", "Slab leak evaluation", "Fixture leak troubleshooting"],
      bestFor: ["Unexplained water bills", "Wet spots", "Moldy smells", "Low pressure or running-water sounds"],
      process: [
        "Collect details about water use and symptoms",
        "Check common leak locations",
        "Narrow the source with appropriate diagnostics",
        "Recommend repair scope and next steps"
      ],
      details:
        "Fast leak investigation can reduce damage. If water is active near electrical systems, customers should treat the situation as urgent and follow provider safety guidance.",
      faqs: [
        ["Can leaks be found without opening walls?", "Often, non-invasive checks can narrow the source before any opening is considered."],
        ["What if the leak is underground?", "Providers may recommend specialized detection or excavation only after diagnostics indicate the likely source."],
        ["Should water be shut off?", "If water is actively damaging the property, shutting off the supply may be the safest immediate step."]
      ],
      related: ["pipe-repair", "emergency-plumbing", "bathroom-plumbing"]
    },
    {
      slug: "water-heater-service",
      title: "Water Heater Service",
      eyebrow: "Hot Water Support",
      short: "Repair, maintenance, and replacement support for tank and tankless water heaters.",
      intro:
        "Water heater service helps restore reliable hot water, improve efficiency, and determine whether repair or replacement is the better path.",
      image: "../img/generated/water-heater.webp",
      cardImage: "img/generated/water-heater.webp",
      included: [
        "No-hot-water and inconsistent temperature checks",
        "Leak, valve, and connection assessment",
        "Tank flushing and maintenance guidance",
        "Replacement sizing and installation coordination"
      ],
      options: ["Tank water heater", "Tankless water heater", "Gas or electric systems", "Expansion tank and valve checks"],
      bestFor: ["Cold showers", "Leaking tank", "Rust-colored water", "Old or inefficient equipment"],
      process: [
        "Confirm heater type and symptoms",
        "Inspect accessible components",
        "Discuss repair, maintenance, or replacement options",
        "Coordinate installation or service scheduling"
      ],
      details:
        "Water heater work may involve gas, electric, venting, and permit requirements. Customers should verify provider credentials for their system type.",
      faqs: [
        ["Can a leaking water heater be repaired?", "Some leaks involve fittings or valves, but tank leaks often require replacement."],
        ["How long does replacement take?", "Many standard replacements can be completed in a day, depending on access, parts, code needs, and provider availability."],
        ["Do providers work on tankless heaters?", "Yes, many providers support tankless diagnostics, flushing, repair, and replacement."]
      ],
      related: ["emergency-plumbing", "pipe-repair", "bathroom-plumbing"]
    },
    {
      slug: "emergency-plumbing",
      title: "Emergency Plumbing",
      eyebrow: "Urgent Response",
      short: "Get connected for burst pipes, major leaks, backups, and urgent plumbing failures.",
      intro:
        "Emergency plumbing support is designed for situations where fast action can reduce property damage, safety risks, or serious disruption.",
      image: "../img/generated/emergency-plumbing.webp",
      cardImage: "img/generated/emergency-plumbing.webp",
      included: [
        "Burst or leaking pipe response",
        "Sewer or drain backup coordination",
        "Overflowing fixture support",
        "Urgent water shutoff and repair guidance"
      ],
      options: ["Same-day provider routing", "After-hours contact", "Temporary stabilization", "Follow-up repair planning"],
      bestFor: ["Burst pipes", "Active flooding", "Sewer backup", "No usable plumbing"],
      process: [
        "Gather urgent details and property location",
        "Identify immediate safety considerations",
        "Route the request to available local providers",
        "Plan permanent repair after stabilization"
      ],
      details:
        "Emergency work may carry different pricing and availability. Customers should ask for scope, fees, and provider credentials before approving work.",
      faqs: [
        ["Is emergency help available at night?", "Emergency requests can be submitted 24/7 and routed based on local provider availability."],
        ["What should I do before help arrives?", "If safe, shut off the water source and avoid affected electrical areas."],
        ["Are prices guaranteed?", "No. Independent providers set their own pricing, availability, and service terms."]
      ],
      related: ["leak-detection", "pipe-repair", "drain-cleaning"]
    },
    {
      slug: "pipe-repair",
      title: "Pipe Repair & Replacement",
      eyebrow: "Durable Plumbing Lines",
      short: "Repair damaged pipes or coordinate replacement for aging, leaking, or corroded lines.",
      intro:
        "Pipe repair and replacement services address leaks, corrosion, pressure problems, damaged sections, and outdated plumbing lines.",
      image: "../img/generated/pipe-repair.webp",
      cardImage: "img/generated/pipe-repair.webp",
      included: [
        "Visible pipe leak repair",
        "Copper, PEX, PVC, or drain line support",
        "Section replacement recommendations",
        "Repiping and upgrade coordination"
      ],
      options: ["Spot repair", "Partial replacement", "Whole-home repipe referral", "Pressure and valve updates"],
      bestFor: ["Frequent leaks", "Corroded pipes", "Low pressure", "Renovations or aging homes"],
      process: [
        "Inspect the damaged area and pipe type",
        "Determine whether repair or replacement is appropriate",
        "Discuss access, materials, and timeline",
        "Test repaired lines and review maintenance guidance"
      ],
      details:
        "Pipe work can involve walls, floors, crawlspaces, or underground lines. Providers should explain access needs and restoration limits before work begins.",
      faqs: [
        ["Can only one pipe section be replaced?", "Often, yes. Larger replacement is usually considered when damage is widespread."],
        ["Which pipe material is best?", "That depends on local code, water conditions, location, and budget."],
        ["Will walls need to be opened?", "Sometimes. Providers should explain access needs before starting invasive work."]
      ],
      related: ["leak-detection", "emergency-plumbing", "water-heater-service"]
    },
    {
      slug: "bathroom-plumbing",
      title: "Bathroom Plumbing",
      eyebrow: "Fixture & Remodel Support",
      short: "Support for toilets, sinks, showers, tubs, faucets, fixture upgrades, and bathroom projects.",
      intro:
        "Bathroom plumbing services help repair everyday fixture problems and coordinate upgrades during remodels or replacements.",
      image: "../img/generated/bathroom-plumbing.webp",
      cardImage: "img/generated/bathroom-plumbing.webp",
      included: [
        "Toilet repair and replacement coordination",
        "Faucet, shower, and tub fixture support",
        "Bathroom sink and vanity plumbing",
        "Remodel rough-in and finish plumbing"
      ],
      options: ["Fixture repair", "New fixture installation", "Shower valve support", "Bathroom remodel plumbing"],
      bestFor: ["Running toilets", "Leaky faucets", "New bathrooms", "Fixture upgrades"],
      process: [
        "Review the fixture or project goal",
        "Check existing plumbing compatibility",
        "Coordinate repair, replacement, or remodel support",
        "Test operation and review care instructions"
      ],
      details:
        "Bathroom projects may require matching fixtures, shutoff valves, drain alignment, waterproofing coordination, and code-aware installation.",
      faqs: [
        ["Can providers install customer-purchased fixtures?", "Many can, but they may need to verify compatibility first."],
        ["Do bathroom remodels require permits?", "Permit requirements vary by location and project scope."],
        ["Can a running toilet raise water bills?", "Yes. Even a small continuous leak can waste significant water."]
      ],
      related: ["drain-cleaning", "leak-detection", "water-heater-service"]
    }
  ];
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  const serviceBySlug = new Map(services.map((service) => [service.slug, service]));
  const currentYear = new Date().getFullYear();

  function setText(selector, value) {
    $$(selector).forEach((element) => {
      element.textContent = value || "";
    });
  }

  function setHref(selector, value) {
    $$(selector).forEach((element) => {
      if (value) element.setAttribute("href", value);
    });
  }

  function hydrateConfig() {
    setText("[data-company-name]", config.companyName);
    setText("[data-logo-text]", config.logoText || config.companyName);
    setText("[data-logo-initial]", config.logoInitial || (config.companyName || "H").slice(0, 1));
    setText("[data-company-legal-name]", config.companyLegalName);
    setText("[data-company-id]", config.companyId);
    setText("[data-phone-text]", config.phoneDisplay);
    setText("[data-phone-label]", config.phoneButtonLabel);
    setText("[data-email-text]", config.email);
    setText("[data-email-label]", config.emailButtonLabel || "Email us");
    setText("[data-website-text]", config.website);
    setText("[data-address-text]", [config.addressLine1, config.addressLine2].filter(Boolean).join(", "));
    setText("[data-service-area]", config.serviceArea);
    setText("[data-business-hours]", config.businessHours);
    setText("[data-cta-primary]", config.ctaPrimary);
    setText("[data-cta-secondary]", config.ctaSecondary);
    setText("[data-footer-text-primary]", config.footerTextPrimary);
    setText("[data-footer-text-secondary]", config.footerTextSecondary);
    setText("[data-disclaimer-short]", config.disclaimerShort);
    setText("[data-disclaimer-full]", config.disclaimerFull);
    setText("[data-footer-disclaimer]", config.footerDisclaimer);
    setText("[data-copyright-line]", config.copyrightLine);
    setText("[data-year]", String(currentYear));
    setText("[data-footer-company-line]", `${config.companyName} - ${config.addressLine1}, ${config.addressLine2} - ${config.companyId}`);
    setHref("[data-phone-link]", `tel:${config.phone}`);
    setHref("[data-email-link]", `mailto:${config.email}`);
    setHref("[data-website-link]", `https://${config.website}`);

    if (document.title.includes("{{companyName}}")) {
      document.title = document.title.replace("{{companyName}}", config.companyName);
    } else if (!document.title.includes(config.companyName)) {
      document.title = `${document.title} | ${config.companyName}`;
    }
  }

  function serviceUrl(service) {
    const prefix = document.body.dataset.depth === "inner" ? "" : "services/";
    return `${prefix}${service.slug}.html`;
  }

  function buildHeader() {
    const header = $("#site-header");
    if (!header) return;

    const depth = document.body.dataset.depth === "inner";
    const root = depth ? "../" : "";
    const servicesLinks = services
      .map((service) => `<a href="${root}services/${service.slug}.html">${service.title}<span>${service.eyebrow}</span></a>`)
      .join("");

    header.innerHTML = `
      <a class="brand" href="${root}index.html" aria-label="Home">
        <span class="brand-mark" data-logo-initial>${config.logoInitial || "H"}</span>
        <span data-logo-text>${config.logoText || config.companyName}</span>
      </a>
      <div class="header-control-bar">
        <nav class="nav-shell" aria-label="Main navigation">
          <a href="${root}index.html">Home</a>
          <div class="nav-dropdown">
            <a href="${root}services.html" aria-haspopup="true">Services <i data-lucide="chevron-down"></i></a>
            <div class="dropdown-panel">${servicesLinks}</div>
          </div>
          <a href="${root}about.html">About</a>
          <a href="${root}contact.html">Contact</a>
        </nav>
        <a class="header-email" data-email-link href="mailto:${config.email}">
          <i data-lucide="mail"></i>
          <span data-email-label>${config.emailButtonLabel || "Email us"}</span>
        </a>
        <a class="phone-pill" data-phone-link href="tel:${config.phone}" aria-label="${config.phoneButtonLabel}">
          <i data-lucide="phone-call"></i>
          <span data-phone-label>${config.phoneButtonLabel || "Call us"}</span>
        </a>
      </div>
      <button class="menu-toggle" aria-label="Open menu" aria-expanded="false">
        <i data-lucide="menu"></i>
      </button>
      <div class="mobile-panel" hidden>
        <div class="mobile-brand"><span class="brand-mark" data-logo-initial>${config.logoInitial || "H"}</span><span data-logo-text>${config.logoText || config.companyName}</span></div>
        <a href="${root}index.html">Home</a>
        <button class="mobile-services" type="button" aria-expanded="false">Services <i data-lucide="chevron-down"></i></button>
        <div class="mobile-services-list" hidden>${servicesLinks}</div>
        <a href="${root}about.html">About</a>
        <a href="${root}contact.html">Contact</a>
        <a class="button button-primary" href="${root}contact.html" data-cta-primary>${config.ctaPrimary}</a>
        <a class="mobile-contact" data-email-link href="mailto:${config.email}" data-email-text>${config.email}</a>
      </div>
    `;
  }

  function buildFooter() {
    const footer = $("#site-footer");
    if (!footer) return;

    const depth = document.body.dataset.depth === "inner";
    const root = depth ? "../" : "";
    footer.innerHTML = `
      <section class="newsletter reveal">
        <div>
          <h2>Smart Plumbing Tips Delivered</h2>
          <p>Get plumbing tips, maintenance updates, and service reminders directly in your inbox.</p>
        </div>
        <form class="newsletter-form">
          <label class="sr-only" for="newsletter-email">Email address</label>
          <input id="newsletter-email" type="email" placeholder="Email Address" required>
          <button class="button button-primary" type="submit">Subscribe Now</button>
        </form>
      </section>
      <div class="footer-grid">
        <div>
          <a class="brand brand-footer" href="${root}index.html">
            <span class="brand-mark" data-logo-initial>${config.logoInitial || "H"}</span>
            <span data-logo-text>${config.logoText || config.companyName}</span>
          </a>
          <p data-footer-text-primary>${config.footerTextPrimary}</p>
          <p class="footer-small" data-footer-company-line></p>
        </div>
        <div>
          <h3>Company</h3>
          <a href="${root}index.html">Home</a>
          <a href="${root}services.html">Services</a>
          <a href="${root}about.html">About</a>
          <a href="${root}contact.html">Contact</a>
        </div>
        <div>
          <h3>Our Services</h3>
          ${services.slice(0, 6).map((service) => `<a href="${root}services/${service.slug}.html">${service.title}</a>`).join("")}
        </div>
        <div>
          <h3>Contact Info</h3>
          <a data-phone-link href="tel:${config.phone}"><i data-lucide="phone"></i><span data-phone-text>${config.phoneDisplay}</span></a>
          <a data-email-link href="mailto:${config.email}"><i data-lucide="mail"></i><span data-email-text>${config.email}</span></a>
          <a data-website-link href="https://${config.website}"><i data-lucide="globe"></i><span data-website-text>${config.website}</span></a>
          <p><i data-lucide="map-pin"></i><span data-address-text></span></p>
        </div>
        <div>
          <h3>Legal pages</h3>
          <a href="${root}privacy.html">Privacy Policy</a>
          <a href="${root}terms.html">Terms & Conditions</a>
          <a href="${root}cookie-policy.html">Cookie Policy</a>
        </div>
      </div>
      <p class="footer-disclaimer" data-footer-disclaimer>${config.footerDisclaimer}</p>
      <div class="footer-bottom">
        <span data-copyright-line>${config.copyrightLine}</span>
        <span data-footer-text-secondary>${config.footerTextSecondary}</span>
      </div>
    `;
  }

  function buildServiceCards() {
    $$(".services-grid[data-services-grid]").forEach((grid) => {
      grid.innerHTML = services
        .map(
          (service) => `
          <a class="service-card reveal" href="${serviceUrl(service)}">
            <img src="${service.cardImage}" alt="${service.title}">
            <span class="service-card-overlay"></span>
            <span class="service-card-content">
              <small>${service.eyebrow}</small>
              <strong>${service.title}</strong>
              <span>${service.short}</span>
              <em>Learn More</em>
            </span>
          </a>
        `
        )
        .join("");
    });
  }

  function buildServicesSelect() {
    $$("select[data-service-select]").forEach((select) => {
      select.innerHTML = `<option value="">Select service</option>${services
        .map((service) => `<option value="${service.title}">${service.title}</option>`)
        .join("")}`;
    });
  }

  function list(items) {
    return `<ul class="check-list">${items.map((item) => `<li><i data-lucide="check-circle-2"></i>${item}</li>`).join("")}</ul>`;
  }

  function buildServicePage() {
    const page = $("#service-detail");
    if (!page) return;
    const slug = document.body.dataset.serviceSlug;
    const service = serviceBySlug.get(slug) || services[0];
    const related = service.related.map((item) => serviceBySlug.get(item)).filter(Boolean);

    document.title = `${service.title} | ${config.companyName}`;
    setText("[data-page-title]", service.title);
    setText("[data-page-eyebrow]", service.eyebrow);

    page.innerHTML = `
      <aside class="service-sidebar reveal">
        <div class="side-card">
          <h2>Our Services</h2>
          ${services
            .map(
              (item) =>
                `<a class="${item.slug === service.slug ? "active" : ""}" href="${item.slug}.html">${item.title}<i data-lucide="arrow-up-right"></i></a>`
            )
            .join("")}
        </div>
        <div class="side-card">
          <h2>Need ${service.title}?</h2>
          <p>${config.disclaimerShort}</p>
          <a class="button button-primary" href="../contact.html">Book Appointment</a>
        </div>
      </aside>
      <article class="service-main">
        <img class="detail-image reveal" src="${service.image}" alt="${service.title}">
        <div class="reveal">
          <p class="eyebrow">${service.eyebrow}</p>
          <h1>${service.title}</h1>
          <p class="lead">${service.intro}</p>
        </div>
        <section class="detail-section reveal">
          <h2>What This Service Includes</h2>
          ${list(service.included)}
        </section>
        <section class="feature-grid reveal">
          ${service.options
            .map((option) => `<div class="feature-card"><i data-lucide="badge-check"></i><h3>${option}</h3><p>Matched to the property condition, project scope, and provider availability.</p></div>`)
            .join("")}
        </section>
        <section class="detail-section reveal">
          <h2>When It Is A Good Fit</h2>
          ${list(service.bestFor)}
        </section>
        <section class="process-list reveal">
          <h2>How The Process Works</h2>
          ${service.process
            .map((step, index) => `<div><strong>${String(index + 1).padStart(2, "0")}</strong><span>${step}</span></div>`)
            .join("")}
        </section>
        <section class="detail-section reveal">
          <h2>Important Details</h2>
          <p>${service.details}</p>
        </section>
        <section class="faq-list reveal">
          <h2>Frequently Asked Questions</h2>
          ${service.faqs.map(([q, a]) => faqItem(q, a)).join("")}
        </section>
        <section class="related-services reveal">
          <h2>Related Services</h2>
          <div>${related.map((item) => `<a href="${item.slug}.html">${item.title}<i data-lucide="arrow-right"></i></a>`).join("")}</div>
        </section>
      </article>
    `;
  }

  function faqItem(question, answer) {
    return `<div class="faq-item"><button type="button" aria-expanded="false">${question}<i data-lucide="plus"></i></button><div class="faq-answer"><p>${answer}</p></div></div>`;
  }

  function buildFaqs() {
    $$("[data-faqs]").forEach((target) => {
      target.innerHTML = [
        faqItem("How quickly can a provider respond?", "Response time depends on service type, location, urgency, and local provider availability."),
        faqItem("Are the providers employed by this site?", "No. Providers are independent. This site helps connect customers with local service options."),
        faqItem("Can I request a specific service?", "Yes. Select the service on the contact form and include project details so the request can be routed properly."),
        faqItem("Is pricing guaranteed?", "No. Estimates, fees, and service terms are set by independent providers.")
      ].join("");
    });
  }

  function bindInteractions() {
    const menuToggle = $(".menu-toggle");
    const mobilePanel = $(".mobile-panel");
    if (menuToggle && mobilePanel) {
      menuToggle.addEventListener("click", () => {
        const open = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", String(!open));
        mobilePanel.hidden = open;
        document.body.classList.toggle("menu-open", !open);
      });
    }

    const mobileServices = $(".mobile-services");
    const mobileServicesList = $(".mobile-services-list");
    if (mobileServices && mobileServicesList) {
      mobileServices.addEventListener("click", () => {
        const open = mobileServices.getAttribute("aria-expanded") === "true";
        mobileServices.setAttribute("aria-expanded", String(!open));
        mobileServicesList.hidden = open;
      });
    }

    document.addEventListener("click", (event) => {
      const button = event.target.closest(".faq-item button");
      if (!button) return;
      const item = button.closest(".faq-item");
      const open = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!open));
      item.classList.toggle("open", !open);
    });

    $$("form").forEach((form) => {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const message = $(".success-message", form.parentElement) || $("#form-success");
        if (message) {
          message.innerHTML = `<strong>${config.formSuccessTitle}</strong><span>Thanks for contacting ${config.companyName}. A coordinator will review your request and follow up from ${config.email}.</span>`;
          message.hidden = false;
        }
        form.reset();
      });
    });
  }

  function animateOnScroll() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          if (entry.target.matches("[data-count]")) {
            animateCount(entry.target);
          }
          if (entry.target.matches("[data-progress]")) {
            entry.target.style.setProperty("--progress", `${entry.target.dataset.progress}%`);
          }
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.18 }
    );
    $$(".reveal, [data-count], [data-progress]").forEach((element) => observer.observe(element));
  }

  function animateCount(element) {
    const end = Number(element.dataset.count || 0);
    const suffix = element.dataset.suffix || "";
    const duration = 900;
    const startTime = performance.now();
    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const value = Math.round(end * (1 - Math.pow(1 - progress, 3)));
      element.textContent = `${value}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function cookieBanner() {
    const banner = $("#cookie-banner");
    if (!banner) return;
    const key = `${config.companyName || "site"}-cookie-preference`;
    if (!localStorage.getItem(key)) banner.hidden = false;
    $$("[data-cookie-action]", banner).forEach((button) => {
      button.addEventListener("click", () => {
        localStorage.setItem(key, button.dataset.cookieAction);
        banner.hidden = true;
      });
    });
  }

  function initIcons() {
    if (window.lucide) window.lucide.createIcons();
  }

  buildHeader();
  buildFooter();
  hydrateConfig();
  buildServiceCards();
  buildServicesSelect();
  buildServicePage();
  buildFaqs();
  bindInteractions();
  cookieBanner();
  animateOnScroll();
  initIcons();
})();
