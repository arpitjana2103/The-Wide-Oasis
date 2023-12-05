import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://fvjdkdcutddhvbuwaril.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2amRrZGN1dGRkaHZidXdhcmlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE2NjY3MDcsImV4cCI6MjAxNzI0MjcwN30.Sm46OTmQQPTp9l7vAzDKMsB9HL-lvQIAy5Gk0cuBhvI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
