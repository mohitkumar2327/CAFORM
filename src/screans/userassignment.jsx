import React, { useState, useEffect } from 'react';

const MultiSelectDropdown = ({ options, selectedValues, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleOption = (option) => {
    const isSelected = selectedValues.some(selected => selected.id === option.id);
    if (isSelected) {
      onChange(selectedValues.filter(selected => selected.id !== option.id));
    } else {
      onChange([...selectedValues, option]);
    }
  };

  const handleRemoveSelected = (optionToRemove) => {
    onChange(selectedValues.filter(selected => selected.id !== optionToRemove.id));
  };
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.relative.dropdown-container')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative dropdown-container">
      <div 
        className="min-h-[44px] p-3 border border-gray-300 rounded-lg bg-white cursor-pointer flex flex-wrap gap-2 items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedValues.length === 0 ? (
          <span className="text-gray-400">{placeholder}</span>
        ) : (
          selectedValues.map(user => (
            <span 
              key={user.id} 
              className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm flex items-center gap-1 font-medium"
            >
              {user.name}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveSelected(user);
                }}
                className="hover:bg-blue-200 rounded-full w-4 h-4 flex items-center justify-center text-blue-700"
              >
                ×
              </button>
            </span>
          ))
        )}
        <svg 
          className={`w-4 h-4 ml-auto transition-transform duration-200 text-gray-400 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-xl max-h-60 overflow-y-auto">
          {options.map(option => {
            const isSelected = selectedValues.some(selected => selected.id === option.id);
            return (
              <div
                key={option.id}
                className="p-3 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                onClick={() => handleToggleOption(option)}
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  readOnly
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className={isSelected ? 'text-blue-600 font-semibold' : 'text-gray-700'}>
                  {option.name}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const AddNewEntityModal = ({ onClose, onAddEntity }) => {
  const [entityName, setEntityName] = useState('');
  const [error, setError] = useState('');

  const handleSave = () => {
    if (!entityName.trim()) {
      setError('Entity name is required');
      return;
    }

    const newEntity = {
      id: Date.now(),
      name: entityName.trim(),
      assignedUsers: []
    };

    onAddEntity(newEntity);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full sm:w-96 max-w-90vw shadow-2xl overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Add New Entity</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          <div className="mb-4">
            <label htmlFor="entity-name" className="block text-sm font-medium text-gray-700 mb-2">
              Entity Name
            </label>
            <input
              id="entity-name"
              type="text"
              value={entityName}
              onChange={(e) => {
                setEntityName(e.target.value);
                if (error) setError('');
              }}
              className={`w-full p-3 border rounded-lg ${error ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
              placeholder="Enter entity name"
            />
            {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
          </div>
        </div>

        <div className="flex justify-end gap-3 p-6 border-t border-gray-200 bg-gray-50">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

const UserAssignmentPage = () => {
  const [entities, setEntities] = useState([
    {
      id: 1,
      name: 'Sample Company Ltd.',
      assignedUsers: [
        { id: 1, name: 'User 01' },
        { id: 2, name: 'User 02' }
      ]
    },
    {
      id: 2,
      name: 'Example Company Ltd.',
      assignedUsers: [
        { id: 1, name: 'User 01' },
        { id: 3, name: 'User 03' },
        { id: 4, name: 'User 04' }
      ]
    }
  ]);

  const [showAddEntityModal, setShowAddEntityModal] = useState(false);

  const availableUsers = [
    { id: 1, name: 'User 01' },
    { id: 2, name: 'User 02' },
    { id: 3, name: 'User 03' },
    { id: 4, name: 'User 04' },
    { id: 5, name: 'User 05' },
    { id: 6, name: 'User 06' }
  ];

  const handleUpdateEntityUsers = (entityId, newUsers) => {
    setEntities(prev => prev.map(entity => 
      entity.id === entityId 
        ? { ...entity, assignedUsers: newUsers }
        : entity
    ));
  };

  const handleDeleteEntity = (entityId) => {
    setEntities(prev => prev.filter(entity => entity.id !== entityId));
  };

  const handleAddEntity = (newEntity) => {
    setEntities(prev => [...prev, newEntity]);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 sm:mb-0">User Assignment</h1>
          <button
            onClick={() => setShowAddEntityModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 font-medium shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add New Entity
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-x-auto">
          <table className="w-full text-sm sm:text-base">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">#</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700 min-w-[200px]">Entity</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700 min-w-[300px]">Assigned User</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700 min-w-[100px]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {entities.map((entity, index) => (
                <tr key={entity.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 text-gray-600">{index + 1}</td>
                  <td className="py-4 px-6 text-gray-800 font-medium">{entity.name}</td>
                  <td className="py-4 px-6">
                    <div className="w-full">
                      <MultiSelectDropdown
                        options={availableUsers}
                        selectedValues={entity.assignedUsers}
                        onChange={(newUsers) => handleUpdateEntityUsers(entity.id, newUsers)}
                        placeholder="Select users to assign"
                      />
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                      </button>
                      <button 
                        onClick={() => handleDeleteEntity(entity.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {entities.length === 0 && (
                <tr>
                  <td colSpan="4" className="py-12 text-center text-gray-500">
                    No entities found. Click "Add New Entity" to add your first one.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {showAddEntityModal && (
          <AddNewEntityModal 
            onClose={() => setShowAddEntityModal(false)}
            onAddEntity={handleAddEntity}
          />
        )} 
      </div>
    </div>
  );
};

const App = () => {
  return <UserAssignmentPage />;
};

export default App;
