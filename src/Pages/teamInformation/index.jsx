import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAxiosGet from '../../common/helper/useAxiosGet';
import "./teamTable.css";

export default function TeamTable() {
  const [teamsInfo,getTeamInfo] = useAxiosGet()

  useEffect(()=>{
    getTeamInfo(
      `http://localhost:5000/all-teams`
    )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  console.log(teamsInfo);


  return (
    <div className="container">
      <h1>Cricket Teams</h1>
      <table>
        <thead>
          <tr>
            <th>Logo</th>
            <th>Team Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {teamsInfo.map((team, index) => (
            <tr key={index}>
              <td><img src={team.boardLogo} alt={`Team ${index + 1} Logo`} /></td>
              <td><Link to={`/all-teams/${team.name}`} state={team}>Team {team.name}</Link></td>
              <td>{team.history.slice(0,100)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
