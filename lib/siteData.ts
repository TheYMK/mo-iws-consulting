export const SITE = {
  expertName: 'Jean-Pierre Martin',
  title: 'Expert en Soudure Industrielle',
  subtitle: 'Consultant Technique Certifie IWE',
  experience: 25,
  phone: '+33 6 12 34 56 78',
  whatsapp: '33612345678',
  email: 'contact@jp-expert-soudure.fr',
  location: 'Lyon, France - Interventions nationales & internationales',
  linkedin: 'https://www.linkedin.com/in/jean-pierre-martin-soudure',
  certifications: ['IWE - Ingenieur International en Soudage', 'COFREND Niveau 3 CND', 'ISO 3834 Lead Auditor'],
};

export const IMAGES = {
  hero: 'https://media.base44.com/images/public/69d538094c4f41d25d8d8a1f/917c8ef71_generated_image.png',
  expert: 'https://media.base44.com/images/public/69d538094c4f41d25d8d8a1f/3f739d261_generated_image.png',
  audit: 'https://media.base44.com/images/public/69d538094c4f41d25d8d8a1f/d403c0e9c_generated_image.png',
  dmos: 'https://media.base44.com/images/public/69d538094c4f41d25d8d8a1f/f8187cc67_generated_image.png',
  formation: 'https://media.base44.com/images/public/69d538094c4f41d25d8d8a1f/b226170cf_generated_image.png',
  chantier: 'https://media.base44.com/images/public/69d538094c4f41d25d8d8a1f/186102783_generated_image.png',
  expertise: 'https://media.base44.com/images/public/69d538094c4f41d25d8d8a1f/9d034c0d6_generated_image.png',
};

export interface ServiceProcess {
  step: string;
  label: string;
  desc: string;
}

export interface Service {
  slug: string;
  icon: string;
  title: string;
  tagline: string;
  shortDesc: string;
  heroImage: string;
  fullDesc: string;
  benefits: string[];
  industries: string[];
  process: ServiceProcess[];
}

