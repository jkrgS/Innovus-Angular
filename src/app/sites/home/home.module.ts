import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    Ng2SmartTableModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
