let ctx = document.getElementById('myChart').getContext('2d');
let chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            backgroundColor:'rgb 255, 99, 132',
            borderColor:'rgb 255,99,132',
            data: [12, 19, 3, 5, 2, 3],
        }]
    },
    options: {}
});