Vue.component("p_sezonjob", {
    template: `<div class="w0-modal-content w3-card-4 w3-animate-top" style="top:0px;left:19%;">
      <header class="w3-container w3-teal w3-display-container"> 
        <span class="w3-button w3-teal w3-display-topright" onclick="CLSrjk(3);"><i class="fa fa-remove" aria-hidden="true"></i></span>
        <h4 class="*proekt_name">Sezonjobs</h4></header>
   <div class="w3-container" style="padding: 0px;"><div id="myPage_3">
  
  <!-- Icon Bar (Sidebar - hidden on small screens)//////////////////////////nanly32 -->
  <nav class="w3-sidebar w3-bar-block w3-center" style="font-size:55%;position:fixed;left:0px;top:0px;width:18%;z-index:555;overflow:hidden;">
    <!-- Avatar image in top left corner -->
    <img style="width:70%" src="index_files/MEDIA/IMG/Myall/MYlinks.png">
    <a class="w3-bar-item w3-button w3-padding-large " href="#H_3">
      <i class="fa fa-home w3-xlarge" aria-hidden="true"></i><p>HOME</p></a>
    <a class="w3-bar-item w3-button w3-padding-large w3-hover-black" href="#A_3">
      <i class="fa fa-user w3-xlarge" aria-hidden="true"></i><p>ABOUT</p></a>
    <a class="w3-bar-item w3-button w3-padding-large w3-hover-black" href="#P_3">
      <i class="fa fa-eye w3-xlarge" aria-hidden="true"></i><p>PHOTOS</p></a>
    <a class="w3-bar-item w3-button w3-padding-large w3-hover-black" onclick="CLSrjk(3);">
      <i class="fa fa-close w3-xlarge" aria-hidden="true"></i></a>
  </nav>
  <!-- Image Header -->
  <div class="w3-display-container w3-animate-opacity" id="H_3">
    <img style="width:100%;max-height:600px;" src="index_files/MEDIA/IMG/Myall/MyallWallpaper.png">
  </div>
  
  <!-- Work Row -->
  <div class="w3-row-padding w3-padding-64 w3-theme-l1" id="A_3">
  
  <div class="w3-quarter">
  <h2 class="*proekt_name">Sezonjobs</h2>
  <p>Sezonjobs is one uniqe projekt that make our live more orginiser. With sezonjobs you can create and edit all your Important links under 1 link. Super simple to use and edit. 
  </p></div>
  
  <div class="w3-quarter"><div class="w3-card w3-white">
  <img style="width:100%;max-height:600px;" src="index_files/MEDIA/IMG/Myall/p2.png">
  
    <div class="w3-container"><h4></h4>
    <h3>Menage your account</h3>
    <p> Cloud Web-app real-time edit your profil</p></div></div></div>
  
  
  <div class="w3-quarter"><div class="w3-card w3-white">
  <img style="width:100%;max-height:600px;" src="index_files/MEDIA/IMG/Myall/p3.png">
  
    <div class="w3-container"><h4></h4>
    <h3>cros platform</h3>
    <p>desing to work on every online conection divece </p></div></div></div>
    
  <div class="w3-quarter"><div class="w3-card w3-white">
  <img style="width:100%;max-height:600px;" src="index_files/MEDIA/IMG/Myall/p1.png">
    
    <div class="w3-container"><h4></h4>
    <h3>Verification intigreted</h3>
    <p>there are email and acc verification for maximun security and tristung easuse</p></div></div></div>
  
  </div>
  
  <!-- Contact Container -->
  <div class="w3-container w3-padding-64 w3-theme-l5" id="P_3">
  <div class="w3-row"><div class="w3-col m5"><div class="w3-padding-16"><span class="w3-xlarge w3-border-teal w3-bottombar">Oficial website:</span></div>
        <h3 target="_blank" onclick="window.open('https://sezonjobs.sytes.net/')" title="https://sezonjobs.sytes.net/" style="cursor: pointer;color: blue;">https://sezonjobs.sytes.net/</h3>
                                                     </div>
      <div class="w3-col m7" id="workP1">	
    <p class="w3-center ">key detals:</p>
        <form class="w3-container w3-card-4 w3-padding-16 w3-white"> <!--  w3-input ke se zeme za clasificirano-->
        <div class="w3-section"><label class="w3-input" type="text">up to 12 memory data section *(for now)</label></div>
        <div class="w3-section"><label class="w3-input" type="text">easy profil meanage</label></div>
        <div class="w3-section"><label class="w3-input" type="text">multi cros platform view-abele</label></div>
        <div class="w3-section"><label class="w3-input" type="text">anonmy provacy with email and acc verificatio</label></div>
        <div class="w3-section"><label class="w3-input" type="text">more info about verification can find <span target="_blank" onclick="window.open('https://sezonjobs.sytes.net/Verification/')"  style="cursor: pointer;color: blue;">here.</span></label></div></form></div></div></div></div></div>
   <footer class="w3-container w3-teal w3-center"><p>relised <span >7 Oct 2020</span> by <span>1kinger</span></p></footer></div>`})

var storeqqee = new Vuex.Store({
state: {
  view:"p_sezonjob"
}
})   

var signqqee = new Vue({
el:"#Sezonjobs",
store: store
})
