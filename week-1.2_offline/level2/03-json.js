function samplejsonmethods(jsonstring){
    console.log("original:",jsonstring);

    //parsing json string to javascript object
    let parseobj=JSON.parse(jsonstring);
    console.log("after parsing:",parseobj);

    //stringify javascript obj to JSON string
    let jsonstringfied=JSON.stringify(parseobj);
    console.log("After stringify:",jsonstringfied);

    
}
const sample=`
    {
        "key":"value",
        "number":42,
        "nested":{"nestedkey":"nestedvalue"}

    }
`;
samplejsonmethods(sample);