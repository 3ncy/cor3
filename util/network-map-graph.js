let connections = []; // array from get.map
let output = "";
for (let con of connections) {
    output += `${con.serverA} -${con.isHidden ? '.' : '-'}- ${con.serverB}\n`
}
console.log(output);

//---

let servers = []; // array from get.servers
let output2 = "";
for (let server of servers) {
    output2 += `${server.id}["${server.serverName}"]\n`
}
console.log(output2);

//---

let rates = {};
for (let server of servers) {
    if (!rates[server.serverDefenceRate]) {
        rates[server.serverDefenceRate] = [];
    }
    rates[server.serverDefenceRate].push(server.serverName);
}

let output3 = "";
for (let rate in rates) {
    output3 += `* ${rate}\n    * ${rates[rate].join('\n    * ')}\n`
}
console.log(output3);

//---

// Server information markdown table
let serverColorMap = { "#A8F87F": '🟢 ', "#D5DECB": '⚪ ', "#4B4B4B": '⚫ ', "#FE4949": '🔴 ', "#88DCFA": '🔵 ' };
let output4 = "| Server Name | Faction | Transit | Type | Cluster | Location  | IP | Color | Owner | Market | Defence Rate |\n";
output4 +=/**/"|-------------|---------|---------|------|---------|-----------|----|-------|-------|--------|--------------|\n";
function nbsp(str) {return str.replaceAll(' ', '&nbsp;');}
for (let server of servers) {
    output4 += `| ${nbsp(server.serverName)} | ${server.faction ?? ''} | ${server.transitType} |`
        + ` ${nbsp(server.serverTypeName)} | ${server.serverCluster ?? ''} | ${nbsp(server.serverLocation ?? '')} |`
        + ` ${server.serverIp} | ${serverColorMap[server.serverColor.main] || ''}\`${server.serverColor.main}\` | ${server.serverOwner ?? ''} | ${server.marketId ? 'Yes' : ''} | ${server.serverDefenceRate} |\n`;
}
console.log(output4);