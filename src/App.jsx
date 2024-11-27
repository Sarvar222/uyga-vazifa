import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import UserList from "./components/userlist/UserList";
import NewUserForm from "./components/newuser/NewUserForm";
import { useState } from "react";
function App() {
  const [users, setUsers] = useState([]);
  const deleteUser = (id) => {
    setUsers((prev) => {
      return prev.filter((user) => {
        return user.id !== id;
      });
    });
  };
  const addUser = (user) => {
    setUsers((prev) => {
      return [...prev, user];
    });
    setShowModal(false);
  };
  const [showModal, setShowModal] = useState(false);
  const closeModal = (e) => {
    if (e.target.className === "overlay") setShowModal(false);
    if (e.key === "Escape") setShowModal(false);
  };
  return (
    <div onClick={closeModal} onKeyDown={closeModal} className="App">
      <Navbar usersLenght={users.length} />
      <main>
        <div className="no-users">
          {!users.length === 0 && <h2>No Users</h2>}
        </div>
        <UserList users={users} deleteUser={deleteUser} />
      </main>
      <Footer />
      {showModal && <NewUserForm addUser={addUser} />}
      <button onClick={() => setShowModal(true)} className="create-user">
        Yangi foydalanuvchi qo'shish
      </button>
    </div>
  );
}
export default App;
