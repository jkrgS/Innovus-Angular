import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactMeRoutingModule } from './contact-me-routing.module';
import { ContactMeComponent } from './contact-me.component';

@NgModule({
  imports: [
    CommonModule,
    ContactMeRoutingModule
  ],
  declarations: [ContactMeComponent]
})
export class ContactMeModule { }
