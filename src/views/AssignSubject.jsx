import React from 'react'
import { Card } from 'reactstrap'
import DataTable from '../components/DataTable';

const AssignSubject = () => {
  const headers = ['Subject', 'Action'];
  const data = [
    ['Mathematics', <button>Deallocate</button>],
    ['Science', <button>Deallocate</button>],
    ['English', <button>Deallocate</button>],
    ['History', <button>Deallocate</button>],
    ['Art', <button>Deallocate</button>]
  ];
  return (
    <>
      <Card>
        <h1>Teachers details</h1>
      </Card>
      <Card className='mt-5'>
        <h1>Allocate subjects</h1>
        <div className='mt-5'></div>
        <DataTable 
         headers={headers} data={data}
        />
      </Card>

    </>
  )
}

export default AssignSubject
