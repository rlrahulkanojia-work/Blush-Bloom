// Local Form Testing Script for Blush & Bloom
// This script is for local testing only and should not be included in production

document.addEventListener('DOMContentLoaded', function() {
    // Check if we're running locally
    const isLocalhost = window.location.hostname === 'localhost' || 
                        window.location.hostname === '127.0.0.1' ||
                        window.location.hostname === '';
    
    if (!isLocalhost) {
        console.log('Not running locally, form-test.js is not needed');
        return;
    }
    
    console.log('Running locally - Form test mode active');
    
    // Find all Netlify forms
    const netlifyForms = document.querySelectorAll('form[data-netlify="true"], form[netlify]');
    
    netlifyForms.forEach(form => {
        console.log(`Found Netlify form: ${form.getAttribute('name')}`);
        
        // Add submit event listener
        form.addEventListener('submit', function(e) {
            // Prevent the actual form submission
            e.preventDefault();
            
            // Collect form data
            const formData = new FormData(form);
            const formDataObj = {};
            
            formData.forEach((value, key) => {
                // Skip file inputs for simplicity
                if (value instanceof File) {
                    formDataObj[key] = `[File: ${value.name}]`;
                } else {
                    formDataObj[key] = value;
                }
            });
            
            // Log form data to console
            console.log('Form submission intercepted:');
            console.log('Form name:', form.getAttribute('name'));
            console.log('Form data:', formDataObj);
            
            // Create a success message element
            const successMessage = document.createElement('div');
            successMessage.style.backgroundColor = '#d4edda';
            successMessage.style.color = '#155724';
            successMessage.style.padding = '15px';
            successMessage.style.marginTop = '20px';
            successMessage.style.borderRadius = '4px';
            successMessage.style.textAlign = 'center';
            
            // Add success message content
            successMessage.innerHTML = `
                <h3 style="margin-top: 0;">Form Submission Successful (Local Test)</h3>
                <p>Your form data has been logged to the console. In a real Netlify deployment, this data would be saved to your Netlify forms dashboard.</p>
                <p><strong>Form Name:</strong> ${form.getAttribute('name')}</p>
                <p><strong>Note:</strong> This is a local test only. Actual form submissions will only work when deployed to Netlify.</p>
                <button id="resetForm" style="background-color: #B76E79; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; margin-top: 10px;">Reset Form</button>
            `;
            
            // Insert the success message after the form
            form.parentNode.insertBefore(successMessage, form.nextSibling);
            
            // Hide the form
            form.style.display = 'none';
            
            // Add event listener to reset button
            document.getElementById('resetForm').addEventListener('click', function() {
                // Show the form again
                form.style.display = 'block';
                
                // Reset the form
                form.reset();
                
                // Remove the success message
                successMessage.remove();
            });
            
            // Redirect to success page if it exists
            const actionUrl = form.getAttribute('action');
            if (actionUrl && actionUrl.includes('success')) {
                setTimeout(() => {
                    window.location.href = actionUrl;
                }, 3000);
            }
        });
    });
    
    // Add a notice at the top of the page
    const formContainer = document.querySelector('.form-container');
    if (formContainer) {
        const localNotice = document.createElement('div');
        localNotice.style.backgroundColor = '#fff3cd';
        localNotice.style.color = '#856404';
        localNotice.style.padding = '10px';
        localNotice.style.marginBottom = '20px';
        localNotice.style.borderRadius = '4px';
        localNotice.style.textAlign = 'center';
        localNotice.innerHTML = '<strong>Local Testing Mode:</strong> Form submissions will be intercepted and logged to the console. No data will be sent to Netlify.';
        
        formContainer.insertBefore(localNotice, formContainer.firstChild);
    }
});
