function click() {
    var imageContainer = document.getElementById('continer-image');
    var imageSelect = document.getElementById('Image-select');

    imageSelect.addEventListener('change', function() {
        var selectGroup = imageSelect.value;
        var images = imageContainer.getElementsByTagName('img');

        for (var i =0; i<images.length; i++) {
            if (images[i].getAttribute('data-group') === selectGroup) {
                images[i].classList.add('active');
            } else {
                image[i].classList.remove('active');
            }
        }
    });
}