export const SERVICES: Service[] = [
  {
    slug: 'audit-inspection',
    icon: 'SearchCheck',
    title: 'Audit et Inspection de Soudage',
    tagline: 'Evaluation complete de vos procedes',
    shortDesc: 'Analyse approfondie de vos systemes qualite soudage pour identifier les ecarts et garantir la conformite normative.',
    heroImage: IMAGES.audit,
    fullDesc: "L'audit et l'inspection de soudage constituent la pierre angulaire d'une fabrication maitrisee. Nous realisons des audits exhaustifs de vos installations, procedes et documentations selon les referentiels ISO 3834, EN 1090, ASME et autres normes applicables a votre secteur.\n\nNos inspections couvrent l'ensemble du cycle de vie de la soudure : de la preparation des joints a la qualification des operateurs, en passant par le controle des parametres en cours de soudage et les controles finaux non destructifs.",
    benefits: [
      "Identification des non-conformites avant les audits clients",
      "Conformite aux normes ISO 3834 / EN 1090 / ASME",
      "Reduction des couts lies aux reprises et rebuts",
      "Rapport detaille avec plan d'actions correctives",
      "Preparation optimale aux certifications",
    ],
    industries: ['Construction metallique', 'Chaudronnerie', 'Tuyauterie industrielle', 'Offshore & Naval', 'Energie & Nucleaire'],
    process: [
      { step: '01', label: 'Cadrage', desc: "Analyse du perimetre et des exigences applicables" },
      { step: '02', label: 'Audit terrain', desc: "Inspection sur site des procedes et de la documentation" },
      { step: '03', label: 'Rapport', desc: "Synthese des ecarts et recommandations prioritaires" },
      { step: '04', label: 'Suivi', desc: "Verification de la mise en oeuvre du plan d'actions" },
    ],
  },
  {
    slug: 'coordination-soudage',
    icon: 'Users',
    title: 'Coordination en Soudage IWE/IWT',
    tagline: 'Expertise externalisee conforme ISO 14731',
    shortDesc: "Mission de coordinateur en soudage externalisee, assurant la supervision technique complete de vos fabrications soudees.",
    heroImage: IMAGES.chantier,
    fullDesc: "La coordination en soudage est une fonction reglementaire indispensable pour les entreprises soumises aux normes de qualite soudage. En tant qu'Ingenieur International en Soudage (IWE), nous assurons cette mission avec rigueur et expertise.\n\nNous pouvons intervenir en mission ponctuelle ou recurrente, en complement de vos ressources internes, pour garantir la conformite technique et documentaire de vos fabrications soudees.",
    benefits: [
      "Conformite a l'ISO 14731 sans recrutement permanent",
      "Reduction des couts avec une expertise flexible",
      "Supervision de la qualification soudeurs/procedes",
      "Interface technique avec les organismes de certification",
      "Veille normative continue incluse",
    ],
    industries: ['Construction metallique & EN 1090', 'Charpente industrielle', 'Equipements sous pression', 'Transport ferroviaire', 'Defense & Armement'],
    process: [
      { step: '01', label: 'Evaluation', desc: "Analyse de votre contexte et besoins en coordination" },
      { step: '02', label: 'Mission', desc: "Supervision technique selon ISO 14731" },
      { step: '03', label: 'Documentation', desc: "Mise a jour et gestion de la documentation qualite soudage" },
      { step: '04', label: 'Reporting', desc: "Compte-rendu periodique et suivi des KPI qualite" },
    ],
  },
  {
    slug: 'dmos-qmos',
    icon: 'FileText',
    title: 'Redaction DMOS / QMOS',
    tagline: 'Documents operatoires certifies',
    shortDesc: "Elaboration complete de vos Descriptifs et Qualifications de Mode Operatoire de Soudage selon EN ISO 15614.",
    heroImage: IMAGES.dmos,
    fullDesc: "Le DMOS (Descriptif de Mode Operatoire de Soudage) et le QMOS (Qualification du Mode Operatoire de Soudage) sont des documents fondamentaux pour la maitrise de vos operations de soudage. Leur redaction et qualification requerent une expertise technique pointue.\n\nNous prenons en charge l'integralite du processus : analyse des exigences, redaction du DMOS, organisation des essais de qualification, suivi en laboratoire et constitution du dossier final.",
    benefits: [
      "Documents conformes aux dernieres revisions normatives",
      "Optimisation des domaines de validite",
      "Reduction du nombre d'eprouvettes et couts d'essais",
      "Accompagnement complet lors des essais",
      "Base documentaire structuree et tracable",
    ],
    industries: ['Fabrication soudee tous secteurs', 'Chaudronnerie & Tuyauterie', 'Charpente metallique', 'Equipements sous pression', 'Aeronautique & Spatial'],
    process: [
      { step: '01', label: 'Analyse', desc: "Etude des exigences clients et normatives" },
      { step: '02', label: 'Redaction', desc: "Elaboration du DMOS avec parametres optimises" },
      { step: '03', label: 'Qualification', desc: "Realisation et suivi des assemblages de qualification" },
      { step: '04', label: 'Dossier', desc: "Constitution du QMOS et archivage documentaire" },
    ],
  },
  {
    slug: 'assistance-chantier',
    icon: 'HardHat',
    title: 'Assistance Technique Chantier',
    tagline: 'Expert terrain a vos cotes',
    shortDesc: "Presence d'un expert soudage directement sur vos chantiers pour garantir la qualite d'execution en temps reel.",
    heroImage: IMAGES.chantier,
    fullDesc: "L'assistance technique sur chantier est un service indispensable pour les projets complexes ou la qualite de soudage est critique. Notre expert se deplace directement sur vos sites de construction ou de maintenance pour superviser les operations.\n\nCette presence terrain permet d'anticiper les problemes, de prendre des decisions techniques eclairees en temps reel et de garantir la conformite des assemblages avec les exigences du projet.",
    benefits: [
      "Resolution immediate des aleas techniques",
      "Suivi qualite et conformite en continu",
      "Reduction des non-conformites et reprises couteuses",
      "Interface avec les organismes de controle et clients",
      "Reporting quotidien structure",
    ],
    industries: ['Construction & Genie civil', 'Petrochimie & Raffinerie', 'Energie & Nucleaire', 'Naval & Offshore', 'Pipeline & Gazoduc'],
    process: [
      { step: '01', label: 'Preparation', desc: "Analyse des plans, procedures et exigences du projet" },
      { step: '02', label: 'Mobilisation', desc: "Deploiement sur site et coordination avec les equipes" },
      { step: '03', label: 'Supervision', desc: "Suivi quotidien des operations de soudage" },
      { step: '04', label: 'Cloture', desc: "Rapport final et dossier de fin de chantier" },
    ],
  },
  {
    slug: 'formation-soudage',
    icon: 'GraduationCap',
    title: 'Formation en Soudage',
    tagline: 'Montez en competences vos equipes',
    shortDesc: "Programmes de formation sur mesure pour vos soudeurs, inspecteurs et ingenieurs, du niveau initiation a l'expertise avancee.",
    heroImage: IMAGES.formation,
    fullDesc: "La formation est un investissement strategique pour garantir la qualite de vos fabrications et la competitivite de votre entreprise. Nos programmes sont concus sur mesure selon votre secteur, vos procedes et vos objectifs.\n\nNous intervenons aussi bien pour la sensibilisation technologique que pour la preparation aux certifications internationales (IWS, IWT, IWE, COFREND).",
    benefits: [
      "Programmes 100% personnalises selon votre contexte",
      "Formation theorique + pratique en atelier",
      "Preparation aux certifications IIW/COFREND",
      "Supports pedagogiques professionnels fournis",
      "Evaluation des acquis et attestation de formation",
    ],
    industries: ['Toutes industries de fabrication', 'Centres de formation professionnelle', "Bureaux d'etudes & BE", 'Organismes de controle', 'Enseignement technique'],
    process: [
      { step: '01', label: 'Diagnostic', desc: "Evaluation du niveau initial et des objectifs" },
      { step: '02', label: 'Programme', desc: "Elaboration du plan de formation personnalise" },
      { step: '03', label: 'Formation', desc: "Sessions theoriques et pratiques en atelier" },
      { step: '04', label: 'Certification', desc: "Evaluation finale et delivrance des attestations" },
    ],
  },
  {
    slug: 'controle-qualite',
    icon: 'ShieldCheck',
    title: 'Controle Qualite & Conformite',
    tagline: 'Votre systeme qualite soudage certifie',
    shortDesc: "Mise en place et suivi de votre systeme qualite soudage conformement aux normes ISO 3834, EN 1090 et codes internationaux.",
    heroImage: IMAGES.audit,
    fullDesc: "La conformite normative est un enjeu business majeur : elle conditionne votre acces aux marches, votre credibilite client et votre licence d'exploitation. Nous vous accompagnons de la mise en place initiale jusqu'a l'obtention et le maintien de vos certifications.\n\nNotre approche pragmatique se concentre sur l'efficacite operationnelle : nous construisons des systemes qualite robustes, adaptes a votre taille et votre organisation, sans bureaucratie inutile.",
    benefits: [
      "Certification ISO 3834 / EN 1090 obtenue et maintenue",
      "Systeme documentaire complet et operationnel",
      "Audits internes et preparation aux audits externes",
      "Indicateurs qualite (KPI) personnalises",
      "Formation de votre equipe qualite interne",
    ],
    industries: ['Construction metallique EN 1090', 'Chaudronnerie ISO 3834', 'Tuyauterie EN 13480', 'Equipements sous pression', 'Structures metalliques'],
    process: [
      { step: '01', label: "Etat des lieux", desc: "Audit initial et analyse des ecarts de conformite" },
      { step: '02', label: 'Mise en place', desc: "Redaction des procedures et systeme documentaire" },
      { step: '03', label: 'Certification', desc: "Preparation et accompagnement lors de l'audit de certification" },
      { step: '04', label: 'Maintien', desc: "Suivi annuel et mises a jour normatives" },
    ],
  },
  {
    slug: 'expertise-defauts',
    icon: 'Search',
    title: 'Expertise & Analyse de Defauts',
    tagline: 'Diagnostics techniques approfondis',
    shortDesc: "Investigation approfondie des defauts de soudure, analyses metallurgiques et recommandations correctives pour prevenir les recurrences.",
    heroImage: IMAGES.expertise,
    fullDesc: "Face a un defaut recurrent, une rupture inattendue ou un litige technique, une expertise independante et rigoureuse est indispensable. Nous realisons des investigations approfondies combinant analyse macroscopique, micrographie, essais mecaniques et analyse chimique.\n\nNos rapports d'expertise sont reconnus comme documents techniques de reference, utilisables dans le cadre de litiges contractuels ou de procedures d'assurance.",
    benefits: [
      "Identification precise des causes racines",
      "Rapport d'expertise illustre et argumente",
      "Recommandations correctives et preventives concretes",
      "Support technique pour litiges et assurances",
      "Prevention garantie des recurrences",
    ],
    industries: ['Toutes industries de fabrication soudee', 'Expertises judiciaires & assurances', 'Maintenance industrielle', 'Aeronautique & Defense', 'Nucleaire & Energie'],
    process: [
      { step: '01', label: 'Collecte', desc: "Prelevement des pieces et recueil du contexte" },
      { step: '02', label: 'Analyse', desc: "Examens macro/micrographique, essais mecaniques" },
      { step: '03', label: 'Diagnostic', desc: "Identification des causes racines et mecanismes" },
      { step: '04', label: 'Rapport', desc: "Livraison du rapport d'expertise et des recommandations" },
    ],
  },
];
