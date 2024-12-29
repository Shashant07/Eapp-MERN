import { Badge } from 'react-bootstrap';
import { FaSignOutAlt, FaSignInAlt, FaQuestionCircle, FaShoppingCart, FaRegWindowClose, FaShoppingBasket, FaShippingFast, FaHome } from 'react-icons/fa';
import { FaRecycle, FaUser, FaBars, FaUserLarge, FaUsers, FaPeopleGroup, FaRegPenToSquare, FaRegAddressCard, FaQuestion } from 'react-icons/fa6';
import { MdSecurity, MdDashboardCustomize, MdOutlineArrowDropDownCircle } from "react-icons/md";
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
            <Link className="nav-link " to="/" onClick={toggleSidebar}>
              <FaHome />
              <span className='px-2'>Home</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link collapsed" to="/about" onClick={toggleSidebar}>
              <FaPeopleGroup />
              <span className='px-2'>About Us</span>
            </Link>
          </li>

          {userInfo ? (
            <li className="nav-item">
              <Link className="nav-link collapsed" to="#" onClick={logoutHandler}>
                <FaSignOutAlt />
                <span className='px-2'>Sign Out</span>
              </Link>
            </li>
          ) :
            (<>
              <li className="nav-item">
                <Link className="nav-link collapsed" to="/register?redirect=/" onClick={toggleSidebar}>
                  <FaRegPenToSquare />
                  <span className='px-2'>Register</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link collapsed" to="/login" onClick={toggleSidebar}>
                  <FaSignInAlt />
                  <span className='px-2'>Sign In</span>
                </Link>
              </li>
            </>
            )}

          <li className="nav-item">
            <Link className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" to="#">
              <MdDashboardCustomize /><span className='px-2'>More</span><MdOutlineArrowDropDownCircle className="ms-auto" />
            </Link>
            <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
                <Link to="/" onClick={toggleSidebar}>
                  <i className="bi bi-circle"></i><span>Link1</span>
                </Link>
              </li>
              <li>
                <Link to="/" onClick={toggleSidebar}>
                  <i className="bi bi-circle"></i><span>Link2</span>
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-heading">Pages</li>

          <li className="nav-item">
            <Link className="nav-link collapsed" to="/contact" onClick={toggleSidebar}>
              <FaRegAddressCard />
              <span className='px-2'>Contact</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link collapsed" to="/faq" onClick={toggleSidebar}>
              <FaQuestion />
              <span className='px-2'>F.A.Q</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link collapsed" to="/termsandcondition" onClick={toggleSidebar}>
              <FaRecycle />
              <span className='px-2'>Terms and Condition</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link collapsed" to="/privacypolicy" onClick={toggleSidebar}>
              <MdSecurity />
              <span className='px-2'>Privacy Policy</span>
            </Link>
          </li>

          {/* 

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
          </li> */}

        </ul>

      </aside>

    </div>
  );
};

export default Header;
