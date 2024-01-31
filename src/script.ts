let btn: HTMLButtonElement | null = document.querySelector("#btn");
let guess: HTMLButtonElement | null = document.querySelector("#guess");
let reload: HTMLButtonElement | null = document.querySelector("#reload");
let player__error: HTMLParagraphElement | null =
  document.querySelector("#player__error");
let player: HTMLParagraphElement | null = document.querySelector("#player");
let input: HTMLInputElement | null = document.querySelector("#input");
let img: HTMLImageElement | null = document.querySelector("#img");
let chance__remain: HTMLParagraphElement | null =
  document.querySelector("#chance__remain");

let value: number;
let remainChance: number = 5;

btn?.addEventListener("click", () => {
  if (input?.value !== "") {
    if (!isNaN(Number(input?.value))) {
      if (Number(input?.value) >= 0 && Number(input?.value) <= 10) {
        value = Number(input?.value);
        if (input) {
          input.value = "";
        }
        if (player !== null) {
          player.innerHTML = `second player`;
          if (btn) {
            btn.style.display = "none";
            if (guess) {
              guess.style.display = "block";
              if (chance__remain) {
                chance__remain.innerHTML = ` chance remain: ${remainChance}`;
                if (player__error) {
                  player__error.innerHTML = "";
                }
              }
            }
          }
        }
      } else {
        if (player__error !== null) {
          player__error.innerHTML = "number must be 0 or up 10 or down";
        }
      }
    } else {
      if (player__error !== null) {
        player__error.innerHTML = "please enter number only";
      }
    }
  } else {
    if (player__error !== null) {
      player__error.innerHTML = "Please enter a number to start the game";
    }
  }
});

guess?.addEventListener("click", () => {
  if (input?.value !== "") {
    if (!isNaN(Number(input?.value))) {
      if (Number(input?.value) >= 0 && Number(input?.value) <= 10) {
        if (Number(input?.value) !== value && remainChance !== 0) {
          remainChance--;
          if (chance__remain) {
            chance__remain.innerHTML = ` chance remain : ${remainChance}`;
            if (player__error) {
              player__error.innerHTML = "try agian";
              if (remainChance === 0) {
                if (img) {
                  img.src = "../images/winner.png";
                  if (input) {
                    input.style.display = "none";
                    if (player) {
                      player.innerHTML = "player one win the game ";
                      if (player__error) {
                        player__error.innerHTML = "";
                        chance__remain.innerHTML = "";
                        if (guess) {
                          guess.style.display = "none";
                          if (reload) {
                            reload.style.display = "block";
                            reload.addEventListener("click", () => {
                              location.reload();
                            });
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        } else {
          if (Number(input?.value) === value) {
            if (img) {
              img.src = "../images/winner.png";
              if (input) {
                input.style.display = "none";
                if (player) {
                  player.innerHTML = "player two win the game ";
                  if (player__error) {
                    player__error.innerHTML = "";
                    if (guess) {
                      guess.style.display = "none";
                      if (reload) {
                        reload.style.display = "block";
                        reload.addEventListener("click", () => {
                          location.reload();
                        });
                        if (chance__remain) {
                          chance__remain.innerHTML = "";
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      } else {
        if (player__error !== null) {
          player__error.innerHTML = "number must be 0 or up 10 or down";
        }
      }
    } else {
      if (player__error !== null) {
        player__error.innerHTML = "please enter number only";
      }
    }
  } else {
    if (player__error !== null) {
      player__error.innerHTML = "Please enter a number to start the game";
    }
  }
});
