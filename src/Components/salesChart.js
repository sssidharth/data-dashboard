import React, {useEffect, useState} from "react";
import Chart from "react-apexcharts";
import RetailLogo from '../assets/LogoRetail.png';
import CustomerLogo from '../assets/LogoCustomer.png';
import AccountLogo from '../assets/LogoAccount.png';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Saleschart(props) {

    const [chartOptions, setChartOptions] = useState();
    const [chartSeries, setChartSeries] = useState();
    const [change, setChange] = useState(0)

    useEffect(() => {
    if(props.data) {
      let data = []
      let current = {
        name: 'Current Week',
        data: props.data.currentWeek
      }
      let last = {
        name: 'Last Week',
        data: props.data.lastWeek
      }
      data.push(current);
      data.push(last);
      setChartSeries(data);
    let lastWeekTotal = 0
    for(let i = 0; i<props.data.lastWeek.length; i++) {
        lastWeekTotal+=props.data.lastWeek[i]
    }
    let change = ((lastWeekTotal-props.data.currentWeekTotal)/lastWeekTotal)*100
    setChange(change.toFixed(2))
    }
    setChartOptions(
        {
            chart: {
              height: '100',
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
            grid: {
              show: false
            },
            legend: {
              show: false,
            },
            stroke: {
              curve: 'straight',
              width: 1,
              colors: ['#6366F1', '#38BDF8']
            },
            fill: {
                colors: ['#6366F1', '#38BDF8']
            },
            xaxis: {
              labels: {
                show: false
              }
            },
            yaxis: {
                labels: {
                  show: false
                }
              },
            colors: ['#6366F1', '#38BDF8']
          }
        )
    },[props.data])

    const renderChart = () => {
        return chartOptions && chartSeries ?  
        <Chart
        series={chartSeries}
        options={chartOptions}
        type="area"
        height={90}
      />: null   
    }

    return (
      <div className="sales-card">
        <div style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
         <img style={{width: 25}} src={props.type === 'retailers' ? RetailLogo : props.type === 'customers' ? CustomerLogo: AccountLogo} 
         alt={props.type}/>
        <MoreHorizIcon style={{color: '#94A3B8'}}/>
        </div>
        <p style={{fontSize: 20, fontWeight: 500, marginTop: 8}}>{props.type === 'retailers' ? 'Retail' : props.type === 'customers' ? 'Customers' : 'Key Accounts'}</p>
        <p style={{fontSize: 12, fontWeight: 600, marginTop: 8, color:'#94A3B8'}}>SALES</p>
        <div style={{display: 'flex', flexDirection: 'row', marginBottom: 20, alignItems:'center'}}>
        <p style={{fontSize: 30, fontWeight: 500, marginTop: 8, marginRight: 26}}>{props.data.currentWeekTotal}</p>
        <p style={{fontSize: 12, color: 'white',background: change>0 ? '#10B981' : '#F59E0B', padding: 5, borderRadius: 11, height: 'fit-content', marginTop: 6}}>
          {`${change> 0 ?'+':''}${change}%`}
        </p>
        </div>
        {renderChart()}
      </div>
    )
  
}

export default React.memo(Saleschart)