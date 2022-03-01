function eventSelector(element){
    if (document.getElementById('events-list').contains(element)){
        var num = element.children[2].innerHTML;
        for (let x = 0; x < document.getElementsByClassName('entry').length; x++){
            document.getElementsByClassName('entry')[x].style.visibility = 'visible';
        }
    }
    if(document.getElementById('expandables').contains(element)){
        var num = element.children[1].innerHTML;
            }
    if(document.getElementsByClassName('highlight').length != 0){
        var pin = document.getElementsByClassName('highlight')[0].id
        document.getElementById(pin+'-pin').style.display = 'none';
        document.getElementsByClassName('highlight')[0].classList.remove('highlight');
        
        }
    let floors = ['ground','1st-floor','2nd-floor','3rd-floor'];
    floor = num[0]; 
    console.log(num[0])

    if (document.getElementsByClassName('focus')[0] == undefined || document.getElementsByClassName('focus')[0].id[0] != floor){
        if (document.getElementsByClassName('focus')[0] == undefined){
            floorSelect(document.getElementById(floors[floor]))
        }
        if (document.getElementsByClassName('focus')[0].id[0] != floor){
            let current = document.getElementsByClassName('focus')[0].id[0];
            if(current < floor){
                document.getElementById(floors[current]).classList.add('floorSlideDown');
                document.getElementsByClassName('focus')[0].classList.remove('focus');
                delay(floors[current],'none');
                document.getElementById(floors[floor]).style.animationDirection = 'reverse';
                reset(floors[floor],'floorSlideUp')
                document.getElementById(floors[floor]).classList.add('focus');
                delay(floors[floor],'initial');
                document.getElementsByClassName('tab')[current].style.display = 'none';
                document.getElementsByClassName('tab')[floor].style.display = 'block';
                
            }
            if(current > floor){
                document.getElementById(floors[current]).classList.add('floorSlideUp');

                document.getElementsByClassName('focus')[0].classList.remove('focus');
                delay(floors[current],'none');
                document.getElementById(floors[floor]).style.animationDirection = 'reverse';
                reset(floors[floor],'floorSlideDown')
                document.getElementById(floors[floor]).classList.add('focus');
                delay(floors[floor],'initial');
                document.getElementsByClassName('tab')[current].style.display = 'none';
                document.getElementsByClassName('tab')[floor].style.display = 'block';
            }
            
        }

        console.log(floors[floor])
    }
   
    document.getElementById(num).classList.add('highlight');
    document.getElementById(num+'-pin').style.display='inherit';
}

function roomToggle(elem){
    var room = elem.id; 
    for (let x = 0; x < document.getElementsByClassName('entry').length; x++){
        if(document.getElementsByClassName('entry')[x].children[2].innerHTML == room){
            for (let iter = 0; iter < 3; iter++){
            document.getElementsByClassName('entry')[x].children[iter].style.visibility = 'visible'
            }
        
        } else{
            for (let iter = 0; iter < 3; iter++){
                document.getElementsByClassName('entry')[x].children[iter].style.visibility = 'hidden';
            }
        }
    }
}


async function delay(elem,toggle) {
    

    if (toggle == 'initial'){
        document.getElementById(elem).style.display=toggle;
    }
    await new Promise(resolve => setTimeout(resolve, 800));
    document.getElementById(elem).style.display=toggle;
}

async function reset(elem,toggle) {
    await new Promise(resolve => setTimeout(resolve, 800));
    document.getElementById(elem).classList.remove(toggle)
    if (document.getElementById(elem).style.animationDirection == 'reverse'){
        document.getElementById(elem).style.animationDirection = 'initial'
    }
}
    
function floorSelect(elem){
    let floors = ['ground','1st-floor','2nd-floor','3rd-floor'];
    var floor = floors.indexOf(elem.id);
    document.getElementById(elem.id).classList.add('focus')
    for (let num in floors){
        if(num < floor){
            document.getElementById(floors[num]).classList.add('floorSlideDown');
            document.getElementById(floors[num]).style.animationDirection = 'normal';
            delay(floors[num],'none');
            
        }
        if(num > floor){
            document.getElementById(floors[num]).classList.add('floorSlideUp');
            document.getElementById(floors[num]).style.animationDirection = 'normal';
            delay(floors[num],'none');
        }
        document.getElementById(floors[num]).classList.remove('floor-menu');
    }
    document.getElementsByClassName('tab')[floor].style.display = 'block'
    
       
}

