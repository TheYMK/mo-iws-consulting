export const SITE = {
  expertName: 'MO IWS CONSULTING',
  consultantName: 'Madi Ousseni',
  title: 'Expert en Soudage IWS',
  subtitle: 'Coordination, Inspection & Assurance Qualite',
  experience: 20,
  phone: '+33 0666656443',
  whatsapp: '330666656443',
  email: 'contact@mo-iws-consulting.com',
  location: 'Saint Denis, La Réunion',
  linkedin: 'https://www.linkedin.com/in/madi-ousseni-soudage',
  certifications: [
    'IWS - International Welding Specialist',
    'Coordination soudage ISO 14731',
    'Assurance qualite soudage ISO 3834',
  ],
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
    slug: 'coordination-soudage',
    icon: 'Wrench',
    title: 'Coordination Soudage (ISO 14731)',
    tagline: 'Maitrise technique et conformite',
    shortDesc: "Prise en charge complete de la coordination des activites de soudage conformement a la norme ISO 14731.",
    heroImage: IMAGES.chantier,
    fullDesc: "La coordination en soudage est une fonction essentielle pour garantir la maitrise technique et la conformite de vos operations. Conformement a la norme ISO 14731, nous assurons l'organisation complete des activites de soudage, de la planification a la validation finale.\n\nNotre intervention couvre la gestion des exigences techniques, l'interface entre production et qualite, ainsi que le suivi rigoureux de la conformite des travaux sur le terrain.",
    benefits: [
      "Organisation optimale des operations de soudage",
      "Gestion complete des exigences techniques",
      "Interface efficace entre production et qualite",
      "Suivi rigoureux de la conformite des travaux",
      "Conformite garantie a la norme ISO 14731",
    ],
    industries: ['Energie (centrales thermiques, hydroelectriques)', 'Industrie lourde', 'Tuyauterie industrielle', 'Chaudronnerie & structures metalliques', 'Naval & maintenance marine'],
    process: [
      { step: '01', label: 'Analyse', desc: "Evaluation du contexte et des exigences de coordination" },
      { step: '02', label: 'Organisation', desc: "Planification et structuration des operations de soudage" },
      { step: '03', label: 'Supervision', desc: "Suivi terrain et interface production/qualite" },
      { step: '04', label: 'Validation', desc: "Verification de la conformite et reporting" },
    ],
  },
  {
    slug: 'inspection-controle',
    icon: 'SearchCheck',
    title: 'Inspection & Controle Qualite',
    tagline: 'Qualite et conformite assurees',
    shortDesc: "Realisation d'inspections et de controles qualite sur les operations de soudage.",
    heroImage: IMAGES.audit,
    fullDesc: "L'inspection et le controle qualite sont indispensables pour garantir la fiabilite et la conformite de vos assemblages soudes. Nous intervenons directement sur vos sites pour verifier la qualite des soudures, controler les parametres de soudage et assurer le suivi des non-conformites.\n\nNotre approche rigoureuse permet d'identifier rapidement les ecarts et de mettre en place les actions correctives necessaires pour valider vos assemblages.",
    benefits: [
      "Verification visuelle approfondie des soudures",
      "Controle precis des parametres de soudage",
      "Suivi structure des non-conformites",
      "Validation fiable des assemblages",
      "Reduction des reprises et des couts associes",
    ],
    industries: ['Energie (centrales thermiques, hydroelectriques)', 'Industrie lourde', 'Tuyauterie industrielle', 'Chaudronnerie & structures metalliques', 'Naval & maintenance marine'],
    process: [
      { step: '01', label: 'Preparation', desc: "Analyse des plans et des exigences de controle" },
      { step: '02', label: 'Inspection', desc: "Verification visuelle et controle des parametres" },
      { step: '03', label: 'Analyse', desc: "Identification des non-conformites et ecarts" },
      { step: '04', label: 'Rapport', desc: "Validation des assemblages et recommandations" },
    ],
  },
  {
    slug: 'assurance-qualite',
    icon: 'ShieldCheck',
    title: 'Assurance Qualite & Audit (ISO 3834)',
    tagline: 'Systemes qualite securises',
    shortDesc: "Mise en place et suivi des systemes qualite lies au soudage.",
    heroImage: IMAGES.expertise,
    fullDesc: "L'assurance qualite en soudage est un levier essentiel pour securiser vos processus et repondre aux exigences de vos clients. Nous vous accompagnons dans la mise en place de systemes qualite conformes a la norme ISO 3834, depuis l'audit initial jusqu'a l'amelioration continue.\n\nNotre expertise couvre l'evaluation des pratiques de soudage, la mise en place de procedures qualite adaptees a votre organisation et le suivi des indicateurs de performance.",
    benefits: [
      "Audit de conformite ISO 3834 complet",
      "Evaluation objective des pratiques de soudage",
      "Procedures qualite sur mesure",
      "Demarche d'amelioration continue",
      "Conformite aux exigences clients et normatives",
    ],
    industries: ['Energie (centrales thermiques, hydroelectriques)', 'Industrie lourde', 'Tuyauterie industrielle', 'Chaudronnerie & structures metalliques', 'Projets internationaux'],
    process: [
      { step: '01', label: 'Audit', desc: "Evaluation initiale des pratiques et de la conformite" },
      { step: '02', label: 'Plan', desc: "Definition des actions et procedures qualite" },
      { step: '03', label: 'Deploiement', desc: "Mise en place des procedures et formation des equipes" },
      { step: '04', label: 'Suivi', desc: "Amelioration continue et maintien de la conformite" },
    ],
  },
  {
    slug: 'qualification-procedes',
    icon: 'FileText',
    title: 'Qualification des Procedes (DMOS / QMOS)',
    tagline: 'Procedes valides et reproductibles',
    shortDesc: "Accompagnement dans la qualification des modes operatoires de soudage.",
    heroImage: IMAGES.dmos,
    fullDesc: "La qualification des procedes de soudage est une etape incontournable pour garantir la reproductibilite et la fiabilite de vos assemblages. Nous vous accompagnons dans la redaction et la validation des DMOS, le suivi des essais QMOS et la verification de la conformite aux normes en vigueur.\n\nNotre objectif est de vous fournir des procedes valides, documentes et conformes, prets a etre deployes en production.",
    benefits: [
      "Redaction et validation DMOS conformes",
      "Suivi rigoureux des essais QMOS",
      "Verification complete des parametres",
      "Conformite aux normes en vigueur",
      "Procedes reproductibles et documentes",
    ],
    industries: ['Energie (centrales thermiques, hydroelectriques)', 'Industrie lourde', 'Tuyauterie industrielle', 'Chaudronnerie & structures metalliques', 'Aeronautique & Spatial'],
    process: [
      { step: '01', label: 'Analyse', desc: "Etude des exigences et des normes applicables" },
      { step: '02', label: 'Redaction', desc: "Elaboration du DMOS avec parametres optimises" },
      { step: '03', label: 'Essais', desc: "Suivi et validation des assemblages de qualification" },
      { step: '04', label: 'Dossier', desc: "Constitution du QMOS et archivage documentaire" },
    ],
  },
  {
    slug: 'supervision-travaux',
    icon: 'HardHat',
    title: 'Supervision de Travaux',
    tagline: 'Bonne execution garantie',
    shortDesc: "Encadrement et suivi des equipes sur chantier.",
    heroImage: IMAGES.chantier,
    fullDesc: "La supervision de travaux est essentielle pour assurer la bonne execution des operations de soudage sur chantier. Notre expert intervient directement aupres de vos equipes pour superviser les soudeurs, veiller au respect des procedures et gerer les aleas techniques.\n\nUn reporting structure permet de suivre l'avancement et de garantir la qualite des travaux en temps reel.",
    benefits: [
      "Supervision directe des soudeurs sur site",
      "Respect strict des procedures etablies",
      "Gestion efficace des aleas techniques",
      "Reporting chantier structure et regulier",
      "Reduction des non-conformites terrain",
    ],
    industries: ['Energie (centrales thermiques, hydroelectriques)', 'Industrie lourde', 'Tuyauterie industrielle', 'Naval & maintenance marine', 'Projets internationaux'],
    process: [
      { step: '01', label: 'Preparation', desc: "Analyse des plans, procedures et objectifs du chantier" },
      { step: '02', label: 'Mobilisation', desc: "Deploiement sur site et coordination avec les equipes" },
      { step: '03', label: 'Supervision', desc: "Suivi quotidien des operations et gestion des aleas" },
      { step: '04', label: 'Cloture', desc: "Rapport final et bilan de fin de chantier" },
    ],
  },
  {
    slug: 'suivi-fabrication',
    icon: 'Factory',
    title: 'Suivi de Fabrication & Fournisseurs',
    tagline: 'Qualite de la chaine de production',
    shortDesc: "Suivi technique des projets et des sous-traitants.",
    heroImage: IMAGES.formation,
    fullDesc: "Le suivi de fabrication et des fournisseurs est un maillon essentiel pour garantir la qualite de votre chaine de production. Nous assurons le controle de fabrication, le suivi des sous-traitants, la verification documentaire et la reception des travaux.\n\nNotre intervention permet de detecter les ecarts au plus tot et d'assurer la conformite des livrables a chaque etape du processus.",
    benefits: [
      "Controle de fabrication rigoureux",
      "Suivi efficace des fournisseurs et sous-traitants",
      "Verification documentaire complete",
      "Reception structuree des travaux",
      "Detection precoce des ecarts qualite",
    ],
    industries: ['Energie (centrales thermiques, hydroelectriques)', 'Industrie lourde', 'Tuyauterie industrielle', 'Chaudronnerie & structures metalliques', 'Projets internationaux'],
    process: [
      { step: '01', label: 'Cadrage', desc: "Definition du perimetre de suivi et des exigences" },
      { step: '02', label: 'Controle', desc: "Inspection en cours de fabrication" },
      { step: '03', label: 'Verification', desc: "Revue documentaire et controle des livrables" },
      { step: '04', label: 'Reception', desc: "Validation finale et rapport de reception" },
    ],
  },
];
