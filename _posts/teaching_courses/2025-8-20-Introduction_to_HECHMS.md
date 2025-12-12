---
title: "Hydrological Modelling using HEC-HMS Introductory Class"
collection: teaching
type: "Graduate course"
permalink: /teaching/courses/2024-hydrology-teaching-intro_HEC
venue: "Tribhuvan University, College of Applied Sciences-Nepal , Hydrology Department"
date: 2024-12-03
categories: teaching_courses teaching
location: "Kathmandu, Nepal"

---

HEC-HMS consists of several integral components that collectively enable comprehensive modeling and analysis:

- **Basin Model Manager** Manages the physical representation of the watershed, including sub-basins, river reaches, and reservoirs, to define the spatial structure of the system.
- **Meteorological Model Manager** Facilitates the input of meteorological data, such as rainfall or temperature, for simulating weather events affecting the hydrological processes.
- **Control Specification Manager** Sets the simulation parameters, including the start and end times, time intervals, and other temporal controls for running the model.
- **Time Series Data Manager** Handles temporal data inputs such as rainfall, streamflow, or evaporation, which are critical for dynamic simulations.
- **Paired Data Manager** Stores and manages relationships between two variables, such as elevation vs. storage or discharge vs. stage, which are used in simulations.
- **Grid Data Manager** Supports the management of spatially distributed data such as precipitation grids, allowing for more detailed spatial modeling.
- **Terrain Data Manager** Utilizes terrain data (e.g., DEMs - Digital Elevation Models) to derive watershed features such as flow paths, slopes, and boundaries.

### **Basin Model Manager**

**Basin Model Manager** is a core component of HEC-HMS that deals with the physical representation of the watershed or catchment. It provides tools to define and configure the elements of a basin, including sub-basins, junctions, reaches, reservoirs, and sinks. These elements are interconnected to model the movement of water through the system, simulating how precipitation is transformed into runoff and routed through the network.

### Key Features of the Basin Model Manager

1. **Sub-basins**:  
    Represent smaller hydrological units within the larger basin. These are the primary areas where rainfall is transformed into runoff, based on specified hydrological parameters.

2. **Junctions**:  
    Points where two or more flow paths converge, allowing for the combination and routing of flow from different sub-basins or upstream elements.

3. **Reaches**:  
    Represent sections of rivers or streams where water is routed downstream, accounting for channel properties and hydraulic behavior.

4. **Sinks**:  
    Terminal points in the basin where water exits the system, such as lakes or groundwater recharge zones.

---

### Configurable Parameters in Basin Model Manager

The Basin Model Manager supports various methods to simulate different hydrological processes, each of which requires specific parameters to be configured:

- **Discretization Method**:  
    Defines how the basin is subdivided into smaller computational units for more detailed and accurate simulations.

- **Canopy Method**:  
    Models the interception and storage of rainfall by vegetation canopies, impacting the water available for runoff.

- **Snow Method**:  
    Accounts for snow accumulation and melting, critical in basins with significant snowfall.

- **Surface Method**:  
    Simulates the surface runoff process, including overland flow and shallow subsurface flow dynamics.

- **Loss Method**:  
    Represents the portion of rainfall that is lost to infiltration, evaporation, or other processes before contributing to runoff. Common loss methods include:

  - SCS Curve Number
  - Initial and Constant Rate
  - Green-Ampt Infiltration

- **Transform Method**:  
    Converts excess precipitation (after losses) into direct runoff. This is typically achieved using methods such as:

  - SCS Unit Hydrograph
  - Clark Unit Hydrograph
  - ModClark Method
- **Base Flow Method**:  
    Models the subsurface contribution to streamflow, accounting for slower, sustained flow from groundwater. Methods include:

  - Linear Reservoir
  - Exponential Decay

---

### Importance of Basin Model Manager

The **Basin Model Manager** is integral to the simulation process as it allows users to construct a detailed and realistic representation of the hydrological system. By configuring these parameters, users can model a wide range of scenarios, from natural flood events to the impact of land-use changes, providing critical insights for effective water resource management and planning.

### Meteorological Model Manager

