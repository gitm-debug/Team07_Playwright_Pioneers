# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features/03_program.feature.spec.js >> Program Page Verification >> Validate Program Page UI elements
- Location: .features-gen/features/03_program.feature.spec.js:15:3

# Error details

```
Error: UI Validation Failed:
UI element 'Row checkboxes' failed validation
UI element 'Edit icons' failed validation
UI element 'Delete icons' failed validation
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e4]:
      - generic [ref=e5]: LMS - Learning Management System
      - generic [ref=e6]:
        - button "Home" [ref=e7] [cursor=pointer]
        - button "Program" [expanded] [ref=e8] [cursor=pointer]
        - button "Batch" [ref=e9] [cursor=pointer]
        - button "Logout" [ref=e10] [cursor=pointer]
    - generic [ref=e13]:
      - generic [ref=e14]:
        - generic [ref=e15]: Manage Program
        - generic [ref=e16]:
          - button [disabled] [ref=e18]:
            - generic [ref=e19]: 
          - generic [ref=e21]:
            - generic [ref=e22]: 
            - textbox "Search..." [ref=e23]
      - generic [ref=e24]:
        - progressbar [ref=e26]
        - generic [ref=e30]:
          - grid [ref=e32]:
            - rowgroup [ref=e33]:
              - row [ref=e34]:
                - columnheader [ref=e35]:
                  - generic [ref=e37] [cursor=pointer]:
                    - generic [ref=e38]:
                      - checkbox [disabled]
                    - checkbox
                - columnheader "Program Name " [ref=e39] [cursor=pointer]:
                  - text: Program Name
                  - generic [ref=e40]: 
                - columnheader "Program Description " [ref=e42] [cursor=pointer]:
                  - text: Program Description
                  - generic [ref=e43]: 
                - columnheader "Program Status " [ref=e45] [cursor=pointer]:
                  - text: Program Status
                  - generic [ref=e46]: 
                - columnheader "Edit / Delete" [ref=e48]
            - rowgroup
          - generic [ref=e50]:
            - generic [ref=e51] [cursor=pointer]: Showing 0 to 0 of 0 entries
            - button "" [disabled]
            - button "" [disabled]
            - button "1" [ref=e53] [cursor=pointer]
            - button "" [disabled]
            - button "" [disabled]
          - generic [ref=e54]: In total there are 0 programs.
  - generic [ref=e57]:
    - menu:
      - generic:
        - menuitem "Add New Program" [active]
```

# Test source

