import { Routes } from '@angular/router';
import { FeedbacksComponent } from './pages/feedbacks/feedbacks.component';
import { RegisterGameComponent } from './pages/register-game/register-game.component';

export const routes: Routes = [
    { path: '', component: RegisterGameComponent },
    { path: 'feedbacks/:gameCode', component: FeedbacksComponent }
];