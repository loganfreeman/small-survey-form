import React from 'react'
import ProfileProvider from './ProfileContext'
import ProfileForm from '../../components/profile/ProfileForm'
import Container from '@mui/material/Container'

export default function ProfilePage() {
  return (
    <ProfileProvider>
      <Container fixed>
        <ProfileForm />
      </Container>
    </ProfileProvider>
  )
}
