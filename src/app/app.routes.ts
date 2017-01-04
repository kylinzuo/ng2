import { Routes, RouterModule } from '@angular/router'
import { HelloComponent } from './hello/hello.component'
import { TodoComponent } from './todo/todo.component'

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'todo',
    pathMatch: 'full'
  },
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'hello',
    component: HelloComponent
  }
]

export const routing = RouterModule.forRoot(routes)
