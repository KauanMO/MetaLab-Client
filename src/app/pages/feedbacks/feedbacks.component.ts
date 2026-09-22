import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeedbackService } from '../../services/feedback.service';
import { Feedback, FeedBackType } from '../../models/feedback.model';
import { Game } from '../../models/game.model';

@Component({
  selector: 'app-feedbacks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feedbacks.component.html',
  styleUrl: './feedbacks.component.scss',
})
export class FeedbacksComponent implements OnInit {
  gameCode = '';
  game: Game | null = null;
  feedbacks: Feedback[] = [];
  loading = true;
  error = '';

  FeedBackType = FeedBackType;

  constructor(
    private route: ActivatedRoute,
    private feedbackService: FeedbackService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.gameCode = this.route.snapshot.paramMap.get('gameCode') ?? '';

    this.feedbackService.getFeedbacksWithGame(this.gameCode).subscribe({
      next: (res) => {
        this.game = res.game;
        this.feedbacks = res.feedbacks;
        this.loading = false;
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error('Error fetching feedbacks:', err);
        this.error = 'Could not load feedbacks.';
        this.loading = false;
        this.cdr.markForCheck();
      },
    });
  }

  feedbackTypeLabel(type: FeedBackType): string {
    switch (type) {
      case FeedBackType.BUG_REPORT:
        return 'Bug Report';
      case FeedBackType.SUGGESTION:
        return 'Suggestion';
      case FeedBackType.OTHER:
        return 'Other';
      default:
        return 'Unknown';
    }
  }
}