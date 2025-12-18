let x = 0
let y = 0
let result = 0
let myoperand = null
let dot = false
const choose_number = (number) => {
    if (myoperand) {
        y = Number(String(y) + number)
        screen_handler(y)
    } else {
        x = Number(String(x) + number)
        screen_handler(x)
    }
}
const screen_handler = (new_number) => {
    document.getElementById('current-operand').innerText = new_number
}
const second_screen_handler = (previous_number) => {
    document.getElementById('previous-operand').innerText = previous_number
}
const deactive_operand = () => {
    document.querySelectorAll('.operator').forEach(item => {
        item.classList.remove('active')
    })
}
const active_operand = (operand) => {
    myoperand = operand
    y = 0
    dot = false
    deactive_operand()
    screen_handler(y)
    document.getElementById(operand).classList.add('active')
    switch (operand) {
        case 'minus':
            second_screen_handler(`${x} -`)
            break;
        case 'plus':
            second_screen_handler(`${x} +`)
            break;
        case 'percent':
            second_screen_handler(`${x} %`)
            break;
        case 'multiple':
            second_screen_handler(`${x} x`)
            break;
        case 'divide':
            second_screen_handler(`${x} ÷`)
            break;
        default:
            break;
    }
}
const action_operand = (action) => {
    dot = false
    if (action === 'delete') {
        if (myoperand) {
            y = 0
            screen_handler(y)
        } else {
            x = 0
            screen_handler(x)
        }
    } else {
        x = 0
        y = 0
        result = 0
        myoperand = null
        screen_handler(x)
        deactive_operand()
        second_screen_handler('')
    }
}
const equal = () => {
    if (myoperand) {
        second_screen_handler('')
        switch (myoperand) {
            case 'minus':
                result = x - y
                break;
            case 'plus':
                result = x + y
                break;
            case 'percent':
                result = (x / 100) * y
                break;
            case 'multiple':
                result = x * y
                break;
            case 'divide':
                result = x / y
                break;
            default:
                break;
        }
        x = parseFloat(result.toPrecision(12))
        y = 0
        myoperand = null
        screen_handler(x)
        deactive_operand()
    }
}
const add_dot = () => {
    if (!dot) {
        dot = true
        if (myoperand) {
            y = `${y}.`
            screen_handler(y)
        } else {
            x = `${x}.`
            screen_handler(x)
        }
    }
}