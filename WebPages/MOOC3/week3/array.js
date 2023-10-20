var grade = [2, 5, , 9, 8, , 8];
var sum = 0;
var count = 0;

if(grade.length != 0) {
    for(index = 0; index < grade.length; index++) {
        if(grade[index] != undefined) {
            sum += grade[index];
            count += 1;
        }
    }
    document.write("Average value in list: " + sum/count);
} else {
    document.write("Empty List");
}

document.getElementsByID("second").innerHTML = "What does the Fox say?";