import React, { useState } from 'react'
import { MenuHorizontal } from '../../components/basics/menu'
import { Grid, Sheet, styled } from '@mui/joy'
import logo from '../../assets/fondo.png'
import styles from './index.module.scss'
import { Grid2 } from '@mui/material'
import yo from '../../assets/yo.png'
const index: () => JSX.Element = () => {
  return (
    <Grid columns={{ lg: 12, md: 12, xl: 12 }}>
      <Grid columns={{ md: 12 }}>
        <MenuHorizontal />
      </Grid>
      <div className={styles.containerW}>
        <img src={logo} className={styles.imgFondo} />
        <div className={styles.bgBlue}></div>
        <div className={styles.container_section1}>
          <div className={styles.section1_img}>
            <img src={yo} />
          </div>
          <div className={styles.section1_desc}>
            <h4 className={styles.section1_desc__title}>
              I’m <b>Willy</b> Fernandez G.
            </h4>
            <div className={styles.section1_desc__subtitle}>
              FULL STACK DEVELOPER
            </div>
          </div>
        </div>
      </div>
    </Grid>
  )
}

export default index
