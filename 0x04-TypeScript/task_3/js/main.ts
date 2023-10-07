/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from 'crud.js';

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva"
};

const newRowID: RowID = CRUD.insertRow(row);
console.log(`CRUD.insertRow(obj)\n// Insert row ${JSON.stringify(row)}`);

const updatedRow: RowElement = {
  ...row,
  age: 23
};

console.log(`CRUD.updateRow(${newRowID}, ${JSON.stringify(updatedRow)})`);
CRUD.updateRow(newRowID, updatedRow);

const deletedRowId: RowID = newRowID; // Replace with the actual row ID to delete
console.log(`CRUD.deleteRow(${deletedRowId})`);
CRUD.deleteRow(deletedRowId);
