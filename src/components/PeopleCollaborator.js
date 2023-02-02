import React from "react";
import People from "../assets/people.png";

function PeopleCollaborator() {
  return (
    <div className="people-collaborators">
      <div>
        <img src={People} alt="People Collaborators" />
      </div>
      <div className="people-quotes">
        See updates from your team. <br />
        Keep work on track.
      </div>
      <div className="invitation-button">Invite Teammates</div>
    </div>
  );
}

export default PeopleCollaborator;
