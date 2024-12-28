import {Badge } from 'react-bootstrap';
import { FaSignOutAlt, FaSignInAlt, FaQuestionCircle, FaShoppingCart, FaRegWindowClose, FaShoppingBasket, FaShippingFast } from 'react-icons/fa';
import { FaUser, FaBars, FaUserLarge, FaUsers } from 'react-icons/fa6';
// import {} from 'react-icons/fa6';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import SearchBox from './SearchBox';
// import logo from '../assets/logo.png';
import { resetCart } from '../slices/cartSlice';
import { useState } from 'react';

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const [isSidebar, setIsSidebar] = useState(false);
  const [isUserProfile, setIsUserProfile] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {

      await logoutApiCall().unwrap();
      dispatch(logout());
      // NOTE: here we need to reset cart state for when a user logs out so the next
      // user doesn't inherit the previous users cart and shipping
      dispatch(resetCart());
      navigate('/login');
      setIsUserProfile(false);
    } catch (err) {
      console.error(err);
    }

  };

  const toggleSidebar = () => {
    setIsSidebar(!isSidebar);
  }

  const toggleUserProfile = () => {
    setIsUserProfile(!isUserProfile);
  }
  return (
    <div className={isSidebar ? 'toggle-sidebar-show' : 'toggle-sidebar-show toggle-sidebar'}>
      {/* ======= Header ======= */}
      <header id="header" className="header fixed-top d-flex align-items-center">

        <div className="d-flex align-items-center justify-content-between">
          {isSidebar ? (<FaRegWindowClose className="toggle-sidebar-btn" onClick={toggleSidebar} />) : (<FaBars className="toggle-sidebar-btn" onClick={toggleSidebar} />)}

          <Link to="/" className="logo d-flex align-items-center">
            <img src="p1-logo.png" alt="planet1" />
            <span className="d-none d-lg-block">Planet1</span>
          </Link>
        </div>

        <div className="search-bar">
          <SearchBox className="align-items-center" />
        </div>

        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item d-block d-lg-none">
              <SearchBox className="align-items-center" />
            </li>

            {/* <li className="nav-item dropdown">

              <Link className="nav-link nav-icon" to="#" data-bs-toggle="dropdown">
                <i className="bi bi-bell"></i>
                <span className="badge bg-primary badge-number">4</span>
              </Link>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                <li className="dropdown-header">
                  You have 4 new notifications
                  <Link to="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-exclamation-circle text-warning"></i>
                  <div>
                    <h4>Lorem Ipsum</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>30 min. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-x-circle text-danger"></i>
                  <div>
                    <h4>Atque rerum nesciunt</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>1 hr. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-check-circle text-success"></i>
                  <div>
                    <h4>Sit rerum fuga</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>2 hrs. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-info-circle text-primary"></i>
                  <div>
                    <h4>Dicta reprehenderit</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>4 hrs. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="dropdown-footer">
                  <Link to="#">Show all notifications</Link>
                </li>

              </ul>

            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link nav-icon" to="#" data-bs-toggle="dropdown">
                <i className="bi bi-chat-left-text"></i>
                <span className="badge bg-success badge-number">3</span>
              </Link>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                <li className="dropdown-header">
                  You have 3 new messages
                  <Link to="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="message-item">
                  <Link to="#">
                    <img src="assets/img/messages-1.jpg" alt="" className="rounded-circle" />
                    <div>
                      <h4>Maria Hudson</h4>
                      <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                      <p>4 hrs. ago</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="message-item">
                  <Link to="#">
                    <img src="assets/img/messages-2.jpg" alt="" className="rounded-circle" />
                    <div>
                      <h4>Anna Nelson</h4>
                      <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                      <p>6 hrs. ago</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="message-item">
                  <Link to="#">
                    <img src="assets/img/messages-3.jpg" alt="" className="rounded-circle" />
                    <div>
                      <h4>David Muldon</h4>
                      <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                      <p>8 hrs. ago</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="dropdown-footer">
                  <Link to="#">Show all messages</Link>
                </li>
              </ul>
            </li> */}

            <li className="nav-item dropdown pe-3">
              <>
                <Link className={isUserProfile ? 'nav-link nav-profile d-flex align-items-center pe-0 show' : 'nav-link nav-profile d-flex align-items-center pe-0'} to="#" onClick={toggleUserProfile}>
                  <FaUser className="rounded-circle" />
                  {userInfo ? (<span className="d-none d-md-block dropdown-toggle ps-2">{userInfo.name}</span>) :
                    (<span className="d-none d-md-block dropdown-toggle ps-2">Sign In</span>)}
                </Link>
              </>

              {userInfo ? (
                <ul className={isUserProfile ? 'dropdown-menu dropdown-menu-end dropdown-menu-arrow profile show' : 'dropdown-menu dropdown-menu-end dropdown-menu-arrow profile'}>
                  <li className="dropdown-header">
                    <h6>{userInfo.name}</h6>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    <Link className="dropdown-item d-flex align-items-center" to="/profile" onClick={toggleUserProfile}>
                      <FaUserLarge style={{ margin: "0 5px" }} />
                      <span> My Profile</span>
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    <Link className="dropdown-item d-flex align-items-center" to="/cart" onClick={toggleUserProfile}>
                      <FaShoppingCart style={{ margin: "0 5px" }} />
                      <span>Cart {cartItems.length > 0 && (
                        <Badge pill bg='success' style={{ marginLeft: '5px' }}>
                          {cartItems.reduce((a, c) => a + c.qty, 0)}
                        </Badge>
                      )}</span>
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    <Link className="dropdown-item d-flex align-items-center" to="/" onClick={toggleUserProfile}>
                      <FaQuestionCircle style={{ margin: "0 5px" }} />
                      <span>Need Help?</span>
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  {/* Admin Links */}
                  {userInfo && userInfo.isAdmin && (
                    <>
                      <li>
                        <h6 className="dropdown-header">Admin routes</h6>
                      </li>

                      <li>
                        <Link className="dropdown-item d-flex align-items-center" to="/admin/productlist" onClick={toggleUserProfile}>
                          <FaShoppingBasket style={{ margin: "0 5px" }} />
                          <span>Products</span>
                        </Link>
                        <Link className="dropdown-item d-flex align-items-center" to="/admin/orderlist" onClick={toggleUserProfile}>
                          <FaShippingFast style={{ margin: "0 5px" }} />
                          <span>Orders</span>
                        </Link>
                        <Link className="dropdown-item d-flex align-items-center" to="/admin/userlist" onClick={toggleUserProfile}>
                          <FaUsers style={{ margin: "0 5px" }} />
                          <span>Users</span>
                        </Link>
                      </li>
                    </>
                  )}
                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    <Link className="dropdown-item d-flex align-items-center" to="#" onClick={logoutHandler}>
                      <FaSignOutAlt style={{ margin: "0 5px" }} />
                      <span>Sign Out</span>
                    </Link>
                  </li>

                </ul>
              ) : (
                <ul className={isUserProfile ? 'dropdown-menu dropdown-menu-end dropdown-menu-arrow profile show' : 'dropdown-menu dropdown-menu-end dropdown-menu-arrow profile'}>
                  <li>
                    <Link className="dropdown-item d-flex align-items-center" to="/cart" onClick={toggleUserProfile}>
                      <FaShoppingCart style={{ margin: "0 5px" }} />
                      <span>Cart {cartItems.length > 0 && (
                        <Badge pill bg='success' style={{ marginLeft: '5px' }}>
                          {cartItems.reduce((a, c) => a + c.qty, 0)}
                        </Badge>
                      )}</span>
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    <Link className="dropdown-item d-flex align-items-center" to="/" onClick={toggleUserProfile}>
                      <FaQuestionCircle style={{ margin: "0 5px" }} />
                      <span>Need Help?</span>
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    <Link className="dropdown-item d-flex align-items-center" to="/login" onClick={toggleUserProfile}>
                      <FaSignInAlt style={{ margin: "0 5px" }} />
                      <span>Sign In</span>
                    </Link>
                  </li>

                </ul>
              )}
            </li>
          </ul>
        </nav>
      </header>

      {/* ======= Sidebar ======= */}
      <aside id="sidebar" className="sidebar">

        <ul className="sidebar-nav" id="sidebar-nav">

          <li className="nav-item">
            <Link className="nav-link " to="index.html">
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" to="#">
              <i className="bi bi-menu-button-wide"></i><span>Components</span><i className="bi bi-chevron-down ms-auto"></i>
            </Link>
            <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
                <Link to="components-alerts.html">
                  <i className="bi bi-circle"></i><span>Alerts</span>
                </Link>
              </li>
              <li>
                <Link to="components-accordion.html">
                  <i className="bi bi-circle"></i><span>Accordion</span>
                </Link>
              </li>
              <li>
                <Link to="components-badges.html">
                  <i className="bi bi-circle"></i><span>Badges</span>
                </Link>
              </li>
              <li>
                <Link to="components-breadcrumbs.html">
                  <i className="bi bi-circle"></i><span>Breadcrumbs</span>
                </Link>
              </li>
              <li>
                <Link to="components-buttons.html">
                  <i className="bi bi-circle"></i><span>Buttons</span>
                </Link>
              </li>
              <li>
                <Link to="components-cards.html">
                  <i className="bi bi-circle"></i><span>Cards</span>
                </Link>
              </li>
              <li>
                <Link to="components-carousel.html">
                  <i className="bi bi-circle"></i><span>Carousel</span>
                </Link>
              </li>
              <li>
                <Link to="components-list-group.html">
                  <i className="bi bi-circle"></i><span>List group</span>
                </Link>
              </li>
              <li>
                <Link to="components-modal.html">
                  <i className="bi bi-circle"></i><span>Modal</span>
                </Link>
              </li>
              <li>
                <Link to="components-tabs.html">
                  <i className="bi bi-circle"></i><span>Tabs</span>
                </Link>
              </li>
              <li>
                <Link to="components-pagination.html">
                  <i className="bi bi-circle"></i><span>Pagination</span>
                </Link>
              </li>
              <li>
                <Link to="components-progress.html">
                  <i className="bi bi-circle"></i><span>Progress</span>
                </Link>
              </li>
              <li>
                <Link to="components-spinners.html">
                  <i className="bi bi-circle"></i><span>Spinners</span>
                </Link>
              </li>
              <li>
                <Link to="components-tooltips.html">
                  <i className="bi bi-circle"></i><span>Tooltips</span>
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <Link className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" to="#">
              <i className="bi bi-journal-text"></i><span>Forms</span><i className="bi bi-chevron-down ms-auto"></i>
            </Link>
            <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
                <Link to="forms-elements.html">
                  <i className="bi bi-circle"></i><span>Form Elements</span>
                </Link>
              </li>
              <li>
                <Link to="forms-layouts.html">
                  <i className="bi bi-circle"></i><span>Form Layouts</span>
                </Link>
              </li>
              <li>
                <Link to="forms-editors.html">
                  <i className="bi bi-circle"></i><span>Form Editors</span>
                </Link>
              </li>
              <li>
                <Link to="forms-validation.html">
                  <i className="bi bi-circle"></i><span>Form Validation</span>
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <Link className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" to="#">
              <i className="bi bi-layout-text-window-reverse"></i><span>Tables</span><i className="bi bi-chevron-down ms-auto"></i>
            </Link>
            <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
                <Link to="tables-general.html">
                  <i className="bi bi-circle"></i><span>General Tables</span>
                </Link>
              </li>
              <li>
                <Link to="tables-data.html">
                  <i className="bi bi-circle"></i><span>Data Tables</span>
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <Link className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" to="#">
              <i className="bi bi-bar-chart"></i><span>Charts</span><i className="bi bi-chevron-down ms-auto"></i>
            </Link>
            <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
                <Link to="charts-chartjs.html">
                  <i className="bi bi-circle"></i><span>Chart.js</span>
                </Link>
              </li>
              <li>
                <Link to="charts-apexcharts.html">
                  <i className="bi bi-circle"></i><span>ApexCharts</span>
                </Link>
              </li>
              <li>
                <Link to="charts-echarts.html">
                  <i className="bi bi-circle"></i><span>ECharts</span>
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <Link className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" to="#">
              <i className="bi bi-gem"></i><span>Icons</span><i className="bi bi-chevron-down ms-auto"></i>
            </Link>
            <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
                <Link to="icons-bootstrap.html">
                  <i className="bi bi-circle"></i><span>Bootstrap Icons</span>
                </Link>
              </li>
              <li>
                <Link to="icons-remix.html">
                  <i className="bi bi-circle"></i><span>Remix Icons</span>
                </Link>
              </li>
              <li>
                <Link to="icons-boxicons.html">
                  <i className="bi bi-circle"></i><span>Boxicons</span>
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-heading">Pages</li>

          <li className="nav-item">
            <Link className="nav-link collapsed" to="users-profile.html">
              <i className="bi bi-person"></i>
              <span>Profile</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link collapsed" to="pages-faq.html">
              <i className="bi bi-question-circle"></i>
              <span>F.A.Q</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link collapsed" to="pages-contact.html">
              <i className="bi bi-envelope"></i>
              <span>Contact</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link collapsed" to="pages-register.html">
              <i className="bi bi-card-list"></i>
              <span>Register</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link collapsed" to="pages-login.html">
              <i className="bi bi-box-arrow-in-right"></i>
              <span>Login</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link collapsed" to="pages-error-404.html">
              <i className="bi bi-dash-circle"></i>
              <span>Error 404</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link collapsed" to="pages-blank.html">
              <i className="bi bi-file-earmark"></i>
              <span>Blank</span>
            </Link>
          </li>

        </ul>

      </aside>

    </div>
  );
};

export default Header;
