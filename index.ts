export type TCountry =
  | 'UA'
  | 'DE'
  | 'FR'
  | 'IT'
  | 'ES'
  | 'PL'
  | 'CZ'
  | 'RO'
  | 'LT'
  | 'NL'
  | 'UK_NIN'
  | 'UK_UTR'
  | 'US_SSN'
  | 'US_ITIN'
  | 'US_EIN'
  | 'CA_SIN'
  | 'CA_BN'

// 🇺🇦 Україна (ІПН)
export const UA_TIN_REGEX = /^\d{10}$/
// 🇩🇪 Німеччина (IdNr)
export const DE_TIN_REGEX = /^\d{11}$/
// 🇫🇷 Франція (Numéro fiscal)
export const FR_TIN_REGEX = /^\d{13}$/
// 🇮🇹 Італія (Codice fiscale)
export const IT_TIN_REGEX = /^[A-Z]{6}\d{2}[A-EHLMPRST]\d{2}[A-Z]\d{3}[A-Z]$/
// 🇪🇸 Іспанія (NIF)
export const ES_TIN_REGEX = /^[XYZ]?\d{7}[A-Z]$/
// 🇵🇱 Польща (NIP)
export const PL_TIN_REGEX = /^\d{10}$/
// 🇨🇿 Чехія (DIČ)
export const CZ_TIN_REGEX = /^CZ\d{8,10}$/
// 🇷🇴 Румунія (CUI)
export const RO_TIN_REGEX = /^\d{2,10}$/
// 🇱🇹 Литва (Asmens kodas)
export const LT_TIN_REGEX = /^\d{11}$/
// 🇳🇱 Нідерланди (BSN)
export const NL_TIN_REGEX = /^\d{9}$/
// 🇬🇧 Велика Британія
//      National Insurance Number (NIN):
export const UK_NIN_REGEX = /^[A-CEGHJ-PR-TW-Z]{2}\d{6}[A-D]?$/
//      UTR (Unique Taxpayer Reference):
export const UK_UTR_REGEX = /^\d{10}$/
// 🇺🇸 США
//      SSN:
export const US_SSN_REGEX = /^\d{3}-\d{2}-\d{4}$/
//      ITIN:
export const US_ITIN_REGEX = /^9\d{2}-\d{2}-\d{4}$/
//      EIN:
export const US_EIN_REGEX = /^\d{2}-\d{7}$/
// 🇨🇦 Канада
//      SIN:
export const CA_SIN_REGEX = /^\d{3}-\d{3}-\d{3}$/
//      BN:
export const CA_BN_REGEX = /^\d{9}[A-Z]{2}\d{4}$/

export function validateTIN(code: string, country: TCountry): boolean {
  const regexMap: Record<string, RegExp> = {
    UA: UA_TIN_REGEX,
    DE: DE_TIN_REGEX,
    FR: FR_TIN_REGEX,
    IT: IT_TIN_REGEX,
    ES: ES_TIN_REGEX,
    PL: PL_TIN_REGEX,
    CZ: CZ_TIN_REGEX,
    RO: RO_TIN_REGEX,
    LT: LT_TIN_REGEX,
    NL: NL_TIN_REGEX,
    UK_NIN: UK_NIN_REGEX,
    UK_UTR: UK_UTR_REGEX,
    US_SSN: US_SSN_REGEX,
    US_ITIN: US_ITIN_REGEX,
    US_EIN: US_EIN_REGEX,
    CA_SIN: CA_SIN_REGEX,
    CA_BN: CA_BN_REGEX,
  }
  const regex = regexMap[country]
  return regex?.test(code) ?? false
}

type TINMatch = {
  countryCode: TCountry
  label: string
  regex: RegExp
}

export const TIN_PATTERNS: TINMatch[] = [
  { countryCode: 'UA', label: 'Україна', regex: /^\d{10}$/ },
  { countryCode: 'DE', label: 'Німеччина', regex: /^\d{11}$/ },
  { countryCode: 'FR', label: 'Франція', regex: /^\d{13}$/ },
  { countryCode: 'IT', label: 'Італія', regex: /^[A-Z]{6}\d{2}[A-EHLMPRST]\d{2}[A-Z]\d{3}[A-Z]$/ },
  { countryCode: 'ES', label: 'Іспанія', regex: /^[XYZ]?\d{7}[A-Z]$/ },
  { countryCode: 'PL', label: 'Польща', regex: /^\d{10}$/ },
  { countryCode: 'CZ', label: 'Чехія', regex: /^CZ\d{8,10}$/ },
  { countryCode: 'RO', label: 'Румунія', regex: /^\d{2,10}$/ },
  { countryCode: 'LT', label: 'Литва', regex: /^\d{11}$/ },
  { countryCode: 'NL', label: 'Нідерланди', regex: /^\d{9}$/ },
  { countryCode: 'UK_NIN', label: 'Велика Британія (NIN)', regex: /^[A-CEGHJ-PR-TW-Z]{2}\d{6}[A-D]?$/ },
  { countryCode: 'UK_UTR', label: 'Велика Британія (UTR)', regex: /^\d{10}$/ },
  { countryCode: 'US_SSN', label: 'США (SSN)', regex: /^\d{3}-\d{2}-\d{4}$/ },
  { countryCode: 'US_ITIN', label: 'США (ITIN)', regex: /^9\d{2}-\d{2}-\d{4}$/ },
  { countryCode: 'US_EIN', label: 'США (EIN)', regex: /^\d{2}-\d{7}$/ },
  { countryCode: 'CA_SIN', label: 'Канада (SIN)', regex: /^\d{3}-\d{3}-\d{3}$/ },
  { countryCode: 'CA_BN', label: 'Канада (BN)', regex: /^\d{9}[A-Z]{2}\d{4}$/ },
]

export function detectTINCountry(input: string): TINMatch[] {
  return TIN_PATTERNS.filter(({ regex }) => regex.test(input))
}
