import * as React from "react"
import { CheckCircle2, Minus } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

function PricingTable({
    className,
    children,
    ...props
}: React.ComponentProps<'table'> & { children: React.ReactNode }) {
    return (
        <div
            data-slot="table-container"
            className="relative w-full overflow-x-auto"
        >
            <table className={cn('w-full text-sm', className)} {...props}>
                {children}
            </table>
        </div>
    );
}

const PricingTableHeader = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
))
PricingTableHeader.displayName = "PricingTableHeader"

const PricingTableBody = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <tbody
        ref={ref}
        className={cn("[&_tr:last-child]:border-0", className)}
        {...props}
    />
))
PricingTableBody.displayName = "PricingTableBody"

const PricingTableRow = React.forwardRef<
    HTMLTableRowElement,
    React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
    <tr
        ref={ref}
        className={cn(
            "border-b border-border/50 transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
            className
        )}
        {...props}
    />
))
PricingTableRow.displayName = "PricingTableRow"

const PricingTableHead = React.forwardRef<
    HTMLTableCellElement,
    React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
    <th
        ref={ref}
        className={cn(
            "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
            className
        )}
        {...props}
    />
))
PricingTableHead.displayName = "PricingTableHead"

const PricingTableCell = React.forwardRef<
    HTMLTableCellElement,
    React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, children, ...props }, ref) => {
    const content = React.useMemo(() => {
        if (typeof children === "boolean") {
            return children ? (
                <CheckCircle2 className="mx-auto h-5 w-5 text-primary" />
            ) : (
                <Minus className="mx-auto h-5 w-5 text-muted-foreground/50" />
            )
        }
        return <span className="flex justify-center text-center">{children}</span>
    }, [children])

    return (
        <td
            ref={ref}
            className={cn(
                "p-4 align-middle [&:has([role=checkbox])]:pr-0",
                className
            )}
            {...props}
        >
            {content}
        </td>
    )
})
PricingTableCell.displayName = "PricingTableCell"

interface PricingTablePlanProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string
    price: string
    badge?: string
    icon: React.ElementType
}

const PricingTablePlan = React.forwardRef<
    HTMLDivElement,
    PricingTablePlanProps
>(({ className, name, price, badge, icon: Icon, children, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "relative flex h-full flex-col justify-between rounded-xl border bg-card p-6 text-card-foreground shadow-sm",
            className
        )}
        {...props}
    >
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <Icon className="h-6 w-6 text-primary" />
                {badge && (
                    <Badge variant="secondary" className="rounded-full">
                        {badge}
                    </Badge>
                )}
            </div>
            <div>
                <h3 className="font-semibold text-lg">{name}</h3>
                <div className="mt-2 flex items-baseline text-3xl font-bold">
                    {price}
                    {price !== "Custom" && <span className="text-sm font-normal text-muted-foreground ml-1">/mo</span>}
                </div>
            </div>
        </div>
        <div className="mt-6">
            {children}
        </div>
    </div>
))
PricingTablePlan.displayName = "PricingTablePlan"

export interface FeatureItem {
    label: string
    values: (string | boolean)[]
}

export {
    PricingTable,
    PricingTableHeader,
    PricingTableBody,
    PricingTableRow,
    PricingTableHead,
    PricingTableCell,
    PricingTablePlan,
}
