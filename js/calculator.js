/**
 * Calculator Logic
 * Contains the core mathematical operations and business logic
 */

const Calculator = {
    /**
     * Add two numbers together
     * @param {number} a - First number
     * @param {number} b - Second number
     * @returns {number} - The sum
     */
    add(a, b) {
        if (!ValidationUtils.isValidNumber(a) || !ValidationUtils.isValidNumber(b)) {
            throw new Error('Invalid numbers provided to add function');
        }
        return a + b;
    },

    /**
     * Subtract second number from first
     * @param {number} a - First number
     * @param {number} b - Second number
     * @returns {number} - The difference
     */
    subtract(a, b) {
        if (!ValidationUtils.isValidNumber(a) || !ValidationUtils.isValidNumber(b)) {
            throw new Error('Invalid numbers provided to subtract function');
        }
        return a - b;
    },

    /**
     * Multiply two numbers
     * @param {number} a - First number
     * @param {number} b - Second number
     * @returns {number} - The product
     */
    multiply(a, b) {
        if (!ValidationUtils.isValidNumber(a) || !ValidationUtils.isValidNumber(b)) {
            throw new Error('Invalid numbers provided to multiply function');
        }
        return a * b;
    },

    /**
     * Divide first number by second
     * @param {number} a - First number (dividend)
     * @param {number} b - Second number (divisor)
     * @returns {number} - The quotient
     * @throws {Error} - If division by zero
     */
    divide(a, b) {
        if (!ValidationUtils.isValidNumber(a) || !ValidationUtils.isValidNumber(b)) {
            throw new Error('Invalid numbers provided to divide function');
        }
        if (b === 0) {
            throw new Error('Division by zero is not allowed');
        }
        return a / b;
    },

    /**
     * Format a number for display
     * @param {number} value - Number to format
     * @returns {string} - Formatted number string
     */
    formatResult(value) {
        if (!ValidationUtils.isValidNumber(value)) {
            return 'Invalid Result';
        }
        
        // Round to 10 decimal places to avoid floating point issues
        const rounded = Math.round(value * 10000000000) / 10000000000;
        return rounded.toString();
    }
};