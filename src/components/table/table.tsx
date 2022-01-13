import { StyledTable, StyledTableBody, StyledTableHead, StyledTableRow, StyledTd, StyledTh } from './table.styled';

interface SubComponents {
	Body: typeof StyledTableBody;
	Head: typeof StyledTableHead;
	Row: typeof StyledTableRow;
	Th: typeof StyledTh;
	Td: typeof StyledTd;
}

// @ts-ignore
export const Table: typeof StyledTable & SubComponents = StyledTable;

Table.Body = StyledTableBody;
Table.Head = StyledTableHead;
