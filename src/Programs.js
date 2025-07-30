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
    
        ],
        mac: [

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