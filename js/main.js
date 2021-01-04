let weekList = ['Week1', 'Week2', 'Week3', 'Week4', 'Week5', 'Week6', 'Week7', 'Week8', 'Week9', 'Week10', 'Week11', 'Week12', 'Week13', 'Week14']
let weekDirs = ["weeks/week1/index.html", "weeks/week2/index.html", "weeks/week3/index.html", "weeks/week4/index.html", "weeks/week5/index.html", "weeks/week6/index.html", "weeks/week7/index.html", "weeks/week8/index.html", "weeks/week9/index.html", "weeks/week10/index.html", "weeks/week11/index.html", "weeks/week12/index.html", "weeks/week13/index.html", "weeks/week14/index.html"];
const assignmentList = document.querySelector(".assignment-list");
for (i = 0; i < weekList.length; i++) {
    var weekLine = document.createElement("li");
    var a = document.createElement("a");
    var link = document.createTextNode(weekList[i]);
    weekLine.classList.add("weeks");
    a.title = weekList[i];
    a.href = weekDirs[i];
    a.appendChild(link);
    weekLine.appendChild(a);
    assignmentList.appendChild(weekLine);
}