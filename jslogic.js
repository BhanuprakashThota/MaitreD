function restGrandtotal()
{
     const rIntialTotal=parseFloat(document.querySelector('#total').value)
     const rTipPerRate=parseFloat(document.querySelector('#rate').value)
         
     const rTip=rIntialTotal*(rTipPerRate/100)
     const rTaxRate=5.50
     const rTax=rIntialTotal*(rTaxRate/100)
     const rGrandTotal=rIntialTotal+rTip+rTax;

     document.getElementById("Tip").innerHTML = rTip.toFixed(2);
     document.getElementById("Tax").innerHTML = rTax.toFixed(2);
     document.getElementById("GrandTotal").innerHTML = rGrandTotal.toFixed(2);
     
}
 