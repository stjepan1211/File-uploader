"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var messageservice_1 = require("primeng/components/common/messageservice");
var core_1 = require("@angular/core");
var CustomMessageService = (function () {
    function CustomMessageService(messageService) {
        this.messageService = messageService;
    }
    CustomMessageService.prototype.showSuccess = function (summary, detail) {
        this.messageService.add({ severity: 'success', summary: summary, detail: detail });
    };
    CustomMessageService.prototype.showError = function (summary, detail) {
        this.messageService.add({ severity: 'error', summary: summary, detail: detail });
    };
    CustomMessageService.prototype.showWarning = function (summary, detail) {
        this.messageService.add({ severity: 'warn', summary: summary, detail: detail });
    };
    CustomMessageService.prototype.clear = function () {
        this.messageService.clear();
    };
    return CustomMessageService;
}());
CustomMessageService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [messageservice_1.MessageService])
], CustomMessageService);
exports.CustomMessageService = CustomMessageService;
//# sourceMappingURL=message.service.js.map