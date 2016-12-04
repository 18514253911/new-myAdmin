

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }  from './home/home.component';
const appRoutes=[
	{
		path:'',
        redirectTo: 'home',
        pathMatch: 'full'
	},
	{
		path:'home',
		component:HomeComponent
	}
];
export default RouterModule.forRoot(appRoutes);