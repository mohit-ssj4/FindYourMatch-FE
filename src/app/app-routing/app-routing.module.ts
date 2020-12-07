import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TestErrorsComponent } from "../errors/test-errors/test-errors.component";
import { AuthGuard } from "../guards/auth.guard";
import { HomeComponent } from "../home/home.component";
import { ListsComponent } from "../lists/lists.component";
import { MemberDetailComponent } from "../members/member-detail/member-detail.component";
import { MemberListComponent } from "../members/member-list/member-list.component";
import { MessagesComponent } from "../messages/messages.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "",
    runGuardsAndResolvers: "always",
    canActivate: [AuthGuard],
    children: [
      {
        path: "members",
        component: MemberListComponent
      },
      {
        path: "members/:id",
        component: MemberDetailComponent
      },
      {
        path: "lists",
        component: ListsComponent
      },
      {
        path: "messages",
        component: MessagesComponent
      }
    ]
  },
  {
    path: "**",
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: "errors",
    component: TestErrorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
