import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { 
    path: 'configuracao', 
    loadChildren: './configuracao/configuracao.module#ConfiguracaoPageModule' 
  },
  { 
   path: 'sobre',
   loadChildren: './sobre/sobre.module#SobrePageModule' 
  },
  { path: 'carrinho', 
    loadChildren: './carrinho/carrinho.module#CarrinhoPageModule' },
    
  { path: 'cadastrese', 
    loadChildren: './cadastrese/cadastrese.module#CadastresePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
