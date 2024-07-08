document.addEventListener('DOMContentLoaded', function() {
    // Executes when the DOM content is fully loaded
    
    // Array of image objects with src and caption
    const images = [
        { src: 'image1.png', caption: 'Image 1' },
        { src: 'image2.png', caption: 'Image 2' },
        { src: 'image3.png', caption: 'Image 3' },
        { src: 'image4.png', caption: 'Image 4' },
        { src: 'image5.png', caption: 'Image 5' },
        { src: 'image6.png', caption: 'Image 6' },
        { src: 'image7.png', caption: 'Image 7' },
        { src: 'image8.png', caption: 'Image 8' },
        { src: 'image9.png', caption: 'Image 9' },
        { src: 'image10.png', caption: 'Image 10' }
    ];

    // Get references to DOM elements
    const featuredImage = document.getElementById('featured');
    const caption = document.getElementById('image-caption');
    const thumbnails = document.getElementById('thumbnails');

    // Iterate through each image in the images array
    images.forEach((image, index) => {
        // Create a list item for each image thumbnail
        const li = document.createElement('li');
        
        // Create an image element
        const img = document.createElement('img');
        img.src = image.src.replace('.jpg', '-thumb.jpg'); // Set image source
        img.alt = image.caption; // Set image alt text
        img.classList.add(index === 0 ? 'active' : 'inactive'); // Set initial class based on index

        // Add click event listener to each thumbnail image
        img.addEventListener('click', () => {
            // Update featured image and caption when clicked
            featuredImage.src = image.src;
            caption.textContent = image.caption;

            // Reset all thumbnail image classes
            document.querySelectorAll('#thumbnails img').forEach(thumb => {
                thumb.classList.remove('active');
                thumb.classList.add('inactive');
            });

            // Set clicked thumbnail image class to active
            img.classList.remove('inactive');
            img.classList.add('active');
        });

        // Append image to list item and list item to thumbnails list
        li.appendChild(img);
        thumbnails.appendChild(li);
    });
});
