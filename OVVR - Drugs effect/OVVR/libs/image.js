
(function(){
    define({
        load : function(name, req, onLoad, config){
            var img;
            if(config.isBuild){
                onLoad(null); //avoid errors on the optimizer since it can't inline image files.
            }else{
                img = new Image();
                img.onload = function(evt){
                    onLoad(img);
                    delete img.onload; //release memory - suggested by John Hann
                };
                img.src = require.toUrl(name);
            }
        },
    });
}());
