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

## Zapakirana iOS verzija aplikacije
Zapakiranu verziju aplikacije može se preuzeti:
- https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/ios/%40nmilic96/projektni_zadatak-d8c1a1e0-b0e0-45f7-bb27-038ba5658903-simulator.tar.gz 

Upute za pokretanje zapakirane inačice aplikacije u iOS simulatorima: 
- https://docs.expo.io/distribution/building-standalone-apps/     

> To run it on your iOS Simulator, first build your expo project with the simulator flag by running ```expo build:ios -t simulator```, then download the tarball with the link given upon completion when running ```expo build:status```. Unpack the ```tar.gz``` by running ```tar -xvzf your-app.tar.gz```. Then you can run it by starting an iOS Simulator instance, then running ```xcrun simctl install booted <app path>``` and ```xcrun simctl launch booted <app identifier>```.