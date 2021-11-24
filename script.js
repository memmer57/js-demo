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


document.querySelector('.click-me').onclick = () => {
    const instance = basicLightbox.create(`
    <div class="modal">
        <p style="color: white; font-size: 1.5rem;">
            This is a javascript demo
        </p>
    </div>
    `)
    instance.show()
}


var center = SMap.Coords.fromWGS84(15.0674736, 50.7741758);
var m = new SMap(JAK.gel("m"), center, 15);
m.addDefaultLayer(SMap.DEF_BASE).enable();
m.addDefaultControls();

var layer = new SMap.Layer.Marker();
m.addLayer(layer);
layer.enable();


var card = new SMap.Card();
card.getHeader().innerHTML = "<strong>Odběrové místo</strong>";
card.getBody().innerHTML = "Odběrové místo";

var options = { 
    title: "Odběrové místo"
};
var marker = new SMap.Marker(center, "myMarker", options);
marker.decorate(SMap.Marker.Feature.Card, card);
layer.addMarker(marker);