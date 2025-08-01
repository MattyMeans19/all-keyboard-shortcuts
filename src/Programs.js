//JSON data for each application, with separate arrays for each OS. 
//Some were built by manual input, some using Google Sheets, and others using Gemini AI

export const programs = [
    {
        name: "Blender(v4.5)",
        icon: "/icons8-blender-144.png",
        windows:[
            {
        category: "Properties",
        description: "The following shortcuts can be pressed while hovering the mouse cursor over an editable field.",
        shortcutData: [
            {
                keys: "Control + C",
                action: "Copy the (single) value of the field."
            },
            {
                keys: "Control + V",
                action: "Paste the (single) value of the field."
            },
            {
                keys: "Control + Alt + C",
                action: "Copy the entire vector or color of the field."
            },
            {
                keys: "Control + Alt + V",
                action: "Paste the entire vector or color of the field."
            },
            {
                keys: "Control + C",
                action: "Open the context menu."
            },
            {
                keys: "Minus(-)",
                action: "Invert the value’s sign (multiply by -1.0)."
            },
            {
                keys: "Control + Scroll Wheel",
                action: "Change the value in incremental steps. For fields with a pop-up list of values, this cycles the value."
            },
            {
                keys: "Return",
                action: "Activates menus and toggles checkboxes."
            },
            {
                keys: "Alt",
                action: "Hold while editing values to apply the change to all selected items (objects, bones, sequence-strips). This can be used for number fields and toggles."
            }
        ]
    },
    {   
        category: "Animation",
        description: "The following shortcuts can be pressed while hovering the mouse cursor over an editable field.",
        shortcutData: [
            {
                keys: "I",
                action: "Insert a keyframe."
            },
            {
                keys: "Alt + I",
                action: "Clear the keyframe."
            },
            {
                keys: "Shift + Alt + I",
                action: "Clear all keyframes."
            },
            {
                keys: "Control + D",
                action: "Assign a driver."
            },
            {
                keys: "Control + Alt + D",
                action: "Clear the driver."
            },
            {
                keys: "Alt + K",
                action: "Remove the property from the current keying set."
            }
        ]
    },
    {
        
        category: "Python Scripting",
        description: "The following shortcuts can be pressed while hovering the mouse cursor over an editable field.",
        shortcutData: [
            {
                keys: "Control + C",
                action: "When pressed while hovering over an operator button, copies its Python command to the clipboard. This command can then be used in the Python Console or in the Text Editor when writing scripts."
            },
            {
                keys: "Shift + Control + C",
                action: "When pressed while hovering over a field, copies its relative data path (also available from the context menu). Useful when writing drivers or scripts."
            },
            {
                keys: "Shift + Control + Alt + C",
                action: "When pressed while hovering over a field, copies its full data path."
            }
        ]
    },
    {
        
        category: "Dragging",
        description: "The following shortcuts can be used while moving/rotating/scaling an object in the 3D Viewport, dragging the slider of a value, and so on. Note that they should be pressed after starting the drag, not before.",
        shortcutData: [
            {
                keys: "Control",
                action: "Snap to coarse increments, making it easier to (say) rotate an object by exactly 90°."
            },
            {
                keys: "Shift",
                action: "Make the value change more slowly in response to mouse movement, giving you more precision."
            },
            {
                keys: "Shift + Control",
                action: "Snap to fine increments."
            }
        ]
    },
    {
        
        category: "Text Editing",
        description: "Use the following list of shortcuts to edit text more quickly and efficiently.",
        shortcutData: [
            {
                keys: "Home",
                action: "Go to the start of the line."
            },
            {
                keys: "End",
                action: "Go to the end of the line."
            },
            {
                keys: "Left Arrow, Right Arrow",
                action: "Move the cursor a single character."
            },
            {
                keys: "Control + Left, Control + Right",
                action: "Move the cursor an entire word."
            },
            {
                keys: "Backspace, Delete",
                action: "Delete characters."
            },
            {
                keys: "Control + Backspace, Control + Delete",
                action: "Delete words."
            },
            {
                keys: "Shift",
                action: "Select while holding the key and moving the cursor."
            },
            {
                keys: "Control + A",
                action: "Select all text."
            },
            {
                keys: "Control + C",
                action: "Copy the selected text."
            },
            {
                keys: "Control + X",
                action: "Cut the selected text."
            },
            {
                keys: "Control + V",
                action: "Paste text at the cursor position."
            }
        ]
    },
    {
        
        category: "Confirm & Cancel",
        description: "To submit or cancel inputs",
        shortcutData: [
            {
                keys: "Esc, Right Mouse Button",
                action: "Cancel."
            },
            {
                keys: "Return, Left Mouse Button",
                action: "Confirm."
            }
        ]
    },
    {
        
        category: "Global Keys",
        description: "The following shortcuts can be pressed to perform basic commands.",
        shortcutData: [
            {
                keys: "Control + O",
                action: "Open file."
            },
            {
                keys: "Control + S",
                action: "Save file."
            },
            {
                keys: "Control + N",
                action: "New file."
            },
            {
                keys: "Control + Z",
                action: "Undo."
            },
            {
                keys: "Shift + Control + Z",
                action: "Redo."
            },
            {
                keys: "Control + Q",
                action: "Quit."
            },
            {
                keys: "F1",
                action: "Help (context sensitive)."
            },
            {
                keys: "F2",
                action: "Rename active item."
            },
            {
                keys: "F3",
                action: "Menu Search."
            },
            {
                keys: "F4",
                action: "File context menu."
            },
            {
                keys: "F5-F8",
                action: "Reserved for user actions."
            },
            {
                keys: "F9",
                action: "Adjust Last Operation."
            },
            {
                keys: "F10",
                action: "Reserved for user actions."
            },
            {
                keys: "F11",
                action: "Show render window."
            },
            {
                keys: "F12",
                action: "Render the current frame."
            },
            {
                keys: "Q",
                action: "Quick access (favorites)."
            },
            {
                keys: "Control + Spacebar",
                action: "Toggle Maximize Area."
            },
            {
                keys: "Control + PageUp, Control + PageDown",
                action: "Next/previous Workspace."
            },
            {
                keys: "Spacebar",
                action: "User configurable; see Spacebar Action."
            },
            {
                keys: "Shift + Control + Spacebar",
                action: "Playback animation (reverse)."
            }
        ]
    },
    {
        
        category: "Common Editing Keys",
        description: "Shortcuts for editing.",
        shortcutData: [
            {
                keys: "X",
                action: "Delete the selected item with a confirmation dialog.."
            },
            {
                keys: "Delete",
                action: "Delete the selected item without a confirmation dialog.."
            }
        ]
    },
    {
        
        category: "Common Editor Keys",
        description: "These keys are shared across editors such as the 3D Viewport, UV and Graph editor.",
        shortcutData: [
            {
                keys: "A",
                action: "Select all."
            },
            {
                keys: "Alt + A, Double-Tap A",
                action: "Select none."
            },
            {
                keys: "Control + I",
                action: "Invert selection."
            },
            {
                keys: "H",
                action: "Hide selected items."
            },
            {
                keys: "Shift + H",
                action: "Hide unselected items."
            },
            {
                keys: "Alt + H",
                action: "Reveal hidden items."
            },
            {
                keys: "T",
                action: "Toggle Toolbar."
            },
            {
                keys: "N",
                action: "Toggle Sidebar."
            }
        ]
    },
    {
        
        category: "3D Viewport",
        description: "The following shortcuts can be pressed while using specific viewports.",
        shortcutData: [
            {
                keys: "Tab",
                action: "Toggle Edit Mode."
            },
            {
                keys: "Control + Tab",
                action: "Toggle Pose mode for armatures, or show a mode switching pie menu for others."
            },
            {
                keys: "1-3",
                action: "In Edit Mode, switch between editing vertices (1), edges (2), or faces (3). Hold Shift to toggle one of these without disabling the others. Hold Ctrl to alter how the selection is transformed from the old mode to the new."
            },
            {
                keys: "AccentGrave(`)",
                action: "Show 3D Viewport navigation pie menu."
            },
            {
                keys: "Control + AccentGrave(`)",
                action: "Toggle gizmos."
            },
            {
                keys: "Shift + AccentGrave(`)",
                action: "Start Fly/Walk Navigation."
            }
          ]
      }
        ],
        mac: [
            {
        category: "Properties",
        description: "The following shortcuts can be pressed while hovering the mouse cursor over an editable field.",
        shortcutData: [
            {
                keys: "Control + C",
                action: "Copy the (single) value of the field."
            },
            {
                keys: "Control + V",
                action: "Paste the (single) value of the field."
            },
            {
                keys: "Control + Option (⌥) + C",
                action: "Copy the entire vector or color of the field."
            },
            {
                keys: "Control + Option (⌥) + V",
                action: "Paste the entire vector or color of the field."
            },
            {
                keys: "Control + C",
                action: "Open the context menu."
            },
            {
                keys: "Minus(-)",
                action: "Invert the value's sign (multiply by -1.0)."
            },
            {
                keys: "Control + Scroll Wheel",
                action: "Change the value in incremental steps. For fields with a pop-up list of values, this cycles the value."
            },
            {
                keys: "Return",
                action: "Activates menus and toggles checkboxes."
            },
            {
                keys: "Option (⌥)",
                action: "Hold while editing values to apply the change to all selected items (objects, bones, sequence-strips). This can be used for number fields and toggles."
            }
        ]
    },
    {   
        category: "Animation",
        description: "The following shortcuts can be pressed while hovering the mouse cursor over an editable field.",
        shortcutData: [
            {
                keys: "I",
                action: "Insert a keyframe."
            },
            {
                keys: "Option (⌥) + I",
                action: "Clear the keyframe."
            },
            {
                keys: "Shift + Option (⌥) + I",
                action: "Clear all keyframes."
            },
            {
                keys: "Control + D",
                action: "Assign a driver."
            },
            {
                keys: "Control + Option (⌥) + D",
                action: "Clear the driver."
            },
            {
                keys: "Option (⌥) + K",
                action: "Remove the property from the current keying set."
            }
        ]
    },
    {
        
        category: "Python Scripting",
        description: "The following shortcuts can be pressed while hovering the mouse cursor over an editable field.",
        shortcutData: [
            {
                keys: "Control + C",
                action: "When pressed while hovering over an operator button, copies its Python command to the clipboard. This command can then be used in the Python Console or in the Text Editor when writing scripts."
            },
            {
                keys: "Shift + Control + C",
                action: "When pressed while hovering over a field, copies its relative data path (also available from the context menu). Useful when writing drivers or scripts."
            },
            {
                keys: "Shift + Control + Option (⌥) + C",
                action: "When pressed while hovering over a field, copies its full data path."
            }
        ]
    },
    {
        
        category: "Dragging",
        description: "The following shortcuts can be used while moving/rotating/scaling an object in the 3D Viewport, dragging the slider of a value, and so on. Note that they should be pressed after starting the drag, not before.",
        shortcutData: [
            {
                keys: "Control",
                action: "Snap to coarse increments, making it easier to (say) rotate an object by exactly 90°."
            },
            {
                keys: "Shift",
                action: "Make the value change more slowly in response to mouse movement, giving you more precision."
            },
            {
                keys: "Shift + Control",
                action: "Snap to fine increments."
            }
        ]
    },
    {
        
        category: "Text Editing",
        description: "Use the following list of shortcuts to edit text more quickly and efficiently.",
        shortcutData: [
            {
                keys: "Home",
                action: "Go to the start of the line."
            },
            {
                keys: "End",
                action: "Go to the end of the line."
            },
            {
                keys: "Left Arrow, Right Arrow",
                action: "Move the cursor a single character."
            },
            {
                keys: "Control + Left, Control + Right",
                action: "Move the cursor an entire word."
            },
            {
                keys: "Backspace, Delete",
                action: "Delete characters."
            },
            {
                keys: "Control + Backspace, Control + Delete",
                action: "Delete words."
            },
            {
                keys: "Shift",
                action: "Select while holding the key and moving the cursor."
            },
            {
                keys: "Control + A",
                action: "Select all text."
            },
            {
                keys: "Control + C",
                action: "Copy the selected text."
            },
            {
                keys: "Control + X",
                action: "Cut the selected text."
            },
            {
                keys: "Control + V",
                action: "Paste text at the cursor position."
            }
        ]
    },
    {
        
        category: "Confirm & Cancel",
        description: "To submit or cancel inputs",
        shortcutData: [
            {
                keys: "Esc, Right Mouse Button",
                action: "Cancel."
            },
            {
                keys: "Return, Left Mouse Button",
                action: "Confirm."
            }
        ]
    },
    {
        
        category: "Global Keys",
        description: "The following shortcuts can be pressed to perform basic commands.",
        shortcutData: [
            {
                keys: "Control + O",
                action: "Open file."
            },
            {
                keys: "Control + S",
                action: "Save file."
            },
            {
                keys: "Control + N",
                action: "New file."
            },
            {
                keys: "Control + Z",
                action: "Undo."
            },
            {
                keys: "Shift + Control + Z",
                action: "Redo."
            },
            {
                keys: "Control + Q",
                action: "Quit."
            },
            {
                keys: "F1",
                action: "Help (context sensitive)."
            },
            {
                keys: "F2",
                action: "Rename active item."
            },
            {
                keys: "F3",
                action: "Menu Search."
            },
            {
                keys: "F4",
                action: "File context menu."
            },
            {
                keys: "F5-F8",
                action: "Reserved for user actions."
            },
            {
                keys: "F9",
                action: "Adjust Last Operation."
            },
            {
                keys: "F10",
                action: "Reserved for user actions."
            },
            {
                keys: "F11",
                action: "Show render window."
            },
            {
                keys: "F12",
                action: "Render the current frame."
            },
            {
                keys: "Q",
                action: "Quick access (favorites)."
            },
            {
                keys: "Control + Spacebar",
                action: "Toggle Maximize Area."
            },
            {
                keys: "Control + PageUp, Control + PageDown",
                action: "Next/previous Workspace."
            },
            {
                keys: "Spacebar",
                action: "User configurable; see Spacebar Action."
            },
            {
                keys: "Shift + Control + Spacebar",
                action: "Playback animation (reverse)."
            }
        ]
    },
    {
        
        category: "Common Editing Keys",
        description: "Shortcuts for editing.",
        shortcutData: [
            {
                keys: "X",
                action: "Delete the selected item with a confirmation dialog.."
            },
            {
                keys: "Delete",
                action: "Delete the selected item without a confirmation dialog.."
            }
        ]
    },
    {
        
        category: "Common Editor Keys",
        description: "These keys are shared across editors such as the 3D Viewport, UV and Graph editor.",
        shortcutData: [
            {
                keys: "A",
                action: "Select all."
            },
            {
                keys: "Option (⌥) + A, Double-Tap A",
                action: "Select none."
            },
            {
                keys: "Control + I",
                action: "Invert selection."
            },
            {
                keys: "H",
                action: "Hide selected items."
            },
            {
                keys: "Shift + H",
                action: "Hide unselected items."
            },
            {
                keys: "Alt + H",
                action: "Reveal hidden items."
            },
            {
                keys: "T",
                action: "Toggle Toolbar."
            },
            {
                keys: "N",
                action: "Toggle Sidebar."
            }
        ]
    },
    {
        
        category: "3D Viewport",
        description: "The following shortcuts can be pressed while using specific viewports.",
        shortcutData: [
            {
                keys: "Tab",
                action: "Toggle Edit Mode."
            },
            {
                keys: "Control + Tab",
                action: "Toggle Pose mode for armatures, or show a mode switching pie menu for others."
            },
            {
                keys: "1-3",
                action: "In Edit Mode, switch between editing vertices (1), edges (2), or faces (3). Hold Shift to toggle one of these without disabling the others. Hold Ctrl to alter how the selection is transformed from the old mode to the new."
            },
            {
                keys: "AccentGrave(`)",
                action: "Show 3D Viewport navigation pie menu."
            },
            {
                keys: "Control + AccentGrave(`)",
                action: "Toggle gizmos."
            },
            {
                keys: "Shift + AccentGrave(`)",
                action: "Start Fly/Walk Navigation."
            }
          ]
      }
        ]
    },
    {
        name: "Excel",
        icon: "/icons8-excel-144.png",
        windows:[
            {
        category: "Frequently used shortcuts",
        description: "This table lists the most frequently used shortcuts in Excel.",
        shortcutData: [
    {
        keys: "Control + W",
        action: "Close a workbook."
    },
    {
        keys: "Control + O",
        action: "Open a workbook."
    },
    {
        keys: "Alt + H",
        action: "Go to the Home tab."
    },
    {
        keys: "Control + S",
        action: "Save a workbook."
    },
    {
        keys: "Control + C",
        action: "Copy selection."
    },
    {
        keys: "Control + V",
        action: "Paste selection."
    },
    {
        keys: "Control + Z",
        action: "Undo recent action."
    },
    {
        keys: "Delete",
        action: "Remove cell contents."
    },
    {
        keys: "Alt + H, H",
        action: "Choose a fill color."
    },
    {
        keys: "Control + X",
        action: "Cut selection."
    },
    {
        keys: "Alt + N",
        action: "Go to the Insert tab."
    },
    {
        keys: "Control + B",
        action: "Apply bold formatting."
    },
    {
        keys: "Alt + H, A, C",
        action: "Center align cell contents."
    },
    {
        keys: "Alt + P",
        action: "Go to the Page Layout tab."
    },
    {
        keys: "Alt + A",
        action: "Go to the Data tab."
    },
    {
        keys: "Alt + W",
        action: "Go to the View tab."
    },
    {
        keys: "Shift + F10 OR Windows key(\u229E)",
        action: "Open the context menu."
    },
    {
        keys: "Alt + H, B",
        action: "Add borders."
    },
    {
        keys: "Alt + H, D, C",
        action: "Delete column."
    },
    {
        keys: "Alt + M",
        action: "Go to the Formula tab."
    },
    {
        keys: "Control + 9",
        action: "Hide the selected rows."
    },
    {
        keys: "Control + 0",
        action: "Hide the selected columns."
    }
]
            },
            {
                category: "Use the Access keys for ribbon tabs",
                description: "To go directly to a tab on the ribbon(toolbar), press one of the following access keys. Additional tabs might appear depending on your selection in the worksheet.",
                shortcutData: [
            {
                keys: "Alt + Q, then enter the search term.",
                action: "Move to the Tell me or Search field on the ribbon and type a search term for assistance or Help content."
            },
            {
                keys: "Alt + F",
                action: "Open the File menu."
            },
            {
                keys: "Alt + H",
                action: "Open the Home tab and format text and numbers and use the Find tool."
            },
            {
                keys: "Alt + N",
                action: "Open the Insert tab and insert PivotTables, charts, add-ins, Sparklines, pictures, shapes, headers, or text boxes."
            },
            {
                keys: "Alt + P",
                action: "Open the Page Layout tab and work with themes, page setup, scale, and alignment."
            },
            {
                keys: "Alt + M",
                action: "Open the Formulas tab and insert, trace, and customize functions and calculations."
            },
            {
                keys: "Alt + A",
                action: "Open the Data tab and connect to, sort, filter, analyze, and work with data."
            },
            {
                keys: "Alt + R",
                action: "Open the Review tab and check spelling, add notes and threaded comments, and protect sheets and workbooks."
            },
            {
                keys: "Alt + W",
                action: "Open the View tab and preview page breaks and layouts, show and hide gridlines and headings, set zoom magnification, manage windows and panes, and view macros."
            }
        ]
            },
            {
                category: "Work in the ribbon with the keyboard",
                description: "Navigate through the ribbon(toolbar).",
                shortcutData: [
            {
                keys: "Alt or F10. To move to a different tab, use access keys or the arrow keys.",
                action: "Select the active tab on the ribbon and activate the access keys."
            },
            {
                keys: "Tab key or Shift + Tab",
                action: "Move the focus to commands on the ribbon or add-in pane."
            },
            {
                keys: "Arrow keys",
                action: "Move down, up, left, or right, respectively, among the items on the ribbon."
            },
            {
                keys: "Ctrl + Shift + F10",
                action: "Show the tooltip for the ribbon element currently in focus."
            },
            {
                keys: "Spacebar OR Enter",
                action: "Activate a selected button."
            },
            {
                keys: "Down arrow key",
                action: "Open the list for a selected command."
            },
            {
                keys: "Alt + Down arrow key",
                action: "Open the menu for a selected button."
            },
            {
                keys: "Down arrow key",
                action: "When a menu or submenu is open, move to the next command."
            },
            {
                keys: "Ctrl + F1",
                action: "Expand or collapse the ribbon."
            },
            {
                keys: "Shift + F10 OR Windows Key",
                action: "Open a context menu."
            },
            {
                keys: "Left arrow key",
                action: "Move to the submenu when a main menu is open or selected."
            },
            {
                keys: "Ctrl + Left or Right arrow key",
                action: "Move from one group of controls to another."
            }
        ]
            },
            {
                category: "Cell Navigation",
                description: "Keyboard shortcuts for navigating in cells",
                shortcutData: [
            {
                keys: "Shift + Tab",
                action: "Move to the previous cell in a worksheet or the previous option in a dialog box."
            },
            {
                keys: "Up arrow key",
                action: "Move one cell up in a worksheet."
            },
            {
                keys: "Down arrow key",
                action: "Move one cell down in a worksheet."
            },
            {
                keys: "Left arrow key",
                action: "Move one cell left in a worksheet."
            },
            {
                keys: "Right arrow key",
                action: "Move one cell right in a worksheet."
            },
            {
                keys: "Control + Arrow key",
                action: "Move to the edge of the current data region in a worksheet."
            },
            {
                keys: "End, Arrow key",
                action: "Enter the End mode, move to the next nonblank cell in the same column or row as the active cell, and turn off End mode. If the cells are blank, move to the last cell in the row or column."
            },
            {
                keys: "Control + End",
                action: "Move to the last cell on a worksheet, to the lowest used row of the rightmost used column."
            },
            {
                keys: "Control + Shift + End",
                action: "Extend the selection of cells to the last used cell on the worksheet (lower-right corner)."
            },
            {
                keys: "Home + Scroll lock",
                action: "Move to the cell in the upper-left corner of the window when Scroll lock is turned on."
            },
            {
                keys: "Control + Home",
                action: "Move to the beginning of a worksheet."
            },
            {
                keys: "Page down",
                action: "Move one screen down in a worksheet."
            },
            {
                keys: "Control + Page down",
                action: "Move to the next sheet in a workbook."
            },
            {
                keys: "Alt + Page down",
                action: "Move one screen to the right in a worksheet."
            },
            {
                keys: "Page up",
                action: "Move one screen up in a worksheet."
            },
            {
                keys: "Alt + Page up",
                action: "Move one screen to the left in a worksheet."
            },
            {
                keys: "Control + Page up",
                action: "Move to the previous sheet in a workbook."
            },
            {
                keys: "Tab key",
                action: "Move one cell to the right in a worksheet. Or, in a protected worksheet, move between unlocked cells."
            },
            {
                keys: "Alt + Down arrow key",
                action: "Open the list of validation choices on a cell that has data validation option applied to it."
            },
            {
                keys: "Control + Alt + 5, then the Tab key repeatedly",
                action: "Cycle through floating shapes, such as text boxes or images."
            },
            {
                keys: "Esc",
                action: "Exit the floating shape navigation and return to the normal navigation."
            },
            {
                keys: "Control + Shift, then scroll your mouse wheel up to go left, down to go right",
                action: "Scroll horizontally."
            },
            {
                keys: "Control + Alt + Equal sign ( = )",
                action: "Zoom in."
            },
            {
                keys: "Control + Alt + Minus sign (-)",
                action: "Zoom out."
            }
            ]
            },
            {
                category: "Formatting Cells",
                description: "Keyboard shortcuts for formatting cells",
                shortcutData: [
            {
                keys: "Control + 1",
                action: "Open the Format Cells dialog box."
            },
            {
                keys: "Control + Shift + F or Control + Shift + P",
                action: "Format fonts in the Format Cells dialog box."
            },
            {
                keys: "F2",
                action: "Edit the active cell and put the insertion point at the end of its contents. Or, if editing is turned off for the cell, move the insertion point into the formula bar. If editing a formula, toggle Point mode off or on so you can use the arrow keys to create a reference."
            },
            {
                keys: "Shift + F2 OR Shift + F2",
                action: "Insert a note.\nOpen and edit a cell note."
            },
            {
                keys: "Control + Shift + F2 OR Control + Shift + F2",
                action: "Insert a threaded comment.\nOpen and reply to a threaded comment."
            },
            {
                keys: "Control + Shift + Plus sign ( + )",
                action: "Open the Insert dialog box to insert blank cells."
            },
            {
                keys: "Control + Minus sign (-)",
                action: "Open the Delete dialog box to delete selected cells."
            },
            {
                keys: "Control + Shift + Colon (:)",
                action: "Enter the current time."
            },
            {
                keys: "Control + Semicolon (;)",
                action: "Enter the current date."
            },
            {
                keys: "Control + Grave accent (`)",
                action: "Switch between displaying cell values or formulas in the worksheet."
            },
            {
                keys: "Control + Apostrophe (')",
                action: "Copy a formula from the cell above the active cell into the cell or the formula bar."
            },
            {
                keys: "Control + X",
                action: "Move the selected cells."
            },
            {
                keys: "Control + C",
                action: "Copy the selected cells."
            },
            {
                keys: "Control + V",
                action: "Paste content at the insertion point, replacing any selection."
            },
            {
                keys: "Control + Alt + V",
                action: "Open the Paste Special dialog box."
            },
            {
                keys: "Control + I or Control + 3",
                action: "Italicize text or remove italic formatting."
            },
            {
                keys: "Control + B or Control + 2",
                action: "Bold text or remove bold formatting."
            },
            {
                keys: "Control + U or Control + 4",
                action: "Underline text or remove underline."
            },
            {
                keys: "Control + 5",
                action: "Apply or remove strikethrough formatting."
            },
            {
                keys: "Control + 6",
                action: "Switch between hiding objects, displaying objects, and displaying placeholders for objects."
            },
            {
                keys: "Control + Shift + Ampersand sign (&)",
                action: "Apply an outline border to the selected cells."
            },
            {
                keys: "Control + Shift + Underscore (_)",
                action: "Remove the outline border from the selected cells."
            },
            {
                keys: "Control + 8",
                action: "Display or hide the outline symbols."
            },
            {
                keys: "Control + D",
                action: "Use the Fill Down command to copy the contents and format of the topmost cell of a selected range into the cells below."
            },
            {
                keys: "Control + Shift + Tilde sign (~)",
                action: "Apply the General number format."
            },
            {
                keys: "Control + Shift + Dollar sign ($)",
                action: "Apply the Currency format with two decimal places (negative numbers in parentheses)."
            },
            {
                keys: "Control + Shift + Percent sign (%)",
                action: "Apply the Percentage format with no decimal places."
            },
            {
                keys: "Control + Shift + Caret sign (^)",
                action: "Apply the Scientific number format with two decimal places."
            },
            {
                keys: "Control + Shift + Number sign (#)",
                action: "Apply the Date format with the day, month, and year."
            },
            {
                keys: "Control + Shift + At sign (@)",
                action: "Apply the Time format with the hour and minute, and AM or PM."
            },
            {
                keys: "Control + Shift + Exclamation point (!)",
                action: "Apply the Number format with two decimal places, thousands separator, and minus sign (-) for negative values."
            },
            {
                keys: "Control + K",
                action: "Open the Insert hyperlink dialog box."
            },
            {
                keys: "F7",
                action: "Check spelling in the active worksheet or selected range."
            },
            {
                keys: "Control + Q",
                action: "Display the Quick Analysis options for selected cells that contain data."
            },
            {
                keys: "Control + L or Control + T",
                action: "Display the Create Table dialog box."
            },
            {
                keys: "Control + Shift + G",
                action: "Open the Workbook Statistics dialog box."
            }
        ]
            },
            {
                category: "Special Dialog Box",
                description: "Keyboard shortcuts in the Paste Special dialog box in Excel",
                shortcutData: [
            {
                keys: "A",
                action: "Paste all cell contents and formatting."
            },
            {
                keys: "F",
                action: "Paste only the formulas as entered in the formula bar."
            },
            {
                keys: "V",
                action: "Paste only the values (not the formulas)."
            },
            {
                keys: "T",
                action: "Paste only the copied formatting."
            },
            {
                keys: "C",
                action: "Paste only comments and notes attached to the cell."
            },
            {
                keys: "N",
                action: "Paste only the data validation settings from copied cells."
            },
            {
                keys: "H",
                action: "Paste all cell contents and formatting from copied cells."
            },
            {
                keys: "X",
                action: "Paste all cell contents without borders."
            },
            {
                keys: "W",
                action: "Paste only column widths from copied cells."
            },
            {
                keys: "R",
                action: "Paste only formulas and number formats from copied cells."
            },
            {
                keys: "U",
                action: "Paste only the values (not formulas) and number formats from copied cells."
            }
        ]
            },
            {
                category: "Selections and Actions",
                description: "Keyboard shortcuts for making selections and performing actions",
                shortcutData: [
            {
                keys: "Control + A or Control + Shift + Spacebar",
                action: "Select the entire worksheet."
            },
            {
                keys: "Control + Shift + Page down",
                action: "Select the current and next sheet in a workbook."
            },
            {
                keys: "Control + Shift + Page up",
                action: "Select the current and previous sheet in a workbook."
            },
            {
                keys: "Shift + Arrow key",
                action: "Extend the selection of cells by one cell."
            },
            {
                keys: "Control + Shift + Arrow key",
                action: "Extend the selection of cells to the last nonblank cell in the same column or row as the active cell, or if the next cell is blank, to the next nonblank cell."
            },
            {
                keys: "F8",
                action: "Turn extend mode on and use the arrow keys to extend a selection. Press again to turn off."
            },
            {
                keys: "Shift + F8",
                action: "Add a non-adjacent cell or range to a selection of cells by using the arrow keys."
            },
            {
                keys: "Alt + Enter",
                action: "Start a new line in the same cell."
            },
            {
                keys: "Control + Enter",
                action: "Fill the selected cell range with the current entry."
            },
            {
                keys: "Shift + Enter",
                action: "Complete a cell entry and select the cell above."
            },
            {
                keys: "Control + Spacebar",
                action: "Select an entire column in a worksheet."
            },
            {
                keys: "Shift + Spacebar",
                action: "Select an entire row in a worksheet."
            },
            {
                keys: "Control + Shift + Spacebar",
                action: "Select all objects on a worksheet when an object is selected."
            },
            {
                keys: "Control + Shift + Home",
                action: "Extend the selection of cells to the beginning of the worksheet."
            },
            {
                keys: "Control + A or Control + Shift + Spacebar",
                action: "Select the current region if the worksheet contains data. Press a second time to select the current region and its summary rows. Press a third time to select the entire worksheet."
            },
            {
                keys: "Control + Shift + Asterisk sign (*)",
                action: "Select the current region around the active cell."
            },
            {
                keys: "Home",
                action: "Select the first command on the menu when a menu or submenu is visible."
            },
            {
                keys: "Control + Y",
                action: "Repeat the last command or action, if possible."
            },
            {
                keys: "Control + Z",
                action: "Undo the last action."
            },
            {
                keys: "While hovering over the collapsed items, press and hold the Shift key and scroll down.",
                action: "Expand grouped rows or columns."
            },
            {
                keys: "While hovering over the expanded items, press and hold the Shift key and scroll up.",
                action: "Collapse grouped rows or columns."
            }
        ]
            },
            {
                category: "Data Handling",
                description: "Keyboard shortcuts for working with data, functions, and the formula bar",
                shortcutData: [
            {
                keys: "Control + Alt + P",
                action: "Turn on or off tooltips for checking formulas directly in the formula bar or in the cell you're editing."
            },
            {
                keys: "F2",
                action: "Edit the active cell and put the insertion point at the end of its contents. Or, if editing is turned off for the cell, move the insertion point into the formula bar. If editing a formula, toggle Point mode off or on so you can use the arrow keys to create a reference."
            },
            {
                keys: "Control + Shift + U",
                action: "Expand or collapse the formula bar."
            },
            {
                keys: "Esc",
                action: "Cancel an entry in the cell or formula bar."
            },
            {
                keys: "Enter",
                action: "Complete an entry in the formula bar and select the cell below."
            },
            {
                keys: "Control + End",
                action: "Move the cursor to the end of the text when in the formula bar."
            },
            {
                keys: "Control + Shift + End",
                action: "Select all text in the formula bar from the cursor position to the end."
            },
            {
                keys: "F9",
                action: "Calculate all worksheets in all open workbooks."
            },
            {
                keys: "Shift + F9",
                action: "Calculate the active worksheet."
            },
            {
                keys: "Control + Alt + F9",
                action: "Calculate all worksheets in all open workbooks, regardless of whether they have changed since the last calculation."
            },
            {
                keys: "Control + Alt + Shift + F9",
                action: "Check dependent formulas, and then calculate all cells in all open workbooks, including cells not marked as needing to be calculated."
            },
            {
                keys: "Alt + Shift + F10",
                action: "Display the menu or message for an Error Checking button."
            },
            {
                keys: "Control + A",
                action: "Display the Function Arguments dialog box when the insertion point is to the right of a function name in a formula."
            },
            {
                keys: "Control + Shift + A",
                action: "Insert argument names and parentheses when the insertion point is to the right of a function name in a formula."
            },
            {
                keys: "Alt + Equal sign ( = )",
                action: "Insert the AutoSum formula"
            },
            {
                keys: "Control + E",
                action: "Invoke Flash Fill to automatically recognize patterns in adjacent columns and fill the current column"
            },
            {
                keys: "F4",
                action: "Cycle through all combinations of absolute and relative references in a formula if a cell reference or range is selected."
            },
            {
                keys: "Shift + F3",
                action: "Insert a function."
            },
            {
                keys: "Control + Shift + Straight quotation mark (\")",
                action: "Copy the value from the cell above the active cell into the cell or the formula bar."
            },
            {
                keys: "Alt + F1",
                action: "Create an embedded chart of the data in the current range."
            },
            {
                keys: "F11",
                action: "Create a chart of the data in the current range in a separate Chart sheet."
            },
            {
                keys: "Alt + M, M, D",
                action: "Define a name to use in references."
            },
            {
                keys: "F3",
                action: "Paste a name from the Paste Name dialog box (if names have been defined in the workbook)."
            },
            {
                keys: "Enter",
                action: "Move to the first field in the next record of a data form."
            },
            {
                keys: "Alt + F8",
                action: "Create, run, edit, or delete a macro."
            },
            {
                keys: "Alt + F11",
                action: "Open the Microsoft Visual Basic For Applications Editor."
            },
            {
                keys: "Alt + F12",
                action: "Open the Power Query Editor"
            }
        ]
            },
            {
                category: "Refreshing external data",
                description: "Use the following keys to refresh data from external data sources.",
                shortcutData: [
            {
                keys: "Esc",
                action: "Stop a refresh operation."
            },
            {
                keys: "Control + F5",
                action: "Refresh data in the current worksheet."
            },
            {
                keys: "Control + Alt + F5",
                action: "Refresh all data in the workbook."
            }
        ]
            },
            {
                category: "Power Pivot",
                description: "Use the following keyboard shortcuts with Power Pivot in Microsoft 365 and ​​​​​Office.",
                shortcutData: [
            {
                keys: "Shift + F10",
                action: "Open the context menu for the selected cell, column, or row."
            },
            {
                keys: "Control + A",
                action: "Select the entire table."
            },
            {
                keys: "Control + C",
                action: "Copy selected data."
            },
            {
                keys: "Control + D",
                action: "Delete the table."
            },
            {
                keys: "Control + M",
                action: "Move the table."
            },
            {
                keys: "Control + R",
                action: "Rename the table."
            },
            {
                keys: "Control + S",
                action: "Save the file."
            },
            {
                keys: "Control + Y",
                action: "Redo the last action."
            },
            {
                keys: "Control + Z",
                action: "Undo the last action."
            },
            {
                keys: "Control + Spacebar",
                action: "Select the current column."
            },
            {
                keys: "Shift + Spacebar",
                action: "Select the current row."
            },
            {
                keys: "Shift + Page down",
                action: "Select all cells from the current location to the last cell of the column."
            },
            {
                keys: "Shift + Page up",
                action: "Select all cells from the current location to the first cell of the column."
            },
            {
                keys: "Shift + End",
                action: "Select all cells from the current location to the last cell of the row."
            },
            {
                keys: "Shift + Home",
                action: "Select all cells from the current location to the first cell of the row."
            },
            {
                keys: "Control + Page up",
                action: "Move to the previous table."
            },
            {
                keys: "Control + Page down",
                action: "Move to the next table."
            },
            {
                keys: "Control + Home",
                action: "Move to the first cell in the upper-left corner of selected table."
            },
            {
                keys: "Control + End",
                action: "Move to the last cell in the lower-right corner of selected table."
            },
            {
                keys: "Control + Left arrow key",
                action: "Move to the first cell of the selected row."
            },
            {
                keys: "Control + Right arrow key",
                action: "Move to the last cell of the selected row."
            },
            {
                keys: "Control + Up arrow key",
                action: "Move to the first cell of the selected column."
            },
            {
                keys: "Control + Down arrow key",
                action: "Move to the last cell of selected column."
            },
            {
                keys: "Control + Esc",
                action: "Close a dialog box or cancel a process, such as a paste operation."
            },
            {
                keys: "Alt + Down arrow key",
                action: "Open the AutoFilter Menu dialog box."
            },
            {
                keys: "F5",
                action: "Open the Go To dialog box."
            },
            {
                keys: "F9",
                action: "Recalculate all formulas in the Power Pivot window."
            }
        ]
            }
    
        ],
        mac: [
            {
            category: "Frequently used shortcuts",
            description: "This table lists the most frequently used shortcuts in Excel.",
            shortcutData: [
        {
            keys: "Command(⌘) + V\nor\nControl + V",
            action: "Paste selection."
        },
        {
            keys: "Command(⌘) + C\nor\nControl + C",
            action: "Copy selection."
        },
        {
            keys: "Delete",
            action: "Clear selection."
        },
        {
            keys: "Command(⌘) + S\nor\nControl + S",
            action: "Save workbook."
        },
        {
            keys: "Command(⌘) + Z\nor\nControl + Z",
            action: "Undo action."
        },
        {
            keys: "Command(⌘) + Y\nor\nControl + Y\nor\nCommand(⌘) + Shift + Z",
            action: "Redo action."
        },
        {
            keys: "Command(⌘) + X\nor\nControl + X\nor\nShift + ",
            action: "Cut selection."
        },
        {
            keys: "Command(⌘) + B\nor\nControl + B",
            action: "Apply bold formatting."
        },
        {
            keys: "Command(⌘) + P\nor\nControl + P",
            action: "Print workbook."
        },
        {
            keys: "Option + F11",
            action: "Open Visual Basic."
        },
        {
            keys: "Command(⌘) + D\nor\nControl + D",
            action: "Fill cells down."
        },
        {
            keys: "Command(⌘) + R\nor\nControl + R",
            action: "Fill cells right."
        },
        {
            keys: "Control + Shift + Equal sign ( = )",
            action: "Insert cells."
        },
        {
            keys: "Command(⌘) + Hyphen (-)\nor\nControl + Hyphen (-)",
            action: "Delete cells."
        },
        {
            keys: "Command(⌘) + Equal sign ( = )\nor\nF9",
            action: "Calculate all open workbooks."
        },
        {
            keys: "Command(⌘) + W\nor\nControl + W",
            action: "Close window."
        },
        {
            keys: "Command(⌘) + Q",
            action: "Quit Excel."
        },
        {
            keys: "Control + G\nor\nF5",
            action: "Display the Go To dialog box."
        },
        {
            keys: "Command(⌘) + 1\nor\nControl + 1",
            action: "Display the Format Cells dialog box."
        },
        {
            keys: "Control + H\nor\nCommand(⌘) + Shift + H",
            action: "Display the Replace dialog box."
        },
        {
            keys: "Command(⌘) + Control + V\nor\nControl + Option + V\nor\nCommand(⌘) + Option + V",
            action: "Use Paste Special."
        },
        {
            keys: "Command(⌘) + U",
            action: "Apply underline formatting."
        },
        {
            keys: "Command(⌘) + I\nor\nControl + I",
            action: "Apply italic formatting."
        },
        {
            keys: "Command(⌘) + N\nor\nControl + N",
            action: "Open a new blank workbook."
        },
        {
            keys: "Command(⌘) + Shift + P",
            action: "Create a new workbook from template."
        },
        {
            keys: "Command(⌘) + Shift + S\nor\nF12",
            action: "Display the Save As dialog box."
        },
        {
            keys: "F1\nor\nCommand(⌘) + Forward slash (/)",
            action: "Display the Help window."
        },
        {
            keys: "Command(⌘) + A\nor\nCommand(⌘) + Shift + Spacebar",
            action: "Select all."
        },
        {
            keys: "Command(⌘) + Shift + F\nor\nControl + Shift + L",
            action: "Add or remove a filter."
        },
        {
            keys: "Command(⌘) + Option + R",
            action: "Minimize or maximize the ribbon tabs."
        },
        {
            keys: "Command(⌘) + O\nor\nControl + O",
            action: "Display the Open dialog box."
        },
        {
            keys: "F7",
            action: "Check spelling."
        },
        {
            keys: "Shift + F7",
            action: "Open the thesaurus."
        },
        {
            keys: "Shift + F3",
            action: "Display the Formula Builder."
        },
        {
            keys: "Command(⌘) + F3",
            action: "Open the Define Name dialog box."
        },
        {
            keys: "Command(⌘) + Return",
            action: "Insert or reply to a threaded comment."
        },
        {
            keys: "Command(⌘) + Shift + F3",
            action: "Open the Create names dialog box."
        },
        {
            keys: "Shift + F11",
            action: "Insert a new sheet. *"
        },
        {
            keys: "Command(⌘) + P\nor\nControl + P",
            action: "Print preview."
        }
    ]
            },
            {
                category: "Dialog Boxes",
                description: "Work in windows and dialog boxes",
                shortcutData: [
            {
                keys: "Command(⌘) + Option + R",
                action: "Expand or minimize the ribbon."
            },
            {
                keys: "Command(⌘) + Control + F",
                action: "Switch to full screen view."
            },
            {
                keys: "Command(⌘) + Tab",
                action: "Switch to the next application."
            },
            {
                keys: "Shift + Command(⌘) + Tab",
                action: "Switch to the previous application."
            },
            {
                keys: "Command(⌘) + W",
                action: "Close the active workbook window."
            },
            {
                keys: "Shift + Command(⌘) + 3",
                action: "Take a screenshot and save it on your desktop."
            },
            {
                keys: "Control + F9",
                action: "Minimize the active window."
            },
            {
                keys: "Control + F10\nor\nCommand(⌘) + F10",
                action: "Maximize or restore the active window."
            },
            {
                keys: "Command(⌘) + H",
                action: "Hide Excel."
            },
            {
                keys: "Tab key",
                action: "Move to the next box, option, control, or command."
            },
            {
                keys: "Shift + Tab",
                action: "Move to the previous box, option, control, or command."
            },
            {
                keys: "Esc",
                action: "Exit a dialog box or cancel an action."
            },
            {
                keys: "Return",
                action: "Perform the action assigned to the default button (the button with the bold outline)."
            },
            {
                keys: "Esc",
                action: "Cancel the command and close the dialog box or menu."
            }
        ]
            },
            {
                category: "Move and Scroll",
                description: "Move and scroll in a sheet or workbook.",
                shortcutData: [
            {
                keys: "Arrow keys",
                action: "Move one cell up, down, left, or right."
            },
            {
                keys: "Command(⌘) + Arrow key",
                action: "Move to the edge of the current data region."
            },
            {
                keys: "Home\nOn a MacBook, Fn + Left arrow key",
                action: "Move to the beginning of the row."
            },
            {
                keys: "Control + Home\nOn a MacBook, Control + Fn + Left arrow key",
                action: "Move to the beginning of the sheet."
            },
            {
                keys: "Control + End\nOn a MacBook, Control + Fn + Right arrow key",
                action: "Move to the last cell in use on the sheet."
            },
            {
                keys: "Page down\nOn a MacBook, Fn + Down arrow key",
                action: "Move down one screen."
            },
            {
                keys: "Page up\nOn a MacBook, Fn + Up arrow key",
                action: "Move up one screen."
            },
            {
                keys: "Option(⌥) + Page down\nOn a MacBook, Fn + Option(⌥) + Down arrow key",
                action: "Move one screen to the right."
            },
            {
                keys: "Option(⌥) + Page up\nOn a MacBook, Fn + Option(⌥) + Up arrow key",
                action: "Move one screen to the left."
            },
            {
                keys: "Control + Page down\nor\nOption(⌥) + Right arrow key",
                action: "Move to the next sheet in the workbook."
            },
            {
                keys: "Control + Page down\nor\nOption(⌥) + Left arrow key",
                action: "Move to the previous sheet in the workbook."
            },
            {
                keys: "Control + Delete",
                action: "Scroll to display the active cell."
            },
            {
                keys: "Control + G",
                action: "Display the Go To dialog box."
            },
            {
                keys: "Control + F\nor\nShift + F5",
                action: "Display the Find dialog box."
            },
            {
                keys: "Command(⌘) + F",
                action: "Access search (when in a cell or when a cell is selected)."
            },
            {
                keys: "Tab key",
                action: "Move between unlocked cells on a protected sheet."
            },
            {
                keys: "Shift, then scroll the mouse wheel up for left, down for right",
                action: "Scroll horizontally."
            }
        ]
            },
            {
                category: "Data Entry",
                description: "Enter data on a sheet.",
                shortcutData: [
            {
                keys: "F2",
                action: "Edit the selected cell."
            },
            {
                keys: "Return",
                action: "Complete a cell entry and move forward in the selection."
            },
            {
                keys: "Option(⌥) + Return or Control + Option(⌥) + Return",
                action: "Start a new line in the same cell."
            },
            {
                keys: "Command(⌘) + Return\nor\nControl + Return",
                action: "Fill the selected cell range with the text that you type."
            },
            {
                keys: "Shift + Return",
                action: "Complete a cell entry and move up in the selection."
            },
            {
                keys: "Tab key",
                action: "Complete a cell entry and move to the right in the selection."
            },
            {
                keys: "Shift + Tab",
                action: "Complete a cell entry and move to the left in the selection."
            },
            {
                keys: "Esc",
                action: "Cancel a cell entry."
            },
            {
                keys: "Delete",
                action: "Delete the character to the left of the insertion point or delete the selection."
            },
            {
                keys: "On a MacBook, Fn + Delete",
                action: "Delete the character to the right of the insertion point or delete the selection.\nNote: Some smaller keyboards do not have this key."
            },
            {
                keys: "Control + \nOn a MacBook, Control + Fn + Delete",
                action: "Delete text to the end of the line.\nNote: Some smaller keyboards do not have this key."
            },
            {
                keys: "Arrow keys",
                action: "Move one character up, down, left, or right."
            },
            {
                keys: "Home\nOn a MacBook, Fn + Left arrow key",
                action: "Move to the beginning of the line."
            },
            {
                keys: "Shift + F2",
                action: "Insert a note."
            },
            {
                keys: "Shift + F2",
                action: "Open and edit a cell note."
            },
            {
                keys: "Command(⌘) + Shift + F2",
                action: "Insert a threaded comment."
            },
            {
                keys: "Command(⌘) + Shift + F2",
                action: "Open and reply to a threaded comment."
            },
            {
                keys: "Control + D\nor\nCommand(⌘) + D",
                action: "Fill down."
            },
            {
                keys: "Control + R\nor\nCommand(⌘) + R",
                action: "Fill to the right."
            },
            {
                keys: "Control + L",
                action: "Define a name."
            }
        ]
            },
            {
                category: "Cell/Formula Bar",
                description: "Work in cells or the Formula bar.",
                shortcutData: [
            {
                keys: "Control + Option(⌥) + P",
                action: "Turn on or off tooltips for checking formulas directly in the formula bar."
            },
            {
                keys: "F2",
                action: "Edit the selected cell."
            },
            {
                keys: "Control + Shift + U",
                action: "Expand or collapse the formula bar."
            },
            {
                keys: "Delete",
                action: "Edit the active cell and then clear it or delete the preceding character in the active cell as you edit the cell contents."
            },
            {
                keys: "Return",
                action: "Complete a cell entry."
            },
            {
                keys: "Shift + Command(⌘) + Return\nor\nControl + Shift + Return",
                action: "Enter a formula as an array formula."
            },
            {
                keys: "Esc",
                action: "Cancel an entry in the cell or formula bar."
            },
            {
                keys: "Control + A",
                action: "Display the Formula Builder after you type a valid function name in a formula"
            },
            {
                keys: "Command(⌘) + K\nor\nControl + K",
                action: "Insert a hyperlink."
            },
            {
                keys: "Control + U",
                action: "Edit the active cell and position the insertion point at the end of the line."
            },
            {
                keys: "Shift + F3",
                action: "Open the Formula Builder."
            },
            {
                keys: "Shift + F9",
                action: "Calculate the active sheet."
            },
            {
                keys: "Shift + F10",
                action: "Display the context menu."
            },
            {
                keys: "Equal sign ( = )",
                action: "Start a formula."
            },
            {
                keys: "Command(⌘) + T\nor\nF4",
                action: "Toggle the formula reference style between absolute, relative, and mixed."
            },
            {
                keys: "Shift + Command(⌘) + T",
                action: "Insert the AutoSum formula."
            },
            {
                keys: "Control + Semicolon (;)",
                action: "Enter the date."
            },
            {
                keys: "Command(⌘) + Semicolon (;)",
                action: "Enter the time."
            },
            {
                keys: "Control + Shift + Inch mark/Straight double quote (\")",
                action: "Copy the value from the cell above the active cell into the cell or the formula bar."
            },
            {
                keys: "Control + Grave accent (`)",
                action: "Alternate between displaying cell values and displaying cell formulas."
            },
            {
                keys: "Control + Apostrophe (')",
                action: "Copy a formula from the cell above the active cell into the cell or the formula bar."
            },
            {
                keys: "Option(⌥) + Down arrow key",
                action: "Display the AutoComplete list."
            },
            {
                keys: "Control + L",
                action: "Define a name."
            },
            {
                keys: "Control + Option(⌥) + Command(⌘) + L",
                action: "Open the Smart Lookup pane."
            },
            {
                keys: "Control + Option(⌥) + F9",
                action: "Calculate all worksheets in all open workbooks."
            },
            {
                keys: "Control + Option(⌥) + Shift + F9",
                action: "Check dependent formulas, and then calculate all cells in all open workbooks."
            }
        ]
            },
            {
                category: "Data",
                description: "Format and edit data.",
                shortcutData: [
        {
            keys: "F2",
            action: "Edit the selected cell."
        },
        {
            keys: "Command(⌘) + T\nor\nControl + T",
            action: "Create a table."
        },
        {
            keys: "Command(⌘) + Option(⌥) + Return\nor\nControl + Option(⌥) + Return",
            action: "Insert a line break in a cell."
        },
        {
            keys: "Control + Command(⌘) + Spacebar",
            action: "Insert special characters like symbols, including emoji."
        },
        {
            keys: "Shift + Command(⌘) + Right angle bracket (>)",
            action: "Increase font size."
        },
        {
            keys: "Shift + Command(⌘) + Left angle bracket (<)",
            action: "Decrease font size."
        },
        {
            keys: "Command(⌘) + E",
            action: "Align center."
        },
        {
            keys: "Command(⌘) + L",
            action: "Align left."
        },
        {
            keys: "Shift + Command(⌘) + L",
            action: "Display the Modify Cell Style dialog box."
        },
        {
            keys: "Command(⌘) + 1",
            action: "Display the Format Cells dialog box."
        },
        {
            keys: "Control + Shift + Tilde (~)",
            action: "Apply the general number format."
        },
        {
            keys: "Control + Shift + Dollar sign ($)",
            action: "Apply the currency format with two decimal places (negative numbers appear in red with parentheses)."
        },
        {
            keys: "Control + Shift + Percent sign (%)",
            action: "Apply the percentage format with no decimal places."
        },
        {
            keys: "Control + Shift + Caret (^)",
            action: "Apply the exponential number format with two decimal places."
        },
        {
            keys: "Control + Shift + Number sign (#)",
            action: "Apply the date format with the day, month, and year."
        },
        {
            keys: "Control + Shift + At symbol (@)",
            action: "Apply the time format with the hour and minute, and indicate AM or PM."
        },
        {
            keys: "Control + Shift + Exclamation point (!)",
            action: "Apply the number format with two decimal places, thousands separator, and minus sign (-) for negative values."
        },
        {
            keys: "Command(⌘) + Option(⌥) + Zero (0)",
            action: "Apply the outline border around the selected cells."
        },
        {
            keys: "Command(⌘) + Option(⌥) + Right arrow key",
            action: "Add an outline border to the right of the selection."
        },
        {
            keys: "Command(⌘) + Option(⌥) + Left arrow key",
            action: "Add an outline border to the left of the selection."
        },
        {
            keys: "Command(⌘) + Option(⌥) + Up arrow key",
            action: "Add an outline border to the top of the selection."
        },
        {
            keys: "Command(⌘) + Option(⌥) + Down arrow key",
            action: "Add an outline border to the bottom of the selection."
        },
        {
            keys: "Command(⌘) + Option(⌥) + Hyphen",
            action: "Remove outline borders."
        },
        {
            keys: "Command(⌘) + B",
            action: "Apply or remove bold formatting."
        },
        {
            keys: "Command(⌘) + I",
            action: "Apply or remove italic formatting."
        },
        {
            keys: "Command(⌘) + U",
            action: "Apply or remove underline formatting."
        },
        {
            keys: "Shift + Command(⌘) + X",
            action: "Apply or remove strikethrough formatting."
        },
        {
            keys: "Command(⌘) + Right parenthesis ())\nor\nControl + Right parenthesis ())",
            action: "Hide a column."
        },
        {
            keys: "Shift + Command(⌘) + Right parenthesis ())\nor\nControl + Shift + Right parenthesis ())",
            action: "Unhide a column."
        },
        {
            keys: "Command(⌘) + Left parenthesis (()\nor\nControl + Left parenthesis (()",
            action: "Hide a row."
        },
        {
            keys: "Shift + Command(⌘) + Left parenthesis (()\nor\nControl + Shift + Left parenthesis (()",
            action: "Unhide a row."
        },
        {
            keys: "Control + U",
            action: "Edit the active cell."
        },
        {
            keys: "Esc",
            action: "Cancel an entry in the cell or the formula bar."
        },
        {
            keys: "Delete",
            action: "Edit the active cell and then clear it or delete the preceding character in the active cell as you edit the cell contents."
        },
        {
            keys: "Command(⌘) + V",
            action: "Paste text into the active cell."
        },
        {
            keys: "Return",
            action: "Complete a cell entry"
        },
        {
            keys: "Command(⌘) + Return\nor\nControl + Return",
            action: "Give selected cells the current cell's entry."
        },
        {
            keys: "Shift + Command(⌘) + Return\nor\nControl + Shift + Return",
            action: "Enter a formula as an array formula."
        },
        {
            keys: "Control + A",
            action: "Display the Formula Builder after you type a valid function name in a formula"
        }
    ]
            },
            {
                category: "Selection",
                description: "Select cells, columns, or rows.",
                shortcutData: [
        {
            keys: "Shift  +  Arrow key",
            action: "Extend the selection by one cell."
        },
        {
            keys: "Shift  +  Command(⌘)  +  Arrow key",
            action: "Extend the selection to the last nonblank cell in the same column or row as the active cell."
        },
        {
            keys: "Shift  +  Home\nOn a MacBook, Shift  +  Fn  +  Left arrow key",
            action: "Extend the selection to the beginning of the row."
        },
        {
            keys: "Control  +  Shift  +  Home\nOn a MacBook, Control  +  Shift  +  Fn  +  Left arrow key",
            action: "Extend the selection to the beginning of the sheet."
        },
        {
            keys: "Control  +  Shift  +  End\nOn a MacBook, Control  +  Shift  +  Fn  +  Right arrow key",
            action: "Extend the selection to the last cell used\non the sheet (lower-right corner)."
        },
        {
            keys: "Control  +  Spacebar",
            action: "Select the entire column. *"
        },
        {
            keys: "Shift  +  Spacebar",
            action: "Select the entire row."
        },
        {
            keys: "Command(⌘)  +  A",
            action: "Select the current region or entire sheet. Press more than once to expand the selection."
        },
        {
            keys: "Shift  +  Command(⌘)  +  Asterisk (*)",
            action: "Select only visible cells."
        },
        {
            keys: "Shift  +  Delete\n(not the forward delete key  found on full keyboards)",
            action: "Select only the active cell when multiple cells are selected."
        },
        {
            keys: "Shift  +  Page down\nOn a MacBook, Shift  +  Fn  +  Down arrow key",
            action: "Extend the selection down one screen."
        },
        {
            keys: "Shift  +  Page up\nOn a MacBook, Shift  +  Fn  +  Up arrow key",
            action: "Extend the selection up one screen"
        },
        {
            keys: "Control  +  6",
            action: "Alternate between hiding objects, displaying objects,\nand displaying placeholders for objects."
        },
        {
            keys: "F8",
            action: "Turn on the capability to extend a selection\nby using the arrow keys."
        },
        {
            keys: "Shift  +  F8",
            action: "Add another range of cells to the selection."
        },
        {
            keys: "Control  +  Forward slash (/)",
            action: "Select the current array, which is the array that the\nactive cell belongs to."
        },
        {
            keys: "Control  +  Backward slash (\\)",
            action: "Select cells in a row that don't match the value\nin the active cell in that row.\nYou must select the row starting with the active cell."
        },
        {
            keys: "Control  +  Shift  +  Left bracket ([)",
            action: "Select only cells that are directly referred to by formulas in the selection."
        },
        {
            keys: "Control  +  Shift  +  Left brace ({)",
            action: "Select all cells that are directly or indirectly referred to by formulas in the selection."
        },
        {
            keys: "Control  +  Right bracket (])",
            action: "Select only cells with formulas that refer directly to the active cell."
        },
        {
            keys: "Control  +  Shift  +  Right brace (})",
            action: "Select all cells with formulas that refer directly or indirectly to the active cell."
        },
        {
            keys: " Command(⌘) + C\nor\nControl + V",
            action: "Copy a selection."
        },
        {
            keys: " Command(⌘) + V\nor\nControl + V",
            action: "Paste a selection."
        },
        {
            keys: " Command(⌘) + X\nor\nControl + X",
            action: "Cut a selection."
        },
        {
            keys: "Delete",
            action: "Clear a selection."
        },
        {
            keys: "Control + Hyphen",
            action: "Delete the selection."
        },
        {
            keys: " Command(⌘) + Z",
            action: "Undo the last action."
        },
        {
            keys: " Command(⌘) + Right parenthesis ())\nor\nControl + Right parenthesis ())",
            action: "Hide a column."
        },
        {
            keys: " Command(⌘) + Shift + Right parenthesis ())\nor\nControl + Shift + Right parenthesis ())",
            action: "Unhide a column."
        },
        {
            keys: " Command(⌘) + Left parenthesis (()\nor\nControl + Left parenthesis (()",
            action: "Hide a row."
        },
        {
            keys: " Command(⌘) + Shift + Left parenthesis (()\nor\nControl + Shift + Left parenthesis (()",
            action: "Unhide a row."
        },
        {
            keys: "Hold the Shift key while you drag a selected row, column, or selected cells to move the selected cells and drop to insert them in a new location.\nIf you don't hold the Shift key while you drag and drop, the selected cells will be cut from the original location and pasted to the new location (not inserted).",
            action: "Move selected rows, columns, or cells."
        },
        {
            keys: "Return",
            action: "Move from top to bottom within the selection (down). *"
        },
        {
            keys: "Shift + Return",
            action: "Move from bottom to top within the selection (up). *"
        },
        {
            keys: "Tab key",
            action: "Move from left to right within the selection,\nor move down one cell if only one column is selected."
        },
        {
            keys: "Shift + Tab",
            action: "Move from right to left within the selection,\nor move up one cell if only one column is selected."
        },
        {
            keys: "Control + Period (.)",
            action: "Move clockwise to the next corner of the selection."
        },
        {
            keys: " Command(⌘) + Shift + K",
            action: "Group selected cells."
        },
        {
            keys: " Command(⌘) + Shift + J",
            action: "Ungroup selected cells."
        }
    ]
            },
            {
                category: "Charts",
                description: "Using Charts.",
                shortcutData: [
                    {
                        keys: "F11",
                        action: "Insert a new chart sheet."
                    },
                    {
                        keys: "Arrow Keys",
                        action: "Cycle through chart object selection."
                    }
    ]
            },
            {
                category: "PivotTable",
                description: "Sort, filter, and use PivotTable reports",
                shortcutData: [
                    {
                        keys: "Command(⌘) + Shift + R",
                        action: "Open the Sort dialog box."
                    },
                    {
                        keys: "Command(⌘) + Shift + L OR Control + Shift + L",
                        action: "Add or remove a filter."
                    },
                    {
                        keys: "Option(⌥) + Down Arrow Key",
                        action: "Display the Filter list or PivotTable page field pop-up menu for the selected cell."
                    }
    ]
            },
            {
                category: "Outline",
                description: "Used for outlining data.",
                shortcutData: [
                    {
                        keys: "Control + 8",
                        action: "Display or hide outline symbols."
                    },
                    {
                        keys: "Control + 9",
                        action: "Hide selected rows."
                    },
                    {
                        keys: "Control + Shift + Left parenthesis ( ( )",
                        action: "Unhide selected rows."
                    },
                    {
                        keys: "Control + Zero (0)",
                        action: "Hide selected columns."
                    },
                    {
                        keys: "Control + Shift + Right parenthesis ( ) )",
                        action: "Unhide selected columns."
                    }
    ]
            },
            {
                category: "Function Keys",
                description: "The following table provides the function key shortcuts for Excel for Mac.",
                shortcutData: [
        {
            keys: "F1",
            action: "Display the Help window."
        },
        {
            keys: "F2",
            action: "Edit the selected cell."
        },
        {
            keys: "Shift + F2",
            action: "Insert a note or open and edit a cell note."
        },
        {
            keys: "Command(⌘) + Shift + F2",
            action: "Insert a threaded comment or open and reply to a threaded comment."
        },
        {
            keys: "Option(⌥) + F2",
            action: "Open the Save dialog box."
        },
        {
            keys: "Shift + F3",
            action: "Open the Formula Builder."
        },
        {
            keys: "Command(⌘) + F3",
            action: "Open the Define Name dialog box."
        },
        {
            keys: "Command(⌘) + F4",
            action: "Close a window or a dialog box."
        },
        {
            keys: "F5",
            action: "Display the Go To dialog box."
        },
        {
            keys: "Shift + F5",
            action: "Display the Find dialog box."
        },
        {
            keys: "Control + F5",
            action: "Move to the Search Sheet dialog box."
        },
        {
            keys: "F6 or Shift + F6",
            action: "Switch focus between the worksheet, ribbon, task pane, and status bar."
        },
        {
            keys: "F7",
            action: "Check spelling."
        },
        {
            keys: "Shift + F7\nor\nControl + Option(⌥) + Command(⌘) + R",
            action: "Open the thesaurus."
        },
        {
            keys: "F8",
            action: "Extend the selection."
        },
        {
            keys: "Shift + F8",
            action: "Add to the selection."
        },
        {
            keys: "Option(⌥) + F8",
            action: "Display the Macro dialog box."
        },
        {
            keys: "F9",
            action: "Calculate all open workbooks."
        },
        {
            keys: "Shift + F9",
            action: "Calculate the active sheet."
        },
        {
            keys: "Control + F9",
            action: "Minimize the active window."
        },
        {
            keys: "Shift + F10",
            action: "Display the context menu, or \"right click\" menu."
        },
        {
            keys: "Option(⌥) + Shift + F10",
            action: "Display a pop-up menu (on object button menu), such as by clicking the button after you paste into a sheet."
        },
        {
            keys: "Control + F10\nor\nCommand(⌘) + F10",
            action: "Maximize or restore the active window."
        },
        {
            keys: "F11",
            action: "Insert a new chart sheet.*"
        },
        {
            keys: "Shift + F11",
            action: "Insert a new sheet.*"
        },
        {
            keys: "Command(⌘) + F11",
            action: "Insert an Excel 4.0 macro sheet."
        },
        {
            keys: "Option(⌥) + F11",
            action: "Open Visual Basic."
        },
        {
            keys: "F12",
            action: "Display the Save As dialog box."
        },
        {
            keys: "Command(⌘) + F12",
            action: "Display the Open dialog box."
        },
        {
            keys: "Option(⌥) + F12",
            action: "Open the Power Query Editor"
        }
    ]
            },
        ]
    },
    {
        name: "Word",
        icon: "/icons8-word-144.png",
        windows:[
  {
    category: "Frequently used shortcuts",
    description: "Common shortcuts for tasks like opening, saving, and closing a document, as well as basic editing and formatting commands.",
    shortcutData: [
      { keys: "Control + O", action: "Open a document" },
      { keys: "Control + N", action: "Create a new document" },
      { keys: "Control + S", action: "Save the document" },
      { keys: "Control + W", action: "Close the document" },
      { keys: "Control + X", action: "Cut the selected content" },
      { keys: "Control + C", action: "Copy the selected content" },
      { keys: "Control + V", action: "Paste the contents" },
      { keys: "Control + Shift + V", action: "Paste text only" },
      { keys: "Control + A", action: "Select all document content" },
      { keys: "Control + B", action: "Apply bold formatting" },
      { keys: "Control + I", action: "Apply italic formatting" },
      { keys: "Control + U", action: "Apply underline formatting" },
      { keys: "Control + [", action: "Decrease font size by 1 point" },
      { keys: "Control + ]", action: "Increase font size by 1 point" },
      { keys: "Control + E", action: "Center the text" },
      { keys: "Control + L", action: "Align the text to the left" },
      { keys: "Control + R", action: "Align the text to the right" },
      { keys: "Esc", action: "Cancel a command" },
      { keys: "Control + Z", action: "Undo the previous action" },
      { keys: "Control + Y", action: "Redo the previous action" },
      { keys: "Control + Plus sign ( + )", action: "Zoom in" },
      { keys: "Control + Minus sign (-)", action: "Zoom out" },
      { keys: "Control + Alt + S", action: "Split the document window" },
      { keys: "Alt + Shift + C or Control + Alt + S", action: "Remove the document window split" },
    ]
  },
  {
    category: "Navigate the document",
    description: "Shortcuts for moving the cursor by a word, paragraph, or page, and for jumping to the beginning or end of a line or document.",
    shortcutData: [
      { keys: "Control + Left arrow key", action: "Move the cursor one word to the left." },
      { keys: "Control + Right arrow key", action: "Move the cursor one word to the right." },
      { keys: "Control + Up arrow key", action: "Move the cursor up by one paragraph." },
      { keys: "Control + Down arrow key", action: "Move the cursor down by one paragraph." },
      { keys: "End", action: "Move the cursor to the end of the current line." },
      { keys: "Home", action: "Move the cursor to the beginning the current line." },
      { keys: "Control + Alt + Page up", action: "Move the cursor to the top of the screen." },
      { keys: "Control + Alt + Page down", action: "Move the cursor to the bottom of the screen." },
      { keys: "Page up", action: "Move the cursor by scrolling the document view up by one screen." },
      { keys: "Page down", action: "Move the cursor by scrolling the document view down by one screen." },
      { keys: "Control + Page down", action: "Move the cursor to the top of the next page." },
      { keys: "Control + Page up", action: "Move the cursor to the top of the previous page." },
      { keys: "Control + End", action: "Move the cursor to the end of the document." },
      { keys: "Control + Home", action: "Move to the beginning of the document." },
      { keys: "Shift + F5", action: "Move to the location of the previous revision." },
      { keys: "Shift + F5, immediately after opening the document.", action: "Move to the location of the last revision made before the document was last closed." },
      { keys: "Control + Alt + 5, and then the Tab key repeatedly", action: "Cycle through floating shapes, such as text boxes or images." },
      { keys: "Esc", action: "Exit the floating shape navigation and return to the normal navigation." },
      { keys: "Control + F", action: "Display the Navigation task pane, to search within the document content." },
      { keys: "Control + G", action: "Display the Go To dialog box, to navigate to a specific page, bookmark, footnote, table, comment, graphic, or other location." },
      { keys: "Control + Alt + Z", action: "Cycle through the locations of the four previous changes made to the document." },
    ]
  },
  {
    category: "Select text and graphics",
    description: "Shortcuts for selecting text by character, word, line, or paragraph, as well as for extending and reducing a selection.",
    shortcutData: [
      { keys: "Shift + Arrow keys", action: "Select text." },
      { keys: "Control + Shift + Left arrow key", action: "Select the word to the left." },
      { keys: "Control + Shift + Right arrow key", action: "Select the word to the right." },
      { keys: "Shift + Home", action: "Select from the current position to the beginning of the current line." },
      { keys: "Shift + End", action: "Select from the current position to the end of the current line." },
      { keys: "Control + Shift + Up arrow key", action: "Select from the current position to the beginning of the current paragraph." },
      { keys: "Control + Shift + Down arrow key", action: "Select from the current position to the end of the current paragraph." },
      { keys: "Shift + Page up", action: "Select from the current position to the top of the screen." },
      { keys: "Shift + Page down", action: "Select from the current position to the bottom of the screen." },
      { keys: "Control + Shift + Home", action: "Select from the current position to the beginning of the document." },
      { keys: "Control + Shift + End", action: "Select from the current position to the end of the document." },
      { keys: "Control + Alt + Shift + Page down", action: "Select from the current position to the bottom of the window." },
      { keys: "Control + A", action: "Select all document content." },
    ]
  },
  {
    category: "Edit text and graphics",
    description: "Shortcuts for deleting words, cutting, copying, and pasting content, and for defining and inserting AutoText blocks.",
    shortcutData: [
      { keys: "Control + Backspace", action: "Delete one word to the left." },
      { keys: "Control + Delete", action: "Delete one word to the right." },
      { keys: "Alt + H, F, O", action: "Open the Clipboard task pane and enable the Office Clipboard." },
      { keys: "Control + X", action: "Cut the selected content to the Clipboard." },
      { keys: "Control + C", action: "Copy the selected content to the Clipboard." },
      { keys: "Control + V", action: "Paste the contents of the Clipboard." },
      { keys: "F2, move the cursor to the destination, and then press Enter.", action: "Move the selected content to a specific location." },
      { keys: "Shift + F2, move the cursor to the destination, and then press Enter.", action: "Copy the selected content to a specific location." },
      { keys: "Alt + F3", action: "Define an AutoText block with the selected content." },
      { keys: "The first few characters of the AutoText block, and then press Enter when the ScreenTip appears.", action: "Insert an AutoText block." },
      { keys: "Control + F3", action: "Cut the selected content to the Spike." },
      { keys: "Control + Shift + F3", action: "Paste the contents of the Spike." },
      { keys: "Control + Alt + C", action: "Copy the selected text formatting." },
      { keys: "Control + Alt + V", action: "Paste the selected text formatting." },
      { keys: "Control + Shift + V", action: "Paste text only." },
      { keys: "Alt + Shift + R", action: "Copy the header or footer used in the previous section." },
      { keys: "Control + H", action: "Display the Replace dialog box." },
      { keys: "Alt + N, J, J", action: "Display the Object dialog box." },
      { keys: "Alt + N, M", action: "Insert a SmartArt graphic." },
      { keys: "Alt + N, W", action: "Insert a WordArt graphic." },
      { keys: "Control + D or Control + Shift + F", action: "Display the Font dialog box." },
      { keys: "Control + Shift + Right angle bracket (>)", action: "Increase the font size." },
      { keys: "Control + Shift + Left angle bracket (<)", action: "Decrease the font size." },
      { keys: "Control + Shift + A", action: "Change the text to all upper case." },
      { keys: "Control + Shift + H", action: "Hide the selected text." },
      { keys: "Control + B", action: "Apply bold formatting." },
      { keys: "Control + Shift + D", action: "Apply double-underline formatting." },
      { keys: "Control + I", action: "Apply italic formatting." },
      { keys: "Control + Shift + K", action: "Apply small caps formatting." },
      { keys: "Control + Shift + Q", action: "Change the selected text to the Symbol font." },
    ]
  },
  {
    category: "Align and format paragraphs",
    description: "Shortcuts for centering, justifying, and aligning paragraphs to the left or right, as well as for indenting.",
    shortcutData: [
      { keys: "Control + E", action: "Center the paragraph." },
      { keys: "Control + J", action: "Justify the paragraph." },
      { keys: "Control + L", action: "Align the paragraph to the left." },
      { keys: "Control + R", action: "Align the paragraph to the right." },
      { keys: "Control + M", action: "Indent the paragraph." },
      { keys: "Control + Shift + M", action: "Remove a paragraph indent." },
      { keys: "Control + T", action: "Create a hanging indent." },
      { keys: "Control + Shift + T", action: "Remove a hanging indent." },
      { keys: "Control + Q", action: "Remove paragraph formatting." },
      { keys: "Control + 1", action: "Apply single spacing to the paragraph." },
      { keys: "Control + 2", action: "Apply double spacing to the paragraph." },
      { keys: "Control + 5", action: "Apply 1.5-line spacing to the paragraph." },
      { keys: "Control + Alt + K", action: "Enable AutoFormat." },
      { keys: "Control + Shift + N", action: "Apply the Normal style." },
      { keys: "Control + Alt + 1", action: "Apply the Heading 1 style." },
      { keys: "Control + Alt + 2", action: "Apply the Heading 2 style." },
      { keys: "Control + Alt + 3", action: "Apply the Heading 3 style." },
      { keys: "Control + Shift + S", action: "Display the Apply Styles task pane." },
      { keys: "Control + Alt + Shift + S", action: "Display the Styles task pane." },
    ]
  },
  {
    category: "Work with tables",
    description: "Shortcuts for moving between cells, rows, and columns, and for selecting table content.",
    shortcutData: [
      { keys: "Tab key", action: "Move to the next cell in the row and select its content." },
      { keys: "Shift + Tab", action: "Move to the previous cell in the row and select its content." },
      { keys: "Alt + Home", action: "Move to the first cell in the row." },
      { keys: "Alt + End", action: "Move to the last cell in the row." },
      { keys: "Alt + Page up", action: "Move to the first cell in the column." },
      { keys: "Alt + Page down", action: "Move to the last cell in the column." },
      { keys: "Up arrow key", action: "Move to the previous row." },
      { keys: "Down arrow key", action: "Move to the next row." },
      { keys: "Alt + Shift + Up arrow key", action: "Move one row up." },
      { keys: "Alt + Shift + Down arrow key", action: "Move one row down." },
      { keys: "Shift + Arrow keys", action: "Extend a selection to adjacent cells." },
      { keys: "Shift + Up or Down arrow key", action: "Select a column." },
      { keys: "Shift + Alt + End or Home", action: "Select a row." },
      { keys: "Alt + 5 on the numeric keypad, with Num Lock switched off", action: "Select the whole table." },
    ]
  },
  {
    category: "Ribbon keyboard shortcuts",
    description: "Shortcuts for navigating the ribbon and opening specific tabs and commands.",
    shortcutData: [
      { keys: "Alt + Q, then enter the search term.", action: "Move to the Tell Me or Search field on the Ribbon to search for assistance or Help content." },
      { keys: "Alt + F", action: "Open the File page to use Backstage view." },
      { keys: "Alt + H", action: "Open the Home tab to use common formatting commands, paragraph styles, and the Find tool." },
      { keys: "Alt + N", action: "Open the Insert tab to insert tables, pictures and shapes, headers, or text boxes." },
      { keys: "Alt + G", action: "Open the Design tab to use themes, colors, and effects, such as page borders." },
      { keys: "Alt + P", action: "Open the Layout tab to work with page margins, page orientation, indentation, and spacing." },
      { keys: "Alt + S", action: "Open the References tab to add a table of contents, footnotes, or a table of citations." },
      { keys: "Alt + M", action: "Open the Mailings tab to manage Mail Merge tasks and to work with envelopes and labels." },
      { keys: "Alt + R", action: "Open the Review tab to use Spell Check, set proofing languages, and to track and review changes to your document." },
      { keys: "Alt + W", action: "Open the View tab to choose a document view or mode, such as Read Mode or Outline view. You can also set the zoom magnification and manage multiple document windows." },
      { keys: "Alt or F10", action: "Select the active tab on the ribbon and activate the access keys." },
      { keys: "Tab key or Shift + Tab", action: "Move the focus to commands on the ribbon." },
      { keys: "Control + Left or Right arrow key", action: "Move between command groupings on the ribbon." },
      { keys: "Arrow keys", action: "Move among the items on the ribbon." },
      { keys: "Control + Shift + F10", action: "Show the tooltip for the ribbon element currently in focus." },
      { keys: "Spacebar or Enter", action: "Activate the selected button." },
      { keys: "Down arrow key", action: "Open the list for the selected command." },
      { keys: "Alt + Down arrow key", action: "Open the menu for the selected button." },
      { keys: "Down arrow key (when a menu or submenu is open)", action: "Move to the next command." },
      { keys: "Control + F1", action: "Expand or collapse the ribbon." },
      { keys: "Shift + F10", action: "Open the context menu." },
      { keys: "Left arrow key", action: "Move to the submenu when a main menu is open or selected." },
    ]
  },
  {
    category: "Preview and print documents",
    description: "Shortcuts for printing, switching to print preview, and navigating within the preview.",
    shortcutData: [
      { keys: "Control + P", action: "Print the document." },
      { keys: "Control + Alt + I", action: "Switch to print preview." },
      { keys: "Arrow keys", action: "Move around the preview page when zoomed in." },
      { keys: "Page up or Page down", action: "Move by one preview page when zoomed out." },
      { keys: "Control + Home", action: "Move to the first preview page when zoomed out." },
      { keys: "Control + End", action: "Move to the last preview page when zoomed out." },
    ]
  },
],
        mac: [
  {
    category: "Frequently used shortcuts",
    description: "Common shortcuts for tasks like opening, saving, and creating documents (Control+O, Control+N, Control+S), editing text (Control+X, Control+C, Control+V), and formatting (Control+B for bold, Control+I for italic). It also includes shortcuts for zooming and undoing/redoing actions.",
    shortcutData: [
      { keys: "Command(⌘)  +  O", action: "Open a document" },
      { keys: "Command(⌘)  +  N", action: "Create a new document" },
      { keys: "Command(⌘)  +  S", action: "Save the document" },
      { keys: "Command(⌘)  +  X", action: "Cut the selected content" },
      { keys: "Command(⌘)  +  C", action: "Copy the selected content" },
      { keys: "Command(⌘)  +  V", action: "Paste the contents" },
      { keys: "Command(⌘)  +  Shift  +  V", action: "Paste text only" },
      { keys: "Command(⌘)  +  A", action: "Select all document content" },
      { keys: "Command(⌘)  +  B", action: "Apply bold formatting" },
      { keys: "Command(⌘)  +  I", action: "Apply italic formatting" },
      { keys: "Command(⌘)  +  U", action: "Apply underline formatting" },
      { keys: "Command(⌘)  +  ]", action: "Increase font size by 1 point" },
      { keys: "Command(⌘)  +  [", action: "Decrease font size by 1 point" },
      { keys: "Shift  +  F1", action: "Show all formatting" },
      { keys: "F10", action: "Show Key Tips" },
      { keys: "Command(⌘)  +  E", action: "Center the text" },
      { keys: "Command(⌘)  +  L", action: "Align the text to the left" },
      { keys: "Command(⌘)  +  R", action: "Align the text to the right" },
      { keys: "Esc", action: "Cancel a command" },
      { keys: "Command(⌘)  +  Z", action: "Undo the previous action" },
      { keys: "Command(⌘)  +  Y", action: "Redo the previous action" },
      { keys: "Command(⌘)  +  Plus sign ( + )", action: "Zoom in" },
      { keys: "Command(⌘)  +  Minus sign (-)", action: "Zoom out" },
      { keys: "Command(⌘)  +  Option(⌥)  +  S", action: "Split the document window" },
    ]
  },
  {
    category: "Use the Access Keys for ribbon tabs",
    description: "Shortcuts that use the Alt key to open specific tabs on the ribbon, such as Alt + H for the Home tab and Alt + N for the Insert tab.",
    shortcutData: [
      { keys: "Alt  +  Q", action: "Open the Tell Me or Search field on the Ribbon to search for assistance or Help content." },
      { keys: "Alt  +  F", action: "Open the File page to use Backstage view." },
      { keys: "Alt  +  H", action: "Open the Home tab to use common formatting commands, paragraph styles, and the Find tool." },
      { keys: "Alt  +  N", action: "Open the Insert tab to insert tables, pictures and shapes, headers, or text boxes." },
      { keys: "Alt  +  G", action: "Open the Design tab to use themes, colors, and effects, such as page borders." },
      { keys: "Alt  +  P", action: "Open the Layout tab to work with page margins, page orientation, indentation, and spacing." },
      { keys: "Alt  +  S", action: "Open the References tab to add a table of contents, footnotes, or a table of citations." },
      { keys: "Alt  +  M", action: "Open the Mailings tab to manage Mail Merge tasks and to work with envelopes and labels." },
      { keys: "Alt  +  R", action: "Open the Review tab to use Spell Check, set proofing languages, and to track and review changes to your document." },
      { keys: "Alt  +  W", action: "Open the View tab to choose a document view or mode, such as Read Mode or Outline view. You can also set the zoom magnification and manage multiple document windows." },
    ]
  },
  {
    category: "Work in the ribbon with the keyboard",
    description: "Shortcuts for navigating and interacting with the ribbon itself, including moving between tabs and command groupings using arrow keys and Tab, and activating selected buttons with the Spacebar or Enter key.",
    shortcutData: [
      { keys: "F10", action: "Display the Key Tips to select the active tab on the ribbon." },
      { keys: "Alt", action: "Display the Key Tips to select the active tab on the ribbon." },
      { keys: "Tab or Shift  +  Tab", action: "Move the focus to commands on the ribbon." },
      { keys: "Command(⌘)  +  Left or Right arrow key", action: "Move between command groupings on the ribbon." },
      { keys: "Arrow keys", action: "Move among the items on the ribbon." },
      { keys: "Spacebar or Enter", action: "Activate the selected button." },
      { keys: "Down arrow key", action: "Open the list for the selected command." },
      { keys: "Alt  +  Down arrow key", action: "Open the menu for the selected button." },
      { keys: "Down arrow key (when a menu or submenu is open)", action: "Move to the next command." },
      { keys: "Command(⌘)  +  F1", action: "Expand or collapse the ribbon." },
      { keys: "Shift  +  F10", action: "Open the context menu." },
      { keys: "Left arrow key", action: "Move to the submenu when a main menu is open or selected." },
    ]
  },
  {
    category: "Navigate the document",
    description: "Shortcuts for moving the cursor within a document, such as moving by word (Cmd + Left/Right arrow), by paragraph (Cmd + Up/Down arrow), and to the beginning or end of the document (Cmd + Home, Cmd + End).",
    shortcutData: [
      { keys: "Option(⌥)  +  Left arrow", action: "Move the cursor one word to the left." },
      { keys: "Option(⌥)  +  Right arrow", action: "Move the cursor one word to the right." },
      { keys: "Option(⌥)  +  Up arrow", action: "Move the cursor up by one paragraph." },
      { keys: "Option(⌥)  +  Down arrow", action: "Move the cursor down by one paragraph." },
      { keys: "Command(⌘)  +  Left arrow", action: "Move the cursor to the beginning of the current line." },
      { keys: "Command(⌘)  +  Right arrow", action: "Move the cursor to the end of the current line." },
      { keys: "Option(⌥)  +  Page up", action: "Move the cursor to the top of the screen." },
      { keys: "Option(⌥)  +  Page down", action: "Move the cursor to the bottom of the screen." },
      { keys: "Page up", action: "Move the cursor by scrolling the document view up by one screen." },
      { keys: "Page down", action: "Move the cursor by scrolling the document view down by one screen." },
      { keys: "Command(⌘)  +  Page down", action: "Move the cursor to the top of the next page." },
      { keys: "Command(⌘)  +  Page up", action: "Move the cursor to the top of the previous page." },
      { keys: "Command(⌘)  +  End", action: "Move the cursor to the end of the document." },
      { keys: "Command(⌘)  +  Home", action: "Move the cursor to the beginning of the document." },
      { keys: "Shift  +  F5", action: "Move the cursor to the location of the previous revision." },
      { keys: "Command(⌘)  +  G", action: "Display the Go To dialog box, to navigate to a specific page, bookmark, footnote, table, comment, graphic, or other location." },
      { keys: "Command(⌘)  +  F", action: "Display the Navigation task pane, to search within the document content." },
    ]
  },
  {
    category: "Preview and print documents",
    description: "Shortcuts for printing (Cmd + P) and for navigating within print preview mode using arrow keys, Page Up/Down, Cmd + Home, and Cmd + End.",
    shortcutData: [
      { keys: "Command(⌘)  +  P", action: "Print the document." },
      { keys: "Command(⌘)  +  Option(⌥)  +  I", action: "Switch to print preview." },
      { keys: "Arrow keys", action: "Move around the preview page when zoomed in." },
      { keys: "Page up or Page down", action: "Move by one preview page when zoomed out." },
      { keys: "Command(⌘)  +  Home", action: "Move to the first preview page when zoomed out." },
      { keys: "Command(⌘)  +  End", action: "Move to the last preview page when zoomed out." },
    ]
  },
  {
    category: "Select text and graphics",
    description: "Shortcuts for selecting text, from a single word (Cmd + Shift + Left/Right arrow) to the entire document (Cmd + A), and for extending a selection.",
    shortcutData: [
      { keys: "Shift  +  Arrow keys", action: "Select text." },
      { keys: "Option(⌥)  +  Shift  +  Left arrow", action: "Select the word to the left." },
      { keys: "Option(⌥)  +  Shift  +  Right arrow", action: "Select the word to the right." },
      { keys: "Shift  +  Home", action: "Select from the current position to the beginning of the current line." },
      { keys: "Shift  +  End", action: "Select from the current position to the end of the current line." },
      { keys: "Command(⌘)  +  Shift  +  Up arrow", action: "Select from the current position to the beginning of the current paragraph." },
      { keys: "Command(⌘)  +  Shift  +  Down arrow", action: "Select from the current position to the end of the current paragraph." },
      { keys: "Shift  +  Page up", action: "Select from the current position to the top of the screen." },
      { keys: "Shift  +  Page down", action: "Select from the current position to the bottom of the screen." },
      { keys: "Command(⌘)  +  Shift  +  Home", action: "Select from the current position to the beginning of the document." },
      { keys: "Command(⌘)  +  Shift  +  End", action: "Select from the current position to the end of the document." },
      { keys: "Command(⌘)  +  A", action: "Select all document content." },
      { keys: "F8", action: "Turn on extend mode." },
      { keys: "Shift  +  F8", action: "Reduce the size of the selection." },
      { keys: "Esc", action: "Turn off extend mode." },
    ]
  },
  {
    category: "Edit text and graphics",
    description: "Shortcuts for deleting words, cutting, copying, and pasting content, and for defining and inserting AutoText blocks.",
    shortcutData: [
      { keys: "Option(⌥)  +  Delete", action: "Delete one word to the left." },
      { keys: "Command(⌘)  +  Delete", action: "Delete the text from the current position to the beginning of the line." },
      { keys: "Command(⌘)  +  X", action: "Cut the selected content to the Clipboard." },
      { keys: "Command(⌘)  +  C", action: "Copy the selected content to the Clipboard." },
      { keys: "Command(⌘)  +  V", action: "Paste the contents of the Clipboard." },
      { keys: "Command(⌘)  +  Shift  +  V", action: "Paste text only." },
      { keys: "Alt  +  F3", action: "Define an AutoText block with the selected content." },
      { keys: "Command(⌘)  +  Option(⌥)  +  C", action: "Copy the selected text formatting." },
      { keys: "Command(⌘)  +  Option(⌥)  +  V", action: "Paste the selected text formatting." },
      { keys: "Command(⌘)  +  H", action: "Display the Replace dialog box." },
      { keys: "Command(⌘)  +  D or Command(⌘)  +  Shift  +  F", action: "Display the Font dialog box." },
      { keys: "Command(⌘)  +  Shift  +  >", action: "Increase the font size." },
      { keys: "Command(⌘)  +  Shift  +  <", action: "Decrease the font size." },
      { keys: "Command(⌘)  +  Shift  +  A", action: "Change the text to all upper case." },
      { keys: "Command(⌘)  +  Shift  +  H", action: "Hide the selected text." },
      { keys: "Command(⌘)  +  B", action: "Apply bold formatting." },
      { keys: "Command(⌘)  +  Shift  +  D", action: "Apply double-underline formatting." },
      { keys: "Command(⌘)  +  I", action: "Apply italic formatting." },
      { keys: "Command(⌘)  +  Shift  +  K", action: "Apply small caps formatting." },
      { keys: "Command(⌘)  +  Shift  +  Q", action: "Change the selected text to the Symbol font." },
    ]
  },
  {
    category: "Align and format paragraphs",
    description: "Shortcuts for paragraph alignment (Cmd + E for center, Cmd + L for left) and indentation.",
    shortcutData: [
      { keys: "Command(⌘)  +  E", action: "Center the paragraph." },
      { keys: "Command(⌘)  +  J", action: "Justify the paragraph." },
      { keys: "Command(⌘)  +  L", action: "Align the paragraph to the left." },
      { keys: "Command(⌘)  +  R", action: "Align the paragraph to the right." },
      { keys: "Command(⌘)  +  M", action: "Indent the paragraph." },
      { keys: "Command(⌘)  +  Shift  +  M", action: "Remove a paragraph indent." },
      { keys: "Command(⌘)  +  T", action: "Create a hanging indent." },
      { keys: "Command(⌘)  +  Shift  +  T", action: "Remove a hanging indent." },
      { keys: "Command(⌘)  +  Q", action: "Remove paragraph formatting." },
      { keys: "Command(⌘)  +  1", action: "Apply single spacing to the paragraph." },
      { keys: "Command(⌘)  +  2", action: "Apply double spacing to the paragraph." },
      { keys: "Command(⌘)  +  5", action: "Apply 1.5-line spacing to the paragraph." },
      { keys: "Command(⌘)  +  Option(⌥)  +  K", action: "Enable AutoFormat." },
      { keys: "Command(⌘)  +  Shift  +  N", action: "Apply the Normal style." },
      { keys: "Command(⌘)  +  Option(⌥)  +  1", action: "Apply the Heading 1 style." },
      { keys: "Command(⌘)  +  Option(⌥)  +  2", action: "Apply the Heading 2 style." },
      { keys: "Command(⌘)  +  Option(⌥)  +  3", action: "Apply the Heading 3 style." },
      { keys: "Command(⌘)  +  Shift  +  S", action: "Display the Apply Styles task pane." },
    ]
  },
  {
    category: "Work with tables",
    description: "Shortcuts for moving within a table using shortcuts like Tab, Shift + Tab, and arrow keys, as well as selecting table content.",
    shortcutData: [
      { keys: "Tab key", action: "Move to the next cell in the row and select its content." },
      { keys: "Shift  +  Tab", action: "Move to the previous cell in the row and select its content." },
      { keys: "Option(⌥)  +  End", action: "Move to the last cell in the row." },
      { keys: "Option(⌥)  +  Home", action: "Move to the first cell in the row." },
      { keys: "Option(⌥)  +  Page up", action: "Move to the first cell in the column." },
      { keys: "Option(⌥)  +  Page down", action: "Move to the last cell in the column." },
      { keys: "Command(⌘)  +  Arrow keys", action: "Move one row up or down." },
      { keys: "Command(⌘)  +  Shift  +  Up arrow key", action: "Move one row up." },
      { keys: "Command(⌘)  +  Shift  +  Down arrow key", action: "Move one row down." },
      { keys: "Shift  +  Arrow keys", action: "Extend a selection to adjacent cells." },
      { keys: "Shift  +  Command(⌘)  +  Right or Left arrow key", action: "Select a row." },
      { keys: "Shift  +  Command(⌘)  +  Up or Down arrow key", action: "Select a column." },
    ]
  },
  {
    category: "Work with references, citations, and indexing",
    description: "Shortcuts for tasks related to document references, such as marking a table of contents entry (Alt+Shift+O), marking a citation (Alt+Shift+I), and inserting footnotes (Cmd+Option+F) or endnotes (Cmd+Option+D).",
    shortcutData: [
      { keys: "Command(⌘)  +  Option(⌥)  +  O", action: "Mark a table of contents entry." },
      { keys: "Command(⌘)  +  Option(⌥)  +  I", action: "Mark a citation." },
      { keys: "Command(⌘)  +  Option(⌥)  +  F", action: "Insert a footnote." },
      { keys: "Command(⌘)  +  Option(⌥)  +  D", action: "Insert an endnote." },
    ]
  },
]
    },
    {
        name: "PowerPoint",
        icon: "/icons8-powerpoint-144.png",
        windows:[
  {
    category: "Frequently used shortcuts",
    description: "Common shortcuts for tasks like creating, opening, and saving presentations, and for basic editing and formatting.",
    shortcutData: [
      { keys: "Control  +  N", action: "Create a new presentation" },
      { keys: "Control  +  M", action: "Add a new slide" },
      { keys: "Control  +  B", action: "Apply bold formatting to the selected text" },
      { keys: "Control  +  T", action: "Open the Font dialog box" },
      { keys: "Control  +  X", action: "Cut selected text, object, or slide" },
      { keys: "Control  +  C", action: "Copy selected text, object, or slide" },
      { keys: "Control  +  V", action: "Paste cut or copied text, object, or slide" },
      { keys: "Control  +  K", action: "Insert a hyperlink" },
      { keys: "Control  +  Alt  +  M", action: "Insert a new comment" },
      { keys: "Control  +  Z", action: "Undo the last action" },
      { keys: "Control  +  Y", action: "Redo the last action" },
      { keys: "Page Down", action: "Go to the next slide" },
      { keys: "Page Up", action: "Go to the previous slide" },
      { keys: "F5", action: "Start the slide show" },
      { keys: "Esc", action: "End the slide show" },
      { keys: "Control  +  P", action: "Print a presentation" },
      { keys: "Control  +  S", action: "Save the presentation" },
      { keys: "Control  +  Q", action: "Close PowerPoint" }
    ]
  },
  {
    category: "Working with presentations and slides",
    description: "Shortcuts for managing presentations and slides.",
    shortcutData: [
      { keys: "Control  +  M", action: "Insert a new slide" },
      { keys: "Control  +  Minus sign (-)", action: "Zoom out" },
      { keys: "Control  +  Plus sign (+)", action: "Zoom in" },
      { keys: "Control  +  Alt  +  O", action: "Zoom to fit" },
      { keys: "Control  +  Shift  +  D", action: "Make a copy of the selected slide" },
      { keys: "Control  +  O", action: "Open a presentation" },
      { keys: "Control  +  D", action: "Close a presentation" },
      { keys: "Control  +  Shift  +  S", action: "Save a presentation with a different name, location, or file format" },
      { keys: "Esc", action: "Cancel a command, such as Save As" }
    ]
  },
  {
    category: "Working with objects and text",
    description: "Shortcuts for selecting, formatting, and manipulating objects and text.",
    shortcutData: [
      { keys: "Control  +  Alt  +  5", action: "Move the focus to the first floating shape, such as an image or a text box" },
      { keys: "Control  +  Left bracket ([)", action: "Send object back one position" },
      { keys: "Control  +  Right bracket (])", action: "Send object forward one position" },
      { keys: "Control  +  Shift  +  Left bracket ([)", action: "Send object to back" },
      { keys: "Control  +  Shift  +  Right bracket (])", action: "Send object to front" },
      { keys: "Control  +  A", action: "Select all objects on a slide" },
      { keys: "Control  +  G", action: "Group the selected objects" },
      { keys: "Control  +  Shift  +  G", action: "Ungroup the selected group" },
      { keys: "Control  +  Shift  +  J", action: "Regroup the selected objects" },
      { keys: "Alt  +  Right arrow key", action: "Rotate the selected object clockwise 15 degrees" },
      { keys: "Alt  +  Left arrow key", action: "Rotate the selected object counterclockwise 15 degrees" },
      { keys: "Control  +  Spacebar", action: "Play or pause media" },
      { keys: "Control  +  Shift  +  C", action: "Copy the formatting from the selection" },
      { keys: "Control  +  Shift  +  V", action: "Paste the formatting to the selection" }
    ]
  },
  {
    category: "Running a slide show",
    description: "Shortcuts for navigating and controlling a presentation while in slide show mode.",
    shortcutData: [
      { keys: "F5", action: "Start a presentation from the beginning" },
      { keys: "Shift  +  F5", action: "Start a presentation from the current slide" },
      { keys: "Alt  +  F5", action: "Start the presentation in Presenter View" },
      { keys: "Esc", action: "End the presentation" },
      { keys: "B", action: "Display a blank black slide, or return to the presentation from a blank black slide" },
      { keys: "W", action: "Display a blank white slide, or return to the presentation from a blank white slide" },
      { keys: "Control  +  H", action: "Hide the pointer and navigation buttons" },
      { keys: "Control  +  P", action: "Activate the Pen tool to write or draw on slides" },
      { keys: "Control  +  A", action: "Revert to the arrow pointer" },
      { keys: "Control  +  L", action: "Turn the arrow pointer into a Laser pointer" }
    ]
  },
  {
    category: "Formatting text",
    description: "Shortcuts for formatting text, including font, alignment, and case.",
    shortcutData: [
      { keys: "Control  +  Shift  +  F", action: "Open the Font dialog box" },
      { keys: "Control  +  Shift  +  Right angle bracket (>)", action: "Increase the font size" },
      { keys: "Control  +  Shift  +  Left angle bracket (<)", action: "Decrease the font size" },
      { keys: "Shift  +  F3", action: "Switch between sentence case, lowercase, or uppercase" },
      { keys: "Control  +  Equal sign (=)", action: "Apply subscript formatting" },
      { keys: "Control  +  Shift  +  Plus sign (+)", action: "Apply superscript formatting" },
      { keys: "Control  +  Spacebar", action: "Remove manual character formatting, such as subscript and superscript" },
      { keys: "Control  +  E", action: "Center a paragraph" },
      { keys: "Control  +  J", action: "Justify a paragraph" },
      { keys: "Control  +  L", action: "Left align a paragraph" },
      { keys: "Control  +  R", action: "Right align a paragraph" }
    ]
  },
  {
    category: "Working with views and panes",
    description: "Shortcuts for switching between different views and panes.",
    shortcutData: [
      { keys: "Alt  +  F5", action: "Switch to Presenter view" },
      { keys: "F5", action: "Switch to Slide Show" },
      { keys: "Control  +  Shift  +  Tab", action: "Toggle between Outline and Thumbnail views" },
      { keys: "Control  +  F1", action: "Switch to full screen (hide menus)" },
      { keys: "Alt  +  F9", action: "Show or hide guides" },
      { keys: "Shift  +  F9", action: "Show or hide the grid" },
      { keys: "F6", action: "Cycle clockwise through panes in the Normal view" },
      { keys: "Shift  +  F6", action: "Cycle counterclockwise through panes in the Normal view" },
      { keys: "F1", action: "Show the help menu" }
    ]
  },
  {
    category: "Editing text and graphics",
    description: "More shortcuts for editing.",
    shortcutData: [
      { keys: "Control  +  Left arrow key", action: "Move one word to the left" },
      { keys: "Control  +  Right arrow key", action: "Move one word to the right" },
      { keys: "Home", action: "Move to the beginning of a line" },
      { keys: "End", action: "Move to the end of a line" },
      { keys: "Control  +  Home", action: "Move to the beginning of a text box" },
      { keys: "Control  +  End", action: "Move to the end of a text box" },
      { keys: "Shift  +  Arrow keys", action: "Select text" },
      { keys: "Shift  +  Home", action: "Select from the current position to the beginning of the current line" },
      { keys: "Shift  +  End", action: "Select from the current position to the end of the current line" },
      { keys: "Shift  +  Page up", action: "Select from the current position to the top of the screen" },
      { keys: "Shift  +  Page down", action: "Select from the current position to the bottom of the screen" },
      { keys: "Control  +  A", action: "Select all document content" }
    ]
  }
],
        mac: [
  {
    category: "Frequently used shortcuts",
    description: "Common shortcuts for tasks like creating, opening, and saving presentations, and for basic editing and formatting.",
    shortcutData: [
      { keys: "Command(⌘)  +  N", action: "Create a new presentation" },
      { keys: "Command(⌘)  +  O", action: "Open a presentation" },
      { keys: "Command(⌘)  +  S", action: "Save the presentation" },
      { keys: "Command(⌘)  +  Shift  +  S", action: "Save a presentation with a different name, location, or file format" },
      { keys: "Command(⌘)  +  W", action: "Close a presentation" },
      { keys: "Command(⌘)  +  Q", action: "Quit the current application" },
      { keys: "Command(⌘)  +  X", action: "Cut the selected content" },
      { keys: "Command(⌘)  +  C", action: "Copy the selected content" },
      { keys: "Command(⌘)  +  V", action: "Paste the contents" },
      { keys: "Command(⌘)  +  Z", action: "Undo the last action" },
      { keys: "Command(⌘)  +  Y", action: "Redo the last action" },
      { keys: "Command(⌘)  +  B", action: "Apply bold formatting" },
      { keys: "Command(⌘)  +  I", action: "Apply italic formatting" },
      { keys: "Command(⌘)  +  U", action: "Apply underline formatting" },
      { keys: "Command(⌘)  +  Shift  +  >", action: "Increase font size" },
      { keys: "Command(⌘)  +  Shift  +  <", action: "Decrease font size" },
      { keys: "Command(⌘)  +  K", action: "Insert a hyperlink" },
      { keys: "Command(⌘)  +  P", action: "Print a presentation" }
    ]
  },
  {
    category: "Working with slides",
    description: "Shortcuts for adding, duplicating, and navigating between slides.",
    shortcutData: [
      { keys: "Command(⌘)  +  Shift  +  N", action: "Add a new slide" },
      { keys: "Command(⌘)  +  D", action: "Duplicate the current slide or object" },
      { keys: "Page Down", action: "Go to the next slide" },
      { keys: "Page Up", action: "Go to the previous slide" },
      { keys: "Fn  +  Down arrow key", action: "Go to the next slide in the thumbnail or slide pane" },
      { keys: "Fn  +  Up arrow key", action: "Go to the previous slide in the thumbnail or slide pane" }
    ]
  },
  {
    category: "Running a slide show",
    description: "Shortcuts for starting, navigating, and controlling a presentation.",
    shortcutData: [
      { keys: "Command(⌘)  +  Shift  +  Return", action: "Start a presentation from the beginning" },
      { keys: "Command(⌘)  +  Return", action: "Start a presentation from the current slide" },
      { keys: "Option(⌥)  +  Return", action: "Start the presentation in Presenter View" },
      { keys: "N or Spacebar", action: "Perform the next animation or advance to the next slide" },
      { keys: "P or Delete", action: "Perform the previous animation or return to the previous slide" },
      { keys: "Esc", action: "End the presentation" },
      { keys: "B", action: "Display a blank black slide, or return to the presentation from a blank black slide" },
      { keys: "W", action: "Display a blank white slide, or return to the presentation from a blank white slide" },
      { keys: "Command(⌘)  +  L", action: "Start the laser pointer" },
      { keys: "Command(⌘)  +  P", action: "Change the pointer to a pen" },
      { keys: "Command(⌘)  +  A", action: "Change the pointer to an arrow" }
    ]
  },
  {
    category: "Working with objects and text",
    description: "Shortcuts for selecting, grouping, and formatting objects and text on a slide.",
    shortcutData: [
      { keys: "Command(⌘)  +  G", action: "Group the selected objects" },
      { keys: "Command(⌘)  +  Shift  +  G", action: "Ungroup the selected group" },
      { keys: "Command(⌘)  +  A", action: "Select all objects on a slide" },
      { keys: "Command(⌘)  +  Shift  +  C", action: "Copy the formatting from the selection" },
      { keys: "Command(⌘)  +  Shift  +  V", action: "Paste the formatting to the selection" },
      { keys: "Shift  +  Command(⌘)  +  > or <", action: "Increase or decrease font size" },
      { keys: "Command(⌘)  +  Option(⌥)  +  G", action: "Group selected objects" },
      { keys: "Command(⌘)  +  Option(⌥)  +  Shift  +  G", action: "Ungroup objects" },
      { keys: "Command(⌘)  +  Shift  +  1", action: "Format selected object" },
      { keys: "Command(⌘)  +  T", action: "Display the font dialogue box" }
    ]
  }
]
    },
    {
        name: "Outlook",
        icon: "/icons8-outlook-144.png",
        windows:[
        {
            category: "Outlook for Windows",
            description: "A comprehensive list of keyboard shortcuts for the Windows version of Microsoft Outlook.",
            shortcutData: [
            { keys: "Control + 1", action: "Switch to Mail" },
            { keys: "Control + 2", action: "Switch to Calendar" },
            { keys: "Control + 3", action: "Switch to Contacts/People" },
            { keys: "Control + 4", action: "Switch to Tasks" },
            { keys: "Control + 5", action: "Switch to Notes" },
            { keys: "Control + N", action: "Create a new message or item" },
            { keys: "Control + R", action: "Reply to an email message" },
            { keys: "Control + Shift + R", action: "Reply All to an email message" },
            { keys: "Control + F", action: "Forward an email message" },
            { keys: "Control + Enter", action: "Send a message" },
            { keys: "Control + Shift + M", action: "Create a new message from any Outlook view" },
            { keys: "Control + Shift + B", action: "Open the Address Book" },
            { keys: "Control + K", action: "Insert a hyperlink" },
            { keys: "Control + Z", action: "Undo the last action" },
            { keys: "Control + Y", action: "Redo the last action" },
            { keys: "Control + B", action: "Apply bold formatting" },
            { keys: "Control + I", action: "Apply italic formatting" },
            { keys: "Control + U", action: "Apply underline formatting" },
            { keys: "Delete", action: "Delete a message or item" },
            { keys: "Shift + Delete", action: "Permanently delete a message or item" },
            { keys: "Control + Q", action: "Mark a message as read" },
            { keys: "Control + U", action: "Mark a message as unread" },
            { keys: "Control + E", action: "Go to the Search box" },
            { keys: "F9", action: "Check for new messages" },
            { keys: "Control + P", action: "Print the selected item" },
            { keys: "Alt + Left arrow key", action: "Go back to the previous view" },
            { keys: "Control + M", action: "Check for new messages" }
            ]
        }

        ],
        mac: [
        {
            category: "Outlook for macOS",
            description: "A comprehensive list of keyboard shortcuts for the macOS version of Microsoft Outlook.",
            shortcutData: [
            { keys: "Command(⌘) + 1", action: "Go to Mail view" },
            { keys: "Command(⌘) + 2", action: "Go to Calendar view" },
            { keys: "Command(⌘) + 3", action: "Go to Contacts/People view" },
            { keys: "Command(⌘) + 4", action: "Go to Tasks view" },
            { keys: "Command(⌘) + 5", action: "Go to Notes view" },
            { keys: "Command(⌘) + N", action: "Create a new message" },
            { keys: "Command(⌘) + R", action: "Reply to an email message" },
            { keys: "Command(⌘) + Shift + 5", action: "Reply All to an email message" },
            { keys: "Command(⌘) + J", action: "Forward an email message" },
            { keys: "Command(⌘) + Enter", action: "Send a message" },
            { keys: "Command(⌘) + B", action: "Apply bold formatting" },
            { keys: "Command(⌘) + I", action: "Apply italic formatting" },
            { keys: "Command(⌘) + U", action: "Apply underline formatting" },
            { keys: "Command(⌘) + Z", action: "Undo the last action" },
            { keys: "Command(⌘) + P", action: "Print the selected item" },
            { keys: "Command(⌘) + A", action: "Select all items in the item list" },
            { keys: "Command(⌘) + H", action: "Hide Outlook" },
            { keys: "Command(⌘) + Q", action: "Quit Outlook" },
            { keys: "Command(⌘) + Shift + C", action: "Copy the selected item to a different folder" },
            { keys: "Command(⌘) + S", action: "Save an item" },
            { keys: "Option(⌥) + Command(⌘) + F", action: "Do a basic search in Outlook" },
            { keys: "Shift + Command(⌘) + M", action: "Move an email to a folder" },
            { keys: "Command(⌘) + Shift + >", action: "Increase font size" },
            { keys: "Command(⌘) + Shift + <", action: "Decrease font size" }
            ]
        }
        ]
    },
]