Vue.component("aboutskoto", {
    template: `<div id="s3" class="w3-display-container w3-animate-opacity">
      <img src="index_files/MEDIA/IMG/1kinger/GGzaUbsSITE.jpg" style="width:100%;min-height:350px;max-height:600px;">
      <div class="w3-container w3-display-bottomleft w3-margin-bottom">  
        <button onclick="document.getElementById('ABOUT_m').style='display:block;';" class="w3-button w3-xlarge  w3-hover-grey" style="background-color:rgb(78,130,152);" >Learn about 1kinger</button>
      </div>
    
    
      <div id="ABOUT_m" class="w0-modal"><div class="w0-modal-content w3-card-4 w3-animate-top" style="margin: auto;">
        <header class="w3-container w3-teal w3-display-container"> 
          <span onclick="this.parentElement.parentElement.parentElement.style='display:none;';" class="w3-button w3-teal w3-display-topright"><i class="fa fa-remove"></i></span>
          <h4>About 1kinger</h4></header><div class="w3-container"><div>
    
      <!-- About Section -->
      <div class="w3-row w3-padding-8" id="about"><div class="w3-col m6 w3-padding-large  w3-center">
         <img src="index_files/MEDIA/IMG/1kinger/motivation.jpeg" class="w3-round w3-image w3-opacity-min " alt="Table Setting" width="80%" >
          
    <h5 class="w3-center  w3-text-grey">how can we motivate 1kinger??</h5><p class="w3-large w3-text-grey w3-hide-medium">
    You can motivate through social media. it would be nice for you to share this story with other people.<br>
    I have no plans to be famous on social media, I just created it to be for somone inspiration and /or motivation exemple</p></div>
    
        <div class="w3-col m6 w3-padding-large"><h1 class="w3-center">Is 1kinger cooperate with any other third-party firm ??</h1><br>
          <p class="w3-large">short answers : No.<br>  
      1kinger is doing all this things without any financial support from any company.Also 1kinger isn't oficial legally registered company which means that cant use the company privilege benefits like stock market shares, funds from investors, heavy bank credits, greedy subvencion funds, tax return etc...  isn't use any patreon, kickstart or any kind of donation for this whole project. So, that is the reason why my progress is little bit slower to fix or create new projects. 
      <br><br></p>
     <h5 class="w3-center  w3-text-grey">is there lincense by 1kinger for using 1kinger's products??</h5>
     <p class="w3-center ">by default apsolutly 100% NO any lincense , no any agrremant & term of service and etc.. things.</p></div>	
     <div class="w3-col m6 w3-padding-large">
      <h1 class="w3-center">what is <span class="w3-tag w3-light-grey">"1kinger"</span> name mean??</h1><br><p class="w3-large">
     short answers : Nothing.<br>just simple label name to be before the name amazon in phone book ;D</p></div></div>
      <hr></div></div><footer class="w3-container w3-teal"><p class="w3-center">fresh info @ social media
    <span class="w3-right" onclick="this.parentElement.parentElement.parentElement.parentElement.style='display:none;';" class="w3-button w3-teal w3-display-botright"><i class="fa fa-remove"></i></span></p></footer></div></div>
    
    
    </div>`})

var storeqqee = new Vuex.Store({
state: {
  view:"aboutskoto"
}
})   

var signqqee = new Vue({
el:"#Aboutskoto",
store: store
})
