$(function(){
	window.onload = (e) => {
      
		window.addEventListener('message', (event) => {
           
			var item = event.data;
			if (item !== undefined && item.type === "ui") {
               
				if (item.state === "g") {
                    $("#neutralzone").hide();
                    $("#redzone").hide();
                    $("#greenzone").hide();

                    $("#greenzone").show();

				} else if (item.state === "r") {
                    $("#neutralzone").hide();
                    $("#redzone").hide();
                    $("#greenzone").hide();

                    $("#redzone").show();
                }
                else{
                    $("#neutralzone").hide();
                    $("#redzone").hide();
                    $("#greenzone").hide();

                    $("#neutralzone").hide();
                }
			}
		});
	};
});