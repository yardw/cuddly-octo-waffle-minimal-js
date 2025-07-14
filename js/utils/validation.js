/**
 * Validation Utility Functions
 * Handles input validation and error checking
 */

const ValidationUtils = {
    /**
     * Validate that both inputs are valid numbers
     * @param {number|null} num1 - First number
     * @param {number|null} num2 - Second number
     * @returns {object} - Validation result with isValid and message
     */
    validateCalculatorInputs(num1, num2) {
        if (num1 === null && num2 === null) {
            return {
                isValid: false,
                message: 'Please enter numbers in both fields'
            };
        }
        
        if (num1 === null) {
            return {
                isValid: false,
                message: 'Please enter a valid number in the first field'
            };
        }
        
        if (num2 === null) {
            return {
                isValid: false,
                message: 'Please enter a valid number in the second field'
            };
        }
        
        return {
            isValid: true,
            message: ''
        };
    },

    /**
     * Validate a single number input
     * @param {any} value - Value to validate
     * @returns {boolean} - True if valid number
     */
    isValidNumber(value) {
        return typeof value === 'number' && !isNaN(value) && isFinite(value);
    },

    /**
     * Validate that a number is within a specific range
     * @param {number} value - Number to validate
     * @param {number} min - Minimum value
     * @param {number} max - Maximum value
     * @returns {boolean} - True if within range
     */
    isInRange(value, min, max) {
        return this.isValidNumber(value) && value >= min && value <= max;
    }
};