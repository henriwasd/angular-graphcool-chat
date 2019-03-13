import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { AllMessagesQuery, GET_CHAT_MESSAGES_QUERY } from './message.graphql';
import { map } from 'rxjs/operators';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private apollo: Apollo
  ) { }

  getChatMessage(chatId: string): Observable<Message[]> {
    return this.apollo.query<AllMessagesQuery>({
      query: GET_CHAT_MESSAGES_QUERY,
      variables: { chatId }
    }).pipe(
      map(res => res.data.allMessages)
    );
  }
}
