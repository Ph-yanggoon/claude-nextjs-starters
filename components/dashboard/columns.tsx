"use client"

import { type ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

const statusLabels: Record<string, string> = {
  pending: "대기 중",
  processing: "처리 중",
  success: "완료",
  failed: "실패",
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "상태",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      const variant =
        status === "success"
          ? "default"
          : status === "failed"
            ? "destructive"
            : "secondary"
      return <Badge variant={variant}>{statusLabels[status] ?? status}</Badge>
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          이메일
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <div className="text-right">
          <Button
            variant="ghost"
            onClick={() =>
              column.toggleSorting(column.getIsSorted() === "asc")
            }
          >
            금액
            <ArrowUpDown className="ml-2 size-4" />
          </Button>
        </div>
      )
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("ko-KR", {
        style: "currency",
        currency: "KRW",
      }).format(amount * 1000)
      return <div className="text-right font-medium">{formatted}</div>
    },
  },
]

export const samplePayments: Payment[] = [
  { id: "1", amount: 316, status: "success", email: "minji@example.com" },
  { id: "2", amount: 242, status: "success", email: "junho@example.com" },
  { id: "3", amount: 837, status: "processing", email: "seoyeon@example.com" },
  { id: "4", amount: 874, status: "success", email: "yujin@example.com" },
  { id: "5", amount: 721, status: "failed", email: "haeun@example.com" },
  { id: "6", amount: 453, status: "success", email: "donghyun@example.com" },
  { id: "7", amount: 129, status: "pending", email: "jiwon@example.com" },
  { id: "8", amount: 564, status: "success", email: "suhyeon@example.com" },
]
