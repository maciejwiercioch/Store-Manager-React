import React, { Component } from 'react';


class PackageData extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.packagedata.name}</td>
                <td>{this.props.packagedata.width}</td>
                <td>{this.props.packagedata.height}</td>
                <td>{this.props.packagedata.description}</td>
            </tr>
        )
    }
}

export default PackageData;