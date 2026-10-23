export type Domain = {
  n: number;
  title: string;
  icon: string;
  intro: string;
  sheet: string;
  items: [string, string][];
};

export const domains: Domain[] = [
  {
    n: 1,
    icon: "🩺",
    title: "Soins médicaux et activités curatives",
    intro: "Consultation des malades, signes vitaux et examen clinique.",
    sheet: "Protocoles & suivi des maladies courantes",
    items: [
      ["Diagnostic & prise en charge", "Paludisme, fièvre et infections respiratoires selon le protocole national"],
      ["Soins & pansements", "Soins des plaies et administration des prescriptions"],
      ["Urgences & références", "Premiers secours, stabilisation et référence vers l'hôpital général"],
    ],
  },
  {
    n: 2,
    icon: "🤰",
    title: "Santé maternelle",
    intro: "Consultations prénatales (CPN) et surveillance de la grossesse.",
    sheet: "Maternité & accouchement",
    items: [
      ["Plan de naissance", "Préparation à l'accouchement et signes de danger"],
      ["Soins postnatals", "Suivi de la mère et du nouveau-né"],
      ["Planification familiale", "Conseils et choix des méthodes contraceptives"],
    ],
  },
  {
    n: 3,
    icon: "👶",
    title: "Santé de l'enfant",
    intro: "Suivi de la croissance, pesée et mesure de la taille.",
    sheet: "Consultations & supplémentation",
    items: [
      ["Supplémentation", "Vitamine A et déparasitage"],
      ["Conseils aux mères", "Allaitement exclusif et alimentation complémentaire"],
      ["PCIME", "Signes de danger chez le nouveau-né"],
    ],
  },
  {
    n: 4,
    icon: "💉",
    title: "Vaccination",
    intro: "Séances fixes et avancées de vaccination de routine.",
    sheet: "Stocks de vaccins & chaîne du froid",
    items: [
      ["Calendrier vaccinal", "Enregistrement des doses et suivi des enfants"],
      ["Chaîne du froid", "Contrôle quotidien des températures"],
      ["Rattrapage", "Recherche active des enfants ayant manqué des doses"],
    ],
  },
  {
    n: 5,
    icon: "🛡️",
    title: "Prévention et lutte contre les maladies",
    intro: "Dépistage du paludisme, de la tuberculose et du VIH/IST.",
    sheet: "Sensibilisation & moustiquaires",
    items: [
      ["Moustiquaires (MILD)", "Promotion de l'utilisation correcte"],
      ["Choléra & diarrhée", "Protocoles d'hygiène et désinfection"],
      ["Notification", "Signalement des maladies à potentiel épidémique"],
    ],
  },
  {
    n: 6,
    icon: "🍏",
    title: "Nutrition",
    intro: "Dépistage de la malnutrition par périmètre brachial.",
    sheet: "Enfant malnutri & intrants",
    items: [
      ["Évaluation", "Prise en charge anthropométrique et suivi nutritionnel"],
      ["Conseils de régime", "Produits locaux riches, bouillies enrichies"],
      ["Intrants", "Farines enrichies, Plumpy'Nut et compléments"],
    ],
  },
  {
    n: 7,
    icon: "🚰",
    title: "Hygiène, eau et assainissement",
    intro: "Lavage des mains au savon et accès à l'eau potable.",
    sheet: "Plan d'assainissement & salubrité",
    items: [
      ["Gestion des déchets", "Tri et élimination sécurisée"],
      ["Gîtes larvaires", "Réduction des eaux stagnantes, entretien des latrines"],
      ["Journées de salubrité", "Mobilisation communautaire dans les quartiers"],
    ],
  },
  {
    n: 8,
    icon: "📢",
    title: "Sensibilisation et éducation sanitaire",
    intro: "Causeries éducatives dans les villages et quartiers.",
    sheet: "Calendrier des causeries & thèmes",
    items: [
      ["Thèmes prioritaires", "Paludisme, hygiène, santé maternelle, vaccination"],
      ["Adolescents", "Prévention des grossesses précoces et des VBG"],
      ["Écoles", "Éducation sanitaire dans les établissements"],
    ],
  },
  {
    n: 9,
    icon: "🏠",
    title: "Activités communautaires",
    intro: "Visites à domicile et suivi des ménages vulnérables.",
    sheet: "Rapport des relais communautaires (RECO)",
    items: [
      ["Perdus de vue", "Enfants non vaccinés et patients sous traitement"],
      ["Mobilisation", "Réunions RECO et leaders locaux"],
      ["Orientation", "Référencement vers le centre de santé"],
    ],
  },
  {
    n: 10,
    icon: "🏫",
    title: "Santé scolaire et adolescente",
    intro: "Éducation sanitaire en milieu scolaire.",
    sheet: "Intervention en établissement scolaire",
    items: [
      ["Hygiène personnelle", "Bucco-dentaire, corporelle et menstruelle"],
      ["Puberté", "Information adaptée sur la santé reproductive"],
      ["Dépistage", "Problèmes de santé chez les élèves"],
    ],
  },
  {
    n: 11,
    icon: "📊",
    title: "Surveillance épidémiologique",
    intro: "Enregistrement et analyse des maladies prioritaires.",
    sheet: "Notification & alertes",
    items: [
      ["Alerte précoce", "Détection rapide des cas suspects"],
      ["Rapports hebdomadaires", "Transmission à la Zone de Santé"],
      ["Investigations", "Suivi des contacts et mesures de contrôle"],
    ],
  },
  {
    n: 12,
    icon: "📦",
    title: "Pharmacie et médicaments",
    intro: "Réception, rangement et conservation des médicaments essentiels.",
    sheet: "Fiche de stock & périmés",
    items: [
      ["Inventaire", "Consommation mensuelle, prévention des ruptures"],
      ["Distribution", "Dispensation rationnelle des prescriptions"],
      ["Sécurité", "Destruction contrôlée des produits périmés"],
    ],
  },
  {
    n: 13,
    icon: "🔬",
    title: "Laboratoire et diagnostic",
    intro: "Réalisation des tests rapides et examens de base.",
    sheet: "Registre des examens",
    items: [
      ["Tests rapides", "Paludisme, VIH et autres TDR"],
      ["Examens de base", "Analyses courantes au laboratoire"],
      ["Qualité", "Contrôle et traçabilité des résultats"],
    ],
  },
];
