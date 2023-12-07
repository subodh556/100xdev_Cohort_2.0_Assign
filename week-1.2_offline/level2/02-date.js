function allaboutdate(){
    const currentdate= new Date();
    console.log("Current date:",currentdate);

    //getting various components of date
    console.log("Date:" ,currentdate.getDate());
    console.log("Month:" ,currentdate.getMonth()+1);//Months are zero-inexed so we need to add 1
    console.log("Year" ,currentdate.getFullYear());
    console.log("Hours:" ,currentdate.getHours());
    console.log("Minutes:" ,currentdate.getMinutes());
    console.log("Seconds:" ,currentdate.getSeconds());

    // Setting components of the date
  currentdate.setFullYear(2022);
  console.log("After setFullYear:", currentdate);

  currentdate.setMonth(5); // Setting month to June (zero-indexed)
  console.log("After setMonth:", currentdate);

  // Getting and setting time in milliseconds since 1970
  console.log("Time in milliseconds since 1970:", currentdate.getTime());

  const newDate = new Date(2023, 8, 15); // Creating a new date
  console.log("New Date:", newDate);
}

allaboutdate();