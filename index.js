import reactSnippet from "./data.js";

// Appending all the nodes to the root element in html
document.getElementById("root").appendChild(InsertElementUsingRecursion(reactSnippet));

function InsertElementUsingRecursion(elements) {
    // This statement checks if children of an element is null then returns that particular element
    if (!elements.children) {
        return newElement(elements);
    }
    // During each recursion every time a new element should be created
    // and then appended or added to its parent element
    const elem=newElement(elements);
    elem.appendChild(InsertElementUsingRecursion(elements.children))
    return elem;
}
// This is a function which creates an element via createElement() in DOM 
function newElement(params) {
    const elem = document.createElement(params.tag);
        // Assigning all the styles of reactObject using style of DOM one by one
        for (const key in params.style) {
            elem.style[key] = params.style[key];
            }
        // adding values or text  of the element
        elem.innerText = params.value
        return elem;
}
