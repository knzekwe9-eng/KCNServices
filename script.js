// Screenshot upload functionality
document.addEventListener('DOMContentLoaded', function() {
    const screenshotInput = document.getElementById('screenshotInput');
    const uploadBtn = document.getElementById('uploadBtn');
    const fileName = document.getElementById('fileName');
    const previewContainer = document.getElementById('previewContainer');
    const imagePreview = document.getElementById('imagePreview');
    const clearBtn = document.getElementById('clearBtn');

    // Open file dialog when upload button is clicked
    uploadBtn.addEventListener('click', function() {
        screenshotInput.click();
    });

    // Handle file selection
    screenshotInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        
        if (file) {
            // Display file name
            fileName.textContent = `Selected: ${file.name}`;
            
            // Check if file is an image
            if (file.type.startsWith('image/')) {
                // Create preview
                const reader = new FileReader();
                
                reader.onload = function(e) {
                    imagePreview.src = e.target.result;
                    previewContainer.style.display = 'block';
                };
                
                reader.readAsDataURL(file);
            } else {
                fileName.textContent = 'Please select a valid image file';
                previewContainer.style.display = 'none';
            }
        }
    });

    // Clear uploaded file
    clearBtn.addEventListener('click', function() {
        screenshotInput.value = '';
        fileName.textContent = '';
        imagePreview.src = '';
        previewContainer.style.display = 'none';
    });
});
