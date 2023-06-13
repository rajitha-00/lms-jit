import React from 'react'
import { Button } from 'reactstrap'

const PrimaryBtn = (props) => {
  return (
    <>
        <Button color="success" className='px-7 w-full my-2'>
            {props.btnName}
        </Button>
    </>
  )
}

export default PrimaryBtn
