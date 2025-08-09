"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { BrandButton } from "@/components/ui/brand-button"
import { Loader2 } from "lucide-react"
import type { PromptParameter } from "@/types/prompt"

interface PromptParameterFormProps {
  parameters: PromptParameter[]
  onSubmit: (values: Record<string, any>) => Promise<void>
  isGenerating?: boolean
}

export function PromptParameterForm({ parameters, onSubmit, isGenerating = false }: PromptParameterFormProps) {
  // Dynamically create a schema based on the parameters
  const createSchema = () => {
    const shape: Record<string, any> = {}

    parameters.forEach((param) => {
      if (param.required) {
        if (param.type === "text" || param.type === "textarea") {
          shape[param.name] = z.string().min(1, { message: "This field is required" })
        } else if (param.type === "select") {
          shape[param.name] = z.string().min(1, { message: "Please select an option" })
        } else if (param.type === "number") {
          shape[param.name] = z.number().min(0)
        } else if (param.type === "boolean") {
          shape[param.name] = z.boolean()
        }
      } else {
        if (param.type === "text" || param.type === "textarea" || param.type === "select") {
          shape[param.name] = z.string().optional()
        } else if (param.type === "number") {
          shape[param.name] = z.number().optional()
        } else if (param.type === "boolean") {
          shape[param.name] = z.boolean().optional()
        }
      }
    })

    return z.object(shape)
  }

  const schema = createSchema()

  // Create default values
  const defaultValues: Record<string, any> = {}
  parameters.forEach((param) => {
    if (param.type === "boolean") {
      defaultValues[param.name] = param.default !== undefined ? param.default : false
    } else if (param.type === "number") {
      defaultValues[param.name] = param.default !== undefined ? param.default : 0
    } else {
      defaultValues[param.name] = param.default !== undefined ? param.default : ""
    }
  })

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues,
  })

  const handleSubmit = async (values: z.infer<typeof schema>) => {
    try {
      await onSubmit(values)
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {parameters.map((param) => (
            <FormField
              key={param.name}
              control={form.control}
              name={param.name}
              render={({ field }) => (
                <FormItem className={param.type === "textarea" ? "md:col-span-2" : ""}>
                  <FormLabel>{param.name.charAt(0).toUpperCase() + param.name.slice(1)}</FormLabel>

                  {param.type === "text" && (
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  )}

                  {param.type === "textarea" && (
                    <FormControl>
                      <Textarea {...field} rows={4} />
                    </FormControl>
                  )}

                  {param.type === "select" && (
                    <FormControl>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          {param.options?.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                  )}

                  {param.type === "number" && (
                    <FormControl>
                      <Input type="number" {...field} onChange={(e) => field.onChange(Number(e.target.value))} />
                    </FormControl>
                  )}

                  {param.type === "boolean" && (
                    <FormControl>
                      <div className="flex items-center space-x-2">
                        <Switch checked={field.value} onCheckedChange={field.onChange} />
                        <span className="text-sm text-gray-500">{field.value ? "Yes" : "No"}</span>
                      </div>
                    </FormControl>
                  )}

                  <FormDescription>{param.description}</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </div>

        <div className="flex justify-end">
          <BrandButton type="submit" variant="blue" size="lg" disabled={isGenerating}>
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              "Generate Content"
            )}
          </BrandButton>
        </div>
      </form>
    </Form>
  )
}
