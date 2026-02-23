// ===============================
// COMMON UTILITY FUNCTIONS
// Library Management System
// ===============================

// 🌐 Base API URL (for Spring Boot later)
const API_BASE_URL = "http://localhost:8080/api";

// ===============================
// 📅 Date Helpers
// ===============================

// Get today's date in yyyy-mm-dd
function getToday() {
  return new Date().toISOString().split("T")[0];
}

// Add days to a date
function addDays(dateString, days) {
  const date = new Date(dateString);
  date.setDate(date.getDate() + days);
  return date.toISOString().split("T")[0];
}

// Check if date is after another date
function isAfter(date1, date2) {
  return new Date(date1) > new Date(date2);
}

// ===============================
// 🧾 Form Helpers
// ===============================

// Show error message
function showError(elementId, message) {
  const el = document.getElementById(elementId);
  if (el) {
    el.innerText = message;
  }
}

// Show success message
function showSuccess(elementId, message) {
  const el = document.getElementById(elementId);
  if (el) {
    el.innerText = message;
  }
}

// Clear message
function clearMessage(elementId) {
  const el = document.getElementById(elementId);
  if (el) {
    el.innerText = "";
  }
}

// ===============================
// 🔐 Role Management (simple)
// ===============================

// Save logged-in role
function setUserRole(role) {
  localStorage.setItem("userRole", role);
}

// Get logged-in role
function getUserRole() {
  return localStorage.getItem("userRole");
}

// Protect admin pages (basic)
function requireAdmin() {
  const role = getUserRole();
  if (role !== "admin") {
    alert("Access denied. Admin only.");
    window.location.href = "../login.html";
  }
}

// ===============================
// 🔄 API Helper (Spring Boot ready)
// ===============================

async function apiRequest(endpoint, method = "GET", data = null) {
  try {
    const options = {
      method: method,
      headers: {
        "Content-Type": "application/json"
      }
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(API_BASE_URL + endpoint, options);

    if (!response.ok) {
      throw new Error("API error");
    }

    return await response.json();
  } catch (error) {
    console.error("API Request Failed:", error);
    throw error;
  }
}

// ===============================
// 📊 Fine Calculation Helper
// ===============================

// Example: ₹5 per extra day
function calculateFine(expectedDate, actualDate) {
  const exp = new Date(expectedDate);
  const act = new Date(actualDate);

  const diffTime = act - exp;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays > 0) {
    return diffDays * 5;
  }
  return 0;
}