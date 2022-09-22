import { useState, useEffect } from "react";
import ContactPopup from "./ContactPopup";

const PageTwo = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const res = await fetch("https://reqres.in/api/users?page=2");
    const json = await res.json();
    setUsers(json.data);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className="App">
      <h1>Page 2</h1>
      <div className="flex">
        {users.length &&
          users.map((user) => {
            return (
              <div className="employee-card" key={user.id}>
                <img
                  className="employee-avatar"
                  key={user.avatar}
                  src={user.avatar}
                />
                <p>
                  {user.first_name} {user.last_name}
                </p>
                <button
                  className="contact-link"
                  onClick={() => setButtonPopup(true)}
                >
                  Contact
                </button>

                <ContactPopup trigger={buttonPopup} setTrigger={setButtonPopup}>
                  <p>{user.email}</p>
                </ContactPopup>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PageTwo;
