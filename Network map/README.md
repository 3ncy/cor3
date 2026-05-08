# Network map
```mermaid
flowchart LR
019c0a5b-eeeb-7d3e-b9c9-fd5c2ba7d399["Home Server"]
019d1b0a-13a9-77dd-b41f-33f06f2df284["RM7-E1L3"]
019d1b0a-13a9-77dd-b41f-374ee144bd07["RM7-E1L5"]
019d1b0a-13a9-77dd-b41f-3ffb5f671742["RM7-S4L4"]
019da6f1-16f7-75a6-b6d3-0b1d5f92a101["RM7-N2L2"]
019da6f1-16f7-75a6-b6d3-0b1d5f92a102["RM7-N2L3"]
019da6f1-16f7-75a6-b6d3-0b1d5f92a103["RM7-W3L2"]
019da6f1-16f7-75a6-b6d3-0b1d5f92a104["RM7-N1L1"]
019d1b0a-13a9-77dd-b41f-3a21d490cb2d["RM7-E1SCP"]
019da6f1-16f7-75a6-b6d3-0b1d5f92a105["RM7-N2ECP"]
019da6f1-16f7-75a6-b6d3-0b1d5f92a106["RM7-W3NCP"]
019d53aa-5101-7f08-b3dd-378b0ddcf7d0["RM7-E1L2CT"]
019d29c5-4b37-7436-aef9-89af09560af3["D4RK RM7CE"]
019d29c5-4b37-79bf-b23e-304d8ea03c15["D4RK RM7MI"]
019d29c5-4b37-7de9-b46c-022179bcb5eb["D4RK 2IV2"]
019da6f1-16f7-75a6-b6d3-0b1d5f92a107["SRM7-N3L1"]
019da6f1-16f7-75a6-b6d3-0b1d5f92a108["SRM7-M"]
019da6f1-16f7-75a6-b6d3-0b1d5f92a109["SRM7-N3L2"]
019da6f1-16f7-75a6-b6d3-0b1d5f92a10a["SRM7-N4L2"]
019da6f1-16f7-75a6-b6d3-0b1d5f92a10b["SPRM7-N4L3"]
019da6f1-16f7-75a6-b6d3-0b1d5f92a10c["SRRM7"]

019c0a5b-eeeb-7d3e-b9c9-fd5c2ba7d399 --- 019d1b0a-13a9-77dd-b41f-33f06f2df284
019c0a5b-eeeb-7d3e-b9c9-fd5c2ba7d399 --- 019d1b0a-13a9-77dd-b41f-374ee144bd07
019d1b0a-13a9-77dd-b41f-374ee144bd07 --- 019d1b0a-13a9-77dd-b41f-3a21d490cb2d
019d1b0a-13a9-77dd-b41f-3a21d490cb2d --- 019d1b0a-13a9-77dd-b41f-3ffb5f671742
019d1b0a-13a9-77dd-b41f-33f06f2df284 --- 019da6f1-16f7-75a6-b6d3-0b1d5f92a105
019da6f1-16f7-75a6-b6d3-0b1d5f92a101 --- 019da6f1-16f7-75a6-b6d3-0b1d5f92a105
019da6f1-16f7-75a6-b6d3-0b1d5f92a102 --- 019da6f1-16f7-75a6-b6d3-0b1d5f92a101
019da6f1-16f7-75a6-b6d3-0b1d5f92a103 --- 019da6f1-16f7-75a6-b6d3-0b1d5f92a106
019da6f1-16f7-75a6-b6d3-0b1d5f92a104 --- 019da6f1-16f7-75a6-b6d3-0b1d5f92a106
019da6f1-16f7-75a6-b6d3-0b1d5f92a104 --- 019da6f1-16f7-75a6-b6d3-0b1d5f92a107
019da6f1-16f7-75a6-b6d3-0b1d5f92a102 --- 019da6f1-16f7-75a6-b6d3-0b1d5f92a106
019d1b0a-13a9-77dd-b41f-3a21d490cb2d -.- 019d29c5-4b37-7436-aef9-89af09560af3
019d29c5-4b37-7436-aef9-89af09560af3 --- 019d29c5-4b37-79bf-b23e-304d8ea03c15
019d29c5-4b37-7436-aef9-89af09560af3 --- 019d29c5-4b37-7de9-b46c-022179bcb5eb
019d1b0a-13a9-77dd-b41f-374ee144bd07 --- 019d53aa-5101-7f08-b3dd-378b0ddcf7d0
019da6f1-16f7-75a6-b6d3-0b1d5f92a107 --- 019da6f1-16f7-75a6-b6d3-0b1d5f92a10a
019da6f1-16f7-75a6-b6d3-0b1d5f92a107 --- 019da6f1-16f7-75a6-b6d3-0b1d5f92a108
019da6f1-16f7-75a6-b6d3-0b1d5f92a108 --- 019da6f1-16f7-75a6-b6d3-0b1d5f92a109
019da6f1-16f7-75a6-b6d3-0b1d5f92a109 --- 019da6f1-16f7-75a6-b6d3-0b1d5f92a10c
019da6f1-16f7-75a6-b6d3-0b1d5f92a10a --- 019da6f1-16f7-75a6-b6d3-0b1d5f92a10b
```

