# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features/04_batch.feature.spec.js >> Batch Page UI >> Add new batch only with "<data>" >> Add new batch only with "data to mandatory fields and click save"
- Location: .features-gen/features/04_batch.feature.spec.js:53:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.p-autocomplete-item').filter({ hasText: 'Python' }) to be visible

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e4]:
    - generic [ref=e5]: LMS - Learning Management System
    - generic [ref=e6]:
      - button "Home" [ref=e7] [cursor=pointer]
      - button "Program" [ref=e8] [cursor=pointer]
      - button "Batch" [ref=e9] [cursor=pointer]
      - button "Logout" [ref=e10] [cursor=pointer]
  - generic [ref=e11]:
    - generic [ref=e13]:
      - generic [ref=e14]:
        - generic [ref=e15]: Manage Batch
        - generic [ref=e16]:
          - button [disabled] [ref=e18]:
            - generic [ref=e19]: 
          - generic [ref=e21]:
            - generic [ref=e22]: 
            - textbox "Search..." [ref=e23]
      - generic [ref=e26]:
        - grid [ref=e28]:
          - rowgroup [ref=e29]:
            - row [ref=e30]:
              - columnheader [ref=e31]:
                - generic [ref=e33] [cursor=pointer]:
                  - generic [ref=e34]:
                    - checkbox
                  - checkbox [ref=e35]
              - columnheader "Batch Name " [ref=e36] [cursor=pointer]:
                - text: Batch Name
                - generic [ref=e37]: 
              - columnheader "Batch Description " [ref=e39] [cursor=pointer]:
                - text: Batch Description
                - generic [ref=e40]: 
              - columnheader "Batch Status " [ref=e42] [cursor=pointer]:
                - text: Batch Status
                - generic [ref=e43]: 
              - columnheader "No Of Classes " [ref=e45] [cursor=pointer]:
                - text: No Of Classes
                - generic [ref=e46]: 
              - columnheader "Program Name " [ref=e48] [cursor=pointer]:
                - text: Program Name
                - generic [ref=e49]: 
              - columnheader "Edit / Delete" [ref=e51]
          - rowgroup [ref=e52]:
            - row [ref=e53]:
              - gridcell [ref=e54]:
                - generic [ref=e56] [cursor=pointer]:
                  - generic [ref=e57]:
                    - checkbox
                  - checkbox [ref=e58]
              - gridcell "AIDeepLearning_001" [ref=e59]
              - gridcell [ref=e60]
              - gridcell "Active" [ref=e61]
              - gridcell "20" [ref=e62]
              - gridcell "AIDeepLearning" [ref=e63]
              - gridcell [ref=e64]:
                - generic [ref=e65]:
                  - button [ref=e67] [cursor=pointer]:
                    - generic [ref=e68]: 
                  - button [ref=e70] [cursor=pointer]:
                    - generic [ref=e71]: 
            - row [ref=e72]:
              - gridcell [ref=e73]:
                - generic [ref=e75] [cursor=pointer]:
                  - generic [ref=e76]:
                    - checkbox
                  - checkbox [ref=e77]
              - gridcell "AIML_89" [ref=e78]
              - gridcell [ref=e79]
              - gridcell "Active" [ref=e80]
              - gridcell "78" [ref=e81]
              - gridcell "AIML" [ref=e82]
              - gridcell [ref=e83]:
                - generic [ref=e84]:
                  - button [ref=e86] [cursor=pointer]:
                    - generic [ref=e87]: 
                  - button [ref=e89] [cursor=pointer]:
                    - generic [ref=e90]: 
            - row [ref=e91]:
              - gridcell [ref=e92]:
                - generic [ref=e94] [cursor=pointer]:
                  - generic [ref=e95]:
                    - checkbox
                  - checkbox [ref=e96]
              - gridcell "CypressLMSApplication_12345" [ref=e97]
              - gridcell [ref=e98]
              - gridcell "Active" [ref=e99]
              - gridcell "8" [ref=e100]
              - gridcell "CypressLMSApplication" [ref=e101]
              - gridcell [ref=e102]:
                - generic [ref=e103]:
                  - button [ref=e105] [cursor=pointer]:
                    - generic [ref=e106]: 
                  - button [ref=e108] [cursor=pointer]:
                    - generic [ref=e109]: 
            - row [ref=e110]:
              - gridcell [ref=e111]:
                - generic [ref=e113] [cursor=pointer]:
                  - generic [ref=e114]:
                    - checkbox
                  - checkbox [ref=e115]
              - gridcell "CypressLMSApplication_1267" [ref=e116]
              - gridcell [ref=e117]
              - gridcell "Active" [ref=e118]
              - gridcell "9" [ref=e119]
              - gridcell "CypressLMSApplication" [ref=e120]
              - gridcell [ref=e121]:
                - generic [ref=e122]:
                  - button [ref=e124] [cursor=pointer]:
                    - generic [ref=e125]: 
                  - button [ref=e127] [cursor=pointer]:
                    - generic [ref=e128]: 
            - row [ref=e129]:
              - gridcell [ref=e130]:
                - generic [ref=e132] [cursor=pointer]:
                  - generic [ref=e133]:
                    - checkbox
                  - checkbox [ref=e134]
              - gridcell "CypressLMSApplication_1345" [ref=e135]
              - gridcell [ref=e136]
              - gridcell "Active" [ref=e137]
              - gridcell "9" [ref=e138]
              - gridcell "CypressLMSApplication" [ref=e139]
              - gridcell [ref=e140]:
                - generic [ref=e141]:
                  - button [ref=e143] [cursor=pointer]:
                    - generic [ref=e144]: 
                  - button [ref=e146] [cursor=pointer]:
                    - generic [ref=e147]: 
            - row [ref=e148]:
              - gridcell [ref=e149]:
                - generic [ref=e151] [cursor=pointer]:
                  - generic [ref=e152]:
                    - checkbox
                  - checkbox [ref=e153]
              - gridcell "CypressLMSApplication_333" [ref=e154]
              - gridcell [ref=e155]
              - gridcell "Active" [ref=e156]
              - gridcell "9" [ref=e157]
              - gridcell "CypressLMSApplication" [ref=e158]
              - gridcell [ref=e159]:
                - generic [ref=e160]:
                  - button [ref=e162] [cursor=pointer]:
                    - generic [ref=e163]: 
                  - button [ref=e165] [cursor=pointer]:
                    - generic [ref=e166]: 
            - row [ref=e167]:
              - gridcell [ref=e168]:
                - generic [ref=e170] [cursor=pointer]:
                  - generic [ref=e171]:
                    - checkbox
                  - checkbox [ref=e172]
              - gridcell "CypressLMSApplication_4412" [ref=e173]
              - gridcell [ref=e174]
              - gridcell "Active" [ref=e175]
              - gridcell "9" [ref=e176]
              - gridcell "CypressLMSApplication" [ref=e177]
              - gridcell [ref=e178]:
                - generic [ref=e179]:
                  - button [ref=e181] [cursor=pointer]:
                    - generic [ref=e182]: 
                  - button [ref=e184] [cursor=pointer]:
                    - generic [ref=e185]: 
            - row [ref=e186]:
              - gridcell [ref=e187]:
                - generic [ref=e189] [cursor=pointer]:
                  - generic [ref=e190]:
                    - checkbox
                  - checkbox [ref=e191]
              - gridcell "CypressLMSApplication_44135" [ref=e192]
              - gridcell [ref=e193]
              - gridcell "Active" [ref=e194]
              - gridcell "9" [ref=e195]
              - gridcell "CypressLMSApplication" [ref=e196]
              - gridcell [ref=e197]:
                - generic [ref=e198]:
                  - button [ref=e200] [cursor=pointer]:
                    - generic [ref=e201]: 
                  - button [ref=e203] [cursor=pointer]:
                    - generic [ref=e204]: 
            - row [ref=e205]:
              - gridcell [ref=e206]:
                - generic [ref=e208] [cursor=pointer]:
                  - generic [ref=e209]:
                    - checkbox
                  - checkbox [ref=e210]
              - gridcell "CypressLMSApplication_44252" [ref=e211]
              - gridcell [ref=e212]
              - gridcell "Active" [ref=e213]
              - gridcell "9" [ref=e214]
              - gridcell "CypressLMSApplication" [ref=e215]
              - gridcell [ref=e216]:
                - generic [ref=e217]:
                  - button [ref=e219] [cursor=pointer]:
                    - generic [ref=e220]: 
                  - button [ref=e222] [cursor=pointer]:
                    - generic [ref=e223]: 
            - row [ref=e224]:
              - gridcell [ref=e225]:
                - generic [ref=e227] [cursor=pointer]:
                  - generic [ref=e228]:
                    - checkbox
                  - checkbox [ref=e229]
              - gridcell "CypressLMSApplication_4430" [ref=e230]
              - gridcell [ref=e231]
              - gridcell "Active" [ref=e232]
              - gridcell "9" [ref=e233]
              - gridcell "CypressLMSApplication" [ref=e234]
              - gridcell [ref=e235]:
                - generic [ref=e236]:
                  - button [ref=e238] [cursor=pointer]:
                    - generic [ref=e239]: 
                  - button [ref=e241] [cursor=pointer]:
                    - generic [ref=e242]: 
        - generic [ref=e244]:
          - generic [ref=e245] [cursor=pointer]: Showing 1 to 10 of 64 entries
          - button "" [disabled]
          - button "" [disabled]
          - generic [ref=e246]:
            - button "1" [ref=e247] [cursor=pointer]
            - button "2" [ref=e248] [cursor=pointer]
            - button "3" [ref=e249] [cursor=pointer]
            - button "4" [ref=e250] [cursor=pointer]
            - button "5" [ref=e251] [cursor=pointer]
          - button "" [ref=e252] [cursor=pointer]
          - button "" [ref=e254] [cursor=pointer]
        - generic [ref=e256]: In total there are 64 batches.
    - dialog "Batch Details" [ref=e259]:
      - generic [ref=e260]:
        - generic [ref=e261]: Batch Details
        - button "" [ref=e263] [cursor=pointer]
      - generic [ref=e265]:
        - generic [ref=e266]:
          - generic [ref=e267]:
            - text: Program Name
            - generic [ref=e268]: "*"
          - generic [ref=e270]:
            - searchbox "Select or type a program" [active] [ref=e271]: Python
            - button [ref=e272] [cursor=pointer]:
              - generic [ref=e273]: 
        - generic [ref=e274]:
          - generic [ref=e275]:
            - text: Batch Name
            - generic [ref=e276]: "*"
          - textbox [ref=e277]
          - textbox "Batch Name *" [ref=e278]
        - generic [ref=e279]:
          - generic [ref=e280]: Description
          - textbox "Description" [ref=e281]
        - generic [ref=e282]:
          - generic [ref=e283]: "Status : *"
          - generic [ref=e285]:
            - generic [ref=e288] [cursor=pointer]:
              - radio
            - text: Active
          - generic [ref=e290]:
            - generic [ref=e293] [cursor=pointer]:
              - radio
            - text: Inactive
        - generic [ref=e295]:
          - generic [ref=e296]:
            - text: Number of Classes
            - generic [ref=e297]: "*"
          - spinbutton "Number of Classes *" [ref=e298]
      - generic [ref=e299]:
        - button "Cancel" [ref=e300] [cursor=pointer]:
          - generic [ref=e301]: 
        - button "Save" [ref=e303] [cursor=pointer]:
          - generic [ref=e304]: 
