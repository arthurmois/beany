import { Button, Text, Page, Grid, Card } from "@geist-ui/react";
import logoImage from '../public/beany-logo.svg'
// import Image from "next/image";
import { Image } from "@geist-ui/react";

export default function FeatureShopCard () {
  return (
      <Card shadow width="75%" >
        <Image src = "/public/mill.jpg"/>
      </Card>
  )
}
