import {JSDOM, VirtualConsole} from "jsdom"

const html: string = await Bun.file("index.html").text()
const dom = new JSDOM (html)
const document: Document = dom.window.document

/*Borrar contenido existente*/
document.body.innerHTML = ""

/*Crear un título*/

const title: HTMLHeadingElement = document.createElement("h1")

title.textContent = "Laboratorio DOM con Bun y TypeScript"
document.body.appendChild(title)

/*Crear un párrafo*/

const paragraph: HTMLParagraphElement = document.createElement("p")

paragraph.textContent =
"Esta página fue generada mediante manipulación del DOM usando TypeScript."

document.body.appendChild(paragraph)

/*Crear una lista dinamica*/

const list: HTMLUListElement = document.createElement("ul")

const technologies: string[] = [
"HTML",
"TypeScript",
"Bun",
"DOM"
]

for (const tech of technologies) {
const item: HTMLLIElement = document.createElement("li")
item.textContent = tech
list.appendChild(item)
console.log(tech,"agregado")

}
document.body.appendChild(list)
/*Agregar boton*/
const button: HTMLButtonElement = document.createElement("button")

button.textContent = "Haz clic"
button.id = "mainButton"
button.classList.add("primary")
document.body.appendChild(button)

/*Guardar cambios*/
await Bun.write("index.html", dom.serialize())



console.log(document.body.innerHTML==""?"Empty HTML found":"HTML found")

