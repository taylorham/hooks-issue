import React from 'react'

export default function HookExample() {
  const [value, setValue] = React.useState('')
  const handleChange = e => setValue(e.target.value)

  return (
    <React.Fragment>
      <input type="text" value={value} onChange={handleChange} />
      text = {value}
    </React.Fragment>
  )
}
