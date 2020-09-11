# projektni_rad
## Postavljanje razvojnog okruženja 
Razvojno okruženje postavljeno je pomoću Expo CLI. Kako bi se instalirao Expo CLI, prvo je potrebno instalirati NodeJS (verzija 12 LTS pa nadalje.)

### Upute za postavljanje NodeJS: 
https://nodejs.org/en/download/package-manager/

Nakon instaliranja NodeJS, potrebno je instalirati Expo CLI:
                                                 
```npm install -g expo-cli```

## Pokretanje projekta u razvojnom okruženju 
Nakon što se repozitorij klonira ili preuzme na računalo, prvo je potrebno instalirati sve potrebne Node pakete: 

```npm install```

Lokalni server može se pokrenuti naredbom:

```expo start``` 
           
Za pokretanje expo projekta potrebno je registrirati se na Expo CLI što je moguće učiniti kroz konzolu. Ako korisnik nije prijavljen na svoj račun, konzola nudi mogućnost registracije. 

Lokalnu inačicu aplikacije moguće je testirati na mobilnom uređaju. Na uređaj se moguće spojiti poveznicom ili skeniranjem QR koda kroz Expo klijent aplikaciju. Nakon uspješnog povezivanja, aplikacija se priakzuje na mobilnom uređaju. Aplikacija reagira na svaku promjenu koda pa je testiranje na uređaju vrlo jednostavno. 
                                        
## Expo klijent aplikacija                                                          
Klijent aplikacija dostupna je na GooglePlay i iTunes Store servisima: 
- Android - https://play.google.com/store/apps/details?id=host.exp.exponent 
- iOS - https://search.itunes.apple.com/WebObjects/MZContentLink.woa/wa/link?path=apps%2fexponent 

## Zapakirana Android verzija 
Može se preuzeti na: 
- https://expo.io/artifacts/0422b3a3-ec40-4dd2-8883-52f510eda32d

## Zapakirana iOS verzija aplikacije
Zapakiranu verziju aplikacije može se preuzeti:
- https://expo.io/artifacts/d066e022-2e18-47b3-8178-3b20763d9236

Upute za pokretanje zapakirane inačice aplikacije u iOS simulatorima: 
- https://docs.expo.io/distribution/building-standalone-apps/     

> To run it on your iOS Simulator, first build your expo project with the simulator flag by running ```expo build:ios -t simulator```, then download the tarball with the link given upon completion when running ```expo build:status```. Unpack the ```tar.gz``` by running ```tar -xvzf your-app.tar.gz```. Then you can run it by starting an iOS Simulator instance, then running ```xcrun simctl install booted <app path>``` and ```xcrun simctl launch booted <app identifier>```.
  
## API rute

API rute nalaze se u ```helpers/api_routes.jsx```
Pohranjene su u obliku ```const``` varijabli koje mogu primati argumente.

```
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
```

 
