import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

const REGISTER_GAME = gql`
  mutation RegisterGame($email: String!, $name: String!, $description: String!) {
    requestGameRegistry(input: {email: $email, name: $name, description: $description}) {
      id,
      name,
      createdAt,
      active
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private apollo: Apollo) { }

  registerGame(email: string, name: string, description: string): Observable<any> {
    return this.apollo.mutate<any>({
      mutation: REGISTER_GAME,
      variables: { email, name, description }
    })
  }
}
