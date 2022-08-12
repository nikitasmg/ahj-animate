export class View {

    constructor() {
     this.init()
    }

    init() {
        this.addToTarget('#root','div','container')
        this.addToTarget('.container', 'div', 'collapsible')
        this.addToTarget('.collapsible', 'button','button')
        this.addToTarget('.collapsible', 'div','description')
    }

    addToTarget(selector, element, className) {
        const item = document.createElement(element)
        const target = document.querySelector(selector)
        item.classList.add(className)
        target.appendChild(item)
    }

    addTextToTarget(target, text) {
        target.innerText = text
    }

}