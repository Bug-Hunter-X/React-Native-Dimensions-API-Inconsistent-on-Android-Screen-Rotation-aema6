# React Native Dimensions API Inconsistency on Android

This repository demonstrates a bug in React Native's `Dimensions` API, specifically related to inconsistent dimension reporting on Android after screen rotation. The issue occurs because the `Dimensions` API doesn't immediately update dimensions after a rotation event.  This leads to the application using stale dimensions, resulting in incorrect layout.

## Bug Reproduction

1. Clone this repository.
2. Run the app on an Android emulator or device.
3. Rotate the device screen.
4. Observe that the layout is incorrect, demonstrating the use of old dimensions.

## Solution

The solution utilizes the `Dimensions` API in combination with the `onLayout` event to ensure the dimensions are updated only after the layout has completed.