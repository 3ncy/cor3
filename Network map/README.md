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
019e4052-c315-71df-80da-4e334b96c9e6["RM7-S4L1"]
019e4052-c316-73aa-81f6-38c323c58eb2["RM7-S4L2"]
019e4052-c316-73aa-81f6-3dcef4d6873e["RM7-S4L3"]
019e4052-c316-73aa-81f6-4059ea0554e0["RM7-W3L4"]
019d1b0a-13a9-77dd-b41f-3a21d490cb2d["RM7-E1SCP"]
019da6f1-16f7-75a6-b6d3-0b1d5f92a105["RM7-N2ECP"]
019da6f1-16f7-75a6-b6d3-0b1d5f92a106["RM7-W3NCP"]
019d53aa-5101-7f08-b3dd-378b0ddcf7d0["RM7-E1L2CT"]
019e4052-c316-73aa-81f6-448645a38c9e["RM7-S4WCP"]
019d29c5-4b37-7436-aef9-89af09560af3["D4RK RM7CE"]
019d29c5-4b37-79bf-b23e-304d8ea03c15["D4RK RM7MI"]
019e4052-c316-73aa-81f6-483e50247e61["D4RK RM7EG"]
019e4052-c316-73aa-81f6-4da2a3e8df51["D4RK T43272"]
019e4052-c316-73aa-81f6-53432dbee49d["D4RK T43274"]
019d29c5-4b37-7de9-b46c-022179bcb5eb["D4RK 2IV2"]
019e4052-c317-7388-9d71-8044f31bdc0d["D4RK 2IV0/3"]
019e4052-c316-73aa-81f6-567c9a8f5738["B43271N"]
019e4052-c316-73aa-81f6-5aa82fc72bdd["B43272N"]
019e4052-c316-73aa-81f6-60ec61b61f0a["B43274N"]
019da6f1-16f7-75a6-b6d3-0b1d5f92a107["SRM7-N3L1"]
019da6f1-16f7-75a6-b6d3-0b1d5f92a108["SRM7-M"]
019da6f1-16f7-75a6-b6d3-0b1d5f92a109["SRM7-N3L2"]
019da6f1-16f7-75a6-b6d3-0b1d5f92a10a["SRM7-N4L2"]
019da6f1-16f7-75a6-b6d3-0b1d5f92a10b["SPRM7-N4L3"]
019da6f1-16f7-75a6-b6d3-0b1d5f92a10c["SRRM7"]
019e4052-c317-7388-9d71-85b98a02d5fb["URM7-S5L2"]
019e4052-c317-7388-9d71-883ffb1560cd["URM7-M"]
019e4052-c317-7388-9d71-8fed6faaaf99["URM7-H"]
019e4052-c317-7388-9d71-91d0758336ae["URM7-W4L2"]
019e4052-c317-7388-9d71-96d991fb4b99["UPRM7-S3L2"]
019e4052-c317-7388-9d71-9aadc2e7c42b["URRM7"]
019dbe42-7a63-7a11-9f4d-8a6a61d2a201["EM[RM7-E2L2]"]
019dbe42-7a63-7a11-9f4d-8a6a61d2a202["EM[undefined]"]

