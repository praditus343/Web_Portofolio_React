// src/components/Profile.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Optional: jika menggunakan komponen JS Bootstrap

const Profile = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="main-body">
          <div className="row gutters-sm">
            {/* Sidebar Section */}
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body text-center">
                  <img src="/1.png" alt="Admin" className="rounded-circle" width="150" />
                  <h4 className="mt-1">Praditus Egi Danuarta</h4>
                  <p className="text-secondary mb-1">IT Enthusiast</p>
                  <a href="https://www.instagram.com/egidanuarta17/" className="btn btn-primary mb-2">Follow</a>
                  <a href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=egidanuarta17@gmail.com" className="btn btn-outline-primary mb-2">Message</a>
                  <p className="text-muted mt-2 text-container text-justify"> 
                    I am a student with a keen interest in the field of IT, particularly in web development and data science. I am always eager to learn new technologies and enhance my skills in this domain.
                  </p>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="card mt-3">
                <ul className="list-group list-group-flush">
                  <SocialMediaItem icon="fas fa-globe" label="Website" value="https://danuarta.vercel.app/" />
                  <SocialMediaItem icon="fab fa-github" label="Github" value="praditus343" />
                  <SocialMediaItem icon="fab fa-twitter text-info" label="Twitter" value="@egidanuarta17" />
                  <SocialMediaItem icon="fab fa-instagram text-danger" label="Instagram" value="@egidanuarta17" />
                  <SocialMediaItem icon="fab fa-facebook text-primary" label="Facebook" value="egidanuarta17" />
                </ul>
              </div>
            </div>

            {/* Main Content Section */}
            <div className="col-md-8">
              <PersonalInfo />
              <Skills />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialMediaItem = ({ icon, label, value }) => (
  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
    <h6 className="mb-0">
      <i className={`${icon} mr-2 icon-inline`}></i>
      {label}
    </h6>
    <span className="text-secondary">{value}</span>
  </li>
);

const PersonalInfo = () => (
  <div className="card mb-3">
    <div className="card-body">
      {[
        { label: 'Full Name', value: 'Praditus Egi Danuarta' },
        { label: 'Email', value: 'egidanuarta17@gmail.com' },
        { label: 'Phone', value: '(+62) 857-0012-0940' },
        { label: 'Mobile', value: '(+62) 857-0012-0940' },
        { label: 'Address', value: 'Sleman, Yogyakarta' },
      ].map((info, index) => (
        <div key={index}>
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">{info.label}</h6>
            </div>
            <div className="col-sm-9 text-secondary">{info.value}</div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => (
  <div className="card mb-2">
    <div className="card-body mb-3">
      <h6 className="d-flex align-items-center mb-4">
        <i className="fas fa-cogs fa-3x mr-4 text-primary"></i>
        <span>Skills</span>
      </h6>
      <div className="row">
        {[
          { icon: 'html5', color: 'text-danger' },
          { icon: 'css3-alt', color: 'text-info' },
          { icon: 'js', color: 'text-warning' },
          { icon: 'node', color: 'text-primary' },
          { icon: 'npm', color: 'text-danger' },
          { icon: 'react', color: 'text-success' },
          { icon: 'vuejs', color: 'text-muted' },
          { icon: 'git-alt', color: 'text-info' },
          { icon: 'python', color: 'text-danger' },
          { icon: 'figma', color: 'text-primary' },
          { icon: 'php', color: 'text-info' },
          { icon: 'linux', color: 'text-secondary' },
        ].map((skill, index) => (
          <div key={index} className="col-md-3 mb-3">
            <div className="skill-card text-center p-3 bg-dark text-light rounded">
              <i className={`fab fa-${skill.icon} fa-3x mb-2 ${skill.color}`}></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Profile;
