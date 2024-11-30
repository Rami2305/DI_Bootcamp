import { Dispatch } from 'redux';
import { setTeamsData, setTeamsError, setTeamsLoading } from '../features/dataSlice';
import { TeamStatisticsResponse } from '../types/types';

export const fetchTeamStatistics = (leagueId: number, season: number, teamId: number) => {
return async (dispatch: Dispatch): Promise<void> => {
    dispatch(setTeamsLoading(true));

    try {
    const response = await fetch(`https://api-football-v1.p.rapidapi.com/v3/teams/statistics?league=${leagueId}&season=${season}&team=${teamId}`, {
        method: 'GET',
        headers: {
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
        'x-rapidapi-key': '3095c347c2msh695f1b4c178e495p144481jsn660085498f74' // Sustituye por tu clave real
        }
    });

    if (response.status === 429) {
        console.log('Too Many Requests. Waiting before retrying...');
        await new Promise(resolve => setTimeout(resolve, 60000)); // Espera de 60 segundos
        return fetchTeamStatistics(leagueId, season, teamId)(dispatch); // Reintentar
    }

    if (!response.ok) throw new Error('Network response was not ok');
    
    const data = await response.json();
    
    // Aquí puedes ajustar si necesitas envolver los datos en un objeto con la propiedad `response`
    const teamData: TeamStatisticsResponse = data.response; // Ajusta si la propiedad `response` es parte de los datos

    dispatch(setTeamsData(teamData)); // Ajusta el tipo de los datos que estás despachando
    } catch (error) {
    dispatch(setTeamsError('Failed to fetch team statistics'));
    } finally {
    dispatch(setTeamsLoading(false));
    }
};
};
