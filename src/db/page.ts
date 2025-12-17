import { presents } from "./schema"

export const index = '<!DOCTYPE html>\
<html>\
<title>Haxmas Christmas Messages API</title>\
<body style="background-color:black; color:white">\
<h1>haxmas-day-4</h1>\
<p>Welcome to the gift box! Here you can fufill others gift wishes, or post your own! See the list of pending gifts!<p>\
<strong>test</strong>\
<br>\
<form id = "myForm">\
    <label>What would you like? </label>\
    <input type = "text" id = "presentInput" name = "presentInput"></input>\
    <button type="button" id = "submit">Submit</button>\
</form>\
<script>\
    let savedValue = "";\
    document.getElementById("submit").addEventListener("click", () => {\
    savedValue = document.getElementById("presentInput").value;\
    document.getElementById("output").textContent = savedValue;\
});\
</script>\
<p>'+presents+'</p>\
<ul>\
<li> Route: <code>api/presents</code> </li>\
<li>Method: POST<li>Accepts: <code>application/json</code>\
<ul><li>Fields:<ul><li>item: string<li>name: string </ul></ul> <pre><code class="language-sh"> curl -X POST http://localhost:3000/api/presents -H "content-type: application/json" -d "{"item":"<p style = "display: inline" id="output"></p>"}" </code>\
</ul>\
<a href = "https://haxmas.hackclub.com/"> Visit the event! </a>\
</body>\
</html>'
