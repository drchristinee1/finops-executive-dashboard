// FinOps Executive Dashboard Script

// In a real system, this would come from APIs or backend services.
// For now, we simulate data from your engines.

const dashboardData = {
  forecast: {
    totalCost: 10560.4,
    costPerTransaction: 0.009183
  },
  commitment: {
    recommendation: "80% Reserved Instances"
  },
  allocation: {
    payments: 6250,
    analytics: 3750
  }
};

// Format currency
function formatCurrency(value) {
  return "$" + value.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  });
}

// Update KPI values dynamically
function updateDashboard() {
  document.getElementById("forecastedCost").innerText =
    formatCurrency(dashboardData.forecast.totalCost);

  document.getElementById("costPerTransaction").innerText =
    "$" + dashboardData.forecast.costPerTransaction;

  document.getElementById("commitmentRecommendation").innerText =
    dashboardData.commitment.recommendation;

  document.getElementById("paymentsCost").innerText =
    formatCurrency(dashboardData.allocation.payments);
}

// Initialize dashboard
updateDashboard();
