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
  //give each id of button and textarea a variable name for reference
        var hr7 = document.querySelector("#hr7");
        var btn7= document.querySelector("#btn7");

        var hr8 = document.querySelector("#hr8");
        var btn8= document.querySelector("#btn8");

        var hr9 = document.querySelector("#hr9");
        var btn9= document.querySelector("#btn9");

        var hr10 = document.querySelector("#hr10");
        var btn10= document.querySelector("#btn10");

        var hr11 = document.querySelector("#hr11");
        var btn11= document.querySelector("#btn11");

        var hr12 = document.querySelector("#hr12");
        var btn12= document.querySelector("#btn12");

        var hr13 = document.querySelector("#hr13"); //1pm
        var btn13= document.querySelector("#btn13");

        var hr14 = document.querySelector("#hr14"); //2pm
        var btn14= document.querySelector("#btn14");

        var hr15 = document.querySelector("#hr15"); //3pm
        var btn15= document.querySelector("#btn15");

        var hr16 = document.querySelector("#hr16"); //4pm
        var btn16= document.querySelector("#btn16");

        var hr17 = document.querySelector("#hr17"); //5pm
        var btn17= document.querySelector("#btn17");

        var hr18 = document.querySelector("#hr18"); //6pm
        var btn18= document.querySelector("#btn18");

        var hr19 = document.querySelector("#hr19"); //7pm
        var btn19= document.querySelector("#btn19");

        var hr20 = document.querySelector("#hr20"); //8pm
        var btn20= document.querySelector("#btn20");
       
//click corresponding button to SAVE each time slot tasks
        btn7.addEventListener("click", function(){      
          localStorage.getItem(hr7.value);
          localStorage.setItem("task 7a", hr7.value);
        });
        btn8.addEventListener("click", function(){     
          localStorage.getItem(hr8.value);
          localStorage.setItem("task 8a", hr8.value);
        });
        btn9.addEventListener("click", function(){   
          localStorage.getItem(hr9.value);
          localStorage.setItem("task 9a", hr9.value);
        });
        btn10.addEventListener("click", function(){ 
          localStorage.getItem(hr10.value);
          localStorage.setItem("task 10a", hr10.value);
        });
        btn11.addEventListener("click", function(){ 
          localStorage.getItem(hr11.value);
          localStorage.setItem("task 11a", hr11.value);
        });
        btn12.addEventListener("click", function(){ 
          localStorage.getItem(hr12.value);
          localStorage.setItem("task 12p", hr12.value);
        });
        btn13.addEventListener("click", function(){ 
          localStorage.getItem(hr13.value);
          localStorage.setItem("task 1p", hr13.value);
        });
        btn14.addEventListener("click", function(){ 
          localStorage.getItem(hr14.value);
          localStorage.setItem("task 2p", hr14.value);
        });
        btn15.addEventListener("click", function(){ 
          localStorage.getItem(hr15.value);
          localStorage.setItem("task 3p", hr15.value);
        });
        btn16.addEventListener("click", function(){ 
          localStorage.getItem(hr16.value);
          localStorage.setItem("task 4p", hr16.value);
        });
        btn17.addEventListener("click", function(){ 
          localStorage.getItem(hr17.value);
          localStorage.setItem("task 5p", hr17.value);
        });
        btn18.addEventListener("click", function(){ 
          localStorage.getItem(hr18.value);
          localStorage.setItem("task 6p", hr18.value);
        });
        btn19.addEventListener("click", function(){ 
          localStorage.getItem(hr19.value);
          localStorage.setItem("task 7p", hr19.value);
        });
        btn20.addEventListener("click", function(){ 
          localStorage.getItem(hr20.value);
          localStorage.setItem("task 8p", hr20.value);
        });
//to ensure that last written text will remain upon page refresh
        hr7.textContent = localStorage.getItem("task 7a");
        hr8.textContent = localStorage.getItem("task 8a");
        hr9.textContent = localStorage.getItem("task 9a");
        hr10.textContent = localStorage.getItem("task 10a");
        hr11.textContent = localStorage.getItem("task 11a");
        hr12.textContent = localStorage.getItem("task 12p");
        hr13.textContent = localStorage.getItem("task 1p");
        hr14.textContent = localStorage.getItem("task 2p");
        hr15.textContent = localStorage.getItem("task 3p");
        hr16.textContent = localStorage.getItem("task 4p");
        hr17.textContent = localStorage.getItem("task 5p");
        hr18.textContent = localStorage.getItem("task 6p");
        hr19.textContent = localStorage.getItem("task 7p");
        hr20.textContent = localStorage.getItem("task 8p");