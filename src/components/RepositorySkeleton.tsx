import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import type { RepoType } from "../services/repository.type";

interface ColumnMeta {
  width?: string;
}
let data: RepoType[] = [];
for (let i = 0; i < 5; i++) {
  data = [
    ...data,
    {
      name: "",
      html_url: "",
      description: "",
      created_at: "",
      updated_at: "",
      pushed_at: "",
      stargazers_count: 0,
      watchers_count: 0,
      language: "",
      forks_count: 0,
    },
  ];
}
// console.log(data)
const RepositoriesSkeleton = () => {
  const columnHelper = createColumnHelper<RepoType>();
  const columns = [
    columnHelper.accessor("name", {
      header: "Repository",
      meta: { width: "250px" } as ColumnMeta,
      cell: () => (
        <div className="h-5 w-full bg-gray-500 animate-pulse rounded-2xl"></div>
      ),
    }),
    columnHelper.accessor("watchers_count", {
      header: "Watchers",
      meta: { width: "120px" } as ColumnMeta,
      cell: () => (
        <div className="h-5 w-full bg-gray-500 animate-pulse rounded-2xl"></div>
      ),
    }),
    columnHelper.accessor("stargazers_count", {
      header: "Stars",
      meta: { width: "120px" } as ColumnMeta,
      cell: () => (
        <div className="h-5 w-full bg-gray-500 animate-pulse rounded-2xl"></div>
      ),
    }),
    columnHelper.accessor("forks_count", {
      header: "Forks",
      meta: { width: "120px" } as ColumnMeta,
      cell: () => (
        <div className="h-5 w-full bg-gray-500 animate-pulse rounded-2xl"></div>
      ),
    }),
    columnHelper.accessor("language", {
      header: "Language",
      meta: { width: "140px" } as ColumnMeta,
      cell: () => (
        <div className="h-5 w-full bg-gray-500 animate-pulse rounded-2xl"></div>
      ),
    }),
    columnHelper.accessor("pushed_at", {
      header: "Last Updated",
      meta: { width: "150px" } as ColumnMeta,
      cell: () => (
        <div className="h-5 w-full bg-gray-500 animate-pulse rounded-2xl"></div>
      ),
    }),
  ];

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-[var(--card)] transition-all duration-500 ease-in-out rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-4">
          <h2 className="text-2xl font-bold">Repositories</h2>
          <p className="w-[100px] h-5 rounded-2xl bg-gray-500 animate-pulse"></p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-fixed">
            <thead className="bg-[var(--card)] transition-all duration-500 ease-in-out border-b border-gray-200">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer bg-transparent transition-colors"
                      style={{
                        width:
                          (header.column.columnDef.meta as ColumnMeta)?.width ||
                          "auto",
                      }}
                    >
                      <div className="flex items-center justify-center gap-2">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="bg-[var(--card)] transition-all duration-500 ease-in-out divide-y divide-gray-200">
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="px-4 py-4 text-center text-sm"
                      style={{
                        maxWidth:
                          (cell.column.columnDef.meta as ColumnMeta)?.width ||
                          "auto",
                      }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 bg-[var(--card)] transition-all duration-500 ease-in-out border-t border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-[200px] h-5 bg-gray-500 animate-pulse rounded-xl"></span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-[250px] h-5 bg-gray-500 animate-pulse rounded-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepositoriesSkeleton;