019c0a5b-eeeb-7d3e-b9c9-fd5c2ba7d399 --- 019d1b0a-13a9-77dd-b41f-33f06f2df284
019c0a5b-eeeb-7d3e-b9c9-fd5c2ba7d399 --- 019d1b0a-13a9-77dd-b41f-374ee144bd07
019d1b0a-13a9-77dd-b41f-374ee144bd07 --- 019d1b0a-13a9-77dd-b41f-3a21d490cb2d
019d1b0a-13a9-77dd-b41f-3a21d490cb2d --- 019d1b0a-13a9-77dd-b41f-3ffb5f671742
019d1b0a-13a9-77dd-b41f-33f06f2df284 --- 019da6f1-16f7-75a6-b6d3-0b1d5f92a105
019da6f1-16f7-75a6-b6d3-0b1d5f92a101 --- 019da6f1-16f7-75a6-b6d3-0b1d5f92a105
019da6f1-16f7-75a6-b6d3-0b1d5f92a102 --- 019da6f1-16f7-75a6-b6d3-0b1d5f92a101
019da6f1-16f7-75a6-b6d3-0b1d5f92a103 --- 019da6f1-16f7-75a6-b6d3-0b1d5f92a106
019da6f1-16f7-75a6-b6d3-0b1d5f92a104 --- 019da6f1-16f7-75a6-b6d3-0b1d5f92a106
019da6f1-16f7-75a6-b6d3-0b1d5f92a104 -.- 019da6f1-16f7-75a6-b6d3-0b1d5f92a105
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
019da6f1-16f7-75a6-b6d3-0b1d5f92a109 -.- 019da6f1-16f7-75a6-b6d3-0b1d5f92a101
019da6f1-16f7-75a6-b6d3-0b1d5f92a10a --- 019da6f1-16f7-75a6-b6d3-0b1d5f92a10b
019d1b0a-13a9-77dd-b41f-3ffb5f671742 --- 019e4052-c315-71df-80da-4e334b96c9e6
019e4052-c316-73aa-81f6-3dcef4d6873e --- 019e4052-c316-73aa-81f6-38c323c58eb2
019e4052-c316-73aa-81f6-38c323c58eb2 --- 019e4052-c316-73aa-81f6-448645a38c9e
019e4052-c316-73aa-81f6-38c323c58eb2 -.- 019d1b0a-13a9-77dd-b41f-3a21d490cb2d
019e4052-c316-73aa-81f6-448645a38c9e --- 019e4052-c316-73aa-81f6-4059ea0554e0
019e4052-c315-71df-80da-4e334b96c9e6 --- 019e4052-c316-73aa-81f6-448645a38c9e
019e4052-c316-73aa-81f6-483e50247e61 --- 019d29c5-4b37-79bf-b23e-304d8ea03c15
019e4052-c316-73aa-81f6-4da2a3e8df51 --- 019d29c5-4b37-7de9-b46c-022179bcb5eb
019e4052-c316-73aa-81f6-4da2a3e8df51 --- 019e4052-c317-7388-9d71-8044f31bdc0d
019e4052-c316-73aa-81f6-53432dbee49d --- 019e4052-c316-73aa-81f6-5aa82fc72bdd
019e4052-c316-73aa-81f6-4da2a3e8df51 -.- 019e4052-c316-73aa-81f6-53432dbee49d
019e4052-c316-73aa-81f6-53432dbee49d --- 019d29c5-4b37-7de9-b46c-022179bcb5eb
019e4052-c316-73aa-81f6-60ec61b61f0a --- 019e4052-c316-73aa-81f6-483e50247e61
019e4052-c316-73aa-81f6-567c9a8f5738 --- 019e4052-c316-73aa-81f6-60ec61b61f0a
019e4052-c316-73aa-81f6-567c9a8f5738 -.- 019d53aa-5101-7f08-b3dd-378b0ddcf7d0
019e4052-c316-73aa-81f6-5aa82fc72bdd --- 019e4052-c316-73aa-81f6-567c9a8f5738
019e4052-c317-7388-9d71-85b98a02d5fb --- 019e4052-c316-73aa-81f6-3dcef4d6873e
019e4052-c317-7388-9d71-883ffb1560cd --- 019e4052-c317-7388-9d71-85b98a02d5fb
019e4052-c317-7388-9d71-8fed6faaaf99 --- 019e4052-c317-7388-9d71-883ffb1560cd
019e4052-c317-7388-9d71-8fed6faaaf99 -.- 019e4052-c315-71df-80da-4e334b96c9e6
019e4052-c317-7388-9d71-91d0758336ae --- 019e4052-c317-7388-9d71-8fed6faaaf99
019e4052-c317-7388-9d71-96d991fb4b99 --- 019e4052-c317-7388-9d71-8fed6faaaf99
019e4052-c317-7388-9d71-9aadc2e7c42b --- 019e4052-c317-7388-9d71-8fed6faaaf99
019d1b0a-13a9-77dd-b41f-33f06f2df284 -.- 019dbe42-7a63-7a11-9f4d-8a6a61d2a201
019da6f1-16f7-75a6-b6d3-0b1d5f92a101 -.- 019dbe42-7a63-7a11-9f4d-8a6a61d2a202
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

