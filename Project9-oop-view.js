import Operation from "./Project9-oop-logic"
class Cal_View {
    #myoperand = null
    #x = 0
    #y = 0
    #dot = false
    #result=0
    choose_number = (number) => {
        if (this.#myoperand) {
            this.#y = Number(String(this.#y) + number)
            this.screen_handler(this.#y)
            return
        }
        this.#x = Number(String(this.#x) + number)
        this.screen_handler(this.#x)
    }
    screen_handler = (new_number) => {
        document.getElementById('current-operand').innerText = new_number
    }
    second_screen_handler = (previous_number) => {
        document.getElementById('previous-operand').innerText = previous_number
    }
    active_operand = (operand) => {
        this.#myoperand = operand
        this.#y = 0
        this.#dot = false
        this.deactive_operand()
        this.screen_handler(this.#y)
        document.getElementById(operand).classList.add('active')
        switch (operand) {
            case 'minus':
                this.second_screen_handler(`${this.#x} -`)
                break;
            case 'plus':
                this.second_screen_handler(`${this.#x} +`)
                break;
            case 'percent':
                this.second_screen_handler(`${this.#x} %`)
                break;
            case 'multiple':
                this.second_screen_handler(`${this.#x} x`)
                break;
            case 'divide':
                this.second_screen_handler(`${this.#x} ÷`)
                break;
            default:
                break;
        }
    }
    deactive_operand = () => {
        document.querySelectorAll('.operator').forEach(item => {
            item.classList.remove('active')
        })
    }
    add_dot = () => {
        if (!this.#dot) {
            this.#dot = true
            if (this.#myoperand) {
                this.#y = `${this.#y}.`
                this.screen_handler(this.#y)
                return
            }
                this.#x = `${this.#x}.`
                this.screen_handler(this.#x)
        }
    }
    action_operand = (action) => {
        this.#dot = false
        if (action === 'delete') {
            if (this.#myoperand) {
                this.#y = 0
                this.screen_handler(this.#y)
            } else {
                this.#x = 0
                this.screen_handler(this.#x)
            }
        } else {
            this.#x = 0
            this.#y = 0
            this.#result = 0
            this.#myoperand = null
            this.screen_handler(this.#x)
            this.deactive_operand()
            this.second_screen_handler('')
        }
    }
    equal = () => {
        if (this.#myoperand) {
            this.#result = Operation.handle_method(this.#myoperand,this.#x,this.#y)
            this.second_screen_handler('')
            this.#x = parseFloat(this.#result.toPrecision(12))
            this.#y = 0
            this.#myoperand = null
            this.screen_handler(this.#x)
            this.deactive_operand()
        }
    }
}

export default Cal_View