<script>
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = 
    google.visualization.arrayToDataTable([
        ['Tasks', 'Hours'],
        ['Work',10],
        ['Sleep',6],
        ['English',2],
        ['Game',2],
        ['School',4]
    ]);

    options = {'title':'Average', 'width':600, 'height':700};

    chart = new 
    google.visualization.PieChart(document.getElementById("piechart"));
    chart.draw(data, options);
}
</script>
