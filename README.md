# QuickR

## Description

This application will let users save QR Codes, and generate new ones from any url. They will also have the ability to organize codes with a folder system.

## Project Requirements

- Node version v.16.1.0+

### Project Setup

- Install required packages
  - Navigate project's root directory
  - Type and run `yarn install`

### Running the Project

- Navigate to project directory in terminal

- Install packages via `yarn install`

- Open development server via `yarn start`

### Development Process

- When starting work on a new release version, increment `minor` version(example: 1.2.0 to 1.3.0)

## Deployment Instructions

## App Fuctionality Testing Routine

1. Add Folder (pass)
2. Add Folder w/ Links (pass)
3. Add Links inside add folder page (same as 2)
4. Add links to current folders with picker ()
5. Edit name, description, and color of current folders ()
6. Edit name, description, and color of newly made folders ()
7. Add links inside edit page of current folders ( fail - error alert for empty field inputs)
8. Add links inside edit page of newly made folders ( fail - same input error alert)
9. Delete current folders ()
10. Delete newly made folders ()
11. Edit URL ()
12. Scan URL from dashboard ()
13. Scan URL from Add/Edit Pages (add link shows previous scanned url, need to clear inputs)
14. Delete URL (only works in edit page, crashes in add folder page)
15. Edit URL from add folder
16. Delete URL from add folder

## Features to be added in testing routine

