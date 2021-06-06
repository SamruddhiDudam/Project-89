
function logit() {
    var player1 = document.getElementById("n1").value;
    localStorage.setItem("name1", player1);
    var player2 = document.getElementById("n2").value;
    localStorage.setItem("name2", player2);
    window.location = "game_page.html";
}

function addplayers() {
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;
  
      localStorage.setItem("player1_name", player1_name);
      localStorage.setItem("player2_name", player2_name);
  
      window.location = "game_page.html";
  }
  