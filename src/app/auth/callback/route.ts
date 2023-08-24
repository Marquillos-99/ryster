import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import cookies from "next/cookies";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const supabase = createRouteHandlerClient({ cookies });
}
