import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { EditAlumniComponent } from './edit-alumni/edit-alumni.component';
import { EditNoticeComponent } from './edit-notice/edit-notice.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'admin',component:HomeComponent},
  {path:'admin/add-book',component:AddBookComponent},
  {path:'admin/edit-alumni',component:EditAlumniComponent},
  {path:'admin/edit-notice',component:EditNoticeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent=[AddBookComponent,EditAlumniComponent,EditNoticeComponent,HomeComponent]
