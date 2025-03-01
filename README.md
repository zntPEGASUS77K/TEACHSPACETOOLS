# 📚 Teachspace Tools  

Teachspace Tools est une application **Spring Boot** conçue pour gérer les professeurs, les salles et leurs plannings d'occupation au sein d'un établissement éducatif. Elle expose une **API REST** permettant d'effectuer des opérations CRUD sur les entités suivantes :  
👨‍🏫 **Professeurs (Prof)** | 🏫 **Salles (Salle)** | 📆 **Occupations (Occuper)**  
L'application utilise une base de données **PostgreSQL** et intègre **Swagger UI** pour la documentation API.

---

## ✨ Fonctionnalités  

✅ **Gestion des Professeurs** : Ajout, mise à jour, suppression et consultation des professeurs 👨‍🏫  
✅ **Gestion des Salles** : Administration des salles et de leurs désignations 🏫  
✅ **Planification d'Occupation** : Attribution des salles aux professeurs pour une date donnée 📅  
✅ **Documentation API** : Interface interactive via Swagger UI 📜  
✅ **Gestion des Erreurs** : Gestion robuste des exceptions et des contraintes de base de données 🚦  

---

## 🛠️ Stack Technologique  

🔹 **Backend** : Spring Boot 3.2.2, Spring Data JPA  
🔹 **Langage** : Java 21 ☕  
🔹 **Base de Données** : PostgreSQL 🐘  
🔹 **Documentation API** : Springdoc OpenAPI (Swagger UI) 📄  
🔹 **Build Tool** : Gradle 📦  
🔹 **Containerisation** : Docker Compose pour PostgreSQL 🐳  
🔹 **Tests** : JUnit 5 avec MockMvc ✅  

---

## 🚀 Prérequis  

🔹 **Java 21** installé 📌  
🔹 **Gradle** installé 🛠️  
🔹 **PostgreSQL** configuré 🐘  
🔹 **Docker** (optionnel, pour exécuter la base de données avec Docker Compose) 🐳  
🔹 **Git** installé pour cloner le projet 🖥️  

---

## 📥 Installation et Configuration  

### 🔹 1. Cloner le projet  
```bash
git clone https://github.com/zntPEGASUS77K/TEACHSPACETOOLS.git
cd TEACHSPACETOOLS
