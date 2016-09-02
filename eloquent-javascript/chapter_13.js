// Exercise 1: Build a table //

<script>
  function buildTable(data) {
    var table = document.createElement("table");

    var objectProperties = Object.keys(data[0]);
    var headerRow = document.createElement("tr");
    objectProperties.forEach(function(property) {
      var headerText = document.createElement("th");
      headerText.textContent = property;
      headerRow.appendChild(headerText);
    });
    table.appendChild(headerRow);

    data.forEach(function(dataKeys) {
      var infoRows = document.createElement("tr");
      objectProperties.forEach(function(property) {
        var rowText = document.createElement("td")
        rowText.textContent = dataKeys[property];
        if (dataKeys[property].typeof == "number") {
          rowText.style.textAlign("right")
        };
        infoRows.appendChild(rowText);
      });
      table.appendChild(infoRows);
    });

    return table;
  }

  document.body.appendChild(buildTable(MOUNTAINS));
</script>


// Exercise 2: Implement getElementsByTagName //

<script>
  function byTagName(node, tagName) {
    var collector = [];

    function searchNodes(node) {
      for (var i = 0; i < node.childNodes.length; i++) {
        child = node.childNodes[i];
        if (child.nodeType == document.ELEMENT_NODE) {
          if (child.nodeName.toLowerCase() == tagName) {
            collector.push(child);
          } else {
            searchNodes(child);
          };
        };
      };
    }
    searchNodes(node);
    return collector;
  }
</script>

/* my original solution; I could not get the collector to collect nodes that were
children of children, so I pulled out the function like the author recommended */

function byTagName(node, tagName) {
    var collector = [];
    for (var i = 0; i < node.childNodes.length; i++) {
      child = node.childNodes[i];
      if (child.nodeType == document.ELEMENT_NODE) {
        if (child.nodeName.toLowerCase() == tagName) {
          collector.push(child);
        } else {
          byTagName(child, tagName);
        };
      };
    };
	return collector;
}

// Exercise 3: reposition objects in the DOM to form an animation //

<p style="text-align: center">
  <img src="img/cat.png" style="position: relative">
</p>
<script>
  var cat = document.querySelector("img");
  var angle = 0, lastTime = null;
  function animate(time) {
    if (lastTime != null)
      angle += (time - lastTime) * 0.001;
    lastTime = time;
    cat.style.top = (Math.sin(angle) * 20) + "px";
    cat.style.left = (Math.cos(angle) * 200) + "px";
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
</script>

<img src="img/cat.png" id="cat" style="position: absolute">
<img src="img/hat.png" id="hat" style="position: absolute">

<script>
  var cat = document.querySelector("#cat");
  var hat = document.querySelector("#hat");
  // my code
  var angle = 0, lastTime = null;
  function animate(time) {
    if (lastTime != null) {
      angle += (time - lastTime) * 0.001;
    }
    lastTime = time;
    cat.style.top = (Math.sin(angle) * -35 + 100) + "px";
    cat.style.left = (Math.cos(angle) * 100 + 150) + "px";
    hat.style.top = (Math.sin(angle) * 100 + 100) + "px";
    hat.style.left = (Math.cos(angle) * 35 + 100) + "px";
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
  // end of my code
</script>
