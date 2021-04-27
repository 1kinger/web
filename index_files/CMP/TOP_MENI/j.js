Vue.component("top_meni", {
    template: `<div class="w3-top">
    <div class="w3-bar w3-theme-d2 w3-left-align">
     <a class="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-hover-white w3-theme-d2" href="javascript:void(0);" onclick="openNav()"><i class="fa fa-bars"></i></a>
     <a href="#s1" class="w3-bar-item w3-button" style="background-color:rgba(7,16,132,0.5)"><i class="fa fa-home w3-margin-right"></i> <img src="index_files/MEDIA/IMG/1kinger/l36x36.png" style="width:30px;position:relative;"></a>
     <a href="#s2" onclick="openNav()" class="w3-bar-item w3-button w3-hide-small w3-hover-white">Intro</a>
     <a href="#s3" onclick="openNav()" class="w3-bar-item w3-button w3-hide-small w3-hover-white">About</a>
     <a href="#s4" onclick="openNav()" class="w3-bar-item w3-button w3-hide-small w3-hover-white">Projects</a>
     <div class="w3-dropdown w3-hide-small  w3-right  w3-button" >
      <button type="button"  data-toggle="modal" data-target="#myModalGT"  class="w3-button ">Language </button>
     </div>
   </div>
   
    <div href="#s1" onclick="openNav()" id="navDemo" class="w3-bar-block w3-theme-d2 w3-hide w3-hide-large w3-hide-medium">
     <a href="#s2" onclick="openNavCL()" class="w3-bar-item w3-button">Intro</a>
     <a href="#s3" onclick="openNavCL()" class="w3-bar-item w3-button">About</a>
     <a href="#s4" onclick="openNavCL()" class="w3-bar-item w3-button">Projects</a>
     <a data-toggle="modal" data-target="#myModalGT"  onclick="openNavCL()" class="w3-button w3-bar-item">Language </a>	
    </div>
   </div>`})

var storeqqee = new Vuex.Store({
state: {
  view:"top_meni"
}
})   

var signqqee = new Vue({
el:"#TopMeni",
store: store
})
