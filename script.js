window.addEventListener("load", function () {
    setTimeout(function() {
        document.getElementById("loader").style.display = "none";
    }, 1000);
});

const blocks = document.getElementsByClassName("block");

const blockPositions = {
    "block1": { x: 300, y: 300 },
    "block2": { x: 300, y: 600 },
    "block3": { x: 600, y: 300 },
    "block4": { x: 600, y: 600 },
    // Add more blocks if needed
};

function resizeBlocks() {
    const img = document.getElementById("main-image");
    const imgRect = img.getBoundingClientRect();

    for (let i = 0; i < blocks.length; i++) {
        const blockId = blocks[i].id;
        const blockPosition = blockPositions[blockId];

        blocks[i].style.left = (blockPosition.x * imgRect.width / 1000) + 'px';
        blocks[i].style.top = (blockPosition.y * imgRect.height / 1000) + 'px';
    }
}

window.addEventListener("resize", resizeBlocks);
window.addEventListener("orientationchange", resizeBlocks);

// Tooltips
for (let i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener("click", function () {
        alert(this.dataset.description);
    });
}

resizeBlocks();  // Initial position
