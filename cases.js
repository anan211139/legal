// // ---- Tabs for case detail ----
//         document.querySelectorAll(".tab-btn").forEach((btn) => {
//             btn.addEventListener("click", () => {
//                 const target = btn.getAttribute("data-tab");
//                 document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
//                 document.querySelectorAll(".tab-content").forEach((c) => c.classList.remove("active"));
//                 btn.classList.add("active");
//                 document.getElementById(target).classList.add("active");
//             });
//         });


// table cases
async function loadCases() {

    const res = await fetch("cases.json");
    const cases = await res.json();

    const tbody = document.querySelector("#case-table tbody");
    tbody.innerHTML = "";

    cases.forEach(c => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${c.case_id}</td>
      <td>${c.department}</td>
      <td class="status-${c.status_color}">${c.status}</td>
      <td>${c.summary}</td>
      <td><button class="btn-main" data-id="${c.case_id}">ดูรายละเอียด</button></td>
    `;
        tbody.appendChild(row);
    });

    attachViewButtons(cases);
}

function attachViewButtons(cases) {
    document.querySelectorAll(".btn-main").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.dataset.id;
            const data = cases.find(c => c.case_id === id);
            showDetail(data);
        });
    });
}

function showDetail(c) {

    // ชื่อหัวข้อ
    document.getElementById("case-detail-title").innerText =
        `รายละเอียดคดี: ${c.case_id} – ${c.department}`;

    // TAB: รายละเอียด
    document.getElementById("tab-detail").innerHTML = `
    <div class="detail-box">${c.detail}</div>
    <div class="detail-box">
      <strong>ประเภทความผิด:</strong> ${c.violation_type}<br>
      <strong>สถานะปัจจุบัน:</strong> ${c.status}
    </div>
  `;

    // TAB: ผลพิจารณา
    document.getElementById("tab-result").innerHTML = `
    <div class="detail-box">
      <strong>ผลการพิจารณา:</strong> ${c.penalty}
    </div>
  `;

    // TAB: Timeline
    // let timelineHTML = "";
    // c.timeline.forEach(t => {
    //     timelineHTML += `
    //   <div class="timeline-step">
    //     <strong>${t.label}:</strong> ${t.date}
    //   </div>`;
    // });
    // document.getElementById("tab-timeline").innerHTML = timelineHTML;



    let timelineHTML = `<div class="vertical-timeline">`;

    c.timeline.forEach(t => {
        timelineHTML += `
    <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">${t.date}</div>
        <div class="timeline-text">${t.label}</div>
        ${t.reason ? `<div class="timeline-reason">${t.reason}</div>` : ""}
    </div>
    `;
    });


    timelineHTML += `</div>`;
    document.getElementById("tab-timeline").innerHTML = timelineHTML;

    // let timelineHTML = "";
    // c.timeline.forEach(t => {
    //     timelineHTML += `
    //   <div class="timeline-step">
    //     <strong>${t.label}:</strong> ${t.date}
    //     ${t.reason ? `<div class="timeline-reason">${t.reason}</div>` : ""}
    //   </div>`;
    // });
    // document.getElementById("tab-timeline").innerHTML = timelineHTML;


    // show card
    document.getElementById("case-detail-card").style.display = "block";

    activateTabSwitching();
}

// initial load
loadCases();

function activateTabSwitching() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.onclick = () => {
            const tab = btn.dataset.tab;

            // remove active from all buttons
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // hide other tabs
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

            // show selected tab
            document.getElementById("tab-" + tab).classList.add('active');
        };
    });
}
