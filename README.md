# frontend-components-React
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


Časový harmonogram:
----

1) 1.11. 2021 zveřejnění harmonogramu prací na projektu,
2) 1.11. 2021 zveřejnění identifikovaných nejsložitějších problémů v projektu,
3) 15.12. 2021 verze Alfa,
4) 15.1. 2022 verze Beta,
5) 24.1. 2021 počátek zkouškového období,
6) 31.1. 2022 uzavření projektu,
7) 18.3. 2022 konec zkouškového období.
