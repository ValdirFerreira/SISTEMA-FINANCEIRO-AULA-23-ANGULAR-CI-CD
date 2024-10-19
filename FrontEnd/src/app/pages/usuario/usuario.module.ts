import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




import { UsuarioRoutingModule } from './usuario-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { UsuarioComponent } from './usuario.component';

@NgModule(
    {
    providers: [],
    imports: [
    CommonModule,
    UsuarioRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
    NgSelectModule,
    MatIconModule,
    MatSlideToggleModule,
    UsuarioComponent
]
}
)

export class UsuarioModule { }