# Base de donnée des pays du monde 🌏
--------------------------------------------------------------------------------------------------
## 🎯 Objectifs :
Récupérer une base de donnée propre de tous les pays du monde avec :
- Codes uniques iso 3166-1 alpha-2 et alpha-3 compatibles avec les diverses bases de données disponibles (owid par exemple)
- Désignation en anglais et en français
- Désignations concises pour faciliter l'affichage sur des cartes et graphiques
- Nom du continent en anglais et en français
- Pseudo-code du continent et couleur associée
- Drapeau des pays en format svg

## 👁️ Visualisation;  [ici](https://C-Vellen.github.io/Country-Flags-Database)

## 🛠️ Installation

- cloner le projet :
```bash
        git clone https://github.com/C-Vellen/Country-Flags-Database.git
```

- installation avec uv :
```bash
        uv sync
```

## 📚 Sources : /dataset_source/
- fichier d'où on extrait les codes pays (afin d'être sûr d'avoir tous les codes alpha3 par pays) :
  - Liens téléchargement : 
    - https://github.com/owid/co2-data/tree/master 
    - https://nyc3.digitaloceanspaces.com/owid-public/data/co2/owid-co2-data.csv
  - Emplacement des fichiers téléchargés dans le projet : **/dataset_source/owid-co2-data.csv**
- conversion code alpha2 / code alpha3 / nom pays / continent : 
  - librairie python :: **pycountry-convert**
  - importée dans le  notbook : **dataset_generation.ipynb**
- noms des pays en français à partir des codes alpha2 : **/dataset_source/Nom_pays_FR_isocode.csv**
- code svg des drapeaux ANCIEN CODE (255 drapeaux, non utilisé):
  - Liens téléchargement :
      - https://github.com/hampusborgos/country-flags/
      - https://github.com/hampusborgos/country-flags/archive/refs/heads/main.zip -> extraire le dossier : /country-flags-main/
  - Emplacement des fichiers téléchargés dans le projet : **/dataset_source/flags-icons_2021_/**
- code svg des drapeaux NOUVEAU CODE (270 drapeaux, non utilisé):
  - Liens téléchargement :
    - https://github.com/lipis/flag-icons/tree/main/flags/4x3/
    - https://github.com/lipis/flag-icons/archive/main.zip -> extraire le dossier : /flag-icons-main/flags/4x3/
  - Emplacement des fichiers téléchargés dans le projet : **/dataset_source/flag-icons_2023/**
- code svg des drapeaux NOUVEAU CODE + MISE A JOUR (273 drapeaux, à utiliser):
  - Emplacement des fichiers avec dernière mise à jour : **/dataset_source/flag-icons_2023_update/**


## 📂 Sorties : /affichage_web/ et /dataset_produit/
- dataset sous divers formats :
  - tableau python DataFrame généré par le notebook : **dataset_generation.ipynb**
  - **/dataset_produit/dataset.csv**
  - **/dataset_produit/dataset.json**
  - **/dataset_produit/dataset.js**
        
- listant tous les pays avec pour chaque pays :
  - codes iso 3166-1 alpha-2 et alpha-3
  - noms anglais et français
  - noms anglais et français plus affichables (plus concis pour les noms à rallonge)
  - continent en anglais et français
  - pseudo code continent
  - couleur attribuée à chaque continent
  - drapeau en svg path

- fichier html permettant l'affichage ces données sous forme de tableau dans une page web : **/affichage_web/tableau_pays_drapeaux.html**
            
                
Code Python pour récupérer les sources et générer les sorties : **/dataset_generation.ipynb**
