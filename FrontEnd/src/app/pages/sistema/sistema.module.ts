import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { SistemaComponent } from './sistema.component';
import { SistemaRoutingModule } from './sistema-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule(
    {
    providers: [],
    imports: [
    CommonModule,
    SistemaRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
    NgSelectModule,
    MatIconModule,
    MatSlideToggleModule,
    SistemaComponent
]
}
)

export class SistemaModule { }