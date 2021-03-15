function Playbar() {
  return /*html*/ `
         <div class="container-fluid d-flex align-items-center justify-content-between">
           <div class="d-flex align-items-center mt-3">
            <img style="height: 58px; width: 58px" src="./assets/assets-playerbar/current-song.jfif" alt="current-song" />
            <div class="d-flex flex-column mx-3">
               <p class="m-0" style="font-size:14px; padding-bottom:5px;">I Want To Break Free - Single <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                 <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                 </svg></span>
               </p>
               <p class="m-0" style="color: #ccc; font-size:12px;" >Queen</p>
            </div>
           </div>
           <div id="middle d-flex flex-column" style="width:50%; padding-top:20px;">
              <div id="top" class="d-flex justify-content-center">
              <img class="mx-2" src="./assets/assets-playerbar/shuffle.svg" alt=""/>
              <img class="mx-3" src="./assets/assets-playerbar/previous_track.svg" alt=""/>
              <div  style="height:34px; width=34px; border:1px solid white; border-radius: 50%; position:relative;">
               <img class="mx-2" style="height:20px; width: 20px; padding-top:4px;" src="./assets/assets-playerbar/playbutton.svg" alt=""/>
              </div>
              <img class="mx-3" src="./assets/assets-playerbar/next_track.svg" alt=""/>
              <img class="mx-2" src="./assets/assets-playerbar/repeat.svg" alt=""/>
            </div>
              <div id="bottom" class="pt-1 d-flex align-items-center" style="padding-left:20px;">
                <span id="current-time" class="" style="font-size:11px; padding-right:3px; color: #ccc;">00:00</span>
                <input style="width:80%; height:5px; -webkit-appearance: none; border-radius: 5px; background: linear-gradient(
                  90deg
                  , rgb(29, 185, 84) 100%, rgb(83, 83, 83) 80%);" type="range" name="" min="0" value="0" max="100" />
                <span id="total-time" class="" style="font-size:11px; padding-left:3px; color: #ccc;">04:18</span>
              </div>
           </div>
           <div id="right" class="d-flex align-items-center" style="position:relative; left:40px; top:10px;">
           <img class="mx-2" style="filter: opacity(0.6);" src="./assets/assets-playerbar/queue_music-white-18dp.svg" alt=""/>
           <img class="mx-2" style="filter: opacity(0.6);" src="./assets/assets-playerbar/important_devices-white-18dp.svg" alt=""/>
           <img class="mx-2" style="filter: opacity(0.6);" src="./assets/assets-playerbar/volume.svg" alt=""/>
           <input style="width:30%; height:3px;  -webkit-appearance: none; border-radius: 1px; background: linear-gradient(
            90deg
            , rgb(29, 185, 84) 100%, rgb(83, 83, 83) 80%);" type="range" name="" min="0" value="0" max="100" />
           </div>
         </div>

    `;
}

export { Playbar };
