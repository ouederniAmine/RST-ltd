import "./table.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import React from "react";
import { useState  , useEffect} from "react";
import axios from "axios";
const Table = (props) => {
  const [data, setData] = useState({
    id:0,
    name:"", 
    email:"",
    currentBalance:"",
  });
  useEffect(() => {
    console.log(data );
  });

  useEffect(() => {
    let arr =[]
      axios
      .get("http://localhost:3001/api/clients")
      .then((res) => {
        console.log(res.data);
        let newData = {
          id:0,
          name:"", 
          email:"",
          currentBalance:"",
        }
        res.data.map((item)=>{
          newData.id = item.id
           item.fullname = "hey"
          item.email =newData.email 
          item.currentBalance = 2
        })
        setData(res.data)
        console.log(newData)
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    
    {
      field: "fullname",
      headerName: "Client Name",
      width: 230,
    },
  
    {
      field: "email",
      headerName: "Client Email",
      width: 200,
    },
    {
      field: "currentBalance",
      headerName: "Current Balance",
      width: 200,
    }
   
  ];
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  console.log(window.location.href.split("/").pop()+"/new");

  const actionColumn = [
   
  ];
  return (
    <div className="datatable">
 <div className="datatableTitle">
         Clients
      </div>
       
       <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Table;