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
    chatType: any;
    previousGroupMsgs: any;

    constructor(private route: ActivatedRoute, private auth: AuthenticationService,
        private formBuilder: UntypedFormBuilder) {
        this.socket = io(serverUrl);
    }

    ngOnInit(): void {
        this.senderId = localStorage.getItem('userId');
        this.route.queryParams.subscribe(params => {
            this.chatType = params['type'];
        });

        this.route.paramMap.subscribe(params => {
            // Get the userId from the route
            this.receiverId = params.get('userId');
        });
        
        if (this.chatType == 'single') {
            this.getMessages();
            // Example: Listen for chatMessage events from the server
            this.socket.on('chatMessage', (message: any) => {
                this.getMessages();
            });
            this.getUser(this.receiverId);

        } else if (this.chatType == 'group')  {
            this.getGroupMessages();
            this.socket.on('chatGroupMessage', (data) => {
                this.getGroupMessages();
            });
            this.getGroup(this.receiverId);    
        }   

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

                } else if (this.response.success == true) {
                    this.selectedUser = this.response.user;
                }
            });
    }

    getGroup(userId: any) {
        var endPoint = 'group?id=' + userId
        this.auth.sendRequest('get', endPoint, null)
            .subscribe((result: any) => {
                if (result.success == false) {

                } else if (result.success == true) {
                    this.selectedUser = result.group;
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
                    this.previousMsgs = [];
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
                }
            })
    }

    getGroupMessages(){
        let dataObj = {
            groupId: this.receiverId
        }
        var endPoint = 'group/get-messages'
        this.auth.sendRequest('post', endPoint, dataObj).subscribe(
            (result: any) => {                
                if (result.success == false) {

                } else if (result.success == true) {
                    this.previousGroupMsgs = [];
                    this.previousGroupMsgs = result.messages;
                    this.previousGroupMsgs.forEach((element: any) => {
                        if (element.senderId == this.senderId) {
                            element.isSender = true;
                            element.isReceiver = false;
                        } else {
                            element.isReceiver = true;
                            element.isSender = false;
                        }
                    });
                }
            })

    }

    sendMessage() {
        var chatData: any;
        var endPoint: any;

        if (this.chatType == 'single') {
            endPoint = 'chat/send-message'
            chatData = {
                message: this.chatForm.value.message,
                receiverId: this.chatForm.value.receiverId,
                senderId: this.chatForm.value.senderId
            }
        } else if (this.chatType == 'group') {
            endPoint = 'group/send-message'
            chatData = {
                message: this.chatForm.value.message,
                groupId: this.chatForm.value.receiverId,
                senderId: this.chatForm.value.senderId
            }
        }

        this.auth.sendRequest('post', endPoint, chatData).subscribe(
            (result: any) => {
                if (result.success == false) {

                } else if (result.success == true) {
                    if(this.chatType == 'single'){
                        this.socket.emit('user-message', chatData, (error: any) => { })
                         this.getMessages();
                    }else if(this.chatType == 'group'){
                        // Emit the message to the group
                        this.socket.emit('group-message', chatData);
                        this.getGroupMessages();
                    }
                    this.message = '';
                    this.chatForm.reset();
                   
                }
            })
    }

    ngOnDestroy(): void {
        // Disconnect the socket when the component is destroyed
        this.socket.disconnect();
    }

}
