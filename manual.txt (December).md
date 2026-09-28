## MANUAL

### DEVICE OPERATING MODES

#### General Provisions on Device States

The device can be in only one state at any given moment.
In total, the device supports five operating states.
Each state has a defined set of conditions required for its activation.

If the conditions for transitioning to a state are not met, the device remains in its current state.

An incorrect attempt to transition into a state may result in unstable device behavior.

#### OFF State

The OFF state represents a complete power shutdown of the device.

In the OFF state:
- the device does not respond to commands;
- no indicators are active;
- service procedures are unavailable.

#### Reasons for Transitioning to the OFF State

The device may be in the OFF state for the following reasons:
- power supply issues;
- intentional shutdown using the POWER button.

Some device parameters may retain their values after power is disconnected.

#### STANDBY State

The standby mode of the device.

STANDBY is the initial state after the device is powered on.

In the STANDBY state:
- the device is powered on;
- no active operations are performed;
- transitions to other states are possible if the required conditions are met.

#### Reasons for Transitioning to the STANDBY State

The device transitions to the STANDBY state in the following cases:
- the device has just been powered on.

#### SERVICE State

The device fault-handling state.

The SERVICE mode is used to work with diagnostic errors and unstable device states.

#### General Conditions for Using SERVICE

Transition to the SERVICE state is possible only from standby mode.
The device must be in the STANDBY state.

An attempt to enter SERVICE from any other state does not result in a mode change.

## SERVICE — Procedures for Firmware Version V 1.12.03

#### Preconditions Before Initialization

Before performing service procedures, the current state of synchronization and protective circuits must be determined.

#### FILTER Handling Rules

- If the synchronization level is below 20%, filtering must be disabled.
- If the synchronization level is 20% or higher, filtering must be enabled.

#### SHIELD Handling Rules

- If the lock indicator is active (LOCK lamp is lit), shielding must be disabled.

#### Operating Frequency Selection Rules (FREQ)

- If no error is displayed in the E-CODE field, the operating frequency must be set to **A**.
- If an error is displayed in the E-CODE field, the operating frequency must be set to **B**.
- If an error is displayed in the E-CODE field and filtering is active, the operating frequency must be set to **C**.

Incorrect selection of the operating frequency may result in a critical device error.

## SERVICE — Procedures for Firmware Version V1.01.03

#### Preconditions Before Initialization

Before performing service procedures, the current state of synchronization and protective circuits must be determined.

#### FILTER Handling Rules

- If the synchronization level is below 40% or above 80%, filtering must be enabled.
- If the synchronization level is within the range of 40% to 80%, filtering must be disabled.

#### SHIELD Handling Rules

- If an error is displayed in the E-CODE field, shielding must be enabled.

#### Operating Frequency Selection Rules (FREQ)

- If both filtering and shielding are disabled, the operating frequency must be set to **A**.
- If the lock indicator is active (LOCK lamp is lit), the operating frequency must be set to **B**.
- If both filtering and shielding are enabled, the operating frequency must be set to **C**.

## SERVICE — Procedures for Firmware Version V1.21.03

#### Preconditions Before Initialization

Before performing service procedures, the current synchronization level, lock status, and active error codes must be determined simultaneously.

#### FILTER Handling Rules

- If the LOCK indicator is active and an error is displayed in the E-CODE field, filtering must be disabled.
- If the LOCK indicator is active and no error is displayed in the E-CODE field, filtering must be enabled.
- If the LOCK indicator is not active and synchronization is below 50%, filtering must be enabled.
- If the LOCK indicator is not active and synchronization is 50% or higher, filtering must be disabled.

#### SHIELD Handling Rules

- If filtering is enabled and synchronization is below 30%, shielding must be disabled.
- If filtering is enabled and synchronization is 30% or higher, shielding must be enabled.
- If filtering is disabled, shielding must always be enabled.

#### Operating Frequency Selection Rules (FREQ)

