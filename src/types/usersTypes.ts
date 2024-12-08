import {z} from "zod"

const userSchema = z.object({
  name: z.string(),
  password: z.string()
})

export type User = z.infer<typeof userSchema>
