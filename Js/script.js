function analyzeResult() {

    // Student name
    let studentName = "Rahim";

    // Marks array
    let marks = [78, 45, 90, 32, 67];

    // Calculate total & average
    let totalMarks = 0;
    for (let i = 0; i < marks.length; i++) {
        totalMarks += marks[i];
    }

    let averageMarks = totalMarks / marks.length;

    // Grade condition
    let grade;
    if (averageMarks >= 80) {
        grade = "Excellent";
    } else if (averageMarks >= 60) {
        grade = "Good";
    } else if (averageMarks >= 40) {
        grade = "Pass";
    } else {
        grade = "Fail";
    }

    // Function to find highest mark
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

    // Count vowels in student name
    let vowels = "aeiouAEIOU";
    let vowelCount = 0;

    for (let i = 0; i < studentName.length; i++) {
        if (vowels.includes(studentName[i])) {
            vowelCount++;
        }
    }

    // Output
    document.getElementById("output").innerHTML = `
        <p><strong>Student Name:</strong> ${studentName}</p>
        <p><strong>Total Marks:</strong> ${totalMarks}</p>
        <p><strong>Average Marks:</strong> ${averageMarks.toFixed(2)}</p>
        <p><strong>Highest Mark:</strong> ${highestMark}</p>
        <p><strong>Grade Result:</strong> ${grade}</p>
        <p><strong>Number of Vowels:</strong> ${vowelCount}</p>
    `;
}