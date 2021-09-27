import React, { useState, useEffect} from 'react';
import axios from 'axios'
import Container from '@mui/material/Container';
import Cards from './component/card'
import { ThemeProvider ,createTheme } from '@mui/material/styles';
import Navigation from './component/Navigation'
import Charts from './component/Charts'
import InputSearch from './component/Input';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});





export default function App() {

  const [data, setData] = useState([])
  const [newRecovered, setRecovered] = useState([])
  const [totalRecovered, setTotalRecovered] = useState([])
  const [newCase, setNewCase] = useState([])
  const [totalCase, setTotalCase] = useState([])
  const [newDead, setNewDead] = useState([])
  const [totalDead, setTotalDead] = useState([])
  const getData = async () => {
    const response = await axios.get("https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-all")
                     await setData(response.data)
                     await setRecovered(response.data[ response.data.length - 1 ].new_recovered)
                     await setTotalRecovered(response.data[ response.data.length - 1 ].total_recovered)
                     await setNewCase(response.data[ response.data.length - 1 ].new_case_excludeabroad)
                     await setTotalCase(response.data[ response.data.length - 1 ].total_case)
                     await setNewDead(response.data[ response.data.length - 1 ].new_death)
                     await setTotalDead(response.data[ response.data.length - 1 ].total_death)
                    //  await console.log(response.data)
  }

  useEffect(() => {
    getData()
  }, [])
 
 
 


  return (
    <ThemeProvider theme={theme}>
      <Container style={{ backgroundColor:"#eeeeee"}}>
        <Navigation/>
        <Cards data={data} newRecovered={newRecovered} totalRecovered={totalRecovered} newCase={newCase} totalCase={totalCase} newDead={newDead} totalDead={totalDead}/>
        <Charts data={data} totalCase={totalCase} totalRecovered={totalRecovered}/>
        <InputSearch data={data}/>
      </Container>
    </ThemeProvider>
  )
}
// {
//   let dataOfAPI = {}
//   response.data.map( item => dataOfAPI[item.txn_date] = item.total_case)
//   setData(dataOfAPI)
//   setTimeout(() => console.log(data1), 1000);
// }