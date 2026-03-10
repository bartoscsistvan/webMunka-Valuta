//Gyapjas Andras 12/C

function go(){
    let toConvert = document.getElementById("selectors").value;
    let linker =`https://hexarate.paikama.co/api/rates/HUF/${toConvert}/latest`; 

    fetch(linker)
    .then(response => response.json())
    .then(data => {
    console.log(data);

    let p = document.getElementById("ret");
    let money2Conv = document.getElementById("money").value;
    p.innerHTML = money2Conv + " FT = " +(money2Conv*data.data.mid).toFixed(2) +" "+ toConvert;
});
}