A hidden connection between `RM7-N1L1` and `RM7-N2ECP` can be revealed by searching the IP address of either of the servers: `855.529.4.1` or `855.529.4.13`. The hidden connection between `SRM7-N3L2` and `RM7-N2L2` is revealed in the same fashion, by searching either `855.529.4.17` or `855.529.4.2`.

The server `RM7-54L1` is unlocked (likely) by hacking `RM7-S4L4`.

The server `D4RK RM7EG` is unlocked by connection to `D4RK RM7MI`.

## Important files
### RM7-E1L2CT
* [Email: From: Chris_Tong.txt](/Email%20From%20Chris_Tong.txt.md)
* [Component_board_tx-71tong.txt](/Component_board_tx-71tong.txt.md)
* [Mantis_drone_R4RD(TONG).png](/Mantis_drone_R4RD(TONG).png.jpg)

### RM7-E1SCP
* [sw12_Sec_Report_2341245.txt](/sw12_Sec_Report_2341245.txt.md)

### EM[RM7-E2L2]
* [connections_log_recovered.log](/connections_log_recovered.log)

### EM[UNDEFINED]
* [ad_note.png](/ad_note.png)
* [attack_logs.log](/attack_logs.log.md)

### RM7-S4L4
* [cufgu ab ginhu Koute.png](/cufgu%20ab%20ginhu%20Koute.png)

### URM7-S5L2
* [Hochmetall Security — Internal Inspection Order.png](/Hochmetall%20Security%20—%20Internal%20Inspection%20Order.png)

