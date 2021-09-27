import React, { useState } from 'react';
import { Input } from '@mui/material';
import { Grid } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function InputSearch(props) {

    const [newCase,setNewCase] = useState([])
    const [toTalCase,setTotalCase] = useState([])
    const [recovered,setRecovered] = useState([])
    const [totalRecovered,setTotalRecovered] = useState([])
    const [newDead,setNewDead] = useState([])
    const [totalDead,setTotalDead] = useState([])

    
    const newDate = (e) => {
      let data = props.data
      let fromInput = data.filter( item => item.txn_date.includes(e.target.value) )
      if (!fromInput[0]) {
        fromInput = [{
          new_case: " ",
          total_case: " ",
          new_recovered: " ",
          total_recovered: " ",
          new_death: " ",
          total_death: " "
        }]
      } 
      setNewCase(fromInput[0].new_case)
      setTotalCase(fromInput[0].total_case)
      setRecovered(fromInput[0].new_recovered)
      setTotalRecovered(fromInput[0].total_recovered)
      setNewDead(fromInput[0].new_death)
      setTotalDead(fromInput[0].total_death)
    }  

    function createData(name, New, Total) {
        return { name, New,Total };
      }
      
    const rows = [
    createData('ติดเชื้อ', newCase,toTalCase),
    createData('เสียชีวิต', recovered, totalRecovered),
    createData('รักษาหาย', newDead, totalDead),
    ];
    
    return (
        <Grid container style={{margin:"3rem auto"}}>
          <Grid item  lg={4} xs={12} style={{ textAlign:"center" }}>
            <Input type="date" onChange={(e) => newDate(e)} /> 
          </Grid>
          <Grid item xs={12} lg={8} >
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>รายงานสถานการณ์ COVID-19 ระลอก 3 (ตั้งแต่ 01/04/2021 –ปัจจุบัน)</TableCell>
                        <TableCell align="right">New</TableCell>
                        <TableCell align="right">Total Case</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.New}</TableCell>
                        <TableCell align="right">{row.Total}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
          </Grid>
        </Grid>
    )
}
