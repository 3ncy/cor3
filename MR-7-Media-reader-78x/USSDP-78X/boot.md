After connecting the broken USSD drive, this "boot log" appears:

```log
[00:00:00.000] SYS:INFO BOOT Reader instance v2.8.19 starting...
[00:00:00.010] SYS:INFO Allocating core services...
[00:00:00.026] SYS:INFO Subsystems online: BUS, IO, SMART, RAW
[00:00:00.045] SYS:INFO Thermal control: PASSIVE @ 28°C
[00:00:00.065] BUS:INFO Initializing physical link...
[00:00:00.076] BUS:INFO Link negotiation: USSD → UDB-4 bridge
[00:00:00.086] BUS:INFO Speed mode: 10.0Gbps (fallback: 5.0Gbps)
[00:00:00.103] BUS:INFO Lane integrity: OK (BER=1.4e-12)
[00:00:00.122] BUS:INFO Confirming DMA capabilities...
[00:00:00.142] BUS:INFO DMA mode: UDMA7 enabled
[00:00:00.152] BUS:INFO Interface negotiated successfully
[00:00:00.166] DEV:INFO Device handshake initiated...
[00:00:00.180] DEV:INFO Model         : MR-7 Media Reader 78x
[00:00:00.197] DEV:INFO Manufacturer  : CORETECH INC.
[00:00:00.212] DEV:INFO OS Name       : Coretech_infodisk_batch4corp
[00:00:00.223] DEV:INFO Sec footprint : CORE-CADL-BASIC
[00:00:00.240] DEV:WARN Firmware      : v1.12.03
[00:00:00.260] DEV:INFO Support page  : coretech.corie
[00:00:00.274] DEV:INFO Controller    : CST-HR23 Rev.B
[00:00:00.293] DEV:INFO Capacity      : 0 MBytes
[00:00:00.312] DEV:INFO Sector size   : 4096B (logical) / 4096B (physical)
[00:00:00.331] SMART:INFO Reading attributes...
[00:00:00.343] SMART:INFO ATTR Power-On Hours       : 14582h
[00:00:00.355] SMART:INFO ATTR Reallocated Sectors  : 0219
[00:00:00.365] SMART:INFO ATTR UDMA CRC Errors      : 003
[00:00:00.376] SMART:INFO ATTR Thermal Margin       : PASS
[00:00:00.393] SMART:WARN Media Wearout        : 67%
[00:00:00.412] SMART:INFO Status: CAUTION
[00:00:00.429] FS:INFO Inspecting file system...
[00:00:00.444] FS:WARN Partition table: DAMAGED
[00:00:00.464] FS:INFO Attempting fallback read mode...
[00:00:00.482] IO:INFO CMD=0x25 lba=0x000000000 blocks=64
[00:00:00.493] IO:WARN ECC error @lba=0x000000002
[00:00:00.503] IO:INFO Retrying (1/3)...
[00:00:00.522] IO:WARN ECC error @lba=0x000000002
[00:00:00.532] IO:INFO Retrying (2/3)...
[00:00:00.550] IO:WARN CRC mismatch (expected=5FA1 recv=4C29)
[00:00:00.560] IO:INFO Retrying (3/3)...
[00:00:00.573] IO:ERROR Unrecoverable ECC error
[00:00:00.590] IO:INFO Switching to RAW extraction mode...
[00:00:00.608] RAW:INFO Dumping sector header
[00:00:00.628] RAW:0010: 43 4F 52 33 2D 48 44 44 52 2D 37 38 58 00 00 00   |USSDP-78X.......|
[00:00:00.638] RAW:0020: 43 4F 52 54 45 43 48 20 53 59 53 54 45 4D 53 00   |CORETECH INC.....|
[00:00:00.653] RAW:0030: 56 31 2E 31 32 2E 30 33 00 00 00 00 00 00 00 00   |V1.12.03........|
[00:00:00.667] RAW:0040: 43 53 54 2D 48 52 32 33 20 52 45 56 20 42 00 00   |CST-HR23 REV B..|
[00:00:00.681] RAW:INFO Sector metadata read OK
[00:00:00.681] DIAG:INFO Dumping identifier map...
[00:00:00.695] DIAG:0100: HWID=CT-USSDP-78X-092A
[00:00:00.696] DIAG:0101: MAC_A=AC:7D:09:3F:22:B1
[00:00:00.697] DIAG:0102: MAC_B=AC:7D:09:3F:22:B2
[00:00:00.698] DIAG:0103: IMEI_1=492780019273645
[00:00:00.699] DIAG:0104: IMEI_2=492780019273652
[00:00:00.700] DIAG:0105: DEVICE_ID=CT-78X-A4F9-11
[00:00:00.701] DIAG:0106: LOT_ID=L2203-B07-19
[00:00:00.702] DIAG:0107: BARCODE=00928374650192837465
[00:00:00.703] DIAG:0108: NFC_TAG=CTAG-39FA-77C2
[00:00:00.704] DIAG:0109: SN=SN-A2089-99D-3K201
[00:00:00.705] DIAG:010A: OEM_ID=CORE-OEM-12B
[00:00:00.706] DIAG:010B: CFG_HASH=7FA9C2B1-09D3-44E8
[00:00:00.707] DIAG:010C: CALIB_ID=CLB-7842-19X
[00:00:00.708] DIAG:010D: ENC_TOKEN=E3F9A928-BF01-77C4
[00:00:00.709] DIAG:010E: REGION=Z3-SECTOR-04
[00:00:00.710] DIAG:010F: ROUTE_ID=RT-19-AF-783
[00:00:00.711] DIAG:0110: FAB_SLOT=FS-07-LN-22
[00:00:00.712] DIAG:0111: TRACE_ID=TRC-9982-4410
[00:00:00.713] DIAG:0112: QA_BATCH=QA-2205-4F
[00:00:00.714] DIAG:0113: ARCHIVE_KEY=AR-11-82C9-7F
[00:00:00.733] IO:INFO CMD=0x2B lba=0x000000100 blocks=128
[00:00:00.747] IO:WARN DMA stall detected
[00:00:00.757] BUS:WARN Bandwidth throttling engaged
[00:00:00.768] IO:INFO Read throughput: 182MB/s
[00:00:00.781] IO:INFO Read throughput: 121MB/s
[00:00:00.792] IO:INFO Read throughput: 43MB/s
[00:00:00.802] IO:WARN Throughput degradation >70%
[00:00:00.817] IO:INFO Switching to SAFE mode
[00:00:00.832] SMART:WARN Temperature spike detected (59°C)
[00:00:00.852] SYS:WARN Controller throttling engaged
[00:00:00.871] SYS:WARN Thermal limit approaching (63°C)
[00:00:00.891] FS:INFO Forensics mode: ON
[00:00:00.911] FS:INFO Extracting orphaned blocks
[00:00:00.927] FS:ERROR Block checksum mismatch
[00:00:00.946] IO:ERROR Device busy
[00:00:00.966] IO:ERROR Media not responding
[00:00:00.978] SYS:WARN Device hang detected (code=0x3CF5)
[00:00:00.990] SYS:INFO Attempting soft reset...
[00:00:01.010] SYS:ERROR Reset timeout
[00:00:01.030] [FATAL] READER MALFUNCTION
[00:00:01.042] SYS:INFO Last valid state saved for diagnostics
[00:00:01.057] SYS:INFO Session terminated with errors
```

The hexdump at 00:00:00.628 decodes to
```
COR3-HDDR-78X
CORTECH SYSTEMS
V1.12.03
CST-HR23 REV B
```
which is *nearly* the information shown on the right side of the hexdump, except for the device/interface name.