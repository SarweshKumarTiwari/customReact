const reactSnippet = {  // This is a react element description object
    parent: null,
    sibling:null,
    children: { //first child
        parent: null,
        children:{ // grand child
            parent: null,
            sibling:null,
            children: null,
            style: {
                backgroundColor: "red",
                color: "white"
            },
            tag: "p",
            value: "Grand Child"
        },
        style: {
            backgroundColor: "red",
            color: "white"
        },
        tag: "div",
        value: "Child"
    },
    style: {
        backgroundColor: "red",
        color: "white"
    },
    tag: "div",
    value: "Parent"
}

export default reactSnippet;