The **Meteorological Model Manager** is a vital component of HEC-HMS designed to integrate and manage meteorological data required for hydrological simulations. This module facilitates the input of weather-related data, such as rainfall, temperature, and evapotranspiration, which are essential for modeling and analyzing weather events' impact on hydrological processes.

### Key Features of Meteorological Model Manager

1. **Input Flexibility**:  
    The manager supports various types of meteorological data input, allowing users to customize the model based on available data and the specific needs of the project.

2. **Data Sources**:

    - **Point Data**: Single-location measurements, such as rain gauges and weather stations.
    - **Gridded Data**: Distributed datasets from remote sensing or numerical weather models, providing spatially varied meteorological information.
3. **Temporal Resolution**:  
    Supports various time intervals, from sub-hourly to daily or longer periods, depending on the type of simulation and the meteorological data available.

---

### Supported Meteorological Models

The Meteorological Model Manager provides several pre-configured models to suit different simulation scenarios:

- **Precipitation-Only Model**:

  - Simplifies analysis by considering only rainfall events.
  - Useful for scenarios where rainfall is the dominant meteorological factor influencing hydrology.

- **Evapotranspiration Models**:

  - Includes methods to compute potential and actual evapotranspiration.
  - Supports standard methods like Priestly-Taylor, Penman-Monteith, or Hargreaves-Samani equations.

- **Temperature Index Snowmelt Model**:

  - Used in basins where snowmelt significantly affects runoff.
  - Simulates snow accumulation and melt processes based on temperature thresholds.

- **Gridded Meteorological Data Models**:

  - Allows spatially distributed meteorological data to be used for more detailed and regionally accurate simulations.
- **Frequency-Based Storm Models**:

  - Simulates design storms based on specific return periods or storm intensity-duration-frequency curves.

---

### Components of Meteorological Model Manager

1. **Precipitation Input**:

    - Inputs rainfall data in various formats, such as time series, frequency-based storm data, or gridded datasets.

2. **Temperature Input**:

    - Provides temperature data for snowmelt models and other temperature-sensitive hydrological processes.

3. **Evapotranspiration Input**:

    - Simulates water loss due to evaporation and plant transpiration.

4. **Meteorological Grid Input**:

    - Enables users to input and process spatially distributed datasets for precipitation or temperature, often derived from satellite or model data.

---

### Importance of Meteorological Model Manager

The **Meteorological Model Manager** plays a critical role in hydrological modeling, enabling users to simulate the impact of various meteorological events on a watershed. By providing flexible options for data input and advanced models for processing, it ensures accurate representation of weather-driven hydrological phenomena. This capability is particularly valuable for:

- Flood forecasting and management.
- Design and analysis of water resource systems.
- Understanding the impact of extreme weather events under changing climatic conditions.

### Control Specification Manager

