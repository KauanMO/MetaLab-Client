import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { FeedbacksWithGame } from '../models/feedback.model';

const GET_FEEDBACKS_WITH_GAME = gql`
  query GetFeedbacksWithGame($gameCode: String!) {
    getFeedbacksWithGame(gameCode: $gameCode) {
      feedbacks {
        id,
        message,
        createdAt,
        type
      },
      game {
        id,
        code,
        name,
        createdAt
      }
    }
  }
`;

interface GetFeedbacksWithGameResponse {
  getFeedbacksWithGame: FeedbacksWithGame;
}

@Injectable({ providedIn: 'root' })
export class FeedbackService {
  constructor(private apollo: Apollo) { }

  getFeedbacksWithGame(gameCode: string): Observable<FeedbacksWithGame> {
    return this.apollo.query<GetFeedbacksWithGameResponse>({
      query: GET_FEEDBACKS_WITH_GAME,
      variables: { gameCode },
      fetchPolicy: 'network-only'
    }).pipe(
      tap(result => console.log('Raw Apollo result:', result)),
      map(result => {
        if (!result.data) {
          throw new Error('No data returned from getFeedbacksWithGame query');
        }
        return result.data.getFeedbacksWithGame;
      })
    );
  }
}