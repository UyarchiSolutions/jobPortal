import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateRegistrationComponent } from './candidate-registration/candidate-registration.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { VeriftOPTComponent } from './verift-opt/verift-opt.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AdvanceDetailsCandidateComponent } from './advance-details-candidate/advance-details-candidate.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotVerifyOtpComponent } from './forgot-verify-otp/forgot-verify-otp.component';
import { PostJobEmployeeComponent } from './post-job-employee/post-job-employee.component';
import { EmployeeVerifyOTPComponent } from './employee-verify-otp/employee-verify-otp.component';
import { EmployeerLoginComponent } from './employeer-login/employeer-login.component';
import { EmployeeForgotPassComponent } from './employee-forgot-pass/employee-forgot-pass.component';
import { EmployeeForgotPassVerifyComponent } from './employee-forgot-pass-verify/employee-forgot-pass-verify.component';
import { EmployeeSetPasswordComponent } from './employee-set-password/employee-set-password.component';
import { SearchCandidateComponent } from './search-candidate/search-candidate.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { ViewDataDetailsCanComponent } from './view-data-details-can/view-data-details-can.component';
import { AddAdvanceDetailsForCandidateComponent } from './add-advance-details-for-candidate/add-advance-details-for-candidate.component';
import { ViewDetailsEmployeeComponent } from './view-details-employee/view-details-employee.component';
import { EditEmployeeAdvanceComponent } from './edit-employee-advance/edit-employee-advance.component';
import { DisplaySearchDetailsComponent } from './display-search-details/display-search-details.component';
import { SearchCandidateSideComponent } from './search-candidate-side/search-candidate-side.component';
import { CandidateDisplaySearchJobComponent } from './candidate-display-search-job/candidate-display-search-job.component';
import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';
import { SavedJobsComponent } from './saved-jobs/saved-jobs.component';
import { JobAlertComponent } from './job-alert/job-alert.component';
import { AppliedJobDisplayDtaComponent } from './applied-job-display-dta/applied-job-display-dta.component';
import { SavedJobDisplayDataComponent } from './saved-job-display-data/saved-job-display-data.component';
import { DisplayJobAlertComponent } from './display-job-alert/display-job-alert.component';
import { ViewCandidateDetailsAfterSearchComponent } from './view-candidate-details-after-search/view-candidate-details-after-search.component';
import { MyJobPostComponent } from './my-job-post/my-job-post.component';
import { ViewJobApplicantsComponent } from './view-job-applicants/view-job-applicants.component';
import { ViewCadidateDeatilsAfterApplyJobComponent } from './view-cadidate-deatils-after-apply-job/view-cadidate-deatils-after-apply-job.component';
import { SavedSearchViewByEmployeerComponent } from './saved-search-view-by-employeer/saved-search-view-by-employeer.component';
import { ViewBasicCandidateComponent } from './view-basic-candidate/view-basic-candidate.component';
import { ViewBasicEmployeeComponent } from './view-basic-employee/view-basic-employee.component';
import { SavedSearchViewCandidateComponent } from './saved-search-view-candidate/saved-search-view-candidate.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { AdminSideViewEmployeeRegistrationComponent } from './admin-side-view-employee-registration/admin-side-view-employee-registration.component';
import { AdminSideViewCandidateRegistrationComponent } from './admin-side-view-candidate-registration/admin-side-view-candidate-registration.component';
import { AdminViewJobPostingComponent } from './admin-view-job-posting/admin-view-job-posting.component';
import { JobAlertCreateComponent } from './job-alert-create/job-alert-create.component';
import { RePostMyJobPostComponent } from './re-post-my-job-post/re-post-my-job-post.component';
import { ViewJobPostMyJobPostComponent } from './view-job-post-my-job-post/view-job-post-my-job-post.component';
import { CreatePlanJobComponent } from './create-plan-job/create-plan-job.component';
import { ManagePlanViewComponent } from './manage-plan-view/manage-plan-view.component';
import { EmployeeViewPlanDetailsByAdminComponent } from './employee-view-plan-details-by-admin/employee-view-plan-details-by-admin.component';
import { AgmCoreModule } from '@agm/core';
import { AdminSideAterPayByEmployeeComponent } from './admin-side-ater-pay-by-employee/admin-side-ater-pay-by-employee.component';
import { ManageEmployerPlanEmployeeViewComponent } from './manage-employer-plan-employee-view/manage-employer-plan-employee-view.component';
import { ViewpostAfterUsedJobPostComponent } from './viewpost-after-used-job-post/viewpost-after-used-job-post.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { MobileVerificationComponent } from './mobile-verification/mobile-verification.component';
import { EmployeeMobileVerifyComponent } from './employee-mobile-verify/employee-mobile-verify.component';
import { ViewCVAfterUsedCVAccessComponent } from './view-cvafter-used-cvaccess/view-cvafter-used-cvaccess.component';
import { SavedFolderGetComponent } from './saved-folder-get/saved-folder-get.component';
import { SavedFolderViewCandidateComponent } from './saved-folder-view-candidate/saved-folder-view-candidate.component';
import { SafePipe } from './view-cvafter-used-cvaccess/pipe.com';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { EmployersideBarComponent } from './employerside-bar/employerside-bar.component';
import { AdminSideBarComponent } from './admin-side-bar/admin-side-bar.component';
import { LinkSendPageComponent } from './link-send-page/link-send-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidateRegistrationComponent,
    EmployeeRegistrationComponent,
    VeriftOPTComponent,
    LoginComponent,
    ForgotPasswordComponent,
    AdvanceDetailsCandidateComponent,
    ChangePasswordComponent,
    ForgotVerifyOtpComponent,
    PostJobEmployeeComponent,
    EmployeeVerifyOTPComponent,
    EmployeerLoginComponent,
    EmployeeForgotPassComponent,
    EmployeeForgotPassVerifyComponent,
    EmployeeSetPasswordComponent,
    SearchCandidateComponent,
    SidebarComponent,
    HeaderComponent,
    ViewDataDetailsCanComponent,
    AddAdvanceDetailsForCandidateComponent,
    ViewDetailsEmployeeComponent,
    EditEmployeeAdvanceComponent,
    DisplaySearchDetailsComponent,
    SearchCandidateSideComponent,
    CandidateDisplaySearchJobComponent,
    AppliedJobsComponent,
    SavedJobsComponent,
    JobAlertComponent,
    AppliedJobDisplayDtaComponent,
    SavedJobDisplayDataComponent,
    DisplayJobAlertComponent,
    ViewCandidateDetailsAfterSearchComponent,
    MyJobPostComponent,
    ViewJobApplicantsComponent,
    ViewCadidateDeatilsAfterApplyJobComponent,
    SavedSearchViewByEmployeerComponent,
    ViewBasicCandidateComponent,
    ViewBasicEmployeeComponent,
    SavedSearchViewCandidateComponent,
    AdminLoginComponent,
    AdminRegistrationComponent,
    AdminSideViewEmployeeRegistrationComponent,
    AdminSideViewCandidateRegistrationComponent,
    AdminViewJobPostingComponent,
    JobAlertCreateComponent,
    RePostMyJobPostComponent,
    ViewJobPostMyJobPostComponent,
    CreatePlanJobComponent,
    ManagePlanViewComponent,
    EmployeeViewPlanDetailsByAdminComponent,
    AdminSideAterPayByEmployeeComponent,
    ManageEmployerPlanEmployeeViewComponent,
    ViewpostAfterUsedJobPostComponent,
    MobileVerificationComponent,
    EmployeeMobileVerifyComponent,
    ViewCVAfterUsedCVAccessComponent,
    SavedFolderGetComponent,
    SavedFolderViewCandidateComponent,
    SafePipe,
    EmployersideBarComponent,
    AdminSideBarComponent,
    LinkSendPageComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GooglePlaceModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDoYhbYhtl9HpilAZSy8F_JHmzvwVDoeHI',
    }),
    NgxDaterangepickerMd.forRoot(),
  ],

  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
