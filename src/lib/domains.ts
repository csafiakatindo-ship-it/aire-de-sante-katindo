export const DOMAINS = [
  'SANTE_COMMUNAUTAIRE',
  'MATERNITE',
  'PEDIATRIE',
  'CONSULTATION_EXTERNE',
  'PHARMACIE',
] as const;

export type DomainType = typeof DOMAINS[number];

export interface DomainOption {
  id: DomainType;
  label: string;
  description?: string;
}

export const DOMAIN_OPTIONS: DomainOption[] = [
  { id: 'SANTE_COMMUNAUTAIRE', label: 'Santé Communautaire', description: 'Sensibilisation et suivi communautaire' },
  { id: 'MATERNITE', label: 'Maternité & Santé Maternelle' },
  { id: 'PEDIATRIE', label: 'Pédiatrie' },
  { id: 'CONSULTATION_EXTERNE', label: 'Consultation Externe' },
  { id: 'PHARMACIE', label: 'Gestion Pharmacie' },
];
