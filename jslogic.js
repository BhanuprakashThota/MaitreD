function restGrandtotal()
{
     let rIntialTotal=parseFloat(document.querySelector('#total').value)
     let rTipPerRate=parseFloat(document.querySelector('#rate').value)
         
     let rTip=rIntialTotal*(rTipPerRate/100)
     let rTaxRate=5.50
     //let rTax=rIntialTotal*(rTaxRate/100)
     let rGrandTotal=rIntialTotal+rTip+rTaxRate;

     document.getElementById("Tip").innerHTML = rTip.toFixed(2);
    // document.getElementById("Tax").innerHTML = rTax.toFixed(2);
     document.getElementById("GrandTotal").innerHTML = rGrandTotal.toFixed(2);
     
}
 