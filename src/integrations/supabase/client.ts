
// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://rxinscfrpzurrxgboeln.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4aW5zY2ZycHp1cnJ4Z2JvZWxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0OTg0NzEsImV4cCI6MjA2MDA3NDQ3MX0.7iFJcZbzNTU3KViE3ENBPHKLg3cbpoIXVFy4Af6u_lQ";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
