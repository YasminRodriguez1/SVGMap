/* ToolTip Methods */
function showTooltip(evt, text) {
  let tooltip = document.getElementById("tooltip");
  tooltip.innerHTML = text;
  tooltip.style.display = "block";
  tooltip.style.left = evt.pageX + 10 + 'px';
  tooltip.style.top = evt.pageY + 10 + 'px';
}

function hideTooltip() {
  var tooltip = document.getElementById("tooltip");
  tooltip.style.display = "none";
}


/* Run Onload */
document.addEventListener("DOMContentLoaded", function(event) { 
 
    /*To Add controls to SVG MAP using svg-pan-zoom.js*/
    panZoomMap = svgPanZoom('#map', {
        controlIconsEnabled: false,
        minZoom: 1,
        center: true,
        dblClickZoomEnabled: true,
        mouseWheelZoomEnabled: true,
        fit: true

    });

    /* Using Custom Controls */

    document.getElementById('zoom-in').addEventListener('click', function(ev){
        ev.preventDefault()

        panZoomMap.zoomIn()
    });

    document.getElementById('zoom-out').addEventListener('click', function(ev){
        ev.preventDefault()

        panZoomMap.zoomOut()
    });

    document.getElementById('zoom-reset').addEventListener('click', function(ev){
        ev.preventDefault()
        panZoomMap.resetZoom();
        panZoomMap.resetPan();
    });


    /* Adding Tooltips on hover with Information [ID, Latitude, Longitude, Name]to Countries */
    var countryElements = document.getElementById('countries').childNodes;
    var countryCount = countryElements.length;
    for (var i = 0; i < countryCount; i++) {
      countryElements[i].onmousemove = function(event) {
        showTooltip(event, "[" + this.getAttribute('data-id')+ "," + this.getAttribute('data-lat') + "," + this.getAttribute('data-long')+ ',' + this.getAttribute('data-name') + "]");

      }

       countryElements[i].onmouseout = function() {
        hideTooltip();

      }
    }

});