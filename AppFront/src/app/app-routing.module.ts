import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from "./security/SignUp/user/user.component";
import {LoginComponent} from "./security/SignIn/login/login.component";
import {
  CreatAppartemetComponent
} from "./view/appartemetComponent/appartemet/creat-appartemet/creat-appartemet.component";
import {AdminTemplateComponent} from "./security/admin-template/admin-template.component";
import {
  CreatCategoriesAppartementComponent
} from "./view/appartemetComponent/categoriesAppartement/creat-categories-appartement/creat-categories-appartement.component";
import {
  CreatPropAppartementComponent
} from "./view/appartemetComponent/propAppartement/creat-prop-appartement/creat-prop-appartement.component";
import {ListAppartemetComponent} from "./view/appartemetComponent/appartemet/list-appartemet/list-appartemet.component";
import {PropComponent} from "./security/SignUp/prop/prop.component";
import {AgenceComponent} from "./security/SignUp/agence/agence.component";

const routes: Routes = [

  { path :"login", component : LoginComponent},
  { path :"creercompte", component : UserComponent},
  { path :"prop", component : PropComponent},
  { path :"agence", component : AgenceComponent},
  { path :"", redirectTo:"/login",pathMatch:"full"},

  { path :"admin",component:AdminTemplateComponent,children:[
      { path :"appartemet",component:CreatAppartemetComponent,data:{role:"ADMIN"}},
      { path :"categories",component:CreatCategoriesAppartementComponent,data:{role:"ADMIN"}},
      { path :"propraitaire",component:CreatPropAppartementComponent,data:{role:"ADMIN"}},
      { path :"listAppartemetCompoent",component:ListAppartemetComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
