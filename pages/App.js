import React from "react";
import Title from './Title';
import Location from './Location'
import ShopList from "./ShopList";
import { Text, Page } from "@geist-ui/react";
import FeatureShopCard from './FeatureShopCard'

export default class App extends React.Component {
  render() {
    return (
      <Page>
          <Page.Header >
            <h2>Beany</h2>
            <p>Your craft coffee shop finder</p>
          </Page.Header>
          <Page.Content>
            <Location/>
            <div style={{display:'none'}}>
              <h3 style={{marginTop:25,marginBottom:15}}>Coffee Shops</h3>
              <ShopList/>
            </div>
            <div>
              <h3 style={{marginTop:25,marginBottom:40}}>Featured Coffee Shop</h3>
              <FeatureShopCard/>
            </div>
          </Page.Content>
          <Page.Footer>
          <p>Check us out on Instagram @beany</p>
          </Page.Footer>
        </Page>
    );
  }
}