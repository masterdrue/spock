//Login Modal Button

$(function() {
    $("#loginModalButton").click(function(){
        $('#loginModal').modal('show'); 
    
    });
});

// Transmission Modeling Modal Button
$(function() {
    $("#transModalButton").click(function(){
        $('#transModal').modal('show'); 
    
    });
});

/* Toggle CV-19 Dashboard */
$(function() {
    $("#btnDashboard").click(function(){
        if ($("#dashboard").collapse("hide").hasClass("dashboard")) {  
        } else {
            $("#dashboard").collapse("show");  
        }
    });
});

/* Random Last Update Numbers */

  document.querySelector('#randomValueMid').textContent = Math.floor(Math.random() * 60) + 1;
  document.querySelector('#randomValueRight').textContent = Math.floor(Math.random() * 60) + 1;
  document.querySelector('#randomValueLeft').textContent = Math.floor(Math.random() * 60) + 1;

//Tool Tip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});