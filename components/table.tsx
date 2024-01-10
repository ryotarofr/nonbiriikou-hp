"use client"

import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import React from 'react';

type Program = {
  time: string;
  program: string;
};

const programs: Program[] = [
  {
    time: '8:00 ~ 10:00',
    program: 'お迎え',
  },
  {
    time: '10:00 ~ 10:10',
    program: 'ストレッチ体操・朝礼',
  },
  {
    time: '10:10 ~ 11:00',
    program: '作業訓練',
  },
  {
    time: '11:00 ~ 11:10',
    program: '休憩',
  },
  {
    time: '11:10 ~ 12:00',
    program: '作業訓練',
  },
  {
    time: '12:00 ~ 13:00',
    program: '昼食休憩',
  },
  {
    time: '13:00 ~ 14:00',
    program: '作業訓練',
  },
  {
    time: '14:00 ~ 14:10',
    program: '休憩',
  },
  {
    time: '14:10 ~ 14:45',
    program: '作業訓練',
  },
  {
    time: '14:45 ~ 15:00',
    program: '掃除',
  },
  {
    time: '15:00 ~',
    program: '終礼・送迎',
  },
];

const programs2: Program[] = [
  {
    time: '8:00 ~ 10:00',
    program: 'お迎え',
  },
  {
    time: '10:00 ~ 10:10',
    program: 'ストレッチ体操・朝礼',
  },
  {
    time: '10:10 ~ 11:00',
    program: 'グローイング・セミナー',
  },
  {
    time: '11:00 ~ 12:00',
    program: '調理実習',
  },
  {
    time: '12:00 ~ 12:30',
    program: 'EAT体験',
  },
  {
    time: '12:30 ~ ',
    program: '終礼・送迎',
  },
];

const columns: ColumnDef<Program, any>[] = [
  {
    accessorKey: 'time',
    header: '時間',
  },
  {
    accessorKey: 'program',
    header: 'プログラム',
  },
];


export const BasicTable: React.FC = () => {
  const table = useReactTable<Program>({
    data: programs,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <TableContainer>
      <Table>
        <Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Th key={header.id} className='bg-blue-100 px-6 py-2'>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.map((row) => (
            <Tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Td key={cell.id} className='px-6 py-2' borderX="1px solid #e2e8f0" borderY="1px solid #e2e8f0">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export const BasicTable2: React.FC = () => {
  const table = useReactTable<Program>({
    data: programs2,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <TableContainer>
      <Table>
        <Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Th key={header.id} className='bg-orange-100 px-6 py-2'>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.map((row) => (
            <Tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Td key={cell.id} className='px-6 py-2' borderX="1px solid #e2e8f0" borderY="1px solid #e2e8f0">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};