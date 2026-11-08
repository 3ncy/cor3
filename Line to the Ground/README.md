| In-game name | File | Source file |
| --- | --- | --- |
| storm_shadow_outpost.png | [storm_shadow_outpost.png](./storm_shadow_outpost.png) | `storm_shadow_outpost.png` |
| storm_shadow_interior.png | [storm_shadow_interior.png](./storm_shadow_interior.png) | `storm_shadow_interior.png` |
| storm_shadow_interior_blackbox_hint.png | [storm_shadow_interior_blackbox_hint.png](./storm_shadow_interior_blackbox_hint.png) | `storm_shadow_interior_black_box.png` |
| comms_device_product.png | [comms_device_product.png](./comms_device_product.png) | `communication_device_product_image.png` |
| comms_device_blueprint.png | [comms_device_blueprint.png](./comms_device_blueprint.png) | `communication_device_blueprint.png` |
| decoded_blackbox_message.txt | [decoded_blackbox_message.txt](./decoded_blackbox_message.txt) | N/A |

`decoded_blackbox_message.txt` is a text file in the game and isn't on the CDN. Its text was pasted from the in-game window.

## Transcriptions

`[illegible]` marks text that is there but can't be read. `[?]` marks a character that is uncertain.

### [storm_shadow_outpost.png](./storm_shadow_outpost.png)

```text
SAT:      ORION-7
SENSOR:   SAR-C
MODE:     STRIPMAP
RES:      0.35m
ALT:      512.6 km
LAT:      34.7123 N
LON:      117.4238 E
UTC:      2025-05-26
          13:42:17 Z

TASK:     7A-3189
SCN:      004712
MODE:     ISR
BAND:     X
POL:      HH

N

0    25    50    75    100m
```

[Grayscale satellite image of a hilltop camp seen from above: several prefab buildings and containers, a pad with a marking on one roof, a mast, and a railed bridge at the top right. A red dot marks one of the buildings. North arrow and 100 m scale bar at the bottom left. The 5 in "0.35m" could also be read as an S [?].]

### [storm_shadow_interior.png](./storm_shadow_interior.png)

```text
DRN RECON v2.4
SYS ID: DRN-9A17
MODE: SCAN
UTC: 14:32:07 Z

W    NW    NW    N    NE    E
285   300   345  [352]  15   30   60

LAT: 63.4126 N
LON: 42.6187 E
ALT: 1243 m
SPD: 18.6 m/s

1300
1250
[1243]
1200
1150

SIGNAL ANALYSIS
FREQ: 2.412 GHz
TYPE: DATA UPLINK
STRENGTH: STRONG
CONFIDENCE: 92%

SIGNAL SOURCE

RNG (M)
50
25
[12.4]
0

CAM: EO/IR
ZOOM: 1.7x
FOV: 32.6°

SCAN MODE: SPECTRUM ANALYSIS

N
W         E
S
GRID   42R WL 15789 27134
TIME TO TARGET   00:00:12
```

[Drone camera view of a torn tent-like shelter over a small structure with an open doorway, mountains behind. A red target circle labelled SIGNAL SOURCE sits on the wall right of the door. Left: altitude scale with the signal panel. Right: range scale. Bottom right: compass box. "NW" is printed twice on the heading tape.]

### [storm_shadow_interior_blackbox_hint.png](./storm_shadow_interior_blackbox_hint.png)

```text
[No readable text.]
Wall map / chart board, top left: [illegible]
Pinned board, right: [illegible]
```

[Dark, wrecked room in a damaged building with a broken outer wall, a tower on a hill visible outside. Desk with chair and monitors, wall boards, crates and rubble on a wet floor. In the bottom-right corner an open crate holds a black device with an antenna and a smaller box with orange tape. No hint text is printed in the image.]

### [comms_device_product.png](./comms_device_product.png)

```text
Plate above the lens:          [illegible]
Plate below the lens, line 1:  [illegible]
Plate below the lens, line 2:  [illegible]
Tablet screen labels:          [illegible]
```

[Product photo on a grey background: a large lens unit inside a tan cage frame on a tripod, with three round lenses (red, blue, clear) at the right, a green strip, a yellow warning triangle, two antennas, cables and tape. A rugged tablet is mounted on the tripod below, with a green radio and a battery pack strapped beside it.]

### [comms_device_blueprint.png](./comms_device_blueprint.png)

```text
Column numbers, top and bottom: 1  2  3  4  5  6  7  8
Row letters, left:  A  F  C  D  E  A
Row letters, right: A  B  C  D  E

Front view:   230 / 500 / 1120 / Ø760
Side view:    180 / 500 / 85 / 95
Top view:     230 / 180
Tripod (folded): 420

Parts list table: [illegible]
Title block:      [illegible]
```

[Blueprint of the same device. Front, side, rear and top views with dimensions, a view from below, the folded tripod, and an exploded view with screws at the bottom left. The parts list and title block at the bottom right are faded and can't be read.]

### [decoded_blackbox_message.txt](./decoded_blackbox_message.txt)

```text
[DECODED BLACKBOX MESSAGE]
OSIRIS field cache. Recovered from the Storm Shadow ruins.

Contact: Herald Hoofman.
Status: not a defector. Awaiting a line.
Opportunity to infiltrate — window is narrow.
Key: 47-19-88-05-63

[END OF MESSAGE]
```

The key may be unique to each playthrough.
