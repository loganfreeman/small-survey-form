import React from 'react'

import momentTZ from 'moment-timezone'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { InputLabel } from '@mui/material'
import { MenuItem } from '@mui/material'
const timeZonesList = momentTZ.tz.names()
export default function TimeZoneSelect({ onChange }) {
  const defaultTimeZone = momentTZ.tz.guess()
  const [tz, setTz] = React.useState(defaultTimeZone)

  const handleChange = (event) => {
    setTz(event.target.value)
    onChange(event.target.value)
  }
  return (
    <FormControl>
      <InputLabel>TimeZone</InputLabel>
      <Select value={tz} label="TimeZone" onChange={handleChange}>
        {timeZonesList.map((tz) => (
          <MenuItem key={tz} value={tz}>
            {tz}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
