import create from "zustand";

import { Operation } from "./types";

export type AdderRow = {
  id: number;
  value: number;
  operation: Operation.Add | Operation.Subtract;
  disabled: boolean;
};

type AdderState = {
  idx: number;
  result: number;
  rows: AdderRow[];
  addRow: () => void;
  updateValue: (id: number, value: number) => void;
  setRowOperation: (index: number, operation: Operation) => void;
  toggleDisableRow: (index: number) => void;
  deleteRow: (index: number) => void;
};

const initialRow: AdderRow = {
  id: 0,
  value: 0,
  operation: Operation.Add,
  disabled: false,
};

const caculateResult = (rows: AdderRow[]) => {
  return rows.reduce((acc, row) => {
    if (row.disabled) {
      return acc;
    }
    if (row.operation === Operation.Add) {
      return acc + row.value;
    }
    return acc - row.value;
  }, 0);
};

export const useAdderStore = create<AdderState>((set) => ({
  idx: 0,
  result: 0,
  rows: [initialRow],
  addRow: () => {
    set((state) => {
      const idx = state.idx + 1;
      return {
        idx,
        rows: [...state.rows, { ...initialRow, id: idx }],
      };
    });
  },
  updateValue: (id, value) => {
    set((state) => {
      const rows = state.rows.map((row) => {
        if (row.id === id) {
          return { ...row, value };
        }
        return row;
      });

      return {
        rows,
        result: caculateResult(rows),
      };
    });
  },
  setRowOperation: (id, operation) => {
    set((state) => {
      const rows = state.rows.map((row) => {
        if (row.id === id) {
          return { ...row, operation };
        }
        return row;
      });

      return {
        rows,
        result: caculateResult(rows),
      };
    });
  },
  toggleDisableRow: (id) => {
    set((state) => {
      const rows = state.rows.map((row) => {
        if (row.id === id) {
          return { ...row, disabled: !row.disabled };
        }
        return row;
      });

      return {
        rows,
        result: caculateResult(rows),
      };
    });
  },
  deleteRow: (id) => {
    set((state) => {
      const rows = state.rows.filter((row) => row.id !== id);

      return {
        rows,
        result: caculateResult(rows),
      };
    });
  },
}));
