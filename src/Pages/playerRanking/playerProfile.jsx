import React from "react";
import { useLocation } from "react-router-dom";
import "./style.css";

export default function PlayerProfile() {
  const { state } = useLocation();
  return (
    <div id="player-profile">
      <img src={state?.profile?.img} alt={state?.profile?.full_name} />
      <h1>{state?.profile?.full_name}</h1>
      <div className="profile-details">
        <label>Date of Birth:</label> {state?.profile?.date_of_birth}
      </div>
      <div className="profile-details">
        <label>Country:</label> {state?.profile?.country}
      </div>
      <div className="profile-details">
        <label>Role:</label> {state?.profile?.role}
      </div>
      <div className="profile-details">
        <label>Formats:</label> {state?.profile?.formats.join(", ")}
      </div>
      <div className="profile-details">
        <label>Career Statistics:</label>
        <table className="table">
          <thead>
            <tr>
              <th>Format</th>
              <th>Matches</th>
              <th>Runs</th>
              <th>Half-centuries</th>
              <th>Centuries</th>
              <th>Best Score</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(state?.profile?.career_statistics).map((format) => (
              <tr key={format}>
                <td>{format}</td>
                <td>{state?.profile?.career_statistics[format].matches}</td>
                <td>{state?.profile?.career_statistics[format].runs}</td>
                <td>{state?.profile?.career_statistics[format].half_centuries}</td>
                <td>{state?.profile?.career_statistics[format].centuries}</td>
                <td>{state?.profile?.career_statistics[format].best_score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="profile-details">
    <label>Awards:</label>
    <table className="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Year</th>
            </tr>
        </thead>
        <tbody>
            {state?.profile?.awards.map(award => (
                <tr key={award.name}>
                    <td>{award.name}</td>
                    <td>{award.year}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
    </div>
  );
}
