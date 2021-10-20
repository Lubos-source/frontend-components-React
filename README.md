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

Pomoc : Vytvořit si "fake" komponenty pro prvotní pomoc s definicí provázání struktur a k lepšímu přistupování jendotlivých komponent, (pomohou nám lépe přistoupit k jednotlivím komponentám.)

**LARGE** - podrobné (možnost přepnout se ze SUB informace (small,medium) na LARGE komponentu příslušného prvku)

**příklad:**

LARGE učitel - bude obsahovat SMALL komponenty studijních skupin které vyučuje.
Komponenty by měli fungovat jako linky (a href) -> otevře se LARGE komponenta (celá stránka) -> podrobnosti o celé skupině (např 21-5KB), ta má zase seznam učitelů, kteří se podílejí na výuce (SMALL komponenty) odkud se můžeme odkázat zase na LARGE.
