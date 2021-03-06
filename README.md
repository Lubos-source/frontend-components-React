# frontend-components-React
Zpracovávají čet. Lubomír Horký a čet. Jan Beran:

5. Definice frontend komponent (S, M, L), studijní program, předmět, lekce, učebna, areál v React, vizualizace na základě props (S, M), na základě interakce s API (M, L)

### token = 60cb36f52d9af022

# pochopení zadání:
Napsat web pomocí React, který bude zobrazovat "dlaždice" studijní program v něm předměty, každý předmět bude mít lekce(hodiny) a každá hodina bude mít rozepsané učebny + areály. Po kliknutí na areál se dostaneme do danného areálu například Šumavská a v něm se nám zobrazí učebny. Po kliknutí na učebnu bude existovat komponenta která bude obsahovat jaké lekce se v učebně prezentují.


Doporučení pro responzivní web použít [Bootstrap](https://www.w3schools.com/bootstrap4/bootstrap_get_started.asp) - vyřeší rozložení jak na mobilních zařízeních, tak PC.

[YT - props v React](https://youtu.be/DLX62G4lc44?t=4366)

[YT - interakce React s API](https://youtu.be/DLX62G4lc44?t=12346)

[YT - Fetch data from API on the website](https://youtu.be/T3Px88x_PsA)

[vav UNOB stránky](https://vav.unob.cz/person/index/542704)

[starwars database](https://swapi.co/)

[Fetching API data with react](https://dev.to/olenadrugalya/ways-of-getting-data-from-api-in-react-2kpf)

[Storybook](https://www.freecodecamp.org/news/what-is-storybook-and-how-can-i-use-it-to-create-a-component-libary-in-react/)

Pomoc : Vytvořit si "fake" komponenty pro prvotní pomoc s definicí provázání struktur a k lepšímu přistupování jendotlivých komponent, (pomohou nám lépe přistoupit k jednotlivým komponentám.)

Studijní program: 
kniha -> je schválena pro řízení studijního programu -> studium je zakončeno státní zkouškou 
    vytvoříme si komponentu, která zobrazí studijní program

● Studijní program - má více předmětů

● Seznam předmětů - má více semestrů

● Semestr předmětů - v semstrech je více témat 

● Topic 

**LARGE** - podrobné (možnost přepnout se ze SUB informace (small,medium) na LARGE komponentu příslušného prvku), obsahuje stranku jako takovou, od nejduležitějších informaci k méně důležitým !

**MEDIUM** - abalit do card (např. možnost nastrkat více studentu do karet)

**SMALL** - čistě link !

**react rooter** - je jedna stranka cela APP, mění se url, proto misto ahref <Link to=.....>, konfigurovatelné URL
1 entita 1 komponenta ! (např. student entita - má všechny komponenty (large, small, medium...) POUŽÍT !!
  
**bootstrap 5** - použít ke tvorbě !

**jak vytvářet komponenty** : "src - entities - (student) - studentkomponenta.js" (v ní všechny komponenty studentSmall, studentMedium, studentLarge)
entities má jeden index.js soubor s viz OBR hint!!!

**Tvořit postupně poznámky** - vytvořit si postupně poznámky, jaký problém -> jaké řešení -> fungovalo to -> ne -> další řešení atd... Postupně dělat poznámky jak na tom pracujem a co jak vytváříme. Pro budoucí STČ dokumentaci.
  
  
příklad k 4)zadani.... :
----
  
LARGE učitel - bude obsahovat SMALL komponenty studijních skupin které vyučuje.
Komponenty by měli fungovat jako linky (a href / link to) -> otevře se LARGE komponenta (celá stránka) -> podrobnosti o celé skupině (např 21-5KB), ta má zase seznam učitelů, kteří se podílejí na výuce (SMALL komponenty) odkud se můžeme odkázat zase na LARGE.

**příklad:**
Propojení s API:
small komponenty (nemaji odkaz na API) - (label a ID) - po kliknuti na label (a href / link to) se dostaneme na stránku která popisuje danou komponentu.
V rozvrhu je učitel - kliknu na učitel zobrazí se (velká stránka) 
LARGE (měli by mít propojení s API) - dostaneme neúplnou informaci a musíme se dotázat API abychom dostali zbytek potřebných informací.

small- JEN TEXT -> link -> na medium (osoba jak student tak ucitel) - jmeno, prijmeni, SPOLECNE INFO.... -> link LARGE : víc info pokud student tak zkousky, vysledky,... pokud ucitel tak predmety kde uci, garant,... nebo pokud jine osoby tak prazdne...

Společné podmínky:

● Průběžné ukládání verzí na public úložišti Github s licencí MIT, taktéž finální verze (viz harmonogram).

● WEB Root API či UI je konfigurovatelný.

● Je definovaný dockerfile / compose.yml pro spuštění výsledného projektu v prostředí docker nebo je k dispozici ipynb pro demonstraci.

● Kód je dokumentovaný [Python jak dokumentovat](https://realpython.com/documenting-python-code/), [React/Javascript jak dokumentovat](https://jsdoc.app/about-getting-started.html )


Časový harmonogram:
----

● 1.11. 2021 zveřejnění harmonogramu prací na projektu

● 1.11. 2021 zveřejnění identifikovaných nejsložitějších problémů v projektu

● 15.12. 2021 verze Alfa

● 15.1. 2022 verze Beta

● 24.1. 2021 počátek zkouškového období

● 31.1. 2022 uzavření projektu

● 18.3. 2022 konec zkouškového období

Vlastní časový harmonogram:
----

● 14.11. 2021 Vytvoření struktur html jednotlivých stránek, jak by mohly vypadat (studijní program, předmět, lekce, učebna, areál) Určit si která z komponent bude LARGE, MEDIUM a SMALL. Uvědomit si a vymyslet, které informace budou danné komponenty obsahovat. ✔

● 28.11. 2021 Využití data ze ["STARWARS database API"](https://swapi.co/) nebo jiné API k provozu a dostání testovacích dat z API do požadovaných polích vytvořené stránky. nakonec TESTUJEME na JSON souboru, vytaženého z rozvrhu :)

● 12.12. 2021 Propojení komponent mezi sebou. Dovytvoření chybějících komponent.

● 31.12.2021 Nalezení UNOB API, prozkoumání jak v ní vypadají data, která potřebujeme. // NEREALIZOVAT (nakonec místní JSON soubor z rozvrhu)

● 10.1.2022 Přepsání programu, aby komunikoval s API od spolužáků a dostali jsme požadovaná data.

Nejsložitější problémy v projektu:
----
● napsat vhodně program aby se dal využít i na jiné API než na které budeme testovat, případně aby bylo nutno udělat minimum změn :)

● Potřebujeme najít UNOB API a zjistit jak vypadají data v ní - podle toho pak změníme program. (zodpovědná osoba na UO - Hana Vlachová) //nakonec nerealizujeme

● interakce reactu s API, aby se nenačítali data dlouho. Vymyslet asi postupné načítání jen potřebných dat, které chce uživatel vidět a poté získávání dalších dat na základě požadavků uživatele. (GraphQL???) // úkol pro jinou skupinu

● propojení jednotlivých komponent mezi sebou, kam a kdy která komponenta odkáže. Možnost více komponent pro jednu položku (např. areál exituje small a zároveň large komponenta)

● dostání programu do DOCKERU (docker-compose)

● grafické zobrazení areálu - mapa budov -> každá budova má point -> přesměruje nás na seznam učeben
