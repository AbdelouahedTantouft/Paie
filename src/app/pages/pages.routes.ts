<<<<<<< HEAD
import { Routes } from "@angular/router";
import { Crud } from "./crud/crud";
import { CompanyListComponent } from "./company-list/company-list.component";
import { CompanyComponent } from "./company/company.component";
import { Dashboard } from "./dashboard/dashboard";
import { Landing } from "./landing/landing";

import { FicheSalarieComponent } from "./fiche-salarie/fiche-salarie.component";
import { ImportationVarComponent } from "./importation-var/importation-var.component";
import { PrametrageComptesComponent } from "./prametrage-comptes/prametrage-comptes.component";
import { LoanManagementComponent } from "./loan-management/loan-management.component";
import { CalculPaieComponent } from "./calcul-paie/calcul-paie.component";
import { PaysVillesComponent } from "./pays-villes/pays-villes.component";
import { AnnualTreatmentComponent } from "./Cloture/annual-treatment/annual-treatment.component";
import { RubriqueAddComponent } from "./rubriques/rubrique-add/rubrique-add.component";
import { RubriqueViewComponent } from "./rubriques/rubrique-view/rubrique-view.component";
import { PayrollEditionComponent } from "./payroll-edition/payroll-edition.component";

export default [
  { path: "pays-ville", component: PaysVillesComponent },
  { path: "crud", component: Crud },
  { path: "company", component: CompanyComponent },
  { path: "dashbord", component: Dashboard },
  { path: "landing", component: Landing },
  { path: "company-list", component: CompanyComponent },
  { path: "fiche-salarie", component: FicheSalarieComponent },
  { path: "importation-var", component: ImportationVarComponent },
  { path: "payroll-edition", component: PayrollEditionComponent },

  { path: "prametrage-compte", component: PrametrageComptesComponent },
  { path: "loan-management", component: LoanManagementComponent },
  { path: "calcul-paie", component: CalculPaieComponent },
  { path: "Cloture/annual-treatment", component: AnnualTreatmentComponent },
  { path: "rubriques/rubrique-add", component: RubriqueAddComponent },
  { path: "rubriques/rubrique-list", component: RubriqueAddComponent },
  { path: "rubriques/view-item/:code", component: RubriqueViewComponent },
  { path: "rubriques/add-item", component: RubriqueViewComponent },
  { path: "**", redirectTo: "/notfound" },
=======
import { Routes } from '@angular/router';
import { Crud } from './crud/crud';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyComponent } from './company/company.component';
import { Dashboard } from './dashboard/dashboard';
import { Landing } from './landing/landing';

import { FicheSalarieComponent } from './fiche-salarie/fiche-salarie.component';
import { ImportationVarComponent } from './importation-var/importation-var.component';
import { PrametrageComptesComponent } from './prametrage-comptes/prametrage-comptes.component';
import { PretsComponent } from './prets/prets.component';
import { CalculPaieComponent } from './calcul-paie/calcul-paie.component';
import { PaysVillesComponent } from './pays-villes/pays-villes.component';
import { AnnualTreatmentComponent } from './Cloture/annual-treatment/annual-treatment.component';


export default [
     {path: 'pays-ville', component:PaysVillesComponent},
    { path: 'crud', component: Crud },
    { path: 'company', component: CompanyComponent },
    { path: 'dashbord', component:Dashboard},
    { path: 'landing', component:Landing},
    { path:  'company-list', component:CompanyComponent},
    { path: 'fiche-salarie', component:FicheSalarieComponent},
    { path: 'importation-var', component:ImportationVarComponent},
    { path: 'prametrage-compte', component:PrametrageComptesComponent},
    { path: 'prets', component:PretsComponent},
    { path: 'calcul-paie', component:CalculPaieComponent},
    { path: 'annual-treatment', component:AnnualTreatmentComponent},
    { path: '**', redirectTo: '/notfound' }
>>>>>>> c485b3322168bb014db0b6b8a933dac5d02fb05a
] as Routes;
