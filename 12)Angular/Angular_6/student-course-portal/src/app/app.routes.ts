import { Routes } from '@angular/router';
import { EnrollmentFormComponent } from './pages/enrollment-form/enrollment-form';
import { ReactiveEnrollmentComponent } from './pages/reactive-enrollment/reactive-enrollment';
import { StudentProfile } from './pages/student-profile/student-profile';

export const routes: Routes = [
  { path: 'enroll', component: EnrollmentFormComponent },
  { path: 'enroll-reactive', component: ReactiveEnrollmentComponent },
  { path: 'profile', component: StudentProfile },
  { path: '', redirectTo: '/enroll-reactive', pathMatch: 'full' }
];
