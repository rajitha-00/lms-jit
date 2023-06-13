import React from 'react'

const PrimaryBtn = (props) => {
  return (
    <>
        <Button color="success">
            {props.btnName}
        </Button>
    </>
  )
}

export default PrimaryBtn
