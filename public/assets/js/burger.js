$(function() {
	//----------------- Update(Change Devoured State)-------------------------------
	//on click changes devoured to true
	$('.change-devoured').on('click', function(event) {
		var id = $(this).data('id');
		var newDevoured = true;

		var newDevouredState = {
			devoured: newDevoured
		};

		// Send the PUT request to update devoured to true
		$.ajax('/api/burgers/' + id, {
			type: 'PUT',
			data: newDevouredState
		}).then(function() {
			console.log('changed devoured to', newDevoured);
			// Reload the page to get the updated list
			location.reload();
		});
	});

	//-----------------Delete Burger from List-------------------------------------------
	// on click deletes the burger
	$('.delete-burger').on('click', function(event) {
		var id = $(this).data('id');

		// send the delete request to remove burger from page
		$.ajax('/api/burgers/' + id, {
			type: 'DELETE'
		}).then(function() {
			location.reload();
		});
	});

	//-------------------(Insert) Add Burger To List ------------------------------------
	//on click event to add new burger
	$('.create-form').on('submit', function(event) {
		// Make sure to preventDefault on a submit event.
		event.preventDefault();

		var userBurger = $('#burger').val().trim();
		var capitalizeUserBurger = userBurger[0].toUpperCase() + userBurger.slice(1);

		var newBurger = {
			name: capitalizeUserBurger,
			devoured: false
		};

		// Send POST request to add new burger
		$.ajax('/api/burgers', {
			type: 'POST',
			data: newBurger
		}).then(function() {
			console.log('created new burger');
			// Reload the page to get the updated list
			location.reload();
		});
	});
	//------------------------------- Scroll back to top of page when h1 is clicked------------------------------
	$('h1').on('click', function() {
		$(window).scrollTop(0);
	});
});
