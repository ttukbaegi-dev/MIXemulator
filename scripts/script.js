 function handle_lineno(ev) {
    // LineNumber id := line-<number>
    let lineno = parseInt(this.getAttribute("id").split("-")[1]);

    let color = this.style["background-color"];
    if (color = "#33FF33")
        this.style["background-color"] = "initial";
    else
        this.style["background-color"] = "#33FF33";
 }
 
 class LineNumber extends HTMLParagraphElement {
    constructor() {
        this.addEventListener('mouseup', handle_lineno);
        super();
    }
 }