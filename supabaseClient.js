import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lcydtwzqlarajmrpefix.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxjeWR0d3pxbGFyYWptcnBlZml4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwNzE0MzIsImV4cCI6MjA1ODY0NzQzMn0.XJrtVivBoCBF26KXad3wYyWA99LoC1arELYA7doIag4';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
