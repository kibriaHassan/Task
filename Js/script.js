function calculateResult() {

    let studentName = document.getElementById("studentName").value;
    let marksInput = document.getElementById("marks").value;

    if (studentName === "" || marksInput === "") {
        alert("Please fill all fields");
        return;
    }

    // Convert input string to array
    let marks = marksInput.split(",").map(Number);

    // Calculate total & average
    let total = 0;
    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }

    let average = total / marks.length;

    // Grade logic
    let grade;
    if (average >= 80) {
        grade = "Excellent";
    } else if (average >= 60) {
        grade = "Good";
    } else if (average >= 40) {
        grade = "Pass";
    } else {
        grade = "Fail";
    }

    // Highest mark function
    function findHighestMark(arr) {
        let highest = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > highest) {
                highest = arr[i];
            }
        }
        return highest;
    }

    let highestMark = findHighestMark(marks);

    // Count vowels
    let vowels = "aeiouAEIOU";
    let vowelCount = 0;

    for (let i = 0; i < studentName.length; i++) {
        if (vowels.includes(studentName[i])) {
            vowelCount++;
        }
    }

    // Display result
    document.getElementById("result").innerHTML = `
        <strong>Student Name:</strong> ${studentName}<br>
        <strong>Total Marks:</strong> ${total}<br>
        <strong>Average Marks:</strong> ${average.toFixed(2)}<br>
        <strong>Highest Mark:</strong> ${highestMark}<br>
        <strong>Grade Result:</strong> ${grade}<br>
        <strong>Vowels in Name:</strong> ${vowelCount}
    `;
}