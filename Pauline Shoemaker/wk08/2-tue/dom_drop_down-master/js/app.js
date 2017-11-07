var $city_type = $('#city-type');

var city_class_list = [
  {
    name: "Austin",
    class: "austin"
  },
  {
    name: "Sydney",
    class: "sydney"
  },
  {
    name: "Los Angeles",
    class: "la"
  },
  {
    name: "San Francisco",
    class: "sf"
  },
  {
    name: "New York",
    class: "nyc"
  }
]


city_class_list.forEach(function(city){
  var $option = $('<option>').text(city.name);
	$city_type.append($option);
})


$city_type.on('change', function(event){
  $body = $('body')
	$body.removeClass();

	var $selectedOption = $("option:selected");
	var cityName = $selectedOption.text();
  var cityBackground_index = city_class_list.map(function(city) { return city.name; }).indexOf(cityName);
	var cityBackground = city_class_list[cityBackground_index].class;

	$body.addClass(cityBackground);

});
