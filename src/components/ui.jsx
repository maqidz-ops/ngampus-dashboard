import React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import {X} from 'lucide-react'
import {clsx} from 'clsx'
import {twMerge} from 'tailwind-merge'
import {cva} from 'class-variance-authority'
export const cn=(...inputs)=>twMerge(clsx(inputs))
const variants=cva('inline-flex items-center justify-center gap-2 rounded-xl text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand disabled:opacity-50 disabled:pointer-events-none',{variants:{variant:{default:'bg-brand text-white hover:bg-brand-600',secondary:'bg-brand-50 text-brand hover:bg-brand-100',outline:'border border-slate-200 bg-white hover:bg-slate-50 text-ink',ghost:'hover:bg-slate-100 text-slate-600'},size:{default:'h-10 px-4 py-2',sm:'h-8 px-3 text-xs',lg:'h-12 px-5',icon:'h-10 w-10'}},defaultVariants:{variant:'default',size:'default'}})
export const Button=React.forwardRef(({className,variant,size,...props},ref)=><button ref={ref} className={cn(variants({variant,size,className}))} {...props}/>)
export const Card=({className,...props})=><div className={cn('rounded-2xl border border-slate-100 bg-white shadow-soft',className)} {...props}/>
export const CardHeader=({className,...props})=><div className={cn('p-5 pb-2',className)} {...props}/>
export const CardContent=({className,...props})=><div className={cn('p-5',className)} {...props}/>
export const Badge=({className,...props})=><span className={cn('inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold',className)} {...props}/>
export const Input=({className,...props})=><input className={cn('h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/10',className)} {...props}/>
export const Dialog=DialogPrimitive.Root
export const DialogTrigger=DialogPrimitive.Trigger
export const DialogContent=({children,className,...props})=><DialogPrimitive.Portal><DialogPrimitive.Overlay className="fixed inset-0 z-40 bg-slate-950/50"/><DialogPrimitive.Content className={cn('fixed left-1/2 top-1/2 z-50 max-h-[90vh] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl focus:outline-none',className)} {...props}>{children}<DialogPrimitive.Close className="absolute right-5 top-5 text-slate-400 hover:text-ink"><X size={18}/></DialogPrimitive.Close></DialogPrimitive.Content></DialogPrimitive.Portal>
export const DialogTitle=DialogPrimitive.Title
export const DialogDescription=DialogPrimitive.Description
