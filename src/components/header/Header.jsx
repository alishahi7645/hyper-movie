import React from 'react'
import Navigation from './Navigation'
import Searchbox from './Searchbox'
import FollowUs from './FollowUs'

function Header() {
  return (
    <header>
      <Navigation/>
      <Searchbox/>
      <FollowUs/>
    </header>
  )
}

export default Header
