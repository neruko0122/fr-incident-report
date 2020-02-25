import { NgModule } from '@angular/core'
import { ExtraOptions, RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    canActivate: [],
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  { path: '**', redirectTo: '' }
]

const config: ExtraOptions = {
  useHash: true,
  onSameUrlNavigation: 'reload',
  scrollPositionRestoration: 'enabled', // ブラウザバックしたときに遷移前のスクロール位置に復元する
  anchorScrolling: 'enabled' // アンカーリンク有効
}

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
