function myFunction() {
    let newName: string="Melissa";
    newName=(<HTMLInputElement>document.getElementById("fname")).value;
    document.getElementById("greeting")!.innerHTML = "Howdy " + newName + "!";
}