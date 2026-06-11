function addNode() {

    let content =
        document.getElementById("txtContent").value.trim();

    let position =
        parseInt(
            document.getElementById("txtPosition").value
        );

    if(content === "")
    {
        alert("Enter content");
        return;
    }

    let ul =
        document.getElementById("nodeList");

    let li =
        document.createElement("li");

    li.textContent = content;

    let total = ul.children.length;

    if(position > total || position <= 0 || isNaN(position))
    {
        ul.appendChild(li);
    }
    else
    {
        ul.insertBefore(
            li,
            ul.children[position - 1]
        );
    }
}
function removeNode() {

    let position =
        parseInt(
            document.getElementById("txtRemovePos").value
        );

    let ul =
        document.getElementById("nodeList");

    let total = ul.children.length;

    if(position < 1 || position > total)
    {
        alert("Invalid position");
        return;
    }

    ul.removeChild(
        ul.children[position - 1]
    );
}
function modifyNode() {

    let newContent =
        document.getElementById("txtNewContent").value;

    let position =
        parseInt(
            document.getElementById("txtModifyPos").value
        );

    let ul =
        document.getElementById("nodeList");

    let total = ul.children.length;

    if(position < 1 || position > total)
    {
        alert("Invalid position");
        return;
    }

    let newNode =
        document.createElement("li");

    newNode.textContent = newContent;

    ul.replaceChild(
        newNode,
        ul.children[position - 1]
    );
}