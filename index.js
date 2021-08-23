// const documentStyle = document.documentElement.style;
// const element = document.querySelector('.awesome');
// const dimensions = element.getBoundingClientRect();
// const { width, height } = dimensions;

// element.addEventListener('mousemove', e => {
//   const x = e.clientX - dimensions.left;
//   const y = e.clientY - dimensions.top;  
//   const dx = x - width / 2;
//   const dy = y - height / 2;
  
//   documentStyle.setProperty('--rx', `${dy / -1}deg`);
//   documentStyle.setProperty('--ry', `${dx / 10}deg`);
// });

// element.addEventListener('mouseleave', e => {
//   documentStyle.setProperty('--rx', '0');
//   documentStyle.setProperty('--ry', '0');
//   documentStyle.setProperty('--ty', '0');
// });

// element.addEventListener('mousedown', e => {
//   documentStyle.setProperty('--tz', '-24px');
// });

// element.addEventListener('mouseup', e => {
//   documentStyle.setProperty('--tz', '-12px');
// });


function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
    }
    

    
}

const event1 = () => {
      var dots1 = document.getElementById("dots1");
  var moreText1 = document.getElementById("more1");
    var btnText1 = document.getElementById("myBtn1");
          if (dots1.style.display === "none") {
    dots1.style.display = "inline";
    btnText1.innerHTML = "Read more"; 
    moreText1.style.display = "none";
  } else {
    dots1.style.display = "none";
    btnText1.innerHTML = "Read less"; 
    moreText1.style.display = "inline";
    }
}


const event2 = () => {
      var dots2 = document.getElementById("dots2");
  var moreText2 = document.getElementById("more2");
    var btnText2 = document.getElementById("myBtn2");
          if (dots2.style.display === "none") {
    dots2.style.display = "inline";
    btnText2.innerHTML = "Read more"; 
    moreText2.style.display = "none";
  } else {
    dots2.style.display = "none";
    btnText2.innerHTML = "Read less"; 
    moreText2.style.display = "inline";
    }
}
