var cat_image = document.getElementById('cat');
var feed_button = document.getElementById('feed_button');
var unfeed_button = document.getElementById('unfeed_button');
var list_of_numbers = [30, 2, 5];
var text = 'I love cats.';
var cat_object = {
    weight : 5,
    past_weight_values : [4.5, 5.1, 4.9],
    name : 'Princess Caroline'
};
var cat_list = [cat_object]; // initializing with the first field being cat_object
var cat_list2 = [cat_object, cat_object];

// Push item to cat_list
cat_list.push({weight : 6 , past_weight_values : [5.9, 5.3, 6.1], name : 'Snowball'});

// Create dog_list from cat_list data
dog_list = cat_list.map(function(cat) {
    return {
        name: "Doggie "+ cat.name
    };
});

var cat_json = JSON.stringify(cat_list);

console.log(cat_list2[1]);
console.log(dog_list);
console.log(cat_json);

// Cat click
cat_image.addEventListener("click", function() {
    console.log("Meow!");
    // purr();
});

// Feed button click
feed_button.addEventListener("click", feed);
function feed() {
	// cat_image.style.width = (cat_image.offsetWidth + parseInt(mealsize)) + 'px';
    cat_image.style.width = (cat_image.offsetWidth + 30.0) + 'px';
    return cat_image.style.width;
};

// Unfeed button click
unfeed_button.addEventListener("click", unfeed);
function unfeed() {
    cat_image.style.width = (cat_image.offsetWidth - 30.0) + 'px';
    return cat_image.style.width;
};
