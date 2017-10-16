import { Injectable, EventEmitter } from '@angular/core';

declare var $: any;

@Injectable()
export class UploadDocumentProcessService {

    private proxy: any;
    private proxyName: string = 'processstatehub';
    private connection: any;

    public messageReceived: EventEmitter<String>;
    public connectionEstablished: EventEmitter<Boolean>;
    public connectionExists: Boolean;

    constructor() {
        this.connectionEstablished = new EventEmitter<Boolean>();
        this.messageReceived = new EventEmitter<String>();
        this.connectionExists = false;
        this.connection = $.hubConnection('http://localhost:5736/FileUploader.WebApi/');
        this.proxy = this.connection.createHubProxy(this.proxyName);
        
        this.registerOnServerEvents();
        this.startConnection();
    }

    public getMessage() {
        this.proxy.invoke('ProcessMessage');
        
    }

    private startConnection(): void {
        this.connection.start().done((data: any) => {
            console.log('Now connected ' + data.transport.name + ', connection ID= ' + data.id);
            this.connectionEstablished.emit(true);
            this.connectionExists = true;
        }).fail((error: any) => {
            console.log('Could not connect ' + error);
            this.connectionEstablished.emit(false);
        });
    }

    private registerOnServerEvents(): void {
        this.proxy.on('processMessage', (data: String) => {
            window.alert(data);
            //console.log('Recieved message from file process: ' + JSON.stringify(data));
            this.messageReceived.emit(data);
        });
    }
} 