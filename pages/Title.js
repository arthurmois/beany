import { Button, Text, Page, Grid, Card } from "@geist-ui/react";
import logoImage from '../public/beany-logo.svg'
import Image from "next/image";
import Location from './Location'

export default function Title () {
  return (
    <>
      <Grid.Container gap={1} justify="center" height="100px">
        <Text h1 >
          Beany
        </Text>
      </Grid.Container>
      <Grid.Container gap={4} justify="center" height="100px">
        <Text h4 >
          Your craft coffee shop finder
        </Text>
      </Grid.Container>
      <Grid.Container gap={4} justify="center" height="100px">
        <Location />
      </Grid.Container>
    </>

   
  )
}
