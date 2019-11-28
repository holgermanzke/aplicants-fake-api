import React from "react";
import Applicant from "./Applicant";

export default function AppList() {
  const [applicants, setApplicants] = React.useState([]);

  async function fetchApplicants() {
    const response = await fetch("http://localhost:2322/applicants");
    const newApplicants = await response.json();
    setApplicants(newApplicants);
  }

  React.useEffect(() => {
    fetchApplicants();
  }, []);

  return (
    <div>
      {applicants.map(app => (
        <Applicant
          key={app.id}
          name={app.name}
          profession={app.profession}
          experience={app.experience}
        />
      ))}
    </div>
  );
}
