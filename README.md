<h1>Aircraft Radar Project</h1>

This project is a real-time aircraft tracking system designed to monitor air traffic and visualize live aircraft positions on a map. It's built using modern web technologies such as React and Redux, aiming to provide an impressive user experience. The Leaflet map library is utilized for map display, enabling dynamic tracking of aircraft.

<h2>Project Objectives</h2>

- Tracking and visualizing real-time aircraft positions.

- Providing users the ability to switch between map view and list view.

- Facilitating easy access to detailed information about aircraft.

<h2>Technologies Used</h2>

- React: Employed for building a modern and efficient user interface.
- Redux: Provides a centralized store for application state and data management.
- Leaflet: A lightweight and flexible mapping library used for creating interactive maps.
- @reduxjs/toolkit
- axios
- bootstrap
- react-leaflet

<h2>Main Components</h2>

1. ListView

This component lists the aircraft. It fetches flight data from the Redux store, implements pagination, and provides a detail button for each flight.

2. MapView

This component displays the aircraft on a map. It fetches flight data from the Redux store, places markers on the map for each aircraft, and draws flight paths.

3. App

This is the main component and the core structure of the application. It allows users to switch between map view and list view and updates flight data every 10 seconds.

<h2>Screenshot</h2>

![](/public/Radar.gif)
# Aircraft-Radar-Project
