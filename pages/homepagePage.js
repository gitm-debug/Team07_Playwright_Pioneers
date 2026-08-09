import { expect } from '@playwright/test';
import logger from '../utils/logger.js';

export class HomePage {
constructor(page) {
this.page = page;
this.lmsTitle = page.getByText(' LMS - Learning Management System ',{ exact: false }); // LMS Title
this.navigationItems = page.locator('mat-toolbar a');// navigation

this.welcomeMessage = page.locator('text=/Welcome/i'); //welcome message
this.userStatusChart = page.locator('canvas.chartjs-render-monitor');
//this.activeInactiveChart = page.locator('canvas').first(); // charts
this.chartLegends = page.locator('.legend, .recharts-legend-item');
this.activeLegend = page.getByText('Active', {exact:true} );
this.undefinedLegend = page.getByText('Undefined', {exact:true});

this.userCard = page.locator('.card').filter({has: page.getByText('Users')});
this.staffCard = page.locator('.card').filter({has: page.getByText('Staff')});
this.batchCard = page.locator('.card').filter({has: page.getByText('Batch')});
this.programCard = page.locator('.card').filter({has: page.getByText('Program')});


this.staffTable = page.locator('table');
this.staffTableHeaders = page.locator('table thead tr th');
this.staffTableRows = page.locator('table tbody tr');
//this.pagination = page.locator('.pagination');
this.pagination = page.locator('.pagination').first();
this.paginationText = page.locator('text=/of/i');
}

async getPageTitle() {return await this.lmsTitle.textContent();}
async getLMSTitlePosition() {return await this.lmsTitle.boundingBox();}
async getNavigationPosition() {return await this.navigationBar.boundingBox();}
async getNavigationMenuItems() {return await this.navigationItems.allTextContents();}

async getWelcomeMessage() {return await this.welcomeMessage.textContent();}

//async isActiveInactiveChartVisible() {return await this.activeInactiveChart.isVisible();}
async isUserStatusChartVisible() {return await this.userStatusChart.isVisible();}
async getChartLegends() {return await this.chartLegends.allTextContents();}
async clickChartLegend(name) {await this.page.getByText(name,{exact:true}).click();}
async isActiveBarVisible() {return await this.page.locator('[data-label="Active"]').isVisible().catch(()=>false);}
async isUndefinedBarVisible() {return await this.page.locator('[data-label="Undefined"]').isVisible().catch(()=>false);}

async isUserCardVisible(){return await this.userCard.isVisible();}
async isUserCountVisible(){return await this.userCard.locator('text=/[0-9]+/').isVisible();}
async isUserIconVisible(){return await this.userCard.locator('svg, i').isVisible();}
async clickUserCard(){await this.userCard.click();}
async isStaffCardVisible(){return await this.staffCard.isVisible();}

async isBatchCardVisible(){return await this.batchCard.isVisible();}
async isBatchCountVisible(){return await this.batchCard.locator('text=/[0-9]+/').isVisible();}
async isBatchIconVisible(){return await this.batchCard.locator('svg,i').isVisible();}
async clickBatchCard(){await this.batchCard.click();}

async isProgramCardVisible(){return await this.programCard.isVisible();}
async isProgramCountVisible(){return await this.programCard.locator('text=/[0-9]+/').isVisible();}
async isProgramIconVisible(){return await this.programCard.locator('svg,i').isVisible();}
async clickProgramCard(){await this.programCard.click();}

async isStaffTableVisible(){return await this.staffTable.isVisible();}
async getStaffTableHeaders(){return await this.staffTableHeaders.allTextContents();}
async isPaginationVisible(){return await this.pagination.isVisible();}

async isStaffTableEmpty(){return (await this.staffTableRows.count()) === 0;}
async getPaginationText(){return await this.paginationText.textContent();}

}