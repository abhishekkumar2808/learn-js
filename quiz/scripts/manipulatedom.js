window.onload = function() {
  document.getElementById('addTableBtn').addEventListener('click', addTable);
}

function createTRNode(colNodes) {
  let trNode = document.createElement("tr");
  colNodes.forEach(function(colNode) {
    trNode.appendChild(colNode);
  })
  return trNode;
}

function createTDNode(childNode, id) {
  let tdNode = document.createElement("td");
  tdNode.id = id;
  tdNode.appendChild(childNode);
  return tdNode;
}

function createTxtNode(txt) {
  let txtNode = document.createTextNode(txt);
  return txtNode;
}

function handlleEditButtonClick(index){

  let cell = document.getElementById(`col-${index}`);
  cell.innerHTML = ' <input type="text" placeholder="enter (x,y)"></input>'

}

function createButtonNode(text, index = ''){

  let buttonNode = document.createElement("button");
  buttonNode.innerText = text;

  buttonNode.onclick = () => {handlleEditButtonClick(index);}
  return buttonNode;
}

function addTable() {
  const tableNode = document.createElement("table");
  for(let i = 0; i < 3; i++) {
    let col1 = createTDNode(createTxtNode("Cell (" + i + ", 0)"), `col-${i}`);
    let col2 = createButtonNode("Edit Text", i);
    tableNode.appendChild(createTRNode([col1, col2]));
  }
  document.getElementById("root").appendChild(tableNode);
}
