import React, { Component } from 'react';

export default class PvvListTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editingIndex: null,
      newTask: {
        pvv_taskId: '',
        pvv_taskName: '',
        pvv_level: '',
      },
    };
  }

  handleEdit = (index) => {
    this.setState({ editingIndex: index, newTask: { ...this.props.renderProducts[index] } });
  }

  handleSave = () => {
    let { renderProducts } = this.props;
    let { editingIndex, newTask } = this.state;

    // Validate the new task data
    if (!newTask.pvv_taskId || !newTask.pvv_taskName || !newTask.pvv_level) {
      alert('Please fill in all the fields.');
      return;
    }

    // Update the existing task
    renderProducts[editingIndex] = { ...newTask };
    this.setState({ editingIndex: null, newTask: { pvv_taskId: '', pvv_taskName: '', pvv_level: '' } });
    this.props.onUpdate(renderProducts);
  }

  handleCancel = () => {
    this.setState({ editingIndex: null, newTask: { pvv_taskId: '', pvv_taskName: '', pvv_level: '' } });
  }

  handleDelete = (index) => {
    let { renderProducts } = this.props;
    renderProducts.splice(index, 1);
    this.props.onUpdate(renderProducts);
  }

  handleInputChange = (e) => {
    this.setState({ newTask: { ...this.state.newTask, [e.target.name]: e.target.value } });
  }

  render() {
    let { renderProducts } = this.props;
    let { editingIndex, newTask } = this.state;

    let elementProduct = renderProducts.map((item, index) => {
      if (index === editingIndex) {
        return (
          <tr key={index}>
            <td><input type="text" name="pvv_taskId" value={newTask.pvv_taskId} onChange={this.handleInputChange} /></td>
            <td><input type="text" name="pvv_taskName" value={newTask.pvv_taskName} onChange={this.handleInputChange} /></td>
            <td><input type="text" name="pvv_level" value={newTask.pvv_level} onChange={this.handleInputChange} /></td>
            <td>
              <button onClick={this.handleSave}>Save</button>
              <button onClick={this.handleCancel}>Cancel</button>
            </td>
          </tr>
        );
      } else {
        return (
          <tr key={index}>
            <td>{item.pvv_taskId}</td>
            <td>{item.pvv_taskName}</td>
            <td>{item.pvv_level}</td>
            <td>
              <button onClick={() => this.handleEdit(index)}>Edit</button>
              <button onClick={() => this.handleDelete(index)}>Delete</button>
            </td>
          </tr>
        );
      }
    });

    return (
      <div>
        <h2>Danh sách lớp học</h2>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>pvv_taskId</th>
              <th>pvv_taskName</th>
              <th>pvv_level</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {elementProduct}
          </tbody>
        </table>
      </div>
    );
  }
}