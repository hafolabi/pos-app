import React from 'react'
import Header from '../../components/header/Header'
import Privacy from '../../components/privacy/Privacy'
import Topbar from '../../components/topbar/Topbar'
import Whyus from '../../components/whyUs/WhyUs'
import './home.css'

export default function Home() {
  return (
    <div className='home'>
        <Topbar />
        <Header />
        <Privacy />
        <Whyus />
    </div>
  )
}
