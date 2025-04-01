//This is a dummy db for testing route handlers

import { users } from "../route";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const user = users.find((user) => user.id === parseInt(id));
  return Response.json(user);
}
