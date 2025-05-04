const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
𝐋ᴀᴋᴀ-𝐌ᴅ=osAWTahY#0Q-XoGxy27qHEAJYmvCJz9UZ0DT93GdnuVk7WfYHNwg: process.env.𝐋ᴀᴋᴀ-𝐌ᴅ=osAWTahY#0Q-XoGxy27qHEAJYmvCJz9UZ0DT93GdnuVk7WfYHNwg || "𝐋ᴀᴋᴀ-𝐌ᴅ=osAWTahY#0Q-XoGxy27qHEAJYmvCJz9UZ0DT93GdnuVk7WfYHNwg",
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgresql://postgres:lakamd@db.ndduyrkebubwlbwiljee.supabase.co:5432/postgres' : process.env.POSTGRESQL_URL
};
