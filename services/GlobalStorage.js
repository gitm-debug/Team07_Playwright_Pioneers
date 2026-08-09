// Global singleton for sharing data across steps and feature files

class GlobalStorage {
  constructor() {

    this.programs = [];
    this.currentProgram = null;
    // Store context data for sharing between steps within a scenario
    this.context = {};
  }

  addProgram(programData) {
    const program = {
      id: `prog_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name: programData.name,
      description: programData.description || '',
      status: programData.status || 'Active',
      createdAt: new Date().toISOString(),
      ...programData
    };

    this.programs.push(program);
    this.currentProgram = program;

    console.log(` Program added to storage: ${program.name}`);
    return program;
  }

  getCount() {
    return this.programs.length;
  }

  getProgramForEdit() {
    return this.programs[0] || null;
  }

  getProgramForDelete() {
    return this.programs[1] || this.programs[0] || null;
  }

  getProgramForBatch() {
    if (!this.programs) return null;
    return this.programs[2] || this.programs[0] || null;
  }

  getLastProgram() {
    return this.programs[this.programs.length - 1] || null;
  }

  getLastProgramName() {
    return this.currentProgram?.name || this.getLastProgram()?.name || null;
  }

  getLastProgramId() {
    return this.currentProgram?.id || this.getLastProgram()?.id || null;
  }

  getProgramByName(name) {
    return this.programs.find(p => p.name === name) || null;
  }

  getAllPrograms() {
    return this.programs;
  }

  hasProgram(name) {
    return this.programs.some(p => p.name === name);
  }

  clearPrograms() {
    this.programs = [];
    this.currentProgram = null;
    console.log('All programs cleared from storage');
  }

  setContext(key, value) {
    this.context[key] = value;
    console.log(`Context set: ${key} = ${value}`);
  }

  getContext(key) {
    return this.context[key] || null;
  }

  clearContext() {
    this.context = {};
    console.log('All context cleared');
  }

  clearAll() {
    this.programs = [];
    this.currentProgram = null;
    this.context = {};
    console.log('All storage cleared');
  }

}

export const globalStorage = new GlobalStorage();