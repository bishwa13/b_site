---
title: "FLOOD FREQUENCY ANALYSIS USING GUMBEL’S DISTRIBUTION METHOD"
collection: teaching
type: "Graduate course"
permalink: /teaching/courses/2024-Gumbel_equation_for_flood_frequency_analysis
venue: "Tribhuvan University, College of Applied Sciences-Nepal , Hydrology Department"
date: 2024-12-09
location: "Kathmandu, Nepal"
categories: teaching_courses teaching
---


The Gumbel distribution, also referred to as the type-I generalized extreme value (GEV) distribution, is a statistical distribution widely used in hydrology, meteorology, and risk analysis. It models the probability of extreme events by focusing on the maximum (or minimum) values drawn from a set of observations or samples. These events often represent rare occurrences such as extreme rainfall, floods, heatwaves, or high winds.

The Gumbel distribution is particularly suitable for analyzing extreme values because it emphasizes the tail behavior of data, making it valuable for predicting the likelihood of events beyond the observed range. It is characterized by its cumulative distribution function (CDF) and probability density function (PDF), which describe the probability of extremes occurring within a given range.

In applications:

Maximum values are commonly studied for phenomena like peak discharge in river systems or maximum daily rainfall.
Minimum values can also be analyzed, for instance, in cases like drought conditions or minimum temperatures.
This distribution plays a critical role in risk management and design standards, such as determining the capacity of dams or the flood resilience of urban infrastructure.

## Equations for Gumbel Distribution

- **Probability Formula**:  
   $$P = \frac{m}{N + 1}$$  
   Where:

  - \( m \): order number of the event  
  - \( N \): total number of events in the data  

- **Recurrence Interval**:  
   $$T = \frac{1}{P}$$  

### Maximum Series

$$M_n = max{X1, X2, ..., Xn}$$

### Gumbel Equation

$$X_T = \bar{x} + K * \cdot \sigma_{n-1}$$

Where:

- $$\sigma_{n-1}$$: standard deviation of a sample of size $$N$$, calculated as:  
     $$\sigma_{n-1} = \sqrt{\frac{\sum (x - \bar{x})^2}{N - 1}}$$
- K = frequency factor  
  $$K = \frac{Y_T - \bar{Y}_n}{S_n}$$

Where:

- $$Y_T$$: reduced variate, a function of $$T$$, given by:

     $$Y_T = -\ln(-\ln(\frac{T}{T - 1}))$$  
     or  
     $$Y_T = -[0.834 + 2.303 \log(\log(\frac{T}{T - 1}))]$$

>Note:
>log typically refers to the base 10 logarithm, also known as the common logarithm. ln stands for the natural logarithm, which is the logarithm with base e (Euler's number, approximately 2.71828). $$\log(x) = \frac{\ln(x)}{\ln(10)}$$

- $$\bar{Y}_n$$: reduced mean, a function of sample size $$N$$
- $$S_n$$: reduced standard deviation, a function of sample size $$N$$

### Yn and Sn in Gumbel's Extreme Value Distribution

![Yn and Sn in Gumbel's Extreme Value Distribution](https://workbishwa.github.io/imBishwa/images/Yn_Sn_value_for_gumbel_distribution.png)

[View Template excel sheet for Gumbel calculation in Google Docs](/files/gumbel_calculation_template.xlsx)

[Download Template excel sheet for Gumbel calculation](/gumbel_calculation_template.xlsx)
