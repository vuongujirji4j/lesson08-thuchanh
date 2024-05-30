import React, { Component } from 'react'

export default class PvvTaskAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pvv_taskld: 0,
            pvv_taskName: '',
            pvv_level: ''
        }

    }
    pvvHandleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    //submid form
    pvvHandleSubmit = (ev) => {
        console.log("Form2", this.state);
        ev.preventDefault();
        this.props.onSummit(this.state);
    }
  render() {
    return (
        <div>
        <h2>them moi lop hoc</h2>
        <form className='col-md-6'>

            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                    pvv_taskld
                </span>
                <input
                    type="text"
                    className="form-control"

                    name='pvv_taskld'
                    value={this.state.pvv_taskld}
                    onChange={this.pvvHandleChange}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="t">
                    pvv_taskName
                </span>
                <input
                    type="text"
                    className="form-control"

                    name='pvv_taskName'
                    value={this.state.pvv_taskName}
                    onChange={this.pvvHandleChange}

                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="title">
                    pvv_level
                </span>
                <input
                    type="text"
                    className="form-control"

                    name='pvv_level'
                    value={this.state.pvv_level}
                    onChange={this.pvvHandleChange}

                />
            </div>
            <button className='btn btn-success' onClick={this.pvvHandleSubmit}>ghi lai</button>

        </form>
    </div>
    )
  }
}
