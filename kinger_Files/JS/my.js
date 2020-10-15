var pro_0=document.getElementById('Nanly32');
var pro_1=document.getElementById('Myall');
var pro_2=document.getElementById('BitSpeak');
var pro_3=document.getElementById('Qube3D');var PRO_MDL=[pro_0,pro_1,pro_2,pro_3];

var PRK_1=["https://www.youtube.com/embed/IoVDOWMxsIM","https://www.youtube.com/embed/IK2QFfiSclc","https://www.youtube.com/embed/ocK-64jsfHM"];
var p1=["nanly 32","kinger_Files/IMG/Nanly32/g192.png","kinger_Files/IMG/Nanly32/N%202500x1665.jpg","Nanly 32 is android games colection app that is inspirated from old school MAME32 (ahh whata enjoyble woriless time,,). This app  allow you to play nonstop anywere what you wana , how you wanna  from reach selectio of 500+ games. this app use free game from mostwanted games html5 (HERE HAVE THYR CREDIT !!)that also allow you to save you progres in RAM memory. Once played when you have internet conection , you will be avaibele to play it endles weil the app isht shut it down.. see any video there is better discribed ","playing virtuel games in real world","simple 'best case scenario' exemples ","home made cinematic video","fine art of games trend","What You See Is What You Get","this is simple demonstration","get it from oficial google play store","kinger_Files/IMG/Nanly32/googlePLAY.png","23 ja 2015","1kinger"];
var t1=["mobile divace : Android (kitkat an newer)","memory ROM sortage : 3,17 MB","memory RAM usage : 20-30 MB","app  version available (in plan): N32 ,N32+ssfd ","uste nekoje teksce : ke se dodade tuka"];

var vdo_1 =document.getElementsByClassName("FRvideo")[0];
var vdo_2 =document.getElementsByClassName("FRvideo")[1];
var vdo_3 =document.getElementsByClassName("FRvideo")[2];var vdo=[vdo_1,vdo_2,vdo_3];

/// OPNrjk ova otvara modal i go mesti ovaka spored ovie parametri samo za nanly
function OPN_P(a){PRO_MDL[a].style="display:block;";

if(a==0){
for(i=0;i<3;i++){vdo[i].src=PRK_1[i];vdo[i].style="display:block;";}
document.getElementsByClassName("*proekt_name")[0].innerHTML=p1[0];
document.getElementsByClassName("*proekt_name")[1].innerHTML=p1[0];
document.getElementById('*proekt_192png').src=p1[1];
document.getElementById('*proekt_2500x1665jpg').src=p1[2];
document.getElementById('*proekt_D0').innerHTML=p1[3];
document.getElementById('*proekt_D1_pdnslv').innerHTML=p1[4];
document.getElementById('*proekt_D1_ifo').innerHTML=p1[5];
document.getElementById('*proekt_D2_pdnslv').innerHTML=p1[6];
document.getElementById('*proekt_D2_ifo').innerHTML=p1[7];
document.getElementById('*proekt_D3_pdnslv').innerHTML=p1[8];
document.getElementById('*proekt_D3_ifo').innerHTML=p1[9];
document.getElementById('*proekt_dwlTXT').innerHTML=p1[10];
document.getElementById('*proekt_dwldIMG').src=p1[11];
document.getElementById('*proekt_rlsd').innerHTML=p1[12];
document.getElementById('*proekt_BY').innerHTML=p1[13];

for(i=0;i<5;i++){document.getElementsByClassName("w3-input")[i].innerHTML=t1[i];}}}



function CLSrjk(a){ PRO_MDL[a].style="display:none;";

document.getElementById("mySidebar").style="display:none;";
if(a==0){	
for(i=0;i<3;i++){vdo[i].style="display:none;";vdo[i].src="";}}}



// Slideshow
var slideIndex = 1;showDivs(slideIndex);
function plusDivs(n) {showDivs(slideIndex += n);}
function currentDiv(n) {showDivs(slideIndex = n);}
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demodots");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {x[i].style.display = "none";}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");}
  x[slideIndex-1].style.display = "block";} showDivs(slideIndex);


// Script for side navigation
function w3_open() {var x = document.getElementById("mySidebar");
  x.style.width = "300px";
  x.style.paddingTop = "10%";
  x.style.display = "block";}

// Used to toggle the menu on smaller screens when clicking on the menu button
function openNav() {
  var xR = document.getElementById("navDemo");
  if (xR.className.indexOf("w3-show") == -1) {
    xR.className += " w3-show";}else{
	xR.className = xR.className.replace(" w3-show", "");}}

function openNavCL() {
  if(xR.className.indexOf("w3-show") == -1) {
    xR.className += " w3-show";}else{
	xR.className= xR.className.replace(" w3-show", "");}}

function myFCP() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;}

function outFunc() {var tooltip = document.getElementById("myTooltip");tooltip.innerHTML = "Copy to clipboard";}

function googleTranslateElementInit() {new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL}, 'google_translate_element');}