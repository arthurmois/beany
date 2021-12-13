import { Button, Text, Page, Grid, Card } from "@geist-ui/react";
import logoImage from '../public/beany-logo.svg'
import Image from "next/image";

export default function ShopList () {
  return (
    <>
      <Grid.Container gap={2} justify="center" height="100px">
        <Grid xs={8}><Card shadow width="100%" /></Grid>
        <Grid xs={8}><Card shadow width="100%" /></Grid>
        <Grid xs={8}><Card shadow width="100%" /></Grid>
        <Grid xs={8}><Card shadow width="100%" /></Grid>
        <Grid xs={8}><Card shadow width="100%" /></Grid>
        <Grid xs={8}><Card shadow width="100%" /></Grid>
        <Grid xs={8}><Card shadow width="100%" /></Grid>
        <Grid xs={8}><Card shadow width="100%" /></Grid>
        <Grid xs={8}><Card shadow width="100%" /></Grid>
      </Grid.Container>
    </>

   
  )
}
