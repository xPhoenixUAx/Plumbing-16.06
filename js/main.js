(function () {
  const config = window.SITE_CONFIG || {};
  const services = [
    {
      slug: "drain-cleaning",
      title: "Drain Cleaning",
      eyebrow: "When drains slow down",
      short: "For sinks, tubs, floor drains, and lines that are slowing down, backing up, or starting to smell.",
      intro:
        "Drain problems usually start small: a sink empties slowly, a shower gurgles, or a floor drain smells wrong. This request path is for clearing the line and figuring out whether it is a one-time clog or a repeat problem.",
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
        "If the same drain clogs again soon after clearing, the line may need a closer look. Mention any repeated backups, old pipes, basement drains, or multiple affected fixtures in the request.",
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
      eyebrow: "When water shows up where it should not",
      short: "For damp spots, mystery water bills, low pressure, running-water sounds, or leaks you cannot see.",
      intro:
        "Leak detection is for the situations where something feels off but the source is not obvious. A stain, soft floor, meter movement, or pressure change can all be useful clues.",
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
        "Small leaks can travel before they show up. Include where the stain or sound appears, when it started, and whether water use or weather changes make it worse.",
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
      eyebrow: "When hot water gets unreliable",
      short: "For no hot water, rusty water, noisy heaters, leaking tanks, or replacement questions.",
      intro:
        "Water heater issues can be simple maintenance, a failed part, or a tank near the end of its life. This page helps frame the request before a provider evaluates repair versus replacement.",
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
        "Water heater work can involve gas, electric, venting, drainage, code, and permit questions. Add the heater age, tank size, fuel type, and whether water is actively leaking.",
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
      eyebrow: "When it cannot wait",
      short: "For burst pipes, bad backups, overflowing fixtures, or plumbing problems that cannot wait.",
      intro:
        "Emergency plumbing is for active water damage, sewer backup, failed shutoffs, and fixtures that are making the property hard to use. If it is safe, shut off the water before sending the request.",
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
        "Emergency availability and pricing can differ from scheduled work. Ask the responding provider what the visit includes, what temporary stabilization costs, and what follow-up repair may be needed.",
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
      eyebrow: "When pipes need more than a quick patch",
      short: "For damaged pipe sections, aging lines, pressure issues, corrosion, or planned replacement.",
      intro:
        "Pipe work can be a small exposed repair or a larger replacement plan. The right request depends on pipe material, access, age, and how often problems are happening.",
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
        "Pipes often hide behind walls, cabinets, crawlspaces, or slabs. Ask how much access is needed, what restoration is included, and whether a temporary repair makes sense.",
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
      eyebrow: "When bathroom fixtures start acting up",
      short: "For bathroom fixtures that leak, run, clog, need replacing, or need plumbing during a remodel.",
      intro:
        "Bathroom plumbing covers the daily annoyances and the planned upgrades: running toilets, dripping faucets, shower valves, sink drains, tub issues, and remodel plumbing.",
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
        "Fixture swaps can reveal old shutoff valves, mismatched drains, or water-damaged cabinets. For remodels, include whether walls or floors are already open.",
      faqs: [
        ["Can providers install customer-purchased fixtures?", "Many can, but they may need to verify compatibility first."],
        ["Do bathroom remodels require permits?", "Permit requirements vary by location and project scope."],
        ["Can a running toilet raise water bills?", "Yes. Even a small continuous leak can waste significant water."]
      ],
      related: ["drain-cleaning", "leak-detection", "water-heater-service"]
    }
  ];

  const serviceDetails = {
    "drain-cleaning": {
      supportImage: "../img/generated/service-drain-detail.webp",
      supportAlt: "Plumber clearing a kitchen sink drain under a cabinet",
      overview: [
        "Drain cleaning work starts with the symptoms: which fixture is slow, whether water backs up elsewhere, and how often the problem returns. That context helps separate a simple trap blockage from a deeper line issue.",
        "The service can include sink, shower, tub, floor, laundry, and utility drain clearing. If the same line keeps blocking, the provider may recommend a camera inspection, cleanout access review, or a maintenance plan for grease, roots, or buildup."
      ],
      serviceScope: ["Fixture drain clearing", "Cleanout access review", "Recurring clog assessment", "Post-service drainage testing"],
      prepare: ["List every affected fixture", "Mention sewer odors or gurgling", "Clear access below sinks or near cleanouts"]
    },
    "leak-detection": {
      supportImage: "../img/generated/service-leak-detail.webp",
      supportAlt: "Plumber tracing moisture near exposed residential pipes",
      overview: [
        "Leak detection is about narrowing the source before repairs become invasive. Stains, soft flooring, meter movement, pressure loss, and running-water sounds can all point to different parts of the system.",
        "A provider may inspect visible fixtures, supply lines, valves, walls, floors, and meter behavior before recommending a repair path. For hidden or slab leaks, more specialized detection may be needed before opening surfaces."
      ],
      serviceScope: ["Moisture symptom review", "Fixture and valve checks", "Pressure and meter behavior review", "Repair-scope recommendation"],
      prepare: ["Take photos of stains or damp areas", "Note when the symptom appears", "Check whether the meter moves when fixtures are off"]
    },
    "water-heater-service": {
      supportImage: "../img/generated/service-water-heater-detail.webp",
      supportAlt: "Plumber explaining water heater service to a homeowner",
      overview: [
        "Water heater service can be maintenance, troubleshooting, repair, or replacement planning. The right approach depends on tank age, fuel type, symptoms, access, venting, valves, and whether water is actively leaking.",
        "Typical visits may include checking temperature problems, leaks, noises, pressure relief valves, sediment buildup, expansion tanks, and installation conditions. Replacement planning should cover capacity, code needs, disposal, and connection updates."
      ],
      serviceScope: ["No-hot-water diagnostics", "Tank and valve inspection", "Maintenance and flushing guidance", "Replacement planning"],
      prepare: ["Share tank size, age, and fuel type", "Mention rust-colored water or noises", "Keep the area around the heater accessible"]
    },
    "emergency-plumbing": {
      supportImage: "../img/generated/service-emergency-detail.webp",
      supportAlt: "Plumber responding to an active residential pipe leak",
      overview: [
        "Emergency plumbing focuses on stopping immediate damage and making the property usable again. Active leaks, sewer backups, overflowing fixtures, failed shutoffs, and burst pipes need clear location and urgency details.",
        "The first visit may be stabilization rather than the full permanent repair. Once the water is controlled, the provider can explain what caused the issue, what needs replacement, and whether follow-up work is required."
      ],
      serviceScope: ["Urgent leak response", "Backup and overflow support", "Temporary stabilization", "Follow-up repair planning"],
      prepare: ["Shut off water if safe", "Avoid electrical areas near water", "Share photos and the exact affected room"]
    },
    "pipe-repair": {
      supportImage: "../img/generated/service-pipe-detail.webp",
      supportAlt: "Plumber measuring a replacement pipe section in an open wall",
      overview: [
        "Pipe repair may involve a small exposed fix, a section replacement, or a broader upgrade when corrosion and repeat leaks are present. Access, material, pipe age, and pressure behavior all influence the final scope.",
        "Good pipe work should include a clear explanation of the material being used, how much wall or cabinet access is needed, what gets tested afterward, and what restoration or follow-up is outside the plumbing scope."
      ],
      serviceScope: ["Visible pipe leak repair", "Section replacement", "Material and access planning", "Pressure and valve review"],
      prepare: ["Identify pipe material if known", "Mention previous leaks nearby", "Clear cabinets, crawlspace access, or wall areas"]
    },
    "bathroom-plumbing": {
      supportImage: "../img/generated/service-bathroom-detail.webp",
      supportAlt: "Plumber working below a bathroom vanity while a homeowner stands nearby",
      overview: [
        "Bathroom plumbing covers the fixtures people use every day: toilets, faucets, shower valves, tubs, vanity drains, shutoff valves, and remodel connections. Small symptoms often point to worn parts or aging connections.",
        "For fixture replacement or remodel work, the provider may need to confirm compatibility, valve condition, drain alignment, wall access, and whether the existing plumbing meets the new layout or fixture requirements."
      ],
      serviceScope: ["Toilet and faucet support", "Shower and tub plumbing", "Vanity drain and supply work", "Remodel rough-in planning"],
      prepare: ["Share fixture model if replacing", "Mention running toilets or dripping sounds", "Confirm whether walls or floors are already open"]
    }
  };

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
    setText("[data-privacy-email-text]", config.privacyEmail || config.email);
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
    setHref("[data-privacy-email-link]", `mailto:${config.privacyEmail || config.email}`);
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
          <h2>Keep a short plumbing checklist handy</h2>
          <p>Simple notes on leaks, drains, heaters, and when a small issue should not wait.</p>
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
      <div class="footer-bottom">
        <span data-copyright-line>${config.copyrightLine}</span>
        <span data-footer-text-secondary>${config.footerTextSecondary}</span>
      </div>
      <p class="footer-disclaimer" data-footer-disclaimer>${config.footerDisclaimer}</p>
    `;
  }

  function buildServiceCards() {
    $$(".services-grid[data-services-grid]").forEach((grid) => {
      const limit = Number(grid.dataset.limit || services.length);
      grid.innerHTML = services
        .slice(0, limit)
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
    const detail = serviceDetails[service.slug];
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
          <section class="service-story reveal">
            <div>
              <h2>What Customers Usually Need To Know</h2>
              ${detail.overview.map((paragraph) => `<p>${paragraph}</p>`).join("")}
            </div>
            <img src="${detail.supportImage}" alt="${detail.supportAlt}">
          </section>
          <section class="detail-section reveal">
            <h2>What This Service Includes</h2>
            ${list(service.included)}
          </section>
          <section class="service-info-grid reveal">
            <div>
              <h2>Service Scope</h2>
              ${list(detail.serviceScope)}
            </div>
            <div>
              <h2>Before The Visit</h2>
              ${list(detail.prepare)}
            </div>
          </section>
          <section class="service-options-strip reveal">
            <h2>Common Request Types</h2>
            <div>
              ${service.options.map((option) => `<span><i data-lucide="badge-check"></i>${option}</span>`).join("")}
            </div>
          </section>
        <section class="detail-section reveal">
          <h2>When It Is A Good Fit</h2>
          ${list(service.bestFor)}
        </section>
        <section class="process-list reveal">
          <h2>How The Process Works</h2>
          ${service.process
            .map((step, index) => `<div style="--process-bg: url('${detail.supportImage}')"><strong>${String(index + 1).padStart(2, "0")}</strong><span>${step}</span></div>`)
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
        faqItem("What should I include in a request?", "Describe the fixture or pipe involved, when the issue started, whether water is active, and how urgent it feels."),
        faqItem("Are providers employed by this website?", "No. Providers are independent. Customers should confirm credentials, pricing, and scope directly before hiring."),
        faqItem("What if I choose the wrong service?", "That is okay. The written details matter more than the perfect category."),
        faqItem("Can pricing be guaranteed here?", "No. Pricing, availability, and terms come from the independent provider after reviewing the job.")
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

  function bindProcessSwitcher() {
    const image = $("#process-image");
    const title = $("#process-title");
    const text = $("#process-text");
    const link = $("#process-link");
    const steps = $$(".process-step");
    if (!image || !title || !text || !steps.length) return;

    const items = [
      {
        image: "img/generated/process-book-left.webp",
        alt: "Homeowner booking plumbing service while plumber reviews sink area",
        title: "Simple And Efficient Plumbing Service Process",
        text:
          "Start with the basics: what is wrong, where it is happening, and how urgent it feels. The clearer the request, the easier the next call becomes.",
        link: "contact.html",
        background: "img/generated/process-book-bg.webp"
      },
      {
        image: "img/generated/process-inspection-left.webp",
        alt: "Plumber inspecting pipes for a hidden leak",
        title: "Inspection Starts With The Clues You Already Have",
        text:
          "Water marks, sounds, pressure changes, smells, and repeated clogs all help narrow the issue before anyone opens a wall or replaces parts.",
        link: "services/leak-detection.html",
        background: "img/generated/process-inspection-bg.webp"
      },
      {
        image: "img/generated/process-repair-left.webp",
        alt: "Plumber repairing a section of copper pipe",
        title: "Repairs And Installations Need The Right Scope",
        text:
          "Some jobs need a small repair. Others need replacement planning, material choices, access notes, and a clear conversation about what is included.",
        link: "services/pipe-repair.html",
        background: "img/generated/process-repair-bg.webp"
      },
      {
        image: "img/generated/process-final-left.webp",
        alt: "Plumber testing water flow after completed bathroom plumbing work",
        title: "Final Checks Help Prevent Repeat Problems",
        text:
          "Before the work is approved, ask how the system was tested, what changed, what to watch, and when maintenance should happen next.",
        link: "services/water-heater-service.html",
        background: "img/generated/process-final-bg.webp"
      }
    ];

    function activate(index) {
      const item = items[index] || items[0];
      const copy = image.closest(".process-copy");
      const current = steps.findIndex((step) => step.classList.contains("active"));
      const initialized = steps.every((step) => step.style.getPropertyValue("--step-bg"));
      if (current === index && initialized) return;
      const updateContent = () => {
        image.src = item.image;
        image.alt = item.alt;
        title.textContent = item.title;
        text.textContent = item.text;
        if (link) link.href = item.link;
      };
      if (initialized) {
        copy?.classList.add("is-switching");
        window.setTimeout(() => {
          updateContent();
          window.requestAnimationFrame(() => copy?.classList.remove("is-switching"));
        }, 160);
      } else {
        updateContent();
        window.requestAnimationFrame(() => copy?.classList.remove("is-switching"));
      }
      steps.forEach((step, stepIndex) => {
        const active = stepIndex === index;
        step.classList.toggle("active", active);
        step.setAttribute("aria-pressed", String(active));
        step.style.setProperty("--step-bg", `url("${items[stepIndex].background}")`);
      });
    }

    steps.forEach((step, index) => {
      step.addEventListener("click", () => activate(index));
    });
    activate(0);
  }

  function bindTestimonials() {
    const image = $("#testimonial-image");
    const card = $("#testimonial-card");
    const stars = $("#testimonial-stars");
    const text = $("#testimonial-text");
    const name = $("#testimonial-name");
    const role = $("#testimonial-role");
    const prev = $("[data-testimonial-prev]");
    const next = $("[data-testimonial-next]");
    if (!image || !card || !text || !name) return;

    const reviews = [
      {
        name: "Michael C.",
        role: "Homeowner",
        image: "img/generated/testimonial-01.webp",
        alt: "Satisfied homeowner speaking with a plumber",
        text: `${config.companyName} responded quickly to our emergency plumbing issue and helped us understand what details to ask about before approving the repair.`
      },
      {
        name: "Avery L.",
        role: "Property Manager",
        image: "img/generated/testimonial-02.webp",
        alt: "Service coordinator taking a plumbing request",
        text: "The intake was simple. I could explain the leak, share the urgency, and get the request organized without repeating the same details several times."
      },
      {
        name: "Jordan R.",
        role: "Restaurant Owner",
        image: "img/generated/testimonial-03.webp",
        alt: "Kitchen drain being inspected",
        text: "Our kitchen drain problem needed fast attention. The drain page helped us describe the issue clearly before the callback."
      },
      {
        name: "Nina P.",
        role: "Homeowner",
        image: "img/generated/testimonial-04.webp",
        alt: "Plumber inspecting pipes for a leak",
        text: "The leak was hidden behind a utility wall. The request form helped us list the symptoms before anyone started opening things up."
      },
      {
        name: "Thomas W.",
        role: "Condo Owner",
        image: "img/generated/testimonial-05.webp",
        alt: "Plumber testing a bathroom faucet",
        text: "After the faucet repair, we knew what was tested and what to watch for. That final explanation made the whole visit feel more complete."
      },
      {
        name: "Sara M.",
        role: "Office Manager",
        image: "img/generated/testimonial-06.webp",
        alt: "Plumber servicing a water heater",
        text: `Our water heater issue was not obvious at first. ${config.companyName} helped us turn a vague no-hot-water complaint into a clearer service request.`
      },
      {
        name: "Daniel G.",
        role: "Homeowner",
        image: "img/generated/testimonial-07.webp",
        alt: "Plumber replacing a damaged pipe section",
        text: "The pipe repair needed more than a quick patch. The service details made it easier to ask about access, materials, and the real scope."
      }
    ];

    let index = 0;
    let timer;

    function render(nextIndex) {
      index = (nextIndex + reviews.length) % reviews.length;
      const review = reviews[index];
      card.classList.add("is-switching");
      image.classList.add("is-switching");
      window.setTimeout(() => {
        image.src = review.image;
        image.alt = review.alt;
        stars.textContent = "★★★★★";
        text.textContent = review.text;
        name.textContent = review.name;
        role.textContent = review.role;
        window.requestAnimationFrame(() => {
          card.classList.remove("is-switching");
          image.classList.remove("is-switching");
        });
      }, 180);
    }

    function restart() {
      window.clearInterval(timer);
      timer = window.setInterval(() => render(index + 1), 5200);
    }

    prev?.addEventListener("click", () => {
      render(index - 1);
      restart();
    });
    next?.addEventListener("click", () => {
      render(index + 1);
      restart();
    });
    restart();
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
  bindProcessSwitcher();
  bindTestimonials();
  cookieBanner();
  animateOnScroll();
  initIcons();
})();
