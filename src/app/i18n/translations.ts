export type Locale = "en" | "fr" | "de";

export type TranslationKey =
  | "app.name"
  | "nav.home"
  | "nav.jobs"
  | "nav.about"
  | "nav.contact"
  | "nav.language"
  | "nav.login"
  | "nav.register"
  | "nav.forYou"
  | "nav.findJobs"
  | "nav.savedJobs"
  | "nav.referrals"
  | "nav.careerInsights"
  | "nav.recruitersArea"
  | "nav.createAccount"
  | "search.placeholder.title"
  | "search.placeholder.location"
  | "search.button"
  | "search.button.allJobs"
  | "search.button.modify"
  | "search.button.filterSingular"
  | "search.button.filterPlural"
  | "search.filters"
  | "search.filters.category"
  | "search.filters.employmentType"
  | "search.filters.salary"
  | "search.filters.experience"
  | "search.filters.apply"
  | "search.filters.reset"
  | "search.results.count"
  | "search.results.empty"
  | "search.filtersTitle"
  | "search.searchingFor"
  | "search.locations"
  | "search.filtersLabel"
  | "search.noFilters"
  | "jobTitle.modal.title"
  | "jobTitle.modal.infoTitle"
  | "jobTitle.modal.infoText"
  | "jobTitle.modal.popularSearches"
  | "jobTitle.modal.search"
  | "location.modal.title"
  | "location.modal.placeholder"
  | "location.modal.suggestions"
  | "location.modal.canton"
  | "location.modal.city"
  | "location.modal.seeJobs"
  | "location.modal.pressEnter"
  | "filters.modal.title"
  | "filters.modal.publicationDate"
  | "filters.modal.today"
  | "filters.modal.lastWeek"
  | "filters.modal.lastMonth"
  | "filters.modal.workload"
  | "filters.modal.minPercent"
  | "filters.modal.maxPercent"
  | "filters.modal.contractType"
  | "filters.modal.permanent"
  | "filters.modal.temporary"
  | "filters.modal.apprenticeship"
  | "filters.modal.freelance"
  | "filters.modal.internship"
  | "filters.modal.sideJob"
  | "filters.modal.workLanguage"
  | "filters.modal.german"
  | "filters.modal.french"
  | "filters.modal.english"
  | "filters.modal.italian"
  | "filters.modal.clearAll"
  | "filters.modal.seeJobs"
  | "serp.title"
  | "serp.title.results"
  | "serp.seeMore"
  | "job.detail.apply"
  | "job.detail.save"
  | "job.detail.share"
  | "job.detail.description"
  | "job.detail.requirements"
  | "job.detail.benefits"
  | "job.detail.location"
  | "job.detail.salary"
  | "job.detail.posted"
  | "job.detail.company"
  | "job.detail.back"
  | "menu.close"
  | "common.loading"
  | "common.error"
  | "common.notFound"
  | "common.notFound.description"
  | "google.flow.jobscout.title"
  | "google.flow.jobscout.snippet"
  | "job.detail.jobSummary"
  | "job.detail.activelyRecruiting"
  | "job.detail.aiDisclaimer"
  | "job.detail.requiredSkills"
  | "job.detail.responsibilities"
  | "job.detail.keyBenefits"
  | "job.detail.workLocation"
  | "job.detail.homeoffice"
  | "job.detail.commuteTime"
  | "job.detail.commuteCalculate"
  | "job.detail.seeAllJobsIn"
  | "job.detail.salaryEstimated"
  | "job.detail.salaryInfo.title"
  | "job.detail.salaryInfo.text"
  | "job.detail.seeMoreBenefits"
  | "job.detail.languages"
  | "job.detail.langCol"
  | "job.detail.levelCol"
  | "job.detail.companyInfo"
  | "job.detail.skills"
  | "job.detail.coreSkills"
  | "job.detail.similarJobs"
  | "job.detail.careerInsightsTag"
  | "job.detail.moreOptions"
  | "job.detail.offersOnline"
  | "saved.subtitle"
  | "saved.empty.title"
  | "saved.empty.description"
  | "header.openMenu"
  | "header.account"
  | "nav.breadcrumb"
  | "jobTitle.modal.popular.1"
  | "jobTitle.modal.popular.2"
  | "jobTitle.modal.popular.3"
  | "jobTitle.modal.popular.4"
  | "job.detail.hybrid"
  | "job.detail.mapAlt"
  | "job.detail.writeEmail"
  | "serp.careerInsights"
  | "seo.showMore"
  | "seo.showLess"
  | "serp.relatedSearches"
  | "serp.seeMoreAds"
  | "serp.locationTitle"
  | "serp.seoText"
  | "serp.insight.salary.title"
  | "serp.insight.salary.text"
  | "serp.insight.salary.junior"
  | "serp.insight.salary.mid"
  | "serp.insight.salary.senior"
  | "serp.insight.salary.footer"
  | "serp.insight.industries.title"
  | "serp.insight.industries.text"
  | "serp.insight.skills.title"
  | "serp.insight.skills.text"
  | "footer.termsOfUse"
  | "footer.dataPrivacy"
  | "footer.legalNotice"
  | "footer.cookieSettings"
  | "footer.contact"
  | "footer.themeLight"
  | "footer.themeDark"
  | "footer.changeTheme"
  | "footer.copyright"
  | "location.modal.remove"
  | "serp.jobsLabel";

