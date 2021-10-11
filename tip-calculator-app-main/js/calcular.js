var tipElect = "";
var tipPercent;
$(".tip").on('click', function(){
    $(".tip").removeClass('active');
    $(this).addClass('active');
   // alert($(this).attr('data-value'));
   tipElect = $(this).attr('id');
})

$('#persons').on('blur', function(){
    var bills = $('#bills').val();
    tipPercent = $('#tipcustom').val();
    switch(tipElect){
        case "tip5":
            tipPercent = 5;
            break;
        case "tip10":
            tipPercent = 10;
            break;
        case "tip15":
            tipPercent = 15;
            break;
        case "tip25":
            tipPercent = 25;
            break;
        case "tip50":
            tipPercent = 50;
            break;
        case "custom":
            tipPercent = $('#tipcustom').val();
            break;
        }
    tipPercent = tipPercent /100;
    if($(this).val()<=0){
        //console.log("no puede ser menor o igual a 0")
        $('#montoTipXpersona').text("0.00");
        $('#montoTotal').text("0.00");
        $(this).addClass("field-incorrect");
        //$(this).focus();
        $('#errorPersons').show();
        setInterval(() => {
            $(this).removeClass("field-incorrect");
            $('#errorPersons').hide();
        }, 3000);
        
    }
     if(bills === ''){
        $('#bills').addClass("field-incorrect");
        $('#errorBills').show();
        setInterval(() => {
            $('#bills').removeClass("field-incorrect");
            $('#errorBills').hide();
        }, 3000);
    }
    else{
       // console.log("Bills: "+bills);
       // console.log("Porcentaje: "+tipPercent);
        //console.log("Persons: "+$(this).val()) 
     // console.log(getTipAmount(parseFloat(bills),tipPercent,parseInt($(this).val())));
     // console.log(getTotal(parseFloat(bills),tipPercent,parseInt($(this).val())));
     $('#reset').addClass('bnt-active');
     $('#montoTipXpersona').text(getTipAmount(parseFloat(bills),tipPercent,parseInt($(this).val())));
     $('#montoTotal').text(getTotal(parseFloat(bills),tipPercent,parseInt($(this).val())));
    }
    
})

function getTipAmount(bills, porcentaje, personas){
 var total = (bills + (bills * porcentaje))/(personas);
  //return `Bills: ${bills}  Porcentaje: ${porcentaje}  Personas: ${personas}`;
  return total.toFixed(2); 
}

function getTotal(bills, porcentaje, personas){
    var total = (bills * porcentaje)/personas;
    //return `Bills: ${bills}  Porcentaje: ${porcentaje}  Personas: ${personas}`;
    return total.toFixed(2); 
}

function reset(){
    if($('#reset').hasClass("bnt-active"))
    {
        $('#tipcustom').val("");
        $('#bills').val("");
        $('#persons').val("");
        $(".tip").removeClass('active'); 
        $('#montoTipXpersona').text("0.00");
        $('#montoTotal').text("0.00");
        $('#reset').removeClass('bnt-active');
    }
        //console.log("click");
}

