var plan_el = document.getElementById("plan");
var price_el = document.getElementById("price");
const urlParams = new URLSearchParams(window.location.search);
const plan_param = urlParams.get('plan');
const price_param = urlParams.get('price');
plan_el.innerHTML = plan_param;
price_el.innerHTML = price_param;

var submit = document.getElementById("submission");
submit.onclick = function(){
    var form = document.getElementById("myform");
    var csv = "" + plan_param + "," + price_param + "\n";
    for ( var i = 0; i < form.elements.length-1; i++ ){
        var e = form.elements[i];
        var val = e.value;
        if(e.className === "form-check-input"){
            if(e.checked){
                val = "si";
            }
            else continue;
        }
        csv += e.id + "," + val + "\n";
    }
    console.log(csv);

}
