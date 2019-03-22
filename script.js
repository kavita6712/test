function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



//Document Ready.....
(function() {
   
   testmonialSlider (); 


// When the user scrolls the page, execute myFunction 
window.onscroll = function() {stickyHandler()};

// Get the header
var header = document.getElementById("temp");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyHandler() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



})();



function testmonialSlider () {
  var _wrapper = document.getElementById("testimonials-slides"); 
  var _slides = document.getElementsByClassName("slide");
  var _margin = 100; 
  var _slideWidth = _slides[0].offsetWidth + _margin; 



  _wrapper.style.width = (_slideWidth*_slides.length) + "px";
  
  var _active = findActiveSlide(_slides);

  adjustSlider(_wrapper, _slideWidth, _slides, _active);



  document.getElementById("left-arrow").addEventListener("click", function(){
    var _active = findActiveSlide(_slides)-1;
    if(_active < 0 ) {
      _active = 0;
    }
    removeActive(_slides);
    _slides[_active].classList.add('active');
    adjustSlider(_wrapper, _slideWidth, _slides, _active);
  });

  document.getElementById("right-arrow").addEventListener("click", function(){
    var _active = findActiveSlide(_slides)+1;
    if(_active >=  _slides.length) {
      _active = _slides.length-1;
    }
    removeActive(_slides);
    _slides[_active].classList.add('active');
    adjustSlider(_wrapper, _slideWidth, _slides, _active);
  });

}

//function prev

function adjustSlider(_wrapper, _slideWidth, _arr,_pointer) {
  if (window.matchMedia("(min-width: 769px)").matches) {
          //console.log("769");
          var _newPos = (_slideWidth * (_pointer) )*-1 + (100);
          //console.log('more' +_newPos);
          _wrapper.style.left = _newPos + 'px';
      } else {
          //console.log("768");
          var _newPos = (_slideWidth * (_pointer) )*-1 + (-30);
          //console.log('less' +_newPos);
          _wrapper.style.left = _newPos + 'px';
      }
      return false;
}

function removeActive(_arr) {
  for(var i in _arr) {
    if(_arr[i].classList) {
      _arr[i].classList.remove("active");
    }
  }
}


function findActiveSlide(_arr) {
  for(var i in _arr) {
    var flag = false;
    for (var k in _arr[i].classList) {
        if(_arr[i].classList[k] == 'active') {
          flag = true;
          break;  
        }
    } 
    if(flag) {
      return i*1;
    }
  }
  return -1;
}



