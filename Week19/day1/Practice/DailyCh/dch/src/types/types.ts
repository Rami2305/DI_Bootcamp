export interface Team {
    id: number;
    name: string;
    logo: string;
}

export interface League {
    id: number;
    name: string;
}

export interface Games {
    played: number;
    wins: number;
    draws: number;
    losses: number;
}

export interface Goals {
    for: number;
    against: number;
}

export interface TeamStatisticsResponse {
    team: Team;
    league: League;
    season: number;
    statistics: {
        games: Games;
        goals: Goals;
    };
}

// Define el estado para el slice
export interface DataState {
    data: TeamStatisticsResponse | null;
    loading: boolean;
    error: string | null;
}