type Translations = Record<Locale, Record<TranslationKey, string>>;

export const translations: Translations = {
  en: {
    "app.name": "JobScout24",
    "nav.home": "Home",
    "nav.jobs": "Jobs",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.language": "Language",
    "nav.login": "Log in",
    "nav.register": "Register",
    "nav.forYou": "For you",
    "nav.findJobs": "Find jobs",
    "nav.savedJobs": "Saved jobs",
    "nav.referrals": "Referrals",
    "nav.careerInsights": "Career insights",
    "nav.recruitersArea": "Recruiters area",
    "nav.createAccount": "Create an account",
    "search.placeholder.title": "Job title, keywords...",
    "search.placeholder.location": "City, region...",
    "search.button": "Search jobs",
    "search.button.allJobs": "All jobs",
    "search.button.modify": "Modify search",
    "search.button.filterSingular": "+1 filter",
    "search.button.filterPlural": "+{count} filters",
    "search.filters": "Filters",
    "search.filters.category": "Category",
    "search.filters.employmentType": "Employment type",
    "search.filters.salary": "Salary range",
    "search.filters.experience": "Experience level",
    "search.filters.apply": "Apply filters",
    "search.filters.reset": "Reset",
    "search.results.count": "{count} jobs found",
    "search.results.empty": "No jobs match your search criteria.",
    "search.filtersTitle": "Search and filters",
    "search.searchingFor": "Searching for",
    "search.locations": "Locations",
    "search.filtersLabel": "Filters",
    "search.noFilters": "No filters",
    "jobTitle.modal.title": "What are you searching for?",
    "jobTitle.modal.infoTitle": "Our search is intelligent!",
    "jobTitle.modal.infoText": "No need to try different combinations, we also search for synonyms.",
    "jobTitle.modal.popularSearches": "Most popular searches",
    "jobTitle.modal.search": "Search",
    "location.modal.title": "Locations",
    "location.modal.placeholder": "Add cantons or cities",
    "location.modal.suggestions": "Suggestions",
    "location.modal.canton": "Canton",
    "location.modal.city": "City",
    "location.modal.seeJobs": "See {count} jobs",
    "location.modal.pressEnter": "Press Enter to add this location",
    "filters.modal.title": "Filters",
    "filters.modal.publicationDate": "Publication date",
    "filters.modal.today": "Today",
    "filters.modal.lastWeek": "Last week",
    "filters.modal.lastMonth": "Last month",
    "filters.modal.workload": "Workload",
    "filters.modal.minPercent": "Min %",
    "filters.modal.maxPercent": "Max %",
    "filters.modal.contractType": "Contract type",
    "filters.modal.permanent": "Permanent",
    "filters.modal.temporary": "Temporary",
    "filters.modal.apprenticeship": "Apprenticeship",
    "filters.modal.freelance": "Freelance",
    "filters.modal.internship": "Internship",
    "filters.modal.sideJob": "Side job",
    "filters.modal.workLanguage": "Work language",
    "filters.modal.german": "German",
    "filters.modal.french": "French",
    "filters.modal.english": "English",
    "filters.modal.italian": "Italian",
    "filters.modal.clearAll": "Clear all",
    "filters.modal.seeJobs": "See {count} jobs",
    "serp.title": "Job Search Results",
    "serp.title.results": "{count} {query} jobs in {location}",
    "serp.seeMore": "See more",
    "job.detail.apply": "Apply now",
    "job.detail.save": "Save job",
    "job.detail.share": "Share",
    "job.detail.description": "Description",
    "job.detail.requirements": "Requirements",
    "job.detail.benefits": "Benefits",
    "job.detail.location": "Location",
    "job.detail.salary": "Salary",
    "job.detail.posted": "Posted",
    "job.detail.company": "Company",
    "job.detail.back": "Back to results",
    "menu.close": "Close",
    "common.loading": "Loading...",
    "common.error": "Something went wrong.",
    "common.notFound": "Page not found",
    "common.notFound.description": "The page you are looking for does not exist.",
    "google.flow.jobscout.title": "Project Manager Jobs Zurich | 3,241 Offers · JobScout24",
    "google.flow.jobscout.snippet": "Search & apply for Project Manager jobs in Zurich & Switzerland. 3,241 verified offers updated hourly. Filter by workload %, salary & contract type. Swiss-market specialists.",
    "job.detail.jobSummary": "Job summary",
    "job.detail.activelyRecruiting": "Actively recruiting",
    "job.detail.aiDisclaimer": "This summary was created by AI based on the job description and might have inaccuracies. Please refer to the full job ad below.",
    "job.detail.requiredSkills": "Required Skills and Experience",
    "job.detail.responsibilities": "Key Responsibilities",
    "job.detail.keyBenefits": "Key Benefits",
    "job.detail.workLocation": "Work location(s)",
    "job.detail.homeoffice": "Homeoffice",
    "job.detail.commuteTime": "Commute time",
    "job.detail.commuteCalculate": "Calculate",
    "job.detail.seeAllJobsIn": "See all jobs in {location}",
    "job.detail.salaryEstimated": "Salary (estimated)",
    "job.detail.salaryInfo.title": "This salary is an estimation",
    "job.detail.salaryInfo.text": "Not supplied by the company. Estimated for full workload using data from jobs.ch and partners, updated regularly.",
    "job.detail.seeMoreBenefits": "See more benefits",
    "job.detail.languages": "Language(s)",
    "job.detail.langCol": "Language",
    "job.detail.levelCol": "Min. Level required",
    "job.detail.companyInfo": "Company information",
    "job.detail.skills": "Skills",
    "job.detail.coreSkills": "Core skills",
    "job.detail.similarJobs": "Similar jobs",
    "job.detail.careerInsightsTag": "Career insights",
    "job.detail.moreOptions": "More options",
    "job.detail.offersOnline": "{count} offers online",
    "saved.subtitle": "{count} saved jobs",
    "saved.empty.title": "No saved jobs yet",
    "saved.empty.description": "Tap the heart icon on any job to save it here for later.",
    "header.openMenu": "Open menu",
    "header.account": "Account",
    "nav.breadcrumb": "Breadcrumb",
    "jobTitle.modal.popular.1": "Cowboy in the alps",
    "jobTitle.modal.popular.2": "Chocolate tester for Lindt or Nestlé",
    "jobTitle.modal.popular.3": "Private banker",
    "jobTitle.modal.popular.4": "Emmental maker",
    "job.detail.hybrid": "Hybrid",
    "job.detail.mapAlt": "Map",
    "job.detail.writeEmail": "Write an email",
    "serp.careerInsights": "Career insights",
    "seo.showMore": "Show more",
    "seo.showLess": "Show less",
    "serp.relatedSearches": "Related searches",
    "serp.seeMoreAds": "See more ads",
    "serp.locationTitle": "The best cantons to find Project Manager jobs",
    "serp.seoText": "147 jobs have been added this week for Project Manager. This role is in high demand in banking & finance, consulting, pharma & healthcare. The majority of job opportunities can be found in the cantons of Zurich, Bern, Basel, and Geneva. Top skills are Agile / Scrum, Stakeholder management and PMP certification. The average salary for Project Managers in Switzerland is CHF 115,000 per year, with senior roles reaching up to CHF 160,000 in Zurich.",
    "serp.insight.salary.title": "How much does a Project Manager earn in Switzerland?",
    "serp.insight.salary.text": "Project Manager salaries depend on experience, industry, and location.",
    "serp.insight.salary.junior": "Junior Project Manager",
    "serp.insight.salary.mid": "Project Manager",
    "serp.insight.salary.senior": "Senior PM / Programme Manager",
    "serp.insight.salary.footer": "In Switzerland, Zurich and Geneva command the highest salaries, especially in banking, consulting and pharma.",
    "serp.insight.industries.title": "Top industries hiring Project Managers",
    "serp.insight.industries.text": "Project Managers are in high demand across multiple sectors. The banking and finance industry leads hiring, followed by consulting and healthcare. E-commerce platforms and SaaS companies are also rapidly expanding their project management teams. In Switzerland, the fintech and pharma sectors offer particularly competitive packages.",
    "serp.insight.skills.title": "Essential skills for Project Managers in 2026",
    "serp.insight.skills.text": "The most sought-after skills include proficiency in Agile/Scrum, stakeholder management, PMP certification, and data-driven decision-making. Knowledge of project management software and tools, such as Microsoft Project and Jira, is also highly valued. Leadership and communication skills are crucial for success in this role.",
    "footer.termsOfUse": "Terms of Use",
    "footer.dataPrivacy": "Data privacy notice",
    "footer.legalNotice": "Legal notice",
    "footer.cookieSettings": "Cookie settings",
    "footer.contact": "Contact",
    "footer.themeLight": "Light",
    "footer.themeDark": "Dark",
    "footer.changeTheme": "Change theme",
    "footer.copyright": "© 2026 JobCloud AG",
    "location.modal.remove": "Remove {label}",
    "serp.jobsLabel": "jobs",
  },
  fr: {
    "app.name": "JobScout24",
    "nav.home": "Accueil",
    "nav.jobs": "Emplois",
    "nav.about": "\u00C0 propos",
    "nav.contact": "Contact",
    "nav.language": "Langue",
    "nav.login": "Connexion",
    "nav.register": "S'inscrire",
    "nav.forYou": "Pour vous",
    "nav.findJobs": "Trouver un emploi",
    "nav.savedJobs": "Emplois sauvegardés",
    "nav.referrals": "Parrainages",
    "nav.careerInsights": "Insights carrière",
    "nav.recruitersArea": "Espace recruteurs",
    "nav.createAccount": "Créer un compte",
    "search.placeholder.title": "Titre du poste, mots-cl\u00E9s...",
    "search.placeholder.location": "Ville, r\u00E9gion...",
    "search.button": "Rechercher",
    "search.button.allJobs": "Tous les jobs",
    "search.button.modify": "Modifier recherche",
    "search.button.filterSingular": "+1 filtre",
    "search.button.filterPlural": "+{count} filtres",
    "search.filters": "Filtres",
    "search.filters.category": "Cat\u00E9gorie",
    "search.filters.employmentType": "Type d'emploi",
    "search.filters.salary": "Fourchette salariale",
    "search.filters.experience": "Niveau d'exp\u00E9rience",
    "search.filters.apply": "Appliquer les filtres",
    "search.filters.reset": "R\u00E9initialiser",
    "search.results.count": "{count} emplois trouv\u00E9s",
    "search.results.empty": "Aucun emploi ne correspond \u00E0 vos crit\u00E8res.",
    "search.filtersTitle": "Recherche et filtres",
    "search.searchingFor": "Recherche de",
    "search.locations": "Localisations",
    "search.filtersLabel": "Filtres",
    "search.noFilters": "Aucun filtre",
    "jobTitle.modal.title": "Que recherchez-vous\u00A0?",
    "jobTitle.modal.infoTitle": "Notre recherche est intelligente\u00A0!",
    "jobTitle.modal.infoText": "Pas besoin d\u2019essayer diff\u00E9rentes combinaisons, nous cherchons aussi les synonymes.",
    "jobTitle.modal.popularSearches": "Recherches les plus populaires",
    "jobTitle.modal.search": "Rechercher",
    "location.modal.title": "Localisations",
    "location.modal.placeholder": "Ajouter des cantons ou des villes",
    "location.modal.suggestions": "Suggestions",
    "location.modal.canton": "Canton",
    "location.modal.city": "Ville",
    "location.modal.seeJobs": "Voir {count} emplois",
    "location.modal.pressEnter": "Appuyez sur Entr\u00E9e pour ajouter ce lieu",
    "filters.modal.title": "Filtres",
    "filters.modal.publicationDate": "Date de publication",
    "filters.modal.today": "Aujourd\u2019hui",
    "filters.modal.lastWeek": "La semaine derni\u00E8re",
    "filters.modal.lastMonth": "Le mois dernier",
    "filters.modal.workload": "Taux d\u2019activit\u00E9",
    "filters.modal.minPercent": "Min %",
    "filters.modal.maxPercent": "Max %",
    "filters.modal.contractType": "Type de contrat",
    "filters.modal.permanent": "CDI",
    "filters.modal.temporary": "CDD",
    "filters.modal.apprenticeship": "Apprentissage",
    "filters.modal.freelance": "Ind\u00E9pendant",
    "filters.modal.internship": "Stage",
    "filters.modal.sideJob": "Emploi compl\u00E9mentaire",
    "filters.modal.workLanguage": "Langue de travail",
    "filters.modal.german": "Allemand",
    "filters.modal.french": "Fran\u00E7ais",
    "filters.modal.english": "Anglais",
    "filters.modal.italian": "Italien",
    "filters.modal.clearAll": "Tout effacer",
    "filters.modal.seeJobs": "Voir {count} offres",
    "serp.title": "R\u00E9sultats de recherche",
    "serp.title.results": "{count} offres {query} à {location}",
    "serp.seeMore": "Voir plus",
    "job.detail.apply": "Postuler",
    "job.detail.save": "Sauvegarder",
    "job.detail.share": "Partager",
    "job.detail.description": "Description",
    "job.detail.requirements": "Pr\u00E9requis",
    "job.detail.benefits": "Avantages",
    "job.detail.location": "Lieu",
    "job.detail.salary": "Salaire",
    "job.detail.posted": "Publi\u00E9",
    "job.detail.company": "Entreprise",
    "job.detail.back": "Retour aux r\u00E9sultats",
    "menu.close": "Fermer",
    "common.loading": "Chargement...",
    "common.error": "Une erreur est survenue.",
    "common.notFound": "Page introuvable",
    "common.notFound.description": "La page que vous recherchez n'existe pas.",
    "google.flow.jobscout.title": "Emplois Project Manager Zurich | 3\u2019241 offres \u00B7 JobScout24",
    "google.flow.jobscout.snippet": "Trouvez et postulez aux meilleures offres Project Manager \u00e0 Zurich et en Suisse. 3\u2019241 offres v\u00e9rifi\u00e9es, mises \u00e0 jour chaque heure. Filtrez par taux d\u2019activit\u00e9, salaire et type de contrat.",
    "job.detail.jobSummary": "R\u00e9sum\u00e9 du poste",
    "job.detail.activelyRecruiting": "Recrutement actif",
    "job.detail.aiDisclaimer": "Ce r\u00e9sum\u00e9 a \u00e9t\u00e9 cr\u00e9\u00e9 par une IA bas\u00e9e sur la description de poste et pourrait contenir des inexactitudes. Veuillez vous r\u00e9f\u00e9rer \u00e0 l\u00e9annonce compl\u00e8te ci-dessous.",
    "job.detail.requiredSkills": "Comp\u00e9tences et exp\u00e9rience requises",
    "job.detail.responsibilities": "Responsabilit\u00e9s cl\u00e9s",
    "job.detail.keyBenefits": "Avantages cl\u00e9s",
    "job.detail.workLocation": "Lieu(x) de travail",
    "job.detail.homeoffice": "T\u00e9l\u00e9travail",
    "job.detail.commuteTime": "Temps de trajet",
    "job.detail.commuteCalculate": "Calculer",
    "job.detail.seeAllJobsIn": "Voir tous les emplois \u00e0 {location}",
    "job.detail.salaryEstimated": "Salaire (estim\u00e9)",
    "job.detail.salaryInfo.title": "Ce salaire est une estimation",
    "job.detail.salaryInfo.text": "Non fourni par l\u00e9entreprise. Estim\u00e9 pour un taux plein \u00e0 partir des donn\u00e9es de jobs.ch et de ses partenaires, mis \u00e0 jour r\u00e9guli\u00e8rement.",
    "job.detail.seeMoreBenefits": "Voir plus d\u2019avantages",
    "job.detail.languages": "Langue(s)",
    "job.detail.langCol": "Langue",
    "job.detail.levelCol": "Niveau min. requis",
    "job.detail.companyInfo": "Informations sur l\u00e9entreprise",
    "job.detail.skills": "Comp\u00e9tences",
    "job.detail.coreSkills": "Comp\u00e9tences essentielles",
    "job.detail.similarJobs": "Emplois similaires",
    "job.detail.careerInsightsTag": "Insights carri\u00e8re",
    "job.detail.moreOptions": "Plus d\u2019options",
    "job.detail.offersOnline": "{count} offres en ligne",
    "saved.subtitle": "{count} emplois sauvegardés",
    "saved.empty.title": "Aucun emploi sauvegardé",
    "saved.empty.description": "Appuyez sur l'icône cœur sur une offre pour la sauvegarder ici.",
    "header.openMenu": "Ouvrir le menu",
    "header.account": "Compte",
    "nav.breadcrumb": "Fil d'Ariane",
    "jobTitle.modal.popular.1": "Cow-boy dans les alpes",
    "jobTitle.modal.popular.2": "Testeur de chocolat pour Lindt ou Nestlé",
    "jobTitle.modal.popular.3": "Banquier privé",
    "jobTitle.modal.popular.4": "Fabricant d'emmental",
    "job.detail.hybrid": "Hybride",
    "job.detail.mapAlt": "Carte",
    "job.detail.writeEmail": "Écrire un e-mail",
    "serp.careerInsights": "Insights carrière",
    "seo.showMore": "Voir plus",
    "seo.showLess": "Voir moins",
    "serp.relatedSearches": "Recherches similaires",
    "serp.seeMoreAds": "Voir plus d'emplois",
    "serp.locationTitle": "Les meilleurs cantons pour les emplois de Project Manager",
    "serp.seoText": "147 offres ont été ajoutées cette semaine pour Project Manager. Ce poste est très demandé dans la banque & finance, le conseil, la pharma & santé. La majorité des opportunités se trouvent dans les cantons de Zurich, Berne, Bâle et Genève. Les compétences clés sont Agile / Scrum, gestion des parties prenantes et certification PMP. Le salaire moyen des Project Managers en Suisse est de CHF 115 000 par an, les postes seniors atteignant jusqu'à CHF 160 000 à Zurich.",
    "serp.insight.salary.title": "Combien gagne un Project Manager en Suisse ?",
    "serp.insight.salary.text": "Les salaires des Project Managers dépendent de l'expérience, du secteur et du lieu.",
    "serp.insight.salary.junior": "Junior Project Manager",
    "serp.insight.salary.mid": "Project Manager",
    "serp.insight.salary.senior": "Senior PM / Programme Manager",
    "serp.insight.salary.footer": "En Suisse, Zurich et Genève offrent les salaires les plus élevés, notamment dans la banque, le conseil et la pharma.",
    "serp.insight.industries.title": "Les secteurs qui recrutent le plus de Project Managers",
    "serp.insight.industries.text": "Les Project Managers sont très demandés dans de nombreux secteurs. L'industrie bancaire et financière est en tête, suivie du conseil et de la santé. Les plateformes e-commerce et les entreprises SaaS développent également rapidement leurs équipes de gestion de projet. En Suisse, les secteurs fintech et pharma offrent des packages particulièrement compétitifs.",
    "serp.insight.skills.title": "Compétences essentielles pour les Project Managers en 2026",
    "serp.insight.skills.text": "Les compétences les plus recherchées incluent la maîtrise d'Agile/Scrum, la gestion des parties prenantes, la certification PMP et la prise de décision basée sur les données. La connaissance des logiciels de gestion de projet comme Microsoft Project et Jira est également très appréciée. Le leadership et les compétences en communication sont essentiels.",
    "footer.termsOfUse": "Conditions d'utilisation",
    "footer.dataPrivacy": "Protection des données",
    "footer.legalNotice": "Mentions légales",
    "footer.cookieSettings": "Paramètres des cookies",
    "footer.contact": "Contact",
    "footer.themeLight": "Clair",
    "footer.themeDark": "Sombre",
    "footer.changeTheme": "Changer le thème",
    "footer.copyright": "© 2026 JobCloud AG",
    "location.modal.remove": "Supprimer {label}",
    "serp.jobsLabel": "emplois",
  },
  de: {
    "app.name": "JobScout24",
    "nav.home": "Startseite",
    "nav.jobs": "Stellen",
    "nav.about": "\u00DCber uns",
    "nav.contact": "Kontakt",
    "nav.language": "Sprache",
    "nav.login": "Anmelden",
    "nav.register": "Registrieren",
    "nav.forYou": "Für Sie",
    "nav.findJobs": "Jobs finden",
    "nav.savedJobs": "Gespeicherte Stellen",
    "nav.referrals": "Empfehlungen",
    "nav.careerInsights": "Karriere-Insights",
    "nav.recruitersArea": "Bereich für Recruiter",
    "nav.createAccount": "Konto erstellen",
    "search.placeholder.title": "Jobtitel, Stichw\u00F6rter...",
    "search.placeholder.location": "Stadt, Region...",
    "search.button": "Jobs suchen",
    "search.button.allJobs": "Alle Jobs",
    "search.button.modify": "Suche \u00E4ndern",
    "search.button.filterSingular": "+1 Filter",
    "search.button.filterPlural": "+{count} Filter",
    "search.filters": "Filter",
    "search.filters.category": "Kategorie",
    "search.filters.employmentType": "Besch\u00E4ftigungsart",
    "search.filters.salary": "Gehaltsspanne",
    "search.filters.experience": "Erfahrungsstufe",
    "search.filters.apply": "Filter anwenden",
    "search.filters.reset": "Zur\u00FCcksetzen",
    "search.results.count": "{count} Stellen gefunden",
    "search.results.empty": "Keine Stellen entsprechen Ihren Suchkriterien.",
    "search.filtersTitle": "Suche und Filter",
    "search.searchingFor": "Suche nach",
    "search.locations": "Orte",
    "search.filtersLabel": "Filter",
    "search.noFilters": "Keine Filter",
    "jobTitle.modal.title": "Wonach suchen Sie?",
    "jobTitle.modal.infoTitle": "Unsere Suche ist intelligent!",
    "jobTitle.modal.infoText": "Kein Bedarf, verschiedene Kombinationen auszuprobieren\u00A0\u2014 wir suchen auch nach Synonymen.",
    "jobTitle.modal.popularSearches": "Beliebteste Suchanfragen",
    "jobTitle.modal.search": "Suchen",
    "location.modal.title": "Standorte",
    "location.modal.placeholder": "Kantone oder St\u00E4dte hinzuf\u00FCgen",
    "location.modal.suggestions": "Vorschl\u00E4ge",
    "location.modal.canton": "Kanton",
    "location.modal.city": "Stadt",
    "location.modal.seeJobs": "{count} Stellen anzeigen",
    "location.modal.pressEnter": "Dr\u00FCcken Sie Enter, um diesen Ort hinzuzuf\u00FCgen",
    "filters.modal.title": "Filter",
    "filters.modal.publicationDate": "Ver\u00F6ffentlichungsdatum",
    "filters.modal.today": "Heute",
    "filters.modal.lastWeek": "Letzte Woche",
    "filters.modal.lastMonth": "Letzten Monat",
    "filters.modal.workload": "Pensum",
    "filters.modal.minPercent": "Min %",
    "filters.modal.maxPercent": "Max %",
    "filters.modal.contractType": "Vertragsart",
    "filters.modal.permanent": "Festanstellung",
    "filters.modal.temporary": "Befristet",
    "filters.modal.apprenticeship": "Lehrstelle",
    "filters.modal.freelance": "Freiberuflich",
    "filters.modal.internship": "Praktikum",
    "filters.modal.sideJob": "Nebenjob",
    "filters.modal.workLanguage": "Arbeitssprache",
    "filters.modal.german": "Deutsch",
    "filters.modal.french": "Franz\u00F6sisch",
    "filters.modal.english": "Englisch",
    "filters.modal.italian": "Italienisch",
    "filters.modal.clearAll": "Alles zur\u00FCcksetzen",
    "filters.modal.seeJobs": "{count} Stellen anzeigen",
    "serp.title": "Suchergebnisse",
    "serp.title.results": "{count} {query} Jobs in {location}",
    "serp.seeMore": "Mehr anzeigen",
    "job.detail.apply": "Jetzt bewerben",
    "job.detail.save": "Stelle speichern",
    "job.detail.share": "Teilen",
    "job.detail.description": "Beschreibung",
    "job.detail.requirements": "Anforderungen",
    "job.detail.benefits": "Vorteile",
    "job.detail.location": "Standort",
    "job.detail.salary": "Gehalt",
    "job.detail.posted": "Ver\u00F6ffentlicht",
    "job.detail.company": "Unternehmen",
    "job.detail.back": "Zur\u00FCck zu den Ergebnissen",
    "menu.close": "Schlie\u00DFen",
    "common.loading": "Laden...",
    "common.error": "Etwas ist schiefgelaufen.",
    "common.notFound": "Seite nicht gefunden",
    "common.notFound.description": "Die gesuchte Seite existiert nicht.",
    "google.flow.jobscout.title": "Project Manager Jobs Z\u00FCrich | 3\u2019241 Stellen \u00B7 JobScout24",
    "google.flow.jobscout.snippet": "Finden & bewerben Sie sich f\u00FCr Project Manager Stellen in Z\u00FCrich und der Schweiz. 3\u2019241 gepr\u00FCfte Angebote, st\u00FCndlich aktualisiert. Filter nach Pensum, Gehalt & Vertragsart.",
    "job.detail.jobSummary": "Stellenzusammenfassung",
    "job.detail.activelyRecruiting": "Aktiv rekrutierend",
    "job.detail.aiDisclaimer": "Diese Zusammenfassung wurde von einer KI basierend auf der Stellenbeschreibung erstellt und k\u00f6nnte Ungenauigkeiten enthalten. Bitte beziehen Sie sich auf die vollst\u00e4ndige Stellenanzeige unten.",
    "job.detail.requiredSkills": "Erforderliche F\u00e4higkeiten und Erfahrung",
    "job.detail.responsibilities": "Hauptaufgaben",
    "job.detail.keyBenefits": "Wichtige Vorteile",
    "job.detail.workLocation": "Arbeitsort(e)",
    "job.detail.homeoffice": "Homeoffice",
    "job.detail.commuteTime": "Pendelzeit",
    "job.detail.commuteCalculate": "Berechnen",
    "job.detail.seeAllJobsIn": "Alle Jobs in {location} anzeigen",
    "job.detail.salaryEstimated": "Gehalt (Sch\u00e4tzung)",
    "job.detail.salaryInfo.title": "Dieses Gehalt ist eine Sch\u00e4tzung",
    "job.detail.salaryInfo.text": "Nicht vom Unternehmen angegeben. F\u00fcr Vollzeitbesch\u00e4ftigung gesch\u00e4tzt, basierend auf Daten von jobs.ch und Partnern, regelm\u00e4\u00dfig aktualisiert.",
    "job.detail.seeMoreBenefits": "Weitere Vorteile anzeigen",
    "job.detail.languages": "Sprache(n)",
    "job.detail.langCol": "Sprache",
    "job.detail.levelCol": "Mind. erforderliches Niveau",
    "job.detail.companyInfo": "Unternehmensinformationen",
    "job.detail.skills": "F\u00e4higkeiten",
    "job.detail.coreSkills": "Kernkompetenzen",
    "job.detail.similarJobs": "\u00c4hnliche Stellen",
    "job.detail.careerInsightsTag": "Karriere-Insights",
    "job.detail.moreOptions": "Mehr Optionen",
    "job.detail.offersOnline": "{count} Angebote online",
    "saved.subtitle": "{count} gespeicherte Stellen",
    "saved.empty.title": "Keine gespeicherten Stellen",
    "saved.empty.description": "Tippen Sie auf das Herz-Symbol bei einer Stelle, um sie hier zu speichern.",
    "header.openMenu": "Menü öffnen",
    "header.account": "Konto",
    "nav.breadcrumb": "Brotkrümel-Navigation",
    "jobTitle.modal.popular.1": "Cowboy in den Alpen",
    "jobTitle.modal.popular.2": "Schokoladentester für Lindt oder Nestlé",
    "jobTitle.modal.popular.3": "Privatbankier",
    "jobTitle.modal.popular.4": "Emmentaler-Hersteller",
    "job.detail.hybrid": "Hybrid",
    "job.detail.mapAlt": "Karte",
    "job.detail.writeEmail": "E-Mail schreiben",
    "serp.careerInsights": "Karriere-Insights",
    "seo.showMore": "Mehr anzeigen",
    "seo.showLess": "Weniger",
    "serp.relatedSearches": "Ähnliche Suchanfragen",
    "serp.seeMoreAds": "Mehr Stellen anzeigen",
    "serp.locationTitle": "Die besten Kantone für Project Manager Jobs",
    "serp.seoText": "Diese Woche wurden 147 Stellen für Project Manager hinzugefügt. Diese Rolle ist besonders gefragt in Banking & Finance, Beratung, Pharma & Gesundheit. Die meisten Stellenangebote finden sich in den Kantonen Zürich, Bern, Basel und Genf. Gefragte Kompetenzen sind Agile / Scrum, Stakeholder-Management und PMP-Zertifizierung. Das Durchschnittsgehalt für Project Manager in der Schweiz beträgt CHF 115'000 pro Jahr, Senior-Positionen erreichen bis zu CHF 160'000 in Zürich.",
    "serp.insight.salary.title": "Wie viel verdient ein Project Manager in der Schweiz?",
    "serp.insight.salary.text": "Die Gehälter von Project Managern hängen von Erfahrung, Branche und Standort ab.",
    "serp.insight.salary.junior": "Junior Project Manager",
    "serp.insight.salary.mid": "Project Manager",
    "serp.insight.salary.senior": "Senior PM / Programme Manager",
    "serp.insight.salary.footer": "In der Schweiz bieten Zürich und Genf die höchsten Gehälter, insbesondere in Banking, Beratung und Pharma.",
    "serp.insight.industries.title": "Top-Branchen, die Project Manager einstellen",
    "serp.insight.industries.text": "Project Manager sind in vielen Branchen sehr gefragt. Die Bank- und Finanzbranche führt bei der Einstellung, gefolgt von Beratung und Gesundheitswesen. E-Commerce-Plattformen und SaaS-Unternehmen bauen ebenfalls ihre Projektmanagement-Teams schnell aus. In der Schweiz bieten die Fintech- und Pharma-Sektoren besonders wettbewerbsfähige Pakete.",
    "serp.insight.skills.title": "Wesentliche Fähigkeiten für Project Manager in 2026",
    "serp.insight.skills.text": "Die gefragtesten Fähigkeiten umfassen Agile/Scrum, Stakeholder-Management, PMP-Zertifizierung und datenbasierte Entscheidungsfindung. Kenntnisse in Projektmanagement-Software wie Microsoft Project und Jira sind ebenfalls sehr geschätzt. Führungs- und Kommunikationsfähigkeiten sind entscheidend für den Erfolg.",
    "footer.termsOfUse": "Nutzungsbedingungen",
    "footer.dataPrivacy": "Datenschutzhinweise",
    "footer.legalNotice": "Impressum",
    "footer.cookieSettings": "Cookie-Einstellungen",
    "footer.contact": "Kontakt",
    "footer.themeLight": "Hell",
    "footer.themeDark": "Dunkel",
    "footer.changeTheme": "Thema ändern",
    "footer.copyright": "© 2026 JobCloud AG",
    "location.modal.remove": "{label} entfernen",
    "serp.jobsLabel": "Stellen",
  },
};