import React from 'react'
import { Card } from 'reactstrap'
import DataTable from '../components/DataTable';

const AssignClass = () => {
  const headers = ['Subject', 'Action'];
  const data = [
    ['Class A', <button>Deallocate</button>],
    ['Class B', <button>Deallocate</button>],
    ['Class C', <button>Deallocate</button>],
    ['Class D', <button>Deallocate</button>],
    ['Class E', <button>Deallocate</button>]
  ];
  return (
    <>
      <Card>
        <h1>Teachers details</h1>
      </Card>
      <Card className='mt-5'>
        <h1>Allocate Classrooms</h1>
        <div className='mt-5'></div>
        <DataTable 
         headers={headers} data={data}
        />
      </Card>

    </>
  )
}

export default AssignClass
