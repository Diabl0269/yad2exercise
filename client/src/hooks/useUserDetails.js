import { useState } from 'react'

export default () => {
  return {
    firstName: useState(''),
    lastName: useState(''),
    phone: useState(''),
    phone2: useState(''),
    email: useState(''),
    password: useState(''),
    agencyName: useState('')
  }
}
