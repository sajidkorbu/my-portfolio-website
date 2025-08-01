class DateCalculator {
    constructor() {
        this.today = new Date();
        this.currentYear = this.today.getFullYear();
        this.monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        this.dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        
        this.init();
    }

    init() {
        this.displayCurrentDate();
        this.displayCurrentYear();
        this.generateCalendar();
        this.setupEventListeners();
        this.createOverlay();
    }

    displayCurrentDate() {
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        document.getElementById('currentDate').textContent = 
            this.today.toLocaleDateString('en-US', options);
    }

    displayCurrentYear() {
        document.getElementById('currentYear').textContent = this.currentYear;
    }

    createOverlay() {
        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        overlay.id = 'overlay';
        document.body.appendChild(overlay);
    }

    setupEventListeners() {
        document.getElementById('closePanel').addEventListener('click', () => {
            this.closeCalculationPanel();
        });

        document.getElementById('overlay').addEventListener('click', () => {
            this.closeCalculationPanel();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const panel = document.getElementById('calculationPanel');
                if (panel.classList.contains('active')) {
                    this.closeCalculationPanel();
                }
            }
        });

        // Setup dragging functionality
        this.setupDragging();
    }

    generateCalendar() {
        const monthsGrid = document.getElementById('monthsGrid');
        monthsGrid.innerHTML = '';

        for (let month = 0; month < 12; month++) {
            const monthElement = this.createMonth(month);
            monthsGrid.appendChild(monthElement);
        }
    }

    createMonth(monthIndex) {
        const monthDiv = document.createElement('div');
        monthDiv.className = 'month';

        const monthHeader = document.createElement('div');
        monthHeader.className = 'month-header';
        
        const monthName = document.createElement('div');
        monthName.className = 'month-name';
        monthName.textContent = this.monthNames[monthIndex];
        
        monthHeader.appendChild(monthName);
        monthDiv.appendChild(monthHeader);

        const daysGrid = document.createElement('div');
        daysGrid.className = 'days-grid';

        // Add day headers
        this.dayNames.forEach(dayName => {
            const dayHeader = document.createElement('div');
            dayHeader.className = 'day-header';
            dayHeader.textContent = dayName;
            daysGrid.appendChild(dayHeader);
        });

        // Get first day of month and number of days
        const firstDay = new Date(this.currentYear, monthIndex, 1);
        const lastDay = new Date(this.currentYear, monthIndex + 1, 0);
        const startingDayOfWeek = firstDay.getDay();
        const numberOfDays = lastDay.getDate();

        // Add empty cells for days before the first day of the month
        for (let i = 0; i < startingDayOfWeek; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.className = 'day empty';
            daysGrid.appendChild(emptyDay);
        }

        // Add days of the month
        for (let day = 1; day <= numberOfDays; day++) {
            const dayElement = document.createElement('div');
            dayElement.className = 'day';
            dayElement.textContent = day;

            const currentDate = new Date(this.currentYear, monthIndex, day);
            const dateClass = this.getDateClass(currentDate);
            dayElement.classList.add(dateClass);

            // Add click event for future dates
            if (dateClass === 'future' || dateClass === 'today') {
                dayElement.addEventListener('click', () => {
                    this.showCalculations(currentDate);
                });
            }

            daysGrid.appendChild(dayElement);
        }

        monthDiv.appendChild(daysGrid);
        return monthDiv;
    }

    getDateClass(date) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        date.setHours(0, 0, 0, 0);

        if (date.getTime() === today.getTime()) {
            return 'today';
        } else if (date < today) {
            return 'past';
        } else {
            return 'future';
        }
    }

    showCalculations(selectedDate) {
        const panel = document.getElementById('calculationPanel');
        const overlay = document.getElementById('overlay');
        
        // Update selected date display
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        document.getElementById('selectedDate').textContent = 
            selectedDate.toLocaleDateString('en-US', options);

        // Calculate and display results
        const calculations = this.calculateDifferences(selectedDate);
        this.displayCalculations(calculations);

        // Show panel
        panel.classList.add('active');
        overlay.classList.add('active');
    }

    calculateDifferences(selectedDate) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        selectedDate.setHours(0, 0, 0, 0);

        const diffTime = selectedDate.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const monthsAndDays = this.calculateMonthsAndDays(diffDays);

        // Calculate various time differences
        const calculations = {
            days: diffDays,
            workdays: this.calculateWorkdays(today, selectedDate),
            weeks: Math.floor(diffDays / 7),
            months: monthsAndDays.months,
            monthsRemainingDays: monthsAndDays.days,
            hours: diffDays * 24,
            workHours: this.calculateWorkdays(today, selectedDate) * 8,
            weekends: Math.floor(diffDays / 7),
            businessWeeks: Math.floor(this.calculateWorkdays(today, selectedDate) / 5)
        };

        return calculations;
    }

    calculateWorkdays(startDate, endDate) {
        let workdays = 0;
        const currentDate = new Date(startDate);
        
        while (currentDate < endDate) {
            const dayOfWeek = currentDate.getDay();
            if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Not Sunday (0) or Saturday (6)
                workdays++;
            }
            currentDate.setDate(currentDate.getDate() + 1);
        }
        
        return workdays;
    }

    calculateMonthsAndDays(totalDays) {
        if (totalDays < 30) {
            return { months: 0, days: totalDays };
        } else {
            const months = Math.floor(totalDays / 30);
            const remainingDays = totalDays % 30;
            return { months, days: remainingDays };
        }
    }

    displayCalculations(calculations) {
        const calculationsDiv = document.getElementById('calculations');
        calculationsDiv.innerHTML = '';

        // Format weeks display
        let weeksDisplay;
        if (calculations.weeks === 0) {
            weeksDisplay = `${calculations.days} ${calculations.days === 1 ? 'day' : 'days'}`;
        } else {
            const remainingDays = calculations.days % 7;
            if (remainingDays === 0) {
                weeksDisplay = `${calculations.weeks} ${calculations.weeks === 1 ? 'week' : 'weeks'}`;
            } else {
                weeksDisplay = `${calculations.weeks} ${calculations.weeks === 1 ? 'week' : 'weeks'} and ${remainingDays} ${remainingDays === 1 ? 'day' : 'days'}`;
            }
        }

        // Format months display
        let monthsDisplay;
        if (calculations.months === 0) {
            monthsDisplay = `${calculations.days} ${calculations.days === 1 ? 'day' : 'days'}`;
        } else {
            if (calculations.monthsRemainingDays === 0) {
                monthsDisplay = `${calculations.months} ${calculations.months === 1 ? 'month' : 'months'}`;
            } else {
                monthsDisplay = `${calculations.months} ${calculations.months === 1 ? 'month' : 'months'} and ${calculations.monthsRemainingDays} ${calculations.monthsRemainingDays === 1 ? 'day' : 'days'}`;
            }
        }

        // Format business weeks display
        let businessWeeksDisplay;
        if (calculations.businessWeeks === 0) {
            businessWeeksDisplay = `${calculations.workdays} ${calculations.workdays === 1 ? 'workday' : 'workdays'}`;
        } else {
            const remainingWorkdays = calculations.workdays % 5;
            if (remainingWorkdays === 0) {
                businessWeeksDisplay = `${calculations.businessWeeks} ${calculations.businessWeeks === 1 ? 'business week' : 'business weeks'}`;
            } else {
                businessWeeksDisplay = `${calculations.businessWeeks} ${calculations.businessWeeks === 1 ? 'business week' : 'business weeks'} and ${remainingWorkdays} ${remainingWorkdays === 1 ? 'workday' : 'workdays'}`;
            }
        }

        const calcItems = [
            { 
                label: 'Total Days', 
                tooltip: 'calendar days from today',
                value: calculations.days.toLocaleString(), 
                suffix: calculations.days === 1 ? 'day' : 'days' 
            },
            { 
                label: 'Work Days', 
                tooltip: 'excludes weekends',
                value: calculations.workdays.toLocaleString(), 
                suffix: calculations.workdays === 1 ? 'workday' : 'workdays' 
            },
            { 
                label: 'Weeks', 
                tooltip: '7-day periods + remaining days',
                value: '', 
                suffix: weeksDisplay 
            },
            { 
                label: 'Months', 
                tooltip: '30-day periods + remaining days',
                value: '', 
                suffix: monthsDisplay 
            },
            { 
                label: 'Total Hours', 
                tooltip: 'days × 24 hours',
                value: calculations.hours.toLocaleString(), 
                suffix: 'hours' 
            },
            { 
                label: 'Work Hours', 
                tooltip: 'workdays × 8 hours',
                value: calculations.workHours.toLocaleString(), 
                suffix: 'work hours' 
            },
            { 
                label: 'Business Weeks', 
                tooltip: '5-workday periods + remaining workdays',
                value: '', 
                suffix: businessWeeksDisplay 
            }
        ];

        calcItems.forEach(item => {
            const calcItem = document.createElement('div');
            calcItem.className = 'calc-item';

            const label = document.createElement('div');
            label.className = 'calc-label';
            label.innerHTML = `${item.label} <span class="tooltip">${item.tooltip}</span>`;

            const value = document.createElement('div');
            value.className = 'calc-value';
            if (item.value) {
                value.textContent = `${item.value} ${item.suffix}`;
            } else {
                value.textContent = item.suffix;
            }

            calcItem.appendChild(label);
            calcItem.appendChild(value);
            calculationsDiv.appendChild(calcItem);
        });
    }

    setupDragging() {
        let isDragging = false;
        let dragOffsetX = 0;
        let dragOffsetY = 0;
        let startX = 0;
        let startY = 0;

        const panel = document.getElementById('calculationPanel');
        
        // Simple drag implementation
        document.addEventListener('mousedown', (e) => {
            const panelHeader = panel.querySelector('.panel-header');
            if (!panelHeader || !panel.classList.contains('active')) return;
            
            // Check if we're clicking on the header (but not the close button)
            if (panelHeader.contains(e.target) && !e.target.classList.contains('close-btn')) {
                isDragging = true;
                startX = e.clientX - dragOffsetX;
                startY = e.clientY - dragOffsetY;
                panelHeader.style.cursor = 'grabbing';
                e.preventDefault();
            }
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            
            e.preventDefault();
            dragOffsetX = e.clientX - startX;
            dragOffsetY = e.clientY - startY;
            
            panel.style.transform = `translate(calc(-50% + ${dragOffsetX}px), calc(-50% + ${dragOffsetY}px)) scale(1)`;
        });

        document.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                const panelHeader = panel.querySelector('.panel-header');
                if (panelHeader) {
                    panelHeader.style.cursor = 'move';
                }
            }
        });
        
        // Reset position when panel is closed
        const originalClosePanel = this.closeCalculationPanel.bind(this);
        this.closeCalculationPanel = () => {
            dragOffsetX = 0;
            dragOffsetY = 0;
            panel.style.transform = 'translate(-50%, -50%) scale(0)';
            originalClosePanel();
        };
    }

    closeCalculationPanel() {
        const panel = document.getElementById('calculationPanel');
        const overlay = document.getElementById('overlay');
        
        panel.classList.remove('active');
        overlay.classList.remove('active');
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new DateCalculator();
});
