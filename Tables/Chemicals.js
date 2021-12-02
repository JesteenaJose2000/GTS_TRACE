import React from 'react'
import MaterialTable from 'material-table';
import Export from './export.png';
export default function Chemicals() {
    const [data, setData] = React.useState([
        { name: 'abc', resistancegrp: 'we', actives: 'wq', amount: '50g' },
        { name: 'def', resistancegrp: 're', actives: 'xyz', amount: '70g' },
        { name: 'mno', resistancegrp: 'os', actives: 'uv', amount: '100g' },
    ])
    const columns = [{
        title: 'Name', field: 'name'
    },
    {
        title: 'Resistance Group', field: 'resistancegrp',
    },
    {
        title: 'Actives', field: 'actives',
    }, {
        title: 'Amount', field: 'amount',
    }]
    return (
        <div>
            <MaterialTable title="CHEMICALS"
                data={data}
                columns={columns}

                options={{
                    paging: true,
                    pageSizeOptions: [2, 5, 10, 15, 20],
                    paginationType: "stepped",
                    showFirstLastPageButtons: false,
                    exportButton: true,
                }}
                icons={{
                    Export: () => <img src={Export}></img>,
                  }}
            />
        </div>
    )
}