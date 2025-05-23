<<<<<<< HEAD
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router"; // Import RouterModule pour les routes
import { appRoutes } from "./app.routes"; // Import de votre fichier de routes

// Modules PrimeNG
import { DropdownModule } from "primeng/dropdown";
import { ButtonModule } from "primeng/button";
import { CalendarModule } from "primeng/calendar";
import { FloatLabelModule } from "primeng/floatlabel";

// Modules Angular
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; // Import des modules de formulaires

// Importation des composants
import { AppLayout } from "./app/layout/component/app.layout";
import { Dashboard } from "./app/pages/dashboard/dashboard";
import { Landing } from "./app/pages/landing/landing";
import { Notfound } from "./app/pages/notfound/notfound";
import { CompanyListComponent } from "./app/pages/company-list/company-list.component";
import { FicheSalarieComponent } from "./app/pages/fiche-salarie/fiche-salarie.component";
import { ImportationVarComponent } from "./app/pages/importation-var/importation-var.component";
import { PrametrageComptesComponent } from "./app/pages/prametrage-comptes/prametrage-comptes.component";
import { PretsComponent } from "./app/pages/prets/prets.component";
import { CalculPaieComponent } from "./app/pages/calcul-paie/calcul-paie.component";
//EXTERNAL LIBRARIES
import { DataTablesModule } from "angular-datatables";
=======
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'; // Import RouterModule pour les routes
import { appRoutes } from './app.routes'; // Import de votre fichier de routes

// Modules PrimeNG
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { FloatLabelModule } from 'primeng/floatlabel';

// Modules Angular
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import des modules de formulaires

// Importation des composants
import { AppLayout } from './app/layout/component/app.layout';
import { Dashboard } from './app/pages/dashboard/dashboard';
import { Landing } from './app/pages/landing/landing';
import { Notfound } from './app/pages/notfound/notfound';
import { CompanyListComponent } from './app/pages/company-list/company-list.component';
import { FicheSalarieComponent } from './app/pages/fiche-salarie/fiche-salarie.component';
import { ImportationVarComponent } from './app/pages/importation-var/importation-var.component';
import { PrametrageComptesComponent } from './app/pages/prametrage-comptes/prametrage-comptes.component';
import { PretsComponent } from './app/pages/prets/prets.component';
import { CalculPaieComponent } from './app/pages/calcul-paie/calcul-paie.component';
>>>>>>> c485b3322168bb014db0b6b8a933dac5d02fb05a

@NgModule({
  declarations: [
    AppComponent,
    AppLayout,
    Dashboard,
    Landing,
    Notfound,
    CompanyListComponent,
    FicheSalarieComponent,
    ImportationVarComponent,
    PrametrageComptesComponent,
    PretsComponent,
    CalculPaieComponent,
<<<<<<< HEAD
    DataTablesModule,
=======
>>>>>>> c485b3322168bb014db0b6b8a933dac5d02fb05a
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes), // Configuration des routes
    FormsModule, // Pour ngModel
    ReactiveFormsModule, // Pour les formulaires réactifs
    DropdownModule, // Module PrimeNG pour dropdown
    ButtonModule, // Module PrimeNG pour les boutons
    CalendarModule, // Module PrimeNG pour le calendrier
    FloatLabelModule, // Module PrimeNG pour l'étiquette flottante
<<<<<<< HEAD
    DataTablesModule,
  ],
  providers: [],
  bootstrap: [AppComponent], // Définir le composant principal
})
export class AppModule {}
=======
  ],
  providers: [],
  bootstrap: [AppComponent] // Définir le composant principal
})
export class AppModule { }
>>>>>>> c485b3322168bb014db0b6b8a933dac5d02fb05a
