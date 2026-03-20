'use server'

import { createClient } from '@supabase/supabase-js'
import { redirect } from 'next/navigation'

export async function joinWaitlist(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const instagram = formData.get('instagram') as string

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    console.warn("Supabase credentials missing. Make sure to add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local");
  } else {
    try {
      const supabase = createClient(supabaseUrl, supabaseKey)
      
      const { error } = await supabase
        .from('waitlists')
        .insert([{ name, email, instagram }])

      if (error) {
        console.error("Error inserting waitlist record:", error);
      }
    } catch (err) {
      console.error("Supabase Client error:", err)
    }
  }

  // Always redirect to success to keep UX smooth
  redirect('/waitlist-success')
}
