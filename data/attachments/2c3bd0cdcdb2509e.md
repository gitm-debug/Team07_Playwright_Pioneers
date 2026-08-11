# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features/02_homepage.feature.spec.js >> Home Page - UI Validation >> Verify user status chart legends >> Example #2
- Location: .features-gen/features/02_homepage.feature.spec.js:43:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByText('Undefined', { exact: true })

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
    - generic [ref=e14]:
      - generic [ref=e16]:
        - generic [ref=e17]: Dashboard
        - generic [ref=e20]:
          - generic:
            - figure [ref=e22]:
              - generic [ref=e25]:
                - img "Paris" [ref=e27]
                - strong [ref=e29]: Welcome
                - generic [ref=e30]: ADMIN
            - figure [ref=e32]
      - generic [ref=e39]:
        - generic [ref=e40]:
          - generic [ref=e41]: 
          - generic [ref=e43]:
            - generic [ref=e44]: "3"
            - generic [ref=e45]: User
        - generic [ref=e46]:
          - generic [ref=e47]: 
          - generic [ref=e49]:
            - generic [ref=e50]: "0"
            - generic [ref=e51]: Staff
        - generic [ref=e52]:
          - generic [ref=e53]: 
          - generic [ref=e55]:
            - generic [ref=e56]: "603"
            - generic [ref=e57]: Batches
        - generic [ref=e58]:
          - generic [ref=e59]: 
          - generic [ref=e61]:
            - generic [ref=e62]: "425"
            - generic [ref=e63]: Programs
      - generic [ref=e65]:
        - generic:
          - figure [ref=e67]:
            - generic [ref=e69]:
              - heading "Staff Data" [level=3] [ref=e70]
              - grid [ref=e71]:
                - row [ref=e72]:
                  - columnheader "#" [ref=e73]
                  - columnheader "First Name" [ref=e74]
                  - columnheader "Last Name" [ref=e75]
                  - columnheader "Phone" [ref=e76]
              - group [ref=e77]:
                - generic [ref=e80]:
                  - generic [ref=e81]: 0 of 0
                  - button "First page" [disabled] [ref=e82]
                  - button "Previous page" [disabled] [ref=e86]
                  - button "Next page" [disabled] [ref=e90]
                  - button "Last page" [disabled] [ref=e94]
          - figure [ref=e99]
    - text: \
```

# Test source

```ts
  1  | import logger from '../utils/logger.js';
  2  | 
  3  | export class HomePage {
  4  | constructor(page) {
  5  | this.page = page;
  6  | this.lmsTitle = page.locator('mat-toolbar span').first(); // LMS Title
  7  | this.navigationItems = page.locator('mat-toolbar button');// navigation
  8  | this.navigationBar = page.locator('mat-toolbar');
  9  | 
  10 | this.welcomeMessage = page.locator('app-admindata .top'); //welcome message
  11 | // bar chart = Active/Inactive users, doughnut = user status
  12 | this.userStatusChart = page.locator('canvas[ng-reflect-chart-type="bar"]');
  13 | this.chartLegends = page.locator('.legend, .recharts-legend-item');
  14 | this.activeLegend = page.getByText('Active', {exact:true} );
  15 | this.undefinedLegend = page.getByText('Undefined', {exact:true});
  16 | 
  17 | this.userCard = page.locator('.widget.green');
  18 | this.staffCard = page.locator('.widget.yellow');
  19 | this.batchCard = page.locator('.widget.red');
  20 | this.programCard = page.locator('.widget.blue');
  21 | 
  22 | this.staffTable = page.locator('mat-table');
  23 | this.staffTableHeaders = page.locator('mat-table mat-header-cell');
  24 | this.staffTableRows = page.locator('mat-table mat-row');
  25 | this.pagination = page.locator('mat-paginator');
  26 | this.paginationText = page.locator('.mat-paginator-range-label');
  27 | }
  28 | 
  29 | async getPageTitle() {return await this.lmsTitle.textContent();}
  30 | async getLMSTitlePosition() {return await this.lmsTitle.boundingBox();}
  31 | async getNavigationPosition() {return await this.navigationBar.boundingBox();}
  32 | async getNavigationMenuItems() {
  33 |   const items = await this.navigationItems.allTextContents();
  34 |   return items.map(t => t.trim());
  35 | }
  36 | 
  37 | async getWelcomeMessage() {return (await this.welcomeMessage.textContent()).trim();}
  38 | 
  39 | async isUserStatusChartVisible() {return await this.userStatusChart.isVisible();}
  40 | async getChartLegends() {return await this.chartLegends.allTextContents();}
> 41 | async clickChartLegend(name) {await this.page.getByText(name,{exact:true}).click();}
     |                                                                            ^ Error: locator.click: Test timeout of 30000ms exceeded.
  42 | async isActiveBarVisible() {return await this.activeLegend.isVisible().catch(()=>false);}
  43 | async isUndefinedBarVisible() {return await this.undefinedLegend.isVisible().catch(()=>false);}
  44 | 
  45 | async isUserCardVisible(){return await this.userCard.isVisible();}
  46 | async isUserCountVisible(){return await this.userCard.locator('.value .top').isVisible();}
  47 | async isUserIconVisible(){return await this.userCard.locator('.icon i').isVisible();}
  48 | async clickUserCard(){await this.userCard.click();}
  49 | async isStaffCardVisible(){return await this.staffCard.isVisible();}
  50 | 
  51 | async isBatchCardVisible(){return await this.batchCard.isVisible();}
  52 | async isBatchCountVisible(){return await this.batchCard.locator('.value .top').isVisible();}
  53 | async isBatchIconVisible(){return await this.batchCard.locator('.icon i').isVisible();}
  54 | async clickBatchCard(){await this.batchCard.click();}
  55 | 
  56 | async isProgramCardVisible(){return await this.programCard.isVisible();}
  57 | async isProgramCountVisible(){return await this.programCard.locator('.value .top').isVisible();}
  58 | async isProgramIconVisible(){return await this.programCard.locator('.icon i').isVisible();}
  59 | async clickProgramCard(){await this.programCard.click();}
  60 | 
  61 | async isStaffTableVisible(){return await this.staffTable.isVisible();}
  62 | async getStaffTableHeaders(){return await this.staffTableHeaders.allTextContents();}
  63 | async isPaginationVisible(){return await this.pagination.isVisible();}
  64 | 
  65 | async isStaffTableEmpty(){return (await this.staffTableRows.count()) === 0;}
  66 | async getPaginationText(){return (await this.paginationText.textContent()).trim();}
  67 | 
  68 | }
```