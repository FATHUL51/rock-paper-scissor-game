function my(){
    var x = document.getElementById("dis");
    if(x.style.display == 'none'){
        x.style.display="block";
} else {
    x.style.display="none";
}
}
let score=JSON.parse(localStorage.getItem('score')) ||{
    computerScore:0,
    yourScore:0
}
function cliaskck(){
    var x = document.getElementById("dis");
    if(x.style.display == 'none'){
        x.style.display="block";
        document.getElementById("dis").innerHTML=`<div id="dis">
            <div class="crossos">
                <ul class="rules">
                    <li class="game">GAME RULES</li>
                    <li>Rock beats scissors, scissors beat paper,paper beats rock.</li>
                    <li>Agree ahead of time wheather you'll count off "rock,paper,scissors, shoot" or just "rock,paper,scissors."</li>
                    <li>Use rock,paper,scissors to settle minor decisions or simply play to pass the time</li>
                    <li>If both players lay down the same hand,each player lays down another hand</li>
                </ul>
            </div>
        <button onclick="my()" class="buttoncross">
            <div class="cross">
                <svg width="23" height="31" viewBox="0 0 23 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.32031 25.457L7.33594 16.0469V15.6602L1.92188 7.45312C1.76432 7.20964 1.61393 6.97331 1.4707 6.74414C1.32747 6.50065 1.19141 6.26432 1.0625 6.03516C0.847656 5.64844 0.647135 5.24023 0.460938 4.81055C0.289062 4.38086 0.203125 4.01562 0.203125 3.71484C0.203125 3.32812 0.310547 2.93424 0.525391 2.5332C0.754557 2.13216 1.14844 1.76693 1.70703 1.4375C2.35156 1.09375 2.9388 0.921875 3.46875 0.921875C4.28516 0.921875 4.95833 1.2513 5.48828 1.91016C6.03255 2.55469 6.53385 3.25651 6.99219 4.01562L10.9883 10.5898H11.6328L15.6289 4.01562C16.1016 3.25651 16.6029 2.55469 17.1328 1.91016C17.6628 1.2513 18.3359 0.921875 19.1523 0.921875C19.4102 0.921875 19.6823 0.972005 19.9688 1.07227C20.2695 1.17253 20.5846 1.30859 20.9141 1.48047C21.5156 1.8099 21.931 2.16797 22.1602 2.55469C22.3893 2.92708 22.5039 3.29948 22.5039 3.67188C22.5039 3.98698 22.4108 4.35938 22.2246 4.78906C22.0384 5.21875 21.8307 5.63411 21.6016 6.03516C21.3438 6.50781 21.043 6.98047 20.6992 7.45312L15.3281 15.6602V16.0469L21.3008 25.457C21.6016 25.9297 21.8594 26.4023 22.0742 26.875C22.3034 27.3333 22.418 27.7917 22.418 28.25C22.418 28.6367 22.3105 29.0234 22.0957 29.4102C21.8952 29.7826 21.5156 30.1406 20.957 30.4844C20.3125 30.8281 19.7253 31 19.1953 31C18.4505 31 17.8346 30.7279 17.3477 30.1836C16.8607 29.6393 16.4023 29.0378 15.9727 28.3789L11.6328 21.332H10.9883L6.64844 28.3789C6.21875 29.0378 5.76042 29.6393 5.27344 30.1836C4.78646 30.7279 4.1849 31 3.46875 31C2.92448 31 2.35156 30.8281 1.75 30.4844C1.16276 30.1406 0.754557 29.7826 0.525391 29.4102C0.310547 29.0234 0.203125 28.6367 0.203125 28.25C0.203125 27.7917 0.310547 27.3333 0.525391 26.875C0.754557 26.4023 1.01953 25.9297 1.32031 25.457Z" fill="white"/>
                    </svg>
            </div>
        </button>  
        </div>`
} else {
    x.style.display="none";
}
}

let cs=document.querySelector('.CS')
cs.value=score.computerScore

