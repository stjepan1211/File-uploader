import {
    Component,
    NgZone
} from '@angular/core';
import {
    SignalRService
} from '../signalR/signalR.service';
import { UploadDocumentProcessService } from '../signalr/upload-document-process.service';
import {
    GetClockTime
} from '../signalR/get-clock-time';
// decorator section comprised of selector and view template  
@Component({
    selector: 'clock-component',
    template: `
    <div id="timediv">
        <p> {{myMessages }}</p>
    </div> 
  `,
    providers: [ UploadDocumentProcessService ]
})
export class ClockComponent {
    // public variables declaration  
    public currentMessage: GetClockTime;
    public allMessages: GetClockTime;
    public myMessages: String;
    public canSendMessage: Boolean;
    // constructor of the class to inject the service in the constuctor and call events.  
    constructor(private _signalRService: SignalRService, private _ngZone: NgZone, private uploadDocumentProcessService: UploadDocumentProcessService) {
        // this can subscribe for events  
        this.subscribeToEvents();
        this.subscribeToUploadEvents();
        // this can check for conenction exist or not.  
        this.canSendMessage = _signalRService.connectionExists;
        // this method call every second to tick and respone tansfered to client.  
        //setInterval(() => {
        //    this.uploadDocumentProcessService.getMessage();
        //}, 5000);
    }
    private subscribeToEvents(): void {
        // if connection exists it can call of method.  
        this._signalRService.connectionEstablished.subscribe(() => {
            this.canSendMessage = true;
        });
        // finally our service method to call when response received from server event and transfer response to some variable to be shwon on the browser.  
        this._signalRService.messageReceived.subscribe((message: GetClockTime) => {
            debugger;
            this._ngZone.run(() => {
                this.allMessages = message;
            });
        });
    }

    private subscribeToUploadEvents(): void {
        // if connection exists it can call of method.  
        this.uploadDocumentProcessService.connectionEstablished.subscribe(() => {
            this.canSendMessage = true;
        });
        // finally our service method to call when response received from server event and transfer response to some variable to be shwon on the browser.  
        this._signalRService.messageReceived.subscribe((message: string) => {
            this._ngZone.run(() => {
                this.myMessages = message;
            });
        });
    }
} 