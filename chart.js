window.onload = function () {
    // ---- Chart.js Global style ----
    Chart.defaults.font.family = "system-ui, -apple-system, 'Inter', sans-serif";
    Chart.defaults.color = "#4b5563";

    // ---- Monthly Cases (Line + Bar Combo) ----
    const ctxMonthly = document.getElementById("monthlyCasesChart").getContext("2d");
    new Chart(ctxMonthly, {
        type: "bar",
        data: {
            labels: ["ก.ย.","ต.ค.", "พ.ย.", "ธ.ค.", "ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย."],
            datasets: [
                {
                    type: "bar",
                    label: "คดีใหม่",
                    backgroundColor: "rgba(52, 211, 153, 0.35)",
                    borderRadius: 6,
                    data: [11, 9, 9, 12, 2, 0, 0, 0, 0, 0, 0, 0]
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
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
            labels : [
                "สำนักงานการเจ้าหน้าที่",
                "สำนักการแพทย์",
                "สนข.วังทองหลาง",
                "สำนักป้องกันและบรรเทาสาธารณภัย",
                "สนข.ลาดกระบัง",
                "สำนักการโยธา",
                "สนข.ธนบุรี",
                "สนข.พระโขนง",
                "สนข.ภาษีเจริญ",
                "สนข.ราษฎร์บูรณะ",
                "สนข.สายไหม",
                "สำนักพัฒนาสังคม, สำนักการศึกษา",
                "สนข.บางกอกน้อย",
                "สนข.บางซื่อ",
                "สนข.ประเวศ",
                "สำนักการศึกษา",
                "สำนักดิจิทัลกทม.",
                "ไม่ระบุ"
            ],
            datasets: [
                {
                    label: "ไม่ร้ายแรง",
                    data: [18, 3, 3, 3, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
                    backgroundColor: "#a5b4fc"
                },
                {
                    label: "ร้ายแรง",
                    data: [0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
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
            labels: ["งดโทษภาคทัณฑ์ เป็นว่ากล่าวตักเตือน", "ไล่ออกจากราชการ", "ยังไม่แล้วเสร็จ"],
            datasets: [{
                data: [3, 1, 43],
                backgroundColor: ["#22c55e", "#ff4949", "#e5e7eb"]
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
                data: [35, 12],
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
