Vue.component("side_meni", {
    template: `
<nav class="w3-sidebar w3-bar-block w3-white w3-card w3-animate-left w3-xlarge" style="display:none;z-index:2;border-radius: 5px;" id="mySidebar">
  <a href="javascript:void(0)" onclick="this.parentElement.style='display:none;';" class="w3-bar-item w3-button w3-display-topright w3-text-teal">Close<i class="fa fa-remove"></i></a>
  <a onclick="CLSrjk(0);OPN_P(0);" class="w3-bar-item w3-button">Nanly 32</a>
  <a onclick="CLSrjk(1);OPN_P(1);" class="w3-bar-item w3-button">Mylinks</a>
  <a onclick="CLSrjk(2);OPN_P(2);" class="w3-bar-item w3-button">BitSpeak</a>
  <a onclick="CLSrjk(3);OPN_P(3);" class="w3-bar-item w3-button">Sezonjobs</a>
  <a onclick="CLSrjk(4);OPN_P(4);" class="w3-bar-item w3-button">Mycafe</a>
</nav>`})
var store="";
var storeqqee = new Vuex.Store({
state: {
  view:"side_meni"
}
})   

var signqqee = new Vue({
el:"#SideMeni",
store: store
})
