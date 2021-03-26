let counter = 0;
$("button").click(function() {
    let superhero = $(".superhero").val();
    console.log(superhero);
    let month = $(".month").val();
    console.log(month);


    if (superhero === "Batman" && month <= 6) {
        $(".results").text("You are milk and cereal!");
        $(".cereal").show();
    } else if (superhero === "Batman" && month >= 7) {
        $(".breakfast-sandwich").show();
        $(".results").text("You are a bacon, egg, and cheese sandwich!");
    } else if (superhero === "Superman" && month <= 6) {
        $(".bagel").show();
        $(".results").text("You are a bagel and cream cheese!");
    } else if (superhero === "Superman" && month >= 7) {
        $(".results").text("You are pancakes and syrup!");
        $(".pancakes").show();
    } else {
        $(".results").text("You are hotdogs for breakfast! Gross! Try again.");

    }

    alert("Ready for your results?");
    counter = counter + 1;
    $(".counter").text("This quiz has been taken " + counter + " times ");
});