import React, { useState } from 'react';
import { Edit, Trash2, X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import '../css/clientNewUserLogin.css';
import Headquerie from '../components/headerqueries.jsx';

const ClientNewUserLogin = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: 'User',
      lastName: '2',
      email: 'user2@gra.co.nz',
      role: 'Manager',
      status: 'Active',
    },
    {
      id: 2,
      firstName: 'User',
      lastName: '3',
      email: 'user3@gra.co.nz',
      role: 'Accountant',
      status: 'Active',
    }
  ]);
  const [showModal, setShowModal] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    setUsers([...users, { ...data, id: Date.now() }]);
    reset();
    setShowModal(false);
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="add-user-wrapper">
      <Headquerie/>
      {/* <div className="header">
        <h3>Client Portal &gt; <span className="active-page">Add New User</span></h3>
        <div className="user-meta">
          <span><strong>User Name:</strong> John</span>
          <span><strong>Master Entity name:</strong> X X X X</span>
        </div>
      </div> */}

      <div className="table-card">
        <div className="table-header">
          <h4>Current Users</h4>
          <button className="add-btn" onClick={() => setShowModal(true)}>+ Add New User</button>
        </div>

        <table className="user-table">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, index) => (
              <tr key={u.id}>
                <td>{index + 1}</td>
                <td>{u.firstName}</td>
                <td>{u.lastName}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
                <td><span className="status-dot" /> {u.status}</td>
                <td>
                  <Edit size={16} className="icon" />
                  <Trash2 size={16} className="icon delete" onClick={() => deleteUser(u.id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h4>Add New User</h4>
              <X size={20} className="close-icon" onClick={() => setShowModal(false)} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="modal-form">
              <input {...register("firstName")} placeholder="First Name" required />
              <input {...register("lastName")} placeholder="Last Name" required />
              <input {...register("email")} placeholder="Email" type="email" required />
              <select {...register("role")} required>
                <option value="">Select Role</option>
                <option value="Manager">Manager</option>
                <option value="Accountant">Accountant</option>
              </select>
              <select {...register("status")} required>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
              <div className="modal-buttons">
                <button type="button" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="submit" className="save-btn">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientNewUserLogin;
