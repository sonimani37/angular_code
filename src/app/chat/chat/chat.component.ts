import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/Authentication/authentication.service';
import { io, Socket } from "socket.io-client";
import { serverUrl } from 'src/environments/environment';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit, OnDestroy {
    response: any;
    selectedUser: any;
    chatForm!: UntypedFormGroup;
    receiverId: any;
    senderId: any;
    previousMsgs: any;

    messages: string[] = [];
    message: string = '';
    socket: Socket;

    constructor(private route: ActivatedRoute, private auth: AuthenticationService,
        private formBuilder: UntypedFormBuilder) {
            this.socket = io(serverUrl);
         }

    ngOnInit(): void {
        // this.socket = io(serverUrl);

        // Example: Listen for chatMessage events from the server
        this.socket.on('chatMessage', (message: any) => {
            // this.messages.push(message);
            console.log(message);
            this.getMessages();
        });   

        this.senderId = localStorage.getItem('userId');

        this.route.paramMap.subscribe(params => {
            // Get the userId from the route
            this.receiverId = params.get('userId');
            this.getUser(this.receiverId);
        });
        this.getMessages()

        this.chatForm = this.formBuilder.group({
            message: ['', Validators.required],
            senderId: [this.senderId, Validators.required],
            receiverId: [this.receiverId, Validators.required]
        });
    }

    getUser(userId: any) {
        var endPoint = 'getUsers?id=' + userId
        this.auth.sendRequest('get', endPoint, null)
            .subscribe((result: any) => {
                this.response = result;
                if (this.response.success == false) {
                    console.log(this.response);

                } else if (this.response.success == true) {
                    this.selectedUser = this.response.user;
                    // console.log(this.selectedUser);
                }
            });
    }

    getMessages() {
        let dataObj = {
            senderId: this.senderId,
            receiverId: this.receiverId
        }
        var endPoint = 'chat/get-messages'
        this.auth.sendRequest('post', endPoint, dataObj).subscribe(
            (result: any) => {
                if (result.success == false) {

                } else if (result.success == true) {
                    this.previousMsgs = result.messages;

                    this.previousMsgs.forEach((element: any) => {

                        if (element.senderId == this.senderId) {
                            element.isSender = true;
                            element.isReceiver = false;
                        } else {
                            element.isReceiver = true;
                            element.isSender = false;
                        }
                    });
                    console.log(this.previousMsgs);

                }
            })
    }

    sendMessage() {

        console.log(this.chatForm.value);
        var endPoint = 'chat/send-message'
        this.auth.sendRequest('post', endPoint, this.chatForm.value).subscribe(
            (result: any) => {
                if (result.success == false) {

                } else if (result.success == true) {
                    console.log(this.chatForm.value);
                    this.socket.emit('user-message', this.chatForm.value, (error: any) => { });
                    this.message = ''; 
                    this.chatForm.reset();
                    this.getMessages()
                }
            })
    }

    ngOnDestroy(): void {
        // Disconnect the socket when the component is destroyed
        // this.socket.disconnect();
    }

}
