months= ["January","February","March","April","May","June","July","August","September","October","November","December"]

dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

workDay =["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"]

saves={}

buttenPressed =

year= new Date().getFullYear()
month = months[new Date().getMonth()]
day =dayNames[new Date().getDay()]
suf = ""
date = new Date().getDate()
currentHr =new Date().getHours()

if(date > 3){suf= "th"}else if(date = 1){suf="st"}else if(date =2){suf="nd"}else{suf="rd"}
fullDate=day+", "+month+" "+date+suf+" "+year

$("#currentDay").append(fullDate)


$("document").ready(function(){
    for(i=0; i<workDay.length;i++){

    $(".container").append(
        "<div class= timeContainer> <label class= hourLabel for="+workDay[i] +">"+workDay[i]+"</label>"+
        "<input class=hour id="+workDay[i] +"></input>"+
        "<button id="+[i] +" name= savebtns class=saveContainer> <img class=save_button src=./floppy-disk-solid.svg alt=save button></button></div>")
        Object.assign(saves,{[i]:workDay[i]})
        
        for(x=0;x<9;x++){
            savedTod =localStorage.getItem(workDay[x])
            if(savedTod = null)
            {} else{
            
             $("#"+workDay[i]).val(localStorage.getItem(workDay[i]))   
        
        }

            
        }

       
        $("#"+[i]).click(function(){
        value = $("#"+workDay[this.id]).val()
        key = workDay[this.id]
        localStorage.setItem(key,value)
        $("#"+key).append(localStorage.getItem(key)) 

                  
          });

    $(".timeContainer").css(
        { 
        "border":"none",
        "display":"flex",
        "align-items": "center",
        "height":"5rem",
        "margin":".1em"
    })
        $(".hourLabel").css(
            { 
            "font-size": "1em",
            "width":"10%",
            "height":"5rem",
            "display":"flex",
            "margin":"0px",
            "align-items": "center",
            "justify-content":"center",
            "border-bottom":".01em dashed black",
            "border-right":".01em solid black",
            
        })
        $(".hour").css(
            { 
            "font-size": "1em",
            "width":"90%",
            "height":"100%",
            "margin":"0px",
            "display":"block",
            "border": "none",
            "padding":"1em",
            "border-right":".01em solid black"
            
        })

        $(".saveContainer").css(
            { 
            "height":"100%",
            "width":"10%",
            "display":"flex",
            "align-items": "center",
            "justify-content":"center",
            "background-color": "#06AED5",
            "border": "none"

        })

        $(".save_button").css(
            { 
            "height":"20%",
            "width":"100%",
            "align-items": "center",
            "justify-content":"center"
        })

        if (i+9 < currentHr){
            $("#"+workDay[i]).css(
                {"background-color": "#d3d3d3"  })
                
            
            } else if(i+9 == currentHr){
                $("#"+workDay[i]).css(
                    {"background-color": "#ff6961"  })
                    

            }else (
                $("#"+workDay[i]).css(
                    {"background-color": " #77dd77"  })
                    
            )
        
    }})
        
    

    

    
