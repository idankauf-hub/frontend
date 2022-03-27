import { DataGrid } from '@mui/x-data-grid'
import React,{useState,useEffect} from 'react';
import Data from '../data.json'
import './table.css';
export default function Table() {
  const [dataRow,setData]=useState([Data]);

  const columns = [
    { field: 'asset', headerName: 'Asset', width: 360 },
    { field: 'ip', headerName: 'IP Address', width: 760 },
    
  ];
  
  useEffect(()=>{
  },[dataRow])

    return (
      <div className='table' style={{ height: 400, width: '80%'}}>
        <DataGrid
          rows={dataRow[0]}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          getRowId={(row) => row.asset}
        />
     
      </div>
    );
}
