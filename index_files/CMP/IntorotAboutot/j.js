Vue.component("i_a", {
    template: `<div class="w3-content" style="max-width:1100px;margin-top:50px;margin-bottom:80px">
    <div class="w3-panel w3-center" >1KINGER</div>

<!-- Slideshow -->
<div class="w3-container">
  <div class="w3-display-container mySlides">
    <img src="index_files/MEDIA/IMG/1kinger/1-3te.jpg" style="width:100%"></div>
  <div class="w3-display-container mySlides">
    <img src="index_files/MEDIA/IMG/1kinger/2-3te.jpg" style="width:100%"></div>
  <div class="w3-display-container mySlides">
    <img src="index_files/MEDIA/IMG/1kinger/333-3te.jpg" style="width:100%"></div>

  <div class="w3-container  w3-padding w3-xlarge " style="background: linear-gradient(to bottom, 	rgba(255, 255, 255,0) 10%, rgba(116,122,135,0.95) 60%);position:relative;top:-33px;">
    <div class="w3-left" onclick="plusDivs(-1)"><i class="fa fa-arrow-circle-left w3-hover-text-teal"></i></div>
    <div class="w3-right" onclick="plusDivs(1)"><i class="fa fa-arrow-circle-right w3-hover-text-teal"></i></div>
  </div>
</div>

<!-- Grid -->
<div id="s2" class="w3-row w3-container"><div class="w3-center w3-padding-64">
    <span class="w3-xlarge w3-bottombar w3-border-dark-grey w3-padding-16"> why is  "1kinger" creted ?</span></div>
  <div class="w3-col l3 m6 w3-light-grey w3-container w3-padding-16">
    <h3>Inspiration</h3><p>I'm doing this as hobby and challenge to do hard and useful things as low cost as it can be</p></div>
  <div class="w3-col l3 m6 w3-grey w3-container w3-padding-16">
    <h3> 107% Freedom</h3><p>I'm doing this completely alone without any supervisor or boss that can stop my progress</p></div>
  <div class="w3-col l3 m6 w3-dark-grey w3-container w3-padding-16">
    <h3>Brend</h3><p>1kinger is just self-declared name for avoiding  identity and/or anti-discrimination problem</p></div>
  <div class="w3-col l3 m6 w3-black w3-container w3-padding-16">
    <h3>Focus</h3><p>just doing something that maybe can make the world better and enjoyable place for everyone</p></div>
</div>


<!-- Grid -->
<div class="w3-row-padding">
  <div class="w3-center w3-padding-64">
    <span class="w3-xlarge w3-bottombar w3-border-dark-grey w3-padding-16">What is "1kinger" special for??</span></div>

  <div class="w3-third w3-margin-bottom"><div class="w3-card-4 ">
      <img src="index_files/MEDIA/IMG/1kinger/GGNOads.jpg" style="width:100%"><div class="w3-container">
        <h3>NO ADDS</h3><p class="w3-opacity">@ start</p>
        <p>there isn't any ads in any of products that are released</p></div></div></div>

  <div class="w3-third w3-margin-bottom"><div class="w3-card-4 ">
      <img src="index_files/MEDIA/IMG/1kinger/GGnoDDTacOL.jpg" style="width:100%"><div class="w3-container">
        <h3>NO any data colection</h3><p class="w3-opacity">@ start</p>
        <p>"1kinger" isn't taking it back any PERSONAL or DEVICE or SOFTWARE data info from clients. no login account requirement</p></div></div></div>

  <div class="w3-third w3-margin-bottom "><div class="w3-card-4 ">
      <img src="index_files/MEDIA/IMG/1kinger/GGparkoTRG.jpg"  style="width:100%"><div class="w3-container">
        <h3>Our Target group</h3><p class="w3-opacity">@ start</p>
        <p>Main targer is people thata prefere use economy class life style, but everyone is wellcome</p></div></div>
  </div>
</div>
    
</div>`})

var storeqqee = new Vuex.Store({
state: {
  view:"i_a"
}
})   

var signqqee = new Vue({
el:"#IntrotoAboutot",
store: store
})
