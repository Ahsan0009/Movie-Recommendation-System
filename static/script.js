// Sample data for demonstration purposes
var predictions = [
    {title: "Movie 1", prediction: "Action", date: "2022-01-01"},
    {title: "Movie 2", prediction: "Comedy", date: "2022-02-01"},
    {title: "Movie 3", prediction: "Drama", date: "2022-03-01"}
];

// Populate the table with the sample data
for (var i = 0; i < predictions.length; i++) {
    var row = `<tr>
                 <td>${predictions[i].title}</td>
                 <td>${predictions[i].prediction}</td>
                 <td>${predictions[i].date}</td>
               </tr>`;
    document.getElementById("predictions").getElementsByTagName("tbody")[0].innerHTML += row;
}