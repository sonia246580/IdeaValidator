const form = document.querySelector ("#ideaForm");
const result = document.querySelector("#result");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const ideaName = document.querySelector("#ideaName").value.trim();
    const problem = document.querySelector("#problem").value.trim();
    const audience = document.querySelector("#audience").value.trim();
    const severity = document.querySelector("#severity").value;
    
    let score = 0;

    if (ideaName.length > 2) {
        score += 15;
    }

    if (problem.length > 50) {
        score += 35;
    } else if (problem.length > 20) {
        score += 20;
    }

    if (audience.length > 10) {
        score += 25;
    }

    if (severity === "Critical") {
        score += 25;
    } else if (severity === "Important") {
        score += 15;
    } else if (severity === "Nice to have") {
        score += 5;
    }

    result.classList.remove("hidden");

    result.innerHTML = `
        <div class = "result-card">
            <p class = "result-label">Idea Score</p>
            <h2>${score}/100</h2>

            <p class = "result-text">
                ${getScoreMessage(score)}
            </p>
        </div>
    `;
})

function getScoreMessage(score) {
    if (score >= 75) {
        return "Strong potential. This idea solves a clear problem and is worth validating with real users.";
    }

    if (score >= 45) {
        return "Promising idea. Some assumptions still need validation before building the MVP.";
    }

    return "Needs more discovery. try to define the user problem and target audience more clearly.";
    
}