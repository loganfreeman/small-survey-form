import React, { useState } from 'react'
import { useFormContext } from '../../pages/profile/ProfileContext'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'

import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import RadioGroup from '@mui/material/RadioGroup'
import Radio from '@mui/material/Radio'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Slider from '@mui/material/Slider'
import Button from '@mui/material/Button'
import DatePicker from '@mui/lab/DatePicker'
import Checkbox from '@mui/material/Checkbox'
import update from 'react-addons-update'

import TimeZoneSelect from '../TimeZoneSelect'
export default function ProfileForm() {
  const { profile, setProfile, techPref, toppings } = useFormContext()

  const { pizzaToppings } = profile.preferences
  const handleBirthdayChange = (birthday) => {
    setProfile({
      ...profile,
      birthday,
    })
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setProfile({
      ...profile,
      [name]: value,
    })
  }
  const setTechPref = (e) => {
    const { name, value } = e.target
    setProfile(
      update(profile, {
        preferences: {
          techPref: {
            $set: value,
          },
        },
      })
    )
  }

  const setTimeZone = (v) => {
    setProfile(
      update(profile, {
        preferences: {
          timezone: {
            $set: v,
          },
        },
      })
    )
  }

  const setPizzaToppings = (toppings) => {
    setProfile(
      update(profile, {
        preferences: {
          pizzaToppings: {
            $set: toppings,
          },
        },
      })
    )
  }

  const handlePizzaToppingChange = (e) => {
    const { checked, value } = e.target
    let array = pizzaToppings
    if (checked) {
      if (!pizzaToppings.includes(value)) {
        array = [value, ...pizzaToppings]
      }
    } else {
      if (pizzaToppings.includes(value)) {
        array = pizzaToppings.filter((i) => i != value)
      }
    }
    setPizzaToppings(array)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(profile)
  }
  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        alignItems="left"
        justify="center"
        direction="column"
        spacing={2}
      >
        <Grid item>
          <TextField
            id="name-input"
            name="name"
            label="Name"
            type="text"
            value={profile.name}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item>
          <TextField
            id="password-input"
            name="password"
            label="Password"
            type="password"
            value={profile.password}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item>
          <DatePicker
            label="Birthday"
            value={profile.birthday}
            onChange={handleBirthdayChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </Grid>
        <Grid item>
          <FormControl>
            <FormLabel>Tech Preference</FormLabel>
            <RadioGroup
              name="techPref"
              value={profile.techPref}
              onChange={setTechPref}
              row
            >
              {techPref.map((pref) => (
                <FormControlLabel
                  key={pref}
                  value={pref}
                  control={<Radio size="small" />}
                  label={pref}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item>
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel component="legend">Pizza Toppings</FormLabel>
            <FormGroup>
              {toppings.map((topping) => (
                <FormControlLabel
                  key={topping}
                  control={
                    <Checkbox
                      onChange={handlePizzaToppingChange}
                      name={topping}
                      value={topping}
                    />
                  }
                  label={topping}
                />
              ))}
            </FormGroup>
          </FormControl>
        </Grid>
        <Grid item>
          <TimeZoneSelect onChange={setTimeZone} />
        </Grid>

        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Grid>
    </form>
  )
}
