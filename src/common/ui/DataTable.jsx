function DataTable({ columns, rows, search, onSearchChange, sortConfig, onSortChange, emptyMessage }) {
	const safeRows = Array.isArray(rows) ? rows : [];

	return (
		<div>
			<div className="table-toolbar">
				<input value={search ?? ""} onChange={(event) => onSearchChange?.(event.target.value)} placeholder="Search records" />
			</div>
			<div className="table-wrapper">
				<table>
					<thead>
						<tr>
							{(columns ?? []).map((column) => (
								<th key={column.key} onClick={() => onSortChange?.(column.key)} className={sortConfig?.key === column.key ? "is-sorted" : ""}>
									{column.label}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{safeRows.length === 0 ? (
							<tr>
								<td colSpan={(columns ?? []).length}>{emptyMessage}</td>
							</tr>
						) : (
							safeRows.map((row, index) => {
								const safeRow = row && typeof row === "object" ? row : {};
								const rowKey = safeRow.id ?? safeRow.studentId ?? safeRow.enrollmentId ?? safeRow.gradeId ?? index;

								return (
									<tr key={rowKey}>
										{(columns ?? []).map((column) => (
											<td key={`${rowKey}-${column.key}`}>{safeRow[column.key]}</td>
										))}
									</tr>
								);
							})
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default DataTable;