The **Control Specification Manager** is an essential part of the HEC-HMS (Hydrologic Engineering Center's Hydrologic Modeling System) that allows users to set and manage the simulation parameters that control how the model is executed. This component ensures that all aspects of the simulation, such as timing, intervals, and duration, are correctly defined before running the model.

### Key Features and Functionality

1. **Time Control Settings**:  
    The Control Specification Manager lets users define the simulation start and end times, which are essential for controlling the time span of the hydrological model run. These settings ensure that the model simulates the hydrological behavior within a specific time frame, either for historical analysis or future projections.

2. **Time Step and Interval Definition**:

    - The manager allows users to define time intervals (or time steps) at which the model will update the state of the system.
    - The user can choose the temporal resolution for data inputs and outputs, such as hourly, daily, or sub-hourly intervals. This flexibility allows the model to handle various types of data and scenarios.
3. **Temporal Resolution**:

    - **Fixed time step**: Allows consistent intervals throughout the simulation.
    - **Variable time step**: Adjusts the time step dynamically based on simulation needs or input data characteristics.
4. **Event and Time-based Control**:  
    Users can specify the type of simulation to run, whether it’s for a single event (e.g., a flood event) or for long-term hydrological analysis (e.g., monthly or annual simulations). This is useful for studying both short-term events and long-term trends.

5. **Hydrological Model Integration**:  
    This manager ensures that the time control settings align with the other components of the HEC-HMS model, like the meteorological and basin models, ensuring synchronized execution and accurate simulation results.

### Example Use Case

- **Flood Event Simulation**:  
    A flood simulation for a catchment might require specifying a short simulation period (e.g., 24 hours) with hourly time steps to closely track rainfall and runoff events. On the other hand, for monthly streamflow analysis, the time step could be set to a larger interval (e.g., monthly).

---

### Time Series Data Manager

The **Time Series Data Manager** is a critical component for handling dynamic, temporal input data in HEC-HMS. This manager allows users to manage and process the time series data essential for modeling hydrological events, such as rainfall, streamflow, evaporation, and other meteorological or hydrological variables. Since HEC-HMS uses temporal data to drive the hydrological model, this component is vital for accurate, dynamic simulations.

### Key Features and Functionality of Time Series Data Manager

1. **Handling Time-Based Data**:  
    The Time Series Data Manager enables users to input and manage various types of time series data:

    - **Precipitation Data**: Rainfall data over time is often the most crucial input for hydrological modeling, driving runoff generation.
    - **Streamflow Data**: Discharge data at specific intervals allows for streamflow routing and simulating the movement of water through the watershed.
    - **Evapotranspiration Data**: Data on evaporation and transpiration is important for simulating the loss of water from the system.
    - **Temperature Data**: Temperature data is necessary for modeling snowmelt or evapotranspiration.
2. **Data Import and Management**:  
    The manager supports importing time series data from various sources such as:

    - **CSV/Excel Files**: Standard formats for storing time series data.
    - **Observed Data**: Real-world measurements from stations or remote sensing data.
    - **Synthetic Data**: Generated or assumed data based on known climatic conditions or statistical models.
3. **Data Storage and Retrieval**:

    - The manager allows users to organize time series data by categorizing it based on station names, variable types, and time intervals.
    - Users can store and retrieve large datasets efficiently, ensuring that all necessary inputs are available for the model simulation.
4. **Data Interpolation and Transformation**:

    - **Interpolation**: The manager offers tools to interpolate missing or irregular data points (e.g., linear interpolation, spline interpolation), ensuring a continuous data set for simulation.
    - **Aggregation**: In cases where data is available at different intervals, the manager can aggregate or resample data (e.g., converting daily data into hourly data).
5. **Temporal Data Integration**:  
    The Time Series Data Manager integrates temporal data with other HEC-HMS components, ensuring that it’s used correctly in the simulation. For example, the manager can link precipitation data to the **Meteorological Model Manager** and streamflow data to the **Basin Model Manager**.

#### Example Use Case of Time Series Data Manager

- **Rainfall Data Integration**:  
    For simulating a flood event, the user would input hourly rainfall data over several days, which will be used by the model to calculate runoff using a loss method (e.g., SCS curve number). The Time Series Data Manager will ensure that the data is correctly formatted and synchronized with other model components.

---

### Paired Data Manager

The **Paired Data Manager** in HEC-HMS is responsible for managing relationships between two variables that are used in simulations. This manager allows users to store and organize paired data, ensuring that the relationship between variables, such as **elevation vs. storage** or **discharge vs. stage**, can be effectively incorporated into the hydrological model. The Paired Data Manager is particularly important when dealing with observational data that describes how two variables interact across a watershed or river system.

### Key Features and Functionality of Paired Data Manager

1. **Storage of Paired Variables**:

    - The Paired Data Manager stores data that consists of two related variables. For example:
        - **Elevation vs. Storage**: Storing how storage capacity in reservoirs or ponds changes with elevation.
        - **Discharge vs. Stage**: Storing the relationship between river stage (height) and discharge (flow), which is crucial for flood modeling.
2. **Data Structure**:

    - Paired data is typically stored in a tabular format, where each row represents an observation at a specific time or location. This data is then used to model relationships during simulations, making it possible to translate observed or derived relationships into model inputs.
3. **Data Interpolation**:

    - The manager supports the interpolation of data points to estimate values between known observations. For example, if stage-discharge data is available for certain river levels, interpolation can help estimate values for missing stages.
4. **Integration with Other Components**:

    - The Paired Data Manager works in conjunction with other HEC-HMS components, such as the Basin Model Manager and Time Series Data Manager, to ensure that paired data is incorporated correctly into the hydrological processes.

### Example Use Case of Paired Data Manager

- **Discharge-Stage Relationship**:  
    The manager might be used to store a river’s stage-discharge curve, which allows the model to calculate the river’s flow at any given stage during the simulation. This relationship helps simulate river flow and is vital for flood forecasting and floodplain management.

---

### Grid Data Manager

The **Grid Data Manager** in HEC-HMS is responsible for managing spatially distributed data, particularly data that is represented on a grid or raster format, such as **precipitation grids**. This manager allows users to incorporate spatial variability into the model, enabling more detailed and accurate modeling of hydrological processes across a watershed or catchment area.

### Key Features and Functionality of Grid Data Manager

1. **Spatial Data Management**:  
    The Grid Data Manager stores and processes spatially distributed data, such as rainfall, temperature, and soil moisture, in the form of grids. These grids divide the basin or catchment area into a uniform spatial resolution, allowing for more precise simulation of hydrological processes across the landscape.

2. **Precipitation Grids**:  
    The manager can handle gridded precipitation data, where precipitation is distributed spatially across the watershed. This data can be used for simulating rainfall-runoff processes in areas with variable precipitation patterns.

3. **Interpolation of Spatial Data**:

    - The Grid Data Manager allows interpolation of spatially distributed data to estimate values in areas where measurements are not available. For instance, if precipitation data is available for a few stations, the manager can interpolate this data across the entire watershed.
4. **Integration with Hydrological Models**:  
    Gridded data, such as rainfall grids, are integrated into the hydrological model. This allows for spatially explicit modeling of surface runoff, infiltration, and other hydrological processes, ensuring that the model reflects the variability in spatial data.

### Example Use Case Grid Data Manager

- **Gridded Precipitation Data**:  
    In a large watershed, the manager can be used to input high-resolution precipitation grids, which account for spatial variability in rainfall. These grids are then used to calculate runoff across different parts of the basin, leading to more accurate flood forecasts.

---

### Terrain Data Manager

The **Terrain Data Manager** in HEC-HMS is responsible for utilizing terrain data, such as **Digital Elevation Models (DEMs)**, to derive essential features of the watershed. These features include **flow paths**, **slopes**, **watershed boundaries**, and **drainage networks**. Terrain data is fundamental for defining the physical characteristics of the watershed that influence runoff, streamflow, and other hydrological processes.

### Key Features and Functionality of Terrain Data Manager

1. **Digital Elevation Models (DEMs)**:

    - The Terrain Data Manager uses DEMs to represent the elevation of the watershed surface. DEMs are typically raster-based data sets where each pixel value represents elevation at that location. These models are critical for deriving flow paths and understanding how water moves across the landscape.
2. **Watershed Delineation**:

    - The manager can identify watershed boundaries based on the terrain data. This is essential for determining the area that contributes to runoff and streamflow for a given outlet, such as a river or a reservoir.
3. **Flow Path Derivation**:

    - Using DEMs, the Terrain Data Manager can determine the flow direction and flow accumulation, identifying how water will travel across the landscape. This helps define drainage networks, areas of concentrated flow, and water storage areas in the basin.
4. **Slope Calculation**:

    - Slope is an important factor in hydrological modeling as it influences runoff velocity and infiltration rates. The Terrain Data Manager can calculate slope from DEMs, which is used to estimate runoff and predict flooding.
5. **Integration with Other Components**:

    - The Terrain Data Manager provides essential spatial data that is integrated into the Basin Model Manager, allowing for accurate representation of the watershed and its characteristics. This integration ensures that the terrain data is properly utilized in the hydrological simulation.

### Example Use Case of Terrain Data Manager

- **Flow Path Identification**:  
    The Terrain Data Manager can be used to derive flow paths for a river basin. By analyzing the DEM, the manager can identify the main channel and tributaries, allowing the model to simulate water movement accurately across the landscape.

---

Together, these managers provide critical data management tools in HEC-HMS, enhancing the accuracy and realism of hydrological modeling.

---

## HEC-HMS work flow

![HEC-HMS work flow](https://workbishwa.github.io/imBishwa/images/hec_hms_workflow.png)

---

## Balkhu Basin project (Example)

In this example, we will use HEC-HMS to analyze hydrological processes in the Balkhu Basin. The goal is to model runoff, precipitation, and streamflow, and apply methods such as the SCS Curve Number for losses and the SCS Unit Hydrograph for transforming runoff. Additionally, we will incorporate routing and time series data to simulate basin hydrology effectively.  
**Hydrology Practice Example: Balkhu Basin**

## **Subbasin Information**

| **Subbasin** | **Area (km²)** | **Lag Time (min)** | **Loss Method**  | **Transform Method**   | **Ia** | **CN** | **Impervious** | **Graph Type**     |
|--------------|----------------|--------------------|------------------|------------------------|--------|--------|----------------|--------------------|
| S1           | 6.825          | 50                 | SCS Curve Number | SCS Unit Hydrograph    | 10     | 80     | 0.0            | Standard PRF       |
| S2           | 5.8278         | 52                 | SCS Curve Number | SCS Unit Hydrograph    | 10     | 80     | 0.0            | Standard PRF       |
| S3           | 6.3668         | 55                 | SCS Curve Number | SCS Unit Hydrograph    | 10     | 80     | 0.0            | Standard PRF       |
| S4           | 17.603         | 60                 | SCS Curve Number | SCS Unit Hydrograph    | 10     | 80     | 0.0            | Standard PRF       |

---

## **Routing Information**

| **Route** | **Routing Method** | **Initial Type**      | **Lag (min)** |
|-----------|---------------------|-----------------------|---------------|
| R1        | Lag                 | Discharge = Inflow    | 70            |
| R2        | Lag                 | Discharge = Inflow    | 70            |

---

## **Specified Hyetograph**

| **Subbasin** | **Gage** | **Total Depth (mm)** |
|--------------|----------|-----------------------|
| S1           | Gage 1   | 109.2                |
| S2           | Gage 1   | 109.2                |
| S3           | Gage 1   | 109.2                |
| S4           | Gage 1   | 109.2                |

---

## **Time Series Data: Rainfall Events**

| **Time (ddMMMYYYY, HH:mm)** | **Precipitation (mm)** | **Time (ddMMMYYYY, HH:mm)** | **Precipitation (mm)** |
|-----------------------------|-------------------------|-----------------------------|-------------------------|
| 25Sep2011, 14:00           |                        | 26Sep2011, 00:00           | 0.4                     |
| 25Sep2011, 15:00           | 1.8                    | 26Sep2011, 01:00           | 1.2                     |
| 25Sep2011, 16:00           | 0.8                    | 26Sep2011, 02:00           | 2.4                     |
| 25Sep2011, 17:00           | 0.4                    | 26Sep2011, 03:00           | 2.0                     |
| 25Sep2011, 18:00           | 0.9                    | 26Sep2011, 04:00           | 10.0                    |
| 25Sep2011, 19:00           | 1.2                    | 26Sep2011, 05:00           | 7.0                     |
| 25Sep2011, 20:00           | 2.4                    | 26Sep2011, 06:00           | 8.4                     |
| 25Sep2011, 21:00           | 2.0                    | 26Sep2011, 07:00           | 44.0                    |
| 25Sep2011, 22:00           | 1.2                    | 26Sep2011, 08:00           | 7.6                     |
| 25Sep2011, 23:00           | 0.4                    | 26Sep2011, 09:00           | 3.4                     |
|                           |                         | 26Sep2011, 10:00           | 3.0                     |
|                           |                         | 26Sep2011, 11:00           | 6.2                     |
|                           |                         | 26Sep2011, 12:00           | 3.6                     |
|                           |                         | 26Sep2011, 13:00           | 2.4                     |
|                           |                         | 26Sep2011, 14:00           | 0.2                     |

---

## **Notes for Students**

1. Subbasins **S1 to S4** have similar hydrological parameters, ensuring easier modeling consistency.
2. Routing methods (R1 and R2) use **Lag Routing**, with an identical lag time of 70 minutes.
3. Specified hyetograph uses **Gage 1** for all subbasins, with a consistent total depth of 109.2 mm.
4. Rainfall events follow a uniform time series format; ensure accurate input for temporal rainfall analysis.

## **Downloads**

[Balkhu Terrain File (*.tif*)📥](/files/clip_balkhu111.tif)  
[projection_coordinate📥](/files/balkhu_coordinate.prj)
