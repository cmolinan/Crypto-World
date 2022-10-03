const ApiURL = 'https://api.spacexdata.com/v3/missions';

const ApiGetAllMissions = async () => {
  const response = await fetch(ApiURL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const missionsData = await response.json();
  return missionsData;
};

export default ApiGetAllMissions;
