const main = document.querySelector("#main");
const main_game = document.querySelector("#main_game");
const result = document.querySelector("#result");

  function goNext(stage) {
    document.getElementById("stage_title").innerHTML="STAGE " + stage;
    var limit_time = 60000;
    setInterval("goResult()", limit_time);

  }

  function goResult(){
    console.log("result!");
  }

  function begin(){
    main.style.WebkitAnimation = "fadeOut 0.5s";
    main.style.animation = "fadeOut 0.5s";
    setTimeout(() => {
      main_game.style.WebkitAnimation = "fadeIn 0.5s";
      main_game.style.animation = "fadeIn 0.5s";
      setTimeout(() => {
        main.style.display = "none";
        main_game.style.display = "block"
      }, 250)
      let stage = 1;
      goNext(stage)
    }, 250);
  }