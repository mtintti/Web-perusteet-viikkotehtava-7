import { Circle } from "./class/Circle.js";

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const x_input = document.querySelector('#x')
const y_input = document.querySelector('#y')
const draw_button = document.querySelector('button')
const radio_form = document.querySelector('from')
const line_width_input = document.querySelector('input[type=number]')

const updateUI =(label3, label4)=> {
    document.querySelector('div#third label').innerHTML = label3

    if (label4 !== undefined) {
        document.querySelector('div#fourth label').innerHTML = label4
        document.querySelector('div#fourth label').style.display = "inline-block"
        document.querySelector('div#fourth input').style.display = "inline-block"
    } else {
        document.querySelector('div#fourth label').style.display = "none"
        document.querySelector('div#fourth label').style.display = "none"
    }
}


radio_form.addEventListener('click', () => {
    const shape = radio_form['shape'].value
    switch (shape) {
        case 'line':
            updateUI('x2', 'y2')
            break
        case 'circle':
            updateUI('width:')
            break
        case 'rectangle':
            updateUI('width:', 'height')
            break
        case 'square':
            updateUI('width')
            break

    }
})


draw_button.addEventListener('click', () => {
    const shape = radio_form ['shape'].value
    switch (shape) {
        case 'line':

        break
    case 'circle':

        break
    case 'rectangle':

        break
    case 'square':

        break

    }


    const drawCircle = () => {
        const x = x_input.value
        const y = y_input.value
        const line_width = line_width_input.value
        const colors = color_input.value
        const width = document.querySelector('div#third input').value
        const circle = new Circle (x,y,width/2)
        circle.setColor = colors
        circle.setLineWidth = line_width
        circle.draw(ctx)
    }
})
