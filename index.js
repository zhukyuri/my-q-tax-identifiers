"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectTINCountry = exports.TIN_PATTERNS = exports.validateTIN = exports.CA_BN_REGEX = exports.CA_SIN_REGEX = exports.US_EIN_REGEX = exports.US_ITIN_REGEX = exports.US_SSN_REGEX = exports.UK_UTR_REGEX = exports.UK_NIN_REGEX = exports.NL_TIN_REGEX = exports.LT_TIN_REGEX = exports.RO_TIN_REGEX = exports.CZ_TIN_REGEX = exports.PL_TIN_REGEX = exports.ES_TIN_REGEX = exports.IT_TIN_REGEX = exports.FR_TIN_REGEX = exports.DE_TIN_REGEX = exports.UA_TIN_REGEX = void 0;
// 🇺🇦 Україна (ІПН)
exports.UA_TIN_REGEX = /^\d{10}$/;
// 🇩🇪 Німеччина (IdNr)
exports.DE_TIN_REGEX = /^\d{11}$/;
// 🇫🇷 Франція (Numéro fiscal)
exports.FR_TIN_REGEX = /^\d{13}$/;
// 🇮🇹 Італія (Codice fiscale)
exports.IT_TIN_REGEX = /^[A-Z]{6}\d{2}[A-EHLMPRST]\d{2}[A-Z]\d{3}[A-Z]$/;
// 🇪🇸 Іспанія (NIF)
exports.ES_TIN_REGEX = /^[XYZ]?\d{7}[A-Z]$/;
// 🇵🇱 Польща (NIP)
exports.PL_TIN_REGEX = /^\d{10}$/;
// 🇨🇿 Чехія (DIČ)
exports.CZ_TIN_REGEX = /^CZ\d{8,10}$/;
// 🇷🇴 Румунія (CUI)
exports.RO_TIN_REGEX = /^\d{2,10}$/;
// 🇱🇹 Литва (Asmens kodas)
exports.LT_TIN_REGEX = /^\d{11}$/;
// 🇳🇱 Нідерланди (BSN)
exports.NL_TIN_REGEX = /^\d{9}$/;
// 🇬🇧 Велика Британія
//      National Insurance Number (NIN):
exports.UK_NIN_REGEX = /^[A-CEGHJ-PR-TW-Z]{2}\d{6}[A-D]?$/;
//      UTR (Unique Taxpayer Reference):
exports.UK_UTR_REGEX = /^\d{10}$/;
// 🇺🇸 США
//      SSN:
exports.US_SSN_REGEX = /^\d{3}-\d{2}-\d{4}$/;
//      ITIN:
exports.US_ITIN_REGEX = /^9\d{2}-\d{2}-\d{4}$/;
//      EIN:
exports.US_EIN_REGEX = /^\d{2}-\d{7}$/;
// 🇨🇦 Канада
//      SIN:
exports.CA_SIN_REGEX = /^\d{3}-\d{3}-\d{3}$/;
//      BN:
exports.CA_BN_REGEX = /^\d{9}[A-Z]{2}\d{4}$/;
function validateTIN(code, country) {
    var _a;
    const regexMap = {
        UA: exports.UA_TIN_REGEX,
        DE: exports.DE_TIN_REGEX,
        FR: exports.FR_TIN_REGEX,
        IT: exports.IT_TIN_REGEX,
        ES: exports.ES_TIN_REGEX,
        PL: exports.PL_TIN_REGEX,
        CZ: exports.CZ_TIN_REGEX,
        RO: exports.RO_TIN_REGEX,
        LT: exports.LT_TIN_REGEX,
        NL: exports.NL_TIN_REGEX,
        UK_NIN: exports.UK_NIN_REGEX,
        UK_UTR: exports.UK_UTR_REGEX,
        US_SSN: exports.US_SSN_REGEX,
        US_ITIN: exports.US_ITIN_REGEX,
        US_EIN: exports.US_EIN_REGEX,
        CA_SIN: exports.CA_SIN_REGEX,
        CA_BN: exports.CA_BN_REGEX,
    };
    const regex = regexMap[country];
    return (_a = regex === null || regex === void 0 ? void 0 : regex.test(code)) !== null && _a !== void 0 ? _a : false;
}
exports.validateTIN = validateTIN;
exports.TIN_PATTERNS = [
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
];
function detectTINCountry(input) {
    return exports.TIN_PATTERNS.filter(({ regex }) => regex.test(input));
}
exports.detectTINCountry = detectTINCountry;
