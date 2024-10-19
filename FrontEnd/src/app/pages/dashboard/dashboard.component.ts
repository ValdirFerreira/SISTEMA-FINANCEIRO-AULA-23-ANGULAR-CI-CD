import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { DespesaService } from 'src/app/services/despesa.service';
import { MenuService } from 'src/app/services/menu.service';
import { SistemaService } from 'src/app/services/sistema.service';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    standalone: true,
    imports: [NavbarComponent, SidebarComponent]
})
export class DashboardComponent {

  constructor(public menuService: MenuService, public despesaService: DespesaService,
    public authService: AuthService, public sistemaService: SistemaService) {
  }

  ngOnInit() {
    this.menuService.menuSelecionado = 1;
    this.CarregaGraficos();
  }


  objetoGrafico: any;


  CarregaGraficos() {
    this.despesaService.CarregaGraficos(this.authService.getEmailUser())
      .subscribe((response: any) => {

        debugger
        this.objetoGrafico = response;
      },
        (error) => console.error(error),
        () => {

        }

      )

  }


  ExecuteCopiaDespesasSistemafinanceiro() {
    this.sistemaService.ExecuteCopiaDespesasSistemafinanceiro()
      .subscribe((response: any) => {
        alert("Executado com Sucesso!")

        this.CarregaGraficos();
      })
  }



}
