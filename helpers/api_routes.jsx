/*
// jeziic
https://www.ffos.unios.hr/projekti/glagopedija/API/v1/jezici
// grupe jezik
https://www.ffos.unios.hr/projekti/glagopedija/API/v1/grupe?jezik=hr
// grupa jezik
https://www.ffos.unios.hr/projekti/glagopedija/API/v1/grupa?id=2&jezik=en
// kategorije grupa
https://www.ffos.unios.hr/projekti/glagopedija/API/v1/kategorije?grupa=3&jezik=hr
// kategorija grupa
https://www.ffos.unios.hr/projekti/glagopedija/API/v1/kategorija?id=11&jezik=hr
https://www.ffos.unios.hr/projekti/glagopedija/API/v1/zapisi?kategorija=1&jezik=hr
https://www.ffos.unios.hr/projekti/glagopedija/API/v1/zapis?id=1&jezik=pl
https://www.ffos.unios.hr/projekti/glagopedija/API/v1/poruke?jezik=en
https://www.ffos.unios.hr/projekti/glagopedija/API/v1/poruka?kljuc=imeRegister_poruka&jezik=hr
https://www.ffos.unios.hr/projekti/glagopedija/API/v1/popisliterature
*/

//root
export const rootUrl = 'https://www.ffos.unios.hr/projekti/glagopedija/API/v1';
// routes
export const langs = '/jezici';
export const groups = '/grupe?jezik=';
export const group = (id, lang) => `/grupa?id=${id}&jezik=${lang}`;
export const categories = (group, lang) => `/kategorije?grupa=${group}&jezik=${lang}`;
export const category = (id, lang) => `/kategorija?id=${id}&jezik=${lang}`;
export const records = (category, lang) => `/zapisi?kategorija=${category}&jezik=${lang}`;
export const record = (id, lang) => `/zapis?id=${id}&jezik=${lang}`;
export const messages = (lang) => `/poruke?jezik=${lang}`;
export const message = (key, lang) => `poruka?kljuc=${key}&jezik=${lang}`;
export const literature = `/popisliterature`;

