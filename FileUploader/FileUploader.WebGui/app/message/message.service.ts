import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomMessageService {


    constructor(private messageService: MessageService) { }

    showSuccess(summary: string, detail: string) {
        this.messageService.add({ severity: 'success', summary: summary, detail: detail });
    }

    showError(summary: string, detail: string) {
        this.messageService.add({ severity: 'error', summary: summary, detail: detail });
    }

    showWarning(summary: string, detail: string) {
        this.messageService.add({ severity: 'warn', summary: summary, detail: detail });
    }

    clear() {
        this.messageService.clear();
    }
}