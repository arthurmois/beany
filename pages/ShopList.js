import { Button, Text, Page, Grid, Card } from "@geist-ui/react";
import logoImage from "../public/beany-logo.svg";
import { Image } from "@geist-ui/react";

export default function ShopList() {
  const imgMill =
    "https://raw.githubusercontent.com/arthurmois/beany/main/public/mill.jpg";

  return (
    <>
      <Grid.Container gap={2} justify="left" height="100px">
        <Grid xs={24} md={12}>
          <Card shadow width="100%">
            <Image src={imgMill} />
            <Text h5>The Mill</Text>
            <Text style={{ color: "grey" }}>
              1827 I St, Sacramento, CA 95811 <br />
              Open today: 7am-4pm
            </Text>
          </Card>
        </Grid>
        <Grid xs={24} md={12}>
          <Card shadow width="100%">
            <Image src={imgMill} />
            <Text h5>The Mill</Text>
            <Text h6 style={{ color: "grey" }}>
              Sacramento, CA
            </Text>
          </Card>
        </Grid>
        <Grid xs={24} md={12}>
          <Card shadow width="100%">
            <Image src={imgMill} />
            <Text h5>The Mill</Text>
            <Text h6 style={{ color: "grey" }}>
              Sacramento, CA
            </Text>
          </Card>
        </Grid>
        <Grid xs={24} md={12}>
          <Card shadow width="100%">
            <Image src={imgMill} />
            <Text h5>The Mill</Text>
            <Text h6 style={{ color: "grey" }}>
              Sacramento, CA
            </Text>
          </Card>
        </Grid>
        <Grid xs={24} md={12}>
          <Card shadow width="100%">
            <Image src={imgMill} />
            <Text h5>The Mill</Text>
            <Text h6 style={{ color: "grey" }}>
              Sacramento, CA
            </Text>
          </Card>
        </Grid>
        <Grid xs={24} md={12}>
          <Card shadow width="100%">
            <Image src={imgMill} />
            <Text h5>The Mill</Text>
            <Text h6 style={{ color: "grey" }}>
              Sacramento, CA
            </Text>
          </Card>
        </Grid>
        <Grid xs={24} md={12}>
          <Card shadow width="100%">
            <Image src={imgMill} />
            <Text h5>The Mill</Text>
            <Text h6 style={{ color: "grey" }}>
              Sacramento, CA
            </Text>
          </Card>
        </Grid>
      </Grid.Container>
    </>
  );
}