```

# Test source

```ts
  69  |   }
  70  | 
  71  |   async clickBatchTab() {
  72  |     await this.batchTab.click();
  73  |   }
  74  | 
  75  |   async isBatchSubMenuDisplayed() {
  76  |     return await this.batchSubMenu.isVisible();
  77  |   }
  78  | 
  79  |   async clickAddNewBatchSubMenu() {
  80  |     await this.batchSubMenu.click();
  81  |   }
  82  | 
  83  |   getEditButtonForRow(rowIndex) {
  84  |     return this.batchTableRows.nth(rowIndex).locator('button:has(.pi-pencil)');
  85  |   }
  86  | 
  87  |   getDeleteButtonForRow(rowIndex) {
  88  |     return this.batchTableRows.nth(rowIndex).locator('button:has(.pi-trash)');
  89  |   }
  90  | 
  91  |   getCheckboxForRow(rowIndex) {
  92  |     return this.batchTableRows.nth(rowIndex).locator('p-tablecheckbox');
  93  |   }
  94  | 
  95  |   async clickBatchNameArrow() {
  96  |     await this.page.click(this.batchNameSortHeader);
  97  |   }
  98  | 
  99  |   async clickBatchDescriptionArrow() {
  100 |     await this.page.click(this.batchDescriptionSortHeader);
  101 |   }
  102 | 
  103 |   async clickBatchStatusArrow() {
  104 |     await this.page.click(this.batchStatusSortHeader);
  105 |   }
  106 | 
  107 |   async clickNoOfClassesArrow() {
  108 |     await this.page.click(this.batchNoOfClassesSortHeader);
  109 |   }
  110 | 
  111 |   async getBatchNames() {
  112 |     return await this.page.$$eval('table tbody tr td:nth-child(2)', els =>
  113 |       els.map(el => el.textContent.trim())
  114 |     );
  115 |   }
  116 | 
  117 |   async getBatchDescriptions() {
  118 |     return await this.page.$$eval('table tbody tr td:nth-child(3)', els =>
  119 |       els.map(el => el.textContent.trim())
  120 |     );
  121 |   }
  122 | 
  123 |   async getBatchStatuses() {
  124 |     return await this.page.$$eval('table tbody tr td:nth-child(4)', els =>
  125 |       els.map(el => el.textContent.trim())
  126 |     );
  127 |   }
  128 | 
  129 |   async getNoOfClasses() {
  130 |     return await this.page.$$eval('table tbody tr td:nth-child(5)', els =>
  131 |       els.map(el => el.textContent.trim())
  132 |     );
  133 |   }
  134 | 
  135 |   isSortedAscending(arr) {
  136 |     for (let i = 0; i < arr.length - 1; i++) {
  137 |       if (arr[i].localeCompare(arr[i + 1]) > 0) return false;
  138 |     }
  139 |     return true;
  140 |   }
  141 | 
  142 |   isSortedDescending(arr) {
  143 |     for (let i = 0; i < arr.length - 1; i++) {
  144 |       if (arr[i].localeCompare(arr[i + 1]) < 0) return false;
  145 |     }
  146 |     return true;
  147 |   }
  148 | 
  149 |   isSortedAscendingNumeric(arr) {
  150 |     const nums = arr.map(Number);
  151 |     for (let i = 0; i < nums.length - 1; i++) {
  152 |       if (nums[i] > nums[i + 1]) return false;
  153 |     }
  154 |     return true;
  155 |   }
  156 | 
  157 |   isSortedDescendingNumeric(arr) {
  158 |     const nums = arr.map(Number);
  159 |     for (let i = 0; i < nums.length - 1; i++) {
  160 |       if (nums[i] < nums[i + 1]) return false;
  161 |     }
  162 |     return true;
  163 |   }
  164 | 
  165 |   async selectProgramName(programName) {
  166 |     await this.dropdownUnderProgramName.click();
  167 |     await this.page.locator('.p-autocomplete-input').fill(programName);
  168 |     const programOption = this.page.locator('.p-autocomplete-item').filter({ hasText: programName });
> 169 |     await programOption.waitFor({ state: 'visible'});
      |                         ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  170 |     await programOption.click();
  171 |   }
  172 |   async clickSaveButton() {
  173 |     await this.saveButton.click();
  174 |   }
  175 |   async clickCancelButton() {
  176 |     await this.cancelButton.click();
  177 |   }
  178 |   async clickDialogCloseButton() {
  179 |     await this.dialogCloseButton.click();
  180 |   }
  181 | }
  182 | 
```