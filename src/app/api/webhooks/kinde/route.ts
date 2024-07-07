import { NextResponse } from "next/server";
import jwksClient from "jwks-rsa";
import jwt from "jsonwebtoken";

import {
  createUserAction,
  deleteUserAction,
  updateUserAction,
} from "@/backend/presentation/user";

type HEADER_TYPE = {
  alg: string;
  kid: string;
  typ: string;
};

type EVENT_TYPE = {
  type: "user.updated" | "user.created" | "user.deleted";
  data: {
    user: {
      id: string;
      first_name: string;
      last_name: string;
      email: string;
    };
  };
};

const client = jwksClient({
  jwksUri: `${process.env.KINDE_ISSUER_URL}/.well-known/jwks.json`,
});

export async function POST(req: Request) {
  try {
    // Get the token from the request
    const token = await req.text();
    if (!token) {
      throw new Error("Missing token");
    }

    // Decode the token
    const header = jwt.decode(token, { complete: true }) as HEADER_TYPE | null;
    if (!header) {
      throw new Error("Invalid token");
    }

    const { kid } = header;

    // Verify the token
    const key = await client.getSigningKey(kid);
    const signingKey = key.getPublicKey();
    const event = (await jwt.verify(token, signingKey)) as EVENT_TYPE;

    // Handle various events
    switch (event?.type) {
      case "user.updated":
        await updateUserAction(
          {
            firstName: event.data.user.first_name,
            lastName: event.data.user.last_name,
            email: event.data.user.email,
          },
          event.data.user.id
        );
        break;
      case "user.created":
        await createUserAction({
          userId: event.data.user.id,
          firstName: event.data.user.first_name,
          lastName: event.data.user.last_name,
          email: event.data.user.email,
        });
        break;
      case "user.deleted":
        await deleteUserAction(event.data.user.id);
        break;
      default:
        console.log(`🔴 Event type not supported`);
        break;
    }
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
      return NextResponse.json({ message: err.message }, { status: 400 });
    }
  }
  return NextResponse.json({ status: 200, statusText: "success" });
}
