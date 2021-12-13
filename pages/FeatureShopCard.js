import { Button, Text, Page, Grid, Card } from "@geist-ui/react";
import logoImage from "../public/beany-logo.svg";
// import Image from "next/image";
import { Image } from "@geist-ui/react";

export default function FeatureShopCard() {
  const imgMill =
    "https://raw.githubusercontent.com/arthurmois/beany/main/public/mill.jpg";
  return (
    <Card shadow width="100%" margin={"auto"}>
      <Image src={imgMill} />
      <Text h4>The Mill</Text>
      <p style={{ color: "grey" }}>
        1827 I St, Sacramento, CA 95811 <br />
        Open today: 7am-4pm
      </p>
    </Card>
  );
}
