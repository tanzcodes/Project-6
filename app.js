function calculate() {
            // Numbers aur operation ko select karna
            let n1 = parseFloat(document.getElementById("num1").value);
            let n2 = parseFloat(document.getElementById("num2").value);
            let op = document.getElementById("operation").value;
            let resText = document.getElementById("result");
            let ans = 0;

            // Check karna ke numbers sahi hain
            if (isNaN(n1) || isNaN(n2)) {
                resText.innerText = "Please enter numbers!";
                return;
            }

            // Operation ke mutabiq calculation
            if (op === "add") {
                ans = n1 + n2;
            } else if (op === "sub") {
                ans = n1 - n2;
            } else if (op === "mul") {
                ans = n1 * n2;
            } else if (op === "div") {
                ans = n1 / n2;
            }

            // Result dikhana
            resText.innerText = "Result: " + ans;
        }