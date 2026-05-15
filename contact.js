document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const inputs = document.querySelectorAll("input, textarea");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let empty = false;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                empty = true;
                input.style.border = "2px solid red";
            } else {
                input.style.border = "2px solid #a68942";
            }
        });

        if (empty) {
            alert("⚠️ Please fill all fields!");
        } else {
            alert("Message sent successfully ✅");

            inputs.forEach(input => input.value = "");
        }
    });
});