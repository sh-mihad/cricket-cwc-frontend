import React from 'react'
import { Outlet } from 'react-router-dom'
import Menubar from '../utils/Menubar/Menubar'

export default function MainLayout() {
  return (
    <>
    <Menubar/>
    <Outlet/>
    </>
  )
}
