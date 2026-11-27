import { email, number, z } from 'zod';

{
  const UserSchema = z.object({
    name: z.string(),
    age: z.number(),
    email: z.string(),
  });

  type User = z.infer<typeof UserSchema>;

  const data: User = {
    name: 'Tom',
    age: 25,
    email: 'tom@example.com',
  };

  const result = UserSchema.safeParse(data);

  if (result.success) {
    console.log('validate successfully', result.data);
  } else {
    console.log('validate failed', result.error);
  }
}

{
  const NameSchema = z.string();
  const AgeSchema = z.number();
  const ActiveSchema = z.boolean();
  const NumbersSchema = z.array(z.string());
  const UserSchema = z.object({
    name: z.string(),
    age: z.number(),
    active: z.boolean(),
    friends: z.array(z.string()),
    address: z.object({
      city: z.string(),
      zipcode: z.number(),
    }),
  });

  {
    // add rules
    const UserSchema = z.object({
      name: z.string().min(2).max(5),
      age: z.number().int().min(6).max(150),
      email: z.email(),
      active: z.boolean(),
      friends: z.array(z.string()),
    });
  }

  type User = z.infer<typeof UserSchema>;

  const data: User = {
    name: 'Tom',
    age: 20,
    active: true,
    friends: ['Jimmy', 'Tim', 'Bob'],
    address: {
      city: 'Shanghai',
      zipcode: 10001,
    },
  };

  {
    // parse
    try {
      const result = UserSchema.parse(data);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  {
    // safeParse
    const result = UserSchema.safeParse(data);
    if (result.success) {
      console.log(result.data);
    } else {
      console.log(result.error);
    }
  }

  {
    const UserSchema = z.object({
      name: z.string(),
      age: z.number().optional(),
      role: z.enum(['admin', 'user']),
      active: z.boolean().default(false),
    });
  }

  {
    const AgeSchema = z.string().transform((value) => number(value));
    // const age = AgeSchema.parse('25');
    type AgeInput = z.input<typeof AgeSchema>; // string
    type AgeOutput = z.output<typeof AgeSchema>; // number
    type AgeType = z.infer<typeof AgeSchema>; // number
  }
}

export {};
