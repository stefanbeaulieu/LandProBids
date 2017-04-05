/**
 * Created by stefanbeaulieu on 4/5/17.
 */

/**
 * jQuery TODO: SOLUTION
 **/

// When the user clicks any button, run addTask.
$('#add').click(addTask);
$('#calculate').click(calculate);


// Add a listener to the document.
// It should keep an ear out for a click on elements with an id of "delete".
// We can't use .click, because the element is dynamically created.
$(document).on('click', '#delete', removeTask);


// When a user presses any key on their keyboard,
$("input").keypress(function(event) {

	// listen to see that key was "enter."
	if (event.which == 13) {
		// If so, run addTask.
		addTask();
	}
});

// Calculate Total
function calculate() {

	// Get the content (value) of the input box.
	var desc = $('#description').val();
	var size = $('#size').val();

	var quanText = $('#quantity').val();
	var quan = parseInt(quanText);

	var purText = $('#purchase').val();
	var pur = parseInt(purText);

	var taxText = $('#tax').val();
	var tax = (parseInt(taxText) / 100);

	var markupText = $('#markup').val();
	var markup = parseInt(markupText);

	var purTax = pur * (tax + 1);
	var unit = markup * purTax;
	var total = unit * quan;

	// Append that content to the #tasks div.
	// Nest our content in another div in another div
	// with a span containing an X.
	// Notice the id? We can delete the task whenever the user clicks the span.
	$('#unitPrice').append('<div class="col-lg-3">'
		+ unit.toFixed(2)
		+ '<span id="delete">X</span>'
		+ '</div>'
	);
	$('#totalCosting').append('<div class="col-lg-3">'
		+ total.toFixed(2)
		+ '<span id="delete">X</span>'
		+ '</div>'
	);
	console.log(purTax);
	console.log(size);
	console.log(quan);
	console.log(pur);
	console.log(tax);
	console.log(markup);


	// Clear the content of the input box.
	$('#description').val('');
}

// Function to add a task.
function addTask() {

	// Get the content (value) of the input box.
	var task = $('#newtask').val();

	// Append that content to the #tasks div.
	// Nest our content in another div in another div
	// with a span containing an X.
	// Notice the id? We can delete the task whenever the user clicks the span.
	$('#tasks').append('<div class="col-lg-3">'
		+ task
		+ '<span id="delete">X</span>'
		+ '</div>'
	);

	// Clear the content of the input box.
	$('#newtask').val('');
}

// Function to remove a task.
function removeTask() {
	// Grab the closest div to the element that was clicked and remove it.
	// (In this case, the closest element is the one that's encapsulating it.)
	$(this).closest('div').remove();
}
