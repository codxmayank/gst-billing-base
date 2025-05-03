export const createUserQuery = `
  insert into users(name, email, mobile, password)
  values ($1, $2, $3, $4)
  returning id, name, email, mobile, created_at;
`;

export const findUserByEmailQuery = `
  select * from users where email = $1;
`;
