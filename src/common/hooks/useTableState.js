import { useEffect, useMemo, useState } from "react";

function normalizeRows(value) {
	return Array.isArray(value) ? value : [];
}

export function useTableState(initialRows, defaultKey, defaultDirection = "asc") {
	const [rows, setRows] = useState(() => normalizeRows(initialRows));
	const [search, setSearch] = useState("");
	const [sortConfig, setSortConfig] = useState({ key: defaultKey, direction: defaultDirection });

	useEffect(() => {
		setRows(normalizeRows(initialRows));
	}, [initialRows]);

	const visibleRows = useMemo(() => {
		const safeRows = normalizeRows(rows);
		const query = search.trim().toLowerCase();
		const filtered = !query
			? safeRows
			: safeRows.filter((row) => {
					if (!row || typeof row !== "object") return false;
					return Object.values(row).some((value) => String(value).toLowerCase().includes(query));
				});

		const sorted = [...filtered].sort((left, right) => {
			const leftValue = left?.[sortConfig.key];
			const rightValue = right?.[sortConfig.key];

			if (typeof leftValue === "number" && typeof rightValue === "number") {
				return leftValue - rightValue;
			}

			return String(leftValue ?? "").localeCompare(String(rightValue ?? ""));
		});

		return sortConfig.direction === "desc" ? sorted.reverse() : sorted;
	}, [rows, search, sortConfig]);

	return { rows, setRows, search, setSearch, sortConfig, setSortConfig, visibleRows };
}
