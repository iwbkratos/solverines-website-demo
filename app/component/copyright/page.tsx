import { Fragment } from "react";
import styles from "./copyright.module.css";

import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import Link from "next/link";

export default function Copyrights(){
    return(
        <Fragment >

          <Grid className={styles.copyrightrow} container rowSpacing={1}>
           <Grid xs={12} sm={12} md={6} className={styles.left} >
           <Box component="div" className="col-md-6">
              <Typography component="p" className={styles.copyText}>
                © Copyrights Solverines Technology Solutions Pvt. Ltd. 2026. All rights reserved.
              </Typography>
            </Box>
           </Grid>
              <Grid xs={12} sm={12} md={6} className={styles.right}>
                <Box component="div" className={styles.copyMenu}>
                <List component="ul">
                  <ListItem component="li"><Link href={"/"}>Home</Link></ListItem>
                  <ListItem component="li"><Link href={"/outsystems"}>Outsystems</Link></ListItem>
                  <ListItem component="li"><Link href={"/contact"}>Contact</Link></ListItem>
                </List>
                </Box>
              </Grid>
          </Grid>
          
        </Fragment>
    );
}