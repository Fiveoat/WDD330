const links = []
for (i = 1; i < 12; i++) {
    links.push({
        label: 'Week' + i.toString(),
        url: "weeks/week" + i.toString() + "/index.html"
    })
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

const other_links = ['FinalApp', 'TodoApp']
for (i = 0; i < other_links.length; i++) {
    let assignment = document.createElement("li");
    let a = document.createElement("a");
    let link = document.createTextNode(other_links[i]);
    assignment.classList.add("weeks");
    a.title = other_links[i];
    a.href = 'weeks/' + other_links[i] + '/index.html'
    a.appendChild(link);
    assignment.appendChild(a);
    assignmentList.appendChild(assignment);
}