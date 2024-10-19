import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { DespesaComponent } from './despesa.component';
import { DespesaRoutingModule } from './despesa-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatIconModule } from '@angular/material/icon';

@NgModule(
    {
    providers: [],
    imports: [
    CommonModule,
    DespesaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    MatSlideToggleModule,
    NgxPaginationModule,
    MatIconModule,
    DespesaComponent
]
}
)

export class DespesaModule { }