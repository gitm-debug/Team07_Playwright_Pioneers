import fs from 'fs';
import path from 'path';

const LOG_DIR = path.resolve('logs');
const LOG_FILE = path.join(LOG_DIR, 'test.log');

if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR, { recursive: true });
}

// Clear log file on each run
fs.writeFileSync(LOG_FILE, '');

const COLORS = {
  INFO: '\x1b[36m',
  WARN: '\x1b[33m',
  ERROR: '\x1b[31m',
  DEBUG: '\x1b[35m',
  RESET: '\x1b[0m',
};

function timestamp() {
  return new Date().toISOString();
}

function formatMsg(level, msg, data) {
  const ts = timestamp();
  const prefix = data !== undefined ? ` ${JSON.stringify(data)}` : '';
  return `[${ts}] [${level}] ${msg}${prefix}`;
}

function writeToFile(formatted) {
  fs.appendFileSync(LOG_FILE, formatted + '\n');
}

const logger = {
  info(msg, data) {
    const formatted = formatMsg('INFO', msg, data);
    console.log(`${COLORS.INFO}${formatted}${COLORS.RESET}`);
    writeToFile(formatted);
  },

  warn(msg, data) {
    const formatted = formatMsg('WARN', msg, data);
    console.warn(`${COLORS.WARN}${formatted}${COLORS.RESET}`);
    writeToFile(formatted);
  },

  error(msg, data) {
    const formatted = formatMsg('ERROR', msg, data);
    console.error(`${COLORS.ERROR}${formatted}${COLORS.RESET}`);
    writeToFile(formatted);
  },

  debug(msg, data) {
    const formatted = formatMsg('DEBUG', msg, data);
    console.log(`${COLORS.DEBUG}${formatted}${COLORS.RESET}`);
    writeToFile(formatted);
  },

  step(msg) {
    const formatted = formatMsg('STEP', msg);
    console.log(`${COLORS.INFO}  ➜ ${formatted}${COLORS.RESET}`);
    writeToFile(formatted);
  },
};

export default logger;
