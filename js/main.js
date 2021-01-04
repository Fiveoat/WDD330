const links = []
for (i=1; i < 15; i++){
    links.push({label: 'Week' + i.toString(), url: "weeks/week" + i.toString() + "/index.html"})
}
const assignmentList = document.querySelector(".assignment-list");
for (i = 0; i < links.length; i++) {
    var assignment = document.createElement("li");
    var a = document.createElement("a");
    var link = document.createTextNode(links[i].label);
    assignment.classList.add("weeks");
    a.title = links[i].label;
    a.href = links[i].url;
    a.appendChild(link);
    assignment.appendChild(a);
    assignmentList.appendChild(assignment);
}