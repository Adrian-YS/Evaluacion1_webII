import { Routes } from '@angular/router';
import { AutosComponent } from './screens/autos/autos.component';
import { ProductosComponent } from './screens/productos/productos.component';
import { EditarAutoComponent } from './screens/editar/editar.component';
import { OtroComponent } from './screens/otro/otro.component';


export const routes: Routes = [
    {path: "auto", component: AutosComponent},
    {path: "producto", component: ProductosComponent},
    {path:"editarAuto/:idProducto",component: EditarAutoComponent},
    {path:"otros",component: OtroComponent},





    {path:"**",redirectTo:"",pathMatch:'full' }


];