## How it works?
Network Map is your guide into the entirety of the global CORIE net. Its main purpose is to provide a clear visual representation, positioning and dependencies of your "base" network and its surroundings.

Users can use a Network Map to set a destination, also known as an End Point, to a server that they would like to connect to. Sometimes, that would require tunneling through several other servers to reach the End Point - those servers are considered End Points as well.

There could be additional conditions to access various assets on the Network, for example:
* Some websites would only open if you have an established connection (A set End Point) to a specific server.
* Many servers do not have public access, they are considered "private" so accessing them would require fulfilling additional conditions, like, for example, purchasing specialized Software on the Market (or any other specific condition).
* Few servers could be hidden, so to find and access them one would need to use their wit and look for the hints.
* Some servers could only be accessed through hacking of the SAI - Server Administration Interface. By doing so the Hacker would gain access to the main shell that, in turn, grants a user full access to all of the server's contents (Files, Logs, Mails, Sites and so on).

## Unlocking servers
Connecting to `RM7-E1SCP` reveals the server `RM7-S4L4`.

The server `RM7-E1SCP` has a file [sw12_Sec_Report_2341245.txt](/sw12_Sec_Report_2341245.txt.md), which can be downloaded. It is possible to obtain the IP address `855.528.0.4`, which reveals the servers `D4RK RM7CE`, `D4RK RM7MI` and `D4RK 2IV2`.

Connecting to `RM7-E1L3` reveals the server `RM7-N2ECP`, which in turn reveals all the further servers situated in the branch, including Soyuz servers: `RM7-N2L2`, `RM7-N2L3`, `RM7-W3NCP`, `RM7-W3L2`, `RM7-N1L1`, `SRM7-N3L1`, `SRM7-N4L2`, `SPRM7-N4L3`, `SRM7-M`, `SRM7-N3L2`, `SRRM7`.

## Important files
### RM7-E1L2CT
* [Email: From: Chris_Tong.txt](/Email%20From%20Chris_Tong.txt.md)
* [Component_board_tx-71tong.txt](/Component_board_tx-71tong.txt.md)
* [Mantis_drone_R4RD(TONG).png](/Mantis_drone_R4RD(TONG).png.jpg)

### RM7-E1SCP
* [sw12_Sec_Report_2341245.txt](/sw12_Sec_Report_2341245.txt.md)

