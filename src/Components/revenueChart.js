import React, {useEffect, useState} from "react";
import Chart from "react-apexcharts";

function RevenueChart(props) {
    const [chartOptions, setChartOptions] = useState();
    const [chartSeries, setChartSeries] = useState();

    useEffect(() => {
        if(props.data){
           let data = []
           let direct = {
            name: 'Direct',
            data: props.data.revenue.map((e) => {
            return e.direct;
           })};
           let indirect = {
            name: 'Indirect',
            data: props.data.revenue.map((e) => {
            return e.indirect;
           })};
        data.push(direct);
        data.push(indirect);
        setChartSeries(data);
        setChartOptions({
            chart: {
                type: 'bar',
                height: 300,
                width: '100%',
                toolbar: {
                  show: false
              },
              zoom: {
                  enabled: false
              },
              selection: {
                  enabled: false
              },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 1,
                colors: ['#fff']
              },
            plotOptions: {
                bar: {
                  horizontal: false
                }
            },
            colors: ['#38BDF8', '#6366F1'],
            xaxis: {
                categories: props.data.revenue.map((e) => {
                    return `${e.month.substring(0,3)} 22`
                })
            },
            legend: {
                show: false
              }
        })
    }
    },[props.data])

    const renderChart = () => {
        return chartOptions && chartSeries ?  
        <Chart
        series={chartSeries}
        options={chartOptions}
        type="bar"
        height={300}
      />: null   
    }

    return (
       <div className="revenue-chart">
        <p style={{fontSize: 16, fontWeight: 500}}>Direct vs Indirect</p>
        <div className="custom-legend">
            {Object.keys(props.data.totalRevenue).map((e, i) => {
                let color = e === 'direct' ? '#38BDF8' : '#6366F1';
                return (
                    <div key={i} style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginRight: 15}}>
                       <span style={{width: 8, height: 8, border: `2px solid ${color}`, borderRadius: 12, background: 'white'}}/>
                       <p style={{fontSize: 30, fontWeight: 500, marginLeft: 8}}>{props.data.totalRevenue[e]}</p>
                       <p style={{fontSize: 14, fontWeight: 400, marginLeft: 8, color:'#64748B'}}>{e.toUpperCase()}</p>
                    </div>
                ) 
            })}
        </div>
        {renderChart()}
       </div>
    )
}

export default React.memo(RevenueChart)