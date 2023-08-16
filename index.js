document.getElementById('btn').addEventListener('click',function(){
    const coupon = document.getElementById('input');
    const couponCode =coupon.value;
    if(couponCode === '30%'){
    const discountString = .3 ;
    const discount =parseFloat(discountString)
    const takaString = document.getElementById('taka').innerText;
    const taka = parseFloat(takaString);
    const discountPrice = taka*discount;
    const newPrice = taka -discountPrice;
    document.getElementById('offerprice').innerText=newPrice;
    }
    else{
        document.getElementById('offerprice').innerText=taka;
    }
})