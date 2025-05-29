import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { ShopComponent } from './pages/shop/shop.component';
import { QuestsComponent } from './pages/quests/quests.component';
import { SettingsComponent } from './pages/settings/settings.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'inventory',
        component: InventoryComponent
    },
    {
        path: 'shop',
        component: ShopComponent
    },
    {
        path: 'quests',
        component: QuestsComponent
    },
    {
        path: 'settings',
        component: SettingsComponent
    }
];
