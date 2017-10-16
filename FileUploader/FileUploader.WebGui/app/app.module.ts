import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileUploadModule } from 'primeng/primeng';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FileDownloadComponent } from './file-download/file-download.component';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { FileSizePipe } from './pipes/file-size.pipe';
import { DateXPipe } from './pipes/datex.pipe';
import { GrowlModule } from 'primeng/primeng';
import { CustomMessageService } from './message/message.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { SignalRService } from './signalR/signalR.service';
import { ClockComponent } from './test/test';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FileUploadModule,
        HttpModule,
        FormsModule,
        NgbModule.forRoot(),
        DataTableModule,
        SharedModule,
        GrowlModule,
        JsonpModule
    ],
    declarations: [
        AppComponent,
        FileUploadComponent,
        FileDownloadComponent,
        FileSizePipe,
        DateXPipe,
        ClockComponent
    ],
    providers: [
        MessageService,
        CustomMessageService,
        SignalRService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
