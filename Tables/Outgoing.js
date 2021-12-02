import React from 'react'
import MaterialTable from 'material-table';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import Export from './export.png';
export default function Outgoing() {
    const [data, setData] = React.useState([
        { type: 'type1', description: 'xyz', date: '30/11/2020', operator: 'op1',chemicals: 'ch1', notes: 'abz' },
        { type: 'type2', description: 'uvw', date: '03/10/2021', operator: 'op2',chemicals: 'ch2', notes: 'dfg' },
        { type: 'type3', description: 'abc', date: '09/08/2021', operator: 'op3',chemicals: 'ch3', notes: 'hij' },
    ])
    const columns = [{
        title: 'Job Type', field: 'type'
    },
    {
        title: 'Job Description', field: 'description',
    },
    {
        title: 'Date', field: 'date',
    }, {
        title: 'Operator', field: 'operator',
    },
    {
        title: 'Chemicals', field: 'chemicals',
    },
    {
        title: 'Notes', field: 'notes',
    }]
    return (
        <div>
            <MaterialTable title="OUTGOING"
                data={data}
                columns={columns}
                editable={{
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
                    paging: true,
                    pageSizeOptions: [2, 5, 10, 15, 20],
                    paginationType: "stepped",
                    showFirstLastPageButtons: false,
                    exportButton: true,
                }}
                icons={{
                    Export: () => <img src={Export}></img>,
                    Edit: () => <CreateIcon color="action" />,
                    Delete: () => <DeleteIcon color="action" />
                  }}
            />
        </div>
    )
}