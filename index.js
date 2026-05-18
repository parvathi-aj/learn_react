const form = document.getElementById("markForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const maths = Number(document.getElementById("maths").value);
  const science = Number(document.getElementById("science").value);
  const english = Number(document.getElementById("english").value);
  const social = Number(document.getElementById("social").value);
  const computer = Number(document.getElementById("computer").value);
  const physics = Number(document.getElementById("physics").value);

  const subjects = ["Mathematics", "Science", "English", "Social Studies", "Computer Science", "Physics"];
  const marks = [maths, science, english, social, computer, physics];

  let total = 0;
  for (let mark of marks) {
    total += mark;
  }

  const average = total/ marks.length;

  let subjectResults = "";
  let overallResult = "Passed";
  for (let i=0; i<marks.length; i++){
    marks[i] >= 40 ? subjectResults += `${subjects[i]}:${marks[i]} - Passed\n` : subjectResults += `${subjects[i]}:${marks[i]} - Failed\n`;
    overallResult = marks[i] < 40 ? "Failed" : overallResult;
  }

  const result = document.getElementById("result");
  result.innerHTML = `
  <h2>Student Results</h2>
  ${subjectResults}
  <hr>
    <p>Total Marks: ${total}</p>
    <p>Average Marks: ${average.toFixed(2)}</p>
    <p>Overall Result: ${overallResult}</p>`;
    });
