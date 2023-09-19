


function UpdateTileText(){
    
    let matchedTiles = 0;
    let mismatchedTiles = 0;
    const tiles = document.querySelectorAll('.tile');
    const dropZones = document.querySelectorAll('.drop-zone');
    const message = document.getElementById('message');
    const Incorrectmessage = document.getElementById('Incorrectmessage');
    const shuffleButton = document.getElementById('shuffleButton');
    
   // var tile1text = document.getElementById("tile1");
   // var tile2text = document.getElementById("tile2");
    var tile1 = document.getElementById('tile1');
    var tile2 = document.getElementById('tile2');

    let draggedTile = null;

      //update the text of the button
     // tile1.textContent = updatedOnyomi.textContent;
     // tile2.textContent = updatedKunyomi.textContent;

     tiles.forEach(tile => {
        tile.addEventListener('dragstart', dragStart);
        tile.addEventListener('dragend', dragEnd);
        tile.addEventListener('touchstart', touchStart);
        tile.addEventListener('touchmove', touchMove);
        tile.addEventListener('touchend', touchEnd);
    });

    // Add event listeners for drop zones
    dropZones.forEach(dropZone => {
        dropZone.addEventListener('dragover', dragOver);
        dropZone.addEventListener('dragenter', dragEnter);
        dropZone.addEventListener('dragleave', dragLeave);
        dropZone.addEventListener('drop', dragDrop);
    });

    // Shuffle tiles when the "Shuffle Tiles" button is clicked
    shuffleButton.addEventListener('click', shuffleTiles);

    function dragStart(event) {
        draggedTile = this;
        event.dataTransfer.setData('text/plain', ''); // Required for Firefox
    }

    function dragEnd() {
    
    }

    function dragOver(event) {
        event.preventDefault();
    }

    function dragEnter(event) {
        event.preventDefault();
        this.classList.add('hovered');
        
    }

    function dragLeave() {
        this.classList.remove('hovered');
    }

    function dragDrop(event) {
        event.preventDefault();
        const target = this;

        if (draggedTile.getAttribute('data-match') === target.getAttribute('data-target')) {
            draggedTile.style.visibility = 'hidden';
            target.style.backgroundColor = 'green';
            matchedTiles++;

            if (matchedTiles === tiles.length) {
                message.style.display = 'block';
            }
            else if (!mismatchedTiles > 0){
                Incorrectmessage.textContent = 'block';
            }
        }

        this.classList.remove('hovered');
    }

    function touchStart(event) {
        draggedTile = this;
        const touch = event.touches[0];
        draggedTile.initialX = touch.clientX - parseFloat(getComputedStyle(draggedTile).left);
        draggedTile.initialY = touch.clientY - parseFloat(getComputedStyle(draggedTile).top);
        event.preventDefault();
    }

    function touchMove(event) {
        if (!draggedTile) return;
        const touch = event.touches[0];
        const left = touch.clientX - draggedTile.initialX;
        const top = touch.clientY - draggedTile.initialY;

        draggedTile.style.left = left + 'px';
        draggedTile.style.top = top + 'px';

        event.preventDefault();
    }

    function touchEnd() {
        draggedTile = null;
    }

    function shuffleTiles() {
        const container = document.querySelector('.tilecontainer');
        const tilesArray = Array.from(tiles);

        tilesArray.sort(() => Math.random() - 0.5);

        tilesArray.forEach(tile => {
            container.appendChild(tile);
        });
    
    }

    // Reset game when "Shuffle Tiles" button is clicked
    shuffleButton.addEventListener('click', function () {
        matchedTiles = 0;
        tiles.forEach(tile => {                         
            
            tile.style.visibility = 'visible';
            tile.style.backgroundColor = '#3498db';               

        });
        dropZones.forEach(dropZone => {
            dropZone.style.backgroundColor = '';
        });
        message.style.display = 'none';
        Incorrectmessage.style.display = 'none';

        
        
    });
              
              
   
}