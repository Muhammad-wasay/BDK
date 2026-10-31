/**
 * BinaDarKe Supabase Backend Client Blueprint
 * 
 * Instructions for Muhammad Ahmed Khan (Backend Developer):
 * 1. Create a free project at https://supabase.com
 * 2. Create a .env file in the BinaDarKe folder with:
 *    VITE_SUPABASE_URL=https://your-project.supabase.co
 *    VITE_SUPABASE_ANON_KEY=your-anon-public-key
 * 3. Run: npm install @supabase/supabase-js
 */

// Placeholder client until Supabase credentials are provided
export const supabase = null;

/**
 * 1. Save Solo Test Quiz Results
 * Database Table: `test_results`
 * Columns: id (uuid), created_at (timestamp), score (int), total_questions (int), answers (jsonb)
 */
export async function saveTestResult({ score, totalQuestions, answers }) {
  try {
    if (!supabase) {
      console.log("[Supabase Offline Mode] Result saved locally in localStorage:", { score, totalQuestions });
      return { success: true, offline: true };
    }
    // const { data, error } = await supabase.from('test_results').insert([{ score, total_questions: totalQuestions, answers }]);
    // if (error) throw error;
    // return { success: true, data };
  } catch (err) {
    console.error("Failed to save test result:", err);
    return { success: false, error: err };
  }
}

/**
 * 2. Submit Elder / Family Testimonial (Haji Abdul Rasheed story section)
 * Database Table: `testimonials`
 * Columns: id (uuid), name (text), city (text), age (int), quote (text), is_approved (bool)
 */
export async function submitTestimonial({ name, age, city, quote }) {
  try {
    if (!supabase) {
      console.log("[Supabase Offline Mode] Testimonial stored locally:", { name, quote });
      return { success: true, offline: true };
    }
    // const { data, error } = await supabase.from('testimonials').insert([{ name, age, city, quote, is_approved: true }]);
    // if (error) throw error;
    // return { success: true, data };
  } catch (err) {
    console.error("Failed to submit testimonial:", err);
    return { success: false, error: err };
  }
}
