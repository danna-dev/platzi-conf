import React from 'react';

class BadgeForm extends React.Component {

    render() {
        return (
            <div>
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.props.onChange}
                            className="form-control" type="text" name="firstName" value={this.props.formValues.firstName} />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input onChange={this.props.onChange}
                            className="form-control" type="text" name="lastName" value={this.props.formValues.lastName} />
                    </div>
                    <div className="form-group">
                        <label>e-mail</label>
                        <input onChange={this.props.onChange}
                            className="form-control" type="email" name="email" value={this.props.formValues.email} />
                    </div>
                    <div className="form-group">
                        <label>Job Title</label>
                        <input onChange={this.props.onChange}
                            className="form-control" type="text" name="jobTitle" value={this.props.formValues.jobTitle} />
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">save</button>
                </form>
            </div>
        );
    }
}

export default BadgeForm;