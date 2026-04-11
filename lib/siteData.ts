export const SITE = {
  expertName: "MO IWS CONSULTING",
  consultantName: "Madi Ousseni",
  title: "Expert en Soudage IWS",
  subtitle: "Coordination, Inspection & Assurance Qualité",
  experience: 20,
  phone: "+33 0666656443",
  whatsapp: "330666656443",
  email: "contact@mo-iws-consulting.com",
  location: "Saint Denis, La Réunion",
  linkedin: "https://www.linkedin.com/in/ousseni-madi-12a501402/",
  certifications: [
    "IWS - International Welding Specialist",
    "Coordination soudage ISO 14731",
    "Assurance qualité soudage ISO 3834",
  ],
};

export const IMAGES = {
  hero: "https://media.base44.com/images/public/69d538094c4f41d25d8d8a1f/917c8ef71_generated_image.png",
  expert:
    "https://media.base44.com/images/public/69d538094c4f41d25d8d8a1f/3f739d261_generated_image.png",
  audit:
    "https://media.base44.com/images/public/69d538094c4f41d25d8d8a1f/d403c0e9c_generated_image.png",
  dmos: "https://media.base44.com/images/public/69d538094c4f41d25d8d8a1f/f8187cc67_generated_image.png",
  formation:
    "https://media.base44.com/images/public/69d538094c4f41d25d8d8a1f/b226170cf_generated_image.png",
  chantier:
    "https://media.base44.com/images/public/69d538094c4f41d25d8d8a1f/186102783_generated_image.png",
  expertise:
    "https://media.base44.com/images/public/69d538094c4f41d25d8d8a1f/9d034c0d6_generated_image.png",
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
    slug: "coordination-soudage",
    icon: "Wrench",
    title: "Coordination Soudage (ISO 14731)",
    tagline: "Maîtrise technique et conformité",
    shortDesc:
      "Prise en charge complète de la coordination des activités de soudage conformément à la norme ISO 14731.",
    heroImage: IMAGES.chantier,
    fullDesc:
      "La coordination en soudage est une fonction essentielle pour garantir la maîtrise technique et la conformité de vos opérations. Conformément à la norme ISO 14731, nous assurons l'organisation complète des activités de soudage, de la planification à la validation finale.\n\nNotre intervention couvre la gestion des exigences techniques, l'interface entre production et qualité, ainsi que le suivi rigoureux de la conformité des travaux sur le terrain.",
    benefits: [
      "Organisation optimale des opérations de soudage",
      "Gestion complète des exigences techniques",
      "Interface efficace entre production et qualité",
      "Suivi rigoureux de la conformité des travaux",
      "Conformité garantie à la norme ISO 14731",
    ],
    industries: [
      "Énergie (centrales thermiques, hydroélectriques)",
      "Industrie lourde",
      "Tuyauterie industrielle",
      "Chaudronnerie & structures métalliques",
      "Naval & maintenance marine",
    ],
    process: [
      {
        step: "01",
        label: "Analyse",
        desc: "Évaluation du contexte et des exigences de coordination",
      },
      {
        step: "02",
        label: "Organisation",
        desc: "Planification et structuration des opérations de soudage",
      },
      {
        step: "03",
        label: "Supervision",
        desc: "Suivi terrain et interface production/qualité",
      },
      {
        step: "04",
        label: "Validation",
        desc: "Vérification de la conformité et reporting",
      },
    ],
  },
  {
    slug: "inspection-controle",
    icon: "SearchCheck",
    title: "Inspection & Contrôle Qualité",
    tagline: "Qualité et conformité assurées",
    shortDesc:
      "Réalisation d'inspections et de contrôles qualité sur les opérations de soudage.",
    heroImage: IMAGES.audit,
    fullDesc:
      "L'inspection et le contrôle qualité sont indispensables pour garantir la fiabilité et la conformité de vos assemblages soudés. Nous intervenons directement sur vos sites pour vérifier la qualité des soudures, contrôler les paramètres de soudage et assurer le suivi des non-conformités.\n\nNotre approche rigoureuse permet d'identifier rapidement les écarts et de mettre en place les actions correctives nécessaires pour valider vos assemblages.",
    benefits: [
      "Vérification visuelle approfondie des soudures",
      "Contrôle précis des paramètres de soudage",
      "Suivi structuré des non-conformités",
      "Validation fiable des assemblages",
      "Réduction des reprises et des coûts associés",
    ],
    industries: [
      "Énergie (centrales thermiques, hydroélectriques)",
      "Industrie lourde",
      "Tuyauterie industrielle",
      "Chaudronnerie & structures métalliques",
      "Naval & maintenance marine",
    ],
    process: [
      {
        step: "01",
        label: "Préparation",
        desc: "Analyse des plans et des exigences de contrôle",
      },
      {
        step: "02",
        label: "Inspection",
        desc: "Vérification visuelle et contrôle des paramètres",
      },
      {
        step: "03",
        label: "Analyse",
        desc: "Identification des non-conformités et écarts",
      },
      {
        step: "04",
        label: "Rapport",
        desc: "Validation des assemblages et recommandations",
      },
    ],
  },
  {
    slug: "assurance-qualite",
    icon: "ShieldCheck",
    title: "Assurance Qualité & Audit (ISO 3834)",
    tagline: "Systèmes qualité sécurisés",
    shortDesc: "Mise en place et suivi des systèmes qualité liés au soudage.",
    heroImage: IMAGES.expertise,
    fullDesc:
      "L'assurance qualité en soudage est un levier essentiel pour sécuriser vos processus et répondre aux exigences de vos clients. Nous vous accompagnons dans la mise en place de systèmes qualité conformes à la norme ISO 3834, depuis l'audit initial jusqu'à l'amélioration continue.\n\nNotre expertise couvre l'évaluation des pratiques de soudage, la mise en place de procédures qualité adaptées à votre organisation et le suivi des indicateurs de performance.",
    benefits: [
      "Audit de conformité ISO 3834 complet",
      "Évaluation objective des pratiques de soudage",
      "Procédures qualité sur mesure",
      "Démarche d'amélioration continue",
      "Conformité aux exigences clients et normatives",
    ],
    industries: [
      "Énergie (centrales thermiques, hydroélectriques)",
      "Industrie lourde",
      "Tuyauterie industrielle",
      "Chaudronnerie & structures métalliques",
      "Projets internationaux",
    ],
    process: [
      {
        step: "01",
        label: "Audit",
        desc: "Évaluation initiale des pratiques et de la conformité",
      },
      {
        step: "02",
        label: "Plan",
        desc: "Définition des actions et procédures qualité",
      },
      {
        step: "03",
        label: "Déploiement",
        desc: "Mise en place des procédures et formation des équipes",
      },
      {
        step: "04",
        label: "Suivi",
        desc: "Amélioration continue et maintien de la conformité",
      },
    ],
  },
  {
    slug: "qualification-procedes",
    icon: "FileText",
    title: "Qualification des Procédés (DMOS / QMOS)",
    tagline: "Procédés validés et reproductibles",
    shortDesc:
      "Accompagnement dans la qualification des modes opératoires de soudage.",
    heroImage: IMAGES.dmos,
    fullDesc:
      "La qualification des procédés de soudage est une étape incontournable pour garantir la reproductibilité et la fiabilité de vos assemblages. Nous vous accompagnons dans la rédaction et la validation des DMOS, le suivi des essais QMOS et la vérification de la conformité aux normes en vigueur.\n\nNotre objectif est de vous fournir des procédés validés, documentés et conformes, prêts à être déployés en production.",
    benefits: [
      "Rédaction et validation DMOS conformes",
      "Suivi rigoureux des essais QMOS",
      "Vérification complète des paramètres",
      "Conformité aux normes en vigueur",
      "Procédés reproductibles et documentés",
    ],
    industries: [
      "Énergie (centrales thermiques, hydroélectriques)",
      "Industrie lourde",
      "Tuyauterie industrielle",
      "Chaudronnerie & structures métalliques",
      "Aéronautique & Spatial",
    ],
    process: [
      {
        step: "01",
        label: "Analyse",
        desc: "Étude des exigences et des normes applicables",
      },
      {
        step: "02",
        label: "Rédaction",
        desc: "Élaboration du DMOS avec paramètres optimisés",
      },
      {
        step: "03",
        label: "Essais",
        desc: "Suivi et validation des assemblages de qualification",
      },
      {
        step: "04",
        label: "Dossier",
        desc: "Constitution du QMOS et archivage documentaire",
      },
    ],
  },
  {
    slug: "supervision-travaux",
    icon: "HardHat",
    title: "Supervision de Travaux",
    tagline: "Bonne exécution garantie",
    shortDesc: "Encadrement et suivi des équipes sur chantier.",
    heroImage: IMAGES.chantier,
    fullDesc:
      "La supervision de travaux est essentielle pour assurer la bonne exécution des opérations de soudage sur chantier. Notre expert intervient directement auprès de vos équipes pour superviser les soudeurs, veiller au respect des procédures et gérer les aléas techniques.\n\nUn reporting structuré permet de suivre l'avancement et de garantir la qualité des travaux en temps réel.",
    benefits: [
      "Supervision directe des soudeurs sur site",
      "Respect strict des procédures établies",
      "Gestion efficace des aléas techniques",
      "Reporting chantier structuré et régulier",
      "Réduction des non-conformités terrain",
    ],
    industries: [
      "Énergie (centrales thermiques, hydroélectriques)",
      "Industrie lourde",
      "Tuyauterie industrielle",
      "Naval & maintenance marine",
      "Projets internationaux",
    ],
    process: [
      {
        step: "01",
        label: "Préparation",
        desc: "Analyse des plans, procédures et objectifs du chantier",
      },
      {
        step: "02",
        label: "Mobilisation",
        desc: "Déploiement sur site et coordination avec les équipes",
      },
      {
        step: "03",
        label: "Supervision",
        desc: "Suivi quotidien des opérations et gestion des aléas",
      },
      {
        step: "04",
        label: "Clôture",
        desc: "Rapport final et bilan de fin de chantier",
      },
    ],
  },
  {
    slug: "suivi-fabrication",
    icon: "Factory",
    title: "Suivi de Fabrication & Fournisseurs",
    tagline: "Qualité de la chaîne de production",
    shortDesc: "Suivi technique des projets et des sous-traitants.",
    heroImage: IMAGES.formation,
    fullDesc:
      "Le suivi de fabrication et des fournisseurs est un maillon essentiel pour garantir la qualité de votre chaîne de production. Nous assurons le contrôle de fabrication, le suivi des sous-traitants, la vérification documentaire et la réception des travaux.\n\nNotre intervention permet de détecter les écarts au plus tôt et d'assurer la conformité des livrables à chaque étape du processus.",
    benefits: [
      "Contrôle de fabrication rigoureux",
      "Suivi efficace des fournisseurs et sous-traitants",
      "Vérification documentaire complète",
      "Réception structurée des travaux",
      "Détection précoce des écarts qualité",
    ],
    industries: [
      "Énergie (centrales thermiques, hydroélectriques)",
      "Industrie lourde",
      "Tuyauterie industrielle",
      "Chaudronnerie & structures métalliques",
      "Projets internationaux",
    ],
    process: [
      {
        step: "01",
        label: "Cadrage",
        desc: "Définition du périmètre de suivi et des exigences",
      },
      {
        step: "02",
        label: "Contrôle",
        desc: "Inspection en cours de fabrication",
      },
      {
        step: "03",
        label: "Vérification",
        desc: "Revue documentaire et contrôle des livrables",
      },
      {
        step: "04",
        label: "Réception",
        desc: "Validation finale et rapport de réception",
      },
    ],
  },
];
