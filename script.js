const headerbg = document.querySelector('.header-bg');

document.addEventListener('mousemove', e => {
    let mouseX = e.screenX;
    let screenX = window.screen.availWidth;
    headerbg.style.backgroundPosition = 55 - (mouseX/screenX) * 10 + '% ';
});


const labels = [
    '10.11.',
    '11.11.',
    '12.11.',
    '13.11.',
    '14.11.',
    '15.11.',
    '16.11.',
    '17.11.',
    '18.11.',
    '19.11.',
    '20.11.',
    '21.11.',
    '22.11.',
    '23.11'
  ];
  const data = {
    labels: labels,
    datasets: [{
      label: 'New confirmed cases',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [13516, 10412, 14226, 9172, 5663, 11539, 22509, 14145, 13410, 22954, 14411, 8255, 14492, 25864],
    },{
        label: 'Recovered',
        backgroundColor: 'rgb(0, 255, 0)',
        borderColor: 'rgb(0, 255, 0)',
        data: [6236, 3110, 7384, 3659, 3663, 10183, 8836, 8498, 8254, 9232],
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Statistics from Czech republic in 2021'
            }
        },
        responsive: true,
        maintainAspectRatio: true,
    }
};

const myChart = new Chart(
    document.getElementById('covid-graph'),
    config
);