function floorUp(){
    let floors = ['ground','1st-floor','2nd-floor','3rd-floor'];
    var floor = floors.indexOf(document.getElementsByClassName('focus')[0].id);
    let up = floor+1
    if (floors[up] != undefined){
        document.getElementById(floors[floor]).classList.add('floorSlideDown');
        

        document.getElementsByClassName('focus')[0].classList.remove('focus');
        delay(floors[floor],'none');
        document.getElementById(floors[up]).style.animationDirection = 'reverse';
        reset(floors[up],'floorSlideUp')
        document.getElementById(floors[up]).classList.add('focus');
        delay(floors[up],'initial');
        document.getElementsByClassName('tab')[floor].style.display = 'none';
        document.getElementsByClassName('tab')[up].style.display = 'block';

    }

    
   
}

function floorDown(){
    console.log(document.getElementsByClassName('focus'));
    let floors = ['ground','1st-floor','2nd-floor','3rd-floor'];
    var floor = floors.indexOf(document.getElementsByClassName('focus')[0].id);
    let down = floor-1
    if (floors[down] != undefined){
        console.log('working')
        document.getElementById(floors[floor]).classList.add('floorSlideUp');
        

        document.getElementsByClassName('focus')[0].classList.remove('focus');
        delay(floors[floor],'none');
        document.getElementById(floors[down]).style.animationDirection = 'reverse';
        reset(floors[down],'floorSlideDown')
        document.getElementById(floors[down]).classList.add('focus');
        delay(floors[down],'initial');
        document.getElementsByClassName('tab')[floor].style.display = 'none';
        document.getElementsByClassName('tab')[down].style.display = 'block';
    }
}

function returnToMenu(){
    console.log(document.getElementsByClassName('focus')[0].id)
    let floors = ['ground','1st-floor','2nd-floor','3rd-floor'];
    var floor = floors.indexOf(document.getElementsByClassName('focus')[0].id);
    document.getElementById(document.getElementsByClassName('focus')[0].id).classList.remove('focus')
    for (let num in floors){
        if(num < floor){
            let dir = 'floorSlideDown'
            document.getElementById(floors[num]).classList.add('floorSlideDown');
            document.getElementById(floors[num]).style.animationDirection = 'reverse';
            delay(floors[num],'initial');
            reset(floors[num], dir)
        }
        if(num > floor){
            let dir = 'floorSlideUp'
            document.getElementById(floors[num]).style.animationDirection = 'reverse';
            delay(floors[num],'initial');
            reset(floors[num], dir)
        }
        if (num > 0){
            document.getElementById(floors[num]).classList.add('floor-menu');
            document.getElementsByClassName('tab')[num].style.display = 'none';
        }
    }
}

document.addEventListener('click', function(event) {

    if (event.target.tagName == "image"){return;}
    if (event.target == document.getElementById('events-list') || document.getElementById('events-list').contains(event.target)){return}
    if (event.target == document.getElementById('menu') || document.getElementById('menu').contains(event.target)){return;}
    if (event.target.classList.contains('entry')){ console.log("got it"); return;}
    if (event.target == document.getElementById('1st-floor') || document.getElementById('1st-floor').contains(event.target)) {return;}
    if (event.target == document.getElementById('2nd-floor') || document.getElementById('2nd-floor').contains(event.target)) {return;}
    if (event.target == document.getElementById('3rd-floor') || document.getElementById('3rd-floor').contains(event.target)) {return;}
    console.log('ran')

    for (let x = 0; x < document.getElementsByClassName('entry').length; x++){
    for (let iter = 0; iter < 3; iter++){
        document.getElementsByClassName('entry')[x].children[iter].style.visibility = 'visible';
    }
    }
    if(document.getElementsByClassName('highlight').length != 0){
        var pin = document.getElementsByClassName('highlight')[0].id;
        document.getElementById(pin+'-pin').style.display = 'none';
        document.getElementsByClassName('highlight')[0].classList.remove('highlight');
    }
});
