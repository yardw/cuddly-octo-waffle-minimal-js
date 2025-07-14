/**
 * DOM Utility Functions
 * Handles all DOM manipulation and element interactions
 */

const DOMUtils = {
    /**
     * Get a number from an input element
     * @param {string} elementId - The ID of the input element
     * @returns {number|null} - The parsed number or null if invalid
     */
    getNumberFromInput(elementId) {
        const element = document.getElementById(elementId);
        if (!element) {
            console.error(`Element with ID '${elementId}' not found`);
            return null;
        }
        
        const value = element.value.trim();
        
        if (value === '') {
            return null;
        }
        
        const number = parseFloat(value);
        return isNaN(number) ? null : number;
    },

    /**
     * Display a message in the result area
     * @param {string} message - The message to display
     * @param {boolean} isError - Whether this is an error message
     */
    displayResult(message, isError = false) {
        const resultDiv = document.getElementById('result');
        const resultText = resultDiv?.querySelector('.result-text');
        
        if (!resultDiv || !resultText) {
            console.error('Result elements not found');
            return;
        }
        
        resultText.textContent = message;
        
        if (isError) {
            resultDiv.classList.add('error');
        } else {
            resultDiv.classList.remove('error');
        }
    },

    /**
     * Clear all input fields
     */
    clearInputs() {
        const inputs = document.querySelectorAll('input[type="number"]');
        inputs.forEach(input => {
            input.value = '';
        });
    },

    /**
     * Set up event listeners for keyboard interactions
     * @param {function} callback - Function to call when Enter is pressed
     */
    setupKeyboardListeners(callback) {
        const inputs = document.querySelectorAll('input[type="number"]');
        
        inputs.forEach(input => {
            input.addEventListener('keypress', function(event) {
                if (event.key === 'Enter') {
                    callback();
                }
            });
        });
    }
};