## Server information
| Server Name | Faction | Owner| Transit | Type | Cluster | Location  | IP | Color | Market | Defence Rate |
|-------------|---------|------|---------|------|---------|-----------|----|-------|--------|--------------|
| Home&nbsp;Server | Home | Player | public | Home | Home |  | 855.529.0.2 | 🟢 `#A8F87F` | Yes | 0 |
| RM7-E1L3 | CEDRT | COR3 | public | CEDRT&nbsp;public | REPNODE-M7 East | REPNODE-M7&nbsp;deck&nbsp;2-25 | 855.529.1.3 | ⚪ `#D5DECB` |  | 5 |
| RM7-E1L5 | CEDRT | COR3 | public | CEDRT&nbsp;public | REPNODE-M7 East | REPNODE-M7&nbsp;deck&nbsp;1-8 | 855.529.1.5 | ⚪ `#D5DECB` |  | 5 |
| RM7-S4L4 | CEDRT | COR3 | public | CEDRT&nbsp;public | REPNODE-M7 South | REPNODE-M7&nbsp;deck&nbsp;2-17 | 855.529.2.4 | ⚪ `#D5DECB` |  | 5 |
| RM7-N2L2 | CEDRT | COR3 | public | CEDRT&nbsp;public | REPNODE-M7 North | REPNODE-M7&nbsp;deck&nbsp;4-16 | 855.529.4.2 | ⚪ `#D5DECB` |  | 13 |
| RM7-N2L3 | CEDRT | COR3 | public | CEDRT&nbsp;public | REPNODE-M7 North | REPNODE-M7&nbsp;deck&nbsp;4-8 | 855.529.4.3 | ⚪ `#D5DECB` |  | 12 |
| RM7-W3L2 | CEDRT | COR3 | public | CEDRT&nbsp;public | REPNODE-M7 West |  | 855.529.3.2 | ⚪ `#D5DECB` |  | 15 |
| RM7-N1L1 | CEDRT | COR3 | public | CEDRT&nbsp;public | REPNODE-M7 North | REPNODE-M7&nbsp;deck&nbsp;4-1 | 855.529.4.1 | ⚪ `#D5DECB` |  | 13 |
| RM7-S4L1 | CEDRT | COR3 | public | CEDRT&nbsp;public | REPNODE-M7 South |  | 855.529.2.1 | ⚪ `#D5DECB` |  | 12 |
| RM7-S4L2 | CEDRT | COR3 | public | CEDRT&nbsp;public | REPNODE-M7 South |  | 855.529.2.12 | ⚪ `#D5DECB` |  | 12 |
| RM7-S4L3 | CEDRT | COR3 | public | CEDRT&nbsp;public | REPNODE-M7 South |  | 855.529.2.3 | ⚪ `#D5DECB` |  | 13 |
| RM7-W3L4 | CEDRT | COR3 | public | CEDRT&nbsp;public | REPNODE-M7 West |  | 855.529.3.4 | ⚪ `#D5DECB` |  | 15 |
| RM7-E1SCP |  |  | private | CEDRT&nbsp;private |  |  | 855.529.1.2 | ⚪ `#D5DECB` |  | 12 |
| RM7-N2ECP |  |  | private | CEDRT&nbsp;private |  |  | 855.529.4.13 | ⚪ `#D5DECB` |  | 12 |
| RM7-W3NCP |  |  | private | CEDRT&nbsp;private |  |  | 855.529.3.7 | ⚪ `#D5DECB` |  | 13 |
| RM7-E1L2CT | CEDRT |  | private | CEDRT&nbsp;private | REPNODE-M7 East |  | 855.529.1.13 | ⚪ `#D5DECB` |  | 7 |
| RM7-S4WCP |  |  | private | CEDRT&nbsp;private |  |  | 855.529.2.0 | ⚪ `#D5DECB` |  | 13 |
| D4RK&nbsp;RM7CE |  |  | public | D4RK&nbsp;T4 |  |  | 855.528.0.4 | ⚫ `#4B4B4B` |  | 15 |
| D4RK&nbsp;RM7MI |  |  | public | D4RK&nbsp;T4 |  |  | 855.528.0.12 | ⚫ `#4B4B4B` | Yes | 15 |
| D4RK&nbsp;RM7EG |  |  | public | D4RK&nbsp;T4 |  |  | 855.528.0.14 | ⚫ `#4B4B4B` |  | 15 |
| D4RK&nbsp;T43272 |  |  | public | D4RK&nbsp;T4 |  |  | 853.172.2.2 | ⚫ `#4B4B4B` |  | 20 |
| D4RK&nbsp;T43274 |  |  | public | D4RK&nbsp;T4 |  |  | 853.172.2.4 | ⚫ `#4B4B4B` |  | 22 |
| D4RK&nbsp;2IV2 |  |  | restricted | D4RK&nbsp;2IV |  |  | 855.528.0.2 | ⚫ `#4B4B4B` |  | 22 |
| D4RK&nbsp;2IV0/3 |  |  | restricted | D4RK&nbsp;2IV |  |  | 853.172.0.3 | ⚫ `#4B4B4B` |  | 25 |
| B43271N |  |  | private | D4RK/B1N |  |  | 854.266.7.1 | ⚫ `#4B4B4B` |  | 27 |
| B43272N |  |  | private | D4RK/B1N |  |  | 854.266.7.2 | ⚫ `#4B4B4B` |  | 36 |
| B43274N |  |  | private | D4RK/B1N |  |  | 854.266.7.4 | ⚫ `#4B4B4B` |  | 8 |
| SRM7-N3L1 | SOYUZ | SOYUZ | public | SOYUZ&nbsp;public | SOYUZ RM7 North |  | 855.529.4.6 | 🔴 `#FE4949` |  | 12 |
| SRM7-M | SOYUZ | SOYUZ | public | SOYUZ&nbsp;public | SOYUZ RM7 North |  | 855.529.4.10 | 🔴 `#FE4949` | Yes | 24 |
| SRM7-N3L2 | SOYUZ | SOYUZ | public | SOYUZ&nbsp;public | SOYUZ RM7 North |  | 855.529.4.17 | 🔴 `#FE4949` |  | 16 |
| SRM7-N4L2 | SOYUZ | SOYUZ | public | SOYUZ&nbsp;public | SOYUZ RM7 North |  | 855.529.4.8 | 🔴 `#FE4949` |  | 18 |
| SPRM7-N4L3 |  |  | private | SOYUZ&nbsp;private |  |  | 855.529.4.14 | 🔴 `#FE4949` |  | 16 |
| SRRM7 |  |  | restricted | 17M23GS |  |  | 852.530.1.1 | 🔴 `#FE4949` |  | 38 |
| URM7-S5L2 | USOL | USOL | public | USOL&nbsp;public | USOL RM7 South |  | 855.529.5.2 | 🔵 `#88DCFA` |  | 11 |
| URM7-M | USOL | USOL | public | USOL&nbsp;public | USOL RM7 South |  | 855.529.5.1 | 🔵 `#88DCFA` | Yes | 25 |
| URM7-H | USOL | USOL | public | USOL&nbsp;public | USOL RM7 South |  | 855.529.5.0 | 🔵 `#88DCFA` |  | 24 |
| URM7-W4L2 | USOL | USOL | public | USOL&nbsp;public | USOL RM7 South |  | 855.529.4.12 | 🔵 `#88DCFA` |  | 17 |
| UPRM7-S3L2 |  |  | private | USOL&nbsp;private |  |  | 855.529.5.33 | 🔵 `#88DCFA` |  | 18 |
| URRM7 |  |  | restricted | X61DCT |  |  | 760.129.3.0 | 🔵 `#88DCFA` |  | 34 |
| EM[RM7-E2L2] |  |  | restricted | EMERMODE |  |  | 855.529.2.2 | ⚪ `#D5DECB` |  | 11 |
| EM[undefined] |  |  | restricted | EMERMODE |  |  | 855.529.4.22 | ⚪ `#D5DECB` |  | 15 |


