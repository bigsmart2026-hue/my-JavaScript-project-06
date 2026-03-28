function checkStudents() {

    let students = [
        { name: "Big", score: 72 },
        { name: "Smart", score: 45 },
        { name: "Victor", score: 88 },
        { name: "Tochukwu", score: 50 }
    ];

    let passCount = 0;

    for (let i = 0; i < students.length; i++) {

        console.log(students[i].name + " scored " + students[i].score);

        if (students[i].score >= 50) {
            passCount++;
        }
    }

    console.log(passCount + " student(s) passed");
}

checkStudents();