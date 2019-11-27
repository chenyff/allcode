var tool = {
    showMsg:function(txt){
        var gift = document.createElement('p');
        gift.className = 'gift animated fadeInRight';
        gift.innerHTML = txt;
        document.body.appendChild(gift);
        setTimeout(function(){
            gift.className = 'gift animated fadeOutLeft';
            setTimeout(function(){
                document.body.removeChild(gift);
            },2000)
            //
        },2000)
    },

}
            