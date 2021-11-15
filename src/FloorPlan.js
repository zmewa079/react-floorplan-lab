import React from "react"
import Kitchen from './Kitchen.js'
import LivingRoom from "./LivingRoom.js"
import Bedroom from "./Bedroom.js"
import Bath from "./Bath.js"


export default function FloorPlan(props) {
  return (
    <div>
    <Kitchen />
    <LivingRoom />
    <Bedroom bedNum={1} />
    <Bedroom bedNum={2} />
    <Bedroom bedNum={3} />
    <Bath size={'Half Bath'} />
    <Bath size={'Full Bath'} />
    </div>
  )
}


