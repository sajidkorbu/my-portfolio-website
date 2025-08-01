let chart;

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
}

function calculateGrowth() {
    const initialAmount = parseFloat(document.getElementById('initial-amount').value);
    const growthRate = parseFloat(document.getElementById('growth-rate').value) / 100;
    const years = parseInt(document.getElementById('years').value);

    if (isNaN(initialAmount) || isNaN(growthRate) || isNaN(years) || 
        initialAmount <= 0 || growthRate < 0 || years <= 0) {
        document.getElementById('results').style.display = 'none';
        document.getElementById('chart-container').style.display = 'none';
        return;
    }

    const labels = [];
    const data = [];
    let currentValue = initialAmount;

    // Calculate compound growth for each year
    for (let i = 0; i <= years; i++) {
        labels.push(i === 0 ? 'Start' : `Year ${i}`);
        data.push(currentValue);
        if (i < years) {
            currentValue *= (1 + growthRate);
        }
    }

    const finalAmount = data[data.length - 1];
    const totalGrowth = finalAmount - initialAmount;
    const growthMultiple = finalAmount / initialAmount;

    // Update results display
    document.getElementById('initial-display').textContent = formatCurrency(initialAmount);
    document.getElementById('final-amount').textContent = formatCurrency(finalAmount);
    document.getElementById('total-growth').textContent = formatCurrency(totalGrowth);
    document.getElementById('growth-multiple').textContent = `${growthMultiple.toFixed(2)}x`;
    
    document.getElementById('results').style.display = 'block';
    document.getElementById('chart-container').style.display = 'block';

    // Create or update chart
    const ctx = document.getElementById('growth-chart').getContext('2d');
    
    if (chart) {
        chart.destroy();
    }
    
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Account Value',
                data: data,
                backgroundColor: 'rgba(102, 126, 234, 0.2)',
                borderColor: 'rgba(102, 126, 234, 1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: 'rgba(102, 126, 234, 1)',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 6,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        font: {
                            size: 14,
                            weight: 'bold'
                        },
                        padding: 20
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Value: ${formatCurrency(context.parsed.y)}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return formatCurrency(value);
                        },
                        font: {
                            size: 11
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    ticks: {
                        font: {
                            size: 11
                        }
                    }
                }
            },
            layout: {
                padding: {
                    top: 10,
                    bottom: 10,
                    left: 10,
                    right: 10
                }
            }
        }
    });
}

// Add real-time calculation on input change
document.getElementById('initial-amount').addEventListener('input', calculateGrowth);
document.getElementById('growth-rate').addEventListener('input', calculateGrowth);
document.getElementById('years').addEventListener('input', calculateGrowth);

// Add example button functionality
document.querySelectorAll('.example-btn').forEach(button => {
    button.addEventListener('click', function() {
        const amount = this.getAttribute('data-amount');
        const rate = this.getAttribute('data-rate');
        const years = this.getAttribute('data-years');
        
        document.getElementById('initial-amount').value = amount;
        document.getElementById('growth-rate').value = rate;
        document.getElementById('years').value = years;
        
        calculateGrowth();
    });
});

// Initialize with responsive chart sizing
document.addEventListener('DOMContentLoaded', function() {
    // Chart will auto-size based on container
});
