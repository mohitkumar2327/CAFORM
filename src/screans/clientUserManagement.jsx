import React, { useState } from 'react';
import '../css/clientUserManagement.css';
import { Edit, Trash2, X, ChevronDown } from 'lucide-react';
import Headquerie from '../components/headerqueries.jsx';

const UserAssignment = () => {
  const [entities, setEntities] = useState([
    { id: 1, name: 'Sample Company Ltd.', assignedUsers: [] },
    { id: 2, name: 'Example Company Ltd.', assignedUsers: [] }
  ]);

  const [availableUsers] = useState(['User 01', 'User 02', 'User 03', 'User 04', 'User 05', 'User 06']);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedUsers, setSelectedUsers] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [newEntityName, setNewEntityName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newEntityName.trim()) {
      setEntities([...entities, { name: newEntityName.trim(), id: Date.now(), assignedUsers: [] }]);
      setNewEntityName('');
      setShowModal(false);
    }
  };

  const deleteEntity = (id) => setEntities(entities.filter(entity => entity.id !== id));

  const toggleDropdown = (entityId) => {
    if (openDropdown === entityId) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(entityId);
      const entity = entities.find(e => e.id === entityId);
      setSelectedUsers({
        ...selectedUsers,
        [entityId]: entity.assignedUsers || []
      });
    }
  };

  const toggleUserSelection = (entityId, user) => {
    const currentSelected = selectedUsers[entityId] || [];
    const newSelected = currentSelected.includes(user)
      ? currentSelected.filter(u => u !== user)
      : [...currentSelected, user];
    setSelectedUsers({ ...selectedUsers, [entityId]: newSelected });
  };

  const saveUserAssignment = (entityId) => {
    setEntities(entities.map(entity =>
      entity.id === entityId
        ? { ...entity, assignedUsers: selectedUsers[entityId] || [] }
        : entity
    ));
    setOpenDropdown(null);
  };

  const cancelUserAssignment = () => {
    setOpenDropdown(null);
    setSelectedUsers({});
  };

  return (
    <>
      <Headquerie />
      <div className="user-assignment-container">
        <div className="card">
          <div className="card-header">
            <h2>User Assignment</h2>
            <button className="add-user-btn" onClick={() => setShowModal(true)}>+ Add New User</button>
        </div>

        <div className="table-container">
          <table className="assignment-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Entity</th>
                <th>Assigned User</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {entities.map((entity, index) => (
                <tr key={entity.id}>
                  <td>{index + 1}</td>
                  <td>{entity.name}</td>
                  <td className="dropdown-cell">
                    <div className="dropdown-trigger" onClick={() => toggleDropdown(entity.id)}>
                      <span>{entity.assignedUsers.length > 0 ? entity.assignedUsers.join(', ') : 'Select user'}</span>
                      <ChevronDown size={16} className={`chevron ${openDropdown === entity.id ? 'rotate' : ''}`} />
                    </div>

                    {openDropdown === entity.id && (
                      <div className="dropdown-menu">
                        {availableUsers.map(user => (
                          <div
                            key={user}
                            className={`dropdown-item ${selectedUsers[entity.id]?.includes(user) ? 'selected' : ''}`}
                            onClick={() => toggleUserSelection(entity.id, user)}
                          >
                            <input
                              type="checkbox"
                              checked={selectedUsers[entity.id]?.includes(user) || false}
                              readOnly
                            />
                            <span>{user}</span>
                          </div>
                        ))}
                        <div className="dropdown-footer">
                          <button className="cancel-btn" onClick={cancelUserAssignment}>Cancel</button>
                          <button className="apply-btn" onClick={() => saveUserAssignment(entity.id)}>Apply</button>
                        </div>
                      </div>
                    )}
                  </td>
                  <td>
                    <div className="actions">
                      <Edit size={16} className="edit-icon" />
                      <Trash2 size={16} className="delete-icon" onClick={() => deleteEntity(entity.id)} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h4>Add New Entity</h4>
              <X size={20} className="close-icon" onClick={() => setShowModal(false)} />
            </div>
            <div className="modal-body">
              <input
                type="text"
                value={newEntityName}
                onChange={(e) => setNewEntityName(e.target.value)}
                placeholder="Entity Name"
              />
              <div className="modal-actions">
                <button className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
                <button className="apply-btn" onClick={handleSubmit}>Save</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};


export default UserAssignment;
