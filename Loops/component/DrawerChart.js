import React, { Component } from 'react';
import { BarChart, Bar, XAxis,YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';


class DrawerChart extends Component {
    render() {

        const data = this.props.dataSource;
        console.log('throw data for chart: this.props.dataSource', data)
        console.log(this.props.dataSource.description)



        return (
            <div>
                <h5>Rechart is here</h5>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis dataKey="value"/>
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value"/>
                </BarChart>
            </div>
        )
    }
}
export default DrawerChart;

