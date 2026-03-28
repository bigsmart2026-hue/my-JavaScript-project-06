function staffDetails() {

    let staff = [
        { name: "Amara", department: "Sales", salary: 120000 },
        { name: "Bola", department: "Tech", salary: 250000 },
        { name: "Chibike", department: "Sales", salary: 135000 },
        { name: "Dele", department: "Tech", salary: 310000 }
    ];

    // Print staff in Tech department
    console.log("Tech Department Staff:");

    for (let i = 0; i < staff.length; i++) {
        if (staff[i].department === "Tech") {
            console.log(staff[i].name);
        }
    }

    // Find staff with highest salary
    let highestSalary = staff[0].salary;
    let highestPaid = staff[0].name;

    for (let i = 1; i < staff.length; i++) {
        if (staff[i].salary > highestSalary) {
            highestSalary = staff[i].salary;
            highestPaid = staff[i].name;
        }
    }

    console.log("Highest paid staff:", highestPaid);
}

staffDetails();