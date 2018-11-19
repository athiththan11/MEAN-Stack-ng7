import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DevComponent } from './dev/dev.component';
import { CreateComponent } from './dev/create/create.component';
import { EditComponent } from './dev/edit/edit.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'dev',
        pathMatch: 'full'
    },
    {
        path: 'dev',
        component: DevComponent
    },
    {
        path: 'dev/create',
        component: CreateComponent
    },
    {
        path: 'dev/edit/:id',
        component: EditComponent
    }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
