import {View} from "./components/View";

const view = new View()
const button = document.querySelector('.button')
const description = document.querySelector('.description')

view.addTextToTarget(button, 'Collapse')
view.addTextToTarget(description, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consectetur et eveniet maxime molestiae nesciunt odio officiis repudiandae ullam voluptatum.')

button.addEventListener('click', () => {
    description.classList.toggle('hidden')
})