# Mori setup (Windows + VS Code)

1. Install Node.js 22 LTS, Git for Windows and VS Code.
2. Run `npm install`, then copy `.env.example` to `.env.local`.
3. Create a MongoDB Atlas project, a database user, and add your current IP for local development. Copy the Node.js driver connection string into `MONGODB_URI`; set `MONGODB_DB=mori`.
4. Generate a 32-byte token in PowerShell:

```powershell
$bytes = New-Object byte[] 32
[Security.Cryptography.RandomNumberGenerator]::Fill($bytes)
$MORI_ACCESS_TOKEN = [Convert]::ToHexString($bytes).ToLower()
$MORI_ACCESS_TOKEN
```

Set it as `MORI_ACCESS_TOKEN`. The personal URL format is `https://YOUR-DOMAIN/#key=YOUR_TOKEN`. Anyone holding that link can access the same shared space; treat it like a password.
5. Run `npm run dev` and open http://localhost:3000/#key=YOUR_TOKEN.
6. In Vercel, import this GitHub repository and add `MONGODB_URI`, `MONGODB_DB`, and `MORI_ACCESS_TOKEN` as environment variables. Add `OPENAI_API_KEY` only for AI flashcards. Redeploy after changing environment variables.

Never commit `.env.local`, never expose secrets with `NEXT_PUBLIC_`, use HTTPS, restrict Atlas network access, and back up your database. Do not leave Atlas open to all IPs as a permanent shortcut.

Verify with `npm run typecheck` and `npm run build` after installation.
