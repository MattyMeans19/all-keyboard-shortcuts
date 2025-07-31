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

        ]
    },
    {
        name: "Word",
        icon: "/icons8-word-144.png",
        windows:[

        ],
        mac: [

        ]
    },{
        name: "PowerPoint",
        icon: "/icons8-powerpoint-144.png",
        windows:[

        ],
        mac: [

        ]
    },{
        name: "Outlook",
        icon: "/icons8-outlook-144.png",
        windows:[

        ],
        mac: [

        ]
    },
]