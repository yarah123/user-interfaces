import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { Route, RouterModule } from '@angular/router';
import { ComponentsModule } from '@placeos/components';
import { UIModule } from '../ui/ui.module';

import { BuildingListComponent } from './pages/building-list.component';
import { NotFoundComponent } from './pages/not-found.component';

import { BuildingListItemComponent } from './components/building-list-item.component';

import { SurveySuiteModule } from '@placeos/survey-suite';
import { SurveyModule } from 'survey-angular-ui';
import { QuestionBankComponent } from './components/question-bank/question-bank.component';
import { SurveyBuilderComponent } from './components/survey-builder/survey-builder.component';
import { ModQuestionOverlayComponent } from './overlays/mod-question-overlay.component';
import { QuestionBankService } from './services/question-bank.service';
import { SurveyBuilderService } from './services/survey-builder.service';
import { SurveyCreatorTopbarComponent } from './components/survey-creator-topbar.component';
import { SurveyService } from './services/survey.service';
import { ModSurveyComponent } from './pages/mod-survey.component';
import { SearchInputComponent } from './components/search-input.component';
import { SurveyListingsComponent } from './pages/survey-listings.component';
import { RunSurveyComponent } from './pages/run-survey.component';

const routes: Route[] = [
    { path: '', component: BuildingListComponent },
    { path: 'survey-list/:id', component: SurveyListingsComponent },
    { path: 'builder', component: ModSurveyComponent},
    { path: 'run/:id', component: RunSurveyComponent },
    { path: '404', component: NotFoundComponent },
    { path: '**', pathMatch: 'full', component: NotFoundComponent },
];

const COMPONENTS = [
    BuildingListComponent,
    BuildingListItemComponent,
    NotFoundComponent,
    ModQuestionOverlayComponent,
    QuestionBankComponent,
    SurveyBuilderComponent,
    SurveyCreatorTopbarComponent,
    ModSurveyComponent,
    SearchInputComponent,
    SurveyListingsComponent,
    RunSurveyComponent
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatDialogModule,
        MatCheckboxModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatTabsModule,
        DragDropModule,
        MatButtonModule,
        MatSelectModule,
        MatSlideToggleModule,
        ComponentsModule,
        RouterModule,
        MatTableModule,
        MatMenuModule,
        MatListModule,
        MatFormFieldModule,
        UIModule,
        SurveySuiteModule,
        SurveyModule,
    ],
    providers: [SurveyBuilderService, QuestionBankService, SurveyService]
})
export class SurveysModule {}
