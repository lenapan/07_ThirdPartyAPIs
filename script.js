      // Displaying today's date
      const today = document.getElementById("currentDay");
      const now = dayjs().format('dddd, MMMM DD'); 
      today.append(now); 
      // declaring the current hour 0-24
      const hours = dayjs().hour();
      
      const divContain = document.querySelector(".container");

      for (var i = 7; i < 21; i++){ //Creating 7am - 8pm time blocks
        var timeDiv = document.createElement("div");
        var input = document.createElement("textarea");
        var p = document.createElement("p");
        
        timeDiv.setAttribute("class", "row");
        p.setAttribute("class", "hour");
        input.setAttribute("class", "past");

        if (i === hours){
        input.setAttribute("class", "present");
         }
        else if (i > hours){
        input.setAttribute("class", "future");
        }

        timeDiv.appendChild(p);
        p.textContent = i +" AM";
        if (i >= 13){
          p.textContent = i-12 + " PM"; //to show non-miltary time
        }
        else if (i === 12){
          p.textContent = i + " PM";
        }
        // input.setAttribute("data-index", i);
        input.setAttribute("id", "hr"+i);
        timeDiv.appendChild(input);

        var button = document.createElement("button");
        var icon = document.createElement("i");
        icon.setAttribute("class", "far fa-save");
        button.append(icon);
        button.setAttribute("id", "btn"+i);
        button.setAttribute("class", "saveBtn"); //see style.css line 60
        // button.style.cssFloat = "right"; //no longer needed once row class is applied to timeDiv
        timeDiv.appendChild(button);
        divContain.append(timeDiv); //applying the created div to the main container that was pre-created in HTML
      }
  //target each id of "save-button" and its corresponding textarea to store and retrieve from local storage
        for(let i = 7; i < 21; i+=1){
          let hr = document.querySelector(`#hr${i}`)
          let btn = document.querySelector(`#btn${i}`)
          btn.addEventListener("click", function(){      
            localStorage.getItem(hr.value);
            localStorage.setItem(`${i}:00`, hr.value);
          });
          hr.textContent = localStorage.getItem(`${i}:00`)
        }