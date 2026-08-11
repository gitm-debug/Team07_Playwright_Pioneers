
class GlobalStorage {
  constructor() {

    this.programs = [];
    this.batches = [];

    this.currentProgram = null;
    this.currentBatch = null;
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
    return program;
  }

  addBatch(batchData) {
    const batch = {
      id: `batch_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
      ...batchData,
      createdAt: new Date().toISOString()
    };

    this.batches.push(batch);
    this.currentBatch = batch;

    return batch;
  }

  getLastBatch() {
    return this.currentBatch ||
           this.batches[this.batches.length - 1] ||
           null;
  }

  getPreviousBatch() {
    return this.batches[this.batches.length - 2] || null;
  }

  getCount() {
    return this.programs.length;
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

  // getLastProgramName() {
  //   return this.currentProgram?.name || this.getLastProgram()?.name || null;
  // }  

  // getProgramByName(name) {
  //   return this.programs.find(p => p.name === name) || null;
  // }

  getAllPrograms() {
    return this.programs;
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

}

export const globalStorage = new GlobalStorage();