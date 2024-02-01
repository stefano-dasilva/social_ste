import { Interface } from "readline";

const Months = [
  "Gennaio",
  "Febbraio",
  "Marzo",
  "Aprile",
  "Maggio",
  "Giugno",
  "Luglio",
  "Agosto",
  "Settembre",
  "Ottobre",
  "Novembre",
  "Dicembre"
];

interface dyinmonth {
  [key: string]: number[];
}
const daysInMonth : dyinmonth = {
  Gennaio: Array.from({ length: 31 }, (_, i) => i + 1),
  Febbraio: Array.from({ length: 28 }, (_, i) => i + 1),
  Marzo: Array.from({ length: 31 }, (_, i) => i + 1),
  Aprile: Array.from({ length: 30 }, (_, i) => i + 1),
  Maggio: Array.from({ length: 31 }, (_, i) => i + 1),
  Giugno: Array.from({ length: 30 }, (_, i) => i + 1),
  Luglio: Array.from({ length: 31 }, (_, i) => i + 1),
  Agosto: Array.from({ length: 31 }, (_, i) => i + 1),
  Settembre: Array.from({ length: 30 }, (_, i) => i + 1),
  Ottobre: Array.from({ length: 31 }, (_, i) => i + 1),
  Novembre: Array.from({ length: 30 }, (_, i) => i + 1),
  Dicembre: Array.from({ length: 31 }, (_, i) => i + 1),
};


const year  = Array.from({ length: 121 }, (_, i) => 2024 - i);




export {Months, daysInMonth, year}
