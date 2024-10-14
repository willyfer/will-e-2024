import React, { useState } from 'react'
import { MenuHorizontal } from '../../components/basics/menu'
import { Button, Grid, Sheet, styled } from '@mui/joy'
import logo from '../../assets/fondo.png'
import styles from './index.module.scss'
import { Grid2 } from '@mui/material'
import yo from '../../assets/yo.png'
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline'
import EastIcon from '@mui/icons-material/East'
import { GitHub } from '@mui/icons-material'
import { LinkedIn } from '@mui/icons-material'
import { Instagram } from '@mui/icons-material'

const index: () => JSX.Element = () => {
  return (
    <Grid columns={{ lg: 12, md: 12, xl: 12 }}>
      <Grid columns={{ md: 12 }}>
        <MenuHorizontal />
      </Grid>
      <div className={styles.containerW}>
        <img src={logo} className={styles.imgFondo} />
        <div className={styles.bgBlue}></div>
        <div className={styles.bgBlueDark}></div>
        <div className={styles.container_section1}>
          <div className={styles.section1_img}>
            <img src={yo} />
            <br />
            <div>
              <a
                href='https://github.com/willyfer' // Reemplaza con tu URL de GitHub
                target='_blank'
                rel='noopener noreferrer'
                className={styles.iconSocialMedia} // Mantén tu clase CSS
              >
                <GitHub
                  sx={{ fontSize: 30 }}
                  className={styles.iconSocialMedia}
                />
              </a>
              <a
                href='https://www.linkedin.com/in/willy-j-fern%C3%A1ndez-gastelo-8a0bb2125/' // Reemplaza con tu URL de GitHub
                target='_blank'
                rel='noopener noreferrer'
                className={styles.iconSocialMedia} // Mantén tu clase CSS
              >
                <LinkedIn
                  sx={{ fontSize: 30 }}
                  className={styles.iconSocialMedia}
                />
              </a>
              <a
                href='https://www.instagram.com/willyfernandezgastelo/' // Reemplaza con tu URL de GitHub
                target='_blank'
                rel='noopener noreferrer'
                className={styles.iconSocialMedia} // Mantén tu clase CSS
              >
                <Instagram
                  sx={{ fontSize: 30 }}
                  className={styles.iconSocialMedia}
                />
              </a>
            </div>
          </div>
          <div className={styles.section1_desc}>
            <h4 className={styles.section1_desc__title}>
              I’m <b>Willy</b> Fernandez G.
            </h4>
            <div className={styles.section1_desc__subtitle}>
              FULL STACK DEVELOPER
            </div>
            <div className={styles.section1_desc__description}>
              <p>
                Con deseo de formar parte de una organización con fuerte
                dinamismo competitivo en sus sectores, Enfocado en los
                resultados y objetivos estratégicos de la organización.
              </p>
              <br />
              <p>
                Siendo un joven responsable, con iniciativa y puntualidad.
                Excelente comunicación con las gerencias y resto de los
                departamentos con una buena relación interpersonal, capacidad de
                análisis y resolución de problemas con criterio bajo presión.
              </p>
            </div>
            <br />
            <div className={styles.section1_desc__btns}>
              <Button className={styles.btnContact}>
                Contactar &nbsp;
                <EastIcon />
              </Button>
              &nbsp;&nbsp;
              <Button variant='outlined'>
                Descargar CV &nbsp; <DownloadForOfflineIcon />
              </Button>
            </div>
            <div className={styles.section1_desc__experience}>
              <div>
                <div className={styles.nbr}>4+</div>
                <div className={styles.label_exp}>
                  Front End
                  <br />
                  Developer
                </div>
              </div>
              <div>
                <div className={styles.nbr}>3+</div>
                <div className={styles.label_exp}>
                  Back End
                  <br />
                  Developer
                </div>
              </div>
              <div>
                <div className={styles.nbr}>4+</div>
                <div className={styles.label_exp}>
                  Mobile
                  <br />
                  Developer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Grid>
  )
}

export default index
