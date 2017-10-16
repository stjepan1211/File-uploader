"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var primeng_1 = require("primeng/primeng");
var file_upload_component_1 = require("./file-upload/file-upload.component");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var file_download_component_1 = require("./file-download/file-download.component");
var primeng_2 = require("primeng/primeng");
var file_size_pipe_1 = require("./pipes/file-size.pipe");
var datex_pipe_1 = require("./pipes/datex.pipe");
var primeng_3 = require("primeng/primeng");
var message_service_1 = require("./message/message.service");
var messageservice_1 = require("primeng/components/common/messageservice");
var signalR_service_1 = require("./signalR/signalR.service");
var test_1 = require("./test/test");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            primeng_1.FileUploadModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            ng_bootstrap_1.NgbModule.forRoot(),
            primeng_2.DataTableModule,
            primeng_2.SharedModule,
            primeng_3.GrowlModule,
            http_1.JsonpModule
        ],
        declarations: [
            app_component_1.AppComponent,
            file_upload_component_1.FileUploadComponent,
            file_download_component_1.FileDownloadComponent,
            file_size_pipe_1.FileSizePipe,
            datex_pipe_1.DateXPipe,
            test_1.ClockComponent
        ],
        providers: [
            messageservice_1.MessageService,
            message_service_1.CustomMessageService,
            signalR_service_1.SignalRService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map