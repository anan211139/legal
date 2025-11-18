window.onload = function() {
// ---- Chart.js Global style ----
Chart.defaults.font.family = "system-ui, -apple-system, 'Inter', sans-serif";
Chart.defaults.color = "#4b5563";

// ---- Monthly Cases (Line + Bar Combo) ----
const ctxMonthly = document.getElementById("monthlyCasesChart").getContext("2d");
new Chart(ctxMonthly, {
    type: "bar",
    data: {
        labels: ["ต.ค.", "พ.ย.", "ธ.ค.", "ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย."],
        datasets: [
            {
                type: "bar",
                label: "คดีใหม่",
                backgroundColor: "rgba(52, 211, 153, 0.35)",
                borderRadius: 6,
                data: [8, 11, 9, 13, 10, 15, 12, 14, 9, 7, 6, 5]
            },
            {
                type: "line",
                label: "คดีปิดแล้ว",
                borderColor: "#0ea5e9",
                backgroundColor: "#0ea5e9",
                tension: 0.35,
                borderWidth: 2,
                pointRadius: 4,
                pointBackgroundColor: "#0ea5e9",
                data: [5, 7, 6, 9, 11, 13, 10, 12, 11, 9, 7, 8],
                yAxisID: "y"
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: { grid: { display: false } },
            y: {
                beginAtZero: true,
                ticks: { stepSize: 5 },
                grid: { color: "rgba(226, 232, 240, 0.7)" }
            }
        },
        plugins: {
            legend: { display: true, position: "bottom" },
            tooltip: { mode: "index", intersect: false }
        }
    }
});

// ---- Office Heatmap (Stacked Bar) ----
const ctxOffice = document.getElementById("officeHeatmapChart").getContext("2d");
new Chart(ctxOffice, {
    type: "bar",
    data: {
        labels: ["สำนักการคลัง", "สำนักระบายน้ำ", "เขตบางเขน", "เขตปทุมวัน", "เขตคลองเตย"],
        datasets: [
            {
                label: "ไม่ร้ายแรง",
                data: [5, 3, 4, 2, 3],
                backgroundColor: "#a5b4fc"
            },
            {
                label: "ร้ายแรง",
                data: [2, 4, 3, 5, 2],
                backgroundColor: "#f97373"
            }
        ]
    },
    options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: { stacked: true, grid: { color: "rgba(226,232,240,0.7)" } },
            y: { stacked: true, grid: { display: false } }
        },
        plugins: {
            legend: { position: "bottom" }
        }
    }
});

// ---- Penalty Donut ----
const ctxPenalty = document.getElementById("penaltyDonutChart").getContext("2d");
new Chart(ctxPenalty, {
    type: "doughnut",
    data: {
        labels: ["ภาคทัณฑ์", "ตัดเงินเดือน", "ลดเงินเดือน", "ปลดออก", "ไล่ออก"],
        datasets: [{
            data: [30, 18, 12, 6, 4],
            backgroundColor: ["#22c55e", "#0ea5e9", "#6366f1", "#f97316", "#ef4444"]
        }]
    },
    options: {
        cutout: "60%",
        plugins: {
            legend: { position: "bottom" }
        }
    }
});

// ---- Severity Bar ----
const ctxSeverity = document.getElementById("severityBarChart").getContext("2d");
new Chart(ctxSeverity, {
    type: "bar",
    data: {
        labels: ["ไม่ร้ายแรง", "ร้ายแรง"],
        datasets: [{
            data: [52, 22],
            backgroundColor: ["#4ade80", "#f97373"],
            borderRadius: 8,
            maxBarThickness: 40
        }]
    },
    options: {
        plugins: { legend: { display: false } },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: { grid: { display: false } },
            y: { beginAtZero: true, grid: { color: "rgba(226,232,240,0.7)" } }
        }
    }
});

// ---- Severe Donut (Right column) ----
// const ctxSevereDonut = document.getElementById("severeDonutChart").getContext("2d");
// new Chart(ctxSevereDonut, {
//     type: "doughnut",
//     data: {
//         labels: ["ปลดออก", "ไล่ออก"],
//         datasets: [{
//             data: [8, 5],
//             backgroundColor: ["#fb923c", "#ef4444"]
//         }]
//     },
//     options: {
//         cutout: "70%",
//         plugins: {
//             legend: { position: "bottom" }
//         }
//     }
// });

// // ---- Risk score horizontal bar ----
// const ctxRisk = document.getElementById("riskScoreChart").getContext("2d");
// new Chart(ctxRisk, {
//     type: "bar",
//     data: {
//         labels: ["001/2568", "039/2568", "014/2568", "052/2568", "025/2568"],
//         datasets: [{
//             label: "คะแนนความเสี่ยง",
//             data: [95, 88, 82, 77, 70],
//             backgroundColor: "#f97373",
//             borderRadius: 8,
//             maxBarThickness: 22
//         }]
//     },
//     options: {
//         indexAxis: "y",
//         plugins: {
//             legend: { display: false }
//         },
//         responsive: true,
//         maintainAspectRatio: false,
//         scales: {
//             x: {
//                 beginAtZero: true,
//                 max: 100,
//                 grid: { color: "rgba(226,232,240,0.7)" }
//             },
//             y: { grid: { display: false } }
//         }
//     }
// });

}
