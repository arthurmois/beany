import { Button, Text, Page, Grid, Card } from "@geist-ui/react";
import logoImage from '../public/beany-logo.svg'
// import Image from "next/image";
import { Image } from "@geist-ui/react";
import React from "react";

import Title from './Title';
import Location from './Location'
import ShopList from "./ShopList";
import FeatureShopCard from './FeatureShopCard'
import { useState, useContext } from "react";

import useMediaQuery from './useMediaQuery';

export const FeatureContext = React.createContext();

export default function Home () {

  const [feature, setFeature] = useState(true);

  let isPageSmall = useMediaQuery('(max-width: 600px)');
  const pageWidth = isPageSmall ? '100%' : '80%';
  return (
    <Page width={pageWidth}>
      <Page.Header >
        <h2>Beany</h2>
        <p>Your craft coffee shop finder</p>
      </Page.Header>
      <Page.Content>
        <FeatureContext.Provider value={{setFeature}}>
          <Location />
        </FeatureContext.Provider>
        {feature ?
        <div>
          <h3 style={{marginTop:25,
                      marginBottom:40,
                      textAlign: "center"}}>Featured Coffee Shop</h3>
          <FeatureShopCard />
        </div> :
        <div>
          <h3 style={{marginTop:25,marginBottom:15}}>Coffee Shops</h3>
          <ShopList/>
        </div>}
      </Page.Content>
    </Page>
  )
}
