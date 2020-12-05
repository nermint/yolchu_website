//model automobil
$(document).on('click','.image-side img',function(){
    $(this).addClass('selected-car').siblings().removeClass('selected-car');
});


// scroll to top

$(document).ready(function(){
    //show/hide button
    $(window).scroll(function(){
      if($(this).scrollTop() > 200){
        $('.scrollTop').fadeIn();
      }else{
        $('.scrollTop').fadeOut();
      }
    });

    //smooth scrolling to top
    $('.scrollTop').click(function(){
      $('html,body').animate(
        {scrollTop:0},1000
      )
    });
  });


// switch on tabs
$('#defaultOpen').click();

function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }


   // dropdown menu-search

   function autocomplete(inp, arr) {
  
    var currentFocus;
  
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
       
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
       
        this.parentNode.appendChild(a);
       
        for (i = 0; i < arr.length; i++) {
         
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
           
            b = document.createElement("DIV");
            
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
           
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            
            b.addEventListener("click", function(e) {
               
                inp.value = this.getElementsByTagName("input")[0].value;
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          currentFocus++;
  
          addActive(x);
        } else if (e.keyCode == 38) { //up
          currentFocus--;
        
          addActive(x);
        } else if (e.keyCode == 13) {
         
          e.preventDefault();
          if (currentFocus > -1) {
           
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
     
      if (!x) return false;
     
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
     
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
     
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }

    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }
  
  
  var countries = ["Bakı","Gəncə","Sumqayıt","Naxçıvan","Balakən","Quba","Qusar","Şamaxı","Qəbələ","İsmayıllı","Gədəbəy"];
  var models=["Acura","Aston Martin","Audi","BMW","Buick","Foday"];
  /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
  autocomplete(document.getElementById("from"), countries);
  autocomplete(document.getElementById("to"), countries);
  autocomplete(document.getElementById("from-2"), countries);
  autocomplete(document.getElementById("to-2"), countries);
  autocomplete(document.getElementById("choose-marka"), models);
  autocomplete(document.getElementById("choose-marka-2"), models);


// add place

  $(document).ready(function(){  
    var i=1;  
    $('#add').click(function(){  
         i++;  
         $('#dynamic_field').append('<tr id="row'+i+'"><td><input type="text" name="name[]" placeholder="Yolüstü istirahət yeri" class="form-control name_list bordered w-100 mt-3" autocomplete="off" /></td><td><button type="button" name="remove" id="'+i+'" class="btn btn-danger shadow-none btn_remove w-100 mt-3"><i class="fa fa-close"></i></button></td></tr>');  
    });  
    $(document).on('click', '.btn_remove', function(){  
         var button_id = $(this).attr("id");   
         $('#row'+button_id+'').remove();  
    });  
    $('#add-2').click(function(){  
         i++;  
         $('#dynamic_field-2').append('<tr id="row'+i+'"><td><input type="text" name="name[]" placeholder="Yolüstü istirahət yeri" class="form-control name_list bordered w-100 mt-3" autocomplete="off"/></td><td><button type="button" name="remove" id="'+i+'" class="btn btn-danger shadow-none btn_remove w-100 mt-3"><i class="fa fa-close"></i></button></td></tr>');  
    });  
    $(document).on('click', '.btn_remove', function(){  
         var button_id = $(this).attr("id");   
         $('#row'+button_id+'').remove();  
    }); 
    });  


