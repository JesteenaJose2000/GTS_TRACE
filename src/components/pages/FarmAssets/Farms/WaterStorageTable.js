import React from 'react'
import MaterialTable from 'material-table';
import CreateIcon from '@mui/icons-material/Create';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DeleteIcon from '@mui/icons-material/Delete';

export default function WaterStorageTable() {
  
    

    const [data, setData] = React.useState([
      { name: 'xv', capacity: '23', cunit:'2',surface: '10', sunit:'1',depth: '23', dunit:'5', slop: 3, notes: 'xcvb' },
      { name: 'K2K', capacity: '50', cunit:'3', surface: '23', sunit:'0',depth: '23', dunit:'4',slop: 2, notes: 'sdfgh' },
      { name: 'oiuy', capacity: '40', cunit:'1', surface: '40', sunit:'3',depth: '23', dunit:'1',slop: 8, notes: 'cvbn' },
      { name: 'sdfgh', capacity: '10', cunit:'4', surface: '2', sunit:'2',depth: '23', dunit:'3',slop: 7, notes: 'jhgfd' }
       ])
  const columns = [{
      title: 'Name', field: 'name'
  },
  {
      title: 'Capacity', field: 'capacity', type: 'numeric',
  },
  {
      title: 'Unit', field: 'cunit',
      lookup: { '0': 'Litres',  '1': 'Gallons', '4':'Cubic metre', '2':'Cubic feet','3':'Cubic yard'},
  },{
    title: 'Surface Area', field: 'surface', type: 'numeric',
},
{
    title: 'Unit', field: 'sunit',
    lookup: { '3': 'Hectares', '2': 'Acres', '1':'Square metre', '0':'Square feet'},
},{
  title: 'Max Depth ', field: 'depth', type: 'numeric',
  
},
{
  title: 'Unit', field: 'dunit',
  lookup: { '0': 'mm', '1':'cm', '5':'metre', '2': 'inch', '3':'feet', '4':'yard'},
}, {
      title: 'Slop factor', field: 'slop', type: 'numeric', 
      
  }, {
      title: 'Notes', field: 'notes',
    
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
