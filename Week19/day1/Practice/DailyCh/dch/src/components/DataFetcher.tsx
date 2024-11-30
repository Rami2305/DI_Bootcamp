import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeamStatistics } from '../api/api';
// import { TeamStatisticsResponse } from '../types/types';

import { RootState, AppDispatch } from '../api/store';  // Ajusta según la configuración de tu store

interface DataFetcherProps {
    leagueId: number;
    season: number;
    teamId: number;
}
  
const DataFetcher: React.FC<DataFetcherProps> = ({ leagueId, season, teamId }) => {
    const dispatch: AppDispatch = useDispatch();
    const { data, loading, error } = useSelector((state: RootState) => state.data);

    useEffect(() => {
        dispatch(fetchTeamStatistics(leagueId, season, teamId));
    }, [dispatch, leagueId, season, teamId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
        {data && (
            <div>
            <h2>{data.team.name}</h2>
                <p>League: {data.league.name}</p>
                <p>Season: {data.season}</p>
                <p>Games Played: {data.statistics.games.played}</p>
                <p>Wins: {data.statistics.games.wins}</p>
                <p>Draws: {data.statistics.games.draws}</p>
                <p>Losses: {data.statistics.games.losses}</p>
                <p>Goals For: {data.statistics.goals.for}</p>
                <p>Goals Against: {data.statistics.goals.against}</p>
            </div>
            )}
        </div>
    );
};

export default DataFetcher;