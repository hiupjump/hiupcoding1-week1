# Dinner Menu Recommendation Website

## Overview

A simple web application that recommends a dinner menu to the user. Users can filter recommendations by food category (Korean, Chinese, Japanese, Western).

## Features

*   A button to trigger the menu recommendation.
*   Filter buttons for food categories: Korean, Chinese, Japanese, and Western.
*   A display area to show the recommended menu.
*   A predefined list of dinner menus for each category.
*   Random selection of a menu from the selected category.

## Plan

1.  **HTML (`index.html`):**
    *   Create the basic structure with a main recommendation button and a display area.
    *   Add four buttons for the food categories.
2.  **CSS (`style.css`):**
    *   Add styles for the button and the display area to make the interface clean and user-friendly.
    *   Style the new category buttons, including a visual indicator for the selected category.
3.  **JavaScript (`main.js`):**
    *   Create separate arrays of dinner menu items for each food category.
    *   Add event listeners to the category buttons.
    *   When a category button is clicked, set the active menu list to the corresponding array.
    *   Add an event listener to the main recommendation button.
    *   When the main button is clicked, randomly select a menu from the currently active list.
    *   Display the selected menu in the display area.