console.log("LetsUpgrade Mini Project:Javascript");

    // define an array
    let arrList = [];

    /*=============================================
        Once data added by User it should be there on website eventhough we refresh the page
         => By using onLoad function with the help of localStorage => GetItem  
    ==============================================*/
    window.onload = ()=>{
        /*=========Check get localstorage data==========*/ 
        if(JSON.parse(localStorage.getItem("todo")) != null){
        arrList = JSON.parse(localStorage.getItem("todo"));
        console.log(arrList);
            show();
        }
    }
    /*=============================================
         Add Event/List Using onclic Event(function)
    ==============================================*/
    function addVal(){
        // get input text
        let getInput = document.querySelector(".addText").value.trim();
        // console.log(getInput)    

        // check is input is null or not
        if(getInput!=""){        
            // push data into array list
            arrList.push(getInput);
            // console.log(arrList)
        }
        /*========= get localstorage ==========*/    
        if(localStorage.getItem("Todo") == null){
        localStorage.setItem("todo",JSON.stringify(arrList))
        }
        else{
            localStorage.setItem("todo", JSON.stringify(arrList));
        }

        // show result function
        show();
    }

    /*=============================================
         Appennd Div When click on button ==> Appending the value
    ==============================================*/
    function show(){
    
        // append result to list element
        document.querySelector(".list").innerHTML = "";
        for(let i = 0; i < arrList.length; i++){
            document.querySelector(".list").innerHTML += 
            "<center><div class='element'>" + arrList[i] + "<span class='removebtn' onclick='delfun("+i+")'><i class='fas fa-minus'></i></span></div></center>";
        }
    }
    /*=============================================
         once value added and => we want to delete the that particular div we use delete funciton()
    ==============================================*/
    function delfun(index){
        // delete by using array index
        // console.log(index);
        arrList.splice(index, 1);
        /*========= get localstorage ==========*/  
        if(localStorage.getItem("Todo") == null){
            localStorage.setItem("todo",JSON.stringify(arrList));
        }
        else{
            localStorage.setItem("todo", JSON.stringify(arrList));
        }
        show();
    }
