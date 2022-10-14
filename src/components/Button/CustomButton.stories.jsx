import React from "react"

import Button from "./Button"

export default {
    title: "Custom/Button",
    component: Button
}

const Template = (props) => <Button {...props} />

export const Principal = Template.bind({})

Principal.args = {
    color: "primary",
    variant: "contained",
    raised: true
}

export const Secundario = Template.bind({})

Secundario.args = {
    color: "secondary",
    variant: "outlined",
    raised: false
}
