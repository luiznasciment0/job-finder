import { useState } from 'react'

import api from 'services/api'

import HeroSearch from 'components/HeroSearch'

const MainInput = () => {
  const [value, setValue] = useState('')

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value)
  }

  const handleSearch = async () => {
    const jobs = await api.get(
      'positions.json?description=python&full_time=true&location=sf'
    )
    console.log(jobs)
    alert('uhul')
  }

  return (
    <HeroSearch
      value={value}
      handleChange={handleChange}
      handleClick={handleSearch}
    />
  )
}

export default MainInput
