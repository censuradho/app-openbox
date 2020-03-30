import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import { Svg, G, Rect, Text } from "react-native-svg";
import { BarChart } from 'react-native-svg-charts'

type Props = {
  width: number
  height: number
  data: Data[]
  layout: Layout
  type: 'bar' | 'bar-group'
}

type Data = {
  x: string[]
  y: number[]
}

type Layout = {
  margin: { l: number, r: number, t: number, b: number }
}

function Bar() {
  return (
    // <BarChart 
    
    // />
    <Svg></Svg>
  )
}

export default Bar