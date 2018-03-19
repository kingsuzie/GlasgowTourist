function normal(){

document.getElementById("style_id").href = "styles/normal.css"; // redirecting the user on click to the css for normal font size

}

function big(){

document.getElementById("style_id").href = "styles/big.css"; // redirecting the user on click to the css for larger font size

}

function bigger(){

document.getElementById("style_id").href = "styles/bigger.css"; // redirecting the user on click to the css for largest font size

}

 function myTime(){
     
setTimeout(function(){alert("Welcome");},3000); // onload a welcome message will appear to all users
 } 

function DayDateTime() {
    
    var n =  new Date();
     
    var weekday = new Array(7); // array has been used to display the current day using words instead of numbers
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
     
    var day = weekday[n.getDay()];
    var y = n.getFullYear();
    var m = n.getMonth() + 1;
    var d = n.getDate();
    var h = n.getHours();
    var min = n.getMinutes();
    var sec = n.getSeconds(); 
     
     

   document.getElementById("myDate").innerHTML = day + " " + m + "/" + d + "/" + y + " " + h + "." + min + "." + sec;

        
        } // merging code together for the date outcome




function myFunction(){
                    var headings = new Array("Go to page", "Whats On ", "Top Attractions", "Entertainment",  "Food & Drink",  "Contact Us");
                    var pageNames = new Array("#", "whatson", "topattractions", "entertainment", "foodanddrink", "contactus" );
                    var numHead = headings.length;
                    var j=0;
                    var currPage=getPageName();
      
      
                    for(var i=0;i<numHead;i++){
                        if (currPage!=pageNames[i]){
                            
                            //j determines the postion of the option in the select menu, it only adds on if its impotent,
                            //this mean that j always has a value in all places, there are no gaps.
                            
                             document.myform.mySelect.options[j]= new Option(headings[i],pageNames[i]);
                            j++;
                            
                        }
                       
                    }
                    
                }

 function goThere(){
                    location.href=document.myform.mySelect.options[document.myform.mySelect.selectedIndex].value+".html";
                    
                }

function getPageName(){
    //break the file path and seperates the file when / is present.
    
    var addressbits=location.href.split("/");
    var lastbit=addressbits[addressbits.length-1];
    
    var pagebits=lastbit.split(".");
    var pagename=pagebits[0];
    
    return pagename;
    
}
                







