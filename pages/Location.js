import { Button, Text, Page, Grid, Card, Input, AutoComplete } from "@geist-ui/react";
import logoImage from '../public/beany-logo.svg'
import Image from "next/image";
import React from "react";
import useMediaQuery from "./useMediaQuery";
import { useContext } from "react";

import { FeatureContext } from "./Home";

  const allOptions = [
    { label: 'Sacramento', value: 'sacramento' },
    { label: 'Portland', value: 'portland' },
    { label: 'San Diego', value: 'san-diego' },
  ]

export default function Location () {
  const {setFeature} = useContext(FeatureContext);

  const [options, setOptions] = React.useState()
  const searchHandler = (currentValue) => {
    if (!currentValue) return setOptions([])
    const relatedOptions = allOptions.filter(item => item.value.includes(currentValue))
    setOptions(relatedOptions)
  }
  return (
    <div>
        <AutoComplete
          onSelect={()=> {
              setFeature(false);
              
              
            }}
          width='100%'
          margin={"auto"}
          options={options}
          placeholder="Where are you looking for coffee shops?"
          onSearch={searchHandler} />
    </div>

   
  )
}