- If shielding is disabled, the operating frequency must be set to **A**.
- If shielding is enabled and filtering is disabled, the operating frequency must be set to **B**.
- If both shielding and filtering are enabled and an error is displayed in the E-CODE field, the operating frequency must be set to **C**.
- If both shielding and filtering are enabled and no error is displayed in the E-CODE field, the operating frequency must be set to **A**.

Incorrect selection of the operating frequency may result in a critical device error.

## CALIBRATION State

The device calibration mode.

CALIBRATION is used to increase the synchronization level and prepare the device for read operations.

CALIBRATION is not intended for troubleshooting device faults.

#### General Conditions for Using CALIBRATION

CALIBRATION must not be used when an active diagnostic error code is present.

An attempt to perform calibration while diagnostics are incomplete may result in device lock.

#### Conditions for Transitioning to CALIBRATION

To transition the device into CALIBRATION mode, a special initialization procedure must be performed.

#### Stabilization Circuit Configuration

Before initializing CALIBRATION mode, the device must be configured according to the handling rules for **your device version**.

FILTER and SHIELD must remain in the states required by the corresponding firmware handling rules.

#### Operating Frequency

CALIBRATION is initialized at the base operating frequency.

To initialize CALIBRATION mode, the operating frequency must be set to **A**.

Using alternative frequencies does not result in entering CALIBRATION mode.

#### Power Supply and Service Command

Initialization of CALIBRATION mode is performed during a power state change.
- Disconnect power from the device.
- Hold the SERVICE button.
- Restore power to the device while continuing to hold SERVICE.

## READ State

The data reading mode.

In READ mode, the device performs a data carrier read operation.

#### Purpose of READ Mode

READ is used to retrieve data after all preparatory procedures have been completed.

READ is not used for diagnostics, maintenance, or calibration.

#### READ Applicability

READ mode is available only when the device is ready for reading.

Device readiness is determined by the current state of its parameters.

## Synchronization Increase Principle (SYNC)

Increasing the synchronization level is performed only when the device is in a functional state.

#### Applicability Conditions

SYNC increase is permitted only if **all** of the following conditions are met:
- there are no active diagnostic errors on the device;
- the lock indicator (LOCK lamp) is not active;
- the device is set to **CALIBRATION** mode.

If any of these conditions is not met, the synchronization procedure does not start.

#### Device Behavior in CALIBRATION Mode

In **CALIBRATION** mode, the device displays status words in the **STATUS** field.

Each displayed word corresponds to a single control code.

#### Synchronization Control Codes

To continue the synchronization procedure, the corresponding code must be entered via the device's numeric input block.

Entering an incorrect code results in a critical device error.

## Device Errors

#### Error Types

During operation, the device may register different types of errors.

##### Diagnostic Errors (E-CODE)

These errors are displayed on the device screen and are used for navigation through service procedures.

##### Critical Device Errors

Critical errors are not displayed as E-CODEs and result in a reset or a complete lock of the device operation.

Critical errors cannot be resolved using standard service procedures.

#### Error E-14

Error E-14 indicates an initialization fault in the primary read channel.

The error prevents transition to operational modes until resolved.

#### Procedure Applicability

Procedures for error E-14 are performed **only in SERVICE mode**.

#### Device Preparation

Before executing the service sequence, the device must be configured according to the handling rules for **your device version**.

#### Service Sequence Selection

Before entering the service sequence, determine the current state of the LOCK indicator, the synchronization level, and the value displayed in the STATUS field.

##### If the LOCK indicator is active:
- If SYNC is below **20%**, enter **47**, then hold the SERVICE button until the device responds.
- If SYNC is between **20% and 49%**, enter **74**, then hold the SERVICE button until the device responds.
- If SYNC is **50% or higher**, enter **41**, then press the SERVICE button once.

##### If the LOCK indicator is not active:
- If STATUS displays **SERVICE REQUIRED**, enter **14**, then hold the SERVICE button until the device responds.
- If STATUS displays **ERROR**, enter **71**, then press the SERVICE button once.
- If none of the above conditions are met, enter **44**, then hold the SERVICE button until the device responds.

#### Error E-27

E-27 is a global device error.

This error indicates that continued operation is not possible without service intervention.

#### Procedure Applicability

