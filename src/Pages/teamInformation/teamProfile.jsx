import React from "react";
import { useLocation } from "react-router-dom";
import "./style.css";

export default function TeamProfile() {
  const { state } = useLocation();

  return (
    <div className="container">
      <div className="logo">
        <img  src={state?.boardLogo} />
      </div>
      <h1 style={{ textAlign: "center" }}>Team {state?.name}</h1>
      <h2>Team Information</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Full Name</td>
            <td>{state?.name} National Cricket Team</td>
          </tr>
          <tr>
            <td>Founded</td>
            <td>1877</td>
          </tr>

          {/* Add more information as needed */}
        </tbody>
      </table>

      <h2>History</h2>
      <p>{state?.history}</p>

      <h2>Achievements</h2>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Achievement</th>
          </tr>
        </thead>
        <tbody>
          {state?.achievements?.map((item) => (
            <tr key={Math?.random()}>
              <td>{item?.year}</td>
              <td>{item?.nameOfAchievement}</td>
            </tr>
          ))}

          {/* Add more achievements as needed */}
        </tbody>
      </table>

      <h2>Players</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
            {state?.squads?.map(item=>(
                 <tr key={Math.random()}>
                    <td style={{display:"flex", alignItems:"center",gap:"20px"}}>
                     <span>
                     <img style={{borderRadius:"50%",height:"50px",width:"50px"}} src={item?.img} alt="" />
                     </span>
                     <span>{`${item?.playerName} ${item?.role === "captain" ? "(C)" : ""}`}</span>
                 </td>
                 <td>{item?.position}</td>
               </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
