import React, { Component } from 'react';

class ComplaintRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeName: '',
      complaintText: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const referenceNumber = Math.floor(1000 + Math.random() * 9000);
    const message = `Thanks ${this.state.employeeName}\nYour complaint was submitted.\nReference ID is: ${referenceNumber}`;

    alert(message);
    this.setState({ employeeName: '', complaintText: '' });
  }

  render() {
    return (
      <div>
        <h1 style={{ color: '#c00', textAlign: 'center' }}>Register your complaints here!!!</h1>
        <form onSubmit={this.handleSubmit} style={{ marginTop: '30px' }}>
          <div style={{ marginBottom: '18px' }}>
            <label htmlFor="employeeName" style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>
              Name:
            </label>
            <input
              type="text"
              id="employeeName"
              name="employeeName"
              value={this.state.employeeName}
              onChange={this.handleChange}
              style={{ width: '100%', padding: '10px', fontSize: '16px' }}
              placeholder="Enter employee name"
              required
            />
          </div>
          <div style={{ marginBottom: '22px' }}>
            <label htmlFor="complaintText" style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>
              Complaint:
            </label>
            <textarea
              id="complaintText"
              name="complaintText"
              value={this.state.complaintText}
              onChange={this.handleChange}
              rows="5"
              style={{ width: '100%', padding: '10px', fontSize: '16px' }}
              placeholder="Describe your issue"
              required
            />
          </div>
          <button
            type="submit"
            style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ComplaintRegister;