## Server information
| Server Name | Faction | Owner| Transit | Type | Cluster | IP | Defence Rate | Location | Market |
|-------------|:---:|------|:---:|------|---------|----|:---:|----------|:---:|
| Home&nbsp;Server | 🟢 | Player | public | Home | Home | 855.529.0.2 | 0 | | Yes |
| RM7-E1L3 | ⚪ | COR3 | public | CEDRT&nbsp;public | REPNODE-M7 East | 855.529.1.3 | 5 | REPNODE-M7&nbsp;deck&nbsp;2-25 | |
| RM7-E1L5 | ⚪ | COR3 | public | CEDRT&nbsp;public | REPNODE-M7 East | 855.529.1.5 | 5 | REPNODE-M7&nbsp;deck&nbsp;1-8 | |
| RM7-S4L4 | ⚪ | COR3 | public | CEDRT&nbsp;public | REPNODE-M7 South | 855.529.2.4 | 5 | REPNODE-M7&nbsp;deck&nbsp;2-17 | |
| RM7-N2L2 | ⚪ | COR3 | public | CEDRT&nbsp;public | REPNODE-M7 North | 855.529.4.2 | 13 | REPNODE-M7&nbsp;deck&nbsp;4-16 | |
| RM7-N2L3 | ⚪ | COR3 | public | CEDRT&nbsp;public | REPNODE-M7 North | 855.529.4.3 | 12 | REPNODE-M7&nbsp;deck&nbsp;4-8 | |
| RM7-W3L2 | ⚪ | COR3 | public | CEDRT&nbsp;public | REPNODE-M7 West | 855.529.3.2 | 15 | | |
| RM7-N1L1 | ⚪ | COR3 | public | CEDRT&nbsp;public | REPNODE-M7 North | 855.529.4.1 | 13 | REPNODE-M7&nbsp;deck&nbsp;4-1 | |
| RM7-E1SCP | ⚪ | | private | CEDRT&nbsp;private | REPNODE-M7 East | 855.529.1.2 | 12 | | |
| RM7-N2ECP | ⚪ | | private | CEDRT&nbsp;private | REPNODE-M7 North | 855.529.4.13 | 12 | | |
| RM7-W3NCP | ⚪ | | private | CEDRT&nbsp;private | REPNODE-M7 West | 855.529.3.7 | 13 | | |
| RM7-E1L2CT | ⚪ | | private | CEDRT&nbsp;private | REPNODE-M7 East | 855.529.1.13 | 7 | | |
| D4RK&nbsp;RM7CE | ⚫ | | public | D4RK&nbsp;T4 | D4RK RM7 | 855.528.0.4 | 15 | | |
| D4RK&nbsp;RM7MI | ⚫ | | public | D4RK&nbsp;T4 | | 855.528.0.12 | 15 | | Yes |
| D4RK&nbsp;2IV2 | ⚫ | | restricted | D4RK&nbsp;2IV | | 855.528.0.2 | 22 | | |
| SRM7-N3L1 | 🔴 | SOYUZ | public | SOYUZ&nbsp;public | SOYUZ RM7 North | 855.529.4.6 | 12 | | |
| SRM7-M | 🔴 | SOYUZ | public | SOYUZ&nbsp;public | SOYUZ RM7 North | 855.529.4.10 | 24 | | Yes |
| SRM7-N3L2 | 🔴 | SOYUZ | public | SOYUZ&nbsp;public | SOYUZ RM7 North | 855.529.4.17 | 16 | | |
| SRM7-N4L2 | 🔴 | SOYUZ | public | SOYUZ&nbsp;public | SOYUZ RM7 North | 855.529.4.8 | 18 | | |
| SPRM7-N4L3 | 🔴 | | private | SOYUZ&nbsp;private | | 855.529.4.14 | 16 | | |
| SRRM7 | 🔴 | | restricted | 17M23GS | | 852.530.1.1 | 38 | | |

### Faction Color Guide
* 🟢 **Home**
* ⚪ **COR3** (and CEDRT)
* 🔴 **Soyuz**
* 🔵 **Usol**
* 🟣 **Osiris**
* 🟡 **Terra**
* ⚫ **D4RK** (Restricted / Undefined)

## Defense rates
* 0
    * Home Server
* 5
    * RM7-E1L3
    * RM7-E1L5
    * RM7-S4L4
* 7
    * RM7-E1L2CT
* 12
    * RM7-N2L3
    * RM7-E1SCP
    * RM7-N2ECP
    * SRM7-N3L1
* 13
    * RM7-N2L2
    * RM7-N1L1
    * RM7-W3NCP
* 15
    * RM7-W3L2
    * D4RK RM7CE
    * D4RK RM7MI
* 16
    * SRM7-N3L2
    * SPRM7-N4L3
* 18
    * SRM7-N4L2
* 22
    * D4RK 2IV2
* 24
    * SRM7-M
* 38
    * SRRM7

<details>
<summary><h2>Technical notes</h2></summary>

Story related files on servers have their `source` as `system`, while all the filler files/logs/addresses have their `source` as `generated`. Files/logs/addresses spawned by a job are coming from `job`, and finally files uploaded – or addresses added – by the player as a part of a job have their `source` as `user`.

</details>
