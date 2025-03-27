    /////// This the array of object 


    let students = [
        {name:"aline",grade:50,class:"s4"},
        {name:"uwera",grade:70,class:"s1"},
        {name:"john",grade:90,class:"s2"},
        {name:"giramata",grade:80,class:"s3"},
        {name:"bienvenue",grade:30,class:"s5"},
    
    ];
    ///// 1.........Add new student to the array 
    
        
    students.push({name:"eric",grade:100,class:"s3"});
    console.log(students);
    
    ///// 2.......Update the grade of a specific student
    
    // students.filter(student=>{
    //     if(student.name === "uwera"){
    //         student.grade = 21;
    //     }
    // });
    // console.log(students);
    
    students[2].grade = 3334;
    console.log(students);
    
    
    
    
    ////3............ Filter student who have a grade above 50
    
    let results = students.filter(student => student.grade > 50);
    console.log(results);
    
    
    //////// 4.............. find student by name
    let findStudent = students.find(student => student.name === "giramata");
    console.log(findStudent);
    
    
    
    
    
    ////// average grade of all students 
    
    let soln = students.reduce((sum,student) => sum + student.grade, 0)/students.length;
    console.log(`The average is ${soln}`);