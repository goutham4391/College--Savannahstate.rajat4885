$(document).ready(function (e) {
    e(".yamm .dropdown-menu").click(function (e) {
        e.stopPropagation() 
    })
    
    
    $.ajax({
                url: "../../../../scripts/emergency.txt",
                success: function(data){
                    try{
                        if(data.length >5){
                        $("<div style='color:white;background-color:red;padding:5px;text-align:center;'>" + data + " <a style='color:white;text-decoration:underline;background-color:transparent;font-weight:bold;' href='https://www.savannahstate.edu/hurricane/'>more info</a></div>").appendTo("header");
                        }
                    }catch(ex){}
                }
            });
    
    
});