import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlatformCredentialsComponent } from './platform-credentials/platform-credentials.component';
import { ScrapingComponent } from './scraping/scraping.component';
import { StartScrapingComponent } from './start-scraping/start-scraping.component';


export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path : 'dashboard', component: DashboardComponent},
  {path : 'platform-credentials', component: PlatformCredentialsComponent},
  {path : 'scraping', component: ScrapingComponent},
  {path : 'start-scraping', component: StartScrapingComponent}, 

];
