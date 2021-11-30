import React from 'react'
import MaterialTable from 'material-table';
import CreateIcon from '@mui/icons-material/Create';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DeleteIcon from '@mui/icons-material/Delete';

export default function WaterStorageTable() {
  
    

    const [data, setData] = React.useState([
      { name: 'xv', capacity: '23', cunit:'m3',surface: '10', sunit:'m2',depth: '23', dunit:'m3', slop: 'fallow', notes: 'N' },
      { name: 'K2K', capacity: '50', cunit:'f3', surface: '23', sunit:'f2',depth: '23', dunit:'m3',slop: 'dfg', notes: 'C' },
      { name: 'oiuy', capacity: '40', cunit:'kl', surface: '40', sunit:'m2',depth: '23', dunit:'m3',slop: 'abc', notes: 'T' },
      { name: 'sdfgh', capacity: '10', cunit:'Ml', surface: '2', sunit:'ha',depth: '23', dunit:'m3',slop: 'abc', notes: 'TS' }
       ])
  const columns = [{
      title: 'Name', field: 'name'
  },
  {
      title: 'Capacity', field: 'capacity', type: 'numeric',
  },
  {
      title: 'Unit', field: 'cunit',
      lookup: { 'l': 'Litres', 'kl': 'Kilolitres', 'Ml': 'Megalitres', 'G': 'Gallons', 'm3':'Cubic metre', 'f3':'Cubic feet','y3':'Cubic yard'},
  },{
    title: 'Surface Area', field: 'surface', type: 'numeric',
},
{
    title: 'Unit', field: 'sunit',
    lookup: { 'ha': 'Hectares', 'ac': 'Acres', 'm2':'Square metre', 'f2':'Square feet'},
},{
  title: 'Max Depth ', field: 'depth', type: 'numeric',
  
},
{
  title: 'Unit', field: 'dunit',
  lookup: { 'ha': 'Hectares', 'ac': 'Acres', 'm2':'Square metre', 'f2':'Square feet'},
}, {
      title: 'slop', field: 'slop', type: 'numeric', 
      
  }, {
      title: 'notes', field: 'notes',
    
  }]
    return (
        <div>
            <MaterialTable title="Water Storages"
                data={data}
                columns={columns}
                editable={{
                
                        onRowAdd: newData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newData]);
              
              resolve();
            }, 1000)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);

              resolve();
            }, 1000)
          }),
          
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);
              
              resolve()
            }, 1000)
          }),
                }}
               
                options={{
                    actionsColumnIndex: -1,
                    filtering: true,
                    paging: true,
                    pageSizeOptions: [2, 5, 10, 15, 20],
                    paginationType: "stepped",
                    showFirstLastPageButtons: false,
                }}
                icons={{
                 
                  Add: () => <AddCircleRoundedIcon fontSize="large" color="primary" />,
                  Edit: () => <CreateIcon color="action" />,
                  Delete: () => <DeleteIcon color="action" />
                }}
            /> 
        </div>
    )
}
