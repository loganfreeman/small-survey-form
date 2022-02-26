import React from 'react'

const ProfileContext = React.createContext()

export default function ProfileProvider({ children }) {
  const techPref = ['front end', 'back end', 'both']
  const toppings = [
    'Pepperoni',
    'Mushroom',
    'Extra cheese',
    'Sausage',
    'Onion',
    'Black olives',
    'Green pepper',
    'Fresh garlic',
  ]
  const defaultProfile = {
    name: '',
    password: '',
    birthday: null,
    preferences: {
      techPref: null,
      pizzaToppings: [],
      timezone: null,
    },
  }
  const [profile, setProfile] = React.useState(defaultProfile)

  const value = { profile, setProfile, techPref, toppings }

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  )
}

export function useFormContext() {
  return React.useContext(ProfileContext)
}
