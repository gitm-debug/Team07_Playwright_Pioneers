import logger from '../utils/logger.js';

export class HomePage {
constructor(page) {
this.page = page;
this.lmsTitle = page.locator('mat-toolbar span').first(); // LMS Title
this.navigationItems = page.locator('mat-toolbar button');// navigation
this.navigationBar = page.locator('mat-toolbar');

this.welcomeMessage = page.locator('app-admindata .top'); //welcome message
// bar chart = Active/Inactive users, doughnut = user status
this.userStatusChart = page.locator('canvas[ng-reflect-chart-type="bar"]');
this.chartLegends = page.locator('.legend, .recharts-legend-item');
this.activeLegend = page.getByText('Active', {exact:true} );
this.undefinedLegend = page.getByText('Undefined', {exact:true});

this.userCard = page.locator('.widget.green');
this.staffCard = page.locator('.widget.yellow');
this.batchCard = page.locator('.widget.red');
this.programCard = page.locator('.widget.blue');

this.staffTable = page.locator('mat-table');
this.staffTableHeaders = page.locator('mat-table mat-header-cell');
this.staffTableRows = page.locator('mat-table mat-row');
this.pagination = page.locator('mat-paginator');
this.paginationText = page.locator('.mat-paginator-range-label');
}

async getPageTitle() {return await this.lmsTitle.textContent();}
async getLMSTitlePosition() {return await this.lmsTitle.boundingBox();}
async getNavigationPosition() {return await this.navigationBar.boundingBox();}
async getNavigationMenuItems() {
  const items = await this.navigationItems.allTextContents();
  return items.map(t => t.trim());
}

async getWelcomeMessage() {return (await this.welcomeMessage.textContent()).trim();}

async isUserStatusChartVisible() {return await this.userStatusChart.isVisible();}
async getChartLegends() {return await this.chartLegends.allTextContents();}
async clickChartLegend(name) {await this.page.getByText(name,{exact:true}).click();}
async isActiveBarVisible() {return await this.activeLegend.isVisible().catch(()=>false);}
async isUndefinedBarVisible() {return await this.undefinedLegend.isVisible().catch(()=>false);}

async isUserCardVisible(){return await this.userCard.isVisible();}
async isUserCountVisible(){return await this.userCard.locator('.value .top').isVisible();}
async isUserIconVisible(){return await this.userCard.locator('.icon i').isVisible();}
async clickUserCard(){await this.userCard.click();}
async isStaffCardVisible(){return await this.staffCard.isVisible();}

async isBatchCardVisible(){return await this.batchCard.isVisible();}
async isBatchCountVisible(){return await this.batchCard.locator('.value .top').isVisible();}
async isBatchIconVisible(){return await this.batchCard.locator('.icon i').isVisible();}
async clickBatchCard(){await this.batchCard.click();}

async isProgramCardVisible(){return await this.programCard.isVisible();}
async isProgramCountVisible(){return await this.programCard.locator('.value .top').isVisible();}
async isProgramIconVisible(){return await this.programCard.locator('.icon i').isVisible();}
async clickProgramCard(){await this.programCard.click();}

async isStaffTableVisible(){return await this.staffTable.isVisible();}
async getStaffTableHeaders(){return await this.staffTableHeaders.allTextContents();}
async isPaginationVisible(){return await this.pagination.isVisible();}

async isStaffTableEmpty(){return (await this.staffTableRows.count()) === 0;}
async getPaginationText(){return (await this.paginationText.textContent()).trim();}

}