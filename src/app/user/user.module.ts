import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { PasswordComponent } from './password/password.component';
import { NotificationSettingComponent } from './notification-setting/notification-setting.component';
import { MemberPermissionComponent } from './member-permission/member-permission.component';
import {RouterModule, Routes} from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { IndexComponent } from './index/index.component';
import { ImageUploadModule } from "angular2-image-upload";
import { EductionItemComponent } from './eduction-item/eduction-item.component';
import { EducationItemComponent } from './education-item/education-item.component';
import { EducationListComponent } from './education-list/education-list.component';
import { ExperienceListComponent } from './experience-list/experience-list.component';
import { ExperienceItemComponent } from './experience-item/experience-item.component'

const routes: Routes = [
  {
    path:'user',
    component: IndexComponent,
    children:[
         {
           path: 'profile',
           component: ProfileComponent
         },
         {
           path:'subscriptions',
           component: SubscriptionComponent
         },
         {
            path: 'security',
            component: PasswordComponent
         },
         {
           path:'notification-settings',
           component: NotificationSettingComponent
         },
         {
           path:'members-permission',
           component: MemberPermissionComponent
         },
         {
           path: '',
           redirectTo: 'profile',
           pathMatch: 'full'
         }

    ]

  }
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes), ImageUploadModule.forRoot(),
  ],
  declarations: [ProfileComponent, SubscriptionComponent, PasswordComponent, NotificationSettingComponent, MemberPermissionComponent, IndexComponent, EductionItemComponent, EducationItemComponent, EducationListComponent, ExperienceListComponent, ExperienceItemComponent]
})
export class UserModule { }
