export class ProgramPage {
  constructor(page) {
    this.page = page;
    this.programNameHeader = 'th[psortablecolumn="programName"]';
    this.programDescriptionHeader = 'th[psortablecolumn="programDescription"]';
    this.programStatusHeader = 'th[psortablecolumn="programStatus"]';
  }

  async navigate() {
    await this.page.goto('/program');
    await this.page.waitForLoadState('networkidle');
  }

  async clickProgramNameArrow() {
    await this.page.click(this.programNameHeader);
  }

  async clickProgramDescriptionArrow() {
    await this.page.click(this.programDescriptionHeader);
  }

  async clickProgramStatusArrow() {
    await this.page.click(this.programStatusHeader);
  }

  async getProgramNames() {
    return await this.page.$$eval('table tbody tr td:nth-child(2)', els =>
      els.map(el => el.textContent.trim())
    );
  }

  async getProgramDescriptions() {
    return await this.page.$$eval('table tbody tr td:nth-child(3)', els =>
      els.map(el => el.textContent.trim())
    );
  }

  async getProgramStatuses() {
    return await this.page.$$eval('table tbody tr td:nth-child(4)', els =>
      els.map(el => el.textContent.trim())
    );
  }

  isSortedAscending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].localeCompare(arr[i + 1]) > 0) return false;
    }
    return true;
  }

  isSortedDescending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].localeCompare(arr[i + 1]) < 0) return false;
    }
    return true;
  }
}
