Phase 1: Setup & Configuration

[ ] cusdis.com-এ গিয়ে অ্যাকাউন্ট তৈরি করে ব্লগের জন্য APP_ID সংগ্রহ করা।

[ ] Resend ড্যাশবোর্ডে গিয়ে Audience তৈরি করে AUDIENCE_ID এবং API_KEY নেওয়া।

[ ] প্রোজেক্টের .env ফাইলে RESEND_API_KEY এবং RESEND_AUDIENCE_ID যুক্ত করা।

[ ] Astro SSR বা Hybrid মোড নিশ্চিত করা (যদি API Route ব্যবহার করা হয়)।

Phase 2: Comments Section (Cusdis)

[ ] src/components/Comments.astro তৈরি করে Cusdis এম্বেড কোড বসানো।

[ ] src/layouts/BlogPost.astro বা Markdown লেআউট পেজে <Comments/> কম্পোনেন্টটি যুক্ত করা।

[ ] ডার্ক/লাইট মোডে কমেন্ট বক্সের UI রেন্ডারিং টেস্ট করা।

Phase 3: Bot Protection (Math CAPTCHA)

[ ] src/components/MathCaptcha.tsx তৈরি করা (র‍্যান্ডম যোগফল জেনারেটর ও ভ্যালিডেশন লজিক)।

[ ] রিফ্রেশ বাটন ও এরর মেসেজ হ্যান্ডলিং ঠিকমতো কাজ করছে কি না তা টেস্ট করা।

Phase 4: Newsletter Subscription (Resend)

[ ] src/pages/api/newsletter.ts API এন্ডপয়েন্ট তৈরি করা (Resend Audience Contacts-এ ইমেইল পোস্ট করার জন্য)।

[ ] src/components/Newsletter.tsx কম্পোনেন্ট তৈরি করে Math CAPTCHA ও ফর্ম সাবমিশন লজিক যুক্ত করা।

[ ] ফুটার বা ব্লগের নিচে <Newsletter client:load/> কম্পোনেন্ট প্লেস করা।

Phase 5: Unsubscribe Mechanism

[ ] src/pages/api/unsubscribe.ts তৈরি করা (Resend Contact-এ unsubscribed: true প্যাচ করার জন্য)।

[ ] src/pages/unsubscribe.astro পেজ তৈরি করা (ইউজার লিঙ্কে ক্লিক করলে কনফার্মেশন ও স্ট্যাটাস দেখানোর জন্য)।

[ ] টেস্ট ইমেইল পাঠিয়ে সাবস্ক্রাইব ও আনসাবস্ক্রাইব ফ্লো পুরো চেক করা।