<!-- Danny -->

# Creating a Folder

- [ ] Click on Add Folder Button on the bottom of the home page

  - [ ] Type values into: Folder Name, and Description fields.
  - [ ] Press on a color in the Folder Color palette to update the indicator.
  - [ ] Press on Cancel to go back and lose changes.
  - [ ] Press on Save to add new folder to Dashboard.

- [ ] Press on the plus button at the top of the home page

  - [ ] Press on Add Folder in the pop up modal.
  - [ ] Type values into: Folder Name, and Description fields.
  - [ ] Press on a color in the Folder Color palette to update the indicator.
  - [ ] Press on Cancel to go back and lose changes.
  - [ ] Press on Save to add new folder to Dashboard.

### Notes

- To add a Link to a folder, see **Adding a Link**

# Editing a Folder

- [ ] Press on any folder to expand it.
- [ ] Press on pencil icon next to the folder name.
- [ ] Edit a folder Name by pressing on pencil icon next to it.
  - [ ] Update the input value
- [ ] Edit a folder Description by pressing on pencil icon next to it.
  - [ ] Update the input value
- [ ] Edit the folder color by pressing a different color on the palette. The indicator next to **Folder Color** should update.

### Notes

- To add and edit links see **Adding a Link** or **Editing a Link**

- [ ] Once Finished, press **Back Arrow** to undo changes, **Save** to update changes.
      To Delete a folder see **Deleting a Folder**.

# Deleting a Folder

- [ ] User can delete a folder by selecting a folder to open it, and pressing the edit icon (Pencil Icon). At the bottom of the 'Edit Folder Page' user can press Delete
- [ ] On press of Delete user will be prompted with an Alert informing that all of the folders contents will be lost if you continue and press OK
- [ ] If OK is pressed the user will be navigated back to the main screen and the deleted folder should be gone.
- [ ] If cancel was pressed the Alert should be dismissed and you are able to interact with the Edit Folder Page again.

# Adding a Link

- [ ] User can add a link from the '+' icon in the top left corner by pressing 'Add QR Code'
  - [ ] Adding a link from the '+' icon should allow you to enter link info and select a folder to save the link to if there are current folders saved to the main screen
- [ ] User can add a link from the 'Add Folder Page' by pressing the 'Add Link' button
- [ ] User can add a link from the 'Edit Folder Page' by pressing the pencil icon when a folder is selected then pressing 'Add Link'

## Scanning a Link

- [ ] When the 'Add URL' modal is in view the user can press the QR Icon inside the URL input field to open the camera
- [ ] Focus the camera on a QR Code, when scan is successful user should see a toas notifiaction near the top with a success message
- [ ] Once scan is successful the user should be taken back to the Add Url modal and the web address of the link should be populated in the URL inpur field.
- [ ] User can fill in remaining inputs giving the link a Name and Description and save the link
  ### _Notes_
  - If user does not have a folder saved it will not allow you to save the link
- [ ] User can view saved link in folder and select it to populate a QR Code.

## Manually entering a Link

- [ ] When 'Add URL' modal is is in view the user can choose to manually enter a URL address instead of scanning
- [ ] Type or paste URL into URL input field and fill in remaining inputs giving the link a Name and Description and save the link
  ### _Notes_
  - If user does not have a folder saved it will not allow you to save the link
- [ ] User can view saved link in folder and select it to populate a QR Code.

# Editing a Link

- [ ] Inside the edit folder page, pressing the edit (pencil) icon should render a modal with a save and delete button.
  - [ ] Upon modal render, the link's information should prepopulate the input boxes.
  - [ ] On press of the save button, the modal should close.

# Deleting a Link

- [ ] Inside the edit folder page, pressing the edit (pencil) icon should render a modal with a save and delete button.
  - [ ] On deletion of the a link, a toast (note at the top of the screen) should render with the message "(deleted link) has been deleted."

# Accessing a Link

- [ ] Open a folder drawer from the homepage and click an individual link.

## Blob Color Change

- [ ] Upon link access, the link's parent folder color should be the same as color as the blob (background circle) in the homepage.

## Viewing Description

- [ ] Clicking on the ellipsis (three dots) underneath the QR code should show the link's description.

## Sharing

- [ ] Inside the link description box, a share icon should bring up the device's native share menu that gives options to email/text the link.

## Viewing Link on Web

- [ ] Inside the link description box, a link icon should open a webview within the application.

### _Notes_

- if all folders are deleted, the user should both the qr and folder empty state on the dashboard.
- if active link is deleted, the qr state should show the placeholder
