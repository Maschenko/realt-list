import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment.prod';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AppRoutingModule} from './app-routing.module';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {RealtModule} from './realt/realt.module';
import {RouterModule} from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
import { RealtListComponent } from './realt-list/realt-list.component';
import {RealtListModule} from './realt-list/realt-list.module';
import {RealtService} from './shared/realt.service';
import {HttpClientModule} from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import {PagerService} from './shared/pager.service';
import { SubComponent } from './sub/sub.component';
import {SubModule} from './sub/sub.module';
import {SubService} from './shared/sub.service';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {Ng2OrderModule} from 'ng2-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    RealtListComponent,
    MenuComponent,
    SubComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'ang_firebase_test'),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    RouterModule,
    AppRoutingModule,
    RealtModule,
    RealtListModule,
    HttpClientModule,
    SubModule,
    Ng2SearchPipeModule
  ],
  providers: [RealtService, PagerService, SubService],
  bootstrap: [AppComponent]
})
export class AppModule {}