```ts
  71  |     } catch {
  72  |       return false;
  73  |     }
  74  |   }
  75  | 
  76  |   async isSearchPlaceholderCorrect() {
  77  |     try {
  78  |       const placeholder = await this.searchBox.getAttribute('placeholder');
  79  |       console.log('Placeholder found:', placeholder);
  80  |       return placeholder === 'Search...' || (placeholder && placeholder.includes('Search'));
  81  |     } catch {
  82  |       return false;
  83  |     }
  84  |   }
  85  | 
  86  |   async areTableHeadersVisible() {
  87  |     try {
  88  |       const count = await this.tableHeaders.count();
  89  |       return count > 0;
  90  |     } catch {
  91  |       return false;
  92  |     }
  93  |   }
  94  | 
  95  |   async areRowCheckboxesUnchecked() {
  96  |     try {
  97  |       const count = await this.rowCheckboxes.count();
  98  |       if (count === 0) {
  99  |         console.log('No checkboxes found');
  100 |         return false;
  101 |       }
  102 | 
  103 |       for (let i = 0; i < count; i++) {
  104 |         if (await this.rowCheckboxes.nth(i).isChecked()) {
  105 |           return false;
  106 |         }
  107 |       }
  108 | 
  109 |       return true;
  110 |     } catch (error) {
  111 |       console.error('Error checking checkboxes:', error);
  112 |       return false;
  113 |     }
  114 |   }
  115 | 
  116 |   async areEditIconsVisible() {
  117 |     try {
  118 |       const editCount = await this.editBtnsProgram.count();
  119 | 
  120 |       return editCount > 0;
  121 |     } catch {
  122 |       return false;
  123 |     }
  124 |   }
  125 |   async areDeleteIconsVisible() {
  126 |     try {
  127 |       const deleteCount = await this.deleteBtnsProgram.count();
  128 | 
  129 |       return deleteCount > 0;
  130 |     } catch {
  131 |       return false;
  132 |     }
  133 |   }
  134 |   async isMultiDeleteButtonVisible() {
  135 |     try {
  136 |       return await this.multiDeleteBtn.isVisible();
  137 |     } catch {
  138 |       return false;
  139 |     }
  140 |   }
  141 | 
  142 |   async validateUIElements(uiElements) {
  143 |     const errors = [];
  144 |     const methodMap = {
  145 |       "Manage Program heading": this.isHeadingVisible.bind(this),
  146 |       "Add New Program menu": this.isAddNewProgramVisible.bind(this),
  147 |       "Search bar": this.isSearchBarVisible.bind(this),
  148 |       "Search placeholder": this.isSearchPlaceholderCorrect.bind(this),
  149 |       "Table headers": this.areTableHeadersVisible.bind(this),
  150 |       // "Multi delete button": this.isMultiDeleteButtonVisible.bind(this), 
  151 |       "Row checkboxes": this.areRowCheckboxesUnchecked.bind(this),
  152 |       "Edit icons": this.areEditIconsVisible.bind(this),
  153 |       "Delete icons": this.areDeleteIconsVisible.bind(this),
  154 |       // "Pagination section": this.isPaginationVisible.bind(this), 
  155 |       // "Footer message": this.isFooterVisible.bind(this) // 
  156 | 
  157 |     };
  158 | 
  159 |     for (const name of uiElements) {
  160 |       const method = methodMap[name];
  161 |       if (!method) {
  162 |         errors.push(`Unknown UI element: ${name}`);
  163 |         continue;
  164 |       }
  165 |       const result = await method();
  166 |       if (!result) {
  167 |         errors.push(`UI element '${name}' failed validation`);
  168 |       }
  169 |     }
  170 |     if (errors.length > 0) {
> 171 |       throw new Error("UI Validation Failed:\n" + errors.join("\n"));
      |             ^ Error: UI Validation Failed:
  172 |     }
  173 |   }
  174 |   // Add New Program UI Elements validation methods
  175 |   async clickAddNewProgram() {
  176 |     await this.addNewProgramMenuItem.waitFor({ state: 'visible' });
  177 |     await this.addNewProgramMenuItem.click();
  178 |     await this.dialog.waitFor({ state: 'visible', timeout: 5000 });
  179 |   }
  180 | 
  181 |   async searchProgram(searchTerm) {
  182 |     try {
  183 |       await this.page.keyboard.press('Escape');
  184 |       await this.page.waitForTimeout(500);
  185 |       await this.page.locator('.cdk-overlay-backdrop').waitFor({ state: 'hidden', timeout: 5000 }).catch(() => { });
  186 |       await this.searchBox.click();
  187 |       await this.page.waitForTimeout(200);
  188 |       await this.searchBox.clear();
  189 |       await this.searchBox.fill(searchTerm);
  190 |       await this.searchBox.press('Enter');
  191 |       await this.page.waitForTimeout(1000);
  192 | 
  193 |     } catch (error) {
  194 |       console.error(`Failed to search: ${error.message}`);
  195 |       throw error;
  196 |     }
  197 |   }
  198 | 
  199 |   async clickDialogCloseButton() {
  200 |     await this.dialogCloseButton.click();
  201 |   }
  202 |   async clickCancelButton() {
  203 |     await this.cancelBtn.click();
  204 |   }
  205 | 
  206 |   async verifyAddNewProgramDialog() {
  207 |     await this.dialog.waitFor({ state: 'visible', timeout: 5000 });
  208 |     const isVisible = await this.dialog.isVisible();
  209 |     if (!isVisible) {
  210 |       throw new Error('Add New Program dialog is not displayed');
  211 |     }
  212 |   }
  213 | 
  214 |   async verifyDialogTitle(expectedTitle) {
  215 |     await this.dialogTitle.waitFor({ state: 'visible', timeout: 5000 });
  216 |     const actualTitle = await this.dialogTitle.textContent();
  217 |     if (!actualTitle.includes(expectedTitle)) {
  218 |       throw new Error(`Dialog title mismatch. Expected: "${expectedTitle}", Actual: "${actualTitle}"`);
  219 |     }
  220 |   }
  221 | 
  222 |   async verifyMandatoryFields() {
  223 |     await this.nameMandatoryIndicator.waitFor({ state: 'visible', timeout: 5000 });
  224 |     const nameIndicatorVisible = await this.nameMandatoryIndicator.isVisible();
  225 |     if (!nameIndicatorVisible) {
  226 |       throw new Error('Mandatory indicator for "Name" is not visible');
  227 |     }
  228 | 
  229 |     await this.statusMandatoryIndicator.waitFor({ state: 'visible', timeout: 5000 });
  230 |     const statusIndicatorVisible = await this.statusMandatoryIndicator.isVisible();
  231 |     if (!statusIndicatorVisible) {
  232 |       throw new Error('Mandatory indicator for "Status" is not visible');
  233 |     }
  234 |   }
  235 | 
  236 |   async verifyNameField() {
  237 |     await this.nameField.waitFor({ state: 'visible', timeout: 5000 });
  238 |     const isVisible = await this.nameField.isVisible();
  239 |     if (!isVisible) {
  240 |       throw new Error('Name field is not visible');
  241 |     }
  242 |   }
  243 | 
  244 |   async verifyDescriptionField() {
  245 |     await this.descriptionField.waitFor({ state: 'visible', timeout: 5000 });
  246 |     const isVisible = await this.descriptionField.isVisible();
  247 |     if (!isVisible) {
  248 |       throw new Error('Description field is not visible');
  249 |     }
  250 |   }
  251 | 
  252 |   async verifyStatusRadioButtons() {
  253 |     await this.activeRadio.waitFor({ state: 'visible', timeout: 5000 });
  254 |     await this.inactiveRadio.waitFor({ state: 'visible', timeout: 5000 });
  255 |     const activeVisible = await this.activeRadio.isVisible();
  256 |     const inactiveVisible = await this.inactiveRadio.isVisible();
  257 |     if (!activeVisible || !inactiveVisible) {
  258 |       throw new Error('Status radio buttons are not visible');
  259 |     }
  260 |   }
  261 |   async clickProgramSaveButton() {
  262 |     await this.saveBtn.click();
  263 |   }
  264 |   async fillProgramDetails(name, description, status) {
  265 |     if (name !== undefined) {
  266 |       await this.nameField.clear();
  267 |       if (name) await this.nameField.fill(name);
  268 |     }
  269 | 
  270 |     if (description !== undefined) {
  271 |       await this.descriptionField.clear();
```