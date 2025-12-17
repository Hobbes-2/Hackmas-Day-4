import { listPresents } from "./giftbag";

function constructor() {
    const presents = listPresents();
    var out: string[] = [];
    for (var present of presents) {
        out.push(JSON.stringify(present));
    }
    return out.join("\n");
}

export function renderIndex() {
    return `<!doctype html>
    <html>
    <title>Haxmas Christmas Presents</title>
    <body style="background-color: black; color: white">
    <h1>haxmas-day-4</h1>
    <p>
    Welcome to the gift box! Here you can fufill others gift wishes, or
    post your own! See the list of pending gifts!
    </p>
    <p>
    <br />
    </p>

    <form>
    <label>What would you like? </label>
    <input type="text" id="presentInput" name="presentInput" />
    <button type="button" id="submit">Submit</button>
    </form>
    <script>
    let savedValue = "";
    document.getElementById("submit").addEventListener("click", (e) => {
        e.preventDefault();
        savedValue = document.getElementById("presentInput").value;
        fetch("/api/presents", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                item: savedValue,
            }),
        });
    location.reload(true);
    });
    </script>
    <h2>Presents</h2>
    ${constructor()}
    <li>Route: <code>api/presents</code></li>
    <li>Method: POST</li>
    <li>
    Accepts: <code>application/json</code>
    <ul>
    <li>
    Fields:
    <ul>
    <li>item: string</li>
    <li>name: string</li>
    </ul>
    </li>
    </ul>
    <pre><code class="language-sh"> curl -X POST http://localhost:3000/api/presents -H "content-type: application/json" -d "{"item":"<p style = "display: inline" id="output"></p>"}" </code></pre>
    <a href="https://haxmas.hackclub.com/"> Visit the event! </a>
    </li>
    </body>
    </html>
    `;
}
