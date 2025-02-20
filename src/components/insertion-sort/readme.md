# Insertion Sort Algorithm - Stencil.js Component

## Overview
This project implements the **Insertion Sort** algorithm using **Stencil.js**. The component allows users to enter numbers, choose the sorting order (ascending or descending), and visualize the sorting process step by step.

## Features
- Input numbers dynamically.
- Choose sorting order: **Ascending** or **Descending**.
- View sorting steps in real-time.
- Reset numbers for a new sorting session.

## Installation
1. Clone the repository:
   ```sh
   git clone <https://github.com/jjchinchillal/insert-sort.git>
   ```
2. Navigate to the project folder:
   ```sh
   cd insertion-sort-component
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## Usage
Include the custom element in your HTML:
```html
<insertion-sort></insertion-sort>
```

## Component Breakdown
### 1. `insertion-sort.tsx`
This is the main Stencil.js component responsible for handling user interaction and rendering the UI.

#### **State Variables**
- `numbers`: Stores the list of numbers entered by the user.
- `sortedNumbers`: Stores the sorted list.
- `steps`: Stores the steps of the sorting process.
- `sorting`: Indicates whether sorting is in progress.
- `inputValue`: Stores the value entered in the input field.
- `sortOrder`: Stores the selected sorting order (ascending or descending).

#### **Functions**
- `handleInputChange(event)`: Captures the user's input.
- `addNumber()`: Adds the input number to the list.
- `resetNumbers()`: Clears all data to restart.
- `startSorting()`: Calls the `insertionSort` function and updates the state with the sorted list and steps.
- `handleSortOrderChange(event)`: Updates the sorting order and re-sorts the list if numbers exist.

### 2. `insertion-sort.ts`
This file contains the insertion sort logic.

#### **Function: `insertionSort(arr: number[], order: 'asc' | 'desc')`**
##### **Parameters**:
- `arr`: Array of numbers to be sorted.
- `order`: Sorting order (**'asc'** for ascending, **'desc'** for descending).

##### **Returns**:
- `{ sortedArray: number[], steps: string[] }`
  - `sortedArray`: The sorted list.
  - `steps`: The detailed steps of the sorting process.

##### **Algorithm Steps**:
1. Copy the array to avoid mutations.
2. Loop through each element, starting from the second element.
3. Compare the current element with the previous ones.
4. Shift elements if necessary to place the element in the correct position.
5. Log each step in the `steps` array.

## Debugging and Testing
To debug, use `console.log()` inside the `insertionSort` function or check the state values inside the Stencil.js dev tools.

## Styling
The component uses **SCSS** for styling. The file `insertion-sort.scss` contains styles for the buttons, input field, and sorting results.

## Example Output
### **Before Sorting**:
```
List: [5, 3, 8, 1]
```
### **Sorting Steps (Ascending Order)**:
```
🔍 Comparing 3 with previous elements...
🔄 Moving 5 to the right
✅ Inserting 3 in position: [3, 5, 8, 1]
🔍 Comparing 8 with previous elements...
✅ 8 is already in position
🔍 Comparing 1 with previous elements...
🔄 Moving 8 to the right
🔄 Moving 5 to the right
🔄 Moving 3 to the right
✅ Inserting 1 in position: [1, 3, 5, 8]
🎉 Sorted list (Ascending): [1, 3, 5, 8]
```

## Author
Developed by [Juan José Chinchilla Lanziano].

## License
This project is licensed under the MIT License.