Procedures for error E-27 are performed **only in SERVICE mode**.

#### Device Configuration Before the Procedure

Before executing the service sequence, the current state of the device must be determined.

#### Operating Frequency (FREQ)

- If the device is experiencing power supply issues, the operating frequency must be set to **B**.
- If the lock indicator is active (LOCK lamp is lit), the operating frequency must be set to **A**.

#### Signal Filtering (FILTER)

- If the operating frequency is set to **B**, filtering must be disabled.
- In all other cases, filtering must be enabled.

#### Service Sequence

After completing the preliminary configuration, a service sequence is executed via the device's numeric input block.

#### Sequence Selection

- If the device version is **V 1.0**, enter code **333**.
- If the device version is **higher**, and the **STATUS** field displays **CRITICAL ERROR**, enter code **777**.
- In all other cases, use code **555**.

#### Device Behavior After Input

After the service sequence is entered, the device re-evaluates its state.

The following outcomes are possible:
- error E-27 persists;
- error E-27 changes;
- error E-27 is resolved.

#### Error E-33

Error E-33 indicates a sector alignment fault.

The error occurs as a result of a previous service procedure and cannot appear independently.

#### Procedure Applicability

Procedures for error E-33 are performed **only in SERVICE mode**.

#### Device Preparation

Before executing the service sequence, the device must be configured according to the handling rules for **your device version**.

After configuration is complete, power to the device must be disconnected.

#### Service Sequence Selection

The service sequence is determined by the diagnostic error that was active immediately before E-33 appeared.
- If E-33 appeared after an **E-14** procedure, enter **6614**.
- If E-33 appeared after an **E-27** procedure, enter **6146**.
- If E-33 appeared after an **E-41** procedure, enter **1466**.
- If E-33 appeared after an **E-52** procedure, enter **4166**.
- If E-33 appeared after an **E-71** procedure, enter **6641**.
- If the previous diagnostic error cannot be determined, enter **1664**.

The selected sequence must be entered while the device is powered off.

After entering the sequence, restore power to the device.

#### Error E-41

Error E-41 indicates a malfunction of the device's reading unit.

The error may occur independently or as a result of previous service procedures.

#### Basic E-41 Resolution Procedure

The basic procedure is applied when the error occurs for the first time.

#### Stabilization Circuit Configuration

To perform the basic procedure, both stabilization circuits must be active.
- Signal filtering must be enabled.
- Signal shielding must be enabled.

#### Service Sequence

The service sequence is performed while the device is powered off.

To execute the procedure, a service code must be entered via the device's numeric input block.

The code **18456** is used.

After entering the service sequence, power must be restored to the device.

#### Alternative Configuration

If error E-41 appears after another service procedure, an alternative configuration is applied.

#### Stabilization Circuit Configuration

Before performing the procedure, filtering and shielding must be disabled.

#### Service Sequence

The service sequence is performed with the device powered off.

The code **17090** is used.

After entering the sequence, power must be restored.

#### Recovery Procedure for Zero Synchronization

If the device synchronization level is **0**, and the error occurred after another error, a separate recovery procedure is used.

#### Stabilization Circuit Configuration

Before performing the procedure, filtering and shielding must be disabled.

#### Service Sequence

The service sequence is performed with the device powered off.

The code **99235** is used.

After entering the sequence, power must be restored.

#### Device Behavior After the Procedure

After completing any of the procedures, the device re-evaluates the state of the reading unit.

The following outcomes are possible:
- error E-41 is resolved;
- the device transitions to another diagnostic state.

#### Error E-52

Error E-52 indicates an incorrect device configuration for the current data carrier.

The error occurs when the read parameters do not match the disk characteristics.

#### Procedure Applicability

Procedures for error E-52 are performed **only in SERVICE mode**.

Any attempt to resolve the error outside of SERVICE mode will result in critical device errors.

#### Device Preparation

Before starting the procedure, the device must be returned to its initial configuration.
- Signal filtering must be disabled.
- The operating frequency must be set to **C**.

#### Procedure Initialization

