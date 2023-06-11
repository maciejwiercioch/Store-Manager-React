import React, { Component } from 'react';
import PackageData from './PackageData';


class PackageDataList extends Component {
    render() {
        console.log(this.props.packageData);
        const packageDataList = this.props.packageData.map(data =>
            <PackageData key={data._links.self.href} packagedata={data} />
        );
        return (
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Widht</th>
                        <th>Height</th>
                        <th>Description</th>
                    </tr>
                    {packageDataList}
                </tbody>
            </table >
        )
    }
}

export default PackageDataList;