let weekList = ['Week1', 'week2', 'week3', 'week4', 'week5', 'week6', 'week7', 'week8', 'week9', 'week10', 'week11', 'week12', 'week13', 'week14']
const assignmentList = document.querySelector('.assignment-list')
var weekNav = document.querySelector(".assignment-list");
var weekDirs = ["weeks/week_1/index.html", "weeks/week_2/index.html", "weeks/week_3/index.html", "weeks/week_4/index.html", "weeks/week_5/index.html", "weeks/week_6/index.html", "weeks/week_7/index.html", "weeks/week_8/index.html", "weeks/week_9/index.html", "weeks/week_10/index.html", "weeks/week_11/index.html", "weeks/week_12/index.html", "weeks/week_13/index.html", "weeks/week_14/index.html", ];
for (i = 0; i < weekList.length; i++) {
    var weekLine = document.createElement("li");
    var a = document.createElement("a");
    var link = document.createTextNode(weekList[i]);
    weekLine.classList.add("weeks");
    a.title = weekList[i];
    a.href = weekDirs[i];
    a.appendChild(link);
    weekLine.appendChild(a);
    weekNav.appendChild(weekLine);
}