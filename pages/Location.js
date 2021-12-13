import { Button, Text, Page, Grid, Card, Input, AutoComplete } from "@geist-ui/react";
import logoImage from '../public/beany-logo.svg'
import Image from "next/image";
import React from "react";

  const allOptions = [
    { label: 'Sacramento', value: 'sacramento' },
    { label: 'Portland', value: 'portland' },
    { label: 'San Diego', value: 'san-diego' },
  ]

export default function Title () {
  const [options, setOptions] = React.useState()
  const searchHandler = (currentValue) => {
    if (!currentValue) return setOptions([])
    const relatedOptions = allOptions.filter(item => item.value.includes(currentValue))
    setOptions(relatedOptions)
  }
  return (
    <div>
        <AutoComplete width='500px' options={options} placeholder="Where are you looking for coffee shops?" onSearch={searchHandler} />
    </div>

   
  )
}
