function UpdateTileText() {
    let matchedTiles = 0;
    let mismatchedTiles = 0;
    const tiles = document.querySelectorAll('.tile');
    const dropZones = document.querySelectorAll('.drop-zone');
    const message = document.getElementById('message');
    const Incorrectmessage = document.getElementById('Incorrectmessage');
    const shuffleButton = document.getElementById('shuffleButton');
    
    let draggedTile = null;

    tiles.forEach(tile => {
        tile.addEventListener('touchstart', touchStart);
        tile.addEventListener('touchmove', touchMove);
        tile.addEventListener('touchend', touchEnd);
    });

    dropZones.forEach(dropZone => {
        dropZone.addEventListener('dragover', dragOver);
        dropZone.addEventListener('dragenter', dragEnter);
        dropZone.addEventListener('dragleave', dragLeave);
        dropZone.addEventListener('drop', dragDrop);
    });

    shuffleButton.addEventListener('click', shuffleTiles);

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

    function touchEnd(event) {
        if (!draggedTile) return;
        const dropZone = findDropZone(event.changedTouches[0]);
        
        if (dropZone && draggedTile.getAttribute('data-match') === dropZone.getAttribute('data-target')) {
            draggedTile.style.visibility = 'hidden';
            dropZone.style.backgroundColor = 'green';
            matchedTiles++;

            if (matchedTiles === tiles.length) {
                message.style.display = 'block';
            } else if (mismatchedTiles === 0) {
                Incorrectmessage.style.display = 'block';
            }
        }

        draggedTile = null;
    }

    function findDropZone(touch) {
        const x = touch.clientX;
        const y = touch.clientY;

        for (const dropZone of dropZones) {
            const rect = dropZone.getBoundingClientRect();
            if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
                return dropZone;
            }
        }

        return null;
    }

    function shuffleTiles() {
        const tilecontainer = document.querySelector('.tilecontainer');
        const tilesArray = Array.from(tiles);

        tilesArray.sort(() => Math.random() - 0.5);

        tilesArray.forEach(tile => {
            tilecontainer.appendChild(tile);
        });
    }

    shuffleButton.addEventListener('click', function () {
        matchedTiles = 0;
        mismatchedTiles = 0;

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