let ys=document.querySelector(".YS")
ys.value=score.yourScore
function playerGame(player){
let rockbtn=document.querySelector(".main")
    computer();
    result='';
    if (player=='rock'){
        if (computerTurn=='rock'){
            result='its tie'
            rockbtn.innerHTML=`
            <div class=flex>
                <div>
                    <div class="picked">YOU PICKED</div>
                    <div class="con">
                        <div class="con1">
                            <div class=" content-center  " >
                                <svg width="80" height="59" viewBox="0 0 80 59" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <rect width="80" height="58.5075" fill="url(#pattern0_1486_18)"/>
                                <defs>
                                <pattern id="pattern0_1486_18" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlink:href="#image0_1486_18" transform="scale(0.0149254 0.0204082)"/>
                                </pattern>
                                <image id="image0_1486_18" width="67" height="67" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAYAAADHyrhzAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQ6ADAAQAAAABAAAAQwAAAABSa2PkAAAFMElEQVR4Ae1bS4ibVRQ+596MGnRwMdSxOpiXiOOIpepCW91oXXTlAx8gWPddqODOlaCuBFfiRmgRRJEKVsVqqeBYHwslI4hjHUhmwiymoy2ttcwz+e/x3MIvP5lMkj/n3DGBZJM/957zne9+933vH4DhZ6hAKwWwVWIfpZlcLrfHWjvmnDs/NjY2Wy6X66H49a0YpdIt+4HsES74bXHhCeCcMfR0pVKbjtM0v/tSjEJh4i6EzI+IeO2WwiIsIdrJSqXyz5Y8YYIR+gdxN5h5u6UQPhrBTVEUPRMicN+JUSwWHwDAB9sV1hA90S6/17xMr45Sv3w+fx/X/qvGuf0R4p/GwCnr4EzduRes6dB7De57CsAeA4ikPJL+HaImTfWei8Xcs9zc30M0PVdG5GiyVqv9occKYMe7CU+VexHMEYkQXgALsEdTCI/Vc810Q2Rqauqq9ZWVl8jgASRaJTQnESLf36/uxr+dDU+zXoyP2tmkzQsmhu/TM2srx8HgwSt9EREQ6FG1xmjw3rSF7WQfrJvMlAqv8KxwsBOBnvOJ9vEgfE3P/i0cg4jhSRLByy3iqSX5dQgv059XA2QgtdmEB8bdPD0eNoj3EJh17hKPaxJtheUI/trY2JhaWlo63yo/bZrKmFEqle4kF33NtTXuCbAQaXn0ZM/LkRuy2ZG32PlQTwBNTuJu4gdK3lG+HwvRhB/+J5nnbs3l7tcIJBZjJp9/kmtIfc5PUzhCfD2N/Xa2YjHImMe2A9+xdIMP8Z7mYWk8sRi8mHpESkLDn4helOKIZhOeQm/kTdVZKQkNfx6yI7O6truyvHyuVzxRy7CWJnsNrO3HtWopmxUt8kRiOAd3aBdKgkdId0v8RWIYMLdLgmv7EuGEBFMkhoNolyS4vm/UkGCKxOBuuvXAVsJG6MtnJGckECIxeDrblATX9zU/SzBFYvDG5pIkuKYvV0x9ZGTkOwmmSAxeBlclwTV9CfCnubm5yxJMkRhoo18lwTV9EekLKZ5IjOtd5jS4/hg3jMl8+r+KUZ6fvwSGTktJSP352qDK142/S3FELcMH5z3BUSkJqT+frolbhecgFiObve5j7irL0gJJ/I2lzyX+sa9YjNnZ2U0y9GYMuNPf6OjCxET+e424YjE8CefwHW4dixqE0mLw4dJn09PTomV4HFNFDL7zXOcz0Ndi0J38jpw7rhVPRQxPZu/CwlEeTOe0iHWDw6vOVX616VQ3tt3YqIlxzJ80EbzRTVA1G0cn+B2vVS08NTE8IW4dH/DFjmjnmKpgFj5JZd/BWFUM3zoQncqxfQfe4DdmPHCf6GSXJl9VDB/4yroDQOW6r11BeGP2Aw/cf7ezSZunLoZfd0DkPkxLJK09b8y+SuvTyV5dDB9wxNp3OwWW5hM1vpRiNPuL7k2awZK/C4VCla8di8k0xeez1fmFmxmPZ3O9T5CW4enxQPqNHs1mJDzJKapC+AjBxDBkvm0ugtZvfl3yFy2sJE4wMXjDUkkG0nx21v6miRdjBRODX00Mtq23tl6LC6D5HUyMurWqb+8mCz06uiuI0MHESJJXfr6suR9Jchs8MRBE1wHJwjc/D54YDae2Sx14MciateZCaP0euJZhHA3FiGufzwiG3SQWw+CwZcRa8CE8Blu/DN6YgS4Y52DA/1Wl+gP/cSXQZ+DE4G4SjHMw4ECVx+ckAY8dQpHObG4GGej4bpU3xGE+wVrG6Pj4xRCU+W412JgRDNgLwW/6H9AWBBuNi9XFxbI27hBvqMD2CvwLwdBOaVIXj0EAAAAASUVORK5CYII="/>
                                </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div><h1>TIE UP</h1><button onclick="playagain()" class="replay">REPLAY</button></div>
                <div>
                    <div class="cspicked">CS PICKED</div>
                    <div class="con">
                        <div class="con1">
                            <div class=" content-center  " >
                                <svg width="80" height="59" viewBox="0 0 80 59" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <rect width="80" height="58.5075" fill="url(#pattern0_1486_18)"/>
                                <defs>
                                <pattern id="pattern0_1486_18" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlink:href="#image0_1486_18" transform="scale(0.0149254 0.0204082)"/>
                                </pattern>
                                <image id="image0_1486_18" width="67" height="67" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAYAAADHyrhzAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQ6ADAAQAAAABAAAAQwAAAABSa2PkAAAFMElEQVR4Ae1bS4ibVRQ+596MGnRwMdSxOpiXiOOIpepCW91oXXTlAx8gWPddqODOlaCuBFfiRmgRRJEKVsVqqeBYHwslI4hjHUhmwiymoy2ttcwz+e/x3MIvP5lMkj/n3DGBZJM/957zne9+933vH4DhZ6hAKwWwVWIfpZlcLrfHWjvmnDs/NjY2Wy6X66H49a0YpdIt+4HsES74bXHhCeCcMfR0pVKbjtM0v/tSjEJh4i6EzI+IeO2WwiIsIdrJSqXyz5Y8YYIR+gdxN5h5u6UQPhrBTVEUPRMicN+JUSwWHwDAB9sV1hA90S6/17xMr45Sv3w+fx/X/qvGuf0R4p/GwCnr4EzduRes6dB7De57CsAeA4ikPJL+HaImTfWei8Xcs9zc30M0PVdG5GiyVqv9occKYMe7CU+VexHMEYkQXgALsEdTCI/Vc810Q2Rqauqq9ZWVl8jgASRaJTQnESLf36/uxr+dDU+zXoyP2tmkzQsmhu/TM2srx8HgwSt9EREQ6FG1xmjw3rSF7WQfrJvMlAqv8KxwsBOBnvOJ9vEgfE3P/i0cg4jhSRLByy3iqSX5dQgv059XA2QgtdmEB8bdPD0eNoj3EJh17hKPaxJtheUI/trY2JhaWlo63yo/bZrKmFEqle4kF33NtTXuCbAQaXn0ZM/LkRuy2ZG32PlQTwBNTuJu4gdK3lG+HwvRhB/+J5nnbs3l7tcIJBZjJp9/kmtIfc5PUzhCfD2N/Xa2YjHImMe2A9+xdIMP8Z7mYWk8sRi8mHpESkLDn4helOKIZhOeQm/kTdVZKQkNfx6yI7O6truyvHyuVzxRy7CWJnsNrO3HtWopmxUt8kRiOAd3aBdKgkdId0v8RWIYMLdLgmv7EuGEBFMkhoNolyS4vm/UkGCKxOBuuvXAVsJG6MtnJGckECIxeDrblATX9zU/SzBFYvDG5pIkuKYvV0x9ZGTkOwmmSAxeBlclwTV9CfCnubm5yxJMkRhoo18lwTV9EekLKZ5IjOtd5jS4/hg3jMl8+r+KUZ6fvwSGTktJSP352qDK142/S3FELcMH5z3BUSkJqT+frolbhecgFiObve5j7irL0gJJ/I2lzyX+sa9YjNnZ2U0y9GYMuNPf6OjCxET+e424YjE8CefwHW4dixqE0mLw4dJn09PTomV4HFNFDL7zXOcz0Ndi0J38jpw7rhVPRQxPZu/CwlEeTOe0iHWDw6vOVX616VQ3tt3YqIlxzJ80EbzRTVA1G0cn+B2vVS08NTE8IW4dH/DFjmjnmKpgFj5JZd/BWFUM3zoQncqxfQfe4DdmPHCf6GSXJl9VDB/4yroDQOW6r11BeGP2Aw/cf7ezSZunLoZfd0DkPkxLJK09b8y+SuvTyV5dDB9wxNp3OwWW5hM1vpRiNPuL7k2awZK/C4VCla8di8k0xeez1fmFmxmPZ3O9T5CW4enxQPqNHs1mJDzJKapC+AjBxDBkvm0ugtZvfl3yFy2sJE4wMXjDUkkG0nx21v6miRdjBRODX00Mtq23tl6LC6D5HUyMurWqb+8mCz06uiuI0MHESJJXfr6suR9Jchs8MRBE1wHJwjc/D54YDae2Sx14MciateZCaP0euJZhHA3FiGufzwiG3SQWw+CwZcRa8CE8Blu/DN6YgS4Y52DA/1Wl+gP/cSXQZ+DE4G4SjHMw4ECVx+ckAY8dQpHObG4GGej4bpU3xGE+wVrG6Pj4xRCU+W412JgRDNgLwW/6H9AWBBuNi9XFxbI27hBvqMD2CvwLwdBOaVIXj0EAAAAASUVORK5CYII="/>
                                </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `
        }else if (computerTurn=='paper'){
            result='computer win'
            rockbtn.innerHTML=`<div class="flex">
            <div>
            <div class="picked">YOU PICKED</div>
            <div class="con"  >
                <div class="con1">
                    <div class=" content-center  " >
                        <svg width="80" height="59" viewBox="0 0 80 59" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <rect width="80" height="58.5075" fill="url(#pattern0_1486_18)"/>
                            <defs>
                            <pattern id="pattern0_1486_18" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image0_1486_18" transform="scale(0.0149254 0.0204082)"/>
                            </pattern>
                            <image id="image0_1486_18" width="67" height="67" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAYAAADHyrhzAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQ6ADAAQAAAABAAAAQwAAAABSa2PkAAAFMElEQVR4Ae1bS4ibVRQ+596MGnRwMdSxOpiXiOOIpepCW91oXXTlAx8gWPddqODOlaCuBFfiRmgRRJEKVsVqqeBYHwslI4hjHUhmwiymoy2ttcwz+e/x3MIvP5lMkj/n3DGBZJM/957zne9+933vH4DhZ6hAKwWwVWIfpZlcLrfHWjvmnDs/NjY2Wy6X66H49a0YpdIt+4HsES74bXHhCeCcMfR0pVKbjtM0v/tSjEJh4i6EzI+IeO2WwiIsIdrJSqXyz5Y8YYIR+gdxN5h5u6UQPhrBTVEUPRMicN+JUSwWHwDAB9sV1hA90S6/17xMr45Sv3w+fx/X/qvGuf0R4p/GwCnr4EzduRes6dB7De57CsAeA4ikPJL+HaImTfWei8Xcs9zc30M0PVdG5GiyVqv9occKYMe7CU+VexHMEYkQXgALsEdTCI/Vc810Q2Rqauqq9ZWVl8jgASRaJTQnESLf36/uxr+dDU+zXoyP2tmkzQsmhu/TM2srx8HgwSt9EREQ6FG1xmjw3rSF7WQfrJvMlAqv8KxwsBOBnvOJ9vEgfE3P/i0cg4jhSRLByy3iqSX5dQgv059XA2QgtdmEB8bdPD0eNoj3EJh17hKPaxJtheUI/trY2JhaWlo63yo/bZrKmFEqle4kF33NtTXuCbAQaXn0ZM/LkRuy2ZG32PlQTwBNTuJu4gdK3lG+HwvRhB/+J5nnbs3l7tcIJBZjJp9/kmtIfc5PUzhCfD2N/Xa2YjHImMe2A9+xdIMP8Z7mYWk8sRi8mHpESkLDn4helOKIZhOeQm/kTdVZKQkNfx6yI7O6truyvHyuVzxRy7CWJnsNrO3HtWopmxUt8kRiOAd3aBdKgkdId0v8RWIYMLdLgmv7EuGEBFMkhoNolyS4vm/UkGCKxOBuuvXAVsJG6MtnJGckECIxeDrblATX9zU/SzBFYvDG5pIkuKYvV0x9ZGTkOwmmSAxeBlclwTV9CfCnubm5yxJMkRhoo18lwTV9EekLKZ5IjOtd5jS4/hg3jMl8+r+KUZ6fvwSGTktJSP352qDK142/S3FELcMH5z3BUSkJqT+frolbhecgFiObve5j7irL0gJJ/I2lzyX+sa9YjNnZ2U0y9GYMuNPf6OjCxET+e424YjE8CefwHW4dixqE0mLw4dJn09PTomV4HFNFDL7zXOcz0Ndi0J38jpw7rhVPRQxPZu/CwlEeTOe0iHWDw6vOVX616VQ3tt3YqIlxzJ80EbzRTVA1G0cn+B2vVS08NTE8IW4dH/DFjmjnmKpgFj5JZd/BWFUM3zoQncqxfQfe4DdmPHCf6GSXJl9VDB/4yroDQOW6r11BeGP2Aw/cf7ezSZunLoZfd0DkPkxLJK09b8y+SuvTyV5dDB9wxNp3OwWW5hM1vpRiNPuL7k2awZK/C4VCla8di8k0xeez1fmFmxmPZ3O9T5CW4enxQPqNHs1mJDzJKapC+AjBxDBkvm0ugtZvfl3yFy2sJE4wMXjDUkkG0nx21v6miRdjBRODX00Mtq23tl6LC6D5HUyMurWqb+8mCz06uiuI0MHESJJXfr6suR9Jchs8MRBE1wHJwjc/D54YDae2Sx14MciateZCaP0euJZhHA3FiGufzwiG3SQWw+CwZcRa8CE8Blu/DN6YgS4Y52DA/1Wl+gP/cSXQZ+DE4G4SjHMw4ECVx+ckAY8dQpHObG4GGej4bpU3xGE+wVrG6Pj4xRCU+W412JgRDNgLwW/6H9AWBBuNi9XFxbI27hBvqMD2CvwLwdBOaVIXj0EAAAAASUVORK5CYII="/>
                            </defs>
                            </svg>
                    </div>
                </div>
            </div>
        </div>
            <div ><h1 id="lost">YOU LOST</h1><h3 id="against">AGAINST PC</h3><button onclick="playagain()" class="playagain">PLAY AGAIN</button></div>
            <div>
                <div class="cspicked">CS PICKED</div>
                <div class="round3">
                    <div class="round2">
                        <div class="round1">
                            <div class="con3" > 
                                <div class="con1">
                                    <div class=" content-center  ">
                                        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                            <rect width="72" height="72" fill="url(#pattern0_1486_19)"/>
                                            <defs>
                                            <pattern id="pattern0_1486_19" patternContentUnits="objectBoundingBox" width="1" height="1">
                                            <use xlink:href="#image0_1486_19" transform="scale(0.015625)"/>
                                            </pattern>
                                            <image id="image0_1486_19" width="64" height="64" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQKADAAQAAAABAAAAQAAAAABGUUKwAAAEdUlEQVR4Ae2aSWgUQRSGMzPJuIuKIqKCJqAgRMUFN8RoQJR4cTuKkJCDHjzn6smTB2+iBy+CC4riAh7Ug3gwgiKKaNSLqIgrKC44k8z4PZmKPUl3J7VNpqELiqp6r97216vqmu5paEhLikCKQIpAikCKQIpAikANEWhqalqVy+XuUL9TexsbGzfU0PyYm5pL0F+p5UD9hVfNY+FZ1rPRZoLcjo05yk42m91Ff7oaV9oJZEFXgDab8VbGiwO0ZHUJ4BjBlyqrXCTwQxIB9KOBlQ9mwVnhw+uk/grMOQXZ90KJaXcF5/cEAlBB9ufz+aUxAJzHgxbk/oTIdrvzrlqTL2Tbq838G+X6+/u3hdAHSQS+iUF+kPC/s+N/123PFwDTwtxkG8wKoytauVwOlYMfK6fkTVpfAJj4MiYyKQCeYC9H6M1E0HXITUxeRJ2pIxQ1N1EZwBNkHQflC2of9QP1BIEJIMYlSQBM4pC8SKQLKtGK793qflGhaTeJAYDVX010gzdKFWkmk9mr+iZtYgBg9aMehXNNAlcyvgBwcdgpH1XrQ2fC7tgKCoetrwxw6KJfVSkAhvhO5a3OGmRbNOVt9nHU5UrTherpuhmQ5XF0hAvIx1KpdI/2FfUuKhdWq/UysgEv0iEtALh09PA46kHbuIDGDYByjfH4AC0xXS0AuHQcDIsMUJaQCTvDeENoOcZSw4rQtfwJU6JLa9QQmMHcuEtHF/wzcfoAqjOG3wHAbTF8LywdxH/gwUCMF1vgNcfwhTWlUsOmybYSkIcVgJtMHfoiddg8E4IOAAVW6FWMkQxnQWcM35iF3VbqcWMFMYI6AIiaGzG6Glil/fBlL3s5seNsm/J0Abg+gqF5HIanmbNlhHl1w9ZdqTwBfsZ72cv1Ut4ODAzMN3VGNwMKGLplasyTnO4iVrmhC4AIy6WnnkptASDdLhN9sY4QKNn4YpIBXzB408aoS1kej/Jl2biYACDGzhlbdCzIj7KfNiqNAKhsgz82hl3JkgHfbHQZAYBBMRp7KbJxSlP2meb8qummAIiSutgG3D6fVkWkOTAGgG1wFVtWB5Cmr6HTuZg9CGWMkmgMAPrl1+FY3wneFIvF3lHGGjrNBoAGDqCToVprRMS+vH+weldodYuSOHlN9ghHltUo5qAZ+evN8kKh8DhI1O1bZYAYI/jDukYdzb9gG7z4Ib/drQqn8HOyYAVKFlsp0hMucgjvRuSrntjw2dYZICpx5gDN++Hq/VDIuiNofulCu/UZoJzgddg6skF+Kk9QNE/tDQDvQLfVjyDlmzMARCEgtAPCFboTlQGXLSvfx1/t1qPTOvWVX062gFKGc7c4DzYzfqNoDtte9G9En7PgxTenAIhCLib3SdGVdF1elS+hsx2dn8RGYgpboo1n9W2q+rusbvsO2X2JCTjKUTkgCeQE9fNowGAbPaTKZzgvZ0nQT6eHYFBxRD/HZ/VW0nktAbZwYMqnNvk895sD7j3jJ/Dka/PrCPmUnCKQIpAikCKQIuAQgb8JJwfUKJlK3QAAAABJRU5ErkJggg=="/>
                                            </defs>
                                            </svg>
                                            
                                            
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            `
        }else if (computerTurn=='scissors'){
            result='you win'
            rockbtn.innerHTML=`
            <div class="flex">
                    <div>
                <div class="picked">YOU PICKED</div>
                <div class="round3">
                <div class="round2">
                    <div class="round1">
                        <div class="con" >
                            <div class="con1">
                                <div class=" content-center  " >
                                    <svg width="80" height="59" viewBox="0 0 80 59" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <rect width="80" height="58.5075" fill="url(#pattern0_1486_18)"/>
                                        <defs>
                                        <pattern id="pattern0_1486_18" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlink:href="#image0_1486_18" transform="scale(0.0149254 0.0204082)"/>
                                        </pattern>
                                        <image id="image0_1486_18" width="67" height="67" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAYAAADHyrhzAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQ6ADAAQAAAABAAAAQwAAAABSa2PkAAAFMElEQVR4Ae1bS4ibVRQ+596MGnRwMdSxOpiXiOOIpepCW91oXXTlAx8gWPddqODOlaCuBFfiRmgRRJEKVsVqqeBYHwslI4hjHUhmwiymoy2ttcwz+e/x3MIvP5lMkj/n3DGBZJM/957zne9+933vH4DhZ6hAKwWwVWIfpZlcLrfHWjvmnDs/NjY2Wy6X66H49a0YpdIt+4HsES74bXHhCeCcMfR0pVKbjtM0v/tSjEJh4i6EzI+IeO2WwiIsIdrJSqXyz5Y8YYIR+gdxN5h5u6UQPhrBTVEUPRMicN+JUSwWHwDAB9sV1hA90S6/17xMr45Sv3w+fx/X/qvGuf0R4p/GwCnr4EzduRes6dB7De57CsAeA4ikPJL+HaImTfWei8Xcs9zc30M0PVdG5GiyVqv9occKYMe7CU+VexHMEYkQXgALsEdTCI/Vc810Q2Rqauqq9ZWVl8jgASRaJTQnESLf36/uxr+dDU+zXoyP2tmkzQsmhu/TM2srx8HgwSt9EREQ6FG1xmjw3rSF7WQfrJvMlAqv8KxwsBOBnvOJ9vEgfE3P/i0cg4jhSRLByy3iqSX5dQgv059XA2QgtdmEB8bdPD0eNoj3EJh17hKPaxJtheUI/trY2JhaWlo63yo/bZrKmFEqle4kF33NtTXuCbAQaXn0ZM/LkRuy2ZG32PlQTwBNTuJu4gdK3lG+HwvRhB/+J5nnbs3l7tcIJBZjJp9/kmtIfc5PUzhCfD2N/Xa2YjHImMe2A9+xdIMP8Z7mYWk8sRi8mHpESkLDn4helOKIZhOeQm/kTdVZKQkNfx6yI7O6truyvHyuVzxRy7CWJnsNrO3HtWopmxUt8kRiOAd3aBdKgkdId0v8RWIYMLdLgmv7EuGEBFMkhoNolyS4vm/UkGCKxOBuuvXAVsJG6MtnJGckECIxeDrblATX9zU/SzBFYvDG5pIkuKYvV0x9ZGTkOwmmSAxeBlclwTV9CfCnubm5yxJMkRhoo18lwTV9EekLKZ5IjOtd5jS4/hg3jMl8+r+KUZ6fvwSGTktJSP352qDK142/S3FELcMH5z3BUSkJqT+frolbhecgFiObve5j7irL0gJJ/I2lzyX+sa9YjNnZ2U0y9GYMuNPf6OjCxET+e424YjE8CefwHW4dixqE0mLw4dJn09PTomV4HFNFDL7zXOcz0Ndi0J38jpw7rhVPRQxPZu/CwlEeTOe0iHWDw6vOVX616VQ3tt3YqIlxzJ80EbzRTVA1G0cn+B2vVS08NTE8IW4dH/DFjmjnmKpgFj5JZd/BWFUM3zoQncqxfQfe4DdmPHCf6GSXJl9VDB/4yroDQOW6r11BeGP2Aw/cf7ezSZunLoZfd0DkPkxLJK09b8y+SuvTyV5dDB9wxNp3OwWW5hM1vpRiNPuL7k2awZK/C4VCla8di8k0xeez1fmFmxmPZ3O9T5CW4enxQPqNHs1mJDzJKapC+AjBxDBkvm0ugtZvfl3yFy2sJE4wMXjDUkkG0nx21v6miRdjBRODX00Mtq23tl6LC6D5HUyMurWqb+8mCz06uiuI0MHESJJXfr6suR9Jchs8MRBE1wHJwjc/D54YDae2Sx14MciateZCaP0euJZhHA3FiGufzwiG3SQWw+CwZcRa8CE8Blu/DN6YgS4Y52DA/1Wl+gP/cSXQZ+DE4G4SjHMw4ECVx+ckAY8dQpHObG4GGej4bpU3xGE+wVrG6Pj4xRCU+W412JgRDNgLwW/6H9AWBBuNi9XFxbI27hBvqMD2CvwLwdBOaVIXj0EAAAAASUVORK5CYII="/>
                                        </defs>
                                        </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
                <div class=""><h1 id="lost">YOU WIN</h1><h3 id="against">AGAINST PC</h3><button onclick="playagain()
                rules()" class="playagain">PLAY AGAIN</button></div>
                     <div class="cspicked">PC PICKED</div>
            <div class="con2" >
                <div class="con1">
                    <svg width="42" height="57" viewBox="0 0 42 57" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <rect x="4.91736" width="37" height="53.5029" transform="rotate(5.2734 4.91736 0)" fill="url(#pattern0_1486_20)"/>
                        <defs>
                        <pattern id="pattern0_1486_20" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_1486_20" transform="matrix(0.00294059 0 0 0.00203357 -0.286919 0)"/>
                        </pattern>
                        <image id="image0_1486_20" width="512" height="512" xlink:href="data:image/png;base64,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"/>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
        
            `
            document.querySelector('#ass').innerHTML=`
            <div id="ass1">
        <div id="ass2">
            <div id="dis4">
                <div id="dis">
                    <div class="crossos">
                        <ul class="rules">
                            <li class="game">GAME RULES</li>
                            <li>Rock beats scissors, scissors beat paper,paper beats rock.</li>
                            <li>Agree ahead of time wheather you'll count off "rock,paper,scissors, shoot" or just "rock,paper,scissors."</li>
                            <li>Use rock,paper,scissors to settle minor decisions or simply play to pass the time</li>
                            <li>If both players lay down the same hand,each player lays down another hand</li>
                        </ul>
                    </div>
                <button onclick="my()" class="buttoncross">
                    <div class="cross">
                        <svg width="23" height="31" viewBox="0 0 23 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.32031 25.457L7.33594 16.0469V15.6602L1.92188 7.45312C1.76432 7.20964 1.61393 6.97331 1.4707 6.74414C1.32747 6.50065 1.19141 6.26432 1.0625 6.03516C0.847656 5.64844 0.647135 5.24023 0.460938 4.81055C0.289062 4.38086 0.203125 4.01562 0.203125 3.71484C0.203125 3.32812 0.310547 2.93424 0.525391 2.5332C0.754557 2.13216 1.14844 1.76693 1.70703 1.4375C2.35156 1.09375 2.9388 0.921875 3.46875 0.921875C4.28516 0.921875 4.95833 1.2513 5.48828 1.91016C6.03255 2.55469 6.53385 3.25651 6.99219 4.01562L10.9883 10.5898H11.6328L15.6289 4.01562C16.1016 3.25651 16.6029 2.55469 17.1328 1.91016C17.6628 1.2513 18.3359 0.921875 19.1523 0.921875C19.4102 0.921875 19.6823 0.972005 19.9688 1.07227C20.2695 1.17253 20.5846 1.30859 20.9141 1.48047C21.5156 1.8099 21.931 2.16797 22.1602 2.55469C22.3893 2.92708 22.5039 3.29948 22.5039 3.67188C22.5039 3.98698 22.4108 4.35938 22.2246 4.78906C22.0384 5.21875 21.8307 5.63411 21.6016 6.03516C21.3438 6.50781 21.043 6.98047 20.6992 7.45312L15.3281 15.6602V16.0469L21.3008 25.457C21.6016 25.9297 21.8594 26.4023 22.0742 26.875C22.3034 27.3333 22.418 27.7917 22.418 28.25C22.418 28.6367 22.3105 29.0234 22.0957 29.4102C21.8952 29.7826 21.5156 30.1406 20.957 30.4844C20.3125 30.8281 19.7253 31 19.1953 31C18.4505 31 17.8346 30.7279 17.3477 30.1836C16.8607 29.6393 16.4023 29.0378 15.9727 28.3789L11.6328 21.332H10.9883L6.64844 28.3789C6.21875 29.0378 5.76042 29.6393 5.27344 30.1836C4.78646 30.7279 4.1849 31 3.46875 31C2.92448 31 2.35156 30.8281 1.75 30.4844C1.16276 30.1406 0.754557 29.7826 0.525391 29.4102C0.310547 29.0234 0.203125 28.6367 0.203125 28.25C0.203125 27.7917 0.310547 27.3333 0.525391 26.875C0.754557 26.4023 1.01953 25.9297 1.32031 25.457Z" fill="white"/>
                            </svg>
                    </div>
                </button>  
                </div>
            </div>
            <div class="buttonofrules"><button onclick="cliaskck()
            document.querySelector('#dis4').style.display='block'" class="buttonofrules2">RULES
            </button></div>
        </div>
        <div >
            <button class="buttonofrules3" onclick="next()">NEXT</button>
        </div>
    </div>
            `
        }
    }else if (player=='paper'){
        if (computerTurn=='paper'){
            result='its tie'
            rockbtn.innerHTML=`
            <div class="flex">
            <div>
                <div class="picked">YOU PICKED</div>
                <div>
            <div class="cspicked">CS PICKED</div>
            <div class="con3"> 
                <div class="con1">
                    <div class=" content-center  ">
                        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <rect width="72" height="72" fill="url(#pattern0_1486_19)"/>
                            <defs>
                            <pattern id="pattern0_1486_19" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image0_1486_19" transform="scale(0.015625)"/>
                            </pattern>
                            <image id="image0_1486_19" width="64" height="64" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQKADAAQAAAABAAAAQAAAAABGUUKwAAAEdUlEQVR4Ae2aSWgUQRSGMzPJuIuKIqKCJqAgRMUFN8RoQJR4cTuKkJCDHjzn6smTB2+iBy+CC4riAh7Ug3gwgiKKaNSLqIgrKC44k8z4PZmKPUl3J7VNpqELiqp6r97216vqmu5paEhLikCKQIpAikCKQIpAikANEWhqalqVy+XuUL9TexsbGzfU0PyYm5pL0F+p5UD9hVfNY+FZ1rPRZoLcjo05yk42m91Ff7oaV9oJZEFXgDab8VbGiwO0ZHUJ4BjBlyqrXCTwQxIB9KOBlQ9mwVnhw+uk/grMOQXZ90KJaXcF5/cEAlBB9ufz+aUxAJzHgxbk/oTIdrvzrlqTL2Tbq838G+X6+/u3hdAHSQS+iUF+kPC/s+N/123PFwDTwtxkG8wKoytauVwOlYMfK6fkTVpfAJj4MiYyKQCeYC9H6M1E0HXITUxeRJ2pIxQ1N1EZwBNkHQflC2of9QP1BIEJIMYlSQBM4pC8SKQLKtGK793qflGhaTeJAYDVX010gzdKFWkmk9mr+iZtYgBg9aMehXNNAlcyvgBwcdgpH1XrQ2fC7tgKCoetrwxw6KJfVSkAhvhO5a3OGmRbNOVt9nHU5UrTherpuhmQ5XF0hAvIx1KpdI/2FfUuKhdWq/UysgEv0iEtALh09PA46kHbuIDGDYByjfH4AC0xXS0AuHQcDIsMUJaQCTvDeENoOcZSw4rQtfwJU6JLa9QQmMHcuEtHF/wzcfoAqjOG3wHAbTF8LywdxH/gwUCMF1vgNcfwhTWlUsOmybYSkIcVgJtMHfoiddg8E4IOAAVW6FWMkQxnQWcM35iF3VbqcWMFMYI6AIiaGzG6Glil/fBlL3s5seNsm/J0Abg+gqF5HIanmbNlhHl1w9ZdqTwBfsZ72cv1Ut4ODAzMN3VGNwMKGLplasyTnO4iVrmhC4AIy6WnnkptASDdLhN9sY4QKNn4YpIBXzB408aoS1kej/Jl2biYACDGzhlbdCzIj7KfNiqNAKhsgz82hl3JkgHfbHQZAYBBMRp7KbJxSlP2meb8qummAIiSutgG3D6fVkWkOTAGgG1wFVtWB5Cmr6HTuZg9CGWMkmgMAPrl1+FY3wneFIvF3lHGGjrNBoAGDqCToVprRMS+vH+weldodYuSOHlN9ghHltUo5qAZ+evN8kKh8DhI1O1bZYAYI/jDukYdzb9gG7z4Ib/drQqn8HOyYAVKFlsp0hMucgjvRuSrntjw2dYZICpx5gDN++Hq/VDIuiNofulCu/UZoJzgddg6skF+Kk9QNE/tDQDvQLfVjyDlmzMARCEgtAPCFboTlQGXLSvfx1/t1qPTOvWVX062gFKGc7c4DzYzfqNoDtte9G9En7PgxTenAIhCLib3SdGVdF1elS+hsx2dn8RGYgpboo1n9W2q+rusbvsO2X2JCTjKUTkgCeQE9fNowGAbPaTKZzgvZ0nQT6eHYFBxRD/HZ/VW0nktAbZwYMqnNvk895sD7j3jJ/Dka/PrCPmUnCKQIpAikCKQIuAQgb8JJwfUKJlK3QAAAABJRU5ErkJggg=="/>
                            </defs>
                            </svg>
                            
                            
                    </div>
                </div>
            </div>
        </div>
            </div>
            <div><h1>TIE UP</h1><button onclick="playagain()" class="replay">REPLAY</button></div>
            <div>
            <div class="cspicked">CS PICKED</div>
            <div class="con3"> 
                <div class="con1">
                    <div class=" content-center  ">
                        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <rect width="72" height="72" fill="url(#pattern0_1486_19)"/>
                            <defs>
                            <pattern id="pattern0_1486_19" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image0_1486_19" transform="scale(0.015625)"/>
                            </pattern>
                            <image id="image0_1486_19" width="64" height="64" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQKADAAQAAAABAAAAQAAAAABGUUKwAAAEdUlEQVR4Ae2aSWgUQRSGMzPJuIuKIqKCJqAgRMUFN8RoQJR4cTuKkJCDHjzn6smTB2+iBy+CC4riAh7Ug3gwgiKKaNSLqIgrKC44k8z4PZmKPUl3J7VNpqELiqp6r97216vqmu5paEhLikCKQIpAikCKQIpAikANEWhqalqVy+XuUL9TexsbGzfU0PyYm5pL0F+p5UD9hVfNY+FZ1rPRZoLcjo05yk42m91Ff7oaV9oJZEFXgDab8VbGiwO0ZHUJ4BjBlyqrXCTwQxIB9KOBlQ9mwVnhw+uk/grMOQXZ90KJaXcF5/cEAlBB9ufz+aUxAJzHgxbk/oTIdrvzrlqTL2Tbq838G+X6+/u3hdAHSQS+iUF+kPC/s+N/123PFwDTwtxkG8wKoytauVwOlYMfK6fkTVpfAJj4MiYyKQCeYC9H6M1E0HXITUxeRJ2pIxQ1N1EZwBNkHQflC2of9QP1BIEJIMYlSQBM4pC8SKQLKtGK793qflGhaTeJAYDVX010gzdKFWkmk9mr+iZtYgBg9aMehXNNAlcyvgBwcdgpH1XrQ2fC7tgKCoetrwxw6KJfVSkAhvhO5a3OGmRbNOVt9nHU5UrTherpuhmQ5XF0hAvIx1KpdI/2FfUuKhdWq/UysgEv0iEtALh09PA46kHbuIDGDYByjfH4AC0xXS0AuHQcDIsMUJaQCTvDeENoOcZSw4rQtfwJU6JLa9QQmMHcuEtHF/wzcfoAqjOG3wHAbTF8LywdxH/gwUCMF1vgNcfwhTWlUsOmybYSkIcVgJtMHfoiddg8E4IOAAVW6FWMkQxnQWcM35iF3VbqcWMFMYI6AIiaGzG6Glil/fBlL3s5seNsm/J0Abg+gqF5HIanmbNlhHl1w9ZdqTwBfsZ72cv1Ut4ODAzMN3VGNwMKGLplasyTnO4iVrmhC4AIy6WnnkptASDdLhN9sY4QKNn4YpIBXzB408aoS1kej/Jl2biYACDGzhlbdCzIj7KfNiqNAKhsgz82hl3JkgHfbHQZAYBBMRp7KbJxSlP2meb8qummAIiSutgG3D6fVkWkOTAGgG1wFVtWB5Cmr6HTuZg9CGWMkmgMAPrl1+FY3wneFIvF3lHGGjrNBoAGDqCToVprRMS+vH+weldodYuSOHlN9ghHltUo5qAZ+evN8kKh8DhI1O1bZYAYI/jDukYdzb9gG7z4Ib/drQqn8HOyYAVKFlsp0hMucgjvRuSrntjw2dYZICpx5gDN++Hq/VDIuiNofulCu/UZoJzgddg6skF+Kk9QNE/tDQDvQLfVjyDlmzMARCEgtAPCFboTlQGXLSvfx1/t1qPTOvWVX062gFKGc7c4DzYzfqNoDtte9G9En7PgxTenAIhCLib3SdGVdF1elS+hsx2dn8RGYgpboo1n9W2q+rusbvsO2X2JCTjKUTkgCeQE9fNowGAbPaTKZzgvZ0nQT6eHYFBxRD/HZ/VW0nktAbZwYMqnNvk895sD7j3jJ/Dka/PrCPmUnCKQIpAikCKQIuAQgb8JJwfUKJlK3QAAAABJRU5ErkJggg=="/>
                            </defs>
                            </svg>
                            
                            
                    </div>
                </div>
            </div>
        </div>
        </div>
            `
        }else if (computerTurn=='scissors'){
            result='computer win'
            rockbtn.innerHTML=`
            <div class="flex">
            <div>
                <div class="picked">YOU PICKED</div>
                <div class="con3" > 
                    <div class="con1">
                        <div class=" content-center  ">
                            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <rect width="72" height="72" fill="url(#pattern0_1486_19)"/>
                                <defs>
                                <pattern id="pattern0_1486_19" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlink:href="#image0_1486_19" transform="scale(0.015625)"/>
                                </pattern>
                                <image id="image0_1486_19" width="64" height="64" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQKADAAQAAAABAAAAQAAAAABGUUKwAAAEdUlEQVR4Ae2aSWgUQRSGMzPJuIuKIqKCJqAgRMUFN8RoQJR4cTuKkJCDHjzn6smTB2+iBy+CC4riAh7Ug3gwgiKKaNSLqIgrKC44k8z4PZmKPUl3J7VNpqELiqp6r97216vqmu5paEhLikCKQIpAikCKQIpAikANEWhqalqVy+XuUL9TexsbGzfU0PyYm5pL0F+p5UD9hVfNY+FZ1rPRZoLcjo05yk42m91Ff7oaV9oJZEFXgDab8VbGiwO0ZHUJ4BjBlyqrXCTwQxIB9KOBlQ9mwVnhw+uk/grMOQXZ90KJaXcF5/cEAlBB9ufz+aUxAJzHgxbk/oTIdrvzrlqTL2Tbq838G+X6+/u3hdAHSQS+iUF+kPC/s+N/123PFwDTwtxkG8wKoytauVwOlYMfK6fkTVpfAJj4MiYyKQCeYC9H6M1E0HXITUxeRJ2pIxQ1N1EZwBNkHQflC2of9QP1BIEJIMYlSQBM4pC8SKQLKtGK793qflGhaTeJAYDVX010gzdKFWkmk9mr+iZtYgBg9aMehXNNAlcyvgBwcdgpH1XrQ2fC7tgKCoetrwxw6KJfVSkAhvhO5a3OGmRbNOVt9nHU5UrTherpuhmQ5XF0hAvIx1KpdI/2FfUuKhdWq/UysgEv0iEtALh09PA46kHbuIDGDYByjfH4AC0xXS0AuHQcDIsMUJaQCTvDeENoOcZSw4rQtfwJU6JLa9QQmMHcuEtHF/wzcfoAqjOG3wHAbTF8LywdxH/gwUCMF1vgNcfwhTWlUsOmybYSkIcVgJtMHfoiddg8E4IOAAVW6FWMkQxnQWcM35iF3VbqcWMFMYI6AIiaGzG6Glil/fBlL3s5seNsm/J0Abg+gqF5HIanmbNlhHl1w9ZdqTwBfsZ72cv1Ut4ODAzMN3VGNwMKGLplasyTnO4iVrmhC4AIy6WnnkptASDdLhN9sY4QKNn4YpIBXzB408aoS1kej/Jl2biYACDGzhlbdCzIj7KfNiqNAKhsgz82hl3JkgHfbHQZAYBBMRp7KbJxSlP2meb8qummAIiSutgG3D6fVkWkOTAGgG1wFVtWB5Cmr6HTuZg9CGWMkmgMAPrl1+FY3wneFIvF3lHGGjrNBoAGDqCToVprRMS+vH+weldodYuSOHlN9ghHltUo5qAZ+evN8kKh8DhI1O1bZYAYI/jDukYdzb9gG7z4Ib/drQqn8HOyYAVKFlsp0hMucgjvRuSrntjw2dYZICpx5gDN++Hq/VDIuiNofulCu/UZoJzgddg6skF+Kk9QNE/tDQDvQLfVjyDlmzMARCEgtAPCFboTlQGXLSvfx1/t1qPTOvWVX062gFKGc7c4DzYzfqNoDtte9G9En7PgxTenAIhCLib3SdGVdF1elS+hsx2dn8RGYgpboo1n9W2q+rusbvsO2X2JCTjKUTkgCeQE9fNowGAbPaTKZzgvZ0nQT6eHYFBxRD/HZ/VW0nktAbZwYMqnNvk895sD7j3jJ/Dka/PrCPmUnCKQIpAikCKQIuAQgb8JJwfUKJlK3QAAAABJRU5ErkJggg=="/>
                                </defs>
                                </svg>
                                
                                
                        </div>
                    </div>
                </div>
            </div>
            <div ><h1 id="lost">YOU LOST</h1><h3 id="against">AGAINST PC</h3><button  onclick="playagain()" class="playagain">PLAY AGAIN</button></div>
        <div>
                <div class="cspicked">CS PICKED</div>
                <div class="round3">
                    <div class="round2">
                        <div class="round1">
                            <div class="con2" onclick="playerGame('scissors')" >
                                <div class="con1">
                                    <div class=" content-center  " >
                                        <svg width="42" height="57" viewBox="0 0 42 57" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                            <rect x="4.91736" width="37" height="53.5029" transform="rotate(5.2734 4.91736 0)" fill="url(#pattern0_1486_20)"/>
                                            <defs>
                                            <pattern id="pattern0_1486_20" patternContentUnits="objectBoundingBox" width="1" height="1">
                                            <use xlink:href="#image0_1486_20" transform="matrix(0.00294059 0 0 0.00203357 -0.286919 0)"/>
                                            </pattern>
                                            <image id="image0_1486_20" width="512" height="512" xlink:href="data:image/png;base64,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"/>
                                            </defs>
                                            </svg>
                                            
                                            
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
            `
        }else if (computerTurn=='rock'){
            result='you win'
            rockbtn.innerHTML=`
            <div class="flex">
            <div>
                <div class="picked">YOU PICKED</div>
                <div class="round3">
                    <div class="round2">
                        <div class="round1">
                            <div class="con3" onclick="playerGame('paper')"> 
                                <div class="con1">
                                    <div class=" content-center  ">
                                        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <rect width="72" height="72" fill="url(#pattern0_1486_19)"/>
                                        <defs>
                                        <pattern id="pattern0_1486_19" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlink:href="#image0_1486_19" transform="scale(0.015625)"/>
                                        </pattern>
                                        <image id="image0_1486_19" width="64" height="64" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQKADAAQAAAABAAAAQAAAAABGUUKwAAAEdUlEQVR4Ae2aSWgUQRSGMzPJuIuKIqKCJqAgRMUFN8RoQJR4cTuKkJCDHjzn6smTB2+iBy+CC4riAh7Ug3gwgiKKaNSLqIgrKC44k8z4PZmKPUl3J7VNpqELiqp6r97216vqmu5paEhLikCKQIpAikCKQIpAikANEWhqalqVy+XuUL9TexsbGzfU0PyYm5pL0F+p5UD9hVfNY+FZ1rPRZoLcjo05yk42m91Ff7oaV9oJZEFXgDab8VbGiwO0ZHUJ4BjBlyqrXCTwQxIB9KOBlQ9mwVnhw+uk/grMOQXZ90KJaXcF5/cEAlBB9ufz+aUxAJzHgxbk/oTIdrvzrlqTL2Tbq838G+X6+/u3hdAHSQS+iUF+kPC/s+N/123PFwDTwtxkG8wKoytauVwOlYMfK6fkTVpfAJj4MiYyKQCeYC9H6M1E0HXITUxeRJ2pIxQ1N1EZwBNkHQflC2of9QP1BIEJIMYlSQBM4pC8SKQLKtGK793qflGhaTeJAYDVX010gzdKFWkmk9mr+iZtYgBg9aMehXNNAlcyvgBwcdgpH1XrQ2fC7tgKCoetrwxw6KJfVSkAhvhO5a3OGmRbNOVt9nHU5UrTherpuhmQ5XF0hAvIx1KpdI/2FfUuKhdWq/UysgEv0iEtALh09PA46kHbuIDGDYByjfH4AC0xXS0AuHQcDIsMUJaQCTvDeENoOcZSw4rQtfwJU6JLa9QQmMHcuEtHF/wzcfoAqjOG3wHAbTF8LywdxH/gwUCMF1vgNcfwhTWlUsOmybYSkIcVgJtMHfoiddg8E4IOAAVW6FWMkQxnQWcM35iF3VbqcWMFMYI6AIiaGzG6Glil/fBlL3s5seNsm/J0Abg+gqF5HIanmbNlhHl1w9ZdqTwBfsZ72cv1Ut4ODAzMN3VGNwMKGLplasyTnO4iVrmhC4AIy6WnnkptASDdLhN9sY4QKNn4YpIBXzB408aoS1kej/Jl2biYACDGzhlbdCzIj7KfNiqNAKhsgz82hl3JkgHfbHQZAYBBMRp7KbJxSlP2meb8qummAIiSutgG3D6fVkWkOTAGgG1wFVtWB5Cmr6HTuZg9CGWMkmgMAPrl1+FY3wneFIvF3lHGGjrNBoAGDqCToVprRMS+vH+weldodYuSOHlN9ghHltUo5qAZ+evN8kKh8DhI1O1bZYAYI/jDukYdzb9gG7z4Ib/drQqn8HOyYAVKFlsp0hMucgjvRuSrntjw2dYZICpx5gDN++Hq/VDIuiNofulCu/UZoJzgddg6skF+Kk9QNE/tDQDvQLfVjyDlmzMARCEgtAPCFboTlQGXLSvfx1/t1qPTOvWVX062gFKGc7c4DzYzfqNoDtte9G9En7PgxTenAIhCLib3SdGVdF1elS+hsx2dn8RGYgpboo1n9W2q+rusbvsO2X2JCTjKUTkgCeQE9fNowGAbPaTKZzgvZ0nQT6eHYFBxRD/HZ/VW0nktAbZwYMqnNvk895sD7j3jJ/Dka/PrCPmUnCKQIpAikCKQIuAQgb8JJwfUKJlK3QAAAABJRU5ErkJggg=="/>
                                        </defs>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class=""><h1 id="lost">YOU WIN</h1><h3 id="against">AGAINST PC</h3><button onclick="playagain()
                rules()" class="playagain">PLAY AGAIN</button></div>
                <div class="cspicked">CS PICKED</div>
            <div class="con">
                <div class="con1">
                    <div class=" content-center  " >
                        <svg width="80" height="59" viewBox="0 0 80 59" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <rect width="80" height="58.5075" fill="url(#pattern0_1486_18)"/>
                            <defs>
                            <pattern id="pattern0_1486_18" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image0_1486_18" transform="scale(0.0149254 0.0204082)"/>
                            </pattern>
                            <image id="image0_1486_18" width="67" height="67" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAYAAADHyrhzAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQ6ADAAQAAAABAAAAQwAAAABSa2PkAAAFMElEQVR4Ae1bS4ibVRQ+596MGnRwMdSxOpiXiOOIpepCW91oXXTlAx8gWPddqODOlaCuBFfiRmgRRJEKVsVqqeBYHwslI4hjHUhmwiymoy2ttcwz+e/x3MIvP5lMkj/n3DGBZJM/957zne9+933vH4DhZ6hAKwWwVWIfpZlcLrfHWjvmnDs/NjY2Wy6X66H49a0YpdIt+4HsES74bXHhCeCcMfR0pVKbjtM0v/tSjEJh4i6EzI+IeO2WwiIsIdrJSqXyz5Y8YYIR+gdxN5h5u6UQPhrBTVEUPRMicN+JUSwWHwDAB9sV1hA90S6/17xMr45Sv3w+fx/X/qvGuf0R4p/GwCnr4EzduRes6dB7De57CsAeA4ikPJL+HaImTfWei8Xcs9zc30M0PVdG5GiyVqv9occKYMe7CU+VexHMEYkQXgALsEdTCI/Vc810Q2Rqauqq9ZWVl8jgASRaJTQnESLf36/uxr+dDU+zXoyP2tmkzQsmhu/TM2srx8HgwSt9EREQ6FG1xmjw3rSF7WQfrJvMlAqv8KxwsBOBnvOJ9vEgfE3P/i0cg4jhSRLByy3iqSX5dQgv059XA2QgtdmEB8bdPD0eNoj3EJh17hKPaxJtheUI/trY2JhaWlo63yo/bZrKmFEqle4kF33NtTXuCbAQaXn0ZM/LkRuy2ZG32PlQTwBNTuJu4gdK3lG+HwvRhB/+J5nnbs3l7tcIJBZjJp9/kmtIfc5PUzhCfD2N/Xa2YjHImMe2A9+xdIMP8Z7mYWk8sRi8mHpESkLDn4helOKIZhOeQm/kTdVZKQkNfx6yI7O6truyvHyuVzxRy7CWJnsNrO3HtWopmxUt8kRiOAd3aBdKgkdId0v8RWIYMLdLgmv7EuGEBFMkhoNolyS4vm/UkGCKxOBuuvXAVsJG6MtnJGckECIxeDrblATX9zU/SzBFYvDG5pIkuKYvV0x9ZGTkOwmmSAxeBlclwTV9CfCnubm5yxJMkRhoo18lwTV9EekLKZ5IjOtd5jS4/hg3jMl8+r+KUZ6fvwSGTktJSP352qDK142/S3FELcMH5z3BUSkJqT+frolbhecgFiObve5j7irL0gJJ/I2lzyX+sa9YjNnZ2U0y9GYMuNPf6OjCxET+e424YjE8CefwHW4dixqE0mLw4dJn09PTomV4HFNFDL7zXOcz0Ndi0J38jpw7rhVPRQxPZu/CwlEeTOe0iHWDw6vOVX616VQ3tt3YqIlxzJ80EbzRTVA1G0cn+B2vVS08NTE8IW4dH/DFjmjnmKpgFj5JZd/BWFUM3zoQncqxfQfe4DdmPHCf6GSXJl9VDB/4yroDQOW6r11BeGP2Aw/cf7ezSZunLoZfd0DkPkxLJK09b8y+SuvTyV5dDB9wxNp3OwWW5hM1vpRiNPuL7k2awZK/C4VCla8di8k0xeez1fmFmxmPZ3O9T5CW4enxQPqNHs1mJDzJKapC+AjBxDBkvm0ugtZvfl3yFy2sJE4wMXjDUkkG0nx21v6miRdjBRODX00Mtq23tl6LC6D5HUyMurWqb+8mCz06uiuI0MHESJJXfr6suR9Jchs8MRBE1wHJwjc/D54YDae2Sx14MciateZCaP0euJZhHA3FiGufzwiG3SQWw+CwZcRa8CE8Blu/DN6YgS4Y52DA/1Wl+gP/cSXQZ+DE4G4SjHMw4ECVx+ckAY8dQpHObG4GGej4bpU3xGE+wVrG6Pj4xRCU+W412JgRDNgLwW/6H9AWBBuNi9XFxbI27hBvqMD2CvwLwdBOaVIXj0EAAAAASUVORK5CYII="/>
                            </defs>
                            </svg>
                    </div>
                </div>
            </div>
        </div>
        </div>
            `
            document.querySelector('#ass').innerHTML=`
            <div id="ass1">
        <div id="ass2">
            <div id="dis4">
                <div id="dis">
                    <div class="crossos">
                        <ul class="rules">
                            <li class="game">GAME RULES</li>
                            <li>Rock beats scissors, scissors beat paper,paper beats rock.</li>
                            <li>Agree ahead of time wheather you'll count off "rock,paper,scissors, shoot" or just "rock,paper,scissors."</li>
                            <li>Use rock,paper,scissors to settle minor decisions or simply play to pass the time</li>
                            <li>If both players lay down the same hand,each player lays down another hand</li>
                        </ul>
                    </div>
                <button onclick="my()" class="buttoncross">
                    <div class="cross">
                        <svg width="23" height="31" viewBox="0 0 23 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.32031 25.457L7.33594 16.0469V15.6602L1.92188 7.45312C1.76432 7.20964 1.61393 6.97331 1.4707 6.74414C1.32747 6.50065 1.19141 6.26432 1.0625 6.03516C0.847656 5.64844 0.647135 5.24023 0.460938 4.81055C0.289062 4.38086 0.203125 4.01562 0.203125 3.71484C0.203125 3.32812 0.310547 2.93424 0.525391 2.5332C0.754557 2.13216 1.14844 1.76693 1.70703 1.4375C2.35156 1.09375 2.9388 0.921875 3.46875 0.921875C4.28516 0.921875 4.95833 1.2513 5.48828 1.91016C6.03255 2.55469 6.53385 3.25651 6.99219 4.01562L10.9883 10.5898H11.6328L15.6289 4.01562C16.1016 3.25651 16.6029 2.55469 17.1328 1.91016C17.6628 1.2513 18.3359 0.921875 19.1523 0.921875C19.4102 0.921875 19.6823 0.972005 19.9688 1.07227C20.2695 1.17253 20.5846 1.30859 20.9141 1.48047C21.5156 1.8099 21.931 2.16797 22.1602 2.55469C22.3893 2.92708 22.5039 3.29948 22.5039 3.67188C22.5039 3.98698 22.4108 4.35938 22.2246 4.78906C22.0384 5.21875 21.8307 5.63411 21.6016 6.03516C21.3438 6.50781 21.043 6.98047 20.6992 7.45312L15.3281 15.6602V16.0469L21.3008 25.457C21.6016 25.9297 21.8594 26.4023 22.0742 26.875C22.3034 27.3333 22.418 27.7917 22.418 28.25C22.418 28.6367 22.3105 29.0234 22.0957 29.4102C21.8952 29.7826 21.5156 30.1406 20.957 30.4844C20.3125 30.8281 19.7253 31 19.1953 31C18.4505 31 17.8346 30.7279 17.3477 30.1836C16.8607 29.6393 16.4023 29.0378 15.9727 28.3789L11.6328 21.332H10.9883L6.64844 28.3789C6.21875 29.0378 5.76042 29.6393 5.27344 30.1836C4.78646 30.7279 4.1849 31 3.46875 31C2.92448 31 2.35156 30.8281 1.75 30.4844C1.16276 30.1406 0.754557 29.7826 0.525391 29.4102C0.310547 29.0234 0.203125 28.6367 0.203125 28.25C0.203125 27.7917 0.310547 27.3333 0.525391 26.875C0.754557 26.4023 1.01953 25.9297 1.32031 25.457Z" fill="white"/>
                            </svg>
                    </div>
                </button>  
                </div>
            </div>
            <div class="buttonofrules"><button onclick="cliaskck()
            document.querySelector('#dis4').style.display='block'" class="buttonofrules2">RULES
            </button></div>
        </div>
        <div >
            <button class="buttonofrules3"
            onclick="next()">NEXT</button>
        </div>
    </div>
            `
        }
    }else if(player=='scissors'){
        if (computerTurn=='scissors'){
            result='its tie'
            rockbtn.innerHTML=`
            <div class="flex">
                <div>
                    <div class="picked">YOU PICKED</div>
                    <div class="con2" >
                        <div class="con1">
                        <div class=" content-center  " >
                            <svg width="42" height="57" viewBox="0 0 42 57" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <rect x="4.91736" width="37" height="53.5029" transform="rotate(5.2734 4.91736 0)" fill="url(#pattern0_1486_20)"/>
                                <defs>
                                <pattern id="pattern0_1486_20" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlink:href="#image0_1486_20" transform="matrix(0.00294059 0 0 0.00203357 -0.286919 0)"/>
                                </pattern>
                                <image id="image0_1486_20" width="512" height="512" xlink:href="data:image/png;base64,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"/>
                                </defs>
                                </svg>
                                
                                
                        </div>
                    </div>
                </div>
            </div>
            <div><h1>TIE UP</h1><button onclick="playagain()" class="replay">REPLAY</button></div>
            <div>
                <div class="cspicked">CS PICKED</div>
                <div class="con2" >
                    <div class="con1">
                        <div class=" content-center  " >
                            <svg width="42" height="57" viewBox="0 0 42 57" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <rect x="4.91736" width="37" height="53.5029" transform="rotate(5.2734 4.91736 0)" fill="url(#pattern0_1486_20)"/>
                                <defs>
                                <pattern id="pattern0_1486_20" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlink:href="#image0_1486_20" transform="matrix(0.00294059 0 0 0.00203357 -0.286919 0)"/>
                                </pattern>
                                <image id="image0_1486_20" width="512" height="512" xlink:href="data:image/png;base64,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"/>
                                </defs>
                                </svg>
                                
                                
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
            `
        }else if (computerTurn=='rock'){
            result='computer win'
            rockbtn.innerHTML=`
            <div class="flex">
            <div>
                <div class="picked">YOU PICKED</div>
                <div class="con2" >
                    <div class="con1">
                        <div class=" content-center  " >
                            <svg width="42" height="57" viewBox="0 0 42 57" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <rect x="4.91736" width="37" height="53.5029" transform="rotate(5.2734 4.91736 0)" fill="url(#pattern0_1486_20)"/>
                                <defs>
                                <pattern id="pattern0_1486_20" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlink:href="#image0_1486_20" transform="matrix(0.00294059 0 0 0.00203357 -0.286919 0)"/>
                                </pattern>
                                <image id="image0_1486_20" width="512" height="512" xlink:href="data:image/png;base64,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"/>
                                </defs>
                                </svg>
                                
                                
                        </div>
                    </div>
                </div>
            </div>
            <div ><h1 id="lost">YOU LOST</h1><h3 id="against">AGAINST PC</h3><button onclick="playagain()" class="playagain">PLAY AGAIN</button></div>
            <div>
                <div class="cspicked">CS PICKED</div>
                <div class="round3">
                    <div class="round2">
                        <div class="round1">
                            <div class="con1">
                                <div class=" content-center  " >
                                    <svg width="80" height="59" viewBox="0 0 80 59" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <rect width="80" height="58.5075" fill="url(#pattern0_1486_18)"/>
                                        <defs>
                                        <pattern id="pattern0_1486_18" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlink:href="#image0_1486_18" transform="scale(0.0149254 0.0204082)"/>
                                        </pattern>
                                        <image id="image0_1486_18" width="67" height="67" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAYAAADHyrhzAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQ6ADAAQAAAABAAAAQwAAAABSa2PkAAAFMElEQVR4Ae1bS4ibVRQ+596MGnRwMdSxOpiXiOOIpepCW91oXXTlAx8gWPddqODOlaCuBFfiRmgRRJEKVsVqqeBYHwslI4hjHUhmwiymoy2ttcwz+e/x3MIvP5lMkj/n3DGBZJM/957zne9+933vH4DhZ6hAKwWwVWIfpZlcLrfHWjvmnDs/NjY2Wy6X66H49a0YpdIt+4HsES74bXHhCeCcMfR0pVKbjtM0v/tSjEJh4i6EzI+IeO2WwiIsIdrJSqXyz5Y8YYIR+gdxN5h5u6UQPhrBTVEUPRMicN+JUSwWHwDAB9sV1hA90S6/17xMr45Sv3w+fx/X/qvGuf0R4p/GwCnr4EzduRes6dB7De57CsAeA4ikPJL+HaImTfWei8Xcs9zc30M0PVdG5GiyVqv9occKYMe7CU+VexHMEYkQXgALsEdTCI/Vc810Q2Rqauqq9ZWVl8jgASRaJTQnESLf36/uxr+dDU+zXoyP2tmkzQsmhu/TM2srx8HgwSt9EREQ6FG1xmjw3rSF7WQfrJvMlAqv8KxwsBOBnvOJ9vEgfE3P/i0cg4jhSRLByy3iqSX5dQgv059XA2QgtdmEB8bdPD0eNoj3EJh17hKPaxJtheUI/trY2JhaWlo63yo/bZrKmFEqle4kF33NtTXuCbAQaXn0ZM/LkRuy2ZG32PlQTwBNTuJu4gdK3lG+HwvRhB/+J5nnbs3l7tcIJBZjJp9/kmtIfc5PUzhCfD2N/Xa2YjHImMe2A9+xdIMP8Z7mYWk8sRi8mHpESkLDn4helOKIZhOeQm/kTdVZKQkNfx6yI7O6truyvHyuVzxRy7CWJnsNrO3HtWopmxUt8kRiOAd3aBdKgkdId0v8RWIYMLdLgmv7EuGEBFMkhoNolyS4vm/UkGCKxOBuuvXAVsJG6MtnJGckECIxeDrblATX9zU/SzBFYvDG5pIkuKYvV0x9ZGTkOwmmSAxeBlclwTV9CfCnubm5yxJMkRhoo18lwTV9EekLKZ5IjOtd5jS4/hg3jMl8+r+KUZ6fvwSGTktJSP352qDK142/S3FELcMH5z3BUSkJqT+frolbhecgFiObve5j7irL0gJJ/I2lzyX+sa9YjNnZ2U0y9GYMuNPf6OjCxET+e424YjE8CefwHW4dixqE0mLw4dJn09PTomV4HFNFDL7zXOcz0Ndi0J38jpw7rhVPRQxPZu/CwlEeTOe0iHWDw6vOVX616VQ3tt3YqIlxzJ80EbzRTVA1G0cn+B2vVS08NTE8IW4dH/DFjmjnmKpgFj5JZd/BWFUM3zoQncqxfQfe4DdmPHCf6GSXJl9VDB/4yroDQOW6r11BeGP2Aw/cf7ezSZunLoZfd0DkPkxLJK09b8y+SuvTyV5dDB9wxNp3OwWW5hM1vpRiNPuL7k2awZK/C4VCla8di8k0xeez1fmFmxmPZ3O9T5CW4enxQPqNHs1mJDzJKapC+AjBxDBkvm0ugtZvfl3yFy2sJE4wMXjDUkkG0nx21v6miRdjBRODX00Mtq23tl6LC6D5HUyMurWqb+8mCz06uiuI0MHESJJXfr6suR9Jchs8MRBE1wHJwjc/D54YDae2Sx14MciateZCaP0euJZhHA3FiGufzwiG3SQWw+CwZcRa8CE8Blu/DN6YgS4Y52DA/1Wl+gP/cSXQZ+DE4G4SjHMw4ECVx+ckAY8dQpHObG4GGej4bpU3xGE+wVrG6Pj4xRCU+W412JgRDNgLwW/6H9AWBBuNi9XFxbI27hBvqMD2CvwLwdBOaVIXj0EAAAAASUVORK5CYII="/>
                                        </defs>
                                        </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            `
        }else if (computerTurn=='paper'){
            result='you win'
            rockbtn.innerHTML=`
            <div class="flex">
            <div>
                <div class="picked">YOU PICKED</div>
                <div class="round3">
                    <div class="round2">
                        <div class="round1">
                            <div class="con2" onclick="playerGame('scissors')" >
                                <div class="con1">
                                    <div class=" content-center  " >
                                        <svg width="42" height="57" viewBox="0 0 42 57" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                            <rect x="4.91736" width="37" height="53.5029" transform="rotate(5.2734 4.91736 0)" fill="url(#pattern0_1486_20)"/>
                                            <defs>
                                            <pattern id="pattern0_1486_20" patternContentUnits="objectBoundingBox" width="1" height="1">
                                            <use xlink:href="#image0_1486_20" transform="matrix(0.00294059 0 0 0.00203357 -0.286919 0)"/>
                                            </pattern>
                                            <image id="image0_1486_20" width="512" height="512" xlink:href="data:image/png;base64,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"/>
                                            </defs>
                                            </svg>
                                            
                                            
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class=""><h1 id="lost">YOU WIN</h1><h3 id="against">AGAINST PC</h3><button onclick="playagain()
                rules()" class="playagain">PLAY AGAIN</button></div>
            <div>
                <div class="cspicked">CS PICKED</div>
                <div class="con3" > 
                    <div class="con1">
                        <div class=" content-center  ">
                            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <rect width="72" height="72" fill="url(#pattern0_1486_19)"/>
                                <defs>
                                <pattern id="pattern0_1486_19" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlink:href="#image0_1486_19" transform="scale(0.015625)"/>
                                </pattern>
                                <image id="image0_1486_19" width="64" height="64" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQKADAAQAAAABAAAAQAAAAABGUUKwAAAEdUlEQVR4Ae2aSWgUQRSGMzPJuIuKIqKCJqAgRMUFN8RoQJR4cTuKkJCDHjzn6smTB2+iBy+CC4riAh7Ug3gwgiKKaNSLqIgrKC44k8z4PZmKPUl3J7VNpqELiqp6r97216vqmu5paEhLikCKQIpAikCKQIpAikANEWhqalqVy+XuUL9TexsbGzfU0PyYm5pL0F+p5UD9hVfNY+FZ1rPRZoLcjo05yk42m91Ff7oaV9oJZEFXgDab8VbGiwO0ZHUJ4BjBlyqrXCTwQxIB9KOBlQ9mwVnhw+uk/grMOQXZ90KJaXcF5/cEAlBB9ufz+aUxAJzHgxbk/oTIdrvzrlqTL2Tbq838G+X6+/u3hdAHSQS+iUF+kPC/s+N/123PFwDTwtxkG8wKoytauVwOlYMfK6fkTVpfAJj4MiYyKQCeYC9H6M1E0HXITUxeRJ2pIxQ1N1EZwBNkHQflC2of9QP1BIEJIMYlSQBM4pC8SKQLKtGK793qflGhaTeJAYDVX010gzdKFWkmk9mr+iZtYgBg9aMehXNNAlcyvgBwcdgpH1XrQ2fC7tgKCoetrwxw6KJfVSkAhvhO5a3OGmRbNOVt9nHU5UrTherpuhmQ5XF0hAvIx1KpdI/2FfUuKhdWq/UysgEv0iEtALh09PA46kHbuIDGDYByjfH4AC0xXS0AuHQcDIsMUJaQCTvDeENoOcZSw4rQtfwJU6JLa9QQmMHcuEtHF/wzcfoAqjOG3wHAbTF8LywdxH/gwUCMF1vgNcfwhTWlUsOmybYSkIcVgJtMHfoiddg8E4IOAAVW6FWMkQxnQWcM35iF3VbqcWMFMYI6AIiaGzG6Glil/fBlL3s5seNsm/J0Abg+gqF5HIanmbNlhHl1w9ZdqTwBfsZ72cv1Ut4ODAzMN3VGNwMKGLplasyTnO4iVrmhC4AIy6WnnkptASDdLhN9sY4QKNn4YpIBXzB408aoS1kej/Jl2biYACDGzhlbdCzIj7KfNiqNAKhsgz82hl3JkgHfbHQZAYBBMRp7KbJxSlP2meb8qummAIiSutgG3D6fVkWkOTAGgG1wFVtWB5Cmr6HTuZg9CGWMkmgMAPrl1+FY3wneFIvF3lHGGjrNBoAGDqCToVprRMS+vH+weldodYuSOHlN9ghHltUo5qAZ+evN8kKh8DhI1O1bZYAYI/jDukYdzb9gG7z4Ib/drQqn8HOyYAVKFlsp0hMucgjvRuSrntjw2dYZICpx5gDN++Hq/VDIuiNofulCu/UZoJzgddg6skF+Kk9QNE/tDQDvQLfVjyDlmzMARCEgtAPCFboTlQGXLSvfx1/t1qPTOvWVX062gFKGc7c4DzYzfqNoDtte9G9En7PgxTenAIhCLib3SdGVdF1elS+hsx2dn8RGYgpboo1n9W2q+rusbvsO2X2JCTjKUTkgCeQE9fNowGAbPaTKZzgvZ0nQT6eHYFBxRD/HZ/VW0nktAbZwYMqnNvk895sD7j3jJ/Dka/PrCPmUnCKQIpAikCKQIuAQgb8JJwfUKJlK3QAAAABJRU5ErkJggg=="/>
                                </defs>
                                </svg>
                                
                                
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
        document.querySelector('#ass').innerHTML=`
            <div id="ass1">
        <div id="ass2">
            <div id="dis4">
                <div id="dis">
                    <div class="crossos">
                        <ul class="rules">
                            <li class="game">GAME RULES</li>
                            <li>Rock beats scissors, scissors beat paper,paper beats rock.</li>
                            <li>Agree ahead of time wheather you'll count off "rock,paper,scissors, shoot" or just "rock,paper,scissors."</li>
                            <li>Use rock,paper,scissors to settle minor decisions or simply play to pass the time</li>
                            <li>If both players lay down the same hand,each player lays down another hand</li>
                        </ul>
                    </div>
                <button onclick="my()" class="buttoncross">
                    <div class="cross">
                        <svg width="23" height="31" viewBox="0 0 23 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.32031 25.457L7.33594 16.0469V15.6602L1.92188 7.45312C1.76432 7.20964 1.61393 6.97331 1.4707 6.74414C1.32747 6.50065 1.19141 6.26432 1.0625 6.03516C0.847656 5.64844 0.647135 5.24023 0.460938 4.81055C0.289062 4.38086 0.203125 4.01562 0.203125 3.71484C0.203125 3.32812 0.310547 2.93424 0.525391 2.5332C0.754557 2.13216 1.14844 1.76693 1.70703 1.4375C2.35156 1.09375 2.9388 0.921875 3.46875 0.921875C4.28516 0.921875 4.95833 1.2513 5.48828 1.91016C6.03255 2.55469 6.53385 3.25651 6.99219 4.01562L10.9883 10.5898H11.6328L15.6289 4.01562C16.1016 3.25651 16.6029 2.55469 17.1328 1.91016C17.6628 1.2513 18.3359 0.921875 19.1523 0.921875C19.4102 0.921875 19.6823 0.972005 19.9688 1.07227C20.2695 1.17253 20.5846 1.30859 20.9141 1.48047C21.5156 1.8099 21.931 2.16797 22.1602 2.55469C22.3893 2.92708 22.5039 3.29948 22.5039 3.67188C22.5039 3.98698 22.4108 4.35938 22.2246 4.78906C22.0384 5.21875 21.8307 5.63411 21.6016 6.03516C21.3438 6.50781 21.043 6.98047 20.6992 7.45312L15.3281 15.6602V16.0469L21.3008 25.457C21.6016 25.9297 21.8594 26.4023 22.0742 26.875C22.3034 27.3333 22.418 27.7917 22.418 28.25C22.418 28.6367 22.3105 29.0234 22.0957 29.4102C21.8952 29.7826 21.5156 30.1406 20.957 30.4844C20.3125 30.8281 19.7253 31 19.1953 31C18.4505 31 17.8346 30.7279 17.3477 30.1836C16.8607 29.6393 16.4023 29.0378 15.9727 28.3789L11.6328 21.332H10.9883L6.64844 28.3789C6.21875 29.0378 5.76042 29.6393 5.27344 30.1836C4.78646 30.7279 4.1849 31 3.46875 31C2.92448 31 2.35156 30.8281 1.75 30.4844C1.16276 30.1406 0.754557 29.7826 0.525391 29.4102C0.310547 29.0234 0.203125 28.6367 0.203125 28.25C0.203125 27.7917 0.310547 27.3333 0.525391 26.875C0.754557 26.4023 1.01953 25.9297 1.32031 25.457Z" fill="white"/>
                            </svg>
                    </div>
                </button>  
                </div>
            </div>
            <div class="buttonofrules"><button onclick="cliaskck()
            document.querySelector('#dis4').style.display='block'" class="buttonofrules2">RULES
            </button></div>
        </div>
        <div >
            <button class="buttonofrules3"
            onclick="next()">NEXT</button>
        </div>
    </div>
            `
        }
    }

    if (result=='you win'){
        score.yourScore+=1
        ys.value=score.yourScore
    }else if (result=='computer win'){
        score.computerScore+=1
        cs.value=score.computerScore
    }
    localStorage.setItem('score',JSON.stringify(score))

}
let computerTurn='';
function computer (){
    let randomNumber = Math.random()

    if (randomNumber>0 && randomNumber<1/3){
        computerTurn = 'rock';
    }else if (randomNumber>1/3 && randomNumber<2/3){
        computerTurn = 'paper';
    }else if (randomNumber>2/3 && randomNumber<1){
        computerTurn = 'scissors';
    }
}
function playagain(){
    let pa=document.querySelector('.main')
    pa.innerHTML=`
    <div class="main">
        <div class="flex">
            <div class="con"  onclick="playerGame('rock')" >
                <div class="con1">
                    <div class=" content-center  " >
                        <svg width="80" height="59" viewBox="0 0 80 59" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <rect width="80" height="58.5075" fill="url(#pattern0_1486_18)"/>
                            <defs>
                            <pattern id="pattern0_1486_18" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image0_1486_18" transform="scale(0.0149254 0.0204082)"/>
                            </pattern>
                            <image id="image0_1486_18" width="67" height="67" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAYAAADHyrhzAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQ6ADAAQAAAABAAAAQwAAAABSa2PkAAAFMElEQVR4Ae1bS4ibVRQ+596MGnRwMdSxOpiXiOOIpepCW91oXXTlAx8gWPddqODOlaCuBFfiRmgRRJEKVsVqqeBYHwslI4hjHUhmwiymoy2ttcwz+e/x3MIvP5lMkj/n3DGBZJM/957zne9+933vH4DhZ6hAKwWwVWIfpZlcLrfHWjvmnDs/NjY2Wy6X66H49a0YpdIt+4HsES74bXHhCeCcMfR0pVKbjtM0v/tSjEJh4i6EzI+IeO2WwiIsIdrJSqXyz5Y8YYIR+gdxN5h5u6UQPhrBTVEUPRMicN+JUSwWHwDAB9sV1hA90S6/17xMr45Sv3w+fx/X/qvGuf0R4p/GwCnr4EzduRes6dB7De57CsAeA4ikPJL+HaImTfWei8Xcs9zc30M0PVdG5GiyVqv9occKYMe7CU+VexHMEYkQXgALsEdTCI/Vc810Q2Rqauqq9ZWVl8jgASRaJTQnESLf36/uxr+dDU+zXoyP2tmkzQsmhu/TM2srx8HgwSt9EREQ6FG1xmjw3rSF7WQfrJvMlAqv8KxwsBOBnvOJ9vEgfE3P/i0cg4jhSRLByy3iqSX5dQgv059XA2QgtdmEB8bdPD0eNoj3EJh17hKPaxJtheUI/trY2JhaWlo63yo/bZrKmFEqle4kF33NtTXuCbAQaXn0ZM/LkRuy2ZG32PlQTwBNTuJu4gdK3lG+HwvRhB/+J5nnbs3l7tcIJBZjJp9/kmtIfc5PUzhCfD2N/Xa2YjHImMe2A9+xdIMP8Z7mYWk8sRi8mHpESkLDn4helOKIZhOeQm/kTdVZKQkNfx6yI7O6truyvHyuVzxRy7CWJnsNrO3HtWopmxUt8kRiOAd3aBdKgkdId0v8RWIYMLdLgmv7EuGEBFMkhoNolyS4vm/UkGCKxOBuuvXAVsJG6MtnJGckECIxeDrblATX9zU/SzBFYvDG5pIkuKYvV0x9ZGTkOwmmSAxeBlclwTV9CfCnubm5yxJMkRhoo18lwTV9EekLKZ5IjOtd5jS4/hg3jMl8+r+KUZ6fvwSGTktJSP352qDK142/S3FELcMH5z3BUSkJqT+frolbhecgFiObve5j7irL0gJJ/I2lzyX+sa9YjNnZ2U0y9GYMuNPf6OjCxET+e424YjE8CefwHW4dixqE0mLw4dJn09PTomV4HFNFDL7zXOcz0Ndi0J38jpw7rhVPRQxPZu/CwlEeTOe0iHWDw6vOVX616VQ3tt3YqIlxzJ80EbzRTVA1G0cn+B2vVS08NTE8IW4dH/DFjmjnmKpgFj5JZd/BWFUM3zoQncqxfQfe4DdmPHCf6GSXJl9VDB/4yroDQOW6r11BeGP2Aw/cf7ezSZunLoZfd0DkPkxLJK09b8y+SuvTyV5dDB9wxNp3OwWW5hM1vpRiNPuL7k2awZK/C4VCla8di8k0xeez1fmFmxmPZ3O9T5CW4enxQPqNHs1mJDzJKapC+AjBxDBkvm0ugtZvfl3yFy2sJE4wMXjDUkkG0nx21v6miRdjBRODX00Mtq23tl6LC6D5HUyMurWqb+8mCz06uiuI0MHESJJXfr6suR9Jchs8MRBE1wHJwjc/D54YDae2Sx14MciateZCaP0euJZhHA3FiGufzwiG3SQWw+CwZcRa8CE8Blu/DN6YgS4Y52DA/1Wl+gP/cSXQZ+DE4G4SjHMw4ECVx+ckAY8dQpHObG4GGej4bpU3xGE+wVrG6Pj4xRCU+W412JgRDNgLwW/6H9AWBBuNi9XFxbI27hBvqMD2CvwLwdBOaVIXj0EAAAAASUVORK5CYII="/>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="line1"><img src="/Line 1.png"></div>
            <div class="con2" onclick="playerGame('scissors')" >
                <div class="con1">
                    <div class=" content-center  " >
                        <svg width="42" height="57" viewBox="0 0 42 57" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <rect x="4.91736" width="37" height="53.5029" transform="rotate(5.2734 4.91736 0)" fill="url(#pattern0_1486_20)"/>
                            <defs>
                            <pattern id="pattern0_1486_20" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image0_1486_20" transform="matrix(0.00294059 0 0 0.00203357 -0.286919 0)"/>
                            </pattern>
                            <image id="image0_1486_20" width="512" height="512" xlink:href="data:image/png;base64,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"/>
                            </defs>
                            </svg>
                            
                            
                    </div>
                </div>
            </div>
            <div class="line2"><img src="/Line 1.png"></div>
            <div class="line3"><img src="/Line 1.png"></div>
        </div>
        <div class="cons">
            <div class="con3" onclick="playerGame('paper')"> 
                <div class="con1">
                    <div class=" content-center  ">
                        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <rect width="72" height="72" fill="url(#pattern0_1486_19)"/>
                        <defs>
                        <pattern id="pattern0_1486_19" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_1486_19" transform="scale(0.015625)"/>
                        </pattern>
                        <image id="image0_1486_19" width="64" height="64" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQKADAAQAAAABAAAAQAAAAABGUUKwAAAEdUlEQVR4Ae2aSWgUQRSGMzPJuIuKIqKCJqAgRMUFN8RoQJR4cTuKkJCDHjzn6smTB2+iBy+CC4riAh7Ug3gwgiKKaNSLqIgrKC44k8z4PZmKPUl3J7VNpqELiqp6r97216vqmu5paEhLikCKQIpAikCKQIpAikANEWhqalqVy+XuUL9TexsbGzfU0PyYm5pL0F+p5UD9hVfNY+FZ1rPRZoLcjo05yk42m91Ff7oaV9oJZEFXgDab8VbGiwO0ZHUJ4BjBlyqrXCTwQxIB9KOBlQ9mwVnhw+uk/grMOQXZ90KJaXcF5/cEAlBB9ufz+aUxAJzHgxbk/oTIdrvzrlqTL2Tbq838G+X6+/u3hdAHSQS+iUF+kPC/s+N/123PFwDTwtxkG8wKoytauVwOlYMfK6fkTVpfAJj4MiYyKQCeYC9H6M1E0HXITUxeRJ2pIxQ1N1EZwBNkHQflC2of9QP1BIEJIMYlSQBM4pC8SKQLKtGK793qflGhaTeJAYDVX010gzdKFWkmk9mr+iZtYgBg9aMehXNNAlcyvgBwcdgpH1XrQ2fC7tgKCoetrwxw6KJfVSkAhvhO5a3OGmRbNOVt9nHU5UrTherpuhmQ5XF0hAvIx1KpdI/2FfUuKhdWq/UysgEv0iEtALh09PA46kHbuIDGDYByjfH4AC0xXS0AuHQcDIsMUJaQCTvDeENoOcZSw4rQtfwJU6JLa9QQmMHcuEtHF/wzcfoAqjOG3wHAbTF8LywdxH/gwUCMF1vgNcfwhTWlUsOmybYSkIcVgJtMHfoiddg8E4IOAAVW6FWMkQxnQWcM35iF3VbqcWMFMYI6AIiaGzG6Glil/fBlL3s5seNsm/J0Abg+gqF5HIanmbNlhHl1w9ZdqTwBfsZ72cv1Ut4ODAzMN3VGNwMKGLplasyTnO4iVrmhC4AIy6WnnkptASDdLhN9sY4QKNn4YpIBXzB408aoS1kej/Jl2biYACDGzhlbdCzIj7KfNiqNAKhsgz82hl3JkgHfbHQZAYBBMRp7KbJxSlP2meb8qummAIiSutgG3D6fVkWkOTAGgG1wFVtWB5Cmr6HTuZg9CGWMkmgMAPrl1+FY3wneFIvF3lHGGjrNBoAGDqCToVprRMS+vH+weldodYuSOHlN9ghHltUo5qAZ+evN8kKh8DhI1O1bZYAYI/jDukYdzb9gG7z4Ib/drQqn8HOyYAVKFlsp0hMucgjvRuSrntjw2dYZICpx5gDN++Hq/VDIuiNofulCu/UZoJzgddg6skF+Kk9QNE/tDQDvQLfVjyDlmzMARCEgtAPCFboTlQGXLSvfx1/t1qPTOvWVX062gFKGc7c4DzYzfqNoDtte9G9En7PgxTenAIhCLib3SdGVdF1elS+hsx2dn8RGYgpboo1n9W2q+rusbvsO2X2JCTjKUTkgCeQE9fNowGAbPaTKZzgvZ0nQT6eHYFBxRD/HZ/VW0nktAbZwYMqnNvk895sD7j3jJ/Dka/PrCPmUnCKQIpAikCKQIuAQgb8JJwfUKJlK3QAAAABJRU5ErkJggg=="/>
                        </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}
function next(){
    let hurray=document.querySelector('body')
    hurray.innerHTML=`
    <div class="container-huray">
        <div class="coup">
            <div class="star">
                <svg width="504" height="297" viewBox="0 0 504 297" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M57.5 112L70.4096 151.732H112.186L78.3881 176.287L91.2977 216.018L57.5 191.463L23.7023 216.018L36.6119 176.287L2.81425 151.732H44.5904L57.5 112Z" fill="#D9D9D9" fill-opacity="0.83"/>
                    <path d="M106 51L113.633 74.4934L138.336 74.4934L118.351 89.0132L125.985 112.507L106 97.9868L86.0153 112.507L93.6488 89.0132L73.6641 74.4934L98.3665 74.4934L106 51Z" fill="#D9D9D9" fill-opacity="0.83"/>
                    <path d="M373.5 0L385.062 35.5856H422.479L392.208 57.5788L403.771 93.1644L373.5 71.1712L343.229 93.1644L354.792 57.5788L324.521 35.5856H361.938L373.5 0Z" fill="#D9D9D9" fill-opacity="0.83"/>
                    <path d="M439 160L453.593 204.914H500.819L462.613 232.672L477.206 277.586L439 249.828L400.794 277.586L415.387 232.672L377.181 204.914H424.407L439 160Z" fill="#D9D9D9" fill-opacity="0.83"/>
                    <path d="M238 36L241.592 47.0557H253.217L243.812 53.8885L247.405 64.9443L238 58.1115L228.595 64.9443L232.188 53.8885L222.783 47.0557H234.408L238 36Z" fill="#D9D9D9" fill-opacity="0.83"/>
                    <path d="M131 0L134.592 11.0557H146.217L136.812 17.8885L140.405 28.9443L131 22.1115L121.595 28.9443L125.188 17.8885L115.783 11.0557H127.408L131 0Z" fill="#D9D9D9" fill-opacity="0.83"/>
                    <path d="M238 36L241.592 47.0557H253.217L243.812 53.8885L247.405 64.9443L238 58.1115L228.595 64.9443L232.188 53.8885L222.783 47.0557H234.408L238 36Z" fill="#D9D9D9" fill-opacity="0.83"/>
                    <path d="M458 87L461.592 98.0557H473.217L463.812 104.889L467.405 115.944L458 109.111L448.595 115.944L452.188 104.889L442.783 98.0557H454.408L458 87Z" fill="#D9D9D9" fill-opacity="0.83"/>
                    <path d="M124 265L127.592 276.056H139.217L129.812 282.889L133.405 293.944L124 287.111L114.595 293.944L118.188 282.889L108.783 276.056H120.408L124 265Z" fill="#D9D9D9" fill-opacity="0.83"/>
                    </svg>
            </div>
            <div class="cup">
                <svg class="pulse"  width="201" height="201" viewBox="0 0 201 201" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.1411 6.28125C31.1411 4.61536 31.8029 3.0177 32.9809 1.83974C34.1588 0.661773 35.7565 0 37.4224 0L163.047 0C164.713 0 166.311 0.661773 167.489 1.83974C168.667 3.0177 169.329 4.61536 169.329 6.28125C169.329 13.0399 169.178 19.4719 168.901 25.5772C173.865 26.3992 178.614 28.2068 182.868 30.8935C187.123 33.5801 190.796 37.0913 193.671 41.2202C196.547 45.349 198.566 50.0118 199.611 54.9336C200.655 59.8554 200.704 64.9366 199.754 69.8775C198.803 74.8184 196.873 79.5189 194.077 83.7019C191.281 87.8849 187.676 91.4657 183.474 94.2331C179.272 97.0005 174.558 98.8986 169.611 99.8152C164.663 100.732 159.583 100.649 154.668 99.5704C144.744 122.999 131.076 134.456 119.079 137.396V164.694L136.98 169.167C139.417 169.77 141.716 170.863 143.726 172.37L166.816 189.694C167.871 190.485 168.65 191.588 169.043 192.846C169.436 194.104 169.423 195.454 169.006 196.705C168.589 197.956 167.79 199.044 166.72 199.814C165.651 200.585 164.366 201 163.047 201H37.4224C36.104 201 34.8191 200.585 33.7497 199.814C32.6802 199.044 31.8803 197.956 31.4635 196.705C31.0466 195.454 31.0337 194.104 31.4268 192.846C31.8199 191.588 32.599 190.485 33.6536 189.694L56.7435 172.37C58.7535 170.863 61.0524 169.77 63.4896 169.167L81.3911 164.694V137.396C69.3939 134.456 55.7259 122.999 45.8016 99.5578C40.8844 100.642 35.7999 100.73 30.8483 99.8159C25.8967 98.9021 21.1784 97.0054 16.972 94.2378C12.7657 91.4701 9.15659 87.8876 6.3579 83.7018C3.5592 79.516 1.62765 74.8119 0.677325 69.8671C-0.273001 64.9224 -0.222836 59.8374 0.824858 54.9124C1.87255 49.9874 3.89653 45.3222 6.77726 41.1925C9.65799 37.0628 13.3371 33.5521 17.5972 30.868C21.8573 28.1838 26.6121 26.3806 31.5808 25.5647C31.2851 19.1411 31.1385 12.7116 31.1411 6.28125ZM32.3848 38.19C25.8295 39.3894 20.0192 43.1438 16.2321 48.6272C12.4449 54.1107 10.9911 60.8739 12.1906 67.4292C13.39 73.9845 17.1444 79.7948 22.6278 83.582C28.1113 87.3691 34.8745 88.8229 41.4298 87.6234C37.2465 74.4328 34.0431 58.1518 32.3848 38.19ZM159.052 87.6234C165.608 88.8229 172.371 87.3691 177.854 83.582C183.338 79.7948 187.092 73.9845 188.292 67.4292C189.491 60.8739 188.037 54.1107 184.25 48.6272C180.463 43.1438 174.653 39.3894 168.097 38.19C166.427 58.1644 163.223 74.4328 159.052 87.6234Z" fill="#FFD233"/>
                    </svg>
            </div>
        </div>
        <div class="coup1">
            <h1 class="hurray">HURRAY!!</h1>
            <h2 class="wonthe">YOU WON THE GAME</h2>
            <div>
                <button class="playagain1" onclick="location.href='/index.html'
                localStorage.removeItem('score')">PLAY AGAIN</button>
            </div>
        </div>
    </div>
    <div id="ass">
        <div id="dis4">
            <div id="dis">
                <div class="crossos">
                    <ul class="rules">
                        <li class="game">GAME RULES</li>
                        <li>Rock beats scissors, scissors beat paper,paper beats rock.</li>
                        <li>Agree ahead of time wheather you'll count off "rock,paper,scissors, shoot" or just "rock,paper,scissors."</li>
                        <li>Use rock,paper,scissors to settle minor decisions or simply play to pass the time</li>
                        <li>If both players lay down the same hand,each player lays down another hand</li>
                    </ul>
                </div>
            <button onclick="my()" class="buttoncross">
                <div class="cross">
                    <svg width="23" height="31" viewBox="0 0 23 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.32031 25.457L7.33594 16.0469V15.6602L1.92188 7.45312C1.76432 7.20964 1.61393 6.97331 1.4707 6.74414C1.32747 6.50065 1.19141 6.26432 1.0625 6.03516C0.847656 5.64844 0.647135 5.24023 0.460938 4.81055C0.289062 4.38086 0.203125 4.01562 0.203125 3.71484C0.203125 3.32812 0.310547 2.93424 0.525391 2.5332C0.754557 2.13216 1.14844 1.76693 1.70703 1.4375C2.35156 1.09375 2.9388 0.921875 3.46875 0.921875C4.28516 0.921875 4.95833 1.2513 5.48828 1.91016C6.03255 2.55469 6.53385 3.25651 6.99219 4.01562L10.9883 10.5898H11.6328L15.6289 4.01562C16.1016 3.25651 16.6029 2.55469 17.1328 1.91016C17.6628 1.2513 18.3359 0.921875 19.1523 0.921875C19.4102 0.921875 19.6823 0.972005 19.9688 1.07227C20.2695 1.17253 20.5846 1.30859 20.9141 1.48047C21.5156 1.8099 21.931 2.16797 22.1602 2.55469C22.3893 2.92708 22.5039 3.29948 22.5039 3.67188C22.5039 3.98698 22.4108 4.35938 22.2246 4.78906C22.0384 5.21875 21.8307 5.63411 21.6016 6.03516C21.3438 6.50781 21.043 6.98047 20.6992 7.45312L15.3281 15.6602V16.0469L21.3008 25.457C21.6016 25.9297 21.8594 26.4023 22.0742 26.875C22.3034 27.3333 22.418 27.7917 22.418 28.25C22.418 28.6367 22.3105 29.0234 22.0957 29.4102C21.8952 29.7826 21.5156 30.1406 20.957 30.4844C20.3125 30.8281 19.7253 31 19.1953 31C18.4505 31 17.8346 30.7279 17.3477 30.1836C16.8607 29.6393 16.4023 29.0378 15.9727 28.3789L11.6328 21.332H10.9883L6.64844 28.3789C6.21875 29.0378 5.76042 29.6393 5.27344 30.1836C4.78646 30.7279 4.1849 31 3.46875 31C2.92448 31 2.35156 30.8281 1.75 30.4844C1.16276 30.1406 0.754557 29.7826 0.525391 29.4102C0.310547 29.0234 0.203125 28.6367 0.203125 28.25C0.203125 27.7917 0.310547 27.3333 0.525391 26.875C0.754557 26.4023 1.01953 25.9297 1.32031 25.457Z" fill="white"/>
                        </svg>
                </div>
            </button>  
            </div>
        </div>
        <div class="buttonofrules"><button onclick="cliaskck()
        document.querySelector('#dis4').style.display='block'" class="buttonofrules1">RULES
        </button></div>
        
    </div>
    `
}
function rules(){
    let rl=document.querySelector('#ass')
    rl.innerHTML=`
    <div class="buttonofrules"><button onclick="rulesClick()" class="buttonofrules1">RULES
        </button></div>
    `
}
function rulesClick(){
    let rl=document.querySelector('#ass')
    rl.innerHTML=`
    <div id="ass">
        <div id="dis">
            <div id="dis">
                <div class="crossos">
                    <ul class="rules">
                        <li class="game">GAME RULES</li>
                        <li>Rock beats scissors, scissors beat paper,paper beats rock.</li>
                        <li>Agree ahead of time wheather you'll count off "rock,paper,scissors, shoot" or just "rock,paper,scissors."</li>
                        <li>Use rock,paper,scissors to settle minor decisions or simply play to pass the time</li>
                        <li>If both players lay down the same hand,each player lays down another hand</li>
                    </ul>
                </div>
            <button onclick="my()" class="buttoncross">
                <div class="cross">
                    <svg width="23" height="31" viewBox="0 0 23 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.32031 25.457L7.33594 16.0469V15.6602L1.92188 7.45312C1.76432 7.20964 1.61393 6.97331 1.4707 6.74414C1.32747 6.50065 1.19141 6.26432 1.0625 6.03516C0.847656 5.64844 0.647135 5.24023 0.460938 4.81055C0.289062 4.38086 0.203125 4.01562 0.203125 3.71484C0.203125 3.32812 0.310547 2.93424 0.525391 2.5332C0.754557 2.13216 1.14844 1.76693 1.70703 1.4375C2.35156 1.09375 2.9388 0.921875 3.46875 0.921875C4.28516 0.921875 4.95833 1.2513 5.48828 1.91016C6.03255 2.55469 6.53385 3.25651 6.99219 4.01562L10.9883 10.5898H11.6328L15.6289 4.01562C16.1016 3.25651 16.6029 2.55469 17.1328 1.91016C17.6628 1.2513 18.3359 0.921875 19.1523 0.921875C19.4102 0.921875 19.6823 0.972005 19.9688 1.07227C20.2695 1.17253 20.5846 1.30859 20.9141 1.48047C21.5156 1.8099 21.931 2.16797 22.1602 2.55469C22.3893 2.92708 22.5039 3.29948 22.5039 3.67188C22.5039 3.98698 22.4108 4.35938 22.2246 4.78906C22.0384 5.21875 21.8307 5.63411 21.6016 6.03516C21.3438 6.50781 21.043 6.98047 20.6992 7.45312L15.3281 15.6602V16.0469L21.3008 25.457C21.6016 25.9297 21.8594 26.4023 22.0742 26.875C22.3034 27.3333 22.418 27.7917 22.418 28.25C22.418 28.6367 22.3105 29.0234 22.0957 29.4102C21.8952 29.7826 21.5156 30.1406 20.957 30.4844C20.3125 30.8281 19.7253 31 19.1953 31C18.4505 31 17.8346 30.7279 17.3477 30.1836C16.8607 29.6393 16.4023 29.0378 15.9727 28.3789L11.6328 21.332H10.9883L6.64844 28.3789C6.21875 29.0378 5.76042 29.6393 5.27344 30.1836C4.78646 30.7279 4.1849 31 3.46875 31C2.92448 31 2.35156 30.8281 1.75 30.4844C1.16276 30.1406 0.754557 29.7826 0.525391 29.4102C0.310547 29.0234 0.203125 28.6367 0.203125 28.25C0.203125 27.7917 0.310547 27.3333 0.525391 26.875C0.754557 26.4023 1.01953 25.9297 1.32031 25.457Z" fill="white"/>
                        </svg>
                </div>
            </button>  
            </div>
        </div>
        <div class="buttonofrules"><button onclick="cliaskck()" class="buttonofrules1">RULES
        </button></div>
        
    </div>
    `
}