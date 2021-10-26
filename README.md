# frontend-components-React
Zpracovávají čet. Lubomír Horký a čet. Jan Beran:

4. Definice frontend komponent (Small, Medium, Large), student / učitel, studijní skupina, katedra (fakulta) v React, vizualizace na základě props (Small, Medium), na základě interakce s API (Medium, Large)

### token = 60cb36f52d9af022

# ??pochopení zadání:??
Napsat web pomocí React, který bude zobrazovat "dlaždice" student, učitel, katedra.
Mezi sebou propojit a vytvořit stránku pro katedry, kde budou propojené samostatné stránky učitelů, studijních skupin....

Doporučení pro responzivní web použít [Bootstrap](https://www.w3schools.com/bootstrap4/bootstrap_get_started.asp) - vyřeší rozložení jak na mobilních zařízeních, tak PC.

[props v React](https://youtu.be/DLX62G4lc44?t=4366)

[interakce React s API](https://youtu.be/DLX62G4lc44?t=12346)

[vav unob](https://vav.unob.cz/person/index/542704)

[FAKE date](https://swapi.co/)

[Fetching api data with react](https://dev.to/olenadrugalya/ways-of-getting-data-from-api-in-react-2kpf)

Pomoc : Vytvořit si "fake" komponenty pro prvotní pomoc s definicí provázání struktur a k lepšímu přistupování jendotlivých komponent, (pomohou nám lépe přistoupit k jednotlivím komponentám.)

**LARGE** - podrobné (možnost přepnout se ze SUB informace (small,medium) na LARGE komponentu příslušného prvku)

**příklad:**

LARGE učitel - bude obsahovat SMALL komponenty studijních skupin které vyučuje.
Komponenty by měli fungovat jako linky (a href) -> otevře se LARGE komponenta (celá stránka) -> podrobnosti o celé skupině (např 21-5KB), ta má zase seznam učitelů, kteří se podílejí na výuce (SMALL komponenty) odkud se můžeme odkázat zase na LARGE.

**příklad:**
Propojení s API:
small komponenty (nemaji odkaz na API) - (label a ID) - po kliknuti na label (a href) se dostaneme na stránku která popisuje danou komponentu.
V rozvrhu je učitel - kliknu na učitel zobrazí se (velká stránka) 
LARGE (měli by mít propojení s API) - dostaneme neúplnou informaci a musíme se dotázat API abychom dostali zbytek potřebných informací.

small- JEN TEXT jmeno, skupina -> link -> na medium (osoba jak student tak ucitel) - jmeno, prijmeni, SPOLECNE INFO.... -> link LARGE : víc info pokud student tak zkouky, vysledky,... pokud ucitel tak predmety kde uci, garant,... nebo pokud jine osoby tak prazdne...

Časový harmonogram:
----

● 1.11. 2021 zveřejnění harmonogramu prací na projektu

● 1.11. 2021 zveřejnění identifikovaných nejsložitějších problémů v projektu

● 15.12. 2021 verze Alfa

● 15.1. 2022 verze Beta

● 24.1. 2021 počátek zkouškového období

● 31.1. 2022 uzavření projektu

● 18.3. 2022 konec zkouškového období

Vlastní časový harmonogram
----

Vytvoření struktur html jednotlivých stránek (student / učitel,studijní skupina, katedry) 

Využití dat z https://swapi.co/ k provozu.
Propojení LARGE komponent s API.
