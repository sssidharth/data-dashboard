import React, {useEffect, useState} from "react";
import Chart from "react-apexcharts";

function OrderValue(props) {

    const [chartOptions, setChartOptions] = useState();
    const [chartSeries, setChartSeries] = useState();

    useEffect(() => {
    if(props.data) {
      let data = []
      let current = {
        name: 'Current',
        data: props.data.values
      }
      data.push(current);
      setChartSeries(data);
    }
    setChartOptions(
        {
            chart: {
              height: '300',
              width: '100%',
              type: 'area',
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
            legend: {
              show: false,
            },
            stroke: {
              curve: 'straight',
              width: 1,
              colors: ['#6366F1']
            },
            fill: {
                colors: ['#6366F1']
            },
            colors: ['#6366F1'],
            xaxis: {
              labels: {
                show: false
              }
            }
          }
        )
    },[props.data])

    const renderChart = () => {
        return chartOptions && chartSeries ?  
        <Chart
        series={chartSeries}
        options={chartOptions}
        type="area"
        height={300}
      />: null   
    }

    return (
      <div className="revenue-chart">
        <p style={{fontSize: 16, fontWeight: 500}}>Avg Order Value</p>
        <div className="custom-order-legend">
            <p style={{fontSize: 30, fontWeight: 500, marginLeft: 8}}>{props.data.total}</p>        
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginRight: 15}}>
                <span style={{width: 8, height: 8, border: `2px solid #6366F1`, borderRadius: 12, background: 'white'}}/>
                <p style={{fontSize: 14, fontWeight: 400, marginLeft: 8, color:'#64748B'}}>Current</p>
            </div>
        </div>
        {renderChart()}
      </div>
    )
  
}

export default React.memo(OrderValue)