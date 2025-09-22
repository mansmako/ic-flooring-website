# CI/CD to Afrihost‑style Shared Hosting

We build on GitHub Actions and SFTP the `./dist` folder to your `public_html`.

- Add `SFTP_HOST`, `SFTP_PORT`, `SFTP_USER`, `SFTP_PASS` secrets.
- Update `remote_path` to your path.
- Push to `main` triggers an automatic deploy.

If you later move to a VPS (Afrihost Cloud), replace SFTP step with `rsync` or Docker‑based deploy.
