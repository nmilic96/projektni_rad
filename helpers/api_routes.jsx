export const rootUrl = 'https://oziz.ffos.hr/nastava20192020/nmilic_19/v1';
export const jezici = '/jezici';
export const jezicneGrupe = '/grupe?jezik='
export const stavke = (id, lang) => {
	return `/kategorije?kategorija=${id}&jezik=${lang}`
}