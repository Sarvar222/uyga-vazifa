import "./NewUserForm.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function NewUserForm({ addUser }) {
  const [user, setUser] = useState({
    id: uuidv4(),
    image: "",
    firstName: "",
    lastName: "",
    age: null,
    from: "",
    job: "",
    gender: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(user);
  };
  return (
    <div className="modal-wrapper">
      <div className="overlay">
        <div className="modal">
          <h2>Yangi Foydalanuvchi Qo'shish</h2>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Rasm yo'li: </span>
              <input
                onChange={(e) => {
                  setUser((prev) => {
                    return { ...prev, image: e.target.value };
                  });
                }}
                type="url"
                required
              />
            </label>
            <label>
              <span>Ismi:</span>
              <input
                onChange={(e) => {
                  setUser((prev) => {
                    return { ...prev, firstName: e.target.value };
                  });
                }}
                type="text"
                required
              />
            </label>
            <label>
              <span>Familiyasi:</span>
              <input
                onChange={(e) => {
                  setUser((prev) => {
                    return { ...prev, lastName: e.target.value };
                  });
                }}
                type="text"
                required
              />
            </label>
            <label>
              <span>Age:</span>
              <input
                onChange={(e) => {
                  setUser((prev) => {
                    return { ...prev, age: e.target.value };
                  });
                }}
                type="number"
                required
              />
            </label>
            <label>
              <span>Fuqaroligi:</span>
              <input
                onChange={(e) => {
                  setUser((prev) => {
                    return { ...prev, from: e.target.value };
                  });
                }}
                type="text"
                required
              />
            </label>
            <label>
              <span>Kasbi:</span>
              <input
                onChange={(e) => {
                  setUser((prev) => {
                    return { ...prev, job: e.target.value };
                  });
                }}
                type="text"
                required
              />
            </label>
            <div className="gender">
              <span>Gender</span>
              <label>
                <small>Erkak</small>
                <input
                  onChange={(e) => {
                    setUser((prev) => {
                      return { ...prev, gender: e.target.value };
                    });
                  }}
                  type="radio"
                  required
                  name="gender"
                  value="male"
                />
              </label>
              <label>
                <small>Ayol</small>
                <input
                  onChange={(e) => {
                    setUser((prev) => {
                      return { ...prev, gender: e.target.value };
                    });
                  }}
                  type="radio"
                  required
                  name="gender"
                  value="female"
                />
              </label>
            </div>
            <button className="modal-btn">Qo'shish</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default NewUserForm;
