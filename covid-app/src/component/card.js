import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import DangerousOutlinedIcon from '@mui/icons-material/DangerousOutlined';
import Grid from '@mui/material/Grid';
import { LineChart, Line,Tooltip, ResponsiveContainer } from 'recharts';
import './card.css';

export default function Cards(props) {
    const [show, setShow] = useState(true)

    const showRes = () => {
        if (window.innerWidth <= 900) {
          setShow(false);
        } else {
          setShow(true);
        }
      };
    
    useEffect(() => {
        showRes();
    }, []);
    
    window.addEventListener('resize', showRes);


    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip">
              <p className="label">{`${payload[0].payload.txn_date} `}</p>
              <p className="label">{` ${payload[0].value}`}</p>
            </div>
          );
        }
      
        return null;
      };
    return show? (
        <div>
        <Grid container  justifyContent="space-between" style={{ margin:"1rem 0px"}} >
          <Grid item xs={12} md={3.5}>
            <Card sx={{ minWidth: 275 }} style={{ backgroundColor: "#29b6f6",width:"100%"}} >
              <CardContent>
                <Grid container className="thai" alignItems="center"  spacing={1} >

                  <Grid item >
                    <AddCircleSharpIcon style={{color:"#b2ff59", fontSize:"2rem"}}/>
                  </Grid>

                  <Grid item>
                    <h5 className="text">รักษาหาย</h5>
                  </Grid>

                </Grid>
                <Grid container className="thai" alignItems="center"  spacing={1} >

                  <Grid item>
                    <LineChart width={200} height={100} data={props.data}>
                      <Tooltip content={CustomTooltip} cursor={false}/>
                      <Line type="monotone" dataKey="new_recovered" stroke="#b2ff59" dot={false}  />
                    </LineChart>
                  </Grid>

                  <Grid item>
                    <h4 className="text">{ props.newRecovered }</h4 >
                  </Grid>

                </Grid>

                <Grid container className="thai">
                  <Grid item>
                    <h5 className="text">รวม : {  props.totalRecovered } คน</h5 >
                  </Grid>
                </Grid>

              </CardContent>
            </Card>
          </Grid>
            {/* card 1 case */}
          <Grid item xs={12} md={3.5}>
            <Card sx={{ minWidth: 275 }} style={{ backgroundColor: "#ef5350"}} >
              <CardContent>
                <Grid container className="thai" alignItems="center" spacing={1} >

                  <Grid item >
                   <CoronavirusIcon style={{color:"#ffcdd2" , fontSize:"2rem"}}/>
                  </Grid>

                  <Grid item>
                    <h5 className="text" >ติดเชื้อรายใหม่</h5>
                  </Grid>

                </Grid>
                <Grid container className="thai" alignItems="center"  spacing={1}>

                  <Grid item >
                    <LineChart width={200} height={100} data={ props.data }>
                      <Tooltip content={CustomTooltip}cursor={false}/>
                      <Line type="monotone" dataKey="new_case_excludeabroad" stroke="#ffcdd2" dot={false}  />
                    </LineChart>
                  </Grid>

                  <Grid item>
                    <h4 className="text">{  props.newCase }</h4 >
                  </Grid>

                </Grid>

                <Grid container className="thai">
                  <Grid item>
                    <h5 className="text">รวม : {  props.totalCase } คน</h5 >
                  </Grid>
                </Grid>

              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={3.5}>
            <Card sx={{ minWidth: 275 }} style={{ backgroundColor: "#616161"}} >
              <CardContent>
                <Grid container className="thai" alignItems="center" spacing={1} >

                  <Grid item >
                   <DangerousOutlinedIcon style={{color:"#e0e0e0" , fontSize:"2rem"}}/>
                  </Grid>

                  <Grid item>
                    <h5 className="text" >เสียชีวิต</h5>
                  </Grid>

                </Grid>
                <Grid container className="thai" alignItems="center"  spacing={1}>

                  <Grid item >
                  <LineChart width={200} height={100} data={ props.data }>
                    <Tooltip content={CustomTooltip} cursor={false}/>
                    <Line type="monotone" dataKey="new_death" stroke="#e0e0e0" dot={false}  />
                  </LineChart>
                  </Grid>

                  <Grid item>
                    <h4 className="text">{ props.newDead }  </h4 >
                  </Grid>

                </Grid>

                <Grid container className="thai">
                  <Grid item>
                  <h5 className="text">รวม : {  props.totalDead } คน</h5 >
                  </Grid>
                </Grid>

              </CardContent>
            </Card>
          </Grid>

        </Grid>
        </div>
    ) : (
        <div>
        <Grid container  justifyContent="space-between" style={{ margin:"1rem 0px"}} >
          <Grid item xs={12} md={3.5}>
            <Card sx={{ minWidth: 275 }} style={{ backgroundColor: "#29b6f6",width:"100%"}} >
              <CardContent>
                <Grid container className="thai" alignItems="center"  spacing={1} >

                  <Grid item >
                    <AddCircleSharpIcon style={{color:"#b2ff59", fontSize:"3rem"}}/>
                  </Grid>

                  <Grid item>
                    <h4>รักษาหาย</h4>
                  </Grid>

                </Grid>
                <Grid container className="thai" alignItems="center"  spacing={1}>

                  <Grid item>
                  <div className="line-chart">
                      <ResponsiveContainer>
                        <LineChart width={200} height={100} data={props.data}>
                          <Tooltip content={CustomTooltip} cursor={false}/>
                          <Line type="monotone" dataKey="new_recovered" stroke="#b2ff59" dot={false}  />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </Grid>

                  <Grid item>
                    <h3>{ props.newRecovered }</h3 >
                  </Grid>

                </Grid>

                <Grid container className="thai">
                  <Grid item>
                    <h4>รวม : {  props.totalRecovered } คน</h4 >
                  </Grid>
                </Grid>

              </CardContent>
            </Card>
          </Grid>
            {/* card 1 case */}
          <Grid item xs={12} md={3.5}>
            <Card sx={{ minWidth: 275 }} style={{ backgroundColor: "#ef5350"}} >
              <CardContent>
                <Grid container className="thai" alignItems="center" spacing={1} >

                  <Grid item >
                   <CoronavirusIcon style={{color:"#ffcdd2" , fontSize:"3rem"}}/>
                  </Grid>

                  <Grid item>
                    <h4>ติดเชื้อรายใหม่</h4>
                  </Grid>

                </Grid>
                <Grid container className="thai" alignItems="center"  spacing={1}>

                  <Grid item >
                   <div className="line-chart">
                      <ResponsiveContainer>
                        <LineChart width={200} height={100} data={ props.data }>
                          <Tooltip content={CustomTooltip}cursor={false}/>
                          <Line type="monotone" dataKey="new_case_excludeabroad" stroke="#ffcdd2" dot={false}  />
                        </LineChart>
                      </ResponsiveContainer>
                   </div>
                  </Grid>

                  <Grid item>
                    <h3>{  props.newCase }</h3 >
                  </Grid>

                </Grid>

                <Grid container className="thai">
                  <Grid item>
                    <h4>รวม : {  props.totalCase } คน</h4 >
                  </Grid>
                </Grid>

              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={3.5}>
            <Card sx={{ minWidth: 275 }} style={{ backgroundColor: "#616161"}} >
              <CardContent>
                <Grid container className="thai" alignItems="center" spacing={1} >

                  <Grid item >
                   <DangerousOutlinedIcon style={{color:"#e0e0e0" , fontSize:"3rem"}}/>
                  </Grid>

                  <Grid item>
                    <h4>เสียชีวิต</h4>
                  </Grid>

                </Grid>
                <Grid container className="thai" alignItems="center"  spacing={1}>

                  <Grid item >
                    <div className="line-chart">
                      <ResponsiveContainer>
                        <LineChart width={200} height={100} data={ props.data }>
                          <Tooltip content={CustomTooltip} cursor={false}/>
                          <Line type="monotone" dataKey="new_death" stroke="#e0e0e0" dot={false}  />
                      </LineChart>
                        </ResponsiveContainer>
                    </div>
                  </Grid>

                  <Grid item>
                    <h3>{ props.newDead }  </h3 >
                  </Grid>

                </Grid>

                <Grid container className="thai">
                  <Grid item>
                    <h4>รวม : {  props.totalDead } คน</h4 >
                  </Grid>
                </Grid>

              </CardContent>
            </Card>
          </Grid>

        </Grid>
        </div>
    )
}


