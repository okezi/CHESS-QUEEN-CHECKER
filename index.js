const select = document.getElementsByClassName("row");
const result = document.getElementById("result");
const results = document.getElementById("resulterror");
const attack = document.getElementById("btn");
attack.addEventListener("click", checkAttack);
    let noSelected = 0;
    let selectedNo = [];

    function selectPosition() {
      let id = this.getAttribute("id");

      let selectedIndex = selectedNo.indexOf(id);

      if (selectedIndex >= 0) {
        selectedNo.splice(selectedIndex, 1);
        this.style.border = "none";
        noSelected--;
        return;
      }

      if (noSelected < 2) {
        this.style.border = "5px solid red";
        selectedNo.push(id)
        noSelected++;
      } else {
        results.textContent = "Only two numbers can be selected";
        result.textContent = "";
      }
      return;
    }

    for (let i = 0; i < select.length; i++) {
      select[i].addEventListener('click', selectPosition, false);
    }



   function attackFunction() {
      if (selectedNo.length !== 2) {
        results.textContent = "Two positions will have to be selected";
        result.textContent = "";
      } else {

        let position1 = selectedNo[0];
        let position2 = selectedNo[1];

        let position11 = position1.split("", position1)[0]
        let position12 = position1.split("", position1)[1]

        let position21 = position2.split("", position2)[0]
        let position22 = position2.split("", position2)[1]

        //horizontal check
        if (position11 === position21) {
          return true;
        }

        //vertical check
        if (position12 === position22) {
          return true;
        }

        //diagonal left to right
        if (position11 - position12 === position21 - position22) {
          return true;
        }

        let positionRightLeft = Math.abs(parseInt(position1) - parseInt(position2));

        let moduleRightLeft = (positionRightLeft % 9 === 0) ? true : false


        if (moduleRightLeft) {
          return true;
        }
        results.textContent = "A Queen cannot be attacked";
        result.textContent = "";
      }
    }

    function checkAttack() {
      let attack = attackFunction();
      if (attack) {
        result.textContent = "A Queen has been attacked";
        results.textContent = "";
      } 
      results.style.display = "block";
      return;
    }


	