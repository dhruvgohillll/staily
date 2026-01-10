import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';
import { User } from '../types/user.js';

const DB_PATH = join(process.cwd(), 'data', 'users.json');

// Ensure data directory exists
import { mkdirSync } from 'fs';
const dataDir = join(process.cwd(), 'data');
if (!existsSync(dataDir)) {
  mkdirSync(dataDir, { recursive: true });
}

// Initialize database file if it doesn't exist
if (!existsSync(DB_PATH)) {
  writeFileSync(DB_PATH, JSON.stringify([], null, 2));
}

export const readUsers = (): User[] => {
  try {
    const data = readFileSync(DB_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

export const writeUsers = (users: User[]): void => {
  writeFileSync(DB_PATH, JSON.stringify(users, null, 2));
};

export const findUserByEmail = (email: string): User | undefined => {
  const users = readUsers();
  return users.find(user => user.email === email);
};

export const findUserById = (id: string): User | undefined => {
  const users = readUsers();
  return users.find(user => user.id === id);
};

export const findUserByGoogleId = (googleId: string): User | undefined => {
  const users = readUsers();
  return users.find(user => user.googleId === googleId);
};

export const createUser = (user: User): User => {
  const users = readUsers();
  users.push(user);
  writeUsers(users);
  return user;
};

export const updateUser = (id: string, updates: Partial<User>): User | undefined => {
  const users = readUsers();
  const userIndex = users.findIndex(user => user.id === id);
  if (userIndex === -1) {
    return undefined;
  }
  users[userIndex] = { ...users[userIndex], ...updates };
  writeUsers(users);
  return users[userIndex];
};

