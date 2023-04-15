/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    const pro = profess => 'developer';
    const proArray = arr.map(pro);
    console.log(proArray);
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
  }
  
  function addData() {
    //Write your code here, just console.log
    arr.push({id:4,name:"susan",age:"20",profession:"intern"} );
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let arr1 = [
        { id: 1, name: "james", age: "15", profession: "architect" },
        { id: 2, name: "Emily", age: "20", profession: "developer" },
        { id: 3, name: "Andrews", age: "19", profession: "admin" },
      ];

        const employees = arr.concat(arr1); 
        console.log(employees);
  }

  addData(arr);
  PrintDeveloperbyMap(arr);
  concatenateArray(arr);