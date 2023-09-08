import React, { ReactNode } from "react";
import Image from "next/image";
import Memories from '../../../public/images/memories.png';
interface AdminProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminProps> = ({ children }) => {
  return <section className="main_dash">
  <div className="header">
      <div className="row">
          <div className="col-lg-6">
              <div className="logo"><Image src={Memories} alt="logo" className="img-fluid"></Image></div>
              <div className="toggleBtn"><i className="fa-solid fa-bars-staggered"></i></div>
          </div>
          <div className="col-lg-6">
              <div className="searchItem">
                  <form action="">
                      <ul>
                          <li>
                              <input type="search" className="form-control" placeholder="Search Here"/>
                          </li>
                          <li>
                              <a href="#">
                                  <span className="user-img">
                                      <img src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" alt="user" className="img-fluid" />
                                      <span>Admin</span>
                                  </span>
                              </a>
                              <div className="dropMenu">
                                  <a href="#">My Profile</a>
                                  <a href="#">Log Out</a>
                              </div>
                          </li>
                      </ul>
                  </form>
              </div>
          </div>
      </div>
  </div>
  <div className="dash_wrapper">
      <div className="sideNav">
          <h5>Main</h5>
          <ul>
              <li className="subMenu">
                  <a href="#">
                      <i className="fa-solid fa-gauge-high"></i> Dashboard 
                  </a>
                  <i className="fa-solid fa-chevron-right"></i>
              </li>
              <li className="subMenu">
                  <a href="#">
                      <i className="fa-solid fa-image"></i> Album
                  </a>
                  <i className="fa-solid fa-chevron-right"></i>
                  <ul className="d-none">
                      <li><a href="#">1</a></li>
                      <li><a href="#">1</a></li>
                      <li><a href="#">1</a></li>
                  </ul>
              </li>
              <li className="subMenu">
                  <a href="#"><i className="fa-regular fa-images"></i> Photos</a>
                  <i className="fa-solid fa-chevron-right"></i>
                  <ul className="d-none">
                      <li><a href="#">1</a></li>
                      <li><a href="#">1</a></li>
                      <li><a href="#">1</a></li>
                  </ul>
              </li>
              <li className="subMenu">
                  <a href="#"><i className="fa-solid fa-sliders"></i> Category</a>
                  <i className="fa-solid fa-chevron-right"></i>
                  <ul className="d-none">
                      <li><a href="#">1</a></li>
                      <li><a href="#">1</a></li>
                      <li><a href="#">1</a></li>
                  </ul>
              </li>
              <li className="subMenu">
                  <a href="#"> <i className="fa-solid fa-film"></i>Video</a>
                  <i className="fa-solid fa-chevron-right"></i>
                  <ul className="d-none">
                      <li><a href="#">1</a></li>
                      <li><a href="#">1</a></li>
                      <li><a href="#">1</a></li>
                  </ul>
              </li>
          </ul>
      </div>
      <div className="mainPanel">
      {children}
      </div>
  </div>
</section>;
};

export default AdminLayout;
