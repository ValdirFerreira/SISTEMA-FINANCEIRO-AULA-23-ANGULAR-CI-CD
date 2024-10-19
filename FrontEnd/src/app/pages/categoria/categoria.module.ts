import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { CategoriaComponent } from './categoria.component';
import { CategoriaRoutingModule } from './categoria-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatIconModule } from '@angular/material/icon';



@NgModule(
    {
    providers: [],
    imports: [
    CommonModule,
    CategoriaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgxPaginationModule,
    FormsModule,
    NgSelectModule,
    MatIconModule,
    CategoriaComponent
]
}
)

export class CategoriaModule { }