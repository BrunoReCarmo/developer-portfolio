import 'server-only'
import type { Locale } from '@base/i18n-config'

// Enumeramos todos os dicionários aqui para melhor suporte a linting e typescript
// Também obtemos a importação padrão para tipos
const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  es: () => import('@/dictionaries/es.json').then((module) => module.default),
  pt: () => import('@/dictionaries/pt.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()