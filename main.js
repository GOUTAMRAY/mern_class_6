
/****
 * 
 * 
 * gpa , cgpa calculation function 
 * 
 */


function gpaCal(mark) {
    
    let gpa;
    let grade;
    
    if (mark >= 0 && mark < 33 ) {
        gpa = 0;
        grade ="F";
    }else if( mark >= 33 && mark < 40 ){
        gpa = 1;
        grade = "D";
    }else if( mark >= 40 && mark < 50 ){
        gpa = 2;
        grade =" C";
    }else if( mark >= 50 && mark < 60 ){
        gpa = 3;
        grade = "B";
    }else if( mark >= 60 && mark < 70 ){
        gpa = 3.5;
        grade = 'A-';
    }else if( mark >= 70 && mark < 80 ){
        gpa = 4;
        grade = "A";
    }else if( mark >= 80 && mark <= 100 ){
        gpa = 5;
        grade = "A+";
    }else{
        gpa   ="invaild mark";
        grade ="invalid grade";
    }
    
    return {
        gpa : gpa,
        grade :grade,
    };
    
    }
 
   
    
   // get result function  
    function getResult(ban , eng , math , s , ss, reli) {
        // get gpa
      let ban_gpa  = gpaCal(ban).gpa;
      let eng_gpa  = gpaCal(eng).gpa;
      let math_gpa = gpaCal(math).gpa;
      let  s_gpa   = gpaCal(s).gpa;
      let ss_gpa   = gpaCal(ss).gpa;
      let reli_gpa = gpaCal(reli).gpa;


      // get grade 
      let ban_grade  = gpaCal(ban).grade;
      let eng_grade  = gpaCal(eng).grade;
      let math_grade = gpaCal(math).grade;
      let  s_grade   = gpaCal(s).grade;
      let ss_grade   = gpaCal(ss).grade;
      let reli_grade = gpaCal(reli).grade;

      let cgpa;
 

if (ban >= 33 && eng >= 33 && math >= 33 && s >= 33 && ss >= 33 && reli >= 33  ) {
    cgpa = (ban_gpa + eng_gpa + math_gpa +  s_gpa + ss_gpa + reli_gpa ) / 6;

}else{
    cgpa = 0;
}
 

return `

Bangla mark = ${ban} / GPA = ${ban_gpa} / Grade = ${ban_grade}
Bangla mark = ${eng} / GPA = ${eng_gpa} / Grade = ${eng_grade}
Bangla mark = ${math} / GPA = ${math_gpa} /  Grade = ${math_grade}
Bangla mark = ${s} / GPA = ${s_gpa}  /  Grade = ${s_grade}
Bangla mark = ${ss} / GPA = ${ss_gpa} /  Grade = ${ss_grade}
Bangla mark = ${reli} / GPA = ${reli_gpa} /  Grade = ${reli_grade}
============================================== 
 Final CGPA = ${cgpa.toFixed(2)}

`
    }

// show console
console.log(getResult(prompt("bangla"), prompt("english"), prompt("math"), prompt("science"), prompt("social science"), prompt("religion"),  ));



;












