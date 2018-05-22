import React from 'react'
import { render } from 'react-dom'
import Menu from './Menu'
import data from './Data'

window.React = React

render(
    <Menu recipes={data} />,
    document.getElementById("react-container")
)