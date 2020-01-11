import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnrichmentComponent } from './enrichment/enrichment.component';

const routes: Routes = [
    { path: 'enrichment', component: EnrichmentComponent },
    { path: '', redirectTo: '/enrichment', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            { useHash: false }
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
