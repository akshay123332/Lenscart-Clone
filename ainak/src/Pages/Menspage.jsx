import styled from '@emotion/styled'
import React from 'react'
import Menproductlist from '../Components/Menproductlist/Menproductlist'
import Sidebar from '../Components/Sidebar/Sidebar'
import style from "../styles/Menspage.module.css"

const Menspage = () => {
  return (
    <div className={style.container} >
      <div className={style.sidebarcontainer} > 
      <Sidebar/>
      </div>
      <div className={style.listcontainer} >
      <Menproductlist/>
      </div>
    </div>
  )
}

export default Menspage