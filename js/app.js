var keywordArr = ["house", "school", "color"];
var rand = Math.floor(Math.random() * (3));

// Function to display 4 random images before user input
function firstScreen(){
    // Resets images and likes 
    $("#imgContainer").empty();
    $("#likes").empty();
    $.ajax({
       method: "GET",
       url: "https://pixabay.com/api/?key=15460619-580eeed6d1fd6a822aac265e9",
       dataType: "json",
       data:{
           'q':keywordArr[rand]
       },
       success:function(result, status){
           for(let i = 0; i < 4; i++){
               $("#likes").append("Likes: " + result.hits[i].likes + "      ");
               $("#imgContainer").append('<img src="' + result.hits[i].previewURL + '"/>');
           }
       }
    });
}
firstScreen();

// Function to display 4 random images after user input
function afterScreen(){
    //Reset images and likes
    $("#btn").click(function(){
        $("#imgContainer").empty();
        $("#likes").empty();
        $.ajax({
           method: "GET",
           url: "https://pixabay.com/api/?key=15460619-580eeed6d1fd6a822aac265e9",
           dataType: "json",
           data:{
               'q':$("#keyword").val(),
               'orientation':$("#orientation").val()
           },
           success:function(result,status){
               for(let i = 0; i < 4; i++){
                   $("#likes").append("Likes: " + result.hits[i].likes);
                   $("#imgContainer").append('<img src="' + result.hits[i].previewURL + '"/>');
               }
           }
        });
    });
}
afterScreen();