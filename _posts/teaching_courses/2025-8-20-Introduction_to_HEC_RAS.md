---
title: "Hydraulic Modelling using HEC-RAS Introductory Class"
collection: teaching
type: "Graduate course"
permalink: /teaching/courses/2024-hydrology-teaching-intro_HEC-RAS
venue: "Tribhuvan University, College of Applied Sciences-Nepal , Hydrology Department"
date: 2024-12-09
categories: teaching_courses teaching
location: "Kathmandu, Nepal"

---

HEC-RAS (Hydrologic Engineering Center's River Analysis System) is a powerful modeling software developed by the U.S. Army Corps of Engineers. It is widely used for simulating water flow in natural and constructed channels, performing floodplain mapping, and analyzing hydraulic structures. With its capabilities to model steady and unsteady flow, sediment transport, and water quality, HEC-RAS supports comprehensive river system analysis and decision-making for flood risk management, infrastructure design, and environmental conservation.

## Hydraulic Modeling with HEC-RAS: A Comprehensive Overview

When embarking on the journey of modeling hydraulic systems using HEC-RAS (Hydrologic Engineering Centers River Analysis System), it's crucial to understand that the scope of their model must extend beyond the immediate area of interest. Here's an in-depth look at how to effectively model a river system:

### **Understanding the Broader Context**

- River Reach Inclusion: To accurately model a hydraulic system, you must include not only the segment under study but also the river reaches both upstream and downstream. This is because hydraulic conditions in these areas directly influence the dynamics within your study area.
- Water Surface Profiles: HEC-RAS calculates water surface profiles by solving the Energy Equation from one cross-section to the next.
- Energy Equation: The primary equation used here assumes uniform flow and integrates Manning's equation for velocity determination.  

#### **Cross-Sectional Analysis**

- Orientation and Placement: Cross-sections should be:
- Perpendicular: Oriented perpendicular to the flow direction, ensuring accurate representation of the channel, overbanks, and flow paths.
- Frequent Enough: Placed closely enough to capture all significant changes in the floodplain, which includes:
- Floodplain Width: The broader the floodplain, the more cross-sections might be needed to model it accurately.
- Roughness of Channel Bed: This affects flow velocity and energy loss, necessitating detailed consideration in each section.
- Slope: Influences water flow and must be accurately represented.
- Hydraulic Structures: Additional cross-sections are essential at points where hydraulic structures like bridges, weirs, or dams are present because these structures significantly alter flow characteristics:
- Conveyance: Proper placement here ensures the model accounts for changes in water conveyance, critical for flood modeling or river restoration projects.

#### **Computational Flow**

- Directionality: HEC-RAS computations are performed in the positive flow direction, meaning from upstream to downstream. This is not just a computational convention but also mirrors how data should be input into the software:
- User Input: When defining the river reach, you'll draw from the upstream end to the downstream end, which aligns with natural water flow.
- Modeling Capabilities: HEC-RAS is versatile, capable of handling:
- Simple Systems: Like a single uniform channel.
- Complex Systems: Including multiple branches, confluences, and varied hydraulic structures.

## **Downloads**

[Balkhu Terrain File (*.tif*)📥](/files/clip_balkhu111.tif)  
[projection for Balkhu(*.prj*)📥](/files/Balkhu_Boundary.prj)
