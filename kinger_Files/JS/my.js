
var PRO_MDL={
0:document.getElementById('Nanly32'),
1:document.getElementById('Myall'),
2:document.getElementById('BitSpeak'),
3:document.getElementById('Sezonjobs')}

function OPN_P(a){PRO_MDL[a].style="display:block;";
mestiVIDEA(!a);}

function CLSrjk(a){PRO_MDL[a].style="display:none;";

document.getElementById("mySidebar").style="display:none;";
if(!a){let vdo =document.getElementsByClassName("FRvideo");	
for(i in vdo){vdo[i].src="";}}}



// Slideshow
var slideIndex = 1;showDivs(slideIndex);
function plusDivs(n) {showDivs(slideIndex += n);}
function currentDiv(n) {showDivs(slideIndex = n);}
function showDivs(n) {
  var i;
  let x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demodots");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {x[i].style.display = "none";}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");}
  x[slideIndex-1].style.display = "block";} showDivs(slideIndex);


// Script for side navigation
function w3_open() {let x = document.getElementById("mySidebar");
  x.style.width = "300px";
  x.style.paddingTop = "10%";
  x.style.display = "block";}

function openNav() { let xR = document.getElementById("navDemo");
  if (xR.className.indexOf("w3-show") == -1) {
    xR.className += " w3-show";}else{
	xR.className = xR.className.replace(" w3-show", "");}}

function openNavCL() { let xR = document.getElementById("navDemo");
  if(xR.className.indexOf("w3-show") == -1) {
    xR.className += " w3-show";}else{
	xR.className= xR.className.replace(" w3-show", "");}}


function outFunc() {var tooltip = document.getElementById("myTooltip");tooltip.innerHTML = "Copy to clipboard";}

function googleTranslateElementInit(){new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL}, 'google_translate_element');}