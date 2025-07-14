/**
 * Main Application Logic
 * Orchestrates the calculator functionality and handles user interactions
 */

const CalculatorApp = {
    /**
     * Initialize the calculator application
     */
    init() {
        this.setupEventListeners();
        this.displayWelcomeMessage();
    },

    /**
     * Set up all event listeners
     */
    setupEventListeners() {
        // Button click event
        const calculateBtn = document.getElementById('calculate-btn');
        if (calculateBtn) {
            calculateBtn.addEventListener('click', () => this.handleCalculation());
        }

        // Keyboard events
        DOMUtils.setupKeyboardListeners(() => this.handleCalculation());
    },

    /**
     * Display welcome message
     */
    displayWelcomeMessage() {
        DOMUtils.displayResult('Enter two numbers and click "Add Numbers" to calculate');
    },

    /**
     * Handle the calculation process
     */
    handleCalculation() {
        try {
            // Get numbers from inputs
            const num1 = DOMUtils.getNumberFromInput('number1');
            const num2 = DOMUtils.getNumberFromInput('number2');
            
            // Validate inputs
            const validation = ValidationUtils.validateCalculatorInputs(num1, num2);
            if (!validation.isValid) {
                DOMUtils.displayResult(validation.message, true);
                return;
            }
            
            // Perform calculation
            const result = Calculator.add(num1, num2);
            
            // Format and display result
            const formattedResult = Calculator.formatResult(result);
            DOMUtils.displayResult(`${num1} + ${num2} = ${formattedResult}`);
            
        } catch (error) {
            console.error('Calculation error:', error);
            DOMUtils.displayResult('An error occurred during calculation', true);
        }
    },

    /**
     * Clear all inputs and result
     */
    clear() {
        DOMUtils.clearInputs();
        this.displayWelcomeMessage();
    }
};

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    CalculatorApp.init();
});