import "./profile.css";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaEnvelope, FaEdit } from "react-icons/fa";

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("currentUser") || "{}");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  if (!user || !user.username) {
    return <div>No user data found.</div>;
  }

  return (
    <div className="page">
      <div className="profile-main-container">
        <div className="profile-header">
          <div className="profile-avatar-section">
            <FaUserCircle
              size={90}
              color="#222"
              className="profile-avatar-img"
            />
            <div className="profile-header-info">
              <div className="profile-header-name">{user.username}</div>
              <div className="profile-header-email">
                {user.email || "No email"}
              </div>
            </div>
          </div>
          <button className="profile-edit-btn">
            <FaEdit style={{ marginRight: 6 }} />
            Edit
          </button>
        </div>

        <div className="profile-details-grid">
          <div className="profile-detail">
            <label>Username</label>
            <input type="text" value={user.username} readOnly />
          </div>
          <div className="profile-detail">
            <label>Nick Name</label>
            <input
              type="text"
              value={user.nickname || ""}
              placeholder="Your Nick Name"
            />
          </div>
          <div className="profile-detail">
            <label>Gender</label>
            <input type="text" value={user.gender || ""} placeholder="Gender" />
          </div>
          <div className="profile-detail">
            <label>Country</label>
            <input
              type="text"
              value={user.country || ""}
              placeholder="Country"
            />
          </div>
          <div className="profile-detail">
            <label>Language</label>
            <input
              type="text"
              value={user.language || ""}
              placeholder="Language"
            />
          </div>
        </div>

        <div className="profile-section">
          <h3>My Email Address</h3>
          <div className="profile-email-box">
            <FaEnvelope size={20} style={{ marginRight: 10 }} />
            <div>
              <div>{user.email || "No email"}</div>
            </div>
          </div>
          {/* <button className="profile-add-email-btn">+Add Email Address</button> */}
        </div>

        <div className="profile-section">
          <h3>Experience</h3>
          <div className="profile-experience-box">
            <div>
              Company: <span>{user.experienceCompany || "Your Company"}</span>
            </div>
            <div>
              Position:{" "}
              <span>{user.experiencePosition || "Your Position"}</span>
            </div>
            <div>
              Years: <span>{user.experienceYears || "0"}</span>
            </div>
          </div>
        </div>

        <div className="profile-section">
          <h3>Skills</h3>
          <div className="profile-skills-box">
            {user.skills && user.skills.length > 0 ? (
              user.skills.map((skill: string, idx: number) => (
                <span className="profile-skill-pill" key={idx}>
                  {skill}
                </span>
              ))
            ) : (
              <span className="profile-skill-pill">No skills added</span>
            )}
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="button-primary button-light logout-button"
          style={{ marginTop: "2rem" }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
