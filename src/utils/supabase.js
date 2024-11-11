// @ts-nocheck
import { createClient } from "@supabase/supabase-js";

// Use environment variables for Supabase URL and Key
export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabaseClient = (supabaseAccessToken) => {
  // Initialize Supabase with the token for authenticated requests
  return createClient(supabaseUrl, supabaseKey, {
    global: {
      headers: {
        Authorization: `Bearer ${supabaseAccessToken}`, // Use access token for requests
      },
    },
  });
};

export default supabaseClient;
