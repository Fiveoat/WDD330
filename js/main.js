const links = []
for (i=1; i < 15; i++){
    links.push({label: 'Week' + i.toString(), url: "weeks/week" + i.toString() + "/index.html"})
}
const assignmentList = document.querySelector(".assignment-list");
for (i = 0; i < links.length; i++) {
    let assignment = document.createElement("li");
    let a = document.createElement("a");
    let link = document.createTextNode(links[i].label);
    assignment.classList.add("weeks");
    a.title = links[i].label;
    a.href = links[i].url;
    a.appendChild(link);
    assignment.appendChild(a);
    assignmentList.appendChild(assignment);
}

let assignment = document.createElement("li");
let a = document.createElement("a");
let link = document.createTextNode('TodoApp');
assignment.classList.add("weeks");
a.title = 'TodoApp'
a.href = 'weeks/TodoApp/index.html'
a.appendChild(link);
assignment.appendChild(a);
assignmentList.appendChild(assignment);

let assignment = document.createElement("li");
let a = document.createElement("a");
let link = document.createTextNode('FinalApp');
assignment.classList.add("weeks");
a.title = 'FinalApp'
a.href = 'weeks/FinalApp/index.html'
a.appendChild(link);
assignment.appendChild(a);
assignmentList.appendChild(assignment);

