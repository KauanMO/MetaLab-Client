import { Game } from "./game.model"

export interface Feedback {
    id: string,
    gameId?: string,
    message: string,
    createdAt: Date,
    type: FeedBackType,
    environment?: FeedbackEnvironment
}

export interface FeedbacksWithGame {
    game: Game,
    feedbacks: Feedback[]
}

export enum FeedBackType {
    BUG_REPORT,
    SUGGESTION,
    OTHER
}

export interface FeedbackEnvironment {
    feedbackOperationSystem: FeedbackOperatingSystem,
    feedbackHardware: FeedbackHardware,
    feedbackDisplay: FeedbackDisplay,
    feedbackRuntime: FeedbackRuntime
}

export interface FeedbackOperatingSystem {
    name: string,
    version: string
}

export interface FeedbackHardware {
    cpu: string,
    gpu: string,
    ramMb: number,
    vramMb: number
}

export interface FeedbackDisplay {
    width: number,
    height: number,
    refreshRate: number
}

export interface FeedbackRuntime {
    graphicsApi: string,
    fps: number
}