After completing the preliminary configuration, a start command is entered via the device's numeric input block.

The value **2** is used.

After input, the device begins responding to commands via indicator signals.

Further actions are determined by indicator behavior and the history of previous inputs.

#### Indicator-Based Input Rules

##### If the lock indicator flashes once, apply the following rules:
- if the previous input was **7**, enter **3**;
- if the flash occurred after a **POWER lamp** flash, enter **2**;
- if none of the above conditions are met, enter **5**.

##### If the lock indicator flashes twice, apply the following rules:
- if the previous input was **3**, enter **3**;
- if the flash occurred after a **POWER lamp** flash, enter **7**;
- if none of the above conditions are met, enter **6**.

##### If the power indicator flashes once, apply the following rules:
- if the lock indicator previously flashed once, enter **5**;
- if the **STATUS** screen displays **ERROR**, enter **9**;
- if none of the above conditions are met, enter **5**.

##### If the power indicator flashes twice, apply the following rules:
- if the lock indicator previously flashed once, enter **8**;
- if the **STATUS** screen displays **SERVICE REQUIRED**, enter **2**;
- if none of the above conditions are met, enter **3**.

If the device produces no visual signals after command input, enter **1**.

#### Error E-71

Error E-71 indicates a carrier frequency mismatch detected during calibration.

The error occurs automatically when SYNC reaches a specific threshold.

#### Procedure Applicability

Procedures for error E-71 are performed **only in SERVICE mode**.

#### Device Preparation

Before starting the procedure, the device must be configured according to the handling rules for **your device version**.

#### Procedure Initialization

After completing the preliminary configuration, a start command is entered via the device's numeric input block.

The value **3** is used.

After input, the device begins responding to commands via indicator signals.

Further actions are determined by:
- the active indicator;
- the number of flashes;
- the previous input;
- the history of previous indicator signals;
- the current value displayed in the STATUS field.

#### Indicator-Based Input Rules

##### If the LOCK indicator flashes once:
- If the previous input was **7**, enter **3**.
- If the LOCK signal occurred immediately after a POWER indicator signal, enter **2**.
- If none of the above conditions are met, enter **8**.

##### If the LOCK indicator flashes twice:
- If the previous input was **8**, enter **6**.
- If the previous input was **4**, enter **3**.
- If the previous visual signal was produced by the POWER indicator, enter **7**.
- If STATUS displays **SERVICE REQUIRED**, enter **5**.
- If none of the above conditions are met, enter **6**.

##### If the LOCK indicator flashes three times:
- If the previous input was **7**, enter **6**.
- If STATUS displays **ERROR**, enter **5**.
- If none of the above conditions are met, enter **1**.

##### If the POWER indicator flashes once:
- If the LOCK indicator previously flashed once during the current procedure, enter **2**.
- If the previous input was **1**, enter **4**.
- If STATUS displays **ERROR**, enter **6**.
- If none of the above conditions are met, enter **4**.

##### If the POWER indicator flashes twice:
- If the previous input was **8**, enter **7**.
- If the LOCK indicator previously flashed twice, enter **3**.
- If STATUS displays **SERVICE REQUIRED**, enter **2**.
- If none of the above conditions are met, enter **7**.

##### If the POWER indicator flashes three times:
- If the previous input was **2**, enter **5**.
- If the previous input was **6**, enter **8**.
- If the LOCK indicator previously flashed three times, enter **4**.
- If STATUS displays **ERROR**, enter **7**.
- If none of the above conditions are met, enter **3**.

##### If the device produces no visual signal after command input:
- If the previous input was **9**, the procedure is complete.
- In all other cases, enter **9**.

#### Error E-88

Error E-88 indicates a read buffer overflow condition.

The error occurs during the second calibration cycle when SYNC reaches a specific threshold.

#### Procedure Applicability

Procedures for error E-88 are performed **only in SERVICE mode**.

#### Device Preparation

Before selecting the recovery procedure, the device must be configured according to the handling rules for **your device version**.

Both stabilization circuits must then be disabled:
- FILTER — **OFF**
- SHIELD — **OFF**

If both circuits are already disabled, no additional switching is required.

With shielding disabled, the operating frequency must be set to **A**.

After the initial circuit state has been established, select the recovery configuration according to the current LOCK state, synchronization level, and STATUS value where applicable.

#### Recovery Configuration Selection

##### If the LOCK indicator is active

###### If SYNC is 80% or higher:
- FILTER must remain **OFF**.
- SHIELD must be enabled.
- FREQ must be set to **B**.
- Enter **391**.

###### If SYNC is between 60% and 79%:
- FILTER must remain **OFF**.
- SHIELD must be enabled.
- FREQ must be set to **B**.
- Enter **193**.

###### If SYNC is between 30% and 59%:

If STATUS displays **SERVICE REQUIRED**:
- FILTER must be enabled.
- SHIELD must be enabled.
- FREQ must be set to **C**.
- Enter **913**.

If STATUS displays any other value:
- FILTER must remain **OFF**.
- SHIELD must be enabled.
- FREQ must be set to **B**.
- Enter **319**.

###### If SYNC is below 30%:
- FILTER must be enabled.
- SHIELD must remain **OFF**.
- FREQ must be set to **A**.
- Enter **931**.

##### If the LOCK indicator is not active

###### If SYNC is 80% or higher:

If STATUS displays **ERROR**:
- FILTER must be enabled.
- SHIELD must be enabled.
- FREQ must be set to **C**.
- Enter **139**.

If STATUS does not display ERROR:
- FILTER must remain **OFF**.
- SHIELD must be enabled.
- FREQ must be set to **B**.
- Enter **319**.

###### If SYNC is between 50% and 79%:
- FILTER must remain **OFF**.
- SHIELD must be enabled.
- FREQ must be set to **B**.
- Enter **193**.

###### If SYNC is between 30% and 49%:
- FILTER must be enabled.
- SHIELD must be enabled.
- FREQ must be set to **C**.
- Enter **139**.

###### If SYNC is below 30%:

If STATUS displays **SERVICE REQUIRED**:
- FILTER must be enabled.
- SHIELD must remain **OFF**.
- FREQ must be set to **A**.
- Enter **931**.

If STATUS displays any other value:
- FILTER must remain **OFF**.
- SHIELD must remain **OFF**.
- FREQ must remain set to **A**.
- Enter **913**.

#### Service Sequence

The selected service sequence is performed while the device is powered on.

Only the code corresponding to the current recovery configuration must be entered.

## CALIBRATION Status Word Reference

Each status word is used **only** in **CALIBRATION** mode.

Each status word corresponds to a **unique numeric code**.

| STATUS | CODE |
| :--- | :--- |
| CORE | 11 |
| NODE | 18 |
| PATH | 32 |
| LINK | 9 |
| DRIFT | 53 |
| TRACE | 41 |
| SYNC | 24 |
| HOLD | 5 |
| TOOL | 27 |
| FLOW | 36 |
| GAIN | 13 |
| READ | 26 |
| CLONE | 37 |
| SEEK | 39 |
| BURN | 18 |
| LOCK | 2 |
| GRID | 17 |
| WAVE | 44 |
| LOOP | 6 |
| MODE | 30 |
| DATA | 8 |
| PING | 46 |
| ERROR | 21 |
| PULL | 29 |
| FLAG | 12 |
| STEP | 33 |
| CHECK | 19 |
| ALIGN | 48 |
| LEAD | 44 |
| SIGNAL | 25 |
| PHASE | 34 |
| RESET | 10 |
| ROUTE | 42 |
| INDEX | 15 |
| VERIFY | 49 |
| INPUT | 22 |
| OUTPUT | 28 |
| FALSE | 14 |
| BUFFER | 37 |
| ACTIVE | 16 |
| PASS | 4 |
| FAIL | 31 |
| LIMIT | 20 |
| VOID | 62 |
| OFFSET | 40 |
| STREAM | 35 |
| BOUND | 23 |
| MARK | 1 |
| SWITCH | 45 |
| READY | 29 |
| DELTA | 38 |
| FINAL | 3 |
| END | 7 |