import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const StudentForm = ({ initialData, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    major: '',
    gpa: '',
    status: 'Active',
    attendance: 100,
    risk: 'Low'
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'gpa' || name === 'attendance' ? parseFloat(value) || '' : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!formData.name || !formData.email) {
      alert("Name and Email are required.");
      return;
    }
    onSubmit(formData);
  };

  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">{initialData ? 'Update Student Record' : 'Add New Student'}</div>
          <button type="button" className="close-btn" onClick={onCancel}><X size={24} /></button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
            <div>
              <label>Full Name *</label>
              <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} placeholder="e.g. Jane Doe" required />
            </div>
            <div>
              <label>Email Address *</label>
              <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} placeholder="student@university.edu" required />
            </div>
          </div>

          <div className="form-group">
            <label>Major / Course</label>
            <input type="text" className="form-control" name="major" value={formData.major} onChange={handleChange} placeholder="e.g. Computer Science" />
          </div>

          <div className="form-group" style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem'}}>
            <div>
              <label>Current GPA</label>
              <input type="number" step="0.01" min="0" max="4" className="form-control" name="gpa" value={formData.gpa} onChange={handleChange} />
            </div>
            <div>
              <label>Attendance (%)</label>
              <input type="number" min="0" max="100" className="form-control" name="attendance" value={formData.attendance} onChange={handleChange} />
            </div>
            <div>
              <label>Enrollment Status</label>
              <select className="form-control" name="status" value={formData.status} onChange={handleChange}>
                <option value="Active">Active</option>
                <option value="Probation">Probation</option>
                <option value="Graduated">Graduated</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Risk Level Assessment</label>
            <select className="form-control" name="risk" value={formData.risk} onChange={handleChange}>
              <option value="Low">Low Risk</option>
              <option value="Medium">Medium Risk</option>
              <option value="High">High Risk</option>
            </select>
            <div style={{fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px'}}>
              Manual override. Consider GPA and attendance when assessing risk.
            </div>
          </div>
          
          <div style={{display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '2rem'}}>
            <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</button>
            <button type="submit" className="btn btn-primary">{initialData ? 'Save Changes' : 'Add Student'}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;
