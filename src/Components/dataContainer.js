import React, {useState, forwardRef, useEffect} from "react";
import BannerImage from '../assets/Shapes.png';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FilterListIcon from '@mui/icons-material/FilterList';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Saleschart from "./salesChart";
import RevenueChart from './revenueChart';
import OrderValue from "./orderValueChart";

function Container(props) {
    const [startDate, setStartDate] = useState(new Date());
    const [sales, setSales] = useState();
    const [revenue, setRevenue] = useState();
    const [order, setOrder] = useState();

    const randomColor = () => {
        return '#'+Math.floor(Math.random()*16777215).toString(16);
    }

    useEffect(() => {
        const salesData = fetch('https://assignment-1-fc7lwmf3uq-el.a.run.app/sales');
        const revenueData = fetch('https://assignment-1-fc7lwmf3uq-el.a.run.app/revenue');
        const orderData = fetch('https://assignment-1-fc7lwmf3uq-el.a.run.app/order-value');
        Promise.all([salesData, revenueData, orderData])
        .then(async ([res1, res2, res3]) => {
            const r1 = await res1.json();
            const r2 = await res2.json();
            const r3 = await res3.json();
        return [r1,r2,r3];
        })
        .then((data) => {
            setSales(data[0].data);
            setRevenue(data[1].data);
            console.log(data[2].data)
            setOrder(data[2].data);
        })
        .catch(error => console.log(error));
    },[])

    const CutomDateInput = forwardRef(({ value, onClick }, ref) => (
       <div className="date-picker" onClick={onClick} ref={ref}>
         <CalendarTodayIcon style={{fontSize: 14, marginRight: 12}}/>
        <p style={{fontSize: 12}}>{value}</p>
       </div>
      ));

   return (
     <div className="container">
       <div className="banner">
        <div className="banner-text">
            <p style={{fontSize:30, fontWeight: 500}}>Good Afternoon, {props.selectedUser? props.selectedUser.name : ''}</p>
            <p style={{fontSize:16, marginTop: 5}}>Here is what's happening today</p>
        </div>
       <img src={BannerImage} style={{marginRight: 65}} alt="BannerImage"/>
       </div>
       <div className="users-date">
       <AvatarGroup max={4}>
        {props.users.map((e,i)=>{
            return (
                <Avatar key={i} style={{background: randomColor()}}>{e.name.substring(0,1)}</Avatar>
            )
        })}
       </AvatarGroup>
       <div style={{display:'flex', alignItems:'center', flexDirection:'row'}}>
       <div style={{width: 30, height: 30, border: '1px solid #E2E8F0', display: 'flex', 
              marginRight: 8, justifyContent: 'center', background: 'white', alignItems: 'center'}}>
         <FilterListIcon style={{fontSize:14}}/>
       </div>
       <DatePicker customInput={<CutomDateInput/>}
         selected={startDate}  
         onChange={(date) => setStartDate(date)} 
         dateFormat="MMMM d, yyyy"
         popperClassName="popper-class"
         popperPlacement="top-end"
         popperModifiers={[
           {
             name: "offset",
             options: {
               offset: [25, 10],
             },
           }]} />
       </div>
       </div>
       <div className="sales-container">
          {sales ? Object.keys(sales).map((e,i) => {
            return (
              <Saleschart type={e} key={i} data={sales[e]}/>
            );
          }): null}
       </div>
       <div className="revenue-container">
        {revenue ? <RevenueChart data={revenue}/> : null}
        {order ? <OrderValue data={order}/>: null}
       </div>
     </div>
   );
}

export default Container;