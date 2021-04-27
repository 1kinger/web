Vue.component("p_bit_speak", {
    template: `<div class="w0-modal-content w3-card-4 w3-animate-top" style="top:0px;left:19%;">
    <header class="w3-container w3-teal w3-display-container"> 
      <span class="w3-button w3-teal w3-display-topright" onclick="CLSrjk(2);"><i class="fa fa-remove" aria-hidden="true"></i></span>
      <h4 class="*proekt_name">BitSpeak</h4></header>
 <div class="w3-container" style="padding: 0px;"><div id="myPage_2345">

<!-- Icon Bar (Sidebar - hidden on small screens)//////////////////////////nanly32 -->
<nav class="w3-sidebar w3-bar-block w3-center" style="font-size:55%;position:fixed;left:0px;top:0px;width:18%;z-index:555;overflow:hidden;">
  <!-- Avatar image in top left corner -->
  <img style="width:70%;" src="index_files/MEDIA/IMG/BitSpeak/BitSpeakLOGO1000.png">
  <a class="w3-bar-item w3-button w3-padding-large " href="#H_2">
    <i class="fa fa-home w3-xlarge" aria-hidden="true"></i><p>HOME</p></a>
  <a class="w3-bar-item w3-button w3-padding-large w3-hover-black" href="#A_2">
    <i class="fa fa-user w3-xlarge" aria-hidden="true"></i><p>ABOUT</p></a>
  <a class="w3-bar-item w3-button w3-padding-large w3-hover-black" href="#P_2">
    <i class="fa fa-eye w3-xlarge" aria-hidden="true"></i><p>PHOTOS</p></a>
  <a class="w3-bar-item w3-button w3-padding-large w3-hover-black" onclick="CLSrjk(2);">
    <i class="fa fa-close w3-xlarge" aria-hidden="true"></i></a>
</nav>
<!-- Image Header -->
<div class="w3-display-container w3-animate-opacity" id="H_2">
  <img style="width:100%;max-height:600px;" src="index_files/MEDIA/IMG/BitSpeak/BitSpeak1500x1000.png">
</div>

<!-- Work Row -->
<div class="w3-row-padding w3-padding-64 w3-theme-l1" id="A_2">

<div class="w3-quarter">
<h2 class="*proekt_name">BitSpeak</h2>
<p>BitSpeak is simple and easy text criptgrafing web program. It simple encode and decode your mesage with 1 mesage key word. BitSpeak is light version 
</p></div>

<div class="w3-quarter"><div class="w3-card w3-white">
<img style="width:100%;max-height:600px;" src="index_files/MEDIA/IMG/Myall/p2.png">

  <div class="w3-container"><h4></h4>
  <h3>Super simple and easy to use</h3>
  <p>Encode and decode your message super fast IN REAL TIME</p></div></div></div>


<div class="w3-quarter"><div class="w3-card w3-white">
<img style="width:100%;max-height:600px;" src="index_files/MEDIA/IMG/Myall/p3.png">

  <div class="w3-container"><h4></h4>
  <h3>Trusted opensorce porject</h3>
  <p>BitSpeak is based on <span onclick="window.open('https://cryptii.com/');" style="color: blue;cursor:pointer;">https://cryptii.com/</span> project but with more frendly usage desing modification, and slim reduced code</p></div></div></div>
  
<div class="w3-quarter"><div class="w3-card w3-white">
<img style="width:100%;max-height:600px;" src="index_files/MEDIA/IMG/Myall/p1.png">
  
  <div class="w3-container"><h4></h4>
  <h3>100% safe</h3>
  <p>The encription/decription is done on your (client) device without send and recive any data .. You can use it even without internet after load the website </p></div></div></div>

</div>

<!-- Contact Container -->
<div class="w3-container w3-padding-64 w3-theme-l5" id="P_2">
<div class="w3-row"><div class="w3-col m5"><div class="w3-padding-16"><span class="w3-xlarge w3-border-teal w3-bottombar">Oficial website:</span></div>
      <h3 target="_blank" onclick="window.open('https://bit-speak.web.app/')" title="https://bit-speak.web.app/" style="cursor: pointer;color: blue;">https://bit-speak.web.app/</h3>
	                                                 </div>
	  <div class="w3-col m7" id="workP1">	
	<p class="w3-center ">key detals:</p>
      <form class="w3-container w3-card-4 w3-padding-16 w3-white"> <!--  w3-input ke se zeme za clasificirano-->
      <div class="w3-section"><label class="w3-input" type="text">super easy text encode and decode</label></div>
      <div class="w3-section"><label class="w3-input" type="text">only latin font alphabet</label></div>
      <div class="w3-section"><label class="w3-input" type="text">use Variant Beaufort Cipher with repeat keyMode</label></div></form></div></div></div></div></div>
	  
 <footer class="w3-container w3-teal w3-center"><p>relised <span >20 Oct 2020</span> by <span>1kinger</span></p></footer></div>
`})

var storeqqee = new Vuex.Store({
state: {
  view:"p_bit_speak"
}
})   

var signqqee = new Vue({
el:"#BitSpeak",
store: store
})
