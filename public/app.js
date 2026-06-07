// 改成你的 Worker URL
const API_URL = "https://dfgg.de5.net/api/status";

async function load() {
  const tbody = document.getElementById("table-body");
  tbody.innerHTML = "<tr><td colspan='4'>加载中...</td></tr>";

  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    tbody.innerHTML = "";

    data.forEach(site => {
      const tr = document.createElement("tr");

      const statusClass = site.status === "UP" ? "status-up" : "status-down";

      tr.innerHTML = `
        <td><a href="${site.url}" target="_blank">${site.name}</a></td>
        <td class="${statusClass}">${site.status}</td>
        <td>${site.latency ?? "-" } ms</td>
        <td>${formatTime(site.time)}</td>
      `;

      tbody.appendChild(tr);
    });

  } catch (err) {
    tbody.innerHTML = "<tr><td colspan='4'>加载失败</td></tr>";
  }
}

// 时间格式化
function formatTime(time) {
  const d = new Date(time);
  return d.toLocaleString();
}

// 自动刷新（10秒拉一次，缓存60秒不会浪费请求）
load();
setInterval(load, 10000);
