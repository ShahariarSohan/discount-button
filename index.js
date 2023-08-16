document.getElementById('btn').addEventListener('click',function(){
    const coupon = document.getElementById('input');
    const couponString =coupon.value
    const couponCode =parseFloat(couponString)
    if(couponString.length===0){
        const heading =document.getElementById('heading')
        heading.innerText='আপনার কুপনটি জমা দিন' 
    }
    else if(couponCode === 30){
    const discountString =.3;
    const discount =parseFloat(discountString)
    const takaString = document.getElementById('taka').innerText;
    const taka = parseFloat(takaString);
    const discountPrice = taka*discount;
    const newPrice = taka - discountPrice;
    document.getElementById('offerprice').innerText=newPrice;
    }
    else{
        const heading =document.getElementById('heading')
        heading.innerText='আপনার জন্য কোনো ডিসকাউন্ট নেই'        
    }
})
