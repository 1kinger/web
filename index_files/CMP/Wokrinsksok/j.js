Vue.component("wrk", {
    template: `<div class="w3-row-padding w3-padding-64 " style="background-color:rgb(7,16,32);color:white" id="s4">
    <div class="w3-quarter"><h2 >Our Wor(king) projekts</h2><p>
    I have some good ideas that i develop for world wide usage that i think can help to someone somehow in any way. Here you can see all my projects that i'm doing.. many more will come in near future..
    </p></div>
    
    <div class="w3-quarter ">
    <div class="w3-card w3-white "><img src="index_files/MEDIA/IMG/Nanly32/GGfotka%20nanlito%20sjt.jpg"  style="width:100%">
      <div class="w3-container"><h3>Nanly 32</h3>
      <h4>android app/(game)</h4>
      <p>play 500+ game</p>
      <p>save your game</p>
      <p>5 memory sectors</p>
      <p>easy screen adjystment</p>
      <p><button class="w3-button w3-block w3-green w3-round" onclick="OPN_P(0);">see this projet </i></button></p>
      </div></div></div>
      
    <div class="w3-quarter">
    <div class="w3-card w3-white "><img src="index_files/MEDIA/IMG/Myall/MyallWallpaper.png" style="width:100%">
      <div class="w3-container"><h3>Mylinks</h3>
      <h4>Virtuel personal link Organizer</h4>
      <p>All your Links under 1 link</p>
      <p>Cloud Web-app solution</p>
      <p>cros platform adaption</p>
      <p>simple and easy to use</p>
      <p><button class="w3-button w3-block w3-green w3-round" onclick="OPN_P(1);">see this projet </i></button></p>
      </div></div></div>
      
      
    <div class="w3-quarter">
    <div class="w3-card w3-white "><img src="index_files/MEDIA/IMG/BitSpeak/BitSpeak1500x1000.png"  style="width:100%">
      <div class="w3-container"><h3>BitSpeak</h3>
      <h4>Criptografig app</h4>
      <p>Encode and decode instant</p>
      <p>Trusted OpenSorce project</p>
      <p>Suport only Latin font alphabet</p>
      <p>easy use for everydey</p>
      <p><button class="w3-button w3-block w3-green w3-round" onclick="OPN_P(2);">see this projet </i></button></p>
      </div></div></div>
    
    </div>`})

var storeqqee = new Vuex.Store({
state: {
  view:"wrk"
}
})   

var signqqee = new Vue({
el:"#Workingokt",
store: store
})
