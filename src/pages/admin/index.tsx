import React from "react";

const Admin = () => {
  return <div><div className="panel-heading">
  <h2>Welcome Admin!</h2>
  <span>Dashboard</span>
</div>
<div className="row">
  <div className="col-lg-4 col-md-4">
      <div className="service-box-s2 s-box service-box-s2-bg1">
          <div className="number-box">01</div>
          <div className="content-box">
              <h5>Albums</h5>
              <p>Our people truly care for our work and for each other.</p>
          </div>
      </div>
  </div>
  <div className="col-lg-4 col-md-4">
      <div className="service-box-s2 s-box service-box-s2-bg2">
          <div className="number-box s2">02</div>
          <div className="content-box">
              <h5>Photos</h5>
              <p>We believe that a culture will build a thriving company.</p>
          </div>
      </div>
  </div>
  <div className="col-lg-4 col-md-4">
      <div className="service-box-s2 s-box service-box-s2-bg3">
          <div className="number-box s3">03</div>
          <div className="content-box">
              <h5>Videos</h5>
              <p>We’re driven to becoming the best version of ourselves.</p>
          </div>
      </div>
  </div>
</div>
<div className="table-panel">
  <div className="heading-box">
      <h3><i className="fa-solid fa-list-ol"></i> Recently Add</h3>
  </div>
  <table className="table">
      <thead>
          <tr>
              <th><i className="fa-solid fa-camera"></i> Image / Video</th>
              <th><i className="fa-solid fa-user"></i> Name</th>
              <th><i className="fa-solid fa-icons"></i> Mood</th>
              <th><i className="fa-solid fa-city"></i> City</th>
              <th><i className="fa-solid fa-city"></i> Address</th>
              <th><i className="fa-solid fa-calendar-days"></i> Date</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td><img src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" alt=""/></td>
              <td>Mr Nagpal</td>
              <td>Happy</td>
              <td>Faridabd</td>
              <td>Sec-14 Faridabd</td>
              <td>05-09-2023</td>
          </tr>
          <tr>
              <td><img src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" alt=""/></td>
              <td>Mr Nagpal</td>
              <td>Happy</td>
              <td>Faridabd</td>
              <td>Sec-14 Faridabd</td>
              <td>05-09-2023</td>
          </tr>
          <tr>
              <td><img src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" alt=""/></td>
              <td>Mr Nagpal</td>
              <td>Happy</td>
              <td>Faridabd</td>
              <td>Sec-14 Faridabd</td>
              <td>05-09-2023</td>
          </tr>
          <tr>
              <td><img src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" alt=""/></td>
              <td>Mr Nagpal</td>
              <td>Happy</td>
              <td>Faridabd</td>
              <td>Sec-14 Faridabd</td>
              <td>05-09-2023</td>
          </tr>
          <tr>
              <td><img src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" alt=""/></td>
              <td>Mr Nagpal</td>
              <td>Happy</td>
              <td>Faridabd</td>
              <td>Sec-14 Faridabd</td>
              <td>05-09-2023</td>
          </tr>
      </tbody>
  </table>
</div></div>;
};

export default Admin;