## Defense rates
* 0
    * Home Server
* 5
    * RM7-E1L3
    * RM7-E1L5
    * RM7-S4L4
* 7
    * RM7-E1L2CT
* 8
    * B43274N
* 11
    * URM7-S5L2
    * EM[RM7-E2L2]
* 12
    * RM7-N2L3
    * RM7-S4L1
    * RM7-S4L2
    * RM7-E1SCP
    * RM7-N2ECP
    * SRM7-N3L1
* 13
    * RM7-N2L2
    * RM7-N1L1
    * RM7-S4L3
    * RM7-W3NCP
    * RM7-S4WCP
* 15
    * RM7-W3L2
    * RM7-W3L4
    * D4RK RM7CE
    * D4RK RM7MI
    * D4RK RM7EG
    * EM[undefined]
* 16
    * SRM7-N3L2
    * SPRM7-N4L3
* 17
    * URM7-W4L2
* 18
    * SRM7-N4L2
    * UPRM7-S3L2
* 20
    * D4RK T43272
* 22
    * D4RK T43274
    * D4RK 2IV2
* 24
    * SRM7-M
    * URM7-H
* 25
    * D4RK 2IV0/3
    * URM7-M
* 27
    * B43271N
* 34
    * URRM7
* 36
    * B43272N
* 38
    * SRRM7

<details>
<summary><h2>Technical notes</h2></summary>

Story related files on servers have their `source` as `system`, while all the filler files/logs/addresses have their `source` as `generated`. Files/logs/addresses spawned by a job are coming from `job`, and finally files uploaded – or addresses added – by the player as a part of a job have their `source` as `user` or `job`.

</details>
