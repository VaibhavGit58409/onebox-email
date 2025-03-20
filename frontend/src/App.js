import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/emails/sync").then((response) => {
      setEmails(response.data.emails);
    });
  }, []);

  return (
    <div>
      <h1>Email Inbox</h1>
      {emails.map((email, index) => (
        <div key={index} style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px" }}>
          <p><strong>From:</strong> {email.sender}</p>
          <p><strong>Subject:</strong> {email.subject}</p>
          <p><strong>Category:</strong> {email.category}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
