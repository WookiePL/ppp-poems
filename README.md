# ppp
PPP PAI OiRPOS projekt
Aplikacja zarządzająca bazą wierszy.

### Przygotowanie środowiska
1. Przygotuj venv i aktywuj
2. Dodaj katalog z repo do katalogu z venv
3. `pip install -r <sciezka_do_repo>\requirements.txt`  ( tak to chyba bylo )
4. Mozna pracowac

### Przygotowanie Intellija

0. zainstaluj plugin do Pythona (File->Settings->Plugins->Install JetBrains plugin...)
![Alt text](/readme_images/sshot-320.png)
1. File -> Open.. -> głowny folder `ppp-poems`
2. edytuj plik `ppp-poems\.idea\ppp-poems3.iml`, zmień `JAVA_MODULE` na `PYTHON_MODULE`
3. zrestartuj IJ
4. po uruchomieniu:
![Alt text](/readme_images/sshot-321.png)
5. File -> Project Structure -> Project -> Project SDK -> New -> Python SDK -> Add Local 
   Virtual enviroment dla Pythona tworzymy najlepiej tam gdzie IJ domyślnie pokazuje (`ppp-poems\venv`)
6. Project Structure powinno wygladac teraz tak:
![Alt text](/readme_images/sshot-322.png)
7. otwieramy Terminal w IJ:
`venv\Scripts\activate` co włączy virtual enva w terminalu
8. powinno śmigać jak marzenie
9. można sobie dodać Run server od Django do IJ:
   serwery w prawym górnym rogu -> Edit configurations -> zielony plus -> Django server. Use specified interpreter powinno być ustawione na naszego virtual enva


### Jeśli dodasz nowy framework, plugin etc:
1. `pip freeze > <sciezka_do_repo>\requirements.txt`
2. Daj znac ze cos sie zmienilo

### wymagania:
- dashboard z ostatnimi wierszami
- szukajka po dacie/autorze
- dodaj wiesz + podpis
- usun wiersz (tylko jak jestes autorem - np. do sprawdzeia po hash sesji w ciasteczku)
- ewentualnie ocena gwiazdki