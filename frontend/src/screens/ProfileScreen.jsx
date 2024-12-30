import React, { useEffect, useState } from 'react';
import { Table, Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { FaTimes } from 'react-icons/fa';
import { FaYoutube, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa6';


import { toast } from 'react-toastify';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { useProfileMutation } from '../slices/usersApiSlice';
import { useGetMyOrdersQuery } from '../slices/ordersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { Link } from 'react-router-dom';

const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { userInfo } = useSelector((state) => state.auth);

  const { data: orders, isLoading, error } = useGetMyOrdersQuery();

  const [updateProfile, { isLoading: loadingUpdateProfile }] =
    useProfileMutation();

  useEffect(() => {
    setName(userInfo.name);
    setEmail(userInfo.email);
  }, [userInfo.email, userInfo.name]);

  const dispatch = useDispatch();
  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
    } else {
      try {
        const res = await updateProfile({
          // NOTE: here we don't need the _id in the request payload as this is
          // not used in our controller.
          // _id: userInfo._id,
          name,
          email,
          password,
        }).unwrap();
        dispatch(setCredentials({ ...res }));
        toast.success('Profile updated successfully');
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <>
      {/* <h2 className='py-2'>User Profile</h2> */}
      <h2 className="card-title my-4">User Profile</h2>
      <Row>
        <Col md={4}>

          <div className="card">
            <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">

              <img src="images/profile-img.jpg" alt="Profile" className="rounded-circle" style={{ margin: '0px 0 15px 0' }} />
              <h2>{name}</h2>
              <div className="social-links mt-2">
                <Link to="#" className="twitter"><FaWhatsapp /></Link>
                <Link to="#" className="facebook"><FaFacebook /></Link>
                <Link to="#" className="instagram"><FaInstagram /></Link>
                <Link to="#" className="linkedin"><FaYoutube /></Link>
              </div>
            </div>
          </div>

        </Col>
        <Col md={8}>

          <div className="card">
            <div className="card-body pt-3">

              <ul className="nav nav-tabs nav-tabs-bordered">

                <li className="nav-item">
                  <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
                </li>

                <li className="nav-item">
                  <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Edit Profile</button>
                </li>

              </ul>
              <div className="tab-content pt-2">

                <div className="tab-pane fade show active profile-overview" id="profile-overview">
                  <h5 className="card-title">Profile Details</h5>

                  <div className="row">
                    <div className="col-lg-3 col-md-4 label ">Full Name</div>
                    <div className="col-lg-9 col-md-8">{name}</div>
                  </div>

                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Email</div>
                    <div className="col-lg-9 col-md-8">{email}</div>
                  </div>

                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Mobile No</div>
                    <div className="col-lg-9 col-md-8">+91 xxxxxxxxxx</div>
                  </div>

                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Country</div>
                    <div className="col-lg-9 col-md-8">India</div>
                  </div>
                </div>

                <div className="tab-pane fade profile-edit pt-3" id="profile-edit">


                  <Form onSubmit={submitHandler}>
                    <Form.Group className='my-2' controlId='name'>
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Enter name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      ></Form.Control>
                    </Form.Group>

                    <Form.Group className='my-2' controlId='email'>
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type='email'
                        placeholder='Enter email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      ></Form.Control>
                    </Form.Group>

                    <Form.Group className='my-2' controlId='password'>
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type='password'
                        placeholder='Enter password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      ></Form.Control>
                    </Form.Group>

                    <Form.Group className='my-2' controlId='confirmPassword'>
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type='password'
                        placeholder='Confirm password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      ></Form.Control>
                    </Form.Group>

                    <Button type='submit' variant='primary'>
                      Update
                    </Button>
                    {loadingUpdateProfile && <Loader />}
                  </Form>

                </div>

              </div>

            </div>
          </div>
        </Col>
      </Row>
      <Row className='my-2'>
        <h4 class="card-title my-4">My Orders</h4>
        <Col md={12}>
          <div class="card top-selling overflow-auto">
            <div class="card-body pb-0">
              {isLoading ? (
                <Loader />
              ) : error ? (
                <Message variant='danger'>
                  {error?.data?.message || error.error}
                </Message>
              ) : (
                <Table striped hover responsive className='table-sm'>
                  <thead>
                    <tr>
                      <th>Preview</th>
                      <th>ID</th>
                      <th>DATE</th>
                      <th>TOTAL</th>
                      <th>PAID</th>
                      <th>DELIVERED</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order._id} style={{ verticalAlign: 'middle' }}>
                        <td>{<img src={order.orderItems[0].image} alt={order.orderItems[0].name} width='60px' style={{ borderRadius: '5px' }} />}</td>
                        <td>{order._id}</td>
                        <td>{order.createdAt.substring(0, 10)}</td>
                        <td>{order.totalPrice}</td>
                        <td>
                          {order.isPaid ? (
                            order.paidAt.substring(0, 10)
                          ) : (
                            <FaTimes style={{ color: 'red' }} />
                          )}
                        </td>
                        <td>
                          {order.isDelivered ? (
                            order.deliveredAt.substring(0, 10)
                          ) : (
                            <FaTimes style={{ color: 'red' }} />
                          )}
                        </td>
                        <td>
                          <Button
                            as={Link}
                            to={`/order/${order._id}`}
                            className='btn-sm'
                            variant='light'
                          >
                            Details
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
};

export default ProfileScreen;
