import React  from 'react';
import {Chart} from "react-google-charts";
import PropTypes from "prop-types";

const LineChart = ({data}) => {
    let dataPoints = data.map((item,index) => ([item.objectID, item.points]));
    dataPoints.splice(0, 0, ["x", "votes"]);
    return <Chart
        height={'500px'}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={dataPoints}
        options={{
            hAxis: {
                title: 'ID',
            },
            vAxis: {
                title: 'Votes',
            },
        }}
        rootProps={{ 'data-testid': '1' }}
    />
};

LineChart.propTypes = {
    data:PropTypes.array.isRequired
};


export default LineChart;


