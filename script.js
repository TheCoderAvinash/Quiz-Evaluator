let total = 0
//calculating score
function score() {
    let x = document.getElementById("frm1");
    let score=[];
    for (let i = 0; i < x.length-1; i++) {
        score[i]=x.elements[i].value       
    } 
    // for (let i = 0; i < score.length; i++) {
    //     if (i<3){
    //         total += 0.1*(i+1)*Number(score[i]);
    //     }
    //     else if(i==3){
    //         total+=Number(score[i])
    //     }
    //     else{
    //         total+=0.1*i*Number(score[i])
    //     }
    // }
    let bothQuiz = 0.4*Number(score[4]) + 0.2*Number(score[1]) + 0.3*Number(score[2]);
    let oneQuiz = 0.6*Number(score[4]) + 0.2*Math.max(Number(score[1]),Number(score[2]))
    total = 0.1*Number(score[0]) + Math.max(oneQuiz,bothQuiz) + Number(score[3])
    grade(total)
}

function grade(total){
    let grade = ''
    if (total>90){
        grade = '- S Grade, Pass'
    }
    else if (total>80 && total<=90){
        grade = '- A Grade, Pass'
    }
    else if (total>70 && total<=80){
        grade = '- B Grade, Pass'
    }
    else if (total>60 && total<=70){
        grade = '- C Grade, Pass'
    }
    else if (total>50 && total<=60){
        grade = '- D Grade, Pass'
    }
    else if (total>40 && total<=50){
        grade = '- E Grade, Pass'
    }
    else{
        grade = 'U Grade, Fail'
    }
    document.getElementById("display").innerHTML = total + " " + grade;
}



//preventing page